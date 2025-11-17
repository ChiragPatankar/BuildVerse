# 🎙️ Voice Agent Setup Guide

This guide will help you set up the voice agent widget that allows visitors to book appointments via voice while browsing your website.

## 📋 Features

- **Floating Voice Button**: Appears in bottom-right corner on all pages
- **Real-time Speech Recognition**: Uses browser's Web Speech API (no API keys needed)
- **Text-to-Speech**: Speaks responses back to users
- **n8n Integration**: Connects to your n8n workflow for appointment booking
- **Conversation History**: Maintains context throughout the conversation
- **Works While Scrolling**: Non-intrusive, stays visible

## 🚀 Local Development Setup

### 1. Install Dependencies

All dependencies are already installed. The voice agent uses:
- **Web Speech API** (browser-native, no installation needed)
- **Framer Motion** (already in project)

### 2. Configure n8n Webhook

**📖 For detailed n8n setup instructions, see [N8N_SETUP_GUIDE.md](./N8N_SETUP_GUIDE.md)**

Quick import (advanced):

1. Import `n8n-workflow-nova-voice-agent-advanced.json` into n8n
2. Configure credentials in n8n:
   - Groq API (HTTP Request headers): `GROQ_API_KEY`, optional `GROQ_MODEL`
   - Google Calendar account
   - SMTP credentials for Email node
   - Postgres credentials (and create `appointments` table)
3. Activate workflow and copy Webhook URL
4. Set it in `.env.local` as `N8N_WEBHOOK_URL=...`

Quick setup:

1. **Create `.env.local` file** in the project root:
   ```env
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/appointment-booking
   ```

2. **Set up your n8n workflow** (see detailed guide above):
   - Add a Webhook node (POST method)
   - Process the message with AI/Logic nodes
   - Return response in format: `{ "response": "Your message here" }`

3. **Get your webhook URL** from the n8n Webhook node and update `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

The voice agent widget will appear as a floating microphone button in the bottom-right corner.

## 🎯 Testing Without n8n

If you don't have n8n set up yet, the voice agent will work in demo mode and show a helpful message indicating you need to configure the webhook URL.

## 📝 How It Works

1. **User clicks the microphone button** → Widget opens
2. **User clicks the mic button in widget** → Browser requests microphone permission
3. **User speaks** → Speech is converted to text using Web Speech API
4. **Text is sent to `/api/voice-agent`** → Which forwards to your n8n webhook
5. **n8n processes the request** → Handles appointment booking logic
6. **Response comes back** → Displayed in widget and spoken via TTS

## 🔧 n8n Workflow Example

Your n8n workflow should:
1. **Webhook Trigger** - Receives POST requests with:
   ```json
   {
     "message": "I'd like to book an appointment",
     "conversationHistory": [...],
     "timestamp": "2025-01-20T...",
     "source": "website-voice-agent"
   }
   ```

2. **Process Logic** - Use AI/LLM node or conditional logic to:
   - Understand user intent
   - Extract appointment details (date, time, name, email)
   - Check calendar availability
   - Create calendar event

3. **Return Response** - Send back:
   ```json
   {
     "response": "Great! I've booked you for January 25th at 2 PM. You'll receive a confirmation email shortly."
   }
   ```

## 🌐 Production Deployment

### For Static Sites (Cloudflare Pages)

Since static sites can't run API routes, you have two options:

#### Option 1: Use Cloudflare Workers
- Deploy the API route as a Cloudflare Worker
- Update the VoiceAgent component to call the worker URL

#### Option 2: Use External API Service
- Deploy API route to Vercel/Netlify Functions
- Or use n8n's direct webhook (modify VoiceAgent to call n8n directly)

**Important**: Before deploying, remember to:
1. Re-enable static export in `next.config.js` (uncomment `output: 'export'`)
2. Update the voice agent to call the production API endpoint

## 🎨 Customization

You can customize the voice agent in `components/VoiceAgent.jsx`:
- Colors and styling
- Widget position
- Speech recognition language
- TTS voice settings
- Conversation UI

## 🔒 Security & Privacy

- Microphone access requires explicit user permission
- All audio processing happens in the browser
- Only transcribed text is sent to n8n
- No audio recordings are stored

## 📱 Browser Support

- ✅ Chrome/Edge (full support)
- ✅ Safari (partial support)
- ✅ Firefox (may require polyfill)
- ⚠️ Some mobile browsers have limited support

## 🐛 Troubleshooting

**"Speech recognition not supported"**
- Use Chrome or Edge browser
- Ensure you're on HTTPS (or localhost for dev)

**"Microphone permission denied"**
- Check browser settings
- Ensure microphone is connected/enabled
- Try refreshing the page

**"API error"**
- Check `.env.local` file has correct `N8N_WEBHOOK_URL`
- Verify n8n webhook is active and accessible
- Check browser console for detailed errors

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify n8n webhook is working (test with curl/Postman)
3. Ensure microphone permissions are granted
4. Check that Web Speech API is supported in your browser

---

**Ready to test?** Run `npm run dev` and look for the floating microphone button! 🎤

