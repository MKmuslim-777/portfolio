'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/muslim-uddin-kaichan/', color: '#0077B5', name: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/MKmuslim-777', color: '#333', name: 'GitHub' },
    { icon: 'fas fa-globe', url: 'https://mk777.rf.gd/?i=1', color: '#F50057', name: 'Portfolio' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="relative z-10 bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                MK
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Muslim Uddin</h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Building modern web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2, color: '#F50057' }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 font-display">Follow Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    backgroundColor: social.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Muslim Uddin. All rights reserved. Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer