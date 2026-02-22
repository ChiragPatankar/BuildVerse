import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

const WhyCompaniesChoose = () => {
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

  const blocks = [
    {
      title: 'Delivered in Weeks, Not Quarters',
      text: 'Traditional agencies take 4–9 months. In-house teams take even longer. We ship production-ready systems in 2–8 weeks.',
    },
    {
      title: 'Fixed Pricing. No Surprises.',
      text: 'Clear setup costs and monthly pricing. No scope creep billing. No hidden change orders.',
    },
    {
      title: 'AI-Native Architecture',
      text: 'We design systems around automation, scalability, and modern cloud infrastructure from day one.',
    },
    {
      title: 'Global Delivery Model',
      text: 'US, UK, and India timezone overlap. 24-hour response SLA. Enterprise-grade security and compliance practices.',
    },
  ]

  return (
    <section
      id="why-choose"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-black dark:to-gray-900 transition-colors duration-300"
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
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
            >
              Why Companies Choose BuildVerse
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-gray-400"
            >
              We deliver enterprise-grade systems in weeks — without agency overhead or in-house delays.
            </motion.p>
          </div>

          {/* 4 Comparison Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blocks.map((block, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 hover:border-primary-blue/40 hover:shadow-lg hover:shadow-primary-blue/5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {block.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Small line below section */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-slate-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Built for startups, scale-ups, and mid-market teams that need speed without sacrificing quality.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-2">
            <motion.a
              href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyCompaniesChoose
