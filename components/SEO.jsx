// SEO Component for reusable meta tags across pages
import Head from 'next/head'

const SEO = ({
  title = 'BuildVerse - Enterprise AI Solutions',
  description = 'Transform your business with BuildVerse\'s enterprise AI solutions. Expert MVP development, AI voice agents, intelligent automation, and custom AI implementations.',
  keywords = 'AI solutions, MVP development, AI voice agents, business automation, artificial intelligence',
  ogImage = 'https://buildverse.ai/logo.png',
  canonicalUrl = 'https://buildverse.ai',
  publishedTime,
  modifiedTime,
  author = 'BuildVerse AI Studio',
  type = 'website',
}) => {
  const fullTitle = title.includes('BuildVerse') ? title : `${title} | BuildVerse`
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="BuildVerse" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@buildverse" />
      <meta name="twitter:site" content="@buildverse" />
    </Head>
  )
}

export default SEO

