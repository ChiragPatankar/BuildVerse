import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiCpu, FiUsers, FiTrendingUp, FiPhone, FiTarget, FiCheckCircle, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const VoiceActivatedSalesSystem = () => {
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
        <title>Voice-Activated Sales System - BuildVerse Case Study</title>
        <meta name="description" content="AI-powered voice agent that qualifies leads, schedules meetings, and automates follow-ups. 5K+ leads qualified with 45% conversion lift." />
        <meta name="keywords" content="voice AI, sales automation, lead qualification, CRM integration, conversational AI, sales optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildverse.studio/case-studies/voice-activated-sales-system" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Voice-Activated Sales System - BuildVerse Case Study" />
        <meta property="og:description" content="AI-powered voice agent that qualifies leads, schedules meetings, and automates follow-ups. 5K+ leads qualified with 45% conversion lift." />
        <meta property="og:url" content="https://buildverse.studio/case-studies/voice-activated-sales-system" />
        <meta property="og:image" content="https://buildverse.studio/og-image.jpg" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voice-Activated Sales System - BuildVerse Case Study" />
        <meta name="twitter:description" content="AI-powered voice agent that qualifies leads, schedules meetings, and automates follow-ups. 5K+ leads qualified with 45% conversion lift." />
        <meta name="twitter:url" content="https://buildverse.studio/case-studies/voice-activated-sales-system" />
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
              "headline": "Voice-Activated Sales System - BuildVerse Case Study",
              "description": "AI-powered voice agent that qualifies leads, schedules meetings, and automates follow-ups. 5K+ leads qualified with 45% conversion lift.",
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
              "url": "https://buildverse.studio/case-studies/voice-activated-sales-system",
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
                    <FiCpu className="w-4 h-4 mr-2" />
                    Voice AI
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                  Voice-Activated Sales System
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  AI-powered voice agent that qualifies leads, schedules meetings, and automates follow-ups, 
                  delivering 45% conversion lift and 2,000+ meetings booked.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiUsers className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">5K+ Leads Qualified</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">+45% Conversion Lift</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTarget className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">2K+ Meetings Booked</span>
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
                      A fast-growing SaaS company was struggling with lead qualification and sales follow-up processes. 
                      Their sales team was overwhelmed with:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Manual lead qualification taking 15+ minutes per prospect</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Only 25% of leads being properly qualified</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Inconsistent follow-up processes across team members</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>High cost per qualified lead at $150+</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Sales reps spending 60% of time on administrative tasks</span>
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
                    We developed an intelligent voice-activated sales system that automates lead qualification, 
                    scheduling, and follow-ups while maintaining a human-like conversation experience.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiPhone className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Voice AI Engine</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Advanced speech recognition and natural language processing for seamless 
                        human-like conversations with 98% accuracy.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTarget className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Smart Qualification</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        AI-powered lead scoring and qualification using BANT methodology 
                        with real-time decision making.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiUsers className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">CRM Integration</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Seamless integration with Salesforce, HubSpot, and Pipedrive for 
                        automatic data synchronization and workflow automation.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Analytics Dashboard</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Real-time performance tracking with detailed insights on conversion rates, 
                        call quality, and lead progression.
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
                    The voice-activated sales system delivered exceptional results, transforming the entire sales process.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiUsers className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">5,000+</div>
                    <div className="text-slate-600 dark:text-gray-400">Leads Qualified</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">In first 6 months</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTrendingUp className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">+45%</div>
                    <div className="text-slate-600 dark:text-gray-400">Conversion Lift</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Compared to manual process</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTarget className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2,000+</div>
                    <div className="text-slate-600 dark:text-gray-400">Meetings Booked</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Automatically scheduled</div>
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
                        <span className="text-slate-700 dark:text-gray-300">Reduced cost per lead by 70%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Increased sales team productivity by 3x</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">98% call quality satisfaction</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">ROI of 450% in first year</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">24/7 lead qualification</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Zero missed follow-ups</span>
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
                    <FiCpu className="w-8 h-8 text-primary-blue" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-6 italic">
                    &quot;BuildVerse&apos;s voice AI system revolutionized our sales process. We&apos;ve qualified 5,000+ leads 
                    and increased conversions by 45% while reducing costs by 70%. The AI sounds so natural, 
                    prospects don&apos;t even realize they&apos;re talking to a machine.&quot;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Michael Rodriguez</div>
                      <div className="text-slate-600 dark:text-gray-400">Sales Director, TechFlow Solutions</div>
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
                    A sophisticated voice AI platform built with cutting-edge technologies for enterprise-scale sales automation.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technology Stack</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">OpenAI Whisper for speech recognition</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">GPT-4 for natural language processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Twilio for voice communication</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Salesforce API integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">AWS infrastructure for scalability</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Natural conversation flow</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Multi-language support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Real-time sentiment analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Automated scheduling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Comprehensive analytics</span>
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
                    Ready to Automate Your Sales Process?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Let&apos;s discuss how our voice AI solutions can transform your sales operations.
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

export default VoiceActivatedSalesSystem
