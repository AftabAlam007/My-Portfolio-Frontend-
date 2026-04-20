import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-16 border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MD Aftab Alam
            </h3>
            <p className="text-gray-400 mb-6">
              Java Full Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
            <motion.div className="flex space-x-4">
              {[{ icon: FaGithub, link: 'https://github.com/AftabAlam007' },
                { icon: FaLinkedin, link: 'https://linkedin.com/in/aftabalam' },
                { icon: FaTwitter, link: 'https://twitter.com/aftabalam' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Contact Info</h4>
            <p className="text-gray-400 mb-2">📧 aftab.alam@example.com</p>
            <p className="text-gray-400 mb-2">📱 +1 (555) 123-4567</p>
            <p className="text-gray-400">🌍 Remote / Worldwide</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2024 Aftab Alam. All rights reserved. | Built with React, Tailwind CSS, and Framer Motion.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;