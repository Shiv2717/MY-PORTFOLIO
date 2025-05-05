import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ScrollMarquee from './ScrollMarquee';

const Skills: React.FC = () => {
  const technicalSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'MongoDB',
    'Firebase',
    'Git',
    'Webpack',
    'Tailwind CSS',
    'C',
    'Python',
    'MATLAB',
  ];

  const designSkills = [
    'UI Design',
    'UX Design',
    'Responsive Design',
    'Figma',
    'Adobe XD',
    'Photoshop',
    'Illustrator',
    'Wireframing',
    'Prototyping',
    'Animation',
    'Color Theory',
    'Typography',
  ];

  const skillsItems = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 50 },
    { name: 'React', level: 40 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Database', level: 65 },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's an overview of my
            technical and design capabilities.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mb-16">
          <AnimatedSection delay={0.2}>
            <div className="grid gap-6">
              {skillsItems.map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                      style={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="mb-10">
          <AnimatedSection delay={0.4}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Technical Skills
            </h3>
            <div className="overflow-hidden py-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
              <ScrollMarquee
                items={technicalSkills}
                speed={40}
                direction="left"
                className="py-2"
              />
            </div>
          </AnimatedSection>
        </div>

        <div>
          <AnimatedSection delay={0.6}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Design Skills
            </h3>
            <div className="overflow-hidden py-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
              <ScrollMarquee
                items={designSkills}
                speed={40}
                direction="right"
                className="py-2"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
