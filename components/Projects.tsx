'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MAX_TILT_DEG = 9;

type Project = {
  title: string;
  link: string;
  description: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: 'HaloboyOfficial Website',
    link: 'https://haloboyofficial.com/',
    description:
      'A single page, interactive webapp built to promote content and music for the artist Halo Boy.',
    image: '/static/GearWatchTemp.jpeg',
  },
  // {
  //   title: 'Feel Safe Website',
  //   link: 'https://www.fightingfitnessinstitute.com/',
  //   description:
  //     'Built site on No-Code platform with some vanilla Javascript, HTML and CSS. Built project no longer live.',
  //   image: '/static/Title.jpeg',
  // },
  {
    title: 'Victorise MTB Site',
    link: 'https://www.mtbfantasyleague.com/#/home',
    description:
      'Worked on various components and rebuilt algorithm for racing simulation',
    image: '/static/vlogo.jpg',
  },
  {
    title: 'Müd Müzik',
    link: 'https://github.com/holdenprine/mood-music',
    description:
      'An end of bootcamp project showcasing full stack development capabilities through building a music curation app. Check the repo out below!',
    image: '/static/MoodMusic.jpeg',
  },
];

function ProjectCard({
  project,
  imagePriority,
}: {
  project: Project;
  imagePriority: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let disposed = false;
    let ctx: gsap.Context | undefined;
    let removeTiltListeners: (() => void) | undefined;

    void (async () => {
      const { gsap } = await import('gsap');
      if (disposed) return;

      const root = rootRef.current;
      if (!root) return;

      ctx = gsap.context(() => {
        gsap.set(root, {
          transformPerspective: 1000,
          transformOrigin: 'center center',
        });

        const rotateXTo = gsap.quickTo(root, 'rotationX', {
          duration: 0.65,
          ease: 'power3.out',
        });
        const rotateYTo = gsap.quickTo(root, 'rotationY', {
          duration: 0.65,
          ease: 'power3.out',
        });

        const onMove = (e: PointerEvent) => {
          if (e.pointerType === 'touch') return;

          const r = root.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;

          rotateYTo(nx * MAX_TILT_DEG);
          rotateXTo(-ny * MAX_TILT_DEG);
        };

        const onLeave = () => {
          rotateXTo(0);
          rotateYTo(0);
        };

        root.addEventListener('pointermove', onMove);
        root.addEventListener('pointerleave', onLeave);

        removeTiltListeners = () => {
          root.removeEventListener('pointermove', onMove);
          root.removeEventListener('pointerleave', onLeave);
        };
      }, root);
    })();

    return () => {
      disposed = true;
      removeTiltListeners?.();
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="bg-[var(--foreground)] text-black p-6 rounded-lg will-change-transform [transform-style:preserve-3d]"
    >
      <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="object-cover h-[250px] w-full rounded-t-lg"
            priority={imagePriority}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p className="text-left">{project.description}</p>
          <div className="card-actions justify-end">
            <a
              href={project.link}
              className="btn btn-primary bg-[#0b80a1] border-none hover:bg-gray-100 transition duration-200 ease-in-out text-center"
            >
              Check It Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl text-color-white font-bold mb-4 pt-[100px]">
          Projects
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <li key={project.title}>
              <ProjectCard project={project} imagePriority={index === 0} />
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="flex flex-col items-center mt-10">
        <h2>Check out this portfolio&apos;s repo here:</h2>
        <div className="pt-[20px]">
          <a
            href="https://github.com/holdenprine/holdenprine-portfolio-v2"
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-200 ease-in-out text-center"
          >
            Click Here
          </a>
        </div>
      </div>
    </>
  );
};
