'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import Register from "./Register"

const Login = ({ onLogin }) => {
  const [showRegister, setShowRegister] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Check for admin credentials first
      if (
        formData.email === "mk777@admin.com" &&
        formData.password === "017772"
      ) {
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("userRole", "admin")
        localStorage.setItem("userEmail", formData.email)
        onLogin()
        return
      }

      // Try API authentication
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("userRole", result.user.userRole)
        localStorage.setItem("userEmail", result.user.email)
        localStorage.setItem("userId", result.user.id)

        // Only admin users can access dashboard
        if (result.user.userRole === "admin") {
          onLogin()
        } else {
          setError("Access denied. Admin privileges required.")
          localStorage.clear()
        }
      } else {
        setError(result.message || "Invalid email or password")
      }
    } catch (error) {
      console.error("Authentication error:", error)
      setError("Authentication failed. Please try again.")
    }

    setLoading(false)
  }

  const handleShowRegister = () => {
    setShowRegister(true)
  }

  const handleBackToLogin = () => {
    setShowRegister(false)
    setError("")
    setFormData({ email: "", password: "" })
  }

  const handleRegisterSuccess = () => {
    setShowRegister(false)
    setError("")
    setFormData({ email: "", password: "" })
  }

  if (showRegister) {
    return (
      <Register
        onBackToLogin={handleBackToLogin}
        onRegisterSuccess={handleRegisterSuccess}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-background-dark to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">MK</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Dashboard Login
          </h1>
          <p className="text-gray-400">
            Enter your credentials to access the admin panel
          </p>
        </motion.div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
              placeholder="Enter your password"
            />
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-300 text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Signing in...
              </div>
            ) : (
              "Sign In"
            )}
          </motion.button>
        </form>

        {/* Register Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <button
              onClick={handleShowRegister}
              className="text-primary hover:text-red-400 font-medium transition-colors cursor-pointer"
            >
              Register here
            </button>
          </p>
        </motion.div>

        {/* Admin Credentials Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 p-4 bg-blue-500/20 border border-blue-500/50 rounded-xl"
        >
          <p className="text-blue-300 text-sm font-medium mb-2">Demo Admin Access:</p>
          <p className="text-blue-200 text-xs">Email: mk777@admin.com</p>
          <p className="text-blue-200 text-xs">Password: 017772</p>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default Login