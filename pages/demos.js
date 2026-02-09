import Head from 'next/head'
import { useCallback, useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiPlay, FiExternalLink, FiChevronRight, FiCheck, FiUsers, FiClock, FiZap } from 'react-icons/fi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// =============================================================================
// DATA - Enhanced with better copy and outcome-focused features
// =============================================================================

const productCategories = [
  {
    id: 'crm-solutions',
    name: 'CRM Solutions',
    tagline: 'Industry-Specific. Results-Driven.',
    description: 'Stop forcing your workflow into generic software. Each CRM is purpose-built for how your industry actually operates.',
    icon: '💼',
    color: 'blue',
    socialProof: 'Trusted by 50+ growing businesses',
    products: [
      {
        id: 'clinicflow',
        title: 'ClinicFlow',
        subtitle: 'Healthcare Management',
        valueProposition: 'Cut no-shows by 40% and save 2 hours daily on patient management',
        description: 'Everything your clinic needs—patient records, smart scheduling, billing, and automated reminders—in one HIPAA-ready platform.',
        icon: '🏥',
        color: 'sky',
        outcomes: [
          { label: '40% fewer no-shows', icon: '📉' },
          { label: '2hrs saved daily', icon: '⏰' },
          { label: 'Zero double-bookings', icon: '✓' },
        ],
        bestFor: 'Clinics with 2-50 staff',
        videoUrl: '/api/video/ClinicFlow',
        liveUrl: 'https://clinic-flow-crm-2c61f705.base44.app',
        metrics: { users: '500+', rating: '4.9' },
      },
      {
        id: 'synergyhub',
        title: 'SynergyHub',
        subtitle: 'Agency & Team CRM',
        valueProposition: 'Centralize all clients and automate follow-ups—never miss a deal',
        description: 'Centralize clients, projects, and invoices. Automate the busywork so you can focus on billable work.',
        icon: '💼',
        color: 'purple',
        outcomes: [
          { label: 'All clients in one view', icon: '👁️' },
          { label: 'Auto follow-ups', icon: '🔄' },
          { label: 'Faster invoicing', icon: '💸' },
        ],
        bestFor: 'Agencies & consultants',
        videoUrl: '/api/video/Business_CRM',
        liveUrl: 'https://synergy-hub-a6ee0a84.base44.app',
        metrics: { users: '300+', rating: '4.8' },
      },
      {
        id: 'propelcrm',
        title: 'PropelCRM',
        subtitle: 'Real Estate CRM',
        valueProposition: 'Track every lead and close 30% more deals with smart follow-ups',
        description: 'Track every property, lead, and showing. Get reminded to follow up at the perfect time to close.',
        icon: '🏠',
        color: 'emerald',
        outcomes: [
          { label: 'No lead left behind', icon: '🎯' },
          { label: 'Smart follow-up timing', icon: '⏱️' },
          { label: 'Deal pipeline clarity', icon: '📊' },
        ],
        bestFor: 'Agents & brokerages',
        videoUrl: '/api/video/RealEstate_CRM',
        liveUrl: 'https://propel-crm-2d60cbfd.base44.app',
        metrics: { users: '200+', rating: '4.9' },
      },
      {
        id: 'constructpro',
        title: 'ConstructPro',
        subtitle: 'Construction CRM',
        valueProposition: 'See real-time project status and eliminate status update calls',
        description: 'Track projects, milestones, payments, and documents. Keep clients informed without endless phone calls.',
        icon: '🏗️',
        color: 'amber',
        outcomes: [
          { label: 'Real-time project status', icon: '📋' },
          { label: 'Payment tracking', icon: '💰' },
          { label: 'Client self-service', icon: '👤' },
        ],
        bestFor: 'Builders & contractors',
        videoUrl: '/api/video/Builder_CRM',
        liveUrl: 'https://construct-pro-af466def.base44.app',
        metrics: { users: '150+', rating: '4.8' },
      },
      {
        id: 'apexlegal',
        title: 'ApexLegal',
        subtitle: 'Legal Practice CRM',
        valueProposition: 'Never miss deadlines and capture every billable hour automatically',
        description: 'Case management, time tracking, deadline alerts, and invoicing—built for how law firms actually work.',
        icon: '⚖️',
        color: 'rose',
        outcomes: [
          { label: 'Deadline alerts', icon: '🔔' },
          { label: 'Accurate time capture', icon: '⏱️' },
          { label: 'One-click invoices', icon: '📄' },
        ],
        bestFor: 'Law firms & solo attorneys',
        videoUrl: '/api/video/Legal_CRM',
        liveUrl: 'https://apex-legal-crm-3ddf10ef.base44.app',
        metrics: { users: '100+', rating: '4.9' },
      },
    ],
  },
];

