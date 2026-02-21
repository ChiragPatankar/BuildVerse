import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCpu, FiMic, FiZap, FiBarChart2, FiArrowRight } from 'react-icons/fi'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const services = [
    {
      icon: FiMic,
      title: 'AI Agents (Voice / Chat / Calling)',
      timeline: '2–4 weeks',
      description: 'Automate customer support, qualify leads, and answer every call — without hiring more staff. Launch production-ready AI agents in 2–4 weeks.',
      idealFor: 'Sales teams & support-heavy businesses',
      pricing: [
        { tier: 'Starter', items: ['$8,000 setup', '$2,000/month (up to 1,000 interactions)'] },
        { tier: 'Growth', items: ['$15,000 setup', '$5,000/month (up to 5,000 interactions)'] },
        { tier: 'Enterprise', items: ['Custom pricing', 'Dedicated infrastructure + SLA'] },
      ],
      line: 'Fixed scope. No hidden overages.',
    },
    {
      icon: FiCpu,
      title: 'MVP Development',
      timeline: '4–8 weeks',
      description: 'Launch scalable SaaS products in 4–8 weeks. Full-stack architecture, secure infrastructure, production-ready from day one.',
      idealFor: 'Startups validating new ideas',
      pricing: [
        { tier: 'Startup MVP', items: ['$45,000 fixed', '4 weeks', '2–3 core features'] },
        { tier: 'Growth MVP', items: ['$95,000 fixed', '6 weeks', '5–8 features + integrations'] },
        { tier: 'Enterprise Build', items: ['$180,000+', '8 weeks', 'Complex architecture + scaling'] },
      ],
      line: 'Includes post-launch support.',
    },
    {
      icon: FiZap,
      title: 'CRM Solutions',
      timeline: '2–3 weeks',
      description: 'Industry-specific CRMs built around your workflows — healthcare, real estate, agencies, legal, and more.',
      idealFor: 'Teams needing tailored CRM',
      pricing: [
        { tier: 'Standard CRM', items: ['$18,000 setup', '$1,200/month (up to 20 users)', '2–3 week delivery'] },
        { tier: 'Growth CRM', items: ['$30,000 setup', '$2,500/month'] },
        { tier: 'Custom Industry CRM', items: ['$50,000+', 'Custom subscription model'] },
      ],
      line: 'HIPAA-ready options available.',
    },
    {
      icon: FiBarChart2,
      title: 'Dashboard & BI',
      timeline: '3–5 weeks',
      description: 'Executive dashboards, predictive analytics, and real-time reporting built in 3–5 weeks.',
      idealFor: 'Teams needing better data',
      pricing: [
        { tier: 'Basic BI', items: ['$15,000 setup', '$500/month'] },
        { tier: 'Growth BI', items: ['$40,000 setup', '$1,500/month'] },
        { tier: 'Enterprise BI', items: ['$100,000+', 'Custom SLA'] },
      ],
      line: 'Built on AWS/GCP with secure data pipelines.',
    },
  ]

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
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-gray-400"
            >
              Four focus areas. Clear timelines. Measurable outcomes.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 hover:border-primary-blue/40 hover:shadow-lg hover:shadow-primary-blue/5 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-primary-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-gray-500">{service.idealFor}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary-blue bg-primary-blue/10 px-2 py-1 rounded">
                      {service.timeline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">Pricing</p>
                    {service.pricing.map((tier, tIndex) => (
                      <div key={tIndex} className="mb-2">
                        <p className="text-xs font-medium text-primary-blue">{tier.tier}:</p>
                        <ul className="text-xs text-slate-600 dark:text-gray-400 space-y-0.5 ml-2">
                          {tier.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-500 italic">{service.line}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-4">
            <motion.a
              href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
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
