// Cloudflare Pages Function for voice agent → n8n webhook

function generateDemoResponse(message, conversationHistory) {
  const messageLower = message.toLowerCase().trim()
  const history = conversationHistory || []
  
  let collectedDuration = null
  let collectedDate = null
  let collectedName = null
  let collectedEmail = null
  
  for (const msg of history) {
    const text = (msg.text || '').toLowerCase()
    const role = msg.role || ''
    
    if (role === 'user') {
      if (!collectedDuration) {
        if (text.includes('15') && (text.includes('minute') || text.includes('min'))) {
          collectedDuration = '15'
        } else if (text.includes('30') && (text.includes('minute') || text.includes('min'))) {
          collectedDuration = '30'
        }
      }
      
      if (!collectedDate) {
        const dateMatch = text.match(/(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|next week|this week|\d{1,2}\/\d{1,2}|\d{1,2} (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i)
        if (dateMatch) {
          collectedDate = msg.text
        }
      }
      
      const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/)
      if (emailMatch) {
        collectedEmail = emailMatch[0]
      }
    }
  }
  
  if (!collectedDuration) {
    if (messageLower.includes('15') && (messageLower.includes('minute') || messageLower.includes('min'))) {
      collectedDuration = '15'
    } else if (messageLower.includes('30') && (messageLower.includes('minute') || messageLower.includes('min'))) {
      collectedDuration = '30'
    }
  }
  
  const dateMatch = messageLower.match(/(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|next week|this week|\d{1,2}\/\d{1,2}|\d{1,2} (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i)
  if (!collectedDate && dateMatch) {
    collectedDate = message
  }
  
  const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/)
  if (emailMatch) {
    collectedEmail = emailMatch[0]
  }
  
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
  
  if (history.length === 0 || messageLower.match(/^(hi|hello|hey|start|begin)/)) {
    return "Hi! I'm Nova. I can help you book a call with BuildVerse. Would you like a 15-minute or 30-minute call?"
  }
  
  if (!collectedDuration) {
    if (messageLower.includes('15') || messageLower.includes('fifteen')) {
      collectedDuration = '15'
    } else if (messageLower.includes('30') || messageLower.includes('thirty')) {
      collectedDuration = '30'
    }
    
    if (collectedDuration) {
      return `Perfect! I can schedule a ${collectedDuration}-minute call for you. What date would you prefer? You can say something like "next Tuesday" or give me a specific date.`
    }
    return "I'd be happy to help! First, would you like a 15-minute or 30-minute call?"
  }
  
  const hasDateInMessage = messageLower.match(/(monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|next week|this week|\d{1,2}\/\d{1,2}|\d{1,2} (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i)
  const hasTimeInMessage = messageLower.match(/\d{1,2}:\d{2}|\d{1,2}\s*(am|pm|AM|PM)|morning|afternoon|evening/i)
  
  if (!collectedDate) {
    if (hasDateInMessage) {
      return `Great! I've noted ${message}. What time works best for you? (e.g., "2 PM", "10:30 AM")`
    }
    return "What date would work best for you? You can say something like 'next Wednesday', 'this Friday', or a specific date."
  }
  
  if (!hasTimeInMessage) {
    if (hasDateInMessage) {
      return `Perfect! I've updated the date to ${message}. What time works best for you?`
    }
    return "What time would work best for you? Please say something like '2 PM', '10:30 AM', or 'morning'."
  }
  
  if (hasTimeInMessage) {
    return `Excellent! So we have a ${collectedDuration}-minute call scheduled for ${collectedDate} at ${message}. Could you please provide your name and email address for confirmation?`
  }
  
  if (!collectedName) {
    if (message.match(/[A-Z][a-z]+/)) {
      collectedName = message
      if (!collectedEmail) {
        return `Thanks ${collectedName}! Could you please provide your email address for the confirmation?`
      }
    } else {
      return "Could you please tell me your name?"
    }
  }
  
  if (!collectedEmail) {
    const emailMatchFinal = message.match(/[\w.-]+@[\w.-]+\.\w+/)
    if (emailMatchFinal) {
      collectedEmail = emailMatchFinal[0]
      return `Perfect! I have all the details. Your ${collectedDuration}-minute call is scheduled for ${collectedDate}. I'll send a confirmation email to ${collectedEmail} shortly.\n\n[Demo Mode: To actually book appointments, please set up n8n webhook with N8N_WEBHOOK_URL in .env.local]`
    }
    return "Could you please provide your email address for the confirmation email?"
  }
  
  return `Perfect! I've noted all your details. I'll send you a confirmation email shortly.\n\n[Demo Mode: This is a demo. To enable actual booking, configure N8N_WEBHOOK_URL in your environment.]`
}

const jsonResponse = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

export async function onRequestPost(context) {
  const { request, env } = context
  const isDev = env.NODE_ENV === 'development'

  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON payload' }, 400)
  }

  const { message, conversationHistory } = body || {}

  if (!message) {
    return jsonResponse({ error: 'Message is required' }, 400)
  }

  const n8nWebhookUrl = env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/appointment-booking'

  if (!n8nWebhookUrl) {
    if (isDev) {
      return jsonResponse({
        response: generateDemoResponse(message, conversationHistory || []),
        demo: true,
        setupRequired: true,
      })
    }

    return jsonResponse(
      {
        error: 'Voice agent not configured',
        message: 'Set N8N_WEBHOOK_URL in Cloudflare Pages env vars.',
      },
      500
    )
  }

  try {
    const payload = {
      message: message.trim(),
      conversationHistory: conversationHistory || [],
      timestamp: new Date().toISOString(),
      source: 'buildverse-voice-agent',
      agent: 'Nova',
      metadata: {
        userAgent: request.headers.get('user-agent'),
        timestamp: Date.now(),
      },
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)

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
      const errorText = await response.text()
      throw new Error(`n8n webhook returned ${response.status}: ${errorText.substring(0, 200)}`)
    }

    const rawResponseText = await response.text()
    let data

    if (rawResponseText && rawResponseText.trim().length > 0) {
      try {
        data = JSON.parse(rawResponseText)
      } catch (parseError) {
        return jsonResponse(
          {
            error: 'Invalid JSON response from n8n',
            message: 'The workflow response is not valid JSON. Check your "Respond to Webhook" node.',
            details: isDev ? parseError.message : undefined,
          },
          502
        )
      }
    } else {
      return jsonResponse(
        {
          error: 'Empty response from n8n',
          message: 'The workflow did not return any data. Confirm the final node sends JSON.',
        },
        502
      )
    }

    let responseText = null

    if (!data || typeof data !== 'object') {
      return jsonResponse(
        {
          error: 'Invalid response format from n8n',
          message: 'Workflow did not return a valid JSON object.',
        },
        502
      )
    }

    if (data.response) responseText = data.response
    else if (data.message) responseText = data.message
    else if (data.text) responseText = data.text
    else if (data.output) responseText = typeof data.output === 'string' ? data.output : JSON.stringify(data.output)
    else if (data.body) {
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
    } else if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0]
      responseText = firstItem.response || firstItem.message || firstItem.text || JSON.stringify(firstItem)
    } else {
      responseText = typeof data === 'string' ? data : JSON.stringify(data)
      if (responseText.length > 500) {
        responseText = `${responseText.substring(0, 500)}...`
      }
    }

    if (!responseText || responseText.trim().length === 0) {
      responseText = "Thank you! Your appointment request has been received. I'll confirm the details shortly."
    }

    return jsonResponse({
      response: responseText.trim(),
      data,
      success: true,
    })
  } catch (error) {
    if (error.name === 'AbortError') {
      return jsonResponse(
        {
          error: 'Request timeout',
          message: 'The n8n webhook did not respond in time. Please try again.',
        },
        504
      )
    }

    if (error.message.includes('fetch failed') || error.message.includes('ECONNREFUSED')) {
      return jsonResponse(
        {
          error: 'Service unavailable',
          message: 'Unable to reach the n8n webhook. Confirm it is running and the URL is correct.',
        },
        503
      )
    }

    return jsonResponse(
      {
        error: 'Failed to process voice request',
        message: error.message,
        details: isDev ? error.stack : undefined,
      },
      500
    )
  }
}

