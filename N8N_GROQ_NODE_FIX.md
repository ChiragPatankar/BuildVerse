# 🔧 Fix Groq Node "Bad Request" Error

## Error: "Bad request - please check your parameters"

This means the Groq API is receiving malformed request parameters. Here's how to fix it:

## ✅ Quick Fix Steps

### Step 1: Check Groq Node Configuration

1. **Open your workflow**
2. **Click "Groq LLM (HTTP)" node**
3. **Verify these settings:**

#### Authentication Section:
- **Authentication**: Should be "None" or "Generic Credential Type" 
- **Don't use** "Predefined Credential Type" for Groq (it doesn't have a built-in credential)

#### Headers Section:
- **Send Headers**: ✅ Checked
- **Header Parameters (JSON)**: Should be:
  ```
  ={
    "Authorization": "Bearer {{$env.GROQ_API_KEY}}",
    "Content-Type": "application/json"
  }
  ```
  - **Important**: Note the `=` at the start (required for n8n expressions)
  - **Important**: Use double quotes, not single quotes
  - **Important**: Make sure `GROQ_API_KEY` environment variable is set

#### Body Section:
- **Send Body**: ✅ Checked
- **Body Parameters (JSON)**: Should be:
  ```
  ={
    "model": "{{$env.GROQ_MODEL || 'llama-3.1-70b-versatile'}}",
    "temperature": 0.2,
    "messages": [
      {
        "role": "system",
        "content": "You are Nova, a friendly AI scheduling assistant for BuildVerse. Extract or ask for: name, email, duration(15|30), preferred date/time, and purpose. If info missing, ask concise clarifying question. Return strict JSON in a 'structured' key and a conversational 'reply'."
      },
      {
        "role": "user",
        "content": "Message: {{$json.userMessage}}\nHistory: {{$json.conversationHistory}}"
      }
    ]
  }
  ```

#### URL Section:
- **URL**: `https://api.groq.com/openai/v1/chat/completions`
- **Method**: `POST`

### Step 2: Fix Common Issues

#### Issue 1: Expression Syntax Error

**Problem**: n8n expressions not properly formatted.

**Fix**:
- All JSON parameters should start with `=`
- Use double quotes `"` not single quotes `'`
- Escape newlines properly: `\n` not actual line breaks

#### Issue 2: Environment Variable Not Set

**Problem**: `{{$env.GROQ_API_KEY}}` returns empty.

**Fix**:
1. Go to n8n Settings → Environment Variables
2. Add: `GROQ_API_KEY` = `your-actual-key-here`
3. **Restart n8n** (if self-hosted)

#### Issue 3: JSON Escaping Issues

**Problem**: Special characters in content breaking JSON.

**Fix**:
- The `conversationHistory` might contain quotes or special chars
- Try simplifying the body to test:
  ```
  ={
    "model": "llama-3.1-70b-versatile",
    "messages": [
      {"role": "user", "content": "{{$json.userMessage}}"}
    ]
  }
  ```

### Step 3: Test with Simplified Request

To isolate the issue, temporarily simplify:

1. **Set Headers**:
   ```
   ={
     "Authorization": "Bearer YOUR_ACTUAL_KEY_HERE",
     "Content-Type": "application/json"
   }
   ```
   (Replace with your actual key temporarily)

2. **Set Body**:
   ```
   ={
     "model": "llama-3.1-70b-versatile",
     "messages": [
       {"role": "user", "content": "Hello"}
     ]
   }
   ```

3. **Test the node**:
   - Click "Execute Node" or "Test Workflow"
   - If this works, the issue is with expression syntax
   - If it fails, check your API key

### Step 4: Use Alternative Configuration Method

If JSON parameters aren't working, try using "Body Content Type: Form-Data" then switch back, or:

1. **Use "Specify Body"** option
2. **Select "JSON"**
3. **Paste this** (adjust expressions as needed):
   ```json
   {
     "model": "llama-3.1-70b-versatile",
     "temperature": 0.2,
     "messages": [
       {
         "role": "system",
         "content": "You are Nova, a friendly AI scheduling assistant."
       },
       {
         "role": "user",
         "content": "={{ 'Message: ' + $json.userMessage }}"
       }
     ]
   }
   ```

## 🔍 Detailed Troubleshooting

### Check Execution Logs

1. Go to n8n **Executions** tab
2. Find the failed execution
3. Click on "Groq LLM (HTTP)" node
4. Look at:
   - **Input**: What data it received
   - **Output**: What error it returned
   - **Request**: The actual HTTP request sent

### Verify Environment Variable

1. In Groq node, temporarily replace `{{$env.GROQ_API_KEY}}` with your actual key
2. Test if it works
3. If yes, the env var isn't being read properly
4. Check n8n Settings → Environment Variables again

### Test API Directly

Use curl to verify your API key works:

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-70b-versatile",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

If this fails, your API key is invalid.

## 📋 Correct Node Configuration Summary

### Groq LLM (HTTP) Node Settings:

**URL**: `https://api.groq.com/openai/v1/chat/completions`  
**Method**: `POST`  
**Authentication**: `None` (or Generic if you set it up)

**Headers (JSON)**:
```
={
  "Authorization": "Bearer {{$env.GROQ_API_KEY}}",
  "Content-Type": "application/json"
}
```

**Body (JSON)**:
```
={
  "model": "{{$env.GROQ_MODEL || 'llama-3.1-70b-versatile'}}",
  "temperature": 0.2,
  "messages": [
    {
      "role": "system",
      "content": "You are Nova, a friendly AI scheduling assistant for BuildVerse. Extract or ask for: name, email, duration(15|30), preferred date/time, and purpose. If info missing, ask concise clarifying question. Return strict JSON in a 'structured' key and a conversational 'reply'."
    },
    {
      "role": "user",
      "content": "Message: {{$json.userMessage}}\nHistory: {{JSON.stringify($json.conversationHistory)}}"
    }
  ]
}
```

**Note**: Changed `{{$json.conversationHistory}}` to `{{JSON.stringify($json.conversationHistory)}}` to properly serialize the array.

## ✅ Quick Checklist

- [ ] `GROQ_API_KEY` set in n8n environment variables
- [ ] n8n restarted after setting env var (if self-hosted)
- [ ] Header JSON starts with `=`
- [ ] Header uses double quotes
- [ ] Body JSON starts with `=`
- [ ] Body uses double quotes for strings
- [ ] URL is exactly: `https://api.groq.com/openai/v1/chat/completions`
- [ ] Method is `POST`
- [ ] Tested with static values first

---

**Still not working?** Share the exact error message from n8n execution logs, and I can help debug further!






