import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUser, FiLayers, FiGlobe, FiZap } from 'react-icons/fi'

const WhyBuildVerse = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const differentiators = [
    {
      icon: FiUser,
      title: 'Founder-Led Execution',
      description: 'Work directly with the founder in early stages. No handoffs to junior teams, no communication gaps—just fast decisions and hands-on delivery.',
    },
    {
      icon: FiLayers,
      title: 'End-to-End Capability',
      description: 'Strategy → Product → Infrastructure → UX. We own the entire stack so you don&apos;t need to coordinate five different vendors.',
    },
    {
      icon: FiGlobe,
      title: 'Cross-Industry Experience',
      description: 'Voice agents, CRMs, analytics dashboards, and workflow automations shipped across SaaS, fintech, healthcare, logistics, and retail.',
    },
    {
      icon: FiZap,
      title: 'Fast Iteration Cycles',
      description: 'Weekly milestones with working demos. You see progress every 7 days, not after months of waiting.',
    },
  ]

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-black dark:to-gray-900 transition-colors duration-300"
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.span 
              variants={itemVariants}
              className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider"
            >
              Why BuildVerse
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4"
            >
              Why Choose Our AI Studio
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-gray-400"
            >
              We&apos;re a focused AI studio that ships production-ready MVPs, voice agents, and workflow automation. 
              Here&apos;s what makes working with us different.
            </motion.p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="h-full bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary-blue/50 dark:hover:border-primary-blue/30 hover:shadow-lg hover:shadow-primary-blue/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue/20 transition-all">
                      <item.icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyBuildVerse





