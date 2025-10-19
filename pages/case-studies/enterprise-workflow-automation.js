import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiClock, FiLayers, FiTarget, FiCheckCircle, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const EnterpriseWorkflowAutomation = () => {
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

  return (
    <>
      <Head>
        <title>Enterprise Workflow Automation - BuildVerse Case Study</title>
        <meta name="description" content="End-to-end automation platform streamlining operations across multiple departments. 200h/mo time saved with 70% efficiency gain across 50+ processes." />
        <meta name="keywords" content="workflow automation, RPA, process automation, enterprise automation, business process optimization, digital transformation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildverse.studio/case-studies/enterprise-workflow-automation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Enterprise Workflow Automation - BuildVerse Case Study" />
        <meta property="og:description" content="End-to-end automation platform streamlining operations across multiple departments. 200h/mo time saved with 70% efficiency gain across 50+ processes." />
        <meta property="og:url" content="https://buildverse.studio/case-studies/enterprise-workflow-automation" />
        <meta property="og:image" content="https://buildverse.studio/og-image.jpg" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Workflow Automation - BuildVerse Case Study" />
        <meta name="twitter:description" content="End-to-end automation platform streamlining operations across multiple departments. 200h/mo time saved with 70% efficiency gain across 50+ processes." />
        <meta name="twitter:url" content="https://buildverse.studio/case-studies/enterprise-workflow-automation" />
        <meta name="twitter:image" content="https://buildverse.studio/og-image.jpg" />
        <meta name="twitter:creator" content="@_BuildVerse_" />
        <meta name="twitter:site" content="@_BuildVerse_" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Enterprise Workflow Automation - BuildVerse Case Study",
              "description": "End-to-end automation platform streamlining operations across multiple departments. 200h/mo time saved with 70% efficiency gain across 50+ processes.",
              "author": {
                "@type": "Organization",
                "name": "BuildVerse",
                "url": "https://buildverse.studio"
              },
              "publisher": {
                "@type": "Organization",
                "name": "BuildVerse",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://buildverse.studio/logo.png"
                }
              },
              "datePublished": "2025-01-12",
              "dateModified": "2025-01-12",
              "url": "https://buildverse.studio/case-studies/enterprise-workflow-automation",
              "image": "https://buildverse.studio/og-image.jpg"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300">
        <Navbar />
        
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-16 md:pt-20 lg:pt-24"
        >
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-sm font-semibold text-primary-blue">
                    <FiTrendingUp className="w-4 h-4 mr-2" />
                    Process Automation
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                  Enterprise Workflow Automation
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  End-to-end automation platform streamlining operations across multiple departments, 
                  saving 200 hours monthly with 70% efficiency gain across 50+ processes.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiClock className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">200h/mo Time Saved</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiLayers className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">50+ Processes</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTarget className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">+70% Efficiency</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    The Challenge
                  </h2>
                  <div className="space-y-4 text-slate-600 dark:text-gray-400">
                    <p>
                      A Fortune 500 manufacturing company was struggling with manual, repetitive processes 
                      across multiple departments. They faced significant operational challenges:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Manual data entry consuming 40+ hours weekly across departments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Inconsistent processes leading to 15% error rates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Slow approval workflows taking 5-7 days average</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>High operational costs with limited scalability</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Employee burnout from repetitive tasks</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Our Solution
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
                    We developed a comprehensive enterprise workflow automation platform that integrates 
                    RPA, AI, and advanced orchestration to streamline operations across all departments.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiLayers className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">RPA Integration</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Deployed intelligent bots for data entry, document processing, and system integration 
                        across ERP, CRM, and legacy systems.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTarget className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Workflow Orchestration</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Built intelligent workflow engine with conditional logic, parallel processing, 
                        and exception handling for complex business processes.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">AI-Powered Decision Making</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Implemented machine learning algorithms for intelligent routing, 
                        anomaly detection, and predictive process optimization.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiClock className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Real-time Monitoring</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Created comprehensive dashboard with real-time process monitoring, 
                        performance analytics, and automated alerting systems.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Results & Impact Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Results & Impact
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-gray-400">
                    The enterprise workflow automation platform delivered transformative results 
                    across all operational metrics and employee satisfaction.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiClock className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">200h</div>
                    <div className="text-slate-600 dark:text-gray-400">Time Saved Monthly</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">$50K+ monthly savings</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiLayers className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
                    <div className="text-slate-600 dark:text-gray-400">Processes Automated</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Across 8 departments</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTarget className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">+70%</div>
                    <div className="text-slate-600 dark:text-gray-400">Efficiency Gain</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Overall productivity</div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Key Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Reduced error rates by 90%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Cut approval times by 80%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">ROI of 380% in first year</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">99.5% process uptime</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">95% employee satisfaction</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Scalable to 200+ processes</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl p-8 md:p-12">
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiTrendingUp className="w-8 h-8 text-primary-blue" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-6 italic">
                    &quot;BuildVerse&apos;s workflow automation platform transformed our entire operation. 
                    We&apos;ve saved 200 hours monthly and increased efficiency by 70% while reducing errors by 90%. 
                    Our employees are now focused on strategic work instead of repetitive tasks.&quot;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">David Kim</div>
                      <div className="text-slate-600 dark:text-gray-400">COO, Manufacturing Solutions Inc.</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Platform Overview Section */}
          <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants} className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Platform Overview
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-gray-400">
                    A robust enterprise automation platform built with modern technologies for scalability and reliability.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technology Stack</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">UiPath RPA platform</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Microsoft Power Automate</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Python & Node.js APIs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">PostgreSQL database</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Docker & Kubernetes</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Visual workflow designer</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">AI-powered decision trees</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Real-time monitoring</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Exception handling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Multi-system integration</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-primary-purple">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Automate Your Enterprise Workflows?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Let&apos;s discuss how our automation solutions can transform your business operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Start Your Project</span>
                      <FiArrowRight className="w-5 h-5 ml-2" />
                    </motion.a>
                    <motion.a
                      href="/portfolio"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-blue transition-colors"
                    >
                      <span>View More Case Studies</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.main>

        <Footer />
      </div>
    </>
  )
}

export default EnterpriseWorkflowAutomation
