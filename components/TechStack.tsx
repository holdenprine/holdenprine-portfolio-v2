'use client';
import React from 'react'
import { motion } from 'framer-motion';

export const TechStack = () => {
  const tech = ['Javascript', 'React', 'React-Native', 'Next.js', 'Tailwind CSS', 'Express.js', 'AWS', 'MongoDB', 'Playwright.js']
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
      {tech.map((tech, index) => (
        <motion.li
          key={index}
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold bg-[var(--foreground)] text-white px-4 py-2 rounded-lg shadow-md"
        >
          {tech}
        </motion.li>
      ))}
    </ul>
  </motion.div>
  )
}

