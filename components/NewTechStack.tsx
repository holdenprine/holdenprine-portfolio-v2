import React from 'react';
import { IconType } from 'react-icons';

// Explicit imports for TypeScript compatibility
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

// Updated iconMap with explicit types
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

const renderIcons = (icons: { name: string; icon: string }[]) => (
  <div className="flex flex-wrap items-center gap-4">
    {icons.map(({ name, icon }) => {
      const IconComponent = iconMap[icon];
      return (
        <p key={name} className="flex items-center gap-2">
          <span className="text-sm font-semibold">{name}</span>
          {IconComponent ? (
            <IconComponent size={24} />
          ) : (
            <span className="text-red-500">Icon not found</span>
          )}
        </p>
      );
    })}
  </div>
);

const NewTechStack: React.FC = () => (
  <>
    <h2 className="text-center text-4xl text-color-white font-bold mb-4 pt-[100px] p-4">
      My Tech Stack
    </h2>
    <div className="space-y-6 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
      {[
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
      ].map(({ title, icons }) => (
        <div
          key={title}
          className="collapse bg-gray-200 p-4 rounded-lg shadow-md"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{title}</div>
          <div className="collapse-content">{renderIcons(icons)}</div>
        </div>
      ))}
    </div>
  </>
);

export default NewTechStack;
