'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls past hero section (approximately 100vh)
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const heroSection = document.getElementById('home')
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(245, 0, 87, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-xl shadow-primary/40 flex items-center justify-center hover:bg-red-600 transition-all duration-300 cursor-pointer group"
      >
        <motion.i 
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="fas fa-arrow-up text-lg group-hover:scale-110 transition-transform"
        ></motion.i>
      </motion.button>
    </motion.div>
  )
}

export default ScrollToTop