// API route for voice agent - connects to n8n webhook
// For production with static export, deploy this as a Cloudflare Worker or Vercel Function

// Demo mode: Smart conversation handler (for testing without n8n)
function generateDemoResponse(message, conversationHistory) {
  const messageLower = message.toLowerCase().trim()
  const history = conversationHistory || []
  
  // Extract collected information from conversation
  let collectedDuration = null
  let collectedDate = null
  let collectedName = null
  let collectedEmail = null
  
  // Check conversation history for collected info (only from assistant responses that confirm info)
  for (const msg of history) {
    const text = (msg.text || '').toLowerCase()
    const role = msg.role || ''
    
    // Only extract from user messages (not assistant responses)
    if (role === 'user') {
      // Check for duration in user messages
      if (!collectedDuration) {
        if (text.includes('15') && (text.includes('minute') || text.includes('min'))) {
          collectedDuration = '15'
        } else if (text.includes('30') && (text.includes('minute') || text.includes('min'))) {
          collectedDuration = '30'
        }
      }
      
      // Check for date mentions in user messages
      if (!collectedDate) {
        const dateMatch = text.match(/(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|next week|this week|\d{1,2}\/\d{1,2}|\d{1,2} (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i)
        if (dateMatch) {
          collectedDate = msg.text // Keep original capitalization
        }
      }
      
      // Check for email (simple pattern)
      const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/)
      if (emailMatch) {
        collectedEmail = emailMatch[0]
      }
    }
  }
  
  // Check current message for info
  if (!collectedDuration) {
    if (messageLower.includes('15') && (messageLower.includes('minute') || messageLower.includes('min'))) {
      collectedDuration = '15'
    } else if (messageLower.includes('30') && (messageLower.includes('minute') || messageLower.includes('min'))) {
      collectedDuration = '30'
    }
  }
  
  // Check if current message contains a date
  const dateMatch = messageLower.match(/(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|next week|this week|\d{1,2}\/\d{1,2}|\d{1,2} (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i)
  if (!collectedDate && dateMatch) {
    collectedDate = message // Store the actual message text (preserves "next Wednesday" etc)
  }
  
  const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/)
  if (emailMatch) {
    collectedEmail = emailMatch[0]
  }
  
  // Simple name extraction (if user says "my name is" or "I'm")
  if (!collectedName) {
    const namePatterns = [
      /(?:my name is|i'm|i am|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/,
      /(?:call me|name's)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/
    ]
    for (const pattern of namePatterns) {
      const match = message.match(pattern)
      if (match) {
        collectedName = match[1]
        break
      }
    }
  }
  
  // Determine response based on conversation state
  if (history.length === 0 || messageLower.match(/^(hi|hello|hey|start|begin)/)) {
    return "Hi! I'm Nova. I can help you book a call with BuildVerse. Would you like a 15-minute or 30-minute call?"
  }
  
  if (!collectedDuration) {
    if (messageLower.includes('15') || messageLower.includes('thirty')) {
      collectedDuration = '15'
    } else if (messageLower.includes('30') || messageLower.includes('thirty')) {
      collectedDuration = '30'
    }
    
    if (collectedDuration) {
      return `Perfect! I can schedule a ${collectedDuration}-minute call for you. What date would you prefer? You can say something like "next Tuesday" or give me a specific date.`
    }
    return "I'd be happy to help! First, would you like a 15-minute or 30-minute call?"
  }
  
  // Check if current message contains a date
  const hasDateInMessage = messageLower.match(/(monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|next week|this week|\d{1,2}\/\d{1,2}|\d{1,2} (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i)
  const hasTimeInMessage = messageLower.match(/\d{1,2}:\d{2}|\d{1,2}\s*(am|pm|AM|PM)|morning|afternoon|evening/i)
  
  if (!collectedDate) {
    // No date collected yet
    if (hasDateInMessage) {
      // User just provided a date
      return `Great! I've noted ${message}. What time works best for you? (e.g., "2 PM", "10:30 AM")`
    }
    return "What date would work best for you? You can say something like 'next Wednesday', 'this Friday', or a specific date."
  }
  
  // Date was already collected
  if (!hasTimeInMessage) {
    // Check if user is providing a different date
    if (hasDateInMessage) {
      return `Perfect! I've updated the date to ${message}. What time works best for you?`
    }
    // Still need time
    return "What time would work best for you? Please say something like '2 PM', '10:30 AM', or 'morning'."
  }
  
  // Date and time both provided - ask for name/email
  if (hasTimeInMessage) {
    return `Excellent! So we have a ${collectedDuration}-minute call scheduled for ${collectedDate} at ${message}. Could you please provide your name and email address for confirmation?`
  }
  
  if (!collectedName) {
    if (message.match(/[A-Z][a-z]+/)) {
      // Likely a name
      collectedName = message
      if (!collectedEmail) {
        return `Thanks ${collectedName}! Could you please provide your email address for the confirmation?`
      }
    } else {
      return "Could you please tell me your name?"
    }
  }
  
  if (!collectedEmail) {
    const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/)
    if (emailMatch) {
      collectedEmail = emailMatch[0]
      return `Perfect! I have all the details. Your ${collectedDuration}-minute call is scheduled for ${collectedDate}. I'll send a confirmation email to ${collectedEmail} shortly.\n\n[Demo Mode: To actually book appointments, please set up n8n webhook with N8N_WEBHOOK_URL in .env.local]`
    }
    return "Could you please provide your email address for the confirmation email?"
  }
  
  // All info collected - confirm
  return `Perfect! I've noted all your details. I'll send you a confirmation email shortly.\n\n[Demo Mode: This is a demo. To enable actual booking, configure N8N_WEBHOOK_URL in .env.local]`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, conversationHistory } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  // Get n8n webhook URL from environment variable, default to production (active) webhook path
  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/appointment-booking'

  // Check if webhook URL is configured
  if (!n8nWebhookUrl) {
    console.warn('N8N_WEBHOOK_URL not configured or using placeholder')
    
    // Development fallback - smart demo response with conversation context
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        response: generateDemoResponse(message, conversationHistory || []),
        demo: true,
        setupRequired: true,
      })
    }

    // Production: return error if not configured
    return res.status(500).json({
      error: 'Voice agent not configured',
      message: 'n8n webhook URL is not set. Please configure N8N_WEBHOOK_URL environment variable.',
    })
  }

  try {
    // Prepare payload for n8n webhook
    // n8n expects data in this format when using Webhook node
    const payload = {
      message: message.trim(),
      conversationHistory: conversationHistory || [],
      timestamp: new Date().toISOString(),
      source: 'buildverse-voice-agent',
      agent: 'Nova',
      metadata: {
        userAgent: req.headers['user-agent'],
        timestamp: Date.now(),
      },
    }

    console.log('Calling n8n webhook:', n8nWebhookUrl)
    console.log('Payload:', JSON.stringify(payload, null, 2))

    // Call n8n webhook with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BuildVerse-VoiceAgent/1.0',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      let errorText = ''
      try {
        errorText = await response.text()
      } catch (e) {
        errorText = `Could not read error response: ${e.message}`
      }
      console.error('n8n webhook error:', response.status, errorText)
      throw new Error(`n8n webhook returned ${response.status}: ${errorText.substring(0, 200)}`)
    }

    // Parse response - n8n may return different formats
    let data
    const contentType = response.headers.get('content-type')
    
    // Get response as text first to handle incomplete JSON
    const rawResponseText = await response.text()
    
    if (contentType && contentType.includes('application/json')) {
      try {
        // Try to parse as JSON
        if (!rawResponseText || rawResponseText.trim().length === 0) {
          throw new Error('Empty response from n8n')
        }
        data = JSON.parse(rawResponseText)
      } catch (parseError) {
        console.error('JSON parse error:', parseError.message)
        console.error('Response text:', rawResponseText.substring(0, 200))
        // Return a helpful error response
        return res.status(502).json({
          error: 'Invalid JSON response from n8n',
          message: 'n8n returned invalid or incomplete JSON. Check your workflow\'s response node.',
          details: process.env.NODE_ENV === 'development' ? parseError.message : undefined,
        })
      }
    } else {
      // Not JSON content type, try to parse anyway
      try {
        if (rawResponseText && rawResponseText.trim().length > 0) {
          data = JSON.parse(rawResponseText)
        } else {
          data = { response: rawResponseText || 'Empty response from n8n' }
        }
      } catch {
        // Not JSON, treat as plain text
        data = { response: rawResponseText || 'Response received' }
      }
    }

    console.log('n8n response:', data)

    // Extract response text from various possible n8n response formats
    let responseText = null
    
    // Handle case where data might be null or undefined
    if (!data || typeof data !== 'object') {
      console.warn('n8n returned invalid data structure:', data)
      return res.status(502).json({
        error: 'Invalid response format from n8n',
        message: 'n8n workflow did not return a valid response. Check your "Respond to Webhook" node.',
      })
    }
    
    // Check common response fields
    if (data.response) responseText = data.response
    else if (data.message) responseText = data.message
    else if (data.text) responseText = data.text
    else if (data.output) responseText = typeof data.output === 'string' ? data.output : JSON.stringify(data.output)
    else if (data.body) {
      // If n8n returns nested body
      if (typeof data.body === 'string') {
        try {
          const bodyParsed = JSON.parse(data.body)
          responseText = bodyParsed.response || bodyParsed.message || bodyParsed.text || data.body
        } catch {
          responseText = data.body
        }
      } else {
        responseText = data.body.response || data.body.message || data.body.text
      }
    }
    // If response is an array (n8n can return arrays)
    else if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0]
      responseText = firstItem.response || firstItem.message || firstItem.text || JSON.stringify(firstItem)
    }
    // Fallback: use stringified response
    else {
      responseText = typeof data === 'string' ? data : JSON.stringify(data)
      // If it's too long, truncate
      if (responseText.length > 500) {
        responseText = responseText.substring(0, 500) + '...'
      }
    }

    // Final fallback if still no response
    if (!responseText || responseText.trim().length === 0) {
      responseText = 'Thank you! Your appointment request has been received. I\'ll confirm the details shortly.'
    }

    return res.status(200).json({
      response: responseText.trim(),
      data: data, // Include full response for debugging
      success: true,
    })
  } catch (error) {
    console.error('Voice agent API error:', error)
    
    // Handle specific error types
    if (error.name === 'AbortError') {
      return res.status(504).json({
        error: 'Request timeout',
        message: 'The n8n webhook did not respond in time. Please try again.',
      })
    }

    if (error.message.includes('fetch failed') || error.message.includes('ECONNREFUSED')) {
      return res.status(503).json({
        error: 'Service unavailable',
        message: 'Unable to connect to n8n webhook. Please check if your n8n instance is running and the URL is correct.',
      })
    }

    // Generic error
    return res.status(500).json({
      error: 'Failed to process voice request',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    })
  }
}

