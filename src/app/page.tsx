"use client";
import Head from "next/head";
import "@/app/globals.css"
import { Header } from "../../components/Header";
import { Bio } from "../../components/Bio";
import { Projects } from "../../components/Projects";
import { ContactForm } from "../../components/ContactForm";
import NewTechStack from "../../components/NewTechStack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Holden Prines Web Development Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <main className="text-gray-900 min-h-screen">
        <div className="background-upper relative pt-24">
          <Header />
          <section id="bio" className="py-16">
            <Bio />
          </section>
            {/* ✅ Background grain layer fixed here */}
            <div className="background-lower"></div>
            <section id="tech-stack" className="py-16 bg-gray-100 relative z-10">
              <div className="relative z-10 flex flex-wrap gap-8 justify-center">
                <div className="sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
                  <NewTechStack />
                </div>
              </div>
            </section>
            <section id="projects">
             <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                  <Projects />
                </div>
            </section>            
            <section id="contact" className="py-16 bg-gray-100 relative z-10">
              <ContactForm />
            </section>
          </div>
      </main>
    </>
  );
}
