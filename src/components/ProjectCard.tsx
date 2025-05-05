import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onHoverProject: (image: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onHoverProject }) => {
  return (
    <motion.div
      className="relative rounded-xl backdrop-blur-sm bg-white/80 dark:bg-black/20 
                 border border-gray-200 dark:border-gray-800 overflow-hidden 
                 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      onHoverStart={() => onHoverProject(project.image)}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group">
          {project.title}
          <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
            <ArrowUpRight size={18} className="inline" />
          </span>
        </h3>

        <p className="text-gray-800 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full 
                        bg-indigo-200 text-indigo-900 
                        dark:bg-indigo-900/40 dark:text-indigo-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium 
                        text-indigo-600 hover:text-indigo-800 
                        dark:text-indigo-400 dark:hover:text-indigo-300 
                        transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium 
                        text-gray-700 hover:text-gray-900 
                        dark:text-gray-400 dark:hover:text-gray-300 
                        transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
