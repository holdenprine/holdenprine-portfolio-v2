'use client';
import React from 'react'
import { motion } from 'framer-motion';

export const Bio = () => {
  return (
    <motion.div 
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto text-center pt-16"
  >
    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Hello! I'm Holden Prine</h2>
    <p className="text-lg">
      I’m a Full stack developer specializing in Frontend and testing. I have a passion for user-first products that contribute to their given communities. Throughout my career its been my mission to be an integral part of the communities I serve, ensuring excellence and quality in the tools and projects I build.
    </p>
  </motion.div>
  )
}

