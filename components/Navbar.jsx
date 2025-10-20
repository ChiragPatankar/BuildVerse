import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Services', href: '/#services', type: 'route' },
    { name: 'Portfolio', href: '/#portfolio', type: 'route' },
    { name: 'Contact', href: '/#contact', type: 'route' },
  ]

  const handleNavigation = (e, item) => {
    e.preventDefault()
    setIsOpen(false)
    
    if (item.type === 'route') {
      if (item.href.includes('#')) {
        // Handle hash links (like /#services)
        const [path, hash] = item.href.split('#')
        if (router.pathname === path || (path === '/' && router.pathname === '/')) {
          // We're on the same page, just scroll to section
          const element = document.querySelector(`#${hash}`)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        } else {
          // Navigate to different page with hash
          router.push(item.href)
        }
      } else {
        // Regular route navigation
        router.push(item.href)
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10' 
          : 'bg-white/40 dark:bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/">
            <motion.a
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
            <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="BuildVerse Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
              <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                BuildVerse
              </span>
            </motion.a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium relative group text-sm"
                  whileHover={{ y: -1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-200" />
                </motion.a>
              ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {mounted && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 md:p-2.5 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 transition-all duration-200 border border-slate-300 dark:border-white/10 relative overflow-hidden"
                  aria-label="Toggle theme"
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiSun className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMoon className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Theme Toggle Toast */}
                <AnimatePresence>
                  {showToast && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      className="fixed top-24 right-4 z-50 px-4 py-2 rounded-lg bg-primary-blue text-white text-sm font-medium shadow-lg"
                    >
                      {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-5 h-5 text-slate-700 dark:text-gray-400" />
              ) : (
                <FiMenu className="w-5 h-5 text-slate-700 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-white/10"
          >
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className="block px-4 py-3 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar

