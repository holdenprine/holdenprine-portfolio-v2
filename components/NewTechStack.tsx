'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { IconType } from 'react-icons';

import {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithubSquare,
  FaBitbucket,
  FaAtlassian,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiRubyonrails,
  SiMongodb,
  SiJest,
  SiCypress,
  SiHeroku,
} from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TiVendorMicrosoft } from 'react-icons/ti';

const iconMap: Record<string, IconType> = {
  FaReact,
  FaAngular,
  SiTypescript,
  SiJavascript,
  BsFiletypeScss,
  SiTailwindcss,
  FaBootstrap,
  SiDaisyui,
  FaNodeJs,
  SiExpress,
  SiRubyonrails,
  FaPython,
  FaJava,
  BiLogoPostgresql,
  SiMongodb,
  FaAws,
  SiJest,
  SiCypress,
  FaGithubSquare,
  FaBitbucket,
  FaAtlassian,
  SiHeroku,
  FaDocker,
  TiVendorMicrosoft,
};

/** SplitText is Club-only; word spans + stagger match the same idea without the plugin. */
const WORD_SLIDE_X = 56;
const WORD_STAGGER = 0.07;
/** Doubled from initial 0.55s for a slower reveal. */
const SECTION_ANIM_DURATION = 1.1;
/** When top of block crosses this point while scrolling, enter “in view”. */
const TECH_STACK_SCROLL_START = 'top 80%';
/** When bottom of block clears the top of the viewport (scrolled past downward). Defines leave + re-enter zone with `start`. */
const TECH_STACK_SCROLL_END = 'bottom top';

function TechStackRow({ name, icon }: { name: string; icon: string }) {
  const IconComponent = iconMap[icon];

  const words = name.split(/\s+/).filter(Boolean);

  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="flex flex-wrap items-center gap-x-1.5">
        {words.map((word, i) => (
          <span
            key={`${name}-w-${i}`}
            data-tech-animate
            className="inline-block will-change-transform"
          >
            {word}
          </span>
        ))}
      </span>
      {IconComponent ? (
        <span
          data-tech-animate
          className="inline-flex will-change-transform items-center"
        >
          <IconComponent size={24} />
        </span>
      ) : (
        <span className="text-red-500">Icon not found</span>
      )}
    </p>
  );
}

const TECH_STACK_SECTIONS = [
  {
    title: 'Frontend',
    icons: [
      { name: 'React', icon: 'FaReact' },
      { name: 'Angular', icon: 'FaAngular' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'SCSS', icon: 'BsFiletypeScss' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Bootstrap', icon: 'FaBootstrap' },
      { name: 'DaisyUI', icon: 'SiDaisyui' },
    ],
  },
  {
    title: 'Backend',
    icons: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Express', icon: 'SiExpress' },
      { name: 'Ruby on Rails', icon: 'SiRubyonrails' },
      { name: 'Python', icon: 'FaPython' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'PostgreSQL', icon: 'BiLogoPostgresql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'AWS', icon: 'FaAws' },
    ],
  },
  {
    title: 'Testing',
    icons: [
      { name: 'Jest', icon: 'SiJest' },
      { name: 'React Testing Library', icon: 'FaReact' },
      { name: 'RSpec', icon: 'SiRubyonrails' },
      { name: 'Cypress', icon: 'SiCypress' },
      { name: 'Playwright', icon: 'TiVendorMicrosoft' },
    ],
  },
  {
    title: 'CI/CD and Version Control',
    icons: [
      { name: 'GitHub', icon: 'FaGithubSquare' },
      { name: 'Bitbucket', icon: 'FaBitbucket' },
      { name: 'Atlassian', icon: 'FaAtlassian' },
      { name: 'Heroku', icon: 'SiHeroku' },
      { name: 'Docker', icon: 'FaDocker' },
    ],
  },
] as const;

const NewTechStack: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let disposed = false;
    let ctx: gsap.Context | undefined;

    void (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (disposed) return;

      const root = sectionRef.current;
      if (!root) return;

      const targets = root.querySelectorAll<HTMLElement>('[data-tech-animate]');
      if (targets.length === 0) return;

      ctx = gsap.context(() => {
        gsap.from(targets, {
          x: WORD_SLIDE_X,
          opacity: 0,
          duration: SECTION_ANIM_DURATION,
          stagger: WORD_STAGGER,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root,
            start: TECH_STACK_SCROLL_START,
            end: TECH_STACK_SCROLL_END,
            toggleActions: 'play reset play reset',
          },
        });
      }, root);
    })();

    return () => {
      disposed = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <h2 className="text-center text-4xl text-color-white font-bold mb-4 pt-[100px] p-4">
        My Tech Stack
      </h2>
      <div className="space-y-6 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
        {TECH_STACK_SECTIONS.map(({ title, icons }) => (
          <div
            key={title}
            className="bg-gray-200 p-4 rounded-lg shadow-md space-y-4"
          >
            <h3 className="text-xl font-medium">{title}</h3>
            <div className="flex flex-wrap items-center gap-4">
              {icons.map((item) => (
                <TechStackRow
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTechStack;
