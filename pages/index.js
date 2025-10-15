import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
      "name": "BuildVerse",
      "alternateName": "BuildVerse AI Studio",
      "url": "https://buildverse.studio",
      "logo": "https://buildverse.studio/logo.png",
      "description": "Enterprise AI solutions provider specializing in MVP development, AI voice agents, intelligent automation, and custom AI implementations for businesses.",
      "email": "chirag@buildverse.studio",
      "telephone": "+91-9322529729",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/buildverse-studio/about/?viewAsMember=true",
        "https://x.com/_BuildVerse_"
      ],
    "foundingDate": "2019",
    "slogan": "Turning Ideas Into Intelligent Realities",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "MVP Development",
      "AI Voice Agents",
      "Business Automation",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning",
      "AI Consulting"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development & Rapid Prototyping",
            "description": "Transform your vision into market-ready products with AI-driven architecture and rapid prototyping",
            "serviceType": "AI Product Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice & Conversational Agents",
            "description": "Deploy intelligent conversational AI that automates customer interactions with natural language",
            "serviceType": "AI Voice Technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Automation & Workflows",
            "description": "Streamline operations with AI-powered automation that learns and adapts to your business processes",
            "serviceType": "Business Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Solutions & Consulting",
            "description": "Tailored AI implementations designed to solve your unique business challenges",
            "serviceType": "AI Consulting"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "brand": {
      "@type": "Brand",
      "name": "BuildVerse"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>BuildVerse - Enterprise AI Solutions | MVP Development, AI Voice Agents & Automation</title>
        <meta 
          name="title" 
          content="BuildVerse - Enterprise AI Solutions | MVP Development, AI Voice Agents & Automation" 
        />
        <meta 
          name="description" 
          content="Transform your business with BuildVerse's enterprise AI solutions. Expert MVP development, AI voice agents, intelligent automation, and custom AI implementations. Trusted by 50+ enterprise clients worldwide." 
        />
        <meta 
          name="keywords" 
          content="AI solutions, MVP development, AI voice agents, business automation, artificial intelligence consulting, machine learning, NLP, computer vision, enterprise AI, AI chatbots, conversational AI, intelligent automation, AI implementation, custom AI development, AI strategy, digital transformation" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
          {/* Canonical URL */}
          <link rel="canonical" href="https://buildverse.studio/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
          <meta property="og:url" content="https://buildverse.studio/" />
          <meta property="og:site_name" content="BuildVerse" />
          <meta property="og:title" content="BuildVerse - Enterprise AI Solutions | MVP Development & AI Voice Agents" />
          <meta property="og:description" content="Transform your business with enterprise AI solutions. Expert MVP development, AI voice agents, and intelligent automation. Trusted by 50+ enterprise clients." />
          <meta property="og:image" content="https://buildverse.studio/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BuildVerse AI Innovation Studio Logo" />
        <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://buildverse.studio/" />
          <meta name="twitter:title" content="BuildVerse - Enterprise AI Solutions | MVP Development & AI Voice Agents" />
          <meta name="twitter:description" content="Transform your business with enterprise AI solutions. Expert MVP development, AI voice agents, and intelligent automation." />
          <meta name="twitter:image" content="https://buildverse.studio/logo.png" />
          <meta name="twitter:image:alt" content="BuildVerse AI Innovation Studio Logo" />
          <meta name="twitter:creator" content="@_BuildVerse_" />
          <meta name="twitter:site" content="@_BuildVerse_" />

        {/* Additional SEO Tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-primary-dark">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  )
}


