import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({
      error: 'Supabase not configured',
      message: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY',
    })
  }

  const { name, email, company, message, userAgent } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const forwardedFor = req.headers['x-forwarded-for']
  const ip =
    (Array.isArray(forwardedFor) ? forwardedFor[0] : (forwardedFor || '')).split(',')[0].trim() ||
    req.socket?.remoteAddress ||
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
        user_agent: userAgent || req.headers['user-agent'] || null,
        status: 'new',
      },
    ])

    if (error) {
      return res.status(500).json({ error: 'Insert failed', details: error.message })
    }

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Server error', message: e?.message || 'Unknown error' })
  }
}


