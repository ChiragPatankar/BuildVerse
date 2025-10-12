import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCpu, FiMic, FiZap, FiBarChart2, FiCheck } from 'react-icons/fi'

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
      icon: FiCpu,
      title: 'MVP Development',
      description: 'Transform your vision into market-ready products with AI-driven architecture and rapid prototyping.',
      features: [
        'AI-Powered Architecture',
        'Rapid Time-to-Market',
        'Scalable Infrastructure',
        'Technical Validation',
      ],
    },
    {
      icon: FiMic,
      title: 'AI Voice Agents',
      description: 'Deploy intelligent conversational AI that automates customer interactions with natural language understanding.',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        '24/7 Automated Support',
        'Seamless CRM Integration',
      ],
    },
    {
      icon: FiZap,
      title: 'Process Automation',
      description: 'Streamline operations and eliminate manual work with intelligent workflow automation and smart triggers.',
      features: [
        'Workflow Optimization',
        'Process Intelligence',
        'Smart Decision Making',
        'System Integration',
      ],
    },
    {
      icon: FiBarChart2,
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with AI-powered analytics, predictive insights, and custom dashboards.',
      features: [
        'Predictive Analytics',
        'Real-time Reporting',
        'Custom Dashboards',
        'Advanced Visualization',
      ],
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
    >
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#1e293b_25%,#1e293b_50%,transparent_50%,transparent_75%,#1e293b_75%,#1e293b)] bg-[size:80px_80px] opacity-10" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="max-w-3xl">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              Enterprise AI Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              Comprehensive artificial intelligence services designed to transform your business operations and drive measurable results.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="h-full bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all duration-300 shadow-sm">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/20 group-hover:border-primary-blue/40 transition-all duration-300">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-blue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-2 sm:space-x-3 text-sm">
                        <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="pt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <p className="text-slate-600 dark:text-gray-400 text-lg">
                Ready to transform your business with AI?
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-blue/20"
              >
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
