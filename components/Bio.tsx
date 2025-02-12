"use client";
import React from "react";
import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-neutral-500 max-w-4xl mx-auto text-center py-16 px-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-h1 mb-4 text-neutral-100">
        Hello! I'm Holden Prine
      </h2>
      <p className="text-lg text-neutral-300 leading-relaxed">
        I’m a Full Stack Developer specializing in Frontend and testing. I have
        a passion for user-first products that contribute to their given
        communities. Throughout my career, it has been my mission to be an
        integral part of the communities I serve, ensuring excellence and
        quality in the tools and projects I build.
      </p>
    </motion.div>
  );
};

