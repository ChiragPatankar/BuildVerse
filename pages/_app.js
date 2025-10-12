import '@/styles/globals.css'
import '@/styles/theme.css'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


