import Image from "next/image";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { Bio } from '../../components/Bio';
import { TechStack } from '../../components/TechStack';
import { Projects } from '../../components/Projects';
import { ContactForm } from '../../components/ContactForm';

export default function Home() {
  return (
    <>
       <Head>
        <title>Holden Prines Web Development Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio!" />
      </Head>
      <main className="bg-gray-50 text-gray-900 min-h-screen overflow-hidden">
        <Header />
        <section id="bio" className="py-16">
          <Bio />
        </section>
        <section id="tech-stack" className="py-16 bg-gray-100">
          <TechStack />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="contact" className="py-16 bg-gray-100">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
