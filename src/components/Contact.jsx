import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'muslimuddinkaisanmk@gmail.com',
      link: 'mailto:muslimuddinkaisanmk@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+880 1815-688183',
      link: 'tel:+8801815688183'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Cox\'s Bazar, Chattagram, Bangladesh',
      link: '#'
    },
    {
      icon: 'fas fa-calendar',
      title: 'Availability',
      value: 'Available for freelance',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/muslim-uddin-kaichan/', color: '#0077B5', name: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/MKmuslim-777', color: '#333', name: 'GitHub' },
    { icon: 'fas fa-globe', url: 'https://mk777.rf.gd/?i=1', color: '#F50057', name: 'Portfolio' }
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

  return (
    <motion.section 
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative z-10 py-24 bg-gray-50 dark:bg-background-dark"
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
              Get In Touch
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
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Together</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: social.color
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 border border-gray-300 dark:border-white/20 cursor-pointer"
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(245, 0, 87, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-primary/30 hover:bg-red-600 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </motion.section>
  )
}

export default Contact