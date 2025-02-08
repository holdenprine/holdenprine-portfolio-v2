'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TechStack = () => {
  const techCatagories = {
    Frontend: ['React', 'React-Native', 'Angular', 'Next.js', 'Tailwind.css', 'Mantine', 'Electron.js'],
    Backend: ['Node', 'Express.js', 'Java', 'Python', 'Ruby on Rails', 'postgreSQL', 'MongoDB', 'AWS'],
    Testing: ['Jest', 'Playwright', 'React-Testing-Library', 'Active Record'],
    'CI/CD': ['Git', 'Bitbucket', 'Atlassian Suite', 'Heroku', 'Docker']
  };

  const [openCategory, setOpenCategory] = useState(null);
  const containerRefs = useRef([]);

  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const container = containerRefs.current.find(ref => ref && ref.contains(event.target));
      if (!container) {
        setOpenCategory(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center text-[var(--foreground)]"
    >
      <h2 className="text-4xl font-bold mb-4">Languages, Libraries and More</h2>
      <ul className="flex flex-wrap justify-center gap-6">
        {Object.entries(techCatagories).map(([category, items], index) => (
          <li key={index} className="relative" ref={(el) => (containerRefs.current[index] = el)}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer text-lg font-semibold bg-[var(--foreground)] text-white px-6 py-3 rounded-lg shadow-md"
              onClick={() => handleToggle(category)}
            >
              {category.replace('_', ' ')}
            </motion.div>

            {openCategory === category && (
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-200 text-black p-6 rounded-xl shadow-xl transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm font-medium">
                  {items.map((item, i) => (
                    <span key={i} className="block flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
                      <span>{item}</span>
                    </span>
                  ))}
                </p>
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
