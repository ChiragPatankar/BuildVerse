import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DeliveredResults from '@/components/DeliveredResults'
import WhyBuildVerse from '@/components/WhyBuildVerse'
import HowWeWork from '@/components/HowWeWork'
import Services from '@/components/Services'
import WhyCompaniesChoose from '@/components/WhyCompaniesChoose'
import Portfolio from '@/components/Portfolio'
import FoundersNote from '@/components/FoundersNote'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import GlobalCredibility from '@/components/GlobalCredibility'
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
    "description": "Global delivery team shipping production-ready AI agents, MVPs, CRMs, and dashboards in 2–8 weeks. Enterprise standards for US, UK & EU companies.",
    "email": "chirag@buildverse.studio",
    "telephone": "+91-9322529729",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/buildverse-studio/?viewAsMember=true",
      "https://x.com/_BuildVerse_"
    ],
    "foundingDate": "2019",
    "slogan": "AI + Software Solutions Built in Weeks, Not Months",
    "knowsAbout": [
      "MVP Development",
      "AI Voice Agents",
      "Workflow Automation",
      "Business Analytics",
      "CRM Development",
      "Conversational AI",
      "Natural Language Processing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Go from idea to working product in 4–8 weeks with AI-first architecture and rapid iteration cycles",
            "serviceType": "Product Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents",
            "description": "Deploy intelligent voice assistants that handle calls, qualify leads, and book appointments 24/7",
            "serviceType": "Voice AI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "Replace manual tasks with automated workflows that save 200+ hours monthly",
            "serviceType": "Business Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics & Dashboards",
            "description": "Custom dashboards and predictive models that turn scattered data into clear insights",
            "serviceType": "Business Intelligence"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "BuildVerse"
    }
  }

  return (
    <>
          <Head>
            {/* Resource Hints for Performance */}
            <link rel="preconnect" href="https://assets.apollo.io" />
            <link rel="dns-prefetch" href="https://assets.apollo.io" />
            
            {/* Primary Meta Tags */}
            <title>AI + Software Solutions | Build in Weeks | BuildVerse</title>
        <meta 
          name="title" 
          content="AI + Software Solutions | Build in Weeks | BuildVerse" 
        />
        <meta 
          name="description" 
          content="Production-ready AI agents, custom MVPs, CRMs & dashboards for US, UK & EU. Delivered in 2–8 weeks. Enterprise standards. Book strategy call." 
        />
        <meta 
          name="keywords" 
          content="AI studio, voice agents, B2B SaaS, workflow automation, MVP development, AI voice assistants, conversational AI, business automation, rapid prototyping, lead qualification" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://buildverse.studio/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buildverse.studio/" />
        <meta property="og:site_name" content="BuildVerse" />
        <meta property="og:title" content="AI + Software Solutions | Build in Weeks | BuildVerse" />
        <meta property="og:description" content="Production-ready AI agents, custom MVPs, CRMs & dashboards for US, UK & EU. Delivered in 2–8 weeks. Enterprise standards." />
        <meta property="og:image" content="https://buildverse.studio/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BuildVerse AI Studio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://buildverse.studio/" />
        <meta name="twitter:title" content="AI + Software Solutions | Build in Weeks | BuildVerse" />
        <meta name="twitter:description" content="Production-ready AI agents, custom MVPs, CRMs & dashboards for US, UK & EU. Delivered in 2–8 weeks. Enterprise standards." />
        <meta name="twitter:image" content="https://buildverse.studio/logo.png" />
        <meta name="twitter:image:alt" content="BuildVerse AI Studio" />
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
        <DeliveredResults />
        <WhyBuildVerse />
        <HowWeWork />
        <Services />
        <WhyCompaniesChoose />
        <Portfolio />
        <FoundersNote />
        <Testimonials />
        <Contact />
        <GlobalCredibility />
        <Footer />
      </main>
    </>
  )
}
