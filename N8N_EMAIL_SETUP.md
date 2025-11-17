# 📧 Email Setup for Nova Voice Agent

This guide will help you configure email (SMTP) in n8n so Nova can send appointment confirmation emails automatically.

## 🎯 Overview

The workflow sends email confirmations after successfully booking an appointment in Google Calendar. The email includes:
- Appointment date and time
- Meeting duration
- Confirmation message

## 📋 Step-by-Step Setup

### Step 1: Choose an SMTP Provider

You can use any of these SMTP services:

#### Option A: Gmail (Easiest for Testing)
- **SMTP Server**: `smtp.gmail.com`
- **Port**: `587` (TLS) or `465` (SSL)
- **Requires**: App password (not regular password)

#### Option B: SendGrid (Recommended for Production)
- **SMTP Server**: `smtp.sendgrid.net`
- **Port**: `587`
- **Requires**: API key (free tier: 100 emails/day)

#### Option C: AWS SES (For High Volume)
- **SMTP Server**: Varies by region (e.g., `email-smtp.us-east-1.amazonaws.com`)
- **Port**: `587`
- **Requires**: AWS credentials

#### Option D: Your Domain Email (buildverse.studio)
- **SMTP Server**: Your email provider's SMTP server
- **Port**: Usually `587` or `465`
- **Requires**: Email account credentials

### Step 2: Get SMTP Credentials

#### For Gmail:
1. **Enable 2-Step Verification**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Create App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it: "n8n Nova"
   - Click "Generate"
   - **⚠️ IMPORTANT**: Copy the 16-character password immediately!
   - Format: `xxxx xxxx xxxx xxxx` (Google shows it with spaces)
   - **💡 Tip**: Click the password text to select all, or manually copy it
   - **❌ If you didn't copy it**: You can't retrieve it - just delete it and create a new one (see below)

3. **SMTP Settings:**
   - **Host**: `smtp.gmail.com` (exact, no typos)
   - **Port**: `587` (for TLS) or `465` (for SSL)
   - **User**: Your full Gmail address (e.g., `chiragpatankar2004@gmail.com`)
   - **Password**: The 16-character app password 
     - ⚠️ Remove spaces! If it shows `abcd efgh ijkl mnop`, enter: `abcdefghijklmnop`
     - ⚠️ NOT your regular Gmail password!
   - **Secure**: TLS (for port 587) or SSL (for port 465)
   - **Enable SSL/TLS**: ✅ Must be checked

#### For SendGrid:
1. **Sign up**: https://sendgrid.com/ (free tier available)
2. **Create API Key**
   - Dashboard → Settings → API Keys
   - Create API Key with "Mail Send" permissions
   - Copy the API key
3. **SMTP Settings:**
   - **Host**: `smtp.sendgrid.net`
   - **Port**: `587`
   - **User**: `apikey` (literal word "apikey")
   - **Password**: Your SendGrid API key
   - **Secure**: TLS

#### For Your Domain Email (buildverse.studio):
1. **Find your email provider's SMTP settings**
   - Check with your domain/email provider
   - Common settings:
     - **Host**: `smtp.your-provider.com` or `mail.buildverse.studio`
     - **Port**: `587` (TLS) or `465` (SSL)
     - **User**: `hello@buildverse.studio` or `chirag@buildverse.studio`
     - **Password**: Your email account password

### Step 3: Configure SMTP Credentials in n8n

1. **Open n8n**
   - Log into your n8n instance

2. **Go to Credentials**
   - Click your profile icon (top right) → "Credentials"
   - Or go to: Settings → Credentials

3. **Create New Credential**
   - Click "Add Credential"
   - Search for "SMTP"
   - Select "SMTP" credential type