const colorClasses = {
  blue: {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/30',
    gradient: 'from-blue-500 to-blue-600',
    ring: 'ring-blue-500/20',
  },
  sky: {
    text: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500',
    bgLight: 'bg-sky-50 dark:bg-sky-500/10',
    border: 'border-sky-200 dark:border-sky-500/30',
    gradient: 'from-sky-500 to-cyan-500',
    ring: 'ring-sky-500/20',
  },
  purple: {
    text: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-50 dark:bg-purple-500/10',
    border: 'border-purple-200 dark:border-purple-500/30',
    gradient: 'from-purple-500 to-violet-500',
    ring: 'ring-purple-500/20',
  },
  emerald: {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-200 dark:border-emerald-500/30',
    gradient: 'from-emerald-500 to-teal-500',
    ring: 'ring-emerald-500/20',
  },
  amber: {
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-200 dark:border-amber-500/30',
    gradient: 'from-amber-500 to-orange-500',
    ring: 'ring-amber-500/20',
  },
  rose: {
    text: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500',
    bgLight: 'bg-rose-50 dark:bg-rose-500/10',
    border: 'border-rose-200 dark:border-rose-500/30',
    gradient: 'from-rose-500 to-pink-500',
    ring: 'ring-rose-500/20',
  },
};

// =============================================================================
// COMPONENTS
// =============================================================================

const ProductCard = ({ product, index, onWatch }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const colors = colorClasses[product.color];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col rounded-2xl border bg-white dark:bg-slate-900/50 overflow-hidden transition-all duration-500 cursor-pointer ${
        isHovered 
          ? `border-slate-300 dark:border-white/20 shadow-2xl shadow-slate-200/50 dark:shadow-black/30 -translate-y-1 ring-2 ${colors.ring}` 
          : 'border-slate-200 dark:border-white/10 shadow-sm hover:border-slate-300 dark:hover:border-white/20'
      }`}
    >
      {/* Top accent bar with animation */}
      <motion.div 
        className={`h-1 w-full bg-gradient-to-r ${colors.gradient} origin-left`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Header with icon */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            className={`flex-shrink-0 w-14 h-14 rounded-xl ${colors.bgLight} border ${colors.border} flex items-center justify-center text-2xl transition-transform duration-300`}
            animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className={`text-xl font-bold ${colors.text}`}>{product.title}</h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-white/50 font-medium">{product.subtitle}</p>
          </div>
        </div>

        {/* Value Proposition - The hook with social proof */}
        <div className="mb-3">
          <p className={`text-base font-semibold ${colors.text} leading-snug mb-1.5`}>
            {product.valueProposition}
          </p>
          {product.metrics && (
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-white/50">
              <span className="flex items-center gap-1">
                <FiUsers className="w-3 h-3" />
                <span className="font-medium">{product.metrics.users} active users</span>
              </span>
              <span className="flex items-center gap-1">
                <span>⭐</span>
                <span className="font-medium">{product.metrics.rating}/5</span>
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Outcome-focused features */}
        <div className="space-y-2 mb-4">
          {product.outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 + 0.4 }}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-base">{outcome.icon}</span>
              <span className="text-slate-700 dark:text-white/70">{outcome.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Best For badge with usage context */}
        <div className="mb-5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400 dark:text-white/40 uppercase tracking-wide">Best for:</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bgLight} ${colors.text} border ${colors.border}`}>
              {product.bestFor}
            </span>
          </div>
          {product.metrics && (
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Used by {product.metrics.users} teams like yours</span>
            </div>
          )}
        </div>

        {/* CTA Buttons - pushed to bottom */}
        <div className="mt-auto space-y-2.5">
          {/* Primary CTA - Clear action expectation */}
          <motion.a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative flex flex-col items-center justify-center gap-1 w-full rounded-xl bg-gradient-to-r ${colors.gradient} px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.98]`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2">
              <FiExternalLink className="w-4 h-4" />
              <span>Open Live Demo</span>
            </div>
            <span className="text-white/80 text-[11px] font-medium">Full access • 2 min setup</span>
          </motion.a>
          
          {/* Secondary CTA - Video preview */}
          <motion.button
            type="button"
            onClick={() => onWatch?.(product)}
            className="flex items-center justify-center gap-2 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-white transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiPlay className="w-4 h-4" />
            <span>Quick Video Tour</span>
            <span className="text-slate-400 dark:text-white/40 text-xs ml-auto">2 min</span>
          </motion.button>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ring-2 ${colors.ring} pointer-events-none`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

