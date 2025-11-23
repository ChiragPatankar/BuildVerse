import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTarget, FiTrendingUp, FiLayers, FiAward } from 'react-icons/fi'

const About = () => {
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

  const pillars = [
    {
      icon: FiTarget,
      title: 'Solutions That Make Sense',
      description: 'No tech jargon, no overcomplicated systems. We build AI automation and enterprise AI solutions that solve real problems your team faces every day—like handling customer questions faster or automating repetitive tasks.',
    },
    {
      icon: FiTrendingUp,
      title: 'Results You Can See',
      description: 'We measure success by what matters to you: time saved, money saved, happier customers. Our business process automation and AI business intelligence tools show you exactly how they\'re helping your bottom line.',
    },
    {
      icon: FiLayers,
      title: 'Built to Grow With You',
      description: 'Start small, scale big. Whether you\'re testing an MVP development or rolling out company-wide AI voice agents, our solutions grow as your business grows—without breaking the bank.',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>
      
      {/* Gradient Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary-blue/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-primary-purple/5 rounded-full filter blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="max-w-3xl">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
                About BuildVerse
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              We Help Businesses Do More With Less
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              Think of us as your AI partner who speaks your language. We build enterprise AI solutions 
              that save you time, cut costs, and help you serve customers better—without the technical 
              headaches. From AI voice agents that answer calls 24/7 to business process automation 
              that handles your busywork, we make AI work for you.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 p-6 sm:p-8 md:p-12 bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl shadow-sm">
              {[
                { value: '5+', label: 'Years of Excellence' },
                { value: '100+', label: 'AI Models Deployed' },
                { value: '50+', label: 'Enterprise Clients' },
                { value: '99%', label: 'Client Retention' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="h-full p-6 sm:p-8 bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all duration-300 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-blue/20 transition-all">
                    <pillar.icon className="w-6 h-6 text-primary-blue" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center flex-shrink-0">
                  <FiAward className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                    Our Mission
                  </h3>
                  <p className="text-base sm:text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
                    We believe every business—big or small—deserves enterprise AI solutions that actually work. 
                    That's why we build AI automation, AI voice agents, and business intelligence tools that 
                    are easy to understand, simple to use, and proven to deliver results. No PhD required, 
                    just real solutions that help you save time and grow your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Industry Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'].map((industry, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-lg text-center hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all shadow-sm"
                >
                  <span className="text-slate-700 dark:text-gray-300 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
