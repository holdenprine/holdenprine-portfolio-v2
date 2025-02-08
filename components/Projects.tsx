'use client';
import React from 'react'
import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {title: 'Feel Safe Website', link: 'https://www.fightingfitnessinstitute.com/', description: 'Built site on No-Code platform with some vanilla Javascript, HTML and CSS.'},
    {title: 'Victorise MTB Site', link: 'https://www.mtbfantasyleague.com/#/home', description: 'Worked on various components and rebuilt algorithm for racing simulation'},
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl text-[var(--foreground)] font-bold mb-4">Projects</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[var(--foreground)] text-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-white-700">{project.description}</p>
            <a href={project.link} className="text-gray-500 hover:underline">
              View Project
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
