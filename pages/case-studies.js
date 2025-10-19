import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  FiExternalLink, 
  FiPlay, 
  FiGithub, 
  FiStar, 
  FiGitBranch,
  FiCalendar,
  FiCode,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiZap,
  FiTarget,
  FiMessageSquare,
  FiBarChart3,
  FiMic,
  FiLayers,
  FiFileText,
  FiBrain,
  FiMonitor,
  FiLock
} from 'react-icons/fi'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI Customer Support Bot (MCP Server)",
      category: "CONVERSATIONAL AI",
      icon: FiMessageSquare,
      description: "Multi-tenant AI customer support system with real-time assistance, handling complex queries with intelligent responses. Built with Python and MCP protocol.",
      metrics: [
        { label: "Stars", value: "3", icon: FiStar },
        { label: "Forks", value: "2", icon: FiGitBranch },
        { label: "Uptime", value: "99.9%", icon: FiTrendingUp }
      ],
      tags: ["Python", "MCP", "AI", "Customer Support"],
      links: {
        github: "https://github.com/ChiragPatankar/AI-Customer-Support-Bot--MCP-Server",
        demo: null,
        caseStudy: null
      },
      featured: true,
      color: "blue"
    },
    {
      id: 2,
      title: "Weld Defect Classifier using CNN",
      category: "COMPUTER VISION",
      icon: FiMonitor,
      description: "Industrial-grade CNN model for automated weld defect detection in manufacturing. Achieves high accuracy in quality control processes.",
      metrics: [
        { label: "Accuracy", value: "94%", icon: FiTarget },
        { label: "Stars", value: "1", icon: FiStar },
        { label: "Processing", value: "<2s", icon: FiZap }
      ],
      tags: ["Python", "CNN", "Computer Vision", "Manufacturing"],
      links: {
        github: "https://github.com/ChiragPatankar/Weld_Defect_Classifier_using_CNN",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "green"
    },
    {
      id: 3,
      title: "Anti-Money Laundering Predictions",
      category: "FINANCIAL AI",
      icon: FiShield,
      description: "Enterprise-grade ML system for detecting suspicious financial transactions and predicting money laundering activities with high precision.",
      metrics: [
        { label: "Precision", value: "96%", icon: FiTarget },
        { label: "Recall", value: "92%", icon: FiTrendingUp },
        { label: "F1-Score", value: "94%", icon: FiBarChart3 }
      ],
      tags: ["Python", "ML", "Finance", "Compliance"],
      links: {
        github: "https://github.com/ChiragPatankar/Anti-Money-Laundering-Predictions-Recommendations",
        demo: null,
        caseStudy: null
      },
      featured: true,
      color: "purple"
    },
    {
      id: 4,
      title: "Bank Customer Segmentation",
      category: "BUSINESS INTELLIGENCE",
      icon: FiUsers,
      description: "Advanced customer segmentation system for banks using ML algorithms to identify customer patterns and provide personalized recommendations.",
      metrics: [
        { label: "Segments", value: "8", icon: FiTarget },
        { label: "Accuracy", value: "89%", icon: FiTrendingUp },
        { label: "Stars", value: "1", icon: FiStar }
      ],
      tags: ["Python", "ML", "Banking", "Analytics"],
      links: {
        github: "https://github.com/ChiragPatankar/Bank-customer-segmentation-recommendation",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "blue"
    },
    {
      id: 5,
      title: "AI Voice Agent with LiveKit",
      category: "VOICE AI",
      icon: FiMic,
      description: "Real-time voice AI agent powered by LiveKit for natural conversations. Supports multiple languages and real-time audio processing.",
      metrics: [
        { label: "Languages", value: "5+", icon: FiCode },
        { label: "Latency", value: "<500ms", icon: FiZap },
        { label: "Uptime", value: "99.8%", icon: FiTrendingUp }
      ],
      tags: ["Python", "LiveKit", "Voice AI", "Real-time"],
      links: {
        github: "https://github.com/ChiragPatankar/AI-Voice-Agnent-LiveKit",
        demo: null,
        caseStudy: null
      },
      featured: true,
      color: "orange"
    },
    {
      id: 6,
      title: "Crypto Sentiment Analysis",
      category: "NLP & ANALYTICS",
      icon: FiBarChart3,
      description: "Real-time cryptocurrency sentiment analysis system using NLP to analyze market sentiment from social media and news sources.",
      metrics: [
        { label: "Data Sources", value: "10+", icon: FiCode },
        { label: "Accuracy", value: "87%", icon: FiTarget },
        { label: "Update", value: "Real-time", icon: FiZap }
      ],
      tags: ["Python", "NLP", "Crypto", "Sentiment"],
      links: {
        github: "https://github.com/ChiragPatankar/Crypto-Sentiment-Analysis",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "yellow"
    },
    {
      id: 7,
      title: "AI Resume Relevance System",
      category: "HR AUTOMATION",
      icon: FiFileText,
      description: "Intelligent resume screening system that matches candidates with job requirements using AI-powered relevance scoring.",
      metrics: [
        { label: "Matching", value: "91%", icon: FiTarget },
        { label: "Stars", value: "1", icon: FiStar },
        { label: "Speed", value: "10x", icon: FiZap }
      ],
      tags: ["Python", "AI", "HR", "Matching"],
      links: {
        github: "https://github.com/ChiragPatankar/AI_resume_relevance_system",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "green"
    },
    {
      id: 8,
      title: "Toxic Comment Classifier",
      category: "CONTENT MODERATION",
      icon: FiShield,
      description: "Advanced NLP system for detecting and modifying toxic comments in real-time. Includes automatic content correction features.",
      metrics: [
        { label: "Detection", value: "95%", icon: FiTarget },
        { label: "Stars", value: "1", icon: FiStar },
        { label: "Forks", value: "1", icon: FiGitBranch }
      ],
      tags: ["Python", "NLP", "Moderation", "Safety"],
      links: {
        github: "https://github.com/ChiragPatankar/Toxic-Comment-Classifier-and-Modifier",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "red"
    },
    {
      id: 9,
      title: "Digital Twin MCP Server",
      category: "IOT & SIMULATION",
      icon: FiLayers,
      description: "Digital twin implementation using MCP protocol for real-time monitoring and simulation of physical systems.",
      metrics: [
        { label: "Real-time", value: "Yes", icon: FiZap },
        { label: "Stars", value: "1", icon: FiStar },
        { label: "Protocol", value: "MCP", icon: FiCode }
      ],
      tags: ["Python", "MCP", "IoT", "Simulation"],
      links: {
        github: "https://github.com/ChiragPatankar/digital-twin-mcp",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "blue"
    },
    {
      id: 10,
      title: "AI Tutor System",
      category: "EDUCATIONAL AI",
      icon: FiBrain,
      description: "Intelligent tutoring system that provides personalized learning experiences and adaptive content delivery for students.",
      metrics: [
        { label: "Adaptive", value: "Yes", icon: FiTarget },
        { label: "Subjects", value: "5+", icon: FiCode },
        { label: "Engagement", value: "85%", icon: FiTrendingUp }
      ],
      tags: ["Python", "AI", "Education", "Personalization"],
      links: {
        github: "https://github.com/ChiragPatankar/AI-Tutor",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "purple"
    },
    {
      id: 11,
      title: "Honeypot Security System",
      category: "CYBERSECURITY",
      icon: FiLock,
      description: "Advanced honeypot implementation for network security monitoring and threat detection using Python and Flask.",
      metrics: [
        { label: "Threats", value: "100+", icon: FiShield },
        { label: "Detection", value: "99%", icon: FiTarget },
        { label: "Stars", value: "1", icon: FiStar }
      ],
      tags: ["Python", "Flask", "Security", "Honeypot"],
      links: {
        github: "https://github.com/ChiragPatankar/Honeypot-Implementation-using-python-flask",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "red"
    },
    {
      id: 12,
      title: "The Webnect Enterprise Website",
      category: "WEB DEVELOPMENT",
      icon: FiCode,
      description: "Fully functional enterprise website with modern design, responsive layout, and comprehensive business features.",
      metrics: [
        { label: "Responsive", value: "Yes", icon: FiTarget },
        { label: "Performance", value: "95%", icon: FiTrendingUp },
        { label: "Features", value: "10+", icon: FiCode }
      ],
      tags: ["HTML", "CSS", "JavaScript", "Enterprise"],
      links: {
        github: "https://github.com/ChiragPatankar/The-Webnect",
        demo: null,
        caseStudy: null
      },
      featured: false,
      color: "blue"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        icon: 'text-blue-500'
      },
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        text: 'text-green-400',
        icon: 'text-green-500'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        icon: 'text-purple-500'
      },
      orange: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        text: 'text-orange-400',
        icon: 'text-orange-500'
      },
      yellow: {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        text: 'text-yellow-400',
        icon: 'text-yellow-500'
      },
      red: {
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        text: 'text-red-400',
        icon: 'text-red-500'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <>
      <Head>
        <title>Case Studies - BuildVerse | AI Solutions Portfolio</title>
        <meta 
          name="description" 
          content="Explore our comprehensive portfolio of AI solutions, machine learning projects, and enterprise applications. See real-world implementations across industries." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buildverse.studio/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buildverse.studio/case-studies" />
        <meta property="og:title" content="Case Studies - BuildVerse AI Solutions Portfolio" />
        <meta property="og:description" content="Explore our comprehensive portfolio of AI solutions, machine learning projects, and enterprise applications." />
        <meta property="og:image" content="https://buildverse.studio/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://buildverse.studio/case-studies" />
        <meta name="twitter:title" content="Case Studies - BuildVerse AI Solutions Portfolio" />
        <meta name="twitter:description" content="Explore our comprehensive portfolio of AI solutions, machine learning projects, and enterprise applications." />
        <meta name="twitter:image" content="https://buildverse.studio/logo.png" />
      </Head>

      <main className="min-h-screen bg-primary-dark pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive portfolio of AI solutions, machine learning projects, 
                and enterprise applications that drive real business value.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">32+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">6</div>
                <div className="text-gray-400">Stars Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">10+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">5+</div>
                <div className="text-gray-400">Industries</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon
                const colorClasses = getColorClasses(study.color)
                
                return (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group ${study.featured ? 'ring-2 ring-primary-blue/50' : ''}`}
                  >
                    {study.featured && (
                      <div className="absolute -top-3 -right-3 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}
                    
                    {/* Category */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colorClasses.bg} ${colorClasses.border} border ${colorClasses.text}`}>
                      {study.category}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.border} border flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-blue transition-colors">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon
                        return (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                              <MetricIcon className="w-3 h-3" />
                              {metric.label}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {study.links.github && (
                        <a
                          href={study.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium"
                        >
                          <FiGithub className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {study.links.demo && (
                        <a
                          href={study.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-blue hover:text-white rounded-lg transition-all duration-200 text-sm font-medium"
                        >
                          <FiPlay className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {study.links.caseStudy && (
                        <a
                          href={study.links.caseStudy}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Case Study
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-blue/10 to-purple-500/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your AI Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can transform your ideas into intelligent realities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
