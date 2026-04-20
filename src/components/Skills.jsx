import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTailwindcss, SiJavascript, SiTypescript, SiPython } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-4xl text-orange-500" />, level: 'Expert' },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-4xl text-green-500" />, level: 'Expert' },
    { name: 'React', icon: <FaReact className="text-4xl text-blue-500" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-500" />, level: 'Advanced' },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" />, level: 'Intermediate' },
    { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-700" />, level: 'Advanced' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-500" />, level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" />, level: 'Intermediate' },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" />, level: 'Advanced' },
    { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-400" />, level: 'Intermediate' },
    { name: 'Python', icon: <SiPython className="text-4xl text-yellow-600" />, level: 'Intermediate' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center group cursor-pointer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <motion.h3
                className="text-lg font-semibold mb-2 text-white"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {skill.name}
              </motion.h3>
              <motion.span
                className="text-sm text-gray-400"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, color: '#60a5fa' }}
              >
                {skill.level}
              </motion.span>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;