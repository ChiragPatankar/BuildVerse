import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiStar, FiMapPin } from 'react-icons/fi'

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-slate-800/50 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/30 rounded-2xl p-6 mb-4 hover:border-primary-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/10">
    {/* Quote Icon */}
    <div className="mb-3">
      <span className="text-3xl text-primary-blue opacity-60 font-serif">&quot;</span>
    </div>

    {/* Rating Stars */}
    <div className="flex items-center space-x-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <FiStar
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>

    {/* Testimonial Content */}
    <blockquote className="text-slate-300 dark:text-gray-300 mb-5 leading-relaxed text-sm">
      {testimonial.content}
    </blockquote>

    {/* Author Info */}
    <div className="flex items-center space-x-3 pt-4 border-t border-slate-700/50 dark:border-slate-600/30">
      <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
        {testimonial.initials}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-white text-sm">
          {testimonial.name}
        </div>
        <div className="text-xs text-slate-400 dark:text-gray-400">
          {testimonial.role}
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center space-x-1 text-xs text-slate-500">
          <FiMapPin className="w-3 h-3" />
          <span>{testimonial.region}</span>
        </div>
        <div className="text-xs text-slate-400">{testimonial.company}</div>
      </div>
    </div>
  </div>
);

const ScrollingColumn = ({ testimonials, duration }) => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <motion.div
        animate={{
          y: ['0%', '-50%'],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
        className="space-y-4"
      >
        {/* Render testimonials twice for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900 dark:from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 dark:from-black to-transparent pointer-events-none z-10" />
    </div>
  );
};

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const allTestimonials = [
    {
      name: 'James A.',
      role: 'CEO',
      company: 'B2B SaaS',
      region: 'US',
      content: 'Launched our support assistant in 6 weeks. First response time dropped from 4 hours to under 30 seconds. The team now focuses on complex tickets instead of answering the same questions 200 times a day.',
      rating: 5,
      initials: 'JA',
    },
    {
      name: 'Emily R.',
      role: 'CTO',
      company: 'Fintech Startup',
      region: 'EU',
      content: 'Clean architecture, clear communication, and they actually hit their timelines. The MVP launched on schedule and handled 10x our expected beta traffic without issues.',
      rating: 5,
      initials: 'ER',
    },
    {
      name: 'Michael C.',
      role: 'Operations Director',
      company: 'Logistics Firm',
      region: 'APAC',
      content: 'We were spending 200+ hours monthly on manual data entry. Now it&apos;s automated. The ROI was clear within the first month.',
      rating: 5,
      initials: 'MC',
    },
    {
      name: 'Sophie W.',
      role: 'VP Product',
      company: 'HealthTech',
      region: 'UK',
      content: 'Chirag and team built our predictive analytics layer in 8 weeks. They were thoughtful about data quality and model monitoring from day one—not an afterthought.',
      rating: 5,
      initials: 'SW',
    },
    {
      name: 'Rajesh K.',
      role: 'Founder',
      company: 'E-commerce Brand',
      region: 'India',
      content: 'The voice agent qualifies inbound leads before routing to sales. Feels natural, integrates with our CRM, and our sales team has much better context when they pick up.',
      rating: 5,
      initials: 'RK',
    },
    {
      name: 'Lisa T.',
      role: 'Head of Innovation',
      company: 'Retail Group',
      region: 'US',
      content: 'Personalized recommendations rolled out incrementally with a safe rollback plan. Engagement improved 35% and we never felt like we were taking unnecessary risks.',
      rating: 5,
      initials: 'LT',
    },
  ]

  // Split testimonials into 3 columns
  const column1 = allTestimonials.filter((_, i) => i % 3 === 0)
  const column2 = allTestimonials.filter((_, i) => i % 3 === 1)
  const column3 = allTestimonials.filter((_, i) => i % 3 === 2)

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-black dark:from-gray-900 dark:to-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wider">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            What Teams Say After Launch
          </h2>
          <p className="text-lg text-slate-300 dark:text-gray-400 max-w-2xl mx-auto">
            From Series A startups to enterprise teams—real feedback from clients 
            we&apos;ve worked with across SaaS, fintech, healthcare, logistics, and retail.
          </p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <ScrollingColumn testimonials={column1} duration={20} />
          <ScrollingColumn testimonials={column2} duration={23} />
          <ScrollingColumn testimonials={column3} duration={21} />
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 dark:bg-white/5 backdrop-blur-sm border border-slate-700/50 dark:border-white/10 rounded-full px-6 py-3">
            <span className="text-slate-300 dark:text-gray-400 text-sm">
              95% client satisfaction • 50+ projects delivered • US, Middle East, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
