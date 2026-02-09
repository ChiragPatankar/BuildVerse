import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FiTrendingUp, FiUsers, FiAward, FiZap, 
  FiLinkedin, FiTwitter, FiGithub, FiExternalLink 
} from 'react-icons/fi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const teamMembers = [
  { 
    id: 'rahul', 
    name: 'Rahul Sutar', 
    role: 'Business Executive', 
    tagline: 'Growth & Strategy', 
    image: '/team/Rahul_Sutar.png', 
    linkedin: 'https://lnkd.in/duyZXUkP', 
    twitter: 'https://x.com/RAHULYSUTAR' 
  },
  { 
    id: 'preksha', 
    name: 'Preksha Dewoolkar', 
    role: 'UI Designer | AI Engineer', 
    tagline: 'Clean Interfaces.', 
    image: '/team/Preksha_Dewoolkar.png', 
    linkedin: 'https://lnkd.in/dJtzPjwM', 
    twitter: 'https://lnkd.in/dnMSVZ9B' 
  },
  { 
    id: 'samruddhi', 
    name: 'Samruddhi Pande', 
    role: 'Social Media Manager', 
    tagline: 'Quiet Strategist.', 
    image: '/team/Samruddhi_Pande.png', 
    linkedin: 'https://lnkd.in/dPz4GyJd', 
    twitter: 'https://x.com/Samruddhi_0' 
  },
  { 
    id: 'karan', 
    name: 'Karan Patkar', 
    role: 'Graphics Designer', 
    tagline: 'Tech Meets Design', 
    image: '/team/graphic-designer.png', 
    linkedin: 'https://lnkd.in/daZBfdzY', 
    twitter: 'https://lnkd.in/d9Cekhxz' 
  },
  { 
    id: 'shatakshi', 
    name: 'Shatakshi Jadhav', 
    role: 'Social Media Associate', 
    tagline: 'Scaling Reach.', 
    image: '/logo.png', 
    linkedin: '', 
    twitter: '' 
  },
]

export default function AboutPage() {
  const [imageSrc, setImageSrc] = useState('/founder.png')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About BuildVerse',
    description: 'AI innovation studio building MVPs and automation. Meet our founder and core team.',
    url: 'https://buildverse.studio/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'BuildVerse',
      founder: {
        '@type': 'Person',
        name: 'Chirag Patankar',
      },
    },
  }

  return (
    <>
      <Head>
        <title>About BuildVerse | Meet the Team</title>
        <meta name="description" content="Meet the team behind BuildVerse - an AI innovation studio." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-28 md:pt-32 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Hero Section */}
          <section className="mb-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                Building Intelligence
              </h1>
              <p className="text-slate-600 dark:text-gray-400 text-xl max-w-3xl mx-auto">
                We transform ideas into production-ready AI products. Meet the minds making it happen.
              </p>
            </motion.div>
          </section>

          {/* Founder Section (Chirag) */}
          <section className="mb-32 grid lg:grid-cols-[400px_1fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white dark:bg-white/5 p-4 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image 
                    src={imageSrc} 
                    alt="Chirag Patankar" 
                    fill 
                    className="object-cover"
                    onError={() => setImageSrc('/logo.png')}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-primary-blue font-bold uppercase tracking-widest text-sm">Founder & CEO</span>
              <h2 className="text-5xl font-black dark:text-white">Chirag Patankar</h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
                Chirag is a full‑stack engineer and AI product builder who helps companies ship reliable MVPs fast. He founded BuildVerse to bridge the gap between AI innovation and business impact.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/ChiragPatankar" className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md hover:text-primary-blue transition-all dark:text-white"><FiGithub size={24}/></a>
                <a href="https://www.linkedin.com/company/buildverse-studio/" className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md hover:text-primary-blue transition-all dark:text-white"><FiLinkedin size={24}/></a>
                <Link href="/founder/Resume MS.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-105 transition-transform">
                  <FiExternalLink /> Resume
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Core Team Grid */}
          <section className="pb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Core Team</h2>
              <div className="h-1.5 w-20 bg-primary-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-white/5 p-5 rounded-3xl border border-slate-200 dark:border-white/10 group hover:border-primary-blue transition-all hover:shadow-2xl"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <h3 className="font-bold text-xl dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary-blue text-xs font-bold uppercase mb-3 tracking-wider">{member.role}</p>
                  <p className="text-slate-500 text-sm italic mb-4">&quot;{member.tagline}&quot;</p>
                  <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
                    {member.linkedin && <a href={member.linkedin} className="text-slate-400 hover:text-primary-blue transition-colors"><FiLinkedin size={18}/></a>}
                    {member.twitter && <a href={member.twitter} className="text-slate-400 hover:text-primary-blue transition-colors"><FiTwitter size={18}/></a>}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision/Mission (Combined from your code) */}
          <section className="mb-32 grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-primary-blue/5 border border-primary-blue/10">
              <FiZap className="text-primary-blue mb-4" size={32} />
              <h3 className="text-2xl font-bold dark:text-white mb-3">Our Vision</h3>
              <p className="text-slate-600 dark:text-gray-400">To be the most trusted partner for businesses adopting AI—delivering practical, production‑ready systems that create measurable value.</p>
            </div>
            <div className="p-10 rounded-3xl bg-purple-500/5 border border-purple-500/10">
              <FiAward className="text-purple-500 mb-4" size={32} />
              <h3 className="text-2xl font-bold dark:text-white mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-gray-400">Help founders ship AI products quickly with the right architecture and clean UX, ensuring ROI within weeks.</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}