4. **Fill in SMTP Details**
   - **Credential Name**: `Nova Email (Gmail)` or similar
   - **Host**: Your SMTP host (e.g., `smtp.gmail.com`)
   - **Port**: Your SMTP port (e.g., `587`)
   - **User**: Your SMTP username (email address)
   - **Password**: Your SMTP password (or app password)
   - **Client Hostname** (Optional): 
     - For your domain: `buildverse.studio` or `mail.buildverse.studio`
     - For n8n cloud: Your n8n instance URL (e.g., `yourname.app.n8n.cloud`)
     - For local: `localhost` or leave empty
     - **Note**: This is optional - you can leave it blank if not required
   - **Secure**: Select `TLS` (for port 587) or `SSL` (for port 465)
   - **Enable SSL/TLS**: Check this box

5. **Test Connection** (if available)
   - Some n8n versions have a "Test" button
   - Click it to verify credentials work

6. **Save**
   - Click "Save" to store the credential

### Step 4: Configure Email Node in Workflow

1. **Open Your Workflow**
   - Import or open: `n8n-workflow-nova-voice-agent-advanced.json`

2. **Find Email Node**
   - Look for "Email Confirmation" node
   - Click on it to edit

3. **Select SMTP Credential**
   - Under "Credential for SMTP", select your credential from Step 3

4. **Configure Email Settings** (if needed)
   - **From Email**: Should be `{{ $env.SMTP_FROM || 'hello@buildverse.studio' }}`
   - **To Email**: `{{ $json.structured.email }}` (automatically from user)
   - **Subject**: `Your BuildVerse meeting is scheduled`
   - **Text/Message**: Already configured with appointment details

5. **Set Environment Variable (Optional)**
   - In n8n Settings → Environment Variables
   - Add: `SMTP_FROM` = `hello@buildverse.studio`
   - This sets the "From" email address globally

6. **Save Workflow**
   - Click "Save" to save the workflow

### Step 5: Test Email

1. **Activate Workflow**
   - Make sure the workflow is ACTIVE (toggle in top-right)

2. **Test via Nova**
   - Open your website
   - Use Nova to book a test appointment
   - Complete the booking flow
   - Check the email inbox for the confirmation

3. **Or Test Manually**
   - In n8n, click "Execute Workflow"
   - Send a test message to the webhook
   - Check if email is sent

## 🔧 Email Content Customization

You can customize the email message in the workflow. The email node currently sends:

**Subject**: `Your BuildVerse meeting is scheduled`

**Body**: `Hi, your meeting is scheduled on [date/time]. We will email you details shortly. - BuildVerse`

To customize:

1. **Edit Email Node**
   - Click on "Email Confirmation" node
   - Modify the "Text" field

2. **Example Custom Message:**
   ```
   Hi {{ $json.structured.name || 'there' }},

   Your {{ $json.structured.duration }}-minute meeting with BuildVerse is confirmed!

   Date: {{ $json.structured.date }}
   Time: {{ $json.structured.time }}
   Purpose: {{ $json.structured.purpose || 'General discussion' }}

   We look forward to speaking with you!

   Best regards,
   BuildVerse Team
   ```

3. **Use HTML Email** (Advanced)
   - You can add an "HTML" field for rich formatting
   - Use HTML tags for better styling

## 🐛 Troubleshooting

### "Authentication Failed" Error (Gmail: 535-5.7.8 Username and Password not accepted)

**Problem**: SMTP credentials are incorrect, especially with Gmail.

**Solution for Gmail:**

1. **Verify 2-Step Verification is Enabled**
   - Go to: https://myaccount.google.com/security
   - Make sure "2-Step Verification" is ON (green)
   - If OFF, enable it first

