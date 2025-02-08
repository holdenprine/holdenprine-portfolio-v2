'use client';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export const Header = () => {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] py-4 px-8 fixed top-0 left-0 w-full shadow-md z-50">
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-center max-w-5xl mx-auto"
      >
        {/* <h1 className="text-2xl font-bold">Holden Prine</h1> */}
        <ul className="flex space-x-4">
          <li><Link href="#bio">Bio</Link></li>
          <li><Link href="#tech-stack">Tech Stack</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li>
            <a
              href="https://www.linkedin.com/in/holdenprine/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[var(--headertextcolor)] hover:text-blue-600 transition-colors"
            >
              <CiLinkedin />
            </a>
            </li>
            <li>
            <a
              href="https://github.com/holdenprine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-[var(--headertextcolor)] hover:text-blue-600 transition-colors"
            >
              <FiGithub />
            </a>
            </li>
        </ul>
      </motion.nav>
    </header>
  )
}

