/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost', 'i.ibb.co', 'i.ibb.co.com', 'imgbb.com'],
    unoptimized: true
  },
  distDir: 'out',
  // Exclude API routes for static export
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig