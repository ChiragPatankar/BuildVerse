import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900 pt-16 md:pt-20 lg:pt-24 transition-colors duration-300"
    >
      {/* Sophisticated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/20 dark:bg-primary-blue/10 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-purple/20 dark:bg-primary-purple/10 rounded-full filter blur-[128px]" />
      </div>

      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-blue/10 dark:from-primary-blue/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-8 sm:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto w-full overflow-hidden"
        >
          <div className="text-center space-y-6 sm:space-y-8 w-full">
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center space-x-2 px-3 py-2 sm:px-4 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium">Enterprise AI Solutions</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                <span className="block text-slate-900 dark:text-white leading-tight sm:leading-[1.1]">
                  Save Time, Grow Your Business
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary-blue via-blue-400 to-primary-purple bg-clip-text text-transparent leading-tight sm:leading-[1.1]">
                  With AI That Actually Works
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Stop losing customers to slow responses. Stop wasting hours on repetitive tasks. 
                Get instant support, automate your workflows, and make smarter decisions—all with 
                enterprise AI solutions that are simple to use and proven to work.
              </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2 sm:pt-4 w-full max-w-md mx-auto sm:max-w-none"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-primary-blue/20 text-sm sm:text-base"
              >
                <span>Get Started</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
              </motion.a>

                <Link href="/brochure" legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base text-center"
                  >
                    View Brochure
                  </motion.a>
                </Link>
            </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="pt-8 sm:pt-12 md:pt-16 border-t border-slate-300 dark:border-white/10 max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                  {[
                    { value: '100+', label: 'Projects', fullLabel: 'Projects Delivered', sublabel: 'Across industries' },
                    { value: '50+', label: 'Enterprise', fullLabel: 'Enterprise Clients', sublabel: 'Worldwide' },
                    { value: '99%', label: 'Client', fullLabel: 'Client Satisfaction', sublabel: 'Retention rate' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center px-2 sm:px-0">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-gray-300 font-medium sm:hidden">{stat.label}</div>
                      <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-gray-300 font-medium hidden sm:block">{stat.fullLabel}</div>
                      <div className="text-xs text-slate-500 dark:text-gray-500 mt-1 hidden md:block">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trusted By */}
              <motion.div
                variants={itemVariants}
                className="pt-6 sm:pt-8 md:pt-12"
              >
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 md:mb-6">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 opacity-50">
                  {['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'].map((industry, index) => (
                    <div key={index} className="text-slate-600 dark:text-gray-600 font-semibold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                      {industry}
                    </div>
                  ))}
                </div>
              </motion.div>
          </div>
        </motion.div>
      </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-slate-400 dark:border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-slate-500 dark:bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero

