import { useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-white font-sans transition-colors duration-300 antialiased overflow-x-hidden page-transition">
      <Header />
      <main className="relative min-h-screen pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background-light dark:bg-background-dark">
          <div className="absolute inset-0 bg-geometric opacity-[0.03] dark:opacity-100 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
        </div>
        <div className="lg:mt-20 md:mt-16 mt-10"></div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
      <ScrollToTop />
    </div>
  );
};

// Dashboard Route Component
const DashboardRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
};

// Create router with data mode
const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/dashboard",
    element: <DashboardRoute />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            key="loading"
            onLoadingComplete={handleLoadingComplete}
          />
        ) : (
          <RouterProvider router={router} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