const CategorySection = ({ category, onWatch }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (category.products.length === 0) return null;

  return (
    <section ref={sectionRef} className="mb-20">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                {category.name}
              </h2>
              <p className="text-base font-medium text-primary-blue dark:text-blue-400">
                {category.tagline}
              </p>
            </div>
          </div>
          
          {/* Social proof badge with real metrics */}
          {category.socialProof && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/30"
            >
              <div className="flex items-center gap-2">
                <FiUsers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {category.socialProof}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-emerald-600 dark:text-emerald-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Avg. 4.8/5 rating</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>2-week setup</span>
                </span>
              </div>
            </motion.div>
          )}
        </div>
        
        <p className="text-lg text-slate-600 dark:text-white/60 max-w-3xl">
          {category.description}
        </p>
      </motion.div>

      {/* Products Grid - Responsive */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {category.products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onWatch={onWatch}
          />
        ))}
      </div>
    </section>
  );
};

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: <FiUsers className="w-5 h-5" />, value: '50+', label: 'Teams Using Our CRMs', sublabel: 'Across 5 industries' },
    { icon: <FiZap className="w-5 h-5" />, value: '5', label: 'Industry-Specific Solutions', sublabel: 'Built for real workflows' },
    { icon: <FiCheck className="w-5 h-5" />, value: '99.9%', label: 'Uptime SLA', sublabel: 'Enterprise-grade reliability' },
    { icon: <FiClock className="w-5 h-5" />, value: '2 Weeks', label: 'Average Setup Time', sublabel: 'Not months—weeks' },
  ];

  return (
    <div ref={ref} className="border-y border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue/10 dark:bg-blue-500/20 text-primary-blue dark:text-blue-400 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-700 dark:text-white/80 font-semibold">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="mt-0.5 text-xs text-slate-500 dark:text-white/50">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustBadges = () => {
  const badges = [
    { icon: '🔒', label: 'Bank-Level Security', detail: 'SOC 2 compliant' },
    { icon: '☁️', label: '99.9% Uptime SLA', detail: 'Enterprise-grade' },
    { icon: '🇮🇳', label: 'India-Based Support', detail: 'Real humans, not bots' },
    { icon: '💳', label: 'Try Free, No Card', detail: 'Full access, zero risk' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm"
        >
          <div className="flex items-center gap-2">
            <span>{badge.icon}</span>
            <span className="font-semibold text-slate-700 dark:text-white/80">{badge.label}</span>
          </div>
          {badge.detail && (
            <span className="text-xs text-slate-500 dark:text-white/50">{badge.detail}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function Demos() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', goals: '' });
  const [activeVideo, setActiveVideo] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const videoRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const handleCustomDemoSubmit = useCallback(async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.goals.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || 'Not specified',
          message: `[Demo Request] ${formData.goals.trim()}`,
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', goals: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleWatchVideo = useCallback((product) => {
    if (product.videoUrl) {
      setActiveVideo({
        title: product.title,
        videoUrl: encodeURI(product.videoUrl),
      });
    }
  }, []);

  const closeVideo = useCallback(() => setActiveVideo(null), []);

  // SEO
  const pageTitle = 'Product Demos | Try Our CRM Solutions Free | BuildVerse';
  const pageDescription = 'Try industry-specific CRMs for healthcare, real estate, legal, construction, and agencies. Interactive demos available—full access to all features.';
  const pageUrl = 'https://buildverse.studio/demos';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BuildVerse Product Demos',
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: productCategories.reduce((acc, cat) => acc + cat.products.length, 0),
      itemListElement: productCategories.flatMap((cat, catIndex) =>
        cat.products.map((product, prodIndex) => ({
          '@type': 'ListItem',
          position: catIndex * 10 + prodIndex + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: product.title,
            description: product.description,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser',
            url: product.liveUrl,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.metrics?.rating || '4.8',
              ratingCount: parseInt(product.metrics?.users) || 100,
            },
          },
        }))
      ),
    },
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="CRM demo, free CRM trial, clinic management software, real estate CRM, legal practice management, construction CRM, agency CRM, BuildVerse" />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BuildVerse" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://buildverse.studio/og-demos.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <meta name="robots" content="index, follow" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-primary-dark text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px]">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover video-brightness-80"
              preload="metadata"
            >
              <source src="/reel/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white dark:from-primary-dark/20 dark:via-primary-dark/40 dark:to-primary-dark" />
          </div>

          {/* Content */}
          <div className={`relative z-10 container mx-auto px-4 py-20 sm:py-28 text-center sm:px-6 lg:px-8 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Try Full-Featured Demos — No Credit Card Required
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              <span className="text-slate-900 dark:text-white">See What&apos;s Possible</span>
              <br />
              <span className="bg-gradient-to-r from-primary-blue via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                For Your Industry
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-white/70 leading-relaxed"
            >
              Test-drive production-ready CRMs built for your industry. Full access, no commitment—see exactly how they work for teams like yours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#products"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-blue to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore All Demos
                <FiChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                className="rounded-xl border-2 border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-8 py-4 text-base font-semibold text-slate-700 dark:text-white backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Need Custom Solution?
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <TrustBadges />
          </div>
        </section>

        {/* Stats */}
        <StatsBar />

        {/* Products */}
        <section id="products" className="container mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          {productCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              onWatch={handleWatchVideo}
            />
          ))}
        </section>

        {/* Why Choose Section */}
        <section className="border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
          <div className="container mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Why Teams Switch to BuildVerse
              </h2>
              <p className="text-slate-600 dark:text-white/60 max-w-xl mx-auto">
                Built for results, not just features
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: '🎯', title: 'Industry-Specific', desc: 'Not generic software forced to fit. Built exactly for your workflow.' },
                { icon: '⚡', title: '2-Week Setup', desc: 'Go live fast. No 6-month implementations or IT projects.' },
                { icon: '🔧', title: 'We Customize', desc: 'Need changes? We adapt the system to you, not the reverse.' },
                { icon: '🤝', title: 'Real Support', desc: 'Talk to humans who understand your industry, not chatbots.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="container mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 px-4 py-1.5 mb-4"
              >
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                  Custom Solutions
                </span>
              </motion.span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Don&apos;t See What You Need?
              </h2>
              <p className="text-slate-600 dark:text-white/60">
                Tell us your requirements. We&apos;ll build a custom demo in 48 hours.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Form */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  📝 Request a Custom Demo
                </h3>
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🎉</div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Request Received!</h4>
                    <p className="text-slate-600 dark:text-white/60">We&apos;ll get back to you within 24 hours with your custom demo.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-white/70 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-white/70 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-white/70 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:outline-none"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-white/70 mb-2">
                        What are you trying to solve? *
                      </label>
                      <textarea
                        rows={3}
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        placeholder="Example: We need to track 50+ projects and automate client invoicing..."
                        className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:outline-none"
                      />
                    </div>
                    
                    {submitStatus === 'error' && (
                      <p className="mt-3 text-sm text-red-500">Please fill in all required fields and try again.</p>
                    )}
                    
                    <motion.button
                      type="button"
                      onClick={handleCustomDemoSubmit}
                      disabled={isSubmitting}
                      className="mt-6 w-full rounded-xl bg-gradient-to-r from-primary-blue to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Custom Demo in 48 Hours'}
                    </motion.button>
                    <p className="text-center text-xs text-slate-400 dark:text-white/40 mt-3">
                      ✓ No spam · ✓ Response within 24 hours · ✓ Free consultation
                    </p>
                  </>
                )}
              </motion.div>

              {/* Calendly CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border-2 border-emerald-300 dark:border-emerald-500/30 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 p-6 sm:p-8 shadow-sm relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200/30 dark:bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-500/20 px-3 py-1 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Fastest Option</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    🚀 Skip the Back-and-Forth
                  </h3>
                  <p className="text-slate-600 dark:text-white/70 mb-6 leading-relaxed">
                    Book a <strong>free 20-minute strategy call</strong> and get personalized recommendations for your business. We&apos;ll show you exactly how to solve your challenges.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-white/80">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                      <span>Live walkthrough of relevant solutions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-white/80">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                      <span>Custom recommendations for your workflow</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-white/80">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                      <span>Pricing & timeline estimate on the call</span>
                    </div>
                  </div>

                  <motion.a
                    href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Free Strategy Call
                  </motion.a>
                  
                  <p className="text-center text-xs text-slate-500 dark:text-white/50 mt-3">
                    Pick a time that works · No obligation · Cancel anytime
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{activeVideo.title} — 2 Min Demo</h3>
                <button
                  onClick={closeVideo}
                  className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full rounded-xl bg-black shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white/60 text-sm mb-3">
                  Ready to try it yourself? Get full access to all features.
                </p>
                <a 
                  href="#products" 
                  onClick={closeVideo} 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-blue hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
                >
                  Open Live Demo
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
