import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCpu, FiMic, FiZap, FiBarChart2, FiArrowRight, FiCheck, FiBox, FiZap as FiSpark } from 'react-icons/fi'
import { getBookingCalUrl } from '../lib/bookingUrl.js'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const services = [
    {
      productId: 'AI_AGENTS',
      icon: FiMic,
      color: 'blue',
      title: 'AI Agents (Voice / Chat / Calling)',
      hook: 'Stop losing leads to missed calls and slow replies.',
      timeline: '2–4 weeks',
      idealFor: 'Sales teams & support-heavy businesses',
      description: 'Automate customer support, qualify leads, and answer every call — without hiring more staff.',
      outcomes: [
        'Convert more inbound leads without extra headcount',
        'Cut support response time from hours to seconds',
        'Recover missed calls that used to mean lost revenue',
      ],
      builds: [
        'A 24/7 voice agent that picks up every call and books meetings — even at 2am',
        'A chat assistant that answers questions and captures buyer details automatically',
        'A lead filter that sends only your best prospects straight to your team',
      ],
      starter: {
        label: 'Get Your Free Lead System Plan',
        sub: 'See exactly where you\'re losing leads and how to fix it — no guesswork, no cost.',
        scarcity: 'Only 3 free audits available this week.',
      },
      trust: 'Helped a real estate team reduce missed-call losses by 60% in 3 weeks.',
    },
    {
      productId: 'MVP',
      icon: FiCpu,
      color: 'purple',
      title: 'MVP Development',
      hook: 'Turn your idea into a live, revenue-ready product fast.',
      timeline: '4–8 weeks',
      idealFor: 'Startups validating new ideas',
      description: 'Go from idea to live product in 4–8 weeks — with full-stack infrastructure built to scale from day one.',
      outcomes: [
        'Ship a working product in weeks, not quarters',
        'Get real user feedback before burning more budget',
        'Walk into investor meetings with a live demo, not a deck',
      ],
      builds: [
        'A full web app your first users can sign up for and pay — ready to demo',
        'A founder dashboard so you can see signups, usage, and drop-offs in real time',
        'Payments, emails, and key integrations wired up and working from launch day',
      ],
      starter: {
        label: 'Get Your Free MVP Launch Plan',
        sub: 'See exactly what to build, in what order, and how fast — no guesswork.',
        scarcity: 'Only 3 free strategy sessions available this week.',
      },
      trust: 'Helped a founder go from idea to first paying customer in 6 weeks.',
    },
    {
      productId: 'CRM',
      icon: FiZap,
      color: 'emerald',
      title: 'CRM Solutions',
      hook: 'Your best clients deserve more than a spreadsheet.',
      timeline: '2–3 weeks',
      idealFor: 'Teams needing a tailored CRM',
      description: 'A CRM that fits your exact workflow — not the other way around. Built for healthcare, real estate, agencies, legal, and more.',
      outcomes: [
        'Stop losing leads to missed follow-ups and forgotten tasks',
        'Save 2–3 hours of admin per person, every single day',
        'See every deal and client in one place — always current',
      ],
      builds: [
        'A CRM built around how your team actually works — zero bloat, no learning curve',
        'Auto follow-up reminders so no lead or client ever slips through the cracks',
        'A live team view where everyone sees the same up-to-date information',
      ],
      starter: {
        label: 'Get Your Free Client Growth Plan',
        sub: 'See what a CRM built for your business looks like — and how fast you could have it.',
        scarcity: 'Only 3 free CRM audits available this week.',
      },
      trust: 'Helped a healthcare clinic cut no-shows by 40% in their first month.',
    },
    {
      productId: 'BI',
      icon: FiBarChart2,
      color: 'amber',
      title: 'Dashboard & BI',
      hook: 'You can\'t fix what you can\'t see.',
      timeline: '3–5 weeks',
      idealFor: 'Teams needing better data visibility',
      description: 'Live dashboards and smart alerts that surface what matters — so you stop flying blind and start making confident calls.',
      outcomes: [
        'Make faster decisions with live data — not last week\'s export',
        'Catch costly trends early, before they hit your bottom line',
        'Reclaim hours lost to manual reporting every week',
      ],
      builds: [
        'A live dashboard showing your 5–10 most critical numbers — always up to date',
        'Smart alerts that flag unusual patterns before they become real problems',
        'Automated weekly summaries delivered to your inbox or Slack — no effort needed',
      ],
      starter: {
        label: 'Get Your Free Data Clarity Plan',
        sub: 'See exactly what your data is hiding and what fixing it is worth — free.',
        scarcity: 'Only 3 free data audits available this week.',
      },
      trust: 'Helped a logistics company uncover a $30k/month cost leak within the first week.',
    },
  ]

  const colorMap = {
    blue:    { icon: 'bg-blue-500/10 text-blue-500',    badge: 'text-blue-500 bg-blue-500/10',    dot: 'bg-blue-500',    starter: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20' },
    purple:  { icon: 'bg-purple-500/10 text-purple-500', badge: 'text-purple-500 bg-purple-500/10', dot: 'bg-purple-500', starter: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20' },
    emerald: { icon: 'bg-emerald-500/10 text-emerald-500', badge: 'text-emerald-600 bg-emerald-500/10', dot: 'bg-emerald-500', starter: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20' },
    amber:   { icon: 'bg-amber-500/10 text-amber-500',  badge: 'text-amber-600 bg-amber-500/10',  dot: 'bg-amber-500',  starter: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20' },
  }

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black transition-colors duration-300"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
                What We Build
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
            >
              MVP Development, Voice Agents & Workflow Automation
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-gray-400">
              Four focus areas. Clear timelines. Measurable outcomes.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => {
              const c = colorMap[service.color]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                  data-product-id={service.productId}
                >
                  <div className="h-full flex flex-col bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 hover:border-primary-blue/30 hover:shadow-lg hover:shadow-primary-blue/5 transition-all duration-300">

                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-gray-500">{service.idealFor}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${c.badge}`}>
                      {service.timeline}
                    </span>
                  </div>

                  {/* Hook */}
                  <p className="text-sm font-semibold text-slate-800 dark:text-white/90 mb-2 leading-snug">
                    {service.hook}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                    {/* Outcome */}
                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                        Outcome
                      </p>
                      <ul className="space-y-1.5">
                        {service.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-gray-300">
                            <FiCheck className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-emerald-500" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What I'll Build */}
                    <div className="mb-5">
                      <p className="text-[11px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                        What I&apos;ll Build
                      </p>
                      <ul className="space-y-1.5">
                        {service.builds.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-gray-300">
                            <FiBox className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Starter CTA — pushes to bottom */}
                    <div className="mt-auto space-y-2">
                      <a
                        href={getBookingCalUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-start gap-3 w-full rounded-lg border px-4 py-3 transition-all duration-200 hover:opacity-90 hover:shadow-sm ${c.starter}`}
                      >
                        <FiArrowRight className="mt-0.5 flex-shrink-0 w-4 h-4" />
                        <div>
                          <p className="text-sm font-semibold leading-snug">{service.starter.label}</p>
                          <p className="text-xs opacity-75 mt-0.5 leading-snug">{service.starter.sub}</p>
                        </div>
                      </a>

                      {/* Scarcity */}
                      <p className="text-[11px] font-medium text-slate-400 dark:text-gray-500 text-center tracking-wide">
                        🔥 {service.starter.scarcity}
                      </p>

                      {/* Micro trust */}
                      <p className="text-[11px] text-slate-400 dark:text-gray-600 italic text-center leading-snug px-1">
                        {service.trust}
                      </p>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center pt-4">
            <motion.a
              href={getBookingCalUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              <span>Discuss Your Project</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
