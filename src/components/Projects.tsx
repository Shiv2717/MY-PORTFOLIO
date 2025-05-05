import React, { useState } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'StudentSphere',
    description: 'A decentralized social hub for college students, featuring real-time chat, resource sharing, and community engagement.',
    tags: ['React', 'Firebase', 'Web3', 'Node.js'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: 'https://student-sphere-six.vercel.app/',
    codeLink: 'https://github.com/Shiv2717/StudentSphere',
  },
  {
    id: 2,
    title: 'Voice-Controlled Robot',
    description: 'An obstacle-avoiding robot that responds to voice commands, built using Arduino and various sensors.',
    tags: ['Arduino', 'C++', 'Robotics', 'Voice Recognition'],
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Student Database System',
    description: 'A comprehensive database management system for handling student records and academic information.',
    tags: ['Python', 'MySQL', 'tkinter', 'CRUD'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    codeLink: 'https://github.com/Shiv2717/DBMS',
  },
  {
    id: 4,
    title: 'ChatBot',
    description: 'IoT-based home automation system with mobile app control and voice integration.',
    tags: ['IoT', 'React Native', 'ESP8266', 'MQTT'],
    image: 'https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-cellphone-7120126/',
    demoLink: 'https://chatroom-lyu9.onrender.com',
    codeLink: 'https://github.com/Shiv2717/chatroom',
  },
];

const Projects: React.FC = () => {
  const [currentBgImage, setCurrentBgImage] = useState(projectsData[0].image);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${currentBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one represents a unique challenge and learning experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 * index}>
              <ProjectCard
                project={project}
                onHoverProject={(image) => setCurrentBgImage(image)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;