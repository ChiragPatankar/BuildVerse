import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const testimonials = [
    {
      name: 'James A.',
      role: 'CEO',
      company: 'B2B SaaS (US)',
      content: 'We launched a support assistant with BuildVerse in under 6 weeks. First response time dropped noticeably and our team now spends more time on priority tickets instead of repetitive queries.',
      rating: 5,
      initials: 'JA',
    },
    {
      name: 'Emily R.',
      role: 'CTO',
      company: 'Fintech Startup (EU)',
      content: 'Clean architecture, clear communication, and pragmatic trade-offs. The MVP shipped on schedule and scaled smoothly through our beta without surprises.',
      rating: 5,
      initials: 'ER',
    },
    {
      name: 'Michael C.',
      role: 'Operations Director',
      company: 'Logistics Firm (APAC)',
      content: 'Workflow automations replaced several manual steps in order processing. We see fewer handoffs and faster cycle times in day-to-day ops.',
      rating: 4,
      initials: 'MC',
    },
    {
      name: 'Sophie W.',
      role: 'VP of Product',
      company: 'HealthTech (UK)',
      content: 'BuildVerse helped us stand up a predictive layer for our analytics. The team was thoughtful about data quality and model monitoring from day one.',
      rating: 5,
      initials: 'SW',
    },
    {
      name: 'Rajesh K.',
      role: 'Founder',
      company: 'E-commerce Brand (IN)',
      content: 'The voice assistant now qualifies inbound leads before routing to sales. It feels natural, and our team has clearer context when they jump in.',
      rating: 4,
      initials: 'RK',
    },
    {
      name: 'Lisa T.',
      role: 'Head of Innovation',
      company: 'Retail Group (NA)',
      content: 'Personalized recommendations were rolled out incrementally. Engagement improved and we had a safe rollback plan throughout—great execution discipline.',
      rating: 5,
      initials: 'LT',
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            See What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from businesses like yours—from startups to enterprise companies across 
            fintech, SaaS, logistics, healthcare, and retail. See how our enterprise AI solutions 
            helped them save time and grow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary-blue/30 dark:hover:border-primary-blue/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <span className="text-4xl text-primary-blue opacity-60 font-serif">&quot;</span>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-slate-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.content}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full px-6 py-3">
            <span className="text-slate-600 dark:text-gray-400 text-sm">
              Trusted by growth-stage and enterprise teams
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

