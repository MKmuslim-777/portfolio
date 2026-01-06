import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "#E34F26", level: 95 },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6", level: 90 },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      color: "#F7DF1E",
      level: 88,
    },
    { name: "Python", icon: "fab fa-python", color: "#3776AB", level: 85 },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4", level: 92 },
    { name: "React JS", icon: "fab fa-react", color: "#61DAFB", level: 85 },
    { name: "React Router", icon: "fas fa-route", color: "#CA4245", level: 80 },
    { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28", level: 75 },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933", level: 82 },
    { name: "Express.js", icon: "fas fa-server", color: "#000000", level: 78 },
    { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248", level: 76 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative z-10 py-24 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-primary"
            ></motion.span>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              My Skills
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-primary"
            ></motion.span>
          </div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight"
          >
            Technologies I Work With
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
          >
            Here are the technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    color: skill.color,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
                  style={{ color: isInView ? skill.color : undefined }}
                >
                  <i className={skill.icon}></i>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    }}
                  >
                    <motion.div
                      animate={
                        isInView
                          ? {
                              x: ["-100%", "100%"],
                              opacity: [0, 1, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        delay: 1 + index * 0.1,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-white/30 w-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { number: "11+", label: "Technologies" },
            { number: "10+", label: "Projects" },
            // { number: '2+', label: 'Years Experience' },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-red-500 font-display mb-2  transition-colors"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </motion.section>
  );
};

export default Skills;
