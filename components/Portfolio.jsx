import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight, FiBarChart2, FiMessageSquare, FiCpu, FiTrendingUp, FiLayers, FiTarget, FiExternalLink, FiMapPin } from 'react-icons/fi'

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
      clientType: 'Series A B2B SaaS',
      region: 'US',
      context: 'Support team was overwhelmed with 500+ daily tickets, mostly repetitive questions. Response times were 4+ hours.',
      solution: 'Built a conversational AI that handles Tier 1 support, integrates with their knowledge base, and escalates complex issues to humans.',
      techStack: 'React, Node.js, Gemini AI, WebSocket',
      metrics: [
        { label: 'Daily Queries', value: '10K+' },
        { label: 'CSAT', value: '95%' },
        { label: 'Cost Saved', value: '60%' },
      ],
      timeline: '6 weeks',
      liveDemo: 'https://274653e9.mcp-5wk.pages.dev/',
      featured: true,
    },
    {
      icon: FiBarChart2,
      title: 'Predictive Inventory Engine',
      clientType: 'Multi-brand E-commerce',
      region: 'India',
      context: 'Guessing inventory needs led to $2M+ in annual waste from overstock and lost sales from stockouts.',
      solution: 'ML model trained on 3 years of sales data, seasonality, and external factors. Now predicts weekly demand per SKU.',
      techStack: 'Python, TensorFlow, BigQuery',
      metrics: [
        { label: 'Accuracy', value: '92%' },
        { label: 'Data Points', value: '1M+' },
        { label: 'Waste Reduced', value: '40%' },
      ],
      timeline: '8 weeks',
      liveDemo: 'https://v2kec3t6pzojmbz448udb7.streamlit.app/',
    },
    {
      icon: FiCpu,
      title: 'Voice-Activated Lead Qualifier',
      clientType: 'Mid-Market Sales Team',
      region: 'US',
      context: 'SDRs missed 60% of inbound calls. Leads went cold before anyone followed up.',
      solution: 'AI voice agent answers calls instantly, asks qualifying questions, and books meetings directly in Calendly.',
      techStack: 'Twilio, OpenAI, CRM Integration',
      metrics: [
        { label: 'Leads Qualified', value: '5K+' },
        { label: 'Conversion Lift', value: '+45%' },
        { label: 'Meetings Booked', value: '2K+' },
      ],
      timeline: '4 weeks',
    },
    {
      icon: FiTrendingUp,
      title: 'Operations Workflow Automation',
      clientType: 'Logistics Enterprise',
      region: 'APAC',
      context: 'Operations team spent 200+ hours/month on manual data entry across 5 disconnected systems.',
      solution: 'Automated workflow connecting ERP, warehouse, shipping, and finance systems. Human review only for exceptions.',
      techStack: 'n8n, Custom APIs, PostgreSQL',
      metrics: [
        { label: 'Hours Saved', value: '200/mo' },
        { label: 'Processes', value: '50+' },
        { label: 'Error Rate', value: '-90%' },
      ],
      timeline: '5 weeks',
    },
    {
      icon: FiLayers,
      title: 'Marketing Content Generator',
      clientType: 'Retail Group',
      region: 'North America',
      context: 'Marketing team took 2 weeks to produce product descriptions for 500 new SKUs each quarter.',
      solution: 'AI pipeline that generates SEO-optimized descriptions, social copy, and email content from product data.',
      techStack: 'GPT-4, Custom Fine-tuning',
      metrics: [
        { label: 'Content Pieces', value: '100K+' },
        { label: 'Quality Score', value: '94%' },
        { label: 'Speed', value: '10x' },
      ],
      timeline: '4 weeks',
    },
    {
      icon: FiTarget,
      title: 'Personalized Recommendations',
      clientType: 'D2C Fashion Brand',
      region: 'EU',
      context: 'Same homepage for every visitor. No personalization despite having rich customer data.',
      solution: 'Real-time recommendation engine showing personalized products based on browse history and purchase patterns.',
      techStack: 'Collaborative Filtering, Redis',
      metrics: [
        { label: 'Engagement', value: '+35%' },
        { label: 'Revenue Lift', value: '+28%' },
        { label: 'Active Users', value: '1M+' },
      ],
      timeline: '6 weeks',
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
              Real Projects, Real Results
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed"
            >
              Selected work from SaaS, e-commerce, logistics, and retail clients. 
              Each project includes the problem, our approach, and measurable outcomes.
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
                <div className="h-full flex flex-col bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all duration-300 shadow-sm">
                  {/* Header */}
                  <div className="p-6 border-b-2 border-slate-300 dark:border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/20 transition-all">
                        <project.icon className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-primary-blue">{project.timeline}</div>
                      </div>
                    </div>
                    
                    {/* Client Info */}
                    <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-gray-400">
                      <span className="font-medium">{project.clientType}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <FiMapPin className="w-3 h-3" />
                        <span>{project.region}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-4 sm:p-6 space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Context & Solution */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div>
                        <span className="font-semibold text-slate-700 dark:text-gray-300">Challenge: </span>
                        <span className="text-slate-600 dark:text-gray-400">{project.context}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700 dark:text-gray-300">Solution: </span>
                        <span className="text-slate-600 dark:text-gray-400">{project.solution}</span>
                      </div>
                    </div>

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

                    {/* Tech Stack */}
                    <div className="text-xs text-slate-500 dark:text-gray-500">
                      <span className="font-medium">Tech: </span>
                      {project.techStack}
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1" />

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue border border-primary-blue/20 rounded-lg transition-colors"
                        >
                          <FiExternalLink className="w-3 h-3" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-slate-400 dark:text-gray-500">
                          Demo coming soon
                        </span>
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
                Want Results Like These?
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Book a 20-minute call and we&apos;ll walk through exactly how we&apos;d approach your specific 
                challenge. No pitch deck—just a practical conversation about what&apos;s possible.
              </p>
              <motion.a
                href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-blue/20"
              >
                Book Your Strategy Call
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
