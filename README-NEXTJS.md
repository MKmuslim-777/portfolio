# Portfolio Website - Next.js Version

This is a modern portfolio website converted from React + Vite to Next.js 14+ with App Router. The project showcases a full-stack developer's skills and projects with a beautiful, responsive design.

## 🚀 Features

- **Modern Next.js 14+ with App Router**: Latest Next.js features and routing system
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Framer Motion Animations**: Smooth, professional animations throughout
- **Glass Morphism Design**: Modern glass-effect UI components
- **Authentication System**: Login/Register with API routes
- **Admin Dashboard**: Project management interface
- **Custom Cursor**: Interactive custom cursor effects
- **Loading Screen**: Animated loading experience
- **Scroll Animations**: Elements animate on scroll
- **Contact Form**: Functional contact form
- **SEO Optimized**: Next.js built-in SEO features

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Next/Image** - Optimized image component

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **bcryptjs** - Password hashing
- **Firebase** - Authentication and database (optional)

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/
│   │       │   └── route.js
│   │       └── register/
│   │           └── route.js
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── CustomCursor.js
│   │   ├── Dashboard.js
│   │   ├── FloatingButton.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── LoadingScreen.js
│   │   ├── Login.js
│   │   ├── Projects.js
│   │   ├── Register.js
│   │   ├── ScrollToTop.js
│   │   └── Skills.js
│   ├── dashboard/
│   │   └── page.js
│   ├── lib/
│   │   └── firebase.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Add your environment variables here
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   # ... other Firebase config
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The primary color is set to `#F50057` (pink/red). You can change this in:
- `tailwind.config.js` - Update the `primary` color
- `app/globals.css` - Update CSS custom properties

### Content
- **Personal Information**: Update in `app/components/Hero.js` and `app/components/About.js`
- **Skills**: Modify the skills array in `app/components/Skills.js`
- **Projects**: Update the projects array in `app/components/Projects.js`
- **Contact Info**: Update contact details in `app/components/Contact.js`

### Images
- Replace the profile image URL in Hero and About components
- Add your project images to the `public` folder or use external URLs

## 🔐 Authentication

The authentication system includes:

### Demo Admin Credentials
- **Email**: `mk777@admin.com`
- **Password**: `017772`

### API Routes
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Features
- Password hashing with bcryptjs
- JWT-like session management with localStorage
- Admin role-based access control
- Registration with validation

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

Framer Motion animations include:
- Page load animations
- Scroll-triggered animations
- Hover effects
- Loading screen animations
- Custom cursor animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Supports Next.js out of the box
- **Heroku**: Use the Next.js buildpack

## 📊 Performance

The Next.js version includes:
- **Image Optimization**: Next/Image for optimized images
- **Code Splitting**: Automatic code splitting
- **SSR/SSG**: Server-side rendering capabilities
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing React framework
- **Vercel** for hosting and deployment

## 📞 Contact

- **Email**: muslimuddinkaisanmk@gmail.com
- **LinkedIn**: [Muslim Uddin](https://www.linkedin.com/in/muslim-uddin-kaichan/)
- **GitHub**: [MKmuslim-777](https://github.com/MKmuslim-777)
- **Portfolio**: [mk777.rf.gd](https://mk777.rf.gd/?i=1)

---

**Built with ❤️ using Next.js and Tailwind CSS**