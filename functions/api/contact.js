import { createClient } from '@supabase/supabase-js'

export async function onRequestPost(context) {
  const { request, env } = context

  const supabaseUrl = env.SUPABASE_URL
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(
      JSON.stringify({
        error: 'Supabase not configured',
        message: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  let body
  try {
    body = await request.json()
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const { name, email, company, message, userAgent } = body || {}

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  // Extract IP from Cloudflare headers
  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    null

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  })

  try {
    const { error } = await supabase.from('contact_submissions').insert([
      {
        name,
        email,
        company: company || null,
        message,
        source: 'Website Contact Form',
        ip,
        user_agent: userAgent || request.headers.get('user-agent') || null,
        status: 'new',
      },
    ])

    if (error) {
      return new Response(
        JSON.stringify({ error: 'Insert failed', details: error.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Server error', message: e?.message || 'Unknown error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

