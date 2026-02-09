import '@/styles/globals.css'
import '@/styles/theme.css'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import StickyCTA from '@/components/StickyCTA'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Defer non-critical tracking script to improve TTI
    const loadTrackingScript = () => {
      const scriptId = 'apollo-tracker-script'

      if (document.getElementById(scriptId)) return

      const cacheBuster = Math.random().toString(36).substring(7)
      const script = document.createElement('script')
      script.id = scriptId
      script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${cacheBuster}`
      script.async = true
      script.defer = true
      script.onload = () => {
        if (window.trackingFunctions?.onLoad) {
          window.trackingFunctions.onLoad({ appId: '690ccedc13b1680021e19ced' })
        }
      }

      document.head.appendChild(script)
    }

    // Load after page is interactive (improves TTI)
    if (document.readyState === 'complete') {
      setTimeout(loadTrackingScript, 2000)
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadTrackingScript, 2000)
      })
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Component {...pageProps} />
      <StickyCTA />
    </ThemeProvider>
  )
}


