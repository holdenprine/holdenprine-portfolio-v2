"use client";
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Bio } from '../../components/Bio';
import { TechStack } from '../../components/TechStack';
import { Projects } from '../../components/Projects';
import { ContactForm } from '../../components/ContactForm';
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Head>
        <title>Holden Prines Web Development Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio!" />
      </Head>

      <main className="bg-background text-gray-900 min-h-screen overflow-hidden">
        <Header />
        <section id="bio" className="py-16">
          <Bio />
        </section>
        <section id="tech-stack" className="py-16 bg-gray-100">
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Tech Stack Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <TechStack />
            </div>
            {/* Projects Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <Projects />
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-gray-100">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
