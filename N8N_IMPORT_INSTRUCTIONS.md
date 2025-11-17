# 📥 How to Import n8n Workflow

## Quick Import Steps

1. **Open n8n**
   - Go to your n8n instance (cloud or local)
   - Make sure you're logged in

2. **Import Workflow**
   - Click the **"Workflows"** menu (top navigation)
   - Click the **"+" (plus)** button to create a new workflow
   - Click **"Import from File"** or the **"..." (three dots)** menu → **"Import from File"**
   - Select the file: `n8n-workflow-nova-voice-agent.json`
   - Click **"Import"**

3. **Activate the Workflow**
   - After import, click the **"Active"** toggle in the top-right corner
   - Make sure it shows **"Active"** (toggle should be ON/blue)

4. **Get Your Webhook URL**
   - Click on the **"Webhook"** node (first node in the workflow)
   - Scroll down to see the **"Production URL"**
   - Copy this URL - it should look like:
     - Cloud: `https://your-instance.app/webhook/appointment-booking`
     - Local: `http://localhost:5678/webhook/appointment-booking`

5. **Configure in Your Project**
   - Create `.env.local` in your BuildVerse project root:
     ```env
     N8N_WEBHOOK_URL=<paste-your-webhook-url-here>
     ```
   - Restart your dev server: `npm run dev`

6. **Test It!**
   - Open Nova voice agent on your website
   - Say: "Hello" or "I'd like to book a meeting"
   - You should get a response from n8n!

## ⚠️ Important Notes

- **Make sure the workflow is ACTIVE** - the toggle must be ON
- The webhook path is: `/appointment-booking`
- If you change the path, update your `.env.local` file accordingly
- For local n8n, use `http://localhost:5678` instead of `https://`

## 🔧 Customizing the Workflow

The imported workflow is a **basic template** that:
- ✅ Receives messages from Nova
- ✅ Checks if it's a greeting
- ✅ Extracts duration (15 or 30 minutes)
- ✅ Returns appropriate responses

**To enhance it**, you can add:
- OpenAI/Anthropic AI node for smarter responses
- Google Calendar integration for actual booking
- Email confirmation nodes
- Database storage for appointments
- Date/time parsing for specific scheduling

## 🔧 Setting Up Credentials

After importing the advanced workflow, you'll need to configure:

1. **Google Calendar**: See [N8N_GOOGLE_CALENDAR_SETUP.md](./N8N_GOOGLE_CALENDAR_SETUP.md)
2. **Groq API**: Set environment variable `GROQ_API_KEY` in n8n settings
3. **SMTP/Email**: Configure email credentials in n8n (Settings → Credentials)
4. **Postgres**: Configure database credentials and create `appointments` table

## 🐛 Troubleshooting

**Workflow not responding?**
- Check if workflow is ACTIVE (toggle in top-right)
- Verify webhook URL is correct
- Check n8n execution logs for errors

**Getting 404 errors?**
- Make sure the webhook path matches: `appointment-booking`
- Verify the workflow is saved and activated

**Response not showing?**
- Check that your response node returns: `{ "response": "your message" }`
- Look at the "Merge Response" node to ensure format is correct

**Google Calendar errors?**
- See the [Google Calendar Setup Guide](./N8N_GOOGLE_CALENDAR_SETUP.md)
- Verify OAuth credentials are connected
- Check calendar ID is correct (use `primary` for default)

## 📝 Next Steps

Once the basic workflow works:
1. Test with various phrases
2. Add AI/LLM node for smarter conversations
3. Integrate with your calendar system
4. Add email notifications
5. Store appointments in a database

---

**Ready to import?** Open n8n and follow the steps above! 🚀

