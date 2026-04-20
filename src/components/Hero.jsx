import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen blur-3xl opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen blur-3xl opacity-20"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="glass rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-xl"
        >
          <motion.div
            variants={itemVariants}
            animate="visible"
            className="mb-4"
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
              animate="animate"
              variants={floatingVariants}
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            MD Aftab Alam
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl mb-6 text-gray-300 font-light"
          >
            Java Full Stack Developer | AI Builder
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-300 font-mono mb-8 h-12"
          >
            <Typewriter
              words={[
                'Java Full Stack Developer',
                'Spring Boot Expert',
                'React Specialist',
                'AI Tool Builder',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Building amazing web experiences with modern technologies. Passionate about creating
            scalable solutions and exploring the intersection of AI and web development.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 inline-block"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-gray-400 text-white font-bold py-4 px-8 rounded-full transition duration-300 inline-block hover:border-white"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-gray-400 text-sm">Scroll to explore</div>
            <div className="text-2xl">↓</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;