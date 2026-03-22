import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { FiX, FiCheck } from 'react-icons/fi'

const DAY_KEY = () => new Date().toDateString()

const padMod = (value) => (Number.isFinite(value) ? value : 0)

const getScrollProgress = () => {
  const doc = document.documentElement
  const scrollTop = window.scrollY || doc.scrollTop || 0
  const maxScroll = doc.scrollHeight - window.innerHeight
  if (maxScroll <= 0) return 0
  return (scrollTop / maxScroll) * 100
}

const pickMostVisibleProduct = () => {
  const nodes = Array.from(document.querySelectorAll('[data-product-id]'))
  let best = null
  let bestScore = -1

  for (const el of nodes) {
    const rect = el.getBoundingClientRect()
    const visibleTop = Math.max(rect.top, 0)
    const visibleBottom = Math.min(rect.bottom, window.innerHeight)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop)
    const ratio = rect.height > 0 ? visibleHeight / rect.height : 0

    if (ratio > bestScore) {
      bestScore = ratio
      best = el.getAttribute('data-product-id')
    }
  }

  return best || 'MULTI_PRODUCT'
}

export default function SmartExitPopup() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [emailStatusText, setEmailStatusText] = useState('')

  // Detected product interest (ref so we can update from observers without rerender loops)
  const interestRef = useRef('MULTI_PRODUCT')
  const visibleSinceTimerRef = useRef({})

  const popupKey = useMemo(() => `buildversePopup:${DAY_KEY()}`, [])

  // Form state (minimal friction for local testing)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [field, setField] = useState('')

  const [variant, setVariant] = useState('MULTI_PRODUCT')

  const routeMap = useMemo(
    () => ({
      AI_AGENTS: '/case-studies/voice-activated-sales-system?utm_source=popup&utm_product=ai_agents',
      MVP: '/case-studies/ai-customer-support-platform?utm_source=popup&utm_product=mvp',
      CRM: '/case-studies/personalization-recommendation-engine?utm_source=popup&utm_product=crm',
      BI: '/case-studies/predictive-analytics-engine?utm_source=popup&utm_product=bi',
      MULTI_PRODUCT: '/case-studies/ai-customer-support-platform?utm_source=popup&utm_product=multi',
    }),
    []
  )

  const variantCopy = useMemo(() => {
    const base = {
      AI_AGENTS: {
        headline: 'Get Your Free Lead Qualification Blueprint',
        subheading: 'See how AI can qualify inbound leads and book meetings—without adding headcount.',
        inputLabel: 'Phone number (for voice call follow-up)',
        placeholder: 'Your phone number',
        buttonText: 'Send Me The Blueprint',
        utmProduct: 'ai_agents',
      },
      MVP: {
        headline: 'Get Your Free MVP Roadmap',
        subheading: 'Launch your SaaS idea in 2–8 weeks with a production-ready plan.',
        inputLabel: 'What timeline are you targeting?',
        placeholder: 'e.g. 4–8 weeks / ASAP / this quarter',
        buttonText: 'Get My Free Roadmap',
        utmProduct: 'mvp',
      },
      CRM: {
        headline: 'Get Your Free CRM Requirements Guide',
        subheading: 'Stop paying for generic CRM. We map your workflows into a tailored system.',
        inputLabel: 'Which industry are you building for?',
        placeholder: 'e.g. healthcare, real estate, agencies, legal',
        buttonText: 'Send Me My Assessment',
        utmProduct: 'crm',
      },
      BI: {
        headline: 'Get Your Free Analytics Audit',
        subheading: 'Turn scattered data into dashboards and predictive insights your team can act on.',
        inputLabel: 'What metrics matter most?',
        placeholder: 'e.g. conversion, churn, retention, pipeline',
        buttonText: 'Send Me My Audit',
        utmProduct: 'bi',
      },
      MULTI_PRODUCT: {
        headline: 'Get Your Free AI Implementation Guide',
        subheading: 'Tell us your goal and we’ll recommend the best path: AI agent, MVP, CRM, or BI.',
        inputLabel: 'What are you trying to achieve?',
        placeholder: 'e.g. reduce support costs, ship MVP, build CRM, improve insights',
        buttonText: 'Show Me What Fits',
        utmProduct: 'multi',
      },
    }
    return base[variant] || base.MULTI_PRODUCT
  }, [variant])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only run on homepage locally (safe-guard)
    if (router.pathname !== '/') return

    const debugPopup = new URLSearchParams(window.location.search).get('popup_test') === '1'

    const submitted = localStorage.getItem(`${popupKey}:submitted`)
    const dismissed = localStorage.getItem(`${popupKey}:dismissed`)
    const visitCountRaw = localStorage.getItem(`${popupKey}:visitCount`)
    const visitCount = padMod(parseInt(visitCountRaw || '0', 10))

    if (debugPopup) {
      setVariant(pickMostVisibleProduct())
      setIsOpen(true)
      return
    }

    // Count this visit once per mount.
    if (!submitted && !dismissed) {
      localStorage.setItem(`${popupKey}:visitCount`, String(visitCount + 1))
    }

    // Eligibility checks
    const suppressedBySubmission = Boolean(submitted)
    const suppressedByVisits = visitCount >= 3
    if (suppressedBySubmission || suppressedByVisits) return

    // Setup product interest detection:
    // - if a product card stays in view for >= 30s, it becomes the strongly-detected variant
    const nodes = Array.from(document.querySelectorAll('[data-product-id]'))
    if (nodes.length > 0) {
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const productId = entry.target.getAttribute('data-product-id')
            if (!productId) continue

            if (entry.isIntersecting) {
              if (!visibleSinceTimerRef.current[productId]) {
                visibleSinceTimerRef.current[productId] = window.setTimeout(() => {
                  interestRef.current = productId
                }, 30000)
              }
            } else {
              const t = visibleSinceTimerRef.current[productId]
              if (t) {
                window.clearTimeout(t)
                delete visibleSinceTimerRef.current[productId]
              }
            }
          }
        },
        {
          threshold: [0.2, 0.35, 0.5],
        }
      )

      nodes.forEach((n) => obs.observe(n))
      return () => {
        obs.disconnect()
        // cleanup any timers
        for (const key of Object.keys(visibleSinceTimerRef.current)) {
          const t = visibleSinceTimerRef.current[key]
          if (t) window.clearTimeout(t)
        }
        visibleSinceTimerRef.current = {}
      }
    }
  }, [router.pathname, popupKey])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (isOpen || isSubmitted) return

    let shown = false
    const mountedAt = Date.now()
    const minPageEngagementMs = 25000

    const maybeShow = () => {
      if (shown) return
      if (isSubmitted) return
      if (Date.now() - mountedAt < minPageEngagementMs) return
      shown = true

      const detected = interestRef.current && interestRef.current !== 'MULTI_PRODUCT'
        ? interestRef.current
        : pickMostVisibleProduct()

      setVariant(detected)
      setIsOpen(true)
    }

    const onMouseMove = (e) => {
      // Exit intent: moving to the very top on desktop
      if (window.innerWidth < 768) return
      if (e.clientY < 10) maybeShow()
    }

    const onScroll = () => {
      if (shown) return
      if (getScrollProgress() >= 70) maybeShow()
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Mobile fallback timer
    let timer = null
    if (window.innerWidth < 768) {
      timer = window.setTimeout(() => {
        if (!shown) maybeShow()
      }, 60000)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      if (timer) window.clearTimeout(timer)
    }
  }, [isOpen, isSubmitted])

  const dismiss = () => {
    setIsOpen(false)
    localStorage.setItem(`${popupKey}:dismissed`, 'true')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !company) return

    setIsSubmitting(true)
    setSubmitError(null)
    let apiUrlForError = null
    try {
      const target = routeMap[variant] || routeMap.MULTI_PRODUCT

      const payload = {
        email,
        company,
        productId: variant,
        variant,
        answers: field ? { leadMagnetField: field } : {},
        caseStudyUrl: target,
      }

      const apiUrl = new URL('/api/popup-lead', window.location.origin).toString()
      apiUrlForError = apiUrl
      console.debug('SmartExitPopup submit payload:', payload)

      const resp = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await resp.json().catch(() => null)
      if (!resp.ok) {
        throw new Error(data?.message || data?.details || data?.error || 'Popup submission failed')
      }

      localStorage.setItem(`${popupKey}:submitted`, 'true')
      setIsSubmitted(true)
      setSuccessMessage('Success! Your request is saved and we opened your recommended case study in a new tab.')
      if (data?.emailSent) {
        setEmailStatusText('Email status: sent')
      } else if (data?.emailStatus) {
        setEmailStatusText(`Email status: ${data.emailStatus}`)
      } else {
        setEmailStatusText('Email status: unavailable')
      }

      // Route so user can continue exploring case study
      setTimeout(() => {
        window.open(target, '_blank', 'noopener,noreferrer')
      }, 1200)
      setTimeout(() => {
        setIsOpen(false)
      }, 2200)
    } catch (err) {
      console.error(err)
      const msg = err?.message || 'Could not submit.'
      setSubmitError(`${msg} (POST ${apiUrlForError || '/api/popup-lead'})`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white leading-tight">{variantCopy.headline}</h2>
              <p className="text-slate-300 mt-2 leading-relaxed">{variantCopy.subheading}</p>
            </div>
            <button
              onClick={dismiss}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200"
              aria-label="Close popup"
              type="button"
            >
              <FiX />
            </button>
          </div>

          <div className="mt-5 space-y-2">
            <div className="flex items-start gap-2 text-sm text-slate-200">
              <FiCheck className="mt-0.5 text-primary-blue" />
              <span>Enterprise-ready guidance in a practical format</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-200">
              <FiCheck className="mt-0.5 text-primary-blue" />
              <span>No spam. Just a clear next-step roadmap</span>
            </div>
          </div>

          {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/60"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company *</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/60"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">{variantCopy.inputLabel}</label>
              <input
                value={field}
                onChange={(e) => setField(e.target.value)}
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-blue/60"
                placeholder={variantCopy.placeholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-primary-blue hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-colors"
            >
              {isSubmitting ? 'Submitting…' : variantCopy.buttonText}
            </button>

            {submitError && (
              <p className="text-[11px] text-red-300 leading-relaxed pt-1">
                {submitError}
              </p>
            )}

            <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
              By submitting, you agree we may contact you about your request. (Stored in our CRM for follow-up.)
            </p>
          </form>
          ) : (
            <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-200 leading-relaxed">
                {successMessage}
              </p>
              {emailStatusText && (
                <p className="text-xs text-emerald-300/90 mt-2">
                  {emailStatusText}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

