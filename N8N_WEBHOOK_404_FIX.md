# 🔧 Fix: n8n Webhook 404 Error

## Error Message
```
n8n webhook returned 404: {"code":404,"message":"The requested webhook \"appointment-booking\" is not registered.","hint":"Cli
```

This means n8n can't find your webhook. Here's how to fix it:

## ✅ Step-by-Step Fix

### Step 1: Check if Workflow is Active

**This is the #1 cause of 404 errors!**

1. Open your n8n dashboard
2. Go to **Workflows**
3. Find your workflow (e.g., "Nova Voice Agent - Advanced Booking")
4. Look at the top-right corner for the **"Active"** toggle
5. **It must be ON/Blue** ✅
6. If it's OFF/Gray, click it to activate
7. Wait a few seconds for it to register

**Visual Check**:
- ✅ Active: Toggle is blue, shows "Active" or checkmark
- ❌ Inactive: Toggle is gray, shows "Inactive" or X

### Step 2: Verify Webhook Node Configuration

1. Click on your workflow to open it
2. Find the **Webhook** node (usually the first node)
3. Click on it to edit
4. Check these settings:
   - **HTTP Method**: `POST`
   - **Path**: `appointment-booking`
   - **Response Mode**: `Respond to Webhook` or `Using Last Node`
5. If anything is wrong, fix it and click **"Save"**

### Step 3: Get the Correct Webhook URL

1. Still in the Webhook node
2. Scroll down to find the **URL** section
3. Look for:
   - **Production URL**: `https://your-instance.com/webhook/appointment-booking`
   - **Test URL**: `http://localhost:5678/webhook/appointment-booking`
4. **Copy the exact URL** shown there

### Step 4: Update .env.local File

1. In your BuildVerse project, open `.env.local`
2. Make sure it has:
   ```env
   N8N_WEBHOOK_URL=https://your-exact-n8n-url.com/webhook/appointment-booking
   ```
3. Use the exact URL from Step 3 (no extra characters, no trailing slash)

**Common Mistakes**:
- ❌ Missing `/webhook/` in the path
- ❌ Wrong path (e.g., `/webhooks/` instead of `/webhook/`)
- ❌ Trailing slash at the end
- ❌ Using test URL in production or vice versa

### Step 5: Restart Dev Server

After updating `.env.local`:
```bash
# Stop your dev server (Ctrl+C)
# Then restart:
npm run dev
```

Environment variables are only loaded on startup!

### Step 6: Test the Webhook Directly

Test if the webhook is working:

**For n8n Cloud**:
```bash
curl -X POST https://your-n8n-instance.com/webhook/appointment-booking \
  -H "Content-Type: application/json" \
  -d '{"message": "test", "conversationHistory": []}'
```

**For Local n8n**:
```bash
curl -X POST http://localhost:5678/webhook/appointment-booking \
  -H "Content-Type: application/json" \
  -d '{"message": "test", "conversationHistory": []}'
```

You should get a JSON response, not a 404.

## 🔍 Detailed Troubleshooting

### If Workflow Shows Active But Still 404:

1. **Re-save the Workflow**
   - Click the workflow
   - Make a small change (add a space somewhere)
   - Click "Save"
   - Click "Active" toggle OFF, then ON again
   - Wait 10 seconds

2. **Check n8n Logs**
   - In n8n, go to **Executions**
   - Check if there are any errors
   - Look for webhook registration messages

3. **Verify Webhook Path Matches**
   - Webhook node path: `appointment-booking`
   - Your URL path: `/webhook/appointment-booking`
   - These must match!

4. **Check for Multiple Workflows**
   - Make sure you only have ONE workflow with path `appointment-booking`
   - Multiple workflows with same path can conflict
   - Deactivate or delete duplicates

### For Local n8n:

1. **Make sure n8n is running**
   ```bash
   # Check if n8n is running
   # Should be accessible at http://localhost:5678
   ```

2. **Check n8n logs**
   - Look in the terminal where n8n is running
   - Check for webhook registration messages

3. **Verify Port**
   - Default port is `5678`
   - If you changed it, update your `.env.local` accordingly

### For n8n Cloud:

1. **Verify Instance URL**
   - Make sure you're using the correct n8n cloud instance URL
   - Check your n8n cloud dashboard URL

2. **Check Webhook Path**
   - n8n cloud webhooks are at: `https://[your-instance].app.n8n.cloud/webhook/[path]`
   - Make sure path matches exactly

## 📋 Quick Checklist

- [ ] Workflow is **saved** in n8n
- [ ] Workflow is **ACTIVE** (toggle is ON/blue)
- [ ] Webhook node path is exactly: `appointment-booking`
- [ ] Webhook node HTTP method is: `POST`
- [ ] `.env.local` has correct `N8N_WEBHOOK_URL`
- [ ] URL in `.env.local` matches the URL shown in Webhook node
- [ ] Dev server restarted after changing `.env.local`
- [ ] n8n instance is running (for local)
- [ ] Tested webhook with curl and got response (not 404)

## 🎯 Most Common Solution

**90% of the time**, the issue is:
1. Workflow not activated → **Activate it!**
2. `.env.local` has wrong URL → **Use the exact URL from Webhook node**

Try these two things first!

---

**Still not working?** 
- Check n8n execution logs
- Verify the workflow was imported correctly
- Make sure you're using the advanced workflow file if you set up all integrations






