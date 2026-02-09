import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiSearch, FiCode, FiPlay, FiTrendingUp } from 'react-icons/fi'

const HowWeWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stages = [
    {
      icon: FiSearch,
      step: '01',
      title: 'Discover',
      duration: 'Week 1',
      description: 'We dig into your business, current workflows, and goals. You get a clear scope document and project plan within 5 days.',
    },
    {
      icon: FiCode,
      step: '02',
      title: 'Prototype',
      duration: 'Weeks 2–3',
      description: 'Working prototype you can click through and test. Real functionality, not mockups. Weekly demos to gather feedback.',
    },
    {
      icon: FiPlay,
      step: '03',
      title: 'Deploy',
      duration: 'Weeks 4–6',
      description: 'Production launch with your team trained and documentation ready. We handle infrastructure, security, and integrations.',
    },
    {
      icon: FiTrendingUp,
      step: '04',
      title: 'Optimize',
      duration: 'Ongoing',
      description: 'Post-launch monitoring and iteration. We track real usage data and continuously improve based on results.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black transition-colors duration-300"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem]" />
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
              Our Process
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4"
            >
              How We Build MVPs & Voice Agents
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-gray-400"
            >
              Clear milestones, weekly check-ins, and working software at every stage.
              From MVP development to workflow automation—delivered in 4-8 weeks.
            </motion.p>
          </div>

          {/* Process Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 hover:border-primary-blue/50 dark:hover:border-primary-blue/30 hover:shadow-lg hover:shadow-primary-blue/10 transition-all duration-300 h-full">
                    {/* Step indicator */}
                    <div className="relative z-10 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-blue text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                        {stage.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-xs font-semibold text-primary-blue uppercase tracking-wider mb-2">
                      {stage.duration}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-blue transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeWork

