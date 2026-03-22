/**
 * Cloudflare Pages Function — mirrors pages/api/popup-lead.js
 * Required on static export (output: 'export'); Next.js API routes are not deployed to CF Pages.
 */

function getBookingCalUrl(env) {
  return (
    env.CAL_COM_BOOKING_URL ||
    env.NEXT_PUBLIC_CAL_BOOKING_URL ||
    'https://cal.com/chirag-9yxbl2/20-min-strategy-call'
  )
}

function corsJson(status, data) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
  })
}

const withTimeout = (promise, ms) => {
  let timeoutId
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(`Supabase timeout after ${ms}ms`)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function onRequestPost(context) {
  const { request, env } = context

  const supabaseUrl = env.SUPABASE_URL
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    return corsJson(500, {
      error: 'Supabase not configured',
      message: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY',
    })
  }

  let body
  try {
    body = await request.json()
  } catch (e) {
    return corsJson(400, { error: 'Invalid JSON', details: e.message })
  }

  const { email, company, productId, variant, answers, caseStudyUrl } = body || {}

  if (!email || !company) {
    return corsJson(400, { error: 'Missing required fields: email, company' })
  }

  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    null

  const name = company || 'Popup Lead'
  const messagePayload = {
    productId: productId || null,
    variant: variant || productId || null,
    answers: answers || {},
    caseStudyUrl: caseStudyUrl || null,
    source: 'SmartExitPopup',
  }

  const row = {
    name,
    email,
    company: company || null,
    message: JSON.stringify(messagePayload),
    source: 'SmartExitPopup',
    ip,
    user_agent: request.headers.get('user-agent') || null,
    status: 'new',
  }

  try {
    const insertPromise = fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseServiceKey,
        Authorization: `Bearer ${supabaseServiceKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify([row]),
    })

    const insertResp = await withTimeout(insertPromise, 5000)
    if (!insertResp.ok) {
      const detailText = await insertResp.text().catch(() => '')
      const details = detailText || `HTTP ${insertResp.status}`
      return corsJson(500, { error: 'Insert failed', details })
    }

    const brevoKey = env.BREVO_API_KEY
    const senderEmail = env.BREVO_SENDER_EMAIL
    const senderName = env.BREVO_SENDER_NAME || 'BuildVerse'
    const calBookingUrl = getBookingCalUrl(env)

    let emailSent = false
    let emailStatus = 'not_configured'

    if (brevoKey && senderEmail && caseStudyUrl) {
      const topicLabel =
        {
          AI_AGENTS: 'AI voice & lead qualification',
          MVP: 'MVP & product delivery',
          CRM: 'Custom CRM',
          BI: 'Analytics & dashboards',
          MULTI_PRODUCT: 'AI implementation',
        }[variant] || 'BuildVerse resources'

      const safeUrl = String(caseStudyUrl).replace(/&/g, '&amp;')
      const safeCalUrl = String(calBookingUrl).replace(/&/g, '&amp;')

      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BuildVerse</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0f172a;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.25);">
          <tr>
            <td style="background:linear-gradient(90deg,#2563eb,#7c3aed);padding:16px 24px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.85);">BuildVerse · Field notes</p>
              <p style="margin:6px 0 0;font-size:20px;font-weight:700;color:#ffffff;">Your recommended read</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px 8px;">
              <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#334155;">Hi there,</p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
                Thanks for grabbing a resource from us. Below is the <strong style="color:#0f172a;">case study we picked for you</strong> based on <strong style="color:#0f172a;">${topicLabel}</strong> — real outcomes, timelines, and how we ship.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Featured case study</p>
                    <p style="margin:0 0 16px;font-size:16px;font-weight:700;color:#0f172a;line-height:1.4;">Open the full story — implementation, stack, and results.</p>
                    <a href="${safeUrl}" style="display:inline-block;padding:12px 22px;background:#2563eb;color:#ffffff !important;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">Read case study →</a>
                    <p style="margin:16px 0 0;font-size:12px;color:#64748b;word-break:break-all;">${safeUrl}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:linear-gradient(135deg,#f5f3ff 0%,#eef2ff 100%);border:1px solid #c7d2fe;border-radius:10px;">
                <tr>
                  <td style="padding:22px 20px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#5b21b6;">Book a call</p>
                    <p style="margin:0 0 14px;font-size:15px;font-weight:600;color:#1e1b4b;line-height:1.45;">Liked what you read? Grab a 20‑minute slot — we’ll align on your goal and next steps.</p>
                    <a href="${safeCalUrl}" style="display:inline-block;padding:12px 22px;background:#7c3aed;color:#ffffff !important;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">Book a 20‑min strategy call →</a>
                    <p style="margin:12px 0 0;font-size:12px;color:#64748b;word-break:break-all;">${safeCalUrl}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;">
              <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#0f172a;">This week at BuildVerse</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:14px;color:#475569;line-height:1.55;"><strong style="color:#0f172a;">1.</strong> We help teams ship production AI and software in <strong>weeks</strong>, not quarters — with fixed scope where it matters.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:14px;color:#475569;line-height:1.55;"><strong style="color:#0f172a;">2.</strong> Reply to this email with your goal (e.g. “voice agent for support” or “MVP in 6 weeks”) — we’ll point you to the right next step.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:14px;color:#475569;line-height:1.55;"><strong style="color:#0f172a;">3.</strong> Same Cal link as above — <a href="${safeCalUrl}" style="color:#2563eb;">book a 20‑min strategy call</a> anytime.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 28px;background:#f1f5f9;border-top:1px solid #e2e8f0;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748b;line-height:1.5;">You’re receiving this because you requested a resource on <a href="https://buildverse.studio" style="color:#2563eb;">buildverse.studio</a>.</p>
              <p style="margin:0 0 12px;font-size:13px;color:#64748b;">BuildVerse — AI + software for US, UK &amp; EU teams.</p>
              <p style="margin:0 0 12px;font-size:13px;">
                <a href="${safeCalUrl}" style="color:#2563eb;font-weight:600;text-decoration:none;">Book a 20‑min call on Cal.com →</a>
              </p>
              <p style="margin:0;font-size:12px;">
                <a href="https://www.linkedin.com/company/buildverse-studio/" style="color:#64748b;text-decoration:none;margin-right:12px;">LinkedIn</a>
                <a href="https://x.com/_BuildVerse_" style="color:#64748b;text-decoration:none;">X</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

      const textContent = `BuildVerse — Your recommended case study

Hi,

Thanks for requesting a resource from us. Here is your case study link (picked for: ${topicLabel}):
${caseStudyUrl}

---
BOOK A CALL (Cal.com — same link in every email):
${calBookingUrl}
Grab a 20-minute slot if you want to talk through your goal and next steps.
---

This week:
1) We ship production AI & software in weeks, with clear scope.
2) Reply with your goal — we'll suggest the right next step.
3) Prefer scheduling? Use the Cal link above anytime.

You're receiving this because you submitted the form on buildverse.studio.
BuildVerse — https://buildverse.studio
`

      const emailPayload = {
        sender: { name: senderName, email: senderEmail },
        to: [{ email }],
        subject: `BuildVerse — Your case study (${topicLabel})`,
        htmlContent,
        textContent,
      }

      try {
        const brevoResp = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': brevoKey,
          },
          body: JSON.stringify(emailPayload),
        })
        if (brevoResp.ok) {
          emailSent = true
          emailStatus = 'sent'
        } else {
          emailStatus = `brevo_http_${brevoResp.status}`
        }
      } catch (emailErr) {
        emailStatus = 'send_failed'
        console.error('Brevo send failed:', emailErr?.message || emailErr)
      }
    } else if (caseStudyUrl) {
      emailStatus = 'missing_brevo_config'
    }

    return corsJson(200, { ok: true, emailSent, emailStatus })
  } catch (e) {
    return corsJson(500, {
      error: 'Server error',
      message: e?.message || 'Unknown error',
    })
  }
}
