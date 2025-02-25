"use client";
import React from "react";
import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <>
    {/* spacing for better DOM comp */}
    <div className="pt-[30px]"></div>
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-200 max-w-4xl mx-auto text-center py-16 px-6 rounded-2xl shadow-lg pt-[50px]"
    >
      <h2 className="text-h1 text-neutral-600 font-bold mb-4 text-neutral-100">
        Hello! I&apos;m Holden Prine
      </h2>
      <p className="text-lg text-neutral-600 leading-relaxed">
        I&apos;m a Full Stack Developer specializing in Frontend and testing. I have
        a passion for user-first products that contribute to their given
        communities. Throughout my career, it has been my mission to be an
        integral part of the communities I serve, ensuring excellence and
        quality in the tools and projects I build.
      </p>
    </motion.div>
    </>
  );
};

