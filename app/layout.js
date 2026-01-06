import { Inter, Saira } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const saira = Saira({ 
  subsets: ['latin'],
  variable: '--font-saira',
})

export const metadata = {
  title: 'Muslim Uddin - Full Stack Developer',
  description: 'Portfolio of Muslim Uddin - Full Stack Web Developer specialized in MERN Stack, React.js, Next.js, Node.js, MongoDB, and modern web technologies.',
  keywords: 'Muslim Uddin, MK, Full Stack Developer, React, Next.js, Node.js, MongoDB, Web Developer, Portfolio',
  authors: [{ name: 'Muslim Uddin' }],
  creator: 'Muslim Uddin',
  openGraph: {
    title: 'Muslim Uddin - Full Stack Developer',
    description: 'Portfolio of Muslim Uddin - Full Stack Web Developer specialized in MERN Stack',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muslim Uddin - Full Stack Developer',
    description: 'Portfolio of Muslim Uddin - Full Stack Web Developer specialized in MERN Stack',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F50057',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${saira.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E" />
      </head>
      <body className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}