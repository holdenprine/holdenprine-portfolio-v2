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

      <main className="text-gray-900 min-h-screen">
        <Header />
        <div className='background bg-gray-100 min-h-screen flex justify-center items-center'>
          {Array.from({length: 7}).map((_, i) => {
            return <span key={i} className='block w-10 h-10 bg-blue-500 m-2 rounded-lg'/>
          })}
        </div>
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
