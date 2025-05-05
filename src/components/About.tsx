import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/profile.jpg"
                  alt="Shivam Kumar Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 dark:bg-indigo-500 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-400 dark:bg-indigo-700 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                ECE Student & Tech Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Electronics and Communication Engineering student at Dr. B.C. Roy Engineering College,
                with a deep interest in technology, innovation, and building impactful solutions. My journey into tech
                began with electronics but soon expanded into web development, embedded systems, and AI-integrated applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether it's coding a real-time chat app, automating tasks with Python, or building robots that respond
                to voice commands — I thrive at the intersection of hardware and software. I'm constantly experimenting,
                building, and learning through competitions and projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technical Skills
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Web Development</li>
                    <li>Embedded Systems</li>
                    <li>Robotics</li>
                    <li>AI/ML Basics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Exploring
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Real-Time Systems</li>
                    <li>Web3 & DApps</li>
                    <li>IoT & Smart Devices</li>
                    <li>Cybersecurity</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;