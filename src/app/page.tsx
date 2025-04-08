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

        {/* <meta name="description" content="Welcome to my personal portfolio!" /> */}
        <meta property="og:title"  content="Holden Prine: Full Stack Developer"/>
        <meta property="og:description" content="I&apos;m a Full Stack Developer specializing in Frontend and testing. I have
        a passion for user-first products that contribute to their given
        communities. Throughout my career, it has been my mission to be an
        integral part of the communities I serve, ensuring excellence and
        quality in the tools and projects I build."/>
        <meta property="og:image" content="public/HEADSHOT.JPG"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      </Head>
      <main className="text-gray-900 min-h-screen">
        <div className="background-upper relative pt-24">
          <Header />
          <section id="bio" className="py-16">
            <Bio />
          </section>
          </div>
            {/* ✅ Background grain layer fixed here */}
            {/* VERY BUGGED */}

            <div className="relative">
              <div className="background-lower absolute inset-0 -z-10"/>
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
              <div className="pt-[30px]"></div>  
            </section>
            </div>
            <div className="contact-bg-gradient relative z-20">            
            <section id="contact" className="py-16 min-h-screen relative z-10"> 
            <div className="pt-[30px]"></div>
                <ContactForm /> 
            </section>
          </div>
      </main>
    </>
  );
}
