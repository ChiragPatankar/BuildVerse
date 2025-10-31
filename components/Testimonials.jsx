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
      name: 'James Anderson',
      role: 'CEO',
      company: 'TechVentures Inc.',
      content: 'BuildVerse transformed our entire customer support operation. Their AI chatbot handles 90% of inquiries with incredible accuracy, and our team can now focus on complex issues. ROI exceeded our expectations in just 3 months.',
      rating: 5,
      initials: 'JA',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO',
      company: 'FinTech Solutions',
      content: 'The MVP they built for us was production-ready from day one. BuildVerse&apos;s team understood our vision perfectly and delivered a scalable AI platform that now serves 50,000+ users. Exceptional work.',
      rating: 5,
      initials: 'ER',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Logistics Co.',
      content: 'Their workflow automation platform eliminated 200+ hours of manual work monthly. BuildVerse didn&apos;t just deliver a product—they became a strategic partner in our digital transformation journey.',
      rating: 5,
      initials: 'MC',
    },
    {
      name: 'Sophie Williams',
      role: 'VP of Product',
      company: 'HealthTech Innovations',
      content: 'BuildVerse&apos;s AI model development expertise helped us launch a predictive analytics system that reduced patient readmission rates by 35%. Their attention to detail and technical depth is unmatched.',
      rating: 5,
      initials: 'SW',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Founder',
      company: 'E-commerce Pro',
      content: 'We needed an AI voice assistant for our sales team, and BuildVerse delivered beyond expectations. The system handles 5,000+ calls daily with natural conversations. Our conversion rates increased by 42%.',
      rating: 5,
      initials: 'RK',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Innovation',
      company: 'Retail Dynamics',
      content: 'The personalization engine BuildVerse built revolutionized our customer experience. We&apos;ve seen 38% increase in engagement and 25% revenue growth. Their team is responsive, professional, and results-driven.',
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our clients say about working with BuildVerse to transform their businesses with AI
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
              Trusted by <span className="font-bold text-slate-900 dark:text-white">50+</span> companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

