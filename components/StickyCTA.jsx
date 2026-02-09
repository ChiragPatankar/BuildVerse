import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiCalendar, FiX } from 'react-icons/fi'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 100vh)
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      
      if (scrollPosition > heroHeight * 0.8 && !isDismissed) {
        setIsVisible(true)
      } else if (scrollPosition < heroHeight * 0.5) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-8 right-4 z-50 flex items-center space-x-2"
        >
          <motion.a
            href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-5 py-3 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-primary-blue/30 transition-colors"
          >
            <FiCalendar className="w-4 h-4" />
            <span className="hidden sm:inline">Talk to an Expert</span>
            <span className="sm:hidden">Book Call</span>
          </motion.a>
          
          <motion.button
            onClick={handleDismiss}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded-full shadow-lg transition-colors"
            aria-label="Dismiss"
          >
            <FiX className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyCTA

