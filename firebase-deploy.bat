@echo off
echo 🔥 Preparing Firebase deployment...

REM Create a simple static build
echo Creating static build configuration...

REM Update next.config.js for static export
echo /** @type {import('next').NextConfig} */ > next.config.temp.js
echo const nextConfig = { >> next.config.temp.js
echo   output: 'export', >> next.config.temp.js
echo   trailingSlash: true, >> next.config.temp.js
echo   images: { >> next.config.temp.js
echo     domains: ['localhost', 'i.ibb.co', 'i.ibb.co.com', 'imgbb.com'], >> next.config.temp.js
echo     unoptimized: true >> next.config.temp.js
echo   }, >> next.config.temp.js
echo   distDir: 'out' >> next.config.temp.js
echo } >> next.config.temp.js
echo module.exports = nextConfig >> next.config.temp.js

REM Backup original config
copy next.config.js next.config.backup.js

REM Use temp config
copy next.config.temp.js next.config.js

REM Build without API routes (will show errors but create static files)
echo 🏗️ Building static files...
npm run build

REM Deploy to Firebase
echo 🚀 Deploying to Firebase...
firebase deploy

REM Restore original config
copy next.config.backup.js next.config.js
del next.config.temp.js
del next.config.backup.js

echo ✅ Deployment complete!
pause