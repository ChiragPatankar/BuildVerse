import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiLinkedin, FiSend, FiCheck, FiPhone, FiCalendar, FiClock, FiGlobe, FiMapPin, FiUsers } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        }),
      })
      if (!resp.ok) {
        throw new Error('Failed to submit')
      }
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error('Contact submit error:', err)
      alert('There was an issue sending your message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>
      
      {/* Gradient Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-blue/5 to-primary-purple/5 rounded-full filter blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
                Let&apos;s Talk
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              Start With a Conversation
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              Book a 20-minute strategy call. We&apos;ll discuss your challenges, show relevant demos, 
              and give you 2–3 concrete ideas—whether we work together or not.
            </motion.p>
          </div>

          {/* Primary CTA - Calendar Booking */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-2 border-primary-blue/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary-blue/20 border border-primary-blue/30 flex items-center justify-center">
                <FiCalendar className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Book a Strategy Call
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6">
                20 minutes with the founder. No sales pitch—just practical advice.
              </p>
              
              <motion.a
                href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-blue/20"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Schedule Your Call</span>
              </motion.a>

              {/* Timezone Info */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <FiGlobe className="w-4 h-4" />
                  <span>Slots for US, Middle East & India time zones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 max-w-2xl mx-auto">
            <div className="flex-1 h-px bg-slate-300 dark:bg-white/10" />
            <span className="text-sm text-slate-500 dark:text-gray-500">or reach out directly</span>
            <div className="flex-1 h-px bg-slate-300 dark:bg-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">
                      What are you looking to build? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all resize-none"
                      placeholder="Tell us about the problem you're trying to solve..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    whileHover={{ scale: isSubmitted ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitted ? 1 : 0.99 }}
                    className={`w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-200 ${
                      isSubmitted
                        ? 'bg-green-600 cursor-default'
                        : 'bg-slate-700 dark:bg-slate-600 hover:bg-slate-800 dark:hover:bg-slate-500 shadow-lg'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FiCheck className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Sidebar - Redesigned */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 border-2 border-primary-blue/30 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                  <FiPhone className="w-5 h-5 text-primary-blue" />
                  <span>Quick Contact</span>
                </h3>
                
                <div className="space-y-3">
                  <a
                    href="mailto:chirag@buildverse.studio"
                    className="flex items-center space-x-3 text-sm text-slate-700 dark:text-gray-300 hover:text-primary-blue transition-colors group"
                  >
                    <FiMail className="w-4 h-4 text-primary-blue" />
                    <span className="group-hover:underline">chirag@buildverse.studio</span>
                  </a>
                  <a
                    href="tel:+919322529729"
                    className="flex items-center space-x-3 text-sm text-slate-700 dark:text-gray-300 hover:text-primary-blue transition-colors group"
                  >
                    <FiPhone className="w-4 h-4 text-primary-blue" />
                    <span className="group-hover:underline">+91 93225 29729</span>
                  </a>
                  <a
                    href="https://wa.me/919322529729"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm text-slate-700 dark:text-gray-300 hover:text-primary-blue transition-colors group"
                  >
                    <FaWhatsapp className="w-4 h-4 text-green-500" />
                    <span className="group-hover:underline">WhatsApp</span>
                  </a>
                </div>

                {/* Social Links inline */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center space-x-2">
                  <span className="text-xs text-slate-500 dark:text-gray-500">Follow:</span>
                  <a
                    href="https://www.linkedin.com/company/buildverse-studio/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-primary-blue/20 border border-white/20 flex items-center justify-center transition-all"
                  >
                    <FiLinkedin className="w-4 h-4 text-slate-700 dark:text-white" />
                  </a>
                  <a
                    href="https://x.com/_BuildVerse_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-primary-blue/20 border border-white/20 flex items-center justify-center transition-all"
                  >
                    <svg className="w-4 h-4 text-slate-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Combined Info Card */}
              <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 shadow-sm">
                {/* Regions */}
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                    <FiMapPin className="w-4 h-4 text-primary-blue" />
                    <span>We Serve</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['US', 'UAE', 'India', 'UK', 'EU'].map((region) => (
                      <span
                        key={region}
                        className="px-3 py-1 text-xs font-medium bg-primary-blue/10 text-primary-blue border border-primary-blue/20 rounded-full"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-200 dark:bg-white/10 mb-5" />

                {/* Ideal For */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                    <FiUsers className="w-4 h-4 text-primary-blue" />
                    <span>Ideal For</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 rounded-full bg-primary-blue" />
                      <span>B2B SaaS</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 rounded-full bg-primary-blue" />
                      <span>Tech SMBs</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 rounded-full bg-primary-blue" />
                      <span>Enterprises</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 rounded-full bg-primary-blue" />
                      <span>Healthcare</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Usually responds in 24h</div>
                  <div className="text-xs text-slate-500 dark:text-gray-500">Mon–Sat, 9am–6pm IST</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
