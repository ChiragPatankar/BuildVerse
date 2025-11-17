# 🔗 n8n Webhook Setup Guide for Nova Voice Agent

This guide will help you set up your n8n workflow to handle appointment booking requests from Nova, the voice agent on your BuildVerse website.

## 📋 Quick Start

1. **Get your n8n webhook URL**
2. **Create `.env.local` file** in the project root:
   ```env
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/appointment-booking
   ```
3. **Restart the dev server**: `npm run dev`

## 🔧 n8n Workflow Setup

### Option 1: Quick Import (Recommended)

**📥 Import a ready-made workflow:**
1. See [N8N_IMPORT_INSTRUCTIONS.md](./N8N_IMPORT_INSTRUCTIONS.md) for step-by-step import guide
2. Import the file: `n8n-workflow-nova-voice-agent.json`
3. Activate the workflow
4. Copy the webhook URL from the Webhook node
5. Done! 🎉

### Option 2: Manual Setup

#### Step 1: Create Webhook Trigger

1. In n8n, create a new workflow or open an existing one
2. Add a **Webhook** node as the first node
3. Configure it:
   - **HTTP Method**: `POST`
   - **Path**: `/appointment-booking` (or your preferred path)
   - **Response Mode**: `Respond to Webhook`
   - **Response Data**: `JSON`

4. **Copy the Webhook URL** - You'll see it at the bottom of the node, something like:
   - `https://your-n8n-instance.com/webhook/appointment-booking`
   - Or for local: `http://localhost:5678/webhook/appointment-booking`

### Step 2: Understand the Payload Format

Nova sends data in this format:

```json
{
  "message": "I'd like to book a 30-minute call",
  "conversationHistory": [
    {
      "role": "user",
      "text": "Hello"
    },
    {
      "role": "assistant",
      "text": "Hi! I'm Nova..."
    }
  ],
  "timestamp": "2025-01-20T12:34:56.789Z",
  "source": "buildverse-voice-agent",
  "agent": "Nova",
  "metadata": {
    "userAgent": "Mozilla/5.0...",
    "timestamp": 1705754696789
  }
}
```

### Step 3: Process the Request

You can use one of these approaches:

#### Option A: Simple Response Node (Testing)

