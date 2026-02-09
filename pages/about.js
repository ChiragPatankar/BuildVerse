import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiTrendingUp, FiUsers, FiAward, FiZap, FiLinkedin, FiTwitter, FiGithub, FiExternalLink } from 'react-icons/fi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const teamMembers = [
  { 
    id: 'preksha', 
    name: 'Preksha Dewoolkar', 
    role: 'UI Designer | AI Engineer', 
    tagline: 'Clean Interfaces.', 
    image: '/team/preksha.png', 
    linkedin: 'https://lnkd.in/dJtzPjwM', 
    twitter: 'https://lnkd.in/dnMSVZ9B' 
  },
  { 
    id: 'rahul', 
    name: 'Rahul Sutar', 
    role: 'Business Executive', 
    tagline: 'Growth & Strategy', 
    image: '/team/rahul.png', 
    linkedin: 'https://lnkd.in/duyZXUkP', 
    twitter: 'https://x.com/RAHULYSUTAR' 
  },
  { 
    id: 'samruddhi', 
    name: 'Samruddhi Pande', 
    role: 'Social Media Manager', 
    tagline: 'Quiet Strategist.', 
    image: '/team/samruddhi.png', 
    linkedin: 'https://lnkd.in/dPz4GyJd', 
    twitter: 'https://x.com/Samruddhi_0' 
  },
  { 
    id: 'karan', 
    name: 'Karan Patkar', 
    role: 'Graphics Designer', 
    tagline: 'Tech Meets Design', 
    image: '/team/karan.png', 
    linkedin: 'https://lnkd.in/daZBfdzY', 
    twitter: 'https://lnkd.in/d9Cekhxz' 
  },
  { 
    id: 'shatakshi', 
    name: 'Shatakshi Jadhav', 
    role: 'Social Media Associate', 
    tagline: 'Scaling Reach.', 
    image: '/team/shatakshi.jpeg', 
    linkedin: '', 
    twitter: '' 
  },
]

