'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'fas fa-palette',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', level: 95, description: 'Semantic markup & accessibility' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6', level: 90, description: 'Modern styling & animations' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E', level: 88, description: 'ES6+ & DOM manipulation' },
        { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB', level: 85, description: 'Component-based architecture' },
        { name: 'Next.js', icon: 'fas fa-rocket', color: '#000000', level: 82, description: 'Full-stack React framework' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#06B6D4', level: 92, description: 'Utility-first CSS framework' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', level: 82, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', icon: 'fas fa-code', color: '#000000', level: 78, description: 'Web application framework' },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248', level: 76, description: 'NoSQL database management' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28', level: 75, description: 'Backend-as-a-Service platform' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB', level: 85, description: 'Versatile programming language' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', level: 88, description: 'Version control system' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717', level: 90, description: 'Code repository & collaboration' },
        { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC', level: 95, description: 'Code editor & debugging' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E', level: 75, description: 'UI/UX design tool' },
        { name: 'Postman', icon: 'fas fa-paper-plane', color: '#FF6C37', level: 80, description: 'API testing & development' }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      id="skills"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative z-10 py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-background-dark dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span 
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-primary to-purple-500"
            ></motion.span>
            <motion.span 
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary font-bold tracking-widest uppercase text-sm px-4 py-2 bg-primary/10 rounded-full"
            >
              My Skills
            </motion.span>
            <motion.span 
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-l from-primary to-purple-500"
            ></motion.span>
          </div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-4"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Expertise</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies and best practices
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/30'
                  : 'bg-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/10'
              }`}
            >
              <i className={category.icon}></i>
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)` 
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300"
                    style={{ 
                      backgroundColor: `${skill.color}15`,
                      color: skill.color
                    }}
                  >
                    <i className={skill.icon}></i>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Progress Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                        }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          animate={isInView ? {
                            x: ['-100%', '100%'],
                            opacity: [0, 0.6, 0]
                          } : {}}
                          transition={{
                            duration: 2,
                            delay: 1.5 + index * 0.1,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-white/40 w-full skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${skill.color}30, transparent)`
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: '16+', label: 'Technologies', icon: 'fas fa-code' },
            { number: '50+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
            { number: '2+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
            { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-heart' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                className="text-primary text-2xl mb-3 group-hover:scale-110 transition-transform"
              >
                <i className={stat.icon}></i>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-2 group-hover:text-primary transition-colors"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-l from-blue-500/20 to-primary/20 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </motion.section>
  )
}

export default Skills