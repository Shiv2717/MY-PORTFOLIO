import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              Portfolio<span className="text-indigo-400">.</span>
            </a>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div>
            <p className="text-gray-400 text-sm flex items-center">
              &copy; {currentYear} Made with{' '}
              <Heart size={14} className="mx-1 text-red-500" fill="currentColor" /> by Alex Smith
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;