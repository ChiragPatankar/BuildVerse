import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiLinkedin, FiSend, FiCheck, FiPhone, FiMapPin } from 'react-icons/fi'
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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'chirag@buildverse.studio',
      link: 'mailto:chirag@buildverse.studio',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 93225 29729',
      link: 'tel:+919322529729',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/919322529729',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 2000)
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
                Get In Touch
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              Let&apos;s Discuss Your Project
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              Ready to transform your business with AI? Schedule a consultation with our experts.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all resize-none"
                      placeholder="Tell us about your project..."
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
                        : 'bg-primary-blue hover:bg-blue-600 shadow-lg shadow-primary-blue/20'
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
                        <span>Message Sent Successfully!</span>
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

            {/* Contact Info Sidebar */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              {/* Contact Methods */}
              <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 hover:border-primary-blue/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue/20 transition-all">
                      <info.icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-gray-500 mb-1">{info.label}</div>
                      <div className="text-sm text-slate-900 dark:text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-gray-400">Monday - Friday</span>
                    <span className="text-slate-900 dark:text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-gray-400">Saturday</span>
                    <span className="text-slate-900 dark:text-white">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-gray-400">Sunday</span>
                    <span className="text-slate-900 dark:text-white">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-2 border-primary-blue/30 rounded-2xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/company/buildverse-studio/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
                  >
                    <FiLinkedin className="w-5 h-5 text-slate-700 dark:text-white" />
                  </a>
                  <a
                    href="https://twitter.com/buildverse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-slate-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
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
