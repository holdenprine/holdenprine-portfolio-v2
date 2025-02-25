'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const endpoint = '/api';
    console.log(`sending request to ${endpoint}`);
    

    try {
      const response = await fetch( endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('✅ Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed To Send Message');
      }
    } catch (error) {
      console.error('Frontend Error: ', error);
      setStatus('⚠️ Something went wrong. Please Try Again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-[var(--background)] p-6 rounded-lg shadow-md"
      >
        <h2 className="text-4xl text-[var(--text-color)] font-bold mb-4">
          Contact Me
        </h2>

        <div className="mb-4">
          <label className="block text-[var(--text-color)] text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[var(--text-color)] text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[var(--text-color)] text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-[var(--text-color)] px-4 py-2 rounded-lg hover:bg-[var(--button-hover)] ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </motion.form>

      {status && (
        <p className="text-center mt-4 text-lg text-[var(--text-color)]">
          {status}
        </p>
      )}
    </div>
  );
};
