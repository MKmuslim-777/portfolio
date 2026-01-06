import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative z-10 py-24 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-sm border-t border-gray-200 dark:border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="relative group">
            <motion.div
              whileHover={{ scale: 1.05, opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
            ></motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-[4/5] max-w-md mx-auto lg:mx-0"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                alt="Muslim Uddin Professional Photo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://i.ibb.co.com/cSXqrmRy/DSC-0064.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-60"></div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg"
                  >
                    <i className="fas fa-quote-right"></i>
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      "Design is intelligence made visible."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
            ></motion.div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-primary"
                ></motion.span>
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-primary font-bold tracking-widest uppercase text-sm"
                >
                  About Me
                </motion.span>
              </div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight"
              >
                Full-Stack Web
                <br />
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={
                    isInView
                      ? { backgroundPosition: "100% 50%" }
                      : { backgroundPosition: "0% 50%" }
                  }
                  transition={{ duration: 2, delay: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Developer & Designer
                </motion.span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light"
            >
              <motion.p variants={itemVariants}>
                Hello! I'm{" "}
                <strong className="text-primary font-bold text-xl">Muslim Uddin</strong>
                , a passionate Web Developer and UI/UX Designer with a knack for
                turning complex problems into simple, beautiful, and intuitive
                designs.
              </motion.p>
              <motion.p variants={itemVariants}>
                I'm a passionate Full Stack Web Developer specialized in the MERN Stack (React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase). I love building modern, responsive, and user-friendly web applications. With a strong focus on clean code and performance, I enjoy transforming complex requirements into seamless web experiences. I have also experience in using Next.js for server-side rendering and Tailwind CSS for design a beautiful UI.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              {[
                {
                  icon: "paint-brush",
                  title: "Frontend Development",
                  skills: "HTML, CSS, JS, React, Tailwind, Next.js",
                },
                {
                  icon: "code",
                  title: "Backend Development",
                  skills: "Node.js, Express, MongoDB",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(245, 0, 87, 0.5)",
                    boxShadow: "0 10px 30px rgba(245, 0, 87, 0.2)",
                  }}
                  className="p-4 rounded-xl bg-card-dark border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-3 text-primary group-hover:scale-110 transition-transform origin-left"
                  >
                    <i className={`fas fa-${item.icon} fa-2x`}></i>
                  </motion.div>
                  <h4 className="text-white font-bold font-display text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">{item.skills}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 flex flex-wrap gap-6 items-center"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "rgba(0, 0, 0, 1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-white bg-accent-dark hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm"
                href="#"
              >
                Download CV{" "}
                <motion.i
                  whileHover={{ y: -2 }}
                  className="fas fa-download ml-1"
                ></motion.i>
              </motion.a>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm uppercase tracking-wider font-bold">
                  Follow Me:
                </span>
                <div className="flex gap-3">
                  {[
                    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/muslim-uddin-kaichan/" },
                    { icon: "fab fa-github", url: "https://github.com/MKmuslim-777" },
                    { icon: "fas fa-globe", url: "https://mk777.rf.gd/?i=1" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.icon}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="text-gray-400 hover:text-primary transition-colors"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`${social.icon} fa-lg`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
