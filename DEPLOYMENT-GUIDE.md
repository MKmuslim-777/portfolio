# 🚀 Deployment Guide

## Two Deployment Options

### Option 1: Firebase Hosting (Static Portfolio Only)
**Best for**: Portfolio showcase without backend functionality

### Option 2: Vercel (Full Next.js with API Routes)
**Best for**: Complete application with MongoDB and authentication

---

## 🔥 Option 1: Firebase Hosting Deployment

### Prerequisites
```bash
npm install -g firebase-tools
firebase login
```

### Steps

1. **Build for Static Export**
```bash
npm run build
```

2. **Deploy to Firebase**
```bash
firebase deploy
```

### What Works on Firebase:
- ✅ Portfolio sections (Hero, About, Skills, Projects, Contact)
- ✅ Responsive design and animations
- ✅ Theme switching
- ✅ Mobile navigation
- ✅ All static functionality

### What Doesn't Work on Firebase:
- ❌ API routes (authentication, project management)
- ❌ MongoDB integration
- ❌ Dashboard functionality
- ❌ User registration/login

---

## ⚡ Option 2: Vercel Deployment (Recommended)

### Prerequisites
- Vercel account (free)
- GitHub repository

### Steps

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables:
  - `MONGODB_URI`: mongodb+srv://mkportfolio:NkEeR87RfG8qNY2p@cluster0.tnbzfze.mongodb.net/?appName=Cluster0
  - `MONGODB_DB`: mkPortfolio
  - `VITE_IMAGE_HOST_KEY`: 64a13558340e14661b1c2b3c28071e79
  - `JWT_SECRET`: mk-portfolio-jwt-secret-key-2024

3. **Deploy**
- Click "Deploy"
- Your app will be live with full functionality!

### What Works on Vercel:
- ✅ Complete portfolio with all sections
- ✅ MongoDB integration
- ✅ User authentication system
- ✅ Admin dashboard
- ✅ Project management
- ✅ Image upload functionality
- ✅ All API routes

---

## 🛠️ Build Commands

### For Firebase (Static):
```bash
npm run build
firebase deploy
```

### For Vercel (Full App):
```bash
# Vercel handles this automatically
npm run build
npm run start
```

---

## 📁 Current Configuration

### Firebase Configuration (`firebase.json`):
```json
{
  "hosting": {
    "public": ".next/out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{"source": "**", "destination": "/index.html"}]
  }
}
```

### Next.js Configuration (`next.config.js`):
- Static export enabled for Firebase
- Image optimization disabled
- MongoDB external packages configured

---

## 🎯 Recommendation

**For Portfolio Showcase**: Use Firebase Hosting
**For Full Application**: Use Vercel

Both options are configured and ready to deploy!