'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      status: 'Published',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      status: 'Published',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts.',
      status: 'Published',
      date: '2024-01-05'
    }
  ])

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    liveUrl: '',
    githubUrl: '',
    category: 'Frontend'
  })

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    })
  }

  const handleAddProject = (e) => {
    e.preventDefault()
    const project = {
      id: Date.now(),
      ...newProject,
      technologies: newProject.technologies.split(',').map(tech => tech.trim()),
      status: 'Published',
      date: new Date().toISOString().split('T')[0]
    }
    setProjects([project, ...projects])
    setNewProject({
      title: '',
      description: '',
      image: '',
      technologies: '',
      liveUrl: '',
      githubUrl: '',
      category: 'Frontend'
    })
    alert('Project added successfully!')
  }

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id))
    }
  }

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: 'fas fa-project-diagram', color: 'text-blue-500' },
    { label: 'Published', value: projects.filter(p => p.status === 'Published').length, icon: 'fas fa-check-circle', color: 'text-green-500' },
    { label: 'Technologies', value: '11+', icon: 'fas fa-code', color: 'text-purple-500' },
    { label: 'Experience', value: '3+ Years', icon: 'fas fa-calendar', color: 'text-orange-500' }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-chart-bar' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder' },
    { id: 'add-project', label: 'Add Project', icon: 'fas fa-plus' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-background-dark to-gray-900">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/10 backdrop-blur-xl border-b border-white/20 p-4"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">MK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">Welcome back, Muslim Uddin</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogout}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-xl border border-red-500/50 transition-colors"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </motion.button>
        </div>
      </motion.header>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-lg font-semibold text-white mb-4">Navigation</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <i className={tab.icon}></i>
                    {tab.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl ${stat.color}`}>
                          <i className={stat.icon}></i>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Projects */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Projects</h3>
                  <div className="space-y-3">
                    {projects.slice(0, 3).map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div>
                          <h4 className="text-white font-medium">{project.title}</h4>
                          <p className="text-gray-400 text-sm">{project.description.substring(0, 50)}...</p>
                        </div>
                        <span className="text-green-400 text-sm">{project.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">{project.title}</h4>
                          <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs text-gray-500">Status: {project.status}</span>
                            <span className="text-xs text-gray-500">Date: {project.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
                          >
                            <i className="fas fa-edit"></i>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteProject(project.id)}
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                          >
                            <i className="fas fa-trash"></i>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Add Project Tab */}
            {activeTab === 'add-project' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Add New Project</h2>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <form onSubmit={handleAddProject} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Project Title *
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={newProject.title}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                          placeholder="Enter project title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Category *
                        </label>
                        <select
                          name="category"
                          value={newProject.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="Frontend">Frontend</option>
                          <option value="Backend">Backend</option>
                          <option value="Full Stack">Full Stack</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Enter project description"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Image URL
                      </label>
                      <input
                        type="url"
                        name="image"
                        value={newProject.image}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Technologies (comma separated)
                      </label>
                      <input
                        type="text"
                        name="technologies"
                        value={newProject.technologies}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Live URL
                        </label>
                        <input
                          type="url"
                          name="liveUrl"
                          value={newProject.liveUrl}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                          placeholder="https://project-demo.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          GitHub URL
                        </label>
                        <input
                          type="url"
                          name="githubUrl"
                          value={newProject.githubUrl}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                          placeholder="https://github.com/username/repo"
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <i className="fas fa-plus mr-2"></i>
                      Add Project
                    </motion.button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard