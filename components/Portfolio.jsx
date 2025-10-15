import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight, FiBarChart2, FiMessageSquare, FiCpu, FiTrendingUp, FiLayers, FiTarget, FiExternalLink, FiGithub } from 'react-icons/fi'

const Portfolio = () => {
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

  const projects = [
    {
      icon: FiMessageSquare,
      title: 'AI Customer Support Platform',
      description: 'Multi-tenant chat support system with real-time AI assistance, handling 10,000+ daily queries with 95% satisfaction rate. Built with React, Node.js, and Google Gemini API.',
      category: 'Conversational AI',
      metrics: [
        { label: 'Response Time', value: '<30s' },
        { label: 'Satisfaction', value: '95%' },
        { label: 'Cost Saved', value: '60%' },
      ],
      tags: ['React', 'Node.js', 'Gemini AI', 'WebSocket'],
      liveDemo: 'https://274653e9.mcp-5wk.pages.dev/',
      github: 'https://github.com/ChiragPatankar/MCP',
      caseStudyLink: '/case-studies/ai-customer-support-platform',
      featured: true,
    },
    {
      icon: FiBarChart2,
      title: 'Predictive Analytics Engine',
      description: 'Real-time business intelligence platform providing predictive insights for inventory and sales forecasting.',
      category: 'Business Intelligence',
      metrics: [
        { label: 'Accuracy', value: '92%' },
        { label: 'Data Points', value: '1M+' },
        { label: 'Active Users', value: '500+' },
      ],
      tags: ['Predictive Analytics', 'Big Data', 'ML Models'],
    },
    {
      icon: FiCpu,
      title: 'Voice-Activated Sales System',
      description: 'AI-powered voice agent that qualifies leads, schedules meetings, and automates follow-ups.',
      category: 'Voice AI',
      metrics: [
        { label: 'Leads Qualified', value: '5K+' },
        { label: 'Conversion Lift', value: '+45%' },
        { label: 'Meetings Booked', value: '2K+' },
      ],
      tags: ['Voice Recognition', 'Sales Automation', 'CRM'],
    },
    {
      icon: FiTrendingUp,
      title: 'Enterprise Workflow Automation',
      description: 'End-to-end automation platform streamlining operations across multiple departments.',
      category: 'Process Automation',
      metrics: [
        { label: 'Time Saved', value: '200h/mo' },
        { label: 'Processes', value: '50+' },
        { label: 'Efficiency Gain', value: '+70%' },
      ],
      tags: ['RPA', 'Workflow', 'Integration'],
    },
    {
      icon: FiLayers,
      title: 'AI Content Generation Suite',
      description: 'Advanced NLP system generating high-quality marketing content and product descriptions at scale.',
      category: 'Content AI',
      metrics: [
        { label: 'Content Pieces', value: '100K+' },
        { label: 'Quality Score', value: '94%' },
        { label: 'Speed Increase', value: '10x' },
      ],
      tags: ['NLP', 'Content Generation', 'Marketing'],
    },
    {
      icon: FiTarget,
      title: 'Personalization Recommendation Engine',
      description: 'Machine learning-powered recommendation system driving engagement and revenue growth.',
      category: 'ML Systems',
      metrics: [
        { label: 'Engagement', value: '+35%' },
        { label: 'Revenue Lift', value: '+28%' },
        { label: 'Active Users', value: '1M+' },
      ],
      tags: ['Recommendation', 'Personalization', 'ML'],
    },
  ]

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300"
    >
      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary-purple/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-blue/5 rounded-full filter blur-[100px]" />
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
                Case Studies
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              Proven Results Across Industries
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              Real-world AI implementations delivering measurable business impact for our enterprise clients.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="h-full bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all duration-300 shadow-sm">
                  {/* Icon Header */}
                  <div className="p-6 border-b-2 border-slate-300 dark:border-white/10">
                    <div className="w-12 h-12 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center mb-4 group-hover:bg-primary-blue/20 transition-all">
                      <project.icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 sm:py-4 border-t-2 border-b-2 border-slate-300 dark:border-white/10">
                      {project.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center">
                          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-600 dark:text-gray-500 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full text-slate-700 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-4 space-y-2">
                      {project.caseStudyLink && (
                        <a
                          href={project.caseStudyLink}
                          className="flex items-center space-x-2 text-sm font-semibold text-primary-blue group-hover:text-blue-400 transition-colors"
                        >
                          <span>Read Full Case Study</span>
                          <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      
                      {/* Project Links */}
                      {(project.liveDemo || project.github) && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue border border-primary-blue/20 rounded-lg transition-colors"
                            >
                              <FiExternalLink className="w-3 h-3" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10 rounded-lg transition-colors"
                            >
                              <FiGithub className="w-3 h-3" />
                              <span>GitHub</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-blue text-white text-xs font-bold rounded-full shadow-lg">
                      FEATURED
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-2 border-primary-blue/30 rounded-2xl p-8 md:p-12 text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Build Your Success Story?
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how AI can transform your business operations and drive measurable results.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-blue/20"
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
