import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Scroll spy functionality
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl px-6 py-3 shadow-2xl shadow-black/10 dark:shadow-black/30">
          <div className="flex items-center justify-between">
            <motion.a
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
                  MK
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 rounded-xl blur-sm -z-10"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wide group-hover:text-primary transition-colors font-display text-gray-800 dark:text-white">
                  Muslim Uddin
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Full Stack Developer
                </span>
              </div>
            </motion.a>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center gap-2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <motion.button
                    whileHover={{
                      backgroundColor: "rgba(245, 0, 87, 0.1)",
                    }}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeSection === item.id
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "text-gray-700 dark:text-gray-200 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                </motion.div>
              ))}
            </motion.nav>

            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 border border-white/20 dark:border-white/10 cursor-pointer"
              >
                <motion.i
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                  className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`}
                ></motion.i>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform backdrop-blur-sm cursor-pointer"
              >
                <i className="fas fa-bars"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
