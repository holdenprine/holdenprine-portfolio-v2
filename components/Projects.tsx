'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      <h2 className="text-4xl text-[var(--foreground)] font-bold mb-4 pt-[100px]">Projects</h2>
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
        <h2>If you'd like to see the repo for this website, check it out here:</h2>
        <a href='https://github.com/holdenprine/holdenprine-portfolio-v2/tree/styling'>Click here</a>
      </ul>
    </motion.div>
  );
}
