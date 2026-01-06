'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './CustomCursor'
import LoadingScreen from './LoadingScreen'

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // Prevent flash of unstyled content
    document.documentElement.style.visibility = 'visible'
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            key="loading"
            onLoadingComplete={handleLoadingComplete}
          />
        ) : (
          <div key="content">
            {children}
          </div>
        )}
      </AnimatePresence>
    </>
  )
}