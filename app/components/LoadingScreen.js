'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState('')
  
  const loadingTexts = [
    'Initializing...',
    'Loading Components...',
    'Setting up Animations...',
    'Preparing Experience...',
    'Almost Ready...'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5
        
        // Update loading text based on progress
        if (newProgress < 20) setCurrentText(loadingTexts[0])
        else if (newProgress < 40) setCurrentText(loadingTexts[1])
        else if (newProgress < 60) setCurrentText(loadingTexts[2])
        else if (newProgress < 80) setCurrentText(loadingTexts[3])
        else setCurrentText(loadingTexts[4])
        
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(timer)
  }, [onLoadingComplete, loadingTexts])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-background-dark flex items-center justify-center"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-4 text-primary text-6xl flex items-center justify-center"
          >
            <i className="fas fa-infinity"></i>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl font-bold font-display text-white"
          >
            MK
          </motion.h1>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="relative">
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full relative"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/30 w-full"
                />
              </motion.div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>0%</span>
              <span className="text-primary font-bold">{Math.round(progress)}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 text-lg font-medium"
        >
          {currentText}
        </motion.div>

        {/* Dots Animation */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen