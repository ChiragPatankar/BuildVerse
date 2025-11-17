import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  Sparkles, Bot, Workflow, Gauge, MessageSquare, PhoneCall, 
  MicVocal, Brain, BarChart3, FlaskConical, Image as LucideImage,
  FileText, Database, ShieldCheck, Scale, FileSearch, BookOpenText,
  Layers, Search, UserRound, ShoppingCart, Landmark, Factory, Megaphone,
  Boxes, Ship, CheckCircle2, Mail, Calendar
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Brochure() {
  const pageTitle = 'AI Brochure | BuildVerse Studio — Automation, Chatbots, AI Models'
  const pageDesc = "Explore BuildVerse Studio's AI services: automation, chatbots, AI model development, data labeling, compliance AI, documentation systems, vision & personalization."

  const services = [
    {
      title: 'AI Automation & Workflow Intelligence',
      icon: Workflow,
      color: 'from-blue-500/20 to-cyan-500/20',
      items: [
        'KYC & Compliance automation',
        'Predictive maintenance',
        'Workflow orchestration',
        'Automated onboarding',
      ],
    },
    {
      title: 'Conversational AI & Chatbots',
      icon: MessageSquare,
      color: 'from-violet-500/20 to-fuchsia-500/20',
      items: [
        'Support chatbots',
        'Candidate screening bots',
        'Voice & onboarding assistants',
      ],
    },
    {
      title: 'AI Model Development & Integration',
      icon: Brain,
      color: 'from-emerald-500/20 to-teal-500/20',
      items: [
        'Embedded AI models',
        'Predictive analytics',
        'Testing automation',
      ],
    },
    {
      title: 'Data Annotation & Model Refinement',
      icon: LucideImage,
      color: 'from-amber-500/20 to-orange-500/20',
      items: [
        'Image, text, and video annotation',
        'Model accuracy improvement',
        'Data pipeline optimization',
      ],
    },
    {
      title: 'Compliance, Risk & Audit AI',
      icon: ShieldCheck,
      color: 'from-rose-500/20 to-red-500/20',
      items: [
        'Risk analytics',
        'Smart contract audits',
        'Regulatory compliance',
      ],
    },
    {
      title: 'NLP & AI Documentation Systems',
      icon: FileText,
      color: 'from-sky-500/20 to-indigo-500/20',
      items: [
        'Content curation',
        'Documentation bots',
        'Feedback analysis',
      ],
    },
    {
      title: 'Vision, Search & Personalization AI',
      icon: Search,
      color: 'from-pink-500/20 to-purple-500/20',
      items: [
        'Visual search optimization',
        'Personalization engine',
      ],
    },
  ]

  const industries = ['E-commerce', 'FinTech', 'Manufacturing', 'Marketing', 'SaaS', 'Logistics']

  const whyUs = [
    { label: '100% Custom AI Integration' },
    { label: 'Privacy-first Architecture' },
    { label: 'Scalable & Fast Deployment' },
    { label: 'Ongoing Optimization & Support' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BuildVerse AI Services Brochure',
    url: 'https://buildverse.studio/brochure',
    provider: { '@type': 'Organization', name: 'BuildVerse Studio' },
    description: pageDesc,
    areaServed: 'Worldwide',
    serviceType: 'Artificial Intelligence Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Services',
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content="AI automation, chatbots, AI models, data annotation, compliance AI, documentation bots, vision AI, personalization, BuildVerse Studio" />
        <link rel="canonical" href="https://buildverse.studio/brochure" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content="https://buildverse.studio/brochure" />
        <meta property="og:image" content="https://buildverse.studio/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0b0b0f] dark:via-black dark:to-[#0b0b0f]">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          {/* Glass + Gradient Accents */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] bg-primary-blue/20 dark:bg-primary-blue/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-primary-purple/20 dark:bg-primary-purple/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
              <motion.div
                variants={fadeUp}
                className="mx-auto max-w-4xl text-center rounded-3xl p-8 sm:p-10 backdrop-blur-md bg-white/50 dark:bg-white/[0.04] ring-1 ring-slate-900/5 dark:ring-white/10 shadow-xl shadow-slate-900/[0.03]"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] ring-1 ring-slate-900/10 dark:ring-white/10 mb-5">
                  <Sparkles className="w-4 h-4 text-primary-blue" />
                  <span className="text-xs font-medium text-slate-700 dark:text-gray-300 tracking-wide">BuildVerse Studio</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Where AI Builds Better Worlds
                </h1>
                <p className="mt-4 text-slate-700/90 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  We design intelligent systems that automate, optimize, and elevate your business — powered by custom AI.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/#contact" legacyBehavior>
                    <a className="px-6 py-3 rounded-xl bg-primary-blue hover:bg-blue-600 text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/70 ring-offset-white dark:ring-offset-black">
                      Get a Free AI Audit
                    </a>
                  </Link>
                  <Link href="/" legacyBehavior>
                    <a className="px-6 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10 font-semibold transition-colors">
                      Back to Home
                    </a>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        </div>

        {/* Services */}
        <section className="relative py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Our AI Services
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-slate-600 dark:text-gray-300 max-w-3xl mb-8 md:mb-12">
              End-to-end solutions tailored to your workflows, infrastructure, and scale.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((s, idx) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group rounded-2xl p-6 sm:p-7 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md ring-1 ring-slate-900/10 dark:ring-white/10 hover:ring-primary-blue/30 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center ring-1 ring-white/50 dark:ring-white/10 mb-4`}> 
                      <Icon className="w-5 h-5 text-slate-900 dark:text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white leading-snug">{s.title}</h3>
                    <ul className="mt-3 space-y-2.5">
                      {s.items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-gray-300 text-[15px]">
                          <CheckCircle2 className="w-4 h-4 text-primary-blue mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        </div>

        {/* Industries */}
        <section className="relative py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Industries We Serve
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-slate-600 dark:text-gray-300 max-w-3xl mb-6">
              Depth across regulated and high-scale environments.
            </motion.p>
            <div className="flex flex-wrap gap-2.5">
              {industries.map(ind => (
                <span key={ind} className="px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.06] ring-1 ring-slate-900/10 dark:ring-white/10 text-slate-800 dark:text-gray-200 text-sm font-medium hover:bg-white dark:hover:bg-white/10 transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        </div>

        {/* Why Us */}
        <section className="relative py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Why BuildVerse
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {whyUs.map((w) => (
                <div key={w.label} className="rounded-2xl p-5 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md ring-1 ring-slate-900/10 dark:ring-white/10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue/10 text-primary-blue">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <p className="text-slate-800 dark:text-gray-200 font-semibold">{w.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-white dark:from-white/15 dark:via-white/10 dark:to-white/5">
              <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md ring-1 ring-slate-900/10 dark:ring-white/10 text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Let’s Build Your AI Universe</h3>
                <p className="mt-3 text-slate-700 dark:text-gray-300">Get your personalized AI strategy today.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/#contact" legacyBehavior>
                    <a className="px-6 py-3 rounded-xl bg-primary-blue hover:bg-blue-600 text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/70 ring-offset-white dark:ring-offset-black">
                      Schedule a Consultation
                    </a>
                  </Link>
                  <a href="mailto:hello@buildverse.studio" className="px-6 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10 font-semibold transition-colors">
                    Email Us: chirag@buildverse.studio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}


