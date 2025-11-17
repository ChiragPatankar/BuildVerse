/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static Export for Cloudflare Pages
  // TEMPORARILY DISABLED for local voice agent development - uncomment before deploying
  // output: 'export',
  
  // Image Optimization (unoptimized for static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better static hosting
  trailingSlash: true,
  
  // Performance Optimizations
  swcMinify: true,
  compress: true,
  
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
