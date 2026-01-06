import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Full-stack web developer',
    'React.js specialist',
    'UI/UX designer',
    'Problem solver'
  ]

  useEffect(() => {
    const currentText = texts[currentIndex]
    const shouldDelete = isDeleting
    
    const timer = setTimeout(() => {
      if (!shouldDelete && displayText === currentText) {
        // Pause at complete text, then start deleting
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (shouldDelete && displayText === '') {
        // Move to next text
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      } else if (shouldDelete) {
        // Delete character
        setDisplayText(currentText.substring(0, displayText.length - 1))
      } else {
        // Add character
        setDisplayText(currentText.substring(0, displayText.length + 1))
      }
    }, shouldDelete ? 50 : 100) // Faster deletion, slower typing

    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting, texts])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="relative z-10 flex items-center min-h-[calc(100vh-6rem)] pb-12">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.span 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase font-sans"
            >
              Hello
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight text-gray-900 dark:text-white"
            >
              i'm <span className="text-gray-900 dark:text-white">Muslim Uddin</span> a <br/>
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-primary relative inline-block min-h-[1.2em]"
              >
                {displayText}
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -right-1 top-0 bottom-0 w-[3px] bg-primary ml-1"
                ></motion.span>
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-lg text-lg leading-relaxed font-light"
          >
            I'm a passionate Full Stack Web Developer specialized in the MERN Stack (React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase). I love building modern, responsive, and user-friendly web applications.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="pt-4"
          >
            <motion.a 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(245, 0, 87, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-primary/30 hover:bg-red-600 hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer" 
              href="#"
            >
              <span>View Portfolio</span>
              <motion.i 
                whileHover={{ x: 5 }}
                className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"
              ></motion.i>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative flex justify-center lg:justify-end h-full mt-12 lg:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="text-[12vw] leading-none font-black font-display text-stroke-2 opacity-10 dark:opacity-20 select-none hidden lg:block uppercase whitespace-nowrap"
            >
              Web Designer
            </motion.div>
          </div>
          
          <div className="absolute top-20 right-0 w-full text-center pointer-events-none z-0">
            <motion.h2 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-6xl md:text-8xl font-black font-display text-gray-200 dark:text-white uppercase tracking-tighter opacity-100 dark:opacity-100"
            >
              <span className="dark:text-white text-gray-300">Web D</span>
              <span className="text-transparent">es</span>
              <span className="dark:text-white text-gray-300">gner</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-full max-w-lg mx-auto lg:mr-0"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent skew-x-12 scale-110 pointer-events-none"
            ></motion.div>
            <motion.img 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              whileHover={{ 
                filter: "grayscale(0%)",
                transition: { duration: 0.3 }
              }}
              alt="Smiling male web developer with arms crossed" 
              className="relative z-10 w-full h-auto object-cover mask-image-bottom drop-shadow-2xl rounded-b-3xl grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
              src="https://i.ibb.co.com/cSXqrmRy/DSC-0064.png"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </motion.div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-20">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-[4rem] md:text-[5rem] lg:text-[6rem] leading-none font-black font-display text-stroke-1 uppercase whitespace-nowrap tracking-wide select-none"
            >
              Web Designer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero