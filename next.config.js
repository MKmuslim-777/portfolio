/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'i.ibb.co', 'i.ibb.co.com', 'imgbb.com'],
    unoptimized: true
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB,
    VITE_IMAGE_HOST_KEY: process.env.VITE_IMAGE_HOST_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  // Enable experimental features for better build performance
  experimental: {
    serverComponentsExternalPackages: ['mongodb']
  }
}

module.exports = nextConfig