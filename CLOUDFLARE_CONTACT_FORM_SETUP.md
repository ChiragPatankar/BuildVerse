# Cloudflare Pages Contact Form Setup

The contact form now uses a Cloudflare Pages Function instead of Next.js API routes.

## Function Location

The function is located at: `functions/api/contact.js`

This automatically handles requests to `/api/contact` on your Cloudflare Pages deployment.

## Environment Variables

In your Cloudflare Pages dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables for **Production** (and Preview if needed):

```
SUPABASE_URL=https://zluobcnwugtfzixelcwt.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

⚠️ **Important**: Make sure you use the **Service Role Key** (not the anon key) for server-side operations.

## How It Works

- Frontend (`components/Contact.jsx`) sends POST to `/api/contact`
- Cloudflare Pages Function (`functions/api/contact.js`) intercepts the request
- Function validates input and inserts into Supabase `public.contact_submissions` table
- Returns `{ ok: true }` on success

## Testing

After deploying:
1. Submit the contact form on your live site
2. Check Supabase Table Editor → `public.contact_submissions` for new rows

## Local Development

For local development, the Next.js API route (`pages/api/contact.js`) still works. The Cloudflare function only runs in production on Cloudflare Pages.

