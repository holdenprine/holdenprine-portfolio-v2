'use client';
import React from 'react'
import { motion } from 'framer-motion';

export const ContactForm = () => {
  return (
    <motion.form 
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto bg-[var(--background)] p-6 rounded-lg shadow-md"
  >
    <h2 className="text-4xl text-white font-bold mb-4">Contact Me</h2>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-lg"
        placeholder="Your Name"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        className="w-full px-3 py-2 border rounded-lg"
        placeholder="Your Email"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
      <textarea
        className="w-full px-3 py-2 border rounded-lg"
        rows={4}
        placeholder="Your Message"
      />
    </div>
    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-forest">
      Send
    </button>
  </motion.form>
  )
}
