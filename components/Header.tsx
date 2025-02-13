'use client';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export const Header = () => {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] py-4 px-8 top-0 left-0 w-full shadow-md z-50">
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center w-full space-x-6"
      >
        {/* <h1 className="text-2xl font-bold">Holden Prine</h1> */}
        <ul className="flex space-x-4">
          <li className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition"><Link href="#bio">Bio</Link></li>
          <li className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition"><Link href="#tech-stack">Tech Stack</Link></li>
          <li className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition"><Link href="#projects">Projects</Link></li>
          <li className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition"><Link href="#contact">Contact</Link></li>
          <li className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition">
            <a
              href="https://www.linkedin.com/in/holdenprine/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[var(--headertextcolor)]"
            >
              <CiLinkedin />
            </a>
            </li>
            <li className="inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-200 transition">
            <a
              href="https://github.com/holdenprine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[var(--headertextcolor)]"
            >
              <FiGithub />
            </a>
            </li>
        </ul>
      </motion.nav>
    </header>
  )
}

