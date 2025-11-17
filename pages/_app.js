import '@/styles/globals.css'
import '@/styles/theme.css'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import VoiceAgent from '@/components/VoiceAgent'

export default function App({ Component, pageProps }) {
  useEffect(() => {
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

    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Component {...pageProps} />
      <VoiceAgent />
    </ThemeProvider>
  )
}


