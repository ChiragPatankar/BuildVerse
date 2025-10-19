import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiTrendingUp, FiHeart, FiCheckCircle, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PersonalizationRecommendationEngine = () => {
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
        <title>Personalization Recommendation Engine - BuildVerse Case Study</title>
        <meta name="description" content="Machine learning-powered recommendation system driving engagement and revenue growth. +35% engagement, +28% revenue lift with 1M+ active users." />
        <meta name="keywords" content="recommendation engine, personalization, machine learning, ML systems, user engagement, revenue optimization, collaborative filtering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildverse.studio/case-studies/personalization-recommendation-engine" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Personalization Recommendation Engine - BuildVerse Case Study" />
        <meta property="og:description" content="Machine learning-powered recommendation system driving engagement and revenue growth. +35% engagement, +28% revenue lift with 1M+ active users." />
        <meta property="og:url" content="https://buildverse.studio/case-studies/personalization-recommendation-engine" />
        <meta property="og:image" content="https://buildverse.studio/og-image.jpg" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personalization Recommendation Engine - BuildVerse Case Study" />
        <meta name="twitter:description" content="Machine learning-powered recommendation system driving engagement and revenue growth. +35% engagement, +28% revenue lift with 1M+ active users." />
        <meta name="twitter:url" content="https://buildverse.studio/case-studies/personalization-recommendation-engine" />
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
              "headline": "Personalization Recommendation Engine - BuildVerse Case Study",
              "description": "Machine learning-powered recommendation system driving engagement and revenue growth. +35% engagement, +28% revenue lift with 1M+ active users.",
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
              "url": "https://buildverse.studio/case-studies/personalization-recommendation-engine",
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
                    <FiTarget className="w-4 h-4 mr-2" />
                    ML Systems
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                  Personalization Recommendation Engine
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  Machine learning-powered recommendation system driving engagement and revenue growth, 
                  delivering 35% engagement increase and 28% revenue lift with 1M+ active users.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiHeart className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">+35% Engagement</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">+28% Revenue Lift</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiUsers className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">1M+ Active Users</span>
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
                      A leading streaming platform with 2M+ users was struggling with content discovery 
                      and user engagement. They faced significant personalization challenges:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Low user engagement with only 15% content completion rate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Generic recommendations leading to high churn rates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Limited content discovery with 80% of catalog unseen</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Poor revenue per user due to low engagement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Manual curation unable to scale with growing content library</span>
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
                    We developed a sophisticated personalization recommendation engine that combines 
                    collaborative filtering, content-based filtering, and deep learning to deliver 
                    highly relevant content recommendations at scale.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTarget className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Hybrid ML Models</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Implemented ensemble of collaborative filtering, content-based filtering, 
                        and neural collaborative filtering for optimal recommendation accuracy.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiUsers className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Real-time Personalization</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Built real-time recommendation API with sub-100ms response times, 
                        updating user preferences and content rankings dynamically.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Advanced Analytics</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Comprehensive A/B testing framework and performance analytics to continuously 
                        optimize recommendation algorithms and user experience.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiHeart className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Contextual Understanding</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Deep learning models that understand user context, mood, time of day, 
                        and viewing patterns for highly personalized recommendations.
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
                    The personalization recommendation engine delivered exceptional results, 
                    transforming user engagement and driving significant revenue growth.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiHeart className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">+35%</div>
                    <div className="text-slate-600 dark:text-gray-400">Engagement Increase</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">User interaction rate</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTrendingUp className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">+28%</div>
                    <div className="text-slate-600 dark:text-gray-400">Revenue Lift</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Monthly recurring revenue</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiUsers className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">1M+</div>
                    <div className="text-slate-600 dark:text-gray-400">Active Users</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Daily active users</div>
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
                        <span className="text-slate-700 dark:text-gray-300">Reduced churn rate by 40%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Increased content completion by 60%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">ROI of 380% in first year</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">95% recommendation accuracy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Sub-100ms response times</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Scalable to 10M+ users</span>
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
                    <FiTarget className="w-8 h-8 text-primary-blue" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-6 italic">
                    &quot;BuildVerse&apos;s recommendation engine transformed our platform. We&apos;ve seen 35% engagement 
                    increase and 28% revenue lift while reducing churn by 40%. The personalization is so accurate, 
                    users feel like we know exactly what they want to watch.&quot;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Alex Thompson</div>
                      <div className="text-slate-600 dark:text-gray-400">CTO, StreamFlow Entertainment</div>
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
                    A sophisticated ML-powered recommendation platform built with modern technologies for enterprise-scale personalization.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technology Stack</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">TensorFlow & PyTorch for ML models</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Apache Spark for big data processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Redis for real-time caching</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Kubernetes for orchestration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">GraphQL APIs for frontend</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Hybrid recommendation algorithms</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Real-time personalization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">A/B testing framework</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Contextual understanding</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Performance analytics</span>
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
                    Ready to Personalize Your User Experience?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Let&apos;s discuss how our recommendation engine can transform your user engagement and revenue.
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

export default PersonalizationRecommendationEngine
