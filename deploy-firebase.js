const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔥 Preparing Firebase deployment...');

// Backup API directory
const apiDir = path.join(__dirname, 'app', 'api');
const apiBackup = path.join(__dirname, 'app', 'api-backup');

if (fs.existsSync(apiDir)) {
  console.log('📦 Backing up API routes...');
  fs.renameSync(apiDir, apiBackup);
}

// Update next.config.js for static export
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost', 'i.ibb.co', 'i.ibb.co.com', 'imgbb.com'],
    unoptimized: true
  }
}

module.exports = nextConfig`;

fs.writeFileSync('next.config.js', nextConfig);

try {
  console.log('🏗️ Building for static export...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('🚀 Deploying to Firebase...');
  execSync('firebase deploy', { stdio: 'inherit' });
  
  console.log('✅ Firebase deployment complete!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
} finally {
  // Restore API directory
  if (fs.existsSync(apiBackup)) {
    console.log('🔄 Restoring API routes...');
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true });
    }
    fs.renameSync(apiBackup, apiDir);
  }
  
  // Restore original next.config.js
  const originalConfig = `/** @type {import('next').NextConfig} */
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
  experimental: {
    serverComponentsExternalPackages: ['mongodb']
  }
}

module.exports = nextConfig`;
  
  fs.writeFileSync('next.config.js', originalConfig);
  console.log('🔄 Configuration restored');
}