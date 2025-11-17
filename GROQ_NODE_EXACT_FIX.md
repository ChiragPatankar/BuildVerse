# 🔧 Exact Fix for Groq Node "Bad Request" Error

## The Problem

The "Bad request" error happens because n8n's JSON parameter handling with expressions can break the JSON structure. Here's the exact fix:

## ✅ Solution: Fix the Body Parameters

### Option 1: Fix the Body JSON Expression (Recommended)

1. **Open your workflow**
2. **Click "Groq LLM (HTTP)" node**
3. **Go to "Body" section**
4. **In "Body Parameters (JSON)" field**, replace with this EXACT text:

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
      "content": "Message: {{$json.userMessage}}\nHistory: {{JSON.stringify($json.conversationHistory || [])}}"
    }
  ]
}
```

**Key Changes:**
- Changed `{{$json.conversationHistory}}` to `{{JSON.stringify($json.conversationHistory || [])}}`
- This properly serializes the array to a JSON string

### Option 2: Use Specify Body Instead (If Option 1 Doesn't Work)

1. **In Groq node**, find "Body" section
2. **Change "Specify Body"** dropdown:
   - Select **"Specify Body"** → **"JSON"**
3. **In the JSON field**, paste this:

```json
{
  "model": "{{$env.GROQ_MODEL || 'llama-3.1-70b-versatile'}}",
  "temperature": 0.2,
  "messages": [
    {
      "role": "system",
      "content": "You are Nova, a friendly AI scheduling assistant for BuildVerse. Extract or ask for: name, email, duration(15|30), preferred date/time, and purpose. If info missing, ask concise clarifying question. Return strict JSON in a 'structured' key and a conversational 'reply'."
    },
    {
      "role": "user",
      "content": "={{ 'Message: ' + $json.userMessage + '\nHistory: ' + JSON.stringify($json.conversationHistory || []) }}"
    }
  ]
}
```

### Option 3: Simplify to Test First

If still not working, simplify to test:

1. **Temporarily use this simple body**:

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
      "content": "={{ $json.userMessage }}"
    }
  ]
}
```

2. **Test if this works**
3. **If yes**, gradually add back the conversationHistory part

## 🔍 Fix Headers Too

While you're at it, make sure Headers are correct:

**In "Header Parameters (JSON)":**
```
={
  "Authorization": "Bearer {{$env.GROQ_API_KEY}}",
  "Content-Type": "application/json"
}
```

**Remove the fallback** `|| 'YOUR_GROQ_API_KEY'` - it causes issues if env var is empty.

## ✅ Complete Checklist

1. [ ] **Headers**: 
   - `Authorization: Bearer {{$env.GROQ_API_KEY}}` (no fallback)
   - `Content-Type: application/json`

2. [ ] **Body**: 
   - Use `JSON.stringify()` for conversationHistory
   - Or use "Specify Body" → "JSON" mode

3. [ ] **Environment Variable**:
   - `GROQ_API_KEY` is set in n8n Settings
   - n8n restarted (if self-hosted)

4. [ ] **URL**: 
   - `https://api.groq.com/openai/v1/chat/completions`

5. [ ] **Method**: 
   - `POST`

## 🧪 Test Steps

1. **Save the node**
2. **Click "Execute Node"** (test just this node)
3. **Check the output**:
   - Should show Groq response
   - Not an error

4. **If error persists**:
   - Check execution logs
   - Look at the actual request being sent
   - Compare with working curl command

## 💡 Why This Happens

n8n's JSON parameter handling with expressions is sensitive:
- Arrays need `JSON.stringify()`
- The `=` prefix is required for expressions
- Expression syntax inside JSON strings can be tricky
- Fallback values in expressions can cause issues

## 🎯 Most Likely Fix

**Just change this one thing** in the body:

**From:**
```
"History: {{$json.conversationHistory}}"
```

**To:**
```
"History: {{JSON.stringify($json.conversationHistory || [])}}"
```

This should fix it!


