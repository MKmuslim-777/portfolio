# Migration Guide: React + Vite to Next.js 14+

This guide documents the conversion process from the original React + Vite portfolio to Next.js 14+ with App Router.

## 🔄 Major Changes

### 1. Project Structure
```
OLD (Vite/React)          →    NEW (Next.js)
├── src/                  →    ├── app/
│   ├── components/       →    │   ├── components/
│   ├── utils/           →    │   ├── lib/
│   ├── firebase/        →    │   ├── api/
│   ├── main.jsx         →    │   ├── layout.js
│   ├── App.jsx          →    │   └── page.js
│   └── index.css        →    └── globals.css
├── index.html           →    (handled by Next.js)
└── vite.config.js       →    └── next.config.js
```

### 2. Routing System
- **OLD**: React Router DOM with `createBrowserRouter`
- **NEW**: Next.js App Router with file-based routing

### 3. Component Changes
- **File Extensions**: `.jsx` → `.js`
- **Imports**: Added `'use client'` directive for client components
- **Image Optimization**: `<img>` → `<Image>` from `next/image`
- **Navigation**: React Router `Link` → Next.js `Link` and `useRouter`

## 📝 File-by-File Changes

### Configuration Files

#### package.json
```json
// REMOVED
"react-router-dom": "^7.11.0"
"@vitejs/plugin-react": "^4.2.1"
"vite": "^5.1.0"

// ADDED
"next": "^14.0.0"
"eslint-config-next": "^14.0.0"
"autoprefixer": "^10.4.16"
"postcss": "^8.4.31"
"tailwindcss": "^3.3.5"
"bcryptjs": "^2.4.3"
```

#### next.config.js (NEW)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  }
}
module.exports = nextConfig
```

#### tailwind.config.js (UPDATED)
```javascript
// Added Next.js paths
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Core Application Files

#### app/layout.js (NEW - replaces src/main.jsx)
```javascript
'use client'
import { Inter, Saira } from 'next/font/google'
import './globals.css'
// ... layout logic
```

#### app/page.js (NEW - replaces src/App.jsx)
```javascript
'use client'
// Main portfolio page content
```

### Component Conversions

#### All Components
- Added `'use client'` directive at the top
- Changed file extensions from `.jsx` to `.js`
- Updated import paths where necessary

#### Hero Component
```javascript
// OLD
<img src="..." alt="..." />

// NEW
import Image from 'next/image'
<Image src="..." alt="..." width={500} height={600} priority />
```

#### Authentication Components
- Updated API calls to use Next.js API routes
- Changed from mock localStorage to proper API endpoints

### API Routes (NEW)

#### app/api/auth/login/route.js
```javascript
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  // Login logic
}
```

#### app/api/auth/register/route.js
```javascript
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  // Registration logic
}
```

### Routing Changes

#### OLD (React Router)
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/dashboard", element: <DashboardRoute /> }
])

<RouterProvider router={router} />
```

#### NEW (Next.js App Router)
```
app/
├── page.js          // "/" route
└── dashboard/
    └── page.js      // "/dashboard" route
```

### Authentication Flow

#### OLD
```javascript
// Client-side only with localStorage
const [isAuthenticated, setIsAuthenticated] = useState(() => {
  return localStorage.getItem('isAuthenticated') === 'true'
})
```

#### NEW
```javascript
// API-based authentication
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 🚀 Benefits of Migration

### Performance Improvements
1. **Image Optimization**: Automatic image optimization with Next/Image
2. **Code Splitting**: Automatic code splitting and lazy loading
3. **Bundle Size**: Smaller bundle sizes with tree shaking
4. **SSR/SSG**: Server-side rendering capabilities

### Developer Experience
1. **File-based Routing**: Intuitive routing system
2. **API Routes**: Built-in API endpoints
3. **TypeScript Ready**: Better TypeScript support
4. **Built-in Optimization**: Automatic optimizations

### SEO & Accessibility
1. **Meta Tags**: Better meta tag management
2. **Server-side Rendering**: Improved SEO with SSR
3. **Accessibility**: Better accessibility features

## 🔧 Migration Steps

1. **Setup Next.js Project**
   ```bash
   npx create-next-app@latest portfolio-nextjs
   cd portfolio-nextjs
   ```

2. **Install Dependencies**
   ```bash
   npm install framer-motion axios firebase bcryptjs
   ```

3. **Copy and Convert Components**
   - Add `'use client'` to all interactive components
   - Update file extensions
   - Convert images to Next/Image

4. **Setup API Routes**
   - Create authentication endpoints
   - Implement proper password hashing

5. **Update Styling**
   - Configure Tailwind for Next.js
   - Update CSS imports

6. **Test and Deploy**
   - Test all functionality
   - Deploy to Vercel or preferred platform

## ⚠️ Breaking Changes

1. **Client Components**: All interactive components need `'use client'`
2. **Image Imports**: Must use Next/Image for optimization
3. **API Calls**: Updated to use Next.js API routes
4. **Routing**: File-based routing instead of React Router
5. **Build Process**: Different build and deployment process

## 🎯 Post-Migration Checklist

- [ ] All components render correctly
- [ ] Authentication system works
- [ ] Images are optimized
- [ ] Animations function properly
- [ ] Responsive design maintained
- [ ] API routes functional
- [ ] SEO meta tags added
- [ ] Performance optimized
- [ ] Deployment successful

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Migration from Vite](https://nextjs.org/docs/migrating/from-vite)
- [Framer Motion with Next.js](https://www.framer.com/motion/guide-nextjs/)

---

This migration successfully modernizes the portfolio while maintaining all original functionality and improving performance, SEO, and developer experience.