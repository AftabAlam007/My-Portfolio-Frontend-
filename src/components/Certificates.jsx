import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'AWS-SAA-12345',
      skills: ['AWS', 'Cloud Architecture', 'Solutions Design'],
      link: '#'
    },
    {
      id: 2,
      title: 'Oracle Certified Associate Java Programmer',
      issuer: 'Oracle University',
      date: 'January 2024',
      credentialId: 'OCAJP-67890',
      skills: ['Java', 'OOP', 'Programming'],
      link: '#'
    },
    {
      id: 3,
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'November 2023',
      credentialId: 'UC-FSWD-2023',
      skills: ['MERN Stack', 'Full Stack', 'Web Development'],
      link: '#'
    },
    {
      id: 4,
      title: 'React - The Complete Guide 2024',
      issuer: 'Udemy',
      date: 'September 2023',
      credentialId: 'UC-REACT-2023',
      skills: ['React', 'JavaScript', 'Frontend'],
      link: '#'
    },
    {
      id: 5,
      title: 'Spring Boot Microservices',
      issuer: 'Coursera',
      date: 'July 2023',
      credentialId: 'COURSERA-SB-123',
      skills: ['Spring Boot', 'Microservices', 'Backend'],
      link: '#'
    },
    {
      id: 6,
      title: 'MySQL Database Design & Optimization',
      issuer: 'Udemy',
      date: 'May 2023',
      credentialId: 'UC-MYSQL-2023',
      skills: ['MySQL', 'Database Design', 'Performance'],
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional certifications and credentials demonstrating expertise in web development, cloud architecture, and modern technologies.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 hover:border-blue-500/50 border border-transparent transition-all duration-300 group"
            >
              {/* Certificate Icon */}
              <motion.div
                className="flex items-center justify-between mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <FaAward className="text-white text-lg" />
                </div>
                <motion.a
                  href={cert.link}
                  whileHover={{ scale: 1.2 }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </motion.a>
              </motion.div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-gray-300">{cert.issuer}</span>
              </p>

              {/* Date */}
              <p className="text-xs text-gray-500 mb-4">
                📅 {cert.date}
              </p>

              {/* Credential ID */}
              <div className="bg-gray-800/50 rounded-lg p-2 mb-4">
                <p className="text-xs text-gray-400">
                  ID: <span className="text-blue-300 font-mono">{cert.credentialId}</span>
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Hover Gradient */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-8 text-center"
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              6+
            </motion.p>
            <p className="text-gray-300">Professional Certifications</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-8 text-center"
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              15+
            </motion.p>
            <p className="text-gray-300">Technology Skills Verified</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-8 text-center"
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              100%
            </motion.p>
            <p className="text-gray-300">Completion Rate</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
