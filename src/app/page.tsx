"use client";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Bio } from "../../components/Bio";
import { TechStack } from "../../components/TechStack";
import { Projects } from "../../components/Projects";
import { ContactForm } from "../../components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Holden Prines Web Development Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio!" />
      </Head>
      <main className="text-gray-900 min-h-screen">
        <div className="background-upper relative pt-24">
          <Header />
          <section id="bio" className="py-16">
            <Bio />
          </section>

          {/* Background with color and film grain effect wrapping multiple sections */}
          <div className="relative">
            {/* ✅ Background grain layer fixed here */}
            <div className="background-lower absolute inset-0 -z-10"></div>

            <section id="tech-stack" className="py-16 bg-gray-100 relative z-10">
              <div className="relative z-10 flex flex-wrap gap-8 justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                  <TechStack />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                  <Projects />
                </div>
              </div>
            </section>

            {/* Contact Form included within the background-lower effect */}
            <section id="contact" className="py-16 bg-gray-100 relative z-10">
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
