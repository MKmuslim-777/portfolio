const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔥 Building for Firebase deployment...');

// Create a temporary next.config.js for Firebase
const firebaseConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost', 'i.ibb.co', 'i.ibb.co.com', 'imgbb.com'],
    unoptimized: true
  },
  distDir: 'out'
}

module.exports = nextConfig`;

// Backup original config
const originalConfig = fs.readFileSync('next.config.js', 'utf8');
fs.writeFileSync('next.config.backup.js', originalConfig);

// Write Firebase config
fs.writeFileSync('next.config.js', firebaseConfig);

// Create a temporary app directory without API routes
const appDir = path.join(__dirname, 'app');
const tempAppDir = path.join(__dirname, 'app-temp');

// Copy app directory structure without API routes
function copyDirSync(src, dest, excludeApi = false) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    // Skip API directory
    if (excludeApi && entry.name === 'api') {
      continue;
    }
    
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  // Create temp app without API routes
  copyDirSync(appDir, tempAppDir, true);
  
  // Temporarily rename directories
  fs.renameSync(appDir, path.join(__dirname, 'app-original'));
  fs.renameSync(tempAppDir, appDir);
  
  console.log('🏗️ Building static export...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build complete! Ready for Firebase deployment.');
  console.log('📁 Static files are in the "out" directory');
  console.log('🚀 Run: firebase deploy');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
} finally {
  // Restore original structure
  if (fs.existsSync(path.join(__dirname, 'app-original'))) {
    if (fs.existsSync(appDir)) {
      fs.rmSync(appDir, { recursive: true, force: true });
    }
    fs.renameSync(path.join(__dirname, 'app-original'), appDir);
  }
  
  // Restore original config
  if (fs.existsSync('next.config.backup.js')) {
    fs.renameSync('next.config.backup.js', 'next.config.js');
  }
  
  console.log('🔄 Original structure restored');
}