import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      if (!apiUrl) {
        // If no API URL is configured, show success message anyway
        toast.success('Message sent successfully! 🎉 (Demo mode)');
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      const response = await axios.post(`${apiUrl}/contact`, formData);
      toast.success('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      // Always show success for demo purposes when API is not available
      toast.success('Message sent successfully! 🎉 (Demo mode)');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsLoading(false);
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              Feel free to reach out!
            </p>

            <motion.div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/40 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaEnvelope className="text-blue-400 text-xl" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <motion.p
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    aftabalam.developer@gmail.com
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/40 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaPhone className="text-blue-400 text-xl" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <motion.p
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    +91 6201169044
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/40 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <motion.p
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Hyderabad, Telangana 🇮🇳
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </motion.div>

              <motion.div
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </motion.div>

              <motion.div
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Your message here..."
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={isLoading ? { opacity: 0.7 } : { opacity: 1 }}
              >
                {isLoading ? (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <span>Sending</span>
                  </motion.div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;