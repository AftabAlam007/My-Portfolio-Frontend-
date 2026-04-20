import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: 'AI Chatbot (ChatGPT Clone)',
      description: 'A conversational AI chatbot built with React and integrated with OpenAI API. Features include real-time messaging, conversation history, and customizable AI personalities.',
      techStack: ['React', 'OpenAI API', 'Node.js', 'Socket.io'],
      liveLink: 'https://ai-chatbot-demo.com',
      githubLink: 'https://github.com/AftabAlam007/ai-chatbot'
    },
    {
      title: 'Resume Analyzer (ATS + AI)',
      description: 'An AI-powered resume analyzer that uses machine learning to provide ATS compatibility scores and personalized improvement suggestions.',
      techStack: ['Python', 'Flask', 'Machine Learning', 'React'],
      liveLink: 'https://resume-analyzer.com',
      githubLink: 'https://github.com/AftabAlam007/resume-analyzer'
    },
    {
      title: 'Interview Preparation Bot',
      description: 'An interactive bot that helps users prepare for technical interviews with coding challenges, mock interviews, and personalized feedback.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
      liveLink: 'https://interview-bot.com',
      githubLink: 'https://github.com/AftabAlam007/interview-bot'
    },
    {
      title: 'Employee Management System',
      description: 'A comprehensive HR management system with employee tracking, payroll management, and performance analytics.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
      liveLink: 'https://ems-demo.com',
      githubLink: 'https://github.com/AftabAlam007/employee-management'
    }
  ];

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/AftabAlam007/repos?sort=updated&per_page=6');
        setGithubRepos(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
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
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 group cursor-pointer"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors"
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-500/40 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div className="flex gap-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300"
                  whileHover={{ scale: 1.05, borderColor: '#60a5fa' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold mb-4 text-blue-300">Latest from GitHub</h3>
        </motion.div>

        {loading ? (
          <motion.div
            className="text-center py-12"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-gray-400">Loading repositories...</p>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {githubRepos.slice(0, 6).map((repo) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                className="glass rounded-xl p-6 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)',
                }}
              >
                <h4 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-200 truncate">
                  {repo.name}
                </h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 min-h-12">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {repo.language || 'JavaScript'}
                  </span>
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;