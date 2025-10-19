import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiBarChart2, FiTrendingUp, FiUsers, FiDatabase, FiTarget, FiCheckCircle, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PredictiveAnalyticsEngine = () => {
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
        <title>Predictive Analytics Engine - BuildVerse Case Study</title>
        <meta name="description" content="Real-time business intelligence platform providing predictive insights for inventory and sales forecasting. 92% accuracy with 1M+ data points processed." />
        <meta name="keywords" content="predictive analytics, business intelligence, machine learning, forecasting, inventory management, sales prediction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildverse.studio/case-studies/predictive-analytics-engine" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Predictive Analytics Engine - BuildVerse Case Study" />
        <meta property="og:description" content="Real-time business intelligence platform providing predictive insights for inventory and sales forecasting. 92% accuracy with 1M+ data points processed." />
        <meta property="og:url" content="https://buildverse.studio/case-studies/predictive-analytics-engine" />
        <meta property="og:image" content="https://buildverse.studio/og-image.jpg" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Predictive Analytics Engine - BuildVerse Case Study" />
        <meta name="twitter:description" content="Real-time business intelligence platform providing predictive insights for inventory and sales forecasting. 92% accuracy with 1M+ data points processed." />
        <meta name="twitter:url" content="https://buildverse.studio/case-studies/predictive-analytics-engine" />
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
              "headline": "Predictive Analytics Engine - BuildVerse Case Study",
              "description": "Real-time business intelligence platform providing predictive insights for inventory and sales forecasting. 92% accuracy with 1M+ data points processed.",
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
              "url": "https://buildverse.studio/case-studies/predictive-analytics-engine",
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
                    <FiBarChart2 className="w-4 h-4 mr-2" />
                    Business Intelligence
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                  Predictive Analytics Engine
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  Real-time business intelligence platform providing predictive insights for inventory and sales forecasting, 
                  processing over 1 million data points with 92% accuracy.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTarget className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">92% Accuracy</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiDatabase className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">1M+ Data Points</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiUsers className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">500+ Active Users</span>
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
                      Our client, a leading retail chain with 200+ stores, was struggling with inventory management and sales forecasting. 
                      They were experiencing:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Overstocking leading to 15% waste in perishable goods</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Stockouts causing 8% lost sales opportunities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Manual forecasting taking 40+ hours weekly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Inaccurate predictions with only 65% accuracy</span>
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
                    We developed a comprehensive predictive analytics engine that combines machine learning algorithms 
                    with real-time data processing to deliver accurate forecasts and actionable insights.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiDatabase className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Data Integration</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Connected 15+ data sources including POS systems, inventory databases, weather APIs, 
                        and social media sentiment for comprehensive analysis.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">ML Models</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Implemented ensemble methods combining time series analysis, regression models, 
                        and neural networks for robust predictions.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiBarChart2 className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Real-time Analytics</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Built streaming analytics pipeline processing 10,000+ events per minute 
                        with sub-second response times.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTarget className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Actionable Insights</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Delivered intuitive dashboards with automated alerts and recommendations 
                        for inventory optimization and sales strategies.
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
                    The predictive analytics engine delivered transformative results across all key business metrics.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTrendingUp className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">92%</div>
                    <div className="text-slate-600 dark:text-gray-400">Prediction Accuracy</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Up from 65%</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">40%</div>
                    <div className="text-slate-600 dark:text-gray-400">Reduction in Waste</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">$2.3M saved annually</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiUsers className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">95%</div>
                    <div className="text-slate-600 dark:text-gray-400">Time Saved</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">From 40h to 2h weekly</div>
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
                        <span className="text-slate-700 dark:text-gray-300">Reduced stockouts by 85%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Increased sales by 12%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Improved customer satisfaction</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">ROI of 340% in first year</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Scaled to 500+ users</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">99.9% uptime achieved</span>
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
                    <FiBarChart2 className="w-8 h-8 text-primary-blue" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-6 italic">
                    &quot;BuildVerse&apos;s predictive analytics engine transformed our inventory management. 
                    We&apos;ve reduced waste by 40% and increased sales by 12% while saving 38 hours weekly. 
                    The accuracy and insights are game-changing.&quot;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Sarah Chen</div>
                      <div className="text-slate-600 dark:text-gray-400">VP of Operations, RetailChain Corp</div>
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
                    A comprehensive analytics platform built with modern technologies for scalability and performance.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technology Stack</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Python & TensorFlow for ML models</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Apache Kafka for real-time streaming</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">PostgreSQL for data storage</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">React dashboard for visualization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Docker & Kubernetes for deployment</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Real-time data processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Automated model retraining</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Interactive dashboards</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">API integrations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Mobile-responsive design</span>
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
                    Ready to Transform Your Business with Predictive Analytics?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Let&apos;s discuss how our analytics solutions can drive your business forward.
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

export default PredictiveAnalyticsEngine
