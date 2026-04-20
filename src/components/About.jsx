import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: '-100px' }}
            className="glass rounded-2xl p-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 text-blue-300">
              Who I Am
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed mb-6">
              I'm MD Aftab Alam, a passionate Java Full Stack Developer with expertise in building robust
              web applications using Spring Boot, React, and modern technologies. I love creating
              innovative solutions that solve real-world problems.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development, I specialize in
              creating scalable, efficient, and user-friendly applications. I'm always eager to
              learn new technologies and tackle challenging projects.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div
              variants={rightItemVariants}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.h4 className="text-xl font-semibold mb-2 text-blue-300">Experience</motion.h4>
              <p className="text-gray-300">3+ years in Full Stack Development</p>
            </motion.div>
            <motion.div
              variants={rightItemVariants}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.h4 className="text-xl font-semibold mb-2 text-blue-300">Education</motion.h4>
              <p className="text-gray-300">B.Tech in Computer Science</p>
            </motion.div>
            <motion.div
              variants={rightItemVariants}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.h4 className="text-xl font-semibold mb-2 text-blue-300">Location</motion.h4>
              <p className="text-gray-300">Remote / On-site Available</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;