2. **Create/Verify App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in if needed
   - **If you already created one but lost the password**: 
     - Find "n8n Nova" in the list (if it exists)
     - Click the trash icon 🗑️ to delete it
     - Create a new one (you can't retrieve old passwords!)
   - Select "Mail" and "Other (Custom name)"
   - Name it: "n8n Nova"
   - Click "Generate"
   - **⚠️ CRITICAL**: Copy the 16-character password immediately!
   - Format: `xxxx xxxx xxxx xxxx` (4 groups of 4 characters)
   - **💡 Pro Tip**: 
     - Right-click the password → Select All → Copy
     - Or paste it into Notepad first, then copy from there
     - This ensures you have it saved before closing the page

3. **Use App Password in n8n**
   - **Username**: Your full Gmail address (e.g., `chiragpatankar2004@gmail.com`)
   - **Password**: The 16-character App Password (remove spaces - use as one string)
   - Example: If App Password shows `abcd efgh ijkl mnop`, enter: `abcdefghijklmnop` (no spaces)

4. **Double-Check Settings**
   - **Host**: `smtp.gmail.com` (exact spelling)
   - **Port**: `587` (TLS) or `465` (SSL)
   - **User**: Your full Gmail email address
   - **Password**: App Password (no spaces, 16 characters)
   - **Secure**: `TLS` for port 587, or `SSL` for port 465
   - **Enable SSL/TLS**: ✅ Checked

5. **Common Mistakes to Avoid**
   - ❌ Using your regular Gmail password (won't work!)
   - ❌ Forgetting to remove spaces from App Password
   - ❌ Using wrong email address (must match the account where App Password was created)
   - ❌ 2-Step Verification not enabled before creating App Password

**If You Didn't Copy the App Password:**
- Don't worry! You can't retrieve it, but you can create a new one:
  1. Go to: https://myaccount.google.com/apppasswords
  2. Find the "n8n Nova" password (or any unused App Password)
  3. Click the trash icon to delete it
  4. Create a new one following the steps above
  5. Copy it immediately this time!

**If Still Not Working:**
- Delete the credential in n8n and recreate it
- Generate a new App Password (delete old one first if you lost it)
- Make sure you're using the email that has 2-Step Verification enabled
- Try copying the password to a text file first, then pasting into n8n

### "Connection Timeout" Error

**Problem**: Can't connect to SMTP server.

**Solution**:
1. Verify SMTP host address is correct
2. Check if port 587/465 is blocked by firewall
3. Try using SSL on port 465 instead of TLS on 587
4. Check network connectivity

### "Email Not Sending"

**Problem**: Workflow runs but no email arrives.

**Solution**:
1. Check spam/junk folder
2. Verify the "To" email address is correct
3. Check n8n execution logs for errors
4. Test SMTP credentials separately (use email client to verify)
5. For Gmail: Make sure "Less secure app access" is enabled (or use App Password)

### "Sender Address Rejected"

**Problem**: Email provider rejects the "From" address.

**Solution**:
1. Use an email address that matches your SMTP account
2. If using Gmail, use your Gmail address as "From"
3. If using SendGrid, verify your sender domain
4. Check SPF/DKIM records for your domain

### Gmail-Specific Issues

**"Username and Password not accepted"**
- You MUST use an App Password, not your regular Gmail password
- Make sure 2-Step Verification is enabled

**"Less secure app access"**
- Gmail no longer supports this
- Always use App Passwords instead

## 📝 Quick Reference

### Common SMTP Settings

| Provider | Host | Port | User | Password |
|----------|------|------|------|----------|
| Gmail | `smtp.gmail.com` | 587 | Your email | App Password |
| SendGrid | `smtp.sendgrid.net` | 587 | `apikey` | API Key |
| Outlook | `smtp.office365.com` | 587 | Your email | Your password |
| AWS SES | `email-smtp.[region].amazonaws.com` | 587 | Access Key | Secret Key |

### Environment Variables (Optional)

Set these in n8n Settings → Environment Variables:
- `SMTP_FROM`: Default sender email (e.g., `hello@buildverse.studio`)

## ✅ Setup Checklist

- [ ] Chosen SMTP provider
- [ ] Obtained SMTP credentials (host, port, user, password)
- [ ] Created SMTP credential in n8n
- [ ] Tested SMTP connection
- [ ] Selected credential in Email node
- [ ] Set `SMTP_FROM` environment variable (optional)
- [ ] Tested email sending via workflow
- [ ] Received test email in inbox

## 🎉 Next Steps

Once email is configured:
1. ✅ Appointments will automatically send confirmation emails
2. ✅ Users receive instant confirmation after booking
3. ✅ You can customize email templates
4. ✅ Add calendar invites/ICS files (advanced)

---

**Need help?** Check n8n's documentation or your SMTP provider's support pages.

