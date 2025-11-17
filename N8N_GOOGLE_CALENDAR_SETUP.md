# 📅 Google Calendar Setup for n8n

This guide will help you set up Google Calendar credentials in n8n so Nova can create calendar events automatically.

## 🎯 Prerequisites

- A Google account (Gmail, Google Workspace, etc.)
- Access to Google Cloud Console
- n8n instance (cloud or self-hosted)

## 📋 Step-by-Step Setup

### Step 1: Create Google Cloud Project

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click the project dropdown (top bar)
   - Click "New Project"
   - Enter project name: `BuildVerse Calendar Integration` (or any name)
   - Click "Create"

3. **Select the Project**
   - Make sure your new project is selected in the dropdown

### Step 2: Enable Google Calendar API

1. **Navigate to APIs & Services**
   - Click the hamburger menu (☰) → "APIs & Services" → "Library"

2. **Search for Google Calendar API**
   - Type "Google Calendar API" in the search bar
   - Click on "Google Calendar API"

3. **Enable the API**
   - Click the "Enable" button
   - Wait for it to be enabled (may take a few seconds)

### Step 3: Create OAuth 2.0 Credentials

1. **Go to Credentials**
   - Click "APIs & Services" → "Credentials" (left sidebar)

2. **Create OAuth Consent Screen**
   - Click "OAuth consent screen" (top tab)
   - Choose "External" (unless you have Google Workspace)
   - Click "Create"

3. **Fill OAuth Consent Screen**
   - **App name**: `BuildVerse Calendar` (or any name)
   - **User support email**: Your email
   - **Developer contact email**: Your email
   - Click "Save and Continue"

