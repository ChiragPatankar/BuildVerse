import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiLayers, FiFileText, FiTrendingUp, FiTarget, FiCheckCircle, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const AIContentGenerationSuite = () => {
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
        <title>AI Content Generation Suite - BuildVerse Case Study</title>
        <meta name="description" content="Advanced NLP system generating high-quality marketing content and product descriptions at scale. 100K+ content pieces with 94% quality score and 10x speed increase." />
        <meta name="keywords" content="AI content generation, NLP, marketing automation, content creation, copywriting AI, content marketing, natural language processing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildverse.studio/case-studies/ai-content-generation-suite" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Content Generation Suite - BuildVerse Case Study" />
        <meta property="og:description" content="Advanced NLP system generating high-quality marketing content and product descriptions at scale. 100K+ content pieces with 94% quality score and 10x speed increase." />
        <meta property="og:url" content="https://buildverse.studio/case-studies/ai-content-generation-suite" />
        <meta property="og:image" content="https://buildverse.studio/og-image.jpg" />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Content Generation Suite - BuildVerse Case Study" />
        <meta name="twitter:description" content="Advanced NLP system generating high-quality marketing content and product descriptions at scale. 100K+ content pieces with 94% quality score and 10x speed increase." />
        <meta name="twitter:url" content="https://buildverse.studio/case-studies/ai-content-generation-suite" />
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
              "headline": "AI Content Generation Suite - BuildVerse Case Study",
              "description": "Advanced NLP system generating high-quality marketing content and product descriptions at scale. 100K+ content pieces with 94% quality score and 10x speed increase.",
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
              "url": "https://buildverse.studio/case-studies/ai-content-generation-suite",
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
                    <FiLayers className="w-4 h-4 mr-2" />
                    Content AI
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                  AI Content Generation Suite
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  Advanced NLP system generating high-quality marketing content and product descriptions at scale, 
                  delivering 100K+ content pieces with 94% quality score and 10x speed increase.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiFileText className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">100K+ Content Pieces</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTarget className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">94% Quality Score</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg">
                    <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">10x Speed Increase</span>
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
                      A leading e-commerce platform with 50,000+ products was struggling with content creation 
                      and marketing copy generation. They faced significant content challenges:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Manual content creation taking 2-3 hours per product description</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Inconsistent quality and tone across marketing materials</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>High content creation costs at $50+ per piece</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Limited scalability for seasonal campaigns and new product launches</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Content team overwhelmed with repetitive writing tasks</span>
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
                    We developed a comprehensive AI content generation suite that combines advanced NLP models 
                    with brand-specific training to produce high-quality, scalable content across all marketing channels.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiLayers className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Advanced NLP Models</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Implemented GPT-4, Claude, and custom fine-tuned models for different content types, 
                        ensuring optimal quality and brand consistency.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiFileText className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Multi-Format Generation</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Supports product descriptions, blog posts, social media content, email campaigns, 
                        and SEO-optimized copy with automatic formatting.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTarget className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Brand Voice Training</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Custom AI models trained on brand guidelines, tone, and style preferences 
                        to maintain consistent voice across all content.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <FiTrendingUp className="w-5 h-5 text-primary-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quality Assurance</h3>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400">
                        Built-in quality scoring, plagiarism detection, and human review workflows 
                        to ensure content meets brand standards.
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
                    The AI content generation suite delivered exceptional results, transforming content creation 
                    from a bottleneck into a competitive advantage.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiFileText className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">100K+</div>
                    <div className="text-slate-600 dark:text-gray-400">Content Pieces Generated</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">In first 8 months</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTarget className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">94%</div>
                    <div className="text-slate-600 dark:text-gray-400">Quality Score</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Human-reviewed content</div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTrendingUp className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">10x</div>
                    <div className="text-slate-600 dark:text-gray-400">Speed Increase</div>
                    <div className="text-sm text-slate-500 dark:text-gray-500 mt-1">Content creation time</div>
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
                        <span className="text-slate-700 dark:text-gray-300">Reduced content costs by 85%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Increased content output by 15x</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">ROI of 420% in first year</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">98% brand consistency score</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Zero plagiarism issues</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">Scalable to 1M+ products</span>
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
                    <FiLayers className="w-8 h-8 text-primary-blue" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-6 italic">
                    &quot;BuildVerse&apos;s AI content generation suite revolutionized our marketing operations. 
                    We&apos;ve generated 100K+ high-quality content pieces with 94% quality score while reducing 
                    costs by 85%. Our content team now focuses on strategy instead of repetitive writing.&quot;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Jennifer Martinez</div>
                      <div className="text-slate-600 dark:text-gray-400">CMO, E-Commerce Solutions</div>
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
                    A sophisticated content generation platform built with cutting-edge AI technologies for enterprise-scale content creation.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technology Stack</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">OpenAI GPT-4 & Claude</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Custom fine-tuned models</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Python & TensorFlow</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">React dashboard interface</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">AWS infrastructure</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Multi-format content generation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Brand voice customization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Quality scoring system</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Plagiarism detection</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-slate-700 dark:text-gray-300">Batch processing capabilities</span>
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
                    Ready to Scale Your Content Creation?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Let&apos;s discuss how our AI content generation solutions can transform your marketing operations.
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

export default AIContentGenerationSuite
