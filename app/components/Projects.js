'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      detailedDescription: 'This comprehensive e-commerce platform provides a complete online shopping experience. Built with modern technologies, it features a responsive React frontend, robust Node.js backend, and MongoDB database. Key features include user registration and authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe integration, order management system, and an admin dashboard for inventory and user management. The platform also includes email notifications, search and filtering capabilities, and mobile-responsive design.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'JWT'],
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Order Management', 'Email Notifications'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      detailedDescription: 'A powerful task management application designed for team collaboration. Features real-time synchronization using Firebase, intuitive drag-and-drop interface for task organization, team member assignment, progress tracking, and deadline management. The app includes project boards, task categories, file attachments, comment system, and notification system. Built with React and styled with Tailwind CSS for a modern, responsive user experience.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'React DnD'],
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'File Attachments', 'Notifications'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      detailedDescription: 'An advanced weather dashboard providing comprehensive weather information and forecasts. Features include current weather conditions, 7-day forecasts, hourly predictions, interactive weather maps, location-based services, weather alerts, and historical weather data visualization. The application uses multiple weather APIs for accurate data and includes charts and graphs for weather analytics. Responsive design ensures optimal viewing on all devices.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'Weather API', 'Chart.js', 'Leaflet Maps', 'Axios'],
      features: ['Location Services', 'Interactive Maps', 'Weather Alerts', 'Data Visualization', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    }
  ]

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <motion.section 
        id="projects"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 py-24 bg-gradient-to-br from-gray-50 to-white dark:from-background-dark dark:to-gray-900"
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
                My Projects
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
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
            >
              Here are some of my recent projects that showcase my skills and experience
            </motion.p>
          </motion.div>

          {/* Projects Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-lg"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-lg"
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center py-2 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      Code
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(project)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-all cursor-pointer"
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </motion.section>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
                width={800}
                height={400}
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-full">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {selectedProject.detailedDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <i className="fas fa-check text-primary"></i>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.liveUrl}
                  className="flex-1 bg-primary text-white text-center py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  View Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.githubUrl}
                  className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="fab fa-github mr-2"></i>
                  View Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Projects