import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, .cursor-pointer, [role="button"]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, .cursor-pointer, [role="button"]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      {/* Main Cursor - Larger and more visible */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.3
        }}
      >
        <div className="w-5 h-5 bg-primary rounded-full shadow-lg"></div>
      </motion.div>

      {/* Cursor Trail - Animated ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] border-2 border-primary/60 rounded-full"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.2
        }}
        style={{ width: '30px', height: '30px' }}
      />

      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] border border-primary/20 rounded-full"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          opacity: isHovering ? 0.6 : 0.2
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25
        }}
        style={{ width: '50px', height: '50px' }}
      />
    </>
  )
}

export default CustomCursor