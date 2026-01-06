import { motion } from 'framer-motion'

const SidePanel = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="fixed top-1/2 right-0 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end"
    >
      <motion.div 
        whileHover={{ x: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        transition={{ duration: 0.3 }}
        className="bg-card-dark text-gray-400 text-xs font-bold py-6 px-2 rounded-l-md writing-vertical transform rotate-180 shadow-lg border-l border-t border-b border-gray-700 cursor-pointer hover:text-white transition-colors"
      >
        <span className="block rotate-90 whitespace-nowrap" style={{writingMode: 'vertical-rl'}}>
          48 PRE-BUILT SITES
        </span>
      </motion.div>
      <motion.div 
        whileHover={{ 
          x: -10, 
          scale: 1.1,
          backgroundColor: "#4ade80"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="mt-2 bg-[#59b259] text-white w-10 h-10 flex items-center justify-center rounded-l-md shadow-lg cursor-pointer hover:bg-green-600 transition-colors"
      >
        <motion.i 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="fas fa-leaf"
        ></motion.i>
      </motion.div>
    </motion.div>
  )
}

export default SidePanel