import { createClient } from '@supabase/supabase-js'

export async function onRequestPost(context) {
  const { request, env } = context

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  // Handle OPTIONS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = env.SUPABASE_URL
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(
      JSON.stringify({
        error: 'Supabase not configured',
        message: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Please set these in Cloudflare Pages Environment Variables.',
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    )
  }

  let body
  try {
    body = await request.json()
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON', details: e.message }),
      {
        status: 400,
        headers: corsHeaders,
      }
    )
  }

  const { name, email, company, message, userAgent } = body || {}

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields', received: { name: !!name, email: !!email, message: !!message } }),
      {
        status: 400,
        headers: corsHeaders,
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
        JSON.stringify({ 
          error: 'Insert failed', 
          details: error.message,
          code: error.code,
          hint: error.hint,
        }),
        {
          status: 500,
          headers: corsHeaders,
        }
      )
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: corsHeaders,
      }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({ 
        error: 'Server error', 
        message: e?.message || 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? e?.stack : undefined,
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    )
  }
}

