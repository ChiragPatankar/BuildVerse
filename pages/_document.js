import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset & Viewport are handled by Next.js automatically */}
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical font (Inter - most used) */}
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        
        {/* Fonts with optimized loading */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&display=optional" 
          rel="stylesheet" 
        />
        
        {/* Fallback font stack */}
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
          .font-poppins { font-family: 'Poppins', system-ui, sans-serif; }
          .font-orbitron { font-family: 'Orbitron', system-ui, sans-serif; }
        ` }} />
        
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#1E90FF" />
        <meta name="msapplication-TileColor" content="#1E90FF" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Author & Copyright */}
        <meta name="author" content="BuildVerse AI Studio" />
        <meta name="copyright" content="BuildVerse" />
        
        {/* Language */}
        <meta httpEquiv="content-language" content="en-US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


