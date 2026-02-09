import { motion, useInView } from 'framer-motion'
import { FiArrowRight, FiCalendar, FiPlay } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

// Counter animation hook
const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

// StatCard component with counting animation
const StatCard = ({ targetValue, suffix, label, fullLabel, sublabel, startCounting, delay }) => {
  const [shouldStart, setShouldStart] = useState(false);
  const count = useCountUp(targetValue, 2000, shouldStart);

  useEffect(() => {
    if (startCounting) {
      const timer = setTimeout(() => setShouldStart(true), delay);
      return () => clearTimeout(timer);
    }
  }, [startCounting, delay]);

  return (
    <motion.div 
      className="text-center px-2 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={startCounting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <motion.div 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2"
        animate={startCounting ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, delay: (delay / 1000) + 0.3 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-gray-300 font-medium sm:hidden">{label}</div>
      <div className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-gray-300 font-medium hidden sm:block">{fullLabel}</div>
      <div className="text-xs text-slate-500 dark:text-gray-500 mt-1 hidden md:block">{sublabel}</div>
    </motion.div>
  );
};

const Hero = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const trustedByClients = [
    { type: 'Series A SaaS', region: 'US' },
    { type: 'E-commerce Brand', region: 'India' },
    { type: 'Fintech Startup', region: 'EU' },
    { type: 'HealthTech Platform', region: 'UK' },
    { type: 'Logistics Enterprise', region: 'APAC' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900 pt-16 md:pt-20 lg:pt-24 transition-colors duration-300"
    >
      {/* Sophisticated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      {/* Animated Gradient Mesh Overlay - Deferred for performance */}
      <div className="absolute inset-0 content-visibility-auto">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/20 dark:bg-primary-blue/10 rounded-full filter blur-[128px] will-change-transform"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-purple/20 dark:bg-primary-purple/10 rounded-full filter blur-[128px] will-change-transform"
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full filter blur-[100px] will-change-transform"
          initial={{ x: -50, y: -30, scale: 1 }}
          animate={{ 
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-blue/10 dark:from-primary-blue/5 via-transparent to-transparent" />

      {/* Floating Dots - Optimized: Reduced count and deferred animation */}
      <div className="absolute inset-0 overflow-hidden content-visibility-auto">
        {[...Array(12)].map((_, i) => {
          // Pre-calculate positions to avoid runtime Math.random calls
          const positions = [
            { left: '10%', top: '20%' }, { left: '25%', top: '15%' }, { left: '40%', top: '30%' },
            { left: '55%', top: '25%' }, { left: '70%', top: '35%' }, { left: '85%', top: '20%' },
            { left: '15%', top: '60%' }, { left: '30%', top: '70%' }, { left: '50%', top: '65%' },
            { left: '65%', top: '75%' }, { left: '80%', top: '60%' }, { left: '90%', top: '80%' },
          ];
          const pos = positions[i] || { left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%` };
          
          return (
            <motion.div
              key={i}
              className="floating-dot bg-primary-blue/20 dark:bg-primary-blue/10"
              style={pos}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -30, 0],
                x: [0, (i % 3 - 1) * 10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-8 sm:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto w-full overflow-hidden"
        >
          <div className="text-center space-y-6 sm:space-y-8 w-full">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 px-3 py-2 sm:px-4 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium">Accepting new projects for Q1 2025</span>
              </div>
            </motion.div>

            {/* Main Heading - Optimized for LCP */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="block text-slate-900 dark:text-white leading-tight sm:leading-[1.1]">
                MVP Development & AI Voice Agents
              </span>
              <span className="block mt-2 bg-gradient-to-r from-primary-blue via-blue-400 to-primary-purple bg-clip-text text-transparent leading-tight sm:leading-[1.1] bg-gradient-animated">
                for B2B SaaS
              </span>
              <span className="block mt-2 text-slate-900 dark:text-white leading-tight sm:leading-[1.1]">
                in 4–8 Weeks
              </span>
            </h1>

            {/* ICP Descriptor */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-primary-blue font-semibold"
            >
              AI Studio for B2B SaaS, tech-first SMBs, and mid-market enterprises
            </motion.p>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We&apos;re a founder-led AI studio that ships real products. From intelligent voice agents 
              that handle 10,000+ calls daily to workflow automations saving 200+ hours monthly—we 
              build what your team needs and get out of your way.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2 sm:pt-4 w-full max-w-md mx-auto sm:max-w-none"
            >
              <motion.a
                href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-primary-blue/20 text-sm sm:text-base"
              >
                <FiCalendar className="w-4 h-4" />
                <span>Book a 20-min Strategy Call</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
              </motion.a>

              <Link href="/demos" legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer px-6 py-3 sm:px-8 sm:py-4 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base text-center flex items-center justify-center space-x-2"
                >
                  <FiPlay className="w-4 h-4" />
                  <span>Watch Demos</span>
                </motion.a>
              </Link>
            </motion.div>

            {/* CTA Subline */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-slate-500 dark:text-gray-500"
            >
              Get 2–3 concrete AI ideas tailored to your business within 48 hours
            </motion.p>

            {/* Trusted By Section */}
            <motion.div
              variants={itemVariants}
              className="pt-8 sm:pt-12 md:pt-16"
            >
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">Trusted by teams across</p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
                {trustedByClients.map((client, index) => (
                  <motion.div 
                    key={index} 
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                  >
                    <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-gray-300">{client.type}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-gray-500">{client.region}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              variants={itemVariants}
              className="pt-8 sm:pt-12 md:pt-16 border-t border-slate-300 dark:border-white/10 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                <StatCard 
                  targetValue={100} 
                  suffix="+" 
                  label="Projects" 
                  fullLabel="Projects Shipped" 
                  sublabel="In 4–8 weeks avg"
                  startCounting={isStatsInView}
                  delay={0}
                />
                <StatCard 
                  targetValue={50} 
                  suffix="+" 
                  label="Clients" 
                  fullLabel="Happy Clients" 
                  sublabel="US, Middle East, India"
                  startCounting={isStatsInView}
                  delay={200}
                />
                <StatCard 
                  targetValue={95} 
                  suffix="%" 
                  label="CSAT" 
                  fullLabel="Satisfaction Rate" 
                  sublabel="Across all projects"
                  startCounting={isStatsInView}
                  delay={400}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
