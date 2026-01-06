import { motion } from "framer-motion";

const FloatingButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(245, 0, 87, 0.6)",
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
      >
        <motion.i
          whileHover={{ rotate: 15 }}
          className="fab fa-facebook-messenger fa-xl"
        ></motion.i>
      </motion.button>
    </motion.div>
  );
};

export default FloatingButton;