1. Add a **Respond to Webhook** node (or use the same Webhook node's response)
2. Configure it to return:
   ```json
   {
     "response": "Great! I can book you for a 30-minute call. What day works best for you?"
   }
   ```

#### Option B: AI/LLM Node (Recommended)

1. Add an **OpenAI** or **Anthropic** node after the Webhook
2. Configure prompt:
   ```
   You are Nova, a friendly AI scheduling assistant for BuildVerse.
   
   User message: {{ $json.message }}
   
   Conversation history:
   {{ $json.conversationHistory }}
   
   Your task: Help the user book an appointment. Be conversational, friendly, and collect:
   - Preferred date and time
   - Duration (15 or 30 minutes)
   - Name and email (if not in history)
   - Purpose of the call
   
   Respond naturally, as if having a conversation.
   ```
3. Connect to a **Respond to Webhook** node with:
   ```json
   {
     "response": "{{ $json.choices[0].message.content }}"
   }
   ```

#### Option C: Calendar Integration (Full Booking)

1. Use **IF** nodes to extract appointment details
2. Add **Google Calendar** or **Calendly** node to check availability
3. Create calendar event
4. Send confirmation email using **Email** node
5. Return confirmation to user

### Step 4: Return Response Format

**Important**: Your n8n workflow must return one of these formats for Nova to understand:

**Preferred format**:
```json
{
  "response": "Perfect! I've booked you for January 25th at 2 PM. You'll receive a confirmation email shortly."
}
```

**Alternative formats that work**:
```json
{
  "message": "Your response here"
}
```
or
```json
{
  "text": "Your response here"
}
```

## 🧪 Testing Your n8n Webhook

### Method 1: Test in n8n

1. Click "Test workflow" in n8n
2. The webhook node will show a test URL
3. Use this temporarily for testing

### Method 2: Test with curl

```bash
curl -X POST https://your-n8n-instance.com/webhook/appointment-booking \
  -H "Content-Type: application/json" \
  -d '{
    "message": "I want to book a meeting",
    "conversationHistory": [],
    "timestamp": "2025-01-20T12:00:00.000Z",
    "source": "buildverse-voice-agent",
    "agent": "Nova"
  }'
```

You should get back:
```json
{
  "response": "Your n8n workflow response here"
}
```

### Method 3: Test in Browser

1. Start your Next.js dev server: `npm run dev`
2. Open Nova voice agent
3. Try saying: "I'd like to book a 30-minute call"
4. Check the browser console for any errors
5. Check n8n execution logs

## 🎯 Example n8n Workflow

Here's a complete example workflow structure:

```
[Webhook] 
    ↓
[Set] (Extract user message)
    ↓
[IF] (Check if this is initial greeting)
    ├─ Yes → [Set] (Return greeting)
    └─ No → [OpenAI] (Process with AI)
              ↓
         [IF] (Has all booking details?)
              ├─ Yes → [Google Calendar] (Create event)
              │         ↓
              │    [Email] (Send confirmation)
              │         ↓
              │    [Set] (Return confirmation)
              └─ No → [Set] (Ask for missing info)
                        ↓
                  [Respond to Webhook]
```

## 🚨 Common Issues & Solutions

### Issue: "n8n webhook returned 404" - Webhook Not Registered

**Error Message**: `{"code":404,"message":"The requested webhook \"appointment-booking\" is not registered."}`

**Common Causes & Solutions**:

1. **Workflow Not Active** ⚠️ MOST COMMON
   - Open your workflow in n8n
   - Check the **"Active"** toggle in the top-right corner
   - It must show **"Active"** (blue/ON)
   - If it's gray/OFF, click it to activate
   - **Important**: Workflows must be activated to register webhooks!

2. **Workflow Not Saved**
   - Make sure you clicked **"Save"** after importing/editing the workflow
   - Check if there's an unsaved changes indicator
   - Save the workflow, then activate it

3. **Wrong Webhook Path**
   - Click on the **Webhook** node (first node)
   - Check the **Path** field - it should be: `appointment-booking`
   - If it's different, either:
     - Change it back to `appointment-booking`, OR
     - Update your `.env.local` to match the path

4. **Wrong Webhook URL in .env.local**
   - Check your `.env.local` file
   - The URL should be: `https://your-n8n-instance.com/webhook/appointment-booking`
   - Or for local: `http://localhost:5678/webhook/appointment-booking`
   - Make sure the path matches exactly (no extra `/` or missing parts)

5. **Webhook Node Not Configured**
   - Click on the Webhook node
   - Verify:
     - **HTTP Method**: `POST`
     - **Path**: `appointment-booking`
     - **Response Mode**: `Respond to Webhook` or `Using Last Node`
   - If not, configure it and save

**Quick Fix Checklist**:
- [ ] Workflow is saved
- [ ] Workflow is ACTIVE (toggle is ON/blue)
- [ ] Webhook node path is `appointment-booking`
- [ ] `.env.local` has correct URL with matching path
- [ ] Restarted dev server after changing `.env.local`
- [ ] For local n8n, n8n is running on port 5678

**Verify Webhook URL**:
- In n8n, click the **Webhook** node
- Scroll to bottom to see **"Production URL"** or **"Test URL"**
- Copy that exact URL to your `.env.local`
- It should match exactly (including `/webhook/appointment-booking`)

### Issue: "Request timeout"

**Solution**:
- Your n8n workflow is taking too long (>30 seconds)
- Optimize your workflow or add delays between steps
- Consider using n8n's "Wait" node for async operations

### Issue: Response not being parsed correctly

**Solution**:
- Ensure your n8n response includes a `response`, `message`, or `text` field
- Use the **Respond to Webhook** node with explicit JSON response
- Check the API route logs in your Next.js console

### Issue: CORS errors

**Solution**:
- This shouldn't happen since the API route calls n8n server-side
- If testing directly from browser, ensure n8n allows CORS for your domain

## 🔒 Security Best Practices

1. **Use HTTPS** for production n8n instances
2. **Add authentication** to your webhook (n8n supports Basic Auth, Header Auth, etc.)
3. **Validate input** in your n8n workflow
4. **Rate limiting**: Consider adding rate limiting in n8n
5. **Sanitize outputs**: Ensure responses don't expose sensitive data

## 📅 Additional Setup Guides

- **[Google Calendar Setup](./N8N_GOOGLE_CALENDAR_SETUP.md)** - Configure Google Calendar integration for automatic event creation
- Set up Groq API key in n8n environment variables or credentials
- Configure SMTP credentials for email confirmations
- Set up Postgres database connection in n8n

## 📊 Monitoring

Check these to debug issues:

1. **n8n Execution Logs**: View executions in n8n dashboard
2. **Next.js Server Logs**: Check terminal where `npm run dev` is running
3. **Browser Console**: Check for client-side errors
4. **Network Tab**: Inspect API calls to `/api/voice-agent`

## 🎉 Next Steps

Once your n8n workflow is working:

1. Test various user intents:
   - "Book a 15-minute call"
   - "I need to reschedule"
   - "Check availability next week"
   
2. Enhance your workflow:
   - Add calendar integration
   - Send email confirmations
   - Store appointments in a database
   - Integrate with CRM systems

3. Deploy to production:
   - Set `N8N_WEBHOOK_URL` in your production environment
   - Test thoroughly before going live

---

**Need help?** Check the n8n documentation or test your webhook independently before connecting to Nova.

