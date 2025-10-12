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
      title: 'Innovation First',
      description: 'Leveraging cutting-edge AI research and technology to solve complex business challenges with creative, forward-thinking solutions.',
    },
    {
      icon: FiTrendingUp,
      title: 'Measurable Impact',
      description: 'Delivering quantifiable results with data-driven strategies that directly contribute to your bottom line and operational efficiency.',
    },
    {
      icon: FiLayers,
      title: 'Enterprise Scale',
      description: 'Building robust, scalable AI infrastructure designed to grow with your organization from pilot to full deployment.',
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
              Transforming Business Through Artificial Intelligence
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              We partner with forward-thinking organizations to implement enterprise-grade AI solutions
              that drive innovation, optimize operations, and create lasting competitive advantages.
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
                    To democratize enterprise AI by making advanced artificial intelligence accessible, 
                    practical, and transformative for businesses of all sizes. We believe in creating 
                    AI solutions that augment human capabilities, drive efficiency, and unlock new 
                    opportunities for growth.
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