export default function AboutPage() {
  const [imageSrc, setImageSrc] = useState('/chirag.png')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About BuildVerse',
    description:
      'About BuildVerse – AI innovation studio building MVPs, AI voice agents, and automation for businesses. Learn about our founder, vision, and mission.',
    url: 'https://buildverse.studio/about',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildverse.studio/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://buildverse.studio/about' },
      ],
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'BuildVerse',
      url: 'https://buildverse.studio',
      logo: 'https://buildverse.studio/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/buildverse-studio/?viewAsMember=true',
        'https://x.com/_BuildVerse_',
      ],
      founder: {
        '@type': 'Person',
        name: 'Chirag Patankar',
        image: 'https://buildverse.studio/founder.png',
        jobTitle: 'Founder & CEO',
      },
    },
  }

  return (
    <>
      <Head>
        <title>About BuildVerse | Founder, Vision & Mission</title>
        <meta
          name="description"
          content="BuildVerse is an AI innovation studio helping companies ship production-ready MVPs, AI voice agents, and automation. Meet our founder and learn our vision."
        />
        <link rel="canonical" href="https://buildverse.studio/about" />
        <meta property="og:title" content="About BuildVerse | Founder, Vision & Mission" />
        <meta property="og:description" content="AI innovation studio focused on MVPs, AI voice agents, and intelligent automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buildverse.studio/about" />
        <meta property="og:image" content="https://buildverse.studio/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BuildVerse | Founder, Vision & Mission" />
        <meta name="twitter:description" content="AI innovation studio focused on MVPs, AI voice agents, and intelligent automation." />
        <meta name="twitter:image" content="https://buildverse.studio/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-28 md:pt-32 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Hero */}
          <section className="mb-16 md:mb-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 mb-4">About BuildVerse</span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                Building Intelligence, One Solution at a Time
              </h1>
              <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
                We transform ideas into production-ready AI products. From MVPs to voice agents to intelligent automation — we build systems that actually work.
              </p>
            </motion.div>
          </section>

          {/* Stats Grid */}
          <section className="mb-16 md:mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: FiTrendingUp, label: 'Projects Delivered', value: '10+' },
                { icon: FiUsers, label: 'Active Clients', value: '5+' },
                { icon: FiAward, label: 'Client Satisfaction', value: '99%' },
                { icon: FiZap, label: 'Avg. MVP Timeline', value: '<2 weeks' },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={stat.label} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border-2 border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-primary-blue mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Founder Section */}
          <section className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-[380px_1fr] gap-8 max-w-7xl mx-auto">
              {/* Left: Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6 sticky top-32">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 mb-6">
                    <Image
                      src={imageSrc}
                      alt="Founder portrait - Chirag Patankar"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                      priority
                      onError={() => setImageSrc('/logo.png')}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Chirag Patankar</h2>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-1">Founder & CEO</p>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-6">AI Product Builder | Full-Stack Engineer</p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <a href="https://www.linkedin.com/company/buildverse-studio/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-4px)] inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10 rounded-lg transition-colors">
                        <FiLinkedin className="w-4 h-4" /> LinkedIn
                      </a>
                      <a href="https://x.com/_BuildVerse_" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[calc(50%-4px)] inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10 rounded-lg transition-colors">
                        <FiTwitter className="w-4 h-4" /> Twitter
                      </a>
                      <a href="https://github.com/ChiragPatankar" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10 rounded-lg transition-colors">
                        <FiGithub className="w-4 h-4" /> GitHub
                      </a>
                    </div>
                    
                    <div className="pt-3 border-t-2 border-slate-200 dark:border-white/10 space-y-2">
                      <Link href="/founder/Resume%20MS.pdf" target="_blank" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10 rounded-lg transition-colors">
                        <FiExternalLink className="w-4 h-4" /> Download Resume
                      </Link>
                      <a href="mailto:chirag@buildverse.studio" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue border border-primary-blue/20 rounded-lg transition-colors">
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Bio & Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Meet the Founder</h2>
                  <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed text-base">
                    <p>
                      Chirag is a full‑stack engineer and AI product builder who helps companies ship reliable MVPs fast and scale them to production. With expertise spanning from recommendation systems to voice agents, he&apos;s led builds for AI platforms serving thousands of users.
                    </p>
                    <p>
                      Currently pursuing Bachelor&apos;s in AI & Data Science (CGPA: 8.4/10.0), Chirag has already filed a patent for an adaptive learning system and founded BuildVerse to bridge the gap between AI innovation and business impact.
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      His approach: Ship fast, build for scale, and measure everything that matters.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Expertise</h3>
                    <ul className="space-y-2.5 text-slate-700 dark:text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>Production MVPs with 2-week turnaround</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>AI voice agents & conversational systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>Process automation reducing ops costs by 40%+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>RAG systems & hybrid recommendation engines</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Achievements</h3>
                    <ul className="space-y-2.5 text-slate-700 dark:text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>Patent filed: Adaptive learning system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>TFWS scholarship recipient (merit-based)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>BCG X Gen AI certified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-blue mt-1">✓</span>
                        <span>Led Graphics Team for college tech club</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Core Team Grid */}
          <section className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Core Team</h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">Meet the talented individuals making BuildVerse possible</p>
              <div className="h-1.5 w-20 bg-primary-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamMembers.map((member, idx) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-2xl p-5 group hover:border-primary-blue transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-white/5">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      style={{ objectPosition: 'center top' }}
                      unoptimized
                    />
                  </div>
                  <h3 className="font-bold text-xl dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary-blue text-xs font-bold uppercase mb-2 tracking-wider">{member.role}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm italic mb-4">&quot;{member.tagline}&quot;</p>
                  <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-blue transition-colors"
                      >
                        <FiLinkedin size={18}/>
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-blue transition-colors"
                      >
                        <FiTwitter size={18}/>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="mb-16 md:mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 border-2 border-slate-300 dark:border-white/10 bg-gradient-to-br from-primary-blue/15 via-primary-blue/10 to-transparent dark:from-primary-blue/20 dark:via-primary-blue/10 dark:to-transparent"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-blue/20 dark:bg-primary-blue/30 mb-4">
                  <FiZap className="w-6 h-6 text-primary-blue" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Vision</h2>
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                  To become the most trusted partner for businesses adopting AI — delivering practical, production‑ready systems that create measurable value, not just demos.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 border-2 border-slate-300 dark:border-white/10 bg-gradient-to-br from-primary-purple/15 via-primary-purple/10 to-transparent dark:from-primary-purple/20 dark:via-primary-purple/10 dark:to-transparent"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-purple/20 dark:bg-primary-purple/30 mb-4">
                  <FiAward className="w-6 h-6 text-primary-purple" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Mission</h2>
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                  Help founders and teams ship AI products quickly with the right architecture, robust infrastructure, and clean UX — so they can scale confidently and see ROI within weeks.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Core Values</h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">The principles that guide everything we build</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Speed Without Compromise', desc: 'Ship production-grade MVPs in weeks, not months', icon: FiZap },
                { title: 'Built to Scale', desc: 'Architecture that grows with your business', icon: FiTrendingUp },
                { title: 'Transparent Communication', desc: 'Clear timelines, honest feedback, no surprises', icon: FiUsers },
                { title: 'Results-Driven', desc: 'Every feature must deliver measurable business value', icon: FiAward },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-2xl border-2 border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 text-center hover:border-primary-blue hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/10 dark:bg-primary-blue/20 mb-4">
                      <Icon className="w-7 h-7 text-primary-blue" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Our Journey</h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">Milestones that shaped BuildVerse</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-white/10 md:-translate-x-1/2" />
                
                <div className="space-y-8">
                  {[
                    { year: '2024', title: 'BuildVerse Founded', desc: 'Started with a vision to make AI accessible for startups' },
                    { year: '2024', title: 'First Voice Agent', desc: 'Deployed AI voice system handling 1000+ calls/month' },
                    { year: '2024', title: 'Patent Filed', desc: 'Innovation in adaptive learning systems' },
                    { year: '2025', title: 'Scaling Impact', desc: 'Expanding to serve more businesses across industries' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.title} 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative"
                    >
                      <div className={`md:grid md:grid-cols-2 md:gap-8 ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                        {/* Content */}
                        <div className={`pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                          <div className="bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/10 rounded-xl p-6">
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 mb-3">
                              {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                        
                        {/* Dot */}
                        <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-blue border-4 border-slate-100 dark:border-gray-900 md:-translate-x-1/2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-r from-primary-blue to-primary-purple p-10 md:p-16 rounded-3xl text-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h2>
                <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Let&apos;s turn your AI vision into a production-ready product. Schedule a call to discuss your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:chirag@buildverse.studio" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-xl hover:bg-slate-100 hover:scale-105 transition-all shadow-lg"
                  >
                    Start a Project
                  </a>
                  <Link 
                    href="/#portfolio" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border-2 border-white/30 transition-all backdrop-blur-sm"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}


