'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      title: 'Feel Safe Website',
      link: 'https://www.fightingfitnessinstitute.com/',
      description:
        'Built site on No-Code platform with some vanilla Javascript, HTML and CSS.',
      image: '/static/Title.jpeg',
    },
    {
      title: 'Victorise MTB Site',
      link: 'https://www.mtbfantasyleague.com/#/home',
      description:
        'Worked on various components and rebuilt algorithm for racing simulation',
      image: '/static/vlogo.jpg',
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl text-color-white font-bold mb-4 pt-[100px]">
          Projects
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--foreground)] text-black p-6 rounded-lg"
            >
              {/* <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-white-700">{project.description}</p>
            <a href={project.link} className="text-gray-500 hover:underline">
              View Project
            </a> */}
              <div className="card card-compact bg-base-100 w-full shadow-xl">
                <figure>
                  <Image 
                    src={project.image}
                    alt="Project Card"
                    width={400}
                    height={250}
                    className="object-cover rounded-t-lg"
                    priority
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="text-left">{project.description}</p>
                  <div className="card-actions justify-end">
                    <a href={project.link} className='btn btn-primary hover:bg-gray-300 transition duration-200 ease-in-out text-center'>Check It Out</a>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div className="flex flex-col items-center mt-10">
        <h2>Check out the repo for this site here:</h2>
        <div className="pt-[20px]">
          <a
            href="https://github.com/holdenprine/holdenprine-portfolio-v2"
            className="px-3 py-2 rounded-md bg-gray-200 hover: bg-gray-300 transition duration-200 ease-in-out text-center"
          >
            Click Here
          </a>
        </div>
      </div>
    </>
  );
};
