import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import RotatingText from './RotatingText';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = [
    'ECE Student',
    'Web Developer',
    'Robotics Enthusiast',
    'Tech Innovator',
    'Problem Solver'
  ];

  const backgroundStyle = {
    transform: `scale(${1 + scrollY * 0.0005})`,
    filter: `blur(${Math.min(scrollY * 0.03, 5)}px)`,
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          ...backgroundStyle,
        }}
      />
      
      <div className="absolute inset-0 bg-gray-900/60 dark:bg-gray-900/70" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-indigo-400">Shivam Kumar Mishra</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-100 mb-6 flex justify-center"
          >
            I'm a{' '}
            <RotatingText texts={roles} speed={2000} />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Electronics and Communication Engineering student at Dr. B.C. Roy Engineering College,
            passionate about web development, robotics, and innovative tech solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 text-base font-medium rounded-lg 
                       bg-indigo-600 text-white hover:bg-indigo-700 
                       transition-colors duration-300 inline-flex items-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <Mail size={18} className="ml-2" />
            </motion.a>
            
            <motion.a
              href="#projects"
              className="px-6 py-3 text-base font-medium rounded-lg 
                       bg-white/10 backdrop-blur-sm text-white border border-white/20 
                       hover:bg-white/20 transition-colors duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6 mt-10"
          >
            <motion.a
              href="https://github.com/Shiv2717"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="www.linkedin.com/in/shivam-mishra-shivam2717"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;