4. **Scopes** (Skip for now)
   - Click "Save and Continue" (we'll add scopes later)

5. **Test Users** (If External - IMPORTANT!)
   - **This step is critical!** Add your email address here
   - Add: `buildversestudio@gmail.com` and/or `chiragpatankar2004@gmail.com`
   - Without this, you'll get "Error 403: access_denied" when trying to authorize
   - Click "Save and Continue"
   - 💡 You can add more test users later in the OAuth consent screen

6. **Summary**
   - Review and click "Back to Dashboard"

### Step 4: Create OAuth Client ID

1. **Create Credentials**
   - Go to "Credentials" tab
   - Click "+ CREATE CREDENTIALS" → "OAuth client ID"

2. **Configure OAuth Client**
   - **Application type**: Choose "Web application"
   - **Name**: `n8n Calendar Integration`

3. **Authorized redirect URIs**
   - For **n8n Cloud**: 
     ```
     https://n8n.your-instance.com/rest/oauth2-credential/callback
     ```
     (Replace with your actual n8n cloud URL)
   
   - For **Self-hosted n8n**:
     ```
     http://localhost:5678/rest/oauth2-credential/callback
     ```
     (Or your n8n URL + `/rest/oauth2-credential/callback`)

4. **Save Credentials**
   - Click "Create"
   - **IMPORTANT**: Copy the **Client ID** and **Client Secret**
   - Save them securely (you'll need them in n8n)

### Step 5: Configure in n8n

1. **Open n8n**
   - Log into your n8n instance

2. **Go to Credentials**
   - Click your profile icon (top right) → "Credentials"
   - Or go to: Settings → Credentials

3. **Create New Credential**
   - Click "Add Credential"
   - Search for "Google Calendar OAuth2 API"
   - Select it

4. **Fill in OAuth Details**
   - **Credential Name**: `Google Calendar for Nova` (or any name)
   - **Client ID**: Paste your Client ID from Step 4
   - **Client Secret**: Paste your Client Secret from Step 4
   - **Scope**: 
     ```
     https://www.googleapis.com/auth/calendar.events
     ```
     (Or you can use broader scope: `https://www.googleapis.com/auth/calendar`)

5. **Authorize**
   - Click "Connect my account" or "Save" button
   - You'll be redirected to Google
   - Sign in and grant permissions
   - You'll be redirected back to n8n

6. **Verify**
   - The credential should show as "Connected" or with a green checkmark

### Step 6: Use in Workflow

1. **Open Your Workflow**
   - Import or open the `n8n-workflow-nova-voice-agent-advanced.json`

2. **Configure Google Calendar Node**
   - Click on the "Google Calendar - Create Event" node
   - Under "Credential for Google Calendar", select your credential from Step 5
   - Configure other fields as needed

3. **Test**
   - Click "Execute Workflow" or test with a sample input
   - Check if a calendar event is created

## 🔧 Important Configuration Notes

### Redirect URI Format

The redirect URI **must** match exactly:
- **n8n Cloud**: `https://[your-n8n-instance]/rest/oauth2-credential/callback`
- **Self-hosted**: `http://[your-host]:[port]/rest/oauth2-credential/callback`

### Scopes Required

For creating calendar events, you need:
- `https://www.googleapis.com/auth/calendar.events` (minimum)
- Or `https://www.googleapis.com/auth/calendar` (full access)

### Calendar ID

In the workflow, you can specify:
- `primary` - Your primary calendar (default)
- Or a specific calendar ID (found in Google Calendar settings)

## 🐛 Troubleshooting

### "Redirect URI mismatch" Error (Error 400)

**Problem**: The redirect URI in Google Cloud doesn't match n8n's expected URI.

**Quick Fix Steps**:

1. **Find your n8n instance URL**
   - If using **n8n Cloud**: Check your n8n dashboard URL (e.g., `https://yourname.app.n8n.cloud`)
   - If using **Self-hosted**: Check your n8n URL (e.g., `http://localhost:5678` or your domain)

2. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Navigate to: **APIs & Services** → **Credentials**
   - Find your OAuth 2.0 Client ID and click to edit it

3. **Update Authorized redirect URIs**
   - **For n8n Cloud**, add:
     ```
     https://[your-n8n-instance].app.n8n.cloud/rest/oauth2-credential/callback
     ```
     Example: `https://yourname.app.n8n.cloud/rest/oauth2-credential/callback`
   
   - **For Self-hosted n8n** (local):
     ```
     http://localhost:5678/rest/oauth2-credential/callback
     ```
   
   - **For Self-hosted n8n** (custom domain):
     ```
     https://[your-domain]/rest/oauth2-credential/callback
     ```
   
   **Important Notes**:
   - ⚠️ The URL must match **exactly** (including `http://` vs `https://`)
   - ⚠️ No trailing slashes
   - ⚠️ Use the exact path: `/rest/oauth2-credential/callback`

4. **Save and Retry**
   - Click "Save" in Google Cloud Console
   - Go back to n8n and try authorizing again
   - The redirect should work now

5. **If still not working**, check:
   - Make sure you're using the correct OAuth Client ID in n8n
   - Verify the n8n instance URL is accessible
   - Clear browser cache and try again
   - Wait a few minutes for Google's changes to propagate

### "Access Denied" Error (Error 403: access_denied)

**Problem**: The OAuth app is in "Testing" mode and your email is not added as a test user, OR the app hasn't been verified/published.

**Solution - Option 1: Add Test User (Recommended for Development)**

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Navigate to: **APIs & Services** → **OAuth consent screen**

2. **Scroll to "Test users" section**
   - If your app is set to "Testing" (which it likely is), you need to add test users

3. **Click "+ ADD USERS"**
   - Add the email address: `buildversestudio@gmail.com`
   - Or add `chiragpatankar2004@gmail.com` (your personal email)
   - Click "Add"

4. **Save and Retry**
   - The page will save automatically
   - Go back to n8n and try authorizing again
   - You should now be able to sign in

**Solution - Option 2: Publish the App (For Production)**

⚠️ Only do this if you want the app to be publicly accessible. For development, Option 1 is better.

1. **Go to OAuth Consent Screen**
   - Visit: https://console.cloud.google.com/apis/credentials/consent
   - Scroll to bottom

2. **Click "PUBLISH APP"**
   - Confirm the warning
   - Your app will be published (unverified apps can still work but show warnings)

3. **Note**: 
   - Unverified apps may show warnings to users
   - For production, you'll eventually want to verify the app with Google
   - For development/testing, adding test users is easier

**Quick Fix Checklist:**
- [ ] Go to OAuth consent screen in Google Cloud Console
- [ ] Check if app is in "Testing" mode
- [ ] Add your email(s) as test users
- [ ] Save changes
- [ ] Retry authorization in n8n

### "Calendar API not enabled" Error

**Problem**: Google Calendar API is not enabled.

**Solution**:
1. Go to Google Cloud Console → APIs & Services → Library
2. Search for "Google Calendar API"
3. Make sure it's enabled

### Credential Shows as "Not Connected"

**Solution**:
1. Delete the credential in n8n
2. Recreate it with correct Client ID and Secret
3. Re-authorize when prompted

## 📝 Quick Checklist

- [ ] Google Cloud project created
- [ ] Google Calendar API enabled
- [ ] OAuth consent screen configured
- [ ] OAuth client ID created
- [ ] Redirect URI added correctly
- [ ] Client ID and Secret copied
- [ ] Credential created in n8n
- [ ] OAuth authorization completed
- [ ] Google Calendar node configured in workflow
- [ ] Test execution successful

## 🎉 Next Steps

Once Google Calendar is set up:
1. Your workflow can create calendar events automatically
2. Events will appear in the calendar specified (default: primary)
3. Attendees will receive email invitations (if email is configured)
4. You can extend to check availability, find free slots, etc.

**Next**: Set up email confirmation for appointments - See [N8N_EMAIL_SETUP.md](./N8N_EMAIL_SETUP.md)

---

**Need help?** Check n8n's official documentation or Google Cloud Console help for more details.




