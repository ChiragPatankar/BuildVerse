import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiMail, href: 'mailto:chirag@buildverse.studio', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/919322529729', label: 'WhatsApp' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/company/buildverse-studio/?viewAsMember=true', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/_BuildVerse_', label: 'Twitter' },
  ]

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'MVP Development', href: '#services' },
        { name: 'AI Voice Agents', href: '#services' },
        { name: 'Automation Tools', href: '#services' },
        { name: 'Business AI Tools', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black border-t border-slate-300 dark:border-white/10">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="BuildVerse Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                BuildVerse
              </span>
            </div>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Turning ideas into intelligent realities through cutting-edge AI innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-blue" />
                </motion.a>
              ))}
            </div>
            
            {/* Product Hunt Badge */}
            <div className="pt-4">
              <a 
                href="https://www.producthunt.com/products/buildverse?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-buildverse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1031909&theme=neutral&t=1762063929034" 
                  alt="BuildVerse - AI Studio for Businesses — Automate. Optimize. Build. | Product Hunt" 
                  className="ph-badge"
                  width="250" 
                  height="54" 
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-slate-900 dark:text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-slate-600 dark:text-gray-400 hover:text-primary-blue transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-slate-300 dark:border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} BuildVerse. All rights reserved.
            </p>
            <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm text-center md:text-right">
              Made with <span className="text-red-500">❤</span> by BuildVerse AI Studio
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-blue opacity-50" />
    </footer>
  )
}

export default Footer

