import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const GlobalCredibility = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            Global Delivery. Enterprise Standards.
          </motion.h2>

          <motion.div variants={itemVariants} className="text-left space-y-6 text-slate-600 dark:text-gray-400 text-sm sm:text-base">
            <p className="font-semibold text-slate-700 dark:text-gray-300">We support clients across:</p>
            <ul className="space-y-1">
              <li><strong>US East:</strong> 8:30 AM – 6 PM EST</li>
              <li><strong>UK &amp; EU:</strong> 3 PM – 11:30 PM GMT</li>
              <li><strong>India:</strong> 9 AM – 6 PM IST</li>
            </ul>
            <p>24-hour team overlap across time zones.</p>

            <p className="font-semibold text-slate-700 dark:text-gray-300 pt-4">Security &amp; Infrastructure:</p>
            <ul className="space-y-1">
              <li>✓ SOC2-aligned practices</li>
              <li>✓ GDPR &amp; CCPA ready</li>
              <li>✓ Encrypted data at rest &amp; in transit</li>
              <li>✓ 99.9% uptime SLA</li>
              <li>✓ Enterprise cloud infrastructure (AWS/GCP)</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalCredibility
