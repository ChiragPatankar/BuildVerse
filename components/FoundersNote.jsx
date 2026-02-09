import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { FiLinkedin, FiCalendar } from 'react-icons/fi'

const FoundersNote = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [imageSrc, setImageSrc] = useState('/founder2.png')

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
    hidden: { y: 20, opacity: 0 },
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
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-black dark:to-gray-900 transition-colors duration-300"
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary-blue/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-primary-purple/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border-2 border-primary-blue/20 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Founder Photo */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                  <Image
                    src={imageSrc}
                    alt="Chirag Patankar - Founder of BuildVerse"
                    fill
                    className="object-cover object-top"
                    onError={() => setImageSrc('/logo.png')}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-4">
                <motion.div variants={itemVariants}>
                  <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
                    Founder&apos;s Note
                  </span>
                </motion.div>

                <motion.blockquote 
                  variants={itemVariants}
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-gray-300 leading-relaxed italic"
                >
                  &quot;I started BuildVerse because I kept seeing the same problem: teams with great ideas stuck 
                  waiting months for development, or burned by agencies that overpromised. We do things differently—
                  small team, fast cycles, and I&apos;m personally involved in every early-stage project.&quot;
                </motion.blockquote>

                <motion.div variants={itemVariants} className="pt-4 border-t border-slate-300 dark:border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-lg">Chirag Patankar</div>
                      <div className="text-sm text-slate-600 dark:text-gray-400">Founder & Lead Engineer</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://www.linkedin.com/in/chirag-patankar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
                      >
                        <FiLinkedin className="w-5 h-5 text-slate-700 dark:text-white" />
                      </a>
                      <a
                        href="https://cal.com/chirag-9yxbl2/20-min-strategy-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-blue hover:bg-blue-600 text-white font-semibold rounded-lg text-sm transition-colors"
                      >
                        <FiCalendar className="w-4 h-4" />
                        <span>Book a Call</span>
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.p 
                  variants={itemVariants}
                  className="text-sm text-slate-600 dark:text-gray-400 mt-4"
                >
                  On every call, we can show live demos of CRMs, voice agents, and automation tools we&apos;ve 
                  built—real products, not slide decks.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FoundersNote

