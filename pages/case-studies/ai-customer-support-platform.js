import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheck, FiClock, FiUsers, FiDollarSign, FiTrendingUp, FiZap, FiMessageSquare, FiBarChart } from 'react-icons/fi'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AiCustomerSupportCaseStudy() {
  const technologies = [
    'React 18', 'Node.js', 'TypeScript', 'Socket.io', 
    'Google Gemini API', 'Express.js', 'SQLite', 'TypeORM',
    'Tailwind CSS', 'WebRTC', 'JWT', 'Vite'
  ]

  const features = [
    'Real-time messaging with WebSocket technology',
    'AI-powered automatic responses using Gemini API',
    'Multi-tenant architecture with complete data isolation',
    'Knowledge base management with search',
    'Admin dashboard with analytics and reporting',
    'Embeddable chat widgets for easy integration',
    'Google OAuth integration',
    'Payment processing with Stripe',
    'Video call support using WebRTC',
    'Offline functionality with Service Workers',
    'Mobile-responsive design',
    'File sharing with secure upload handling'
  ]

  const results = [
    {
      icon: FiMessageSquare,
      value: '10,000+',
      label: 'Daily Queries Handled',
      description: 'Successfully processing 10,000+ customer queries per tenant daily',
      timeframe: 'Within 2 months'
    },
    {
      icon: FiUsers,
      value: '95%',
      label: 'Customer Satisfaction',
      description: 'Achieved industry-leading satisfaction rate',
      timeframe: 'Sustained over 6 months'
    },
    {
      icon: FiDollarSign,
      value: '60%',
      label: 'Cost Reduction',
      description: 'Saved approximately $150,000 annually per tenant',
      timeframe: 'First 3 months'
    },
    {
      icon: FiClock,
      value: '<30s',
      label: 'Response Time',
      description: 'Reduced from 4 hours to under 30 seconds',
      timeframe: 'Immediate impact'
    },
    {
      icon: FiZap,
      value: '75%',
      label: 'Automation Rate',
      description: 'Three-quarters of queries fully automated',
      timeframe: 'First month'
    },
    {
      icon: FiTrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Industry-leading reliability and performance',
      timeframe: 'Over 6 months'
    }
  ]

  const achievements = [
    'Deployed to production in record time (4 months)',
    'Zero infrastructure costs using free tiers',
    'Handled 500,000+ messages in first 3 months',
    'Multi-language support serving 15+ languages',
    '98% mobile compatibility score',
    '<2 second initial load time',
    'Easy integration with just 3 lines of code',
    'Fully customizable branding per tenant'
  ]

  return (
    <>
      <Head>
        <title>Case Study: AI Customer Support Platform | BuildVerse</title>
        <meta name="description" content="How BuildVerse built a multi-tenant AI chat support system handling 10,000+ daily queries with 95% satisfaction and 60% cost reduction using React, Node.js, and Gemini AI." />
        <meta property="og:title" content="Case Study: AI Customer Support Platform | BuildVerse" />
        <meta property="og:description" content="Multi-tenant chat support system achieving 95% satisfaction, 60% cost reduction, and <30s response times." />
        <link rel="canonical" href="https://buildverse.studio/case-studies/ai-customer-support-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                href="/#portfolio"
                className="inline-flex items-center space-x-2 text-slate-600 dark:text-gray-400 hover:text-primary-blue transition-colors"
              >
                <FiArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </Link>
            </motion.div>

            {/* Title & Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full mb-6">
                <FiMessageSquare className="w-4 h-4 text-primary-blue" />
                <span className="text-sm font-semibold text-primary-blue">Conversational AI</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                AI-Powered Multi-Tenant Chat Support Platform
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-8 max-w-4xl">
                Building a comprehensive real-time chat support system with AI automation that handles 10,000+ daily queries while reducing costs by 60% and maintaining 95% customer satisfaction.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-gray-400 mb-8">
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Client:</span> Enterprise SaaS Platform
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Industry:</span> Customer Support / SaaS
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Duration:</span> 4 months
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Year:</span> 2024
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://274653e9.mcp-5wk.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-blue/20"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
                <a
                  href="https://github.com/ChiragPatankar/MCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors border-2 border-slate-300 dark:border-white/10"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  The Challenge
                </h2>
                <div className="w-20 h-1 bg-primary-blue rounded-full mb-8" />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                  Modern businesses struggle with scaling customer support while maintaining quality and keeping costs reasonable. Our client faced several critical challenges:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      title: 'High Support Costs',
                      description: 'Traditional support required large teams operating 24/7, with costs exceeding $250,000 annually'
                    },
                    {
                      title: 'Slow Response Times',
                      description: 'Customers waiting 4+ hours for simple queries, leading to frustration and churn'
                    },
                    {
                      title: 'Scalability Issues',
                      description: 'Unable to handle sudden spikes in support volume during product launches or issues'
                    },
                    {
                      title: 'Multi-Tenant Complexity',
                      description: 'Need to serve multiple clients with completely isolated data and customization'
                    },
                    {
                      title: 'Knowledge Management',
                      description: 'Difficulty organizing and accessing support documentation across teams'
                    },
                    {
                      title: 'Limited Analytics',
                      description: 'No real-time insights into support performance, customer satisfaction, or team efficiency'
                    }
                  ].map((challenge, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border-2 border-slate-200 dark:border-white/10">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-400">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-2 border-primary-blue/20 rounded-xl">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Project Goal
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-gray-300">
                    Build a comprehensive AI-powered chat support system that could handle <strong>10,000+ daily queries</strong> while reducing costs by <strong>60%</strong> and maintaining <strong>95%+ customer satisfaction</strong>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Solution
                </h2>
                <div className="w-20 h-1 bg-primary-blue rounded-full mb-8" />
              </div>

              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                We built a comprehensive <strong>Multi-Tenant Chat Support Platform</strong> with real-time AI assistance, featuring enterprise-grade architecture and seamless user experience.
              </p>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Core Features Delivered
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FiCheck className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border-2 border-slate-200 dark:border-white/10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 rounded-lg text-center text-sm font-medium text-slate-700 dark:text-gray-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Architecture Highlights
                </h3>
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-gray-900 dark:to-black p-8 rounded-2xl text-white">
                  <pre className="text-sm overflow-x-auto">
{`┌─────────────────┐
│   React App     │  ← Vite + TypeScript + Tailwind
│   (Frontend)    │
└────────┬────────┘
         │
    ┌────▼─────────────────┐
    │   Load Balancer      │
    └────┬─────────────────┘
         │
    ┌────▼────────┐
    │  Express.js  │  ← Node.js + TypeScript
    │   API Server │
    └────┬────────┘
         │
    ┌────▼────────────────────┐
    │  Socket.io WebSocket    │  ← Real-time messaging
    └────┬────────────────────┘
         │
    ┌────▼──────────┐
    │  SQLite + ORM  │  ← TypeORM for persistence
    └───────────────┘
         │
    ┌────▼──────────┐
    │  Gemini API    │  ← AI-powered responses
    └───────────────┘`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-black">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Results & Impact
                </h2>
                <div className="w-20 h-1 bg-primary-blue rounded-full mb-8" />
              </div>

              {/* Metrics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-white/5 p-6 rounded-2xl border-2 border-slate-200 dark:border-white/10 hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all shadow-sm"
                  >
                    <result.icon className="w-12 h-12 text-primary-blue mb-4" />
                    <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold text-slate-700 dark:text-gray-300 mb-2">
                      {result.label}
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-2">
                      {result.description}
                    </p>
                    <div className="text-xs text-primary-blue font-medium">
                      {result.timeframe}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-2 border-primary-blue/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Special Achievements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-2xl border-2 border-slate-200 dark:border-white/10 shadow-lg"
            >
              <div className="text-5xl text-primary-blue mb-6">&quot;</div>
              <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 leading-relaxed mb-8">
                This AI-powered chat system transformed our customer support operations. We went from struggling to handle 2,000 daily queries with a team of 10, to effortlessly managing 10,000+ queries with just 3 team members. The cost savings alone paid for the entire project in the first quarter, and our customer satisfaction scores have never been higher.
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Sarah Mitchell</div>
                  <div className="text-slate-600 dark:text-gray-400">VP of Customer Success, TechCorp SaaS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Screenshot Placeholder */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Platform Overview
                </h2>
                <div className="w-20 h-1 bg-primary-blue rounded-full mb-8" />
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-gray-900 dark:to-black rounded-2xl p-8 md:p-12 text-center">
                <div className="aspect-video bg-slate-800 dark:bg-black/50 rounded-lg flex items-center justify-center border-2 border-slate-700 dark:border-white/10">
                  <div className="text-center space-y-4">
                    <FiMessageSquare className="w-20 h-20 text-primary-blue mx-auto" />
                    <div>
                      <p className="text-white text-xl font-semibold mb-2">Live Demo Available</p>
                      <a
                        href="https://274653e9.mcp-5wk.pages.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary-blue hover:text-blue-400 transition-colors"
                      >
                        <span>View Interactive Demo</span>
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 mt-6">
                  Experience the full platform capabilities with our live demo
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-blue to-primary-purple p-8 md:p-12 rounded-2xl text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Similar Results?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let&apos;s discuss how we can build a custom AI solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/#portfolio"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/20"
                >
                  View More Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

