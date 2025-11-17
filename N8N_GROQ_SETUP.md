# 🤖 Groq API Setup for Nova Voice Agent

This guide will help you configure the Groq API in your n8n workflow so Nova can use AI for smart conversation handling.

## 🎯 Overview

The advanced workflow uses Groq (an OpenAI-compatible API) for intelligent conversation processing. Groq provides fast, affordable AI responses.

## 📋 Step-by-Step Setup

### Step 1: Get Groq API Key

1. **Sign up for Groq**
   - Go to: https://console.groq.com/
   - Sign up with your email or GitHub account
   - It's free to get started!

2. **Create API Key**
   - After signing up, go to: https://console.groq.com/keys
   - Click **"Create API Key"**
   - Name it: `n8n-nova` (or any name)
   - **Copy the API key immediately** (you can't see it again!)

3. **Note the Key Format**
   - Groq API keys look like: `gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - They start with `gsk_`

### Step 2: Set Environment Variable in n8n

1. **Open n8n Settings**
   - Log into your n8n instance
   - Click your profile icon → **Settings**
   - Or go to: Settings → Environment Variables

2. **Add Environment Variable**
   - Click **"Add Variable"** or **"+"** button
   - **Name**: `GROQ_API_KEY`
   - **Value**: Paste your Groq API key from Step 1
   - **Save**

3. **Optional: Set Model** (if needed)
   - Add another variable:
   - **Name**: `GROQ_MODEL`
   - **Value**: `llama-3.1-70b-versatile` (default) or another model
   - Available models:
     - `llama-3.1-70b-versatile` (default, recommended)
     - `llama-3.1-8b-instant` (faster, cheaper)
     - `mixtral-8x7b-32768` (alternative)

4. **Restart n8n** (if self-hosted)
   - Environment variables need restart to take effect
   - For n8n cloud, changes apply immediately

### Step 3: Verify Groq Node Configuration

1. **Open Your Workflow**
   - Open: "Nova Voice Agent - Advanced Booking (Groq + Calendar + Email + DB)"

2. **Find Groq LLM Node**
   - Look for "Groq LLM (HTTP)" node
   - Click on it to edit

3. **Check Configuration**
   - **URL**: Should be: `https://api.groq.com/openai/v1/chat/completions`
   - **Method**: `POST`
   - **Authentication**: Should use environment variable
   - **Headers**: Should include:
     ```
     Authorization: Bearer {{$env.GROQ_API_KEY || 'YOUR_GROQ_API_KEY'}}
     Content-Type: application/json
     ```

4. **Verify Request Body**
   - Should include:
     - `model`: `{{$env.GROQ_MODEL || 'llama-3.1-70b-versatile'}}`
     - `messages`: Array with system and user messages
     - `temperature`: `0.2` (for consistent responses)

### Step 4: Test Groq Connection

1. **Test in n8n**
   - Click "Execute Workflow" button
   - Check if Groq node executes successfully
   - Look for green checkmark ✅

2. **Check Execution Logs**
   - Go to **Executions** tab
   - Find the latest execution
   - Click on "Groq LLM (HTTP)" node
   - Should show successful response

## 🐛 Troubleshooting

### Error: "NodeApiError: The resource you are requesting could not be found"

**Problem**: Groq API endpoint not found or URL is incorrect.

**Solution**:
1. **Check the URL** in Groq node:
   - Should be: `https://api.groq.com/openai/v1/chat/completions`
   - NOT: `https://api.groq.com/v1/chat/completions` (wrong path)
   - Verify there are no typos

2. **Check API Key**:
   - Go to n8n Settings → Environment Variables
   - Verify `GROQ_API_KEY` is set correctly
   - Make sure it starts with `gsk_`
   - No extra spaces or quotes

3. **Check Request Headers**:
   - Authorization header should be: `Bearer {{$env.GROQ_API_KEY}}`
   - Content-Type should be: `application/json`

4. **Restart n8n** (if self-hosted):
   - Environment variables require restart
   - Stop n8n and start again

### Error: "Bad request - please check your parameters" ⚠️ MOST COMMON

**Problem**: Request body or headers are malformed.

**Solution**:

1. **Check Request Headers Format**:
   - In Groq node, click "Headers" section
   - Headers should be in JSON format:
     ```json
     {
       "Authorization": "Bearer {{$env.GROQ_API_KEY}}",
       "Content-Type": "application/json"
     }
     ```
   - **Common Issues**:
     - ❌ Missing quotes around keys
     - ❌ Using single quotes instead of double quotes
     - ❌ Extra commas or brackets

2. **Check Request Body Format**:
   - In Groq node, click "Body" section
   - Should be JSON format with proper escaping
   - The expression `{{$env.GROQ_API_KEY}}` must be inside the JSON string
   - **Correct format**:
     ```json
     {
       "model": "{{$env.GROQ_MODEL || 'llama-3.1-70b-versatile'}}",
       "temperature": 0.2,
       "messages": [
         {
           "role": "system",
           "content": "You are Nova..."
         },
         {
           "role": "user",
           "content": "Message: {{$json.userMessage}}\nHistory: {{$json.conversationHistory}}"
         }
       ]
     }
     ```

3. **Fix Header Configuration**:
   - In n8n, the header should use the expression properly
   - If using "Header Parameters (JSON)", it should be:
     ```
     ={
       "Authorization": "Bearer {{$env.GROQ_API_KEY}}",
       "Content-Type": "application/json"
     }
     ```
   - Note the `=` at the start (n8n expression syntax)

4. **Verify JSON Syntax**:
   - Use a JSON validator to check syntax
   - Make sure all strings are in double quotes
   - No trailing commas in objects/arrays

5. **Test with Static Values First**:
   - Temporarily replace `{{$env.GROQ_API_KEY}}` with your actual key
   - Replace `{{$json.userMessage}}` with a test string
   - If this works, the issue is with expression syntax

### Error: "401 Unauthorized"

**Problem**: Invalid or missing API key.

**Solution**:
1. Verify API key in Groq console: https://console.groq.com/keys
2. Make sure it's copied correctly (no spaces)
3. Check n8n environment variable is set
4. Regenerate API key if needed

### Error: "429 Too Many Requests"

**Problem**: Rate limit exceeded.

**Solution**:
1. Groq has rate limits on free tier
2. Wait a few minutes and try again
3. Consider upgrading Groq plan for higher limits

### Error: "Model not found"

**Problem**: Invalid model name.

**Solution**:
1. Check `GROQ_MODEL` environment variable
2. Use one of the valid models:
   - `llama-3.1-70b-versatile` ✅
   - `llama-3.1-8b-instant` ✅
   - `mixtral-8x7b-32768` ✅

### Workflow Still Failing?

1. **Test Groq API Directly**:
   ```bash
   curl https://api.groq.com/openai/v1/chat/completions \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "model": "llama-3.1-70b-versatile",
       "messages": [{"role": "user", "content": "Hello"}]
     }'
   ```
   If this fails, check your API key.

2. **Check n8n Execution Logs**:
   - Go to Executions
   - Find failed execution
   - Click on Groq node
   - Look at error details

3. **Verify Node Configuration**:
   - Make sure all headers are correct
   - Check request body format
   - Verify JSON syntax is valid

## 🔧 Alternative: Skip Groq for Testing

If you want to test the workflow without Groq:

1. **Bypass Groq Node**:
   - Add a direct connection from "Extract Fields" → "Parse LLM Output"
   - Or modify the workflow to skip Groq temporarily

2. **Use Simple Response**:
   - Replace Groq node with a "Set" node
   - Return a simple response: `{ reply: "I can help you book an appointment. What date works for you?" }`

3. **Test Other Nodes**:
   - Calendar, Email, and Database can still be tested
   - Just won't have AI conversation handling

## 📝 Quick Reference

### Groq API Details

- **Base URL**: `https://api.groq.com/openai/v1`
- **Chat Endpoint**: `/chat/completions`
- **Full URL**: `https://api.groq.com/openai/v1/chat/completions`
- **Authentication**: Bearer token in `Authorization` header
- **API Key Format**: `gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Environment Variables in n8n

```
GROQ_API_KEY=gsk_your_actual_api_key_here
GROQ_MODEL=llama-3.1-70b-versatile (optional)
```

### Request Headers

```
Authorization: Bearer {{$env.GROQ_API_KEY}}
Content-Type: application/json
```

### Request Body Structure

```json
{
  "model": "{{$env.GROQ_MODEL || 'llama-3.1-70b-versatile'}}",
  "temperature": 0.2,
  "messages": [
    {
      "role": "system",
      "content": "You are Nova, a friendly AI scheduling assistant..."
    },
    {
      "role": "user",
      "content": "Message: {{$json.userMessage}}\nHistory: {{$json.conversationHistory}}"
    }
  ]
}
```

## ✅ Setup Checklist

- [ ] Groq account created
- [ ] API key generated and copied
- [ ] `GROQ_API_KEY` set in n8n environment variables
- [ ] `GROQ_MODEL` set (optional)
- [ ] n8n restarted (if self-hosted)
- [ ] Groq node URL verified: `https://api.groq.com/openai/v1/chat/completions`
- [ ] Authorization header configured correctly
- [ ] Workflow tested and Groq node executes successfully

## 🎉 Next Steps

Once Groq is configured:
1. ✅ Nova will have AI-powered conversations
2. ✅ Can understand natural language better
3. ✅ Can extract appointment details intelligently
4. ✅ Can handle context and follow-up questions

---

**Need help?** 
- Check Groq documentation: https://console.groq.com/docs
- Verify API key is active in Groq console
- Check n8n execution logs for detailed error messages

