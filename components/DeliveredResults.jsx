import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FiMessageSquare, FiTrendingUp, FiClock, FiBarChart2 } from 'react-icons/fi'

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

const MetricCard = ({ icon: Icon, value, valueNum, suffix, label, description, delay, isInView }) => {
  const [shouldStart, setShouldStart] = useState(false);
  const count = useCountUp(valueNum, 2000, shouldStart);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldStart(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="relative group"
    >
      <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 hover:border-primary-blue/50 dark:hover:border-primary-blue/30 transition-all duration-300 h-full">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue/20 transition-all">
            <Icon className="w-6 h-6 text-primary-blue" />
          </div>
          <div className="flex-1">
            <motion.div 
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1"
              animate={shouldStart ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {valueNum ? `${count}${suffix}` : value}
            </motion.div>
            <div className="text-sm font-semibold text-primary-blue mb-1">{label}</div>
            <div className="text-xs text-slate-600 dark:text-gray-400">{description}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DeliveredResults = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const metrics = [
    {
      icon: FiMessageSquare,
      valueNum: 10000,
      suffix: '+',
      value: '10,000+',
      label: 'Questions Handled Daily',
      description: '95% CSAT score, 60% support cost reduction for a US SaaS company',
    },
    {
      icon: FiBarChart2,
      valueNum: 92,
      suffix: '%',
      value: '92%',
      label: 'Prediction Accuracy',
      description: 'Across 1M+ data points for retail inventory forecasting',
    },
    {
      icon: FiTrendingUp,
      valueNum: 45,
      suffix: '%',
      value: '+45%',
      label: 'Lead-to-Meeting Conversion',
      description: 'Voice agent qualifying and booking for a sales team',
    },
    {
      icon: FiClock,
      valueNum: 200,
      suffix: '+',
      value: '200+',
      label: 'Hours Saved Monthly',
      description: 'Workflow automation replacing manual data entry',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-black transition-colors duration-300"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
            What We&apos;ve Delivered
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Real Numbers From Real Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              {...metric}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveredResults






