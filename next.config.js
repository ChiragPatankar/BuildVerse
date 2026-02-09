/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static Export for Cloudflare Pages (comment out for local dev with API routes)
  // For production on Cloudflare, re-enable this and use Cloudflare Functions instead
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  
  // Image Optimization (unoptimized for static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slash disabled to prevent redirects (improves LCP)
  trailingSlash: false,
  
  // Performance Optimizations
  swcMinify: true,
  compress: true,
  
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
