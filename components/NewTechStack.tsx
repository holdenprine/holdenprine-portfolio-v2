import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';

type IconModule = Record<string, IconType> & {
  default?: unknown;
};

const loadIcon = async (iconName: string): Promise<IconType | null> => {
  try {
    // extract prefixes of modules
    const prefix = iconName.slice(0,2);
    // bypasses some typing contraints for Promise -> throws a linter error but no greater issues in implementation -> still runs faster
    const moduleMap: Record<string, () => Promise<IconModule>> = {
      Fa: () => import('react-icons/fa'),
      Si: () => import('react-icons/si'),
      Bs: () => import('react-icons/bs'),
      Bi: () => import('react-icons/bi'),
      Ti: () => import('react-icons/ti'),
    }

    const moduleLoader = moduleMap[prefix];
    if(!moduleLoader) {
      console.warn(`No module found for prefix: ${prefix}`);
      return null;
    }

    const iconModule = (await moduleLoader()) as IconModule;
    return iconModule[iconName] || null;
  } catch(error) {
    console.error(`Error loading icon ${iconName}`, error);
    return null;
  }
};

const NewTechStack: React.FC = () => {
  const [icons, setIcons] = useState<Record<string, IconType | null>>({});

  useEffect(() => {
    const loadIcons = async () => {
      const iconNames = [
        'FaReact',
        'FaAngular',
        'SiTypescript',
        'SiJavascript',
        'BsFiletypeScss',
        'SiTailwindcss',
        'FaBootstrap',
        'SiDaisyui',
        'FaNodeJs',
        'SiExpress',
        'SiRubyonrails',
        'FaPython',
        'FaJava',
        'BiLogoPostgresql',
        'SiMongodb',
        'FaAws',
        'SiJest',
        'SiCypress',
        'FaGithubSquare',
        'FaBitbucket',
        'FaAtlassian',
        'SiHeroku',
        'FaDocker',
        'TiVendorMicrosoft',
      ];

      const loadedIcons: Record<string, IconType | null> = {};

      for (const icon of iconNames) {
        const iconComponent = await loadIcon(icon);
        loadedIcons[icon] = iconComponent;
      }

      setIcons(loadedIcons);
    };

    loadIcons();
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl text-color-white font-bold mb-4 pt-[100px] p-4">
        My Tech Stack
      </h2>
      <div className="space-y-6 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
        {/* Frontend */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Frontend</div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>
              React {icons.FaReact ? <React.Fragment>{<icons.FaReact />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Angular {icons.FaAngular ? <React.Fragment>{<icons.FaAngular />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Typescript {icons.SiTypescript ? <React.Fragment>{<icons.SiTypescript />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Javascript {icons.SiJavascript ? <React.Fragment>{<icons.SiJavascript />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              SCSS {icons.BsFiletypeScss ? <React.Fragment>{<icons.BsFiletypeScss />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              TailwindCSS {icons.SiTailwindcss ? <React.Fragment>{<icons.SiTailwindcss />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Bootstrap {icons.FaBootstrap ? <React.Fragment>{<icons.FaBootstrap />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              DaisyUI {icons.SiDaisyui ? <React.Fragment>{<icons.SiDaisyui />}</React.Fragment> : <span>Loading...</span>}
            </p>
          </div>
        </div>

        {/* Backend */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Backend</div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>
              Node {icons.FaNodeJs ? <React.Fragment>{<icons.FaNodeJs />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Express.js {icons.SiExpress ? <React.Fragment>{<icons.SiExpress />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Ruby on Rails {icons.SiRubyonrails ? <React.Fragment>{<icons.SiRubyonrails />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Python {icons.FaPython ? <React.Fragment>{<icons.FaPython />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Java {icons.FaJava ? <React.Fragment>{<icons.FaJava />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              PostgreSQL {icons.BiLogoPostgresql ? <React.Fragment>{<icons.BiLogoPostgresql />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              MongoDB {icons.SiMongodb ? <React.Fragment>{<icons.SiMongodb />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              AWS {icons.FaAws ? <React.Fragment>{<icons.FaAws />}</React.Fragment> : <span>Loading...</span>}
            </p>
          </div>
        </div>

        {/* Testing */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Testing</div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>
              Jest {icons.SiJest ? <React.Fragment>{<icons.SiJest />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              React-Testing-Library {icons.FaReact ? <React.Fragment>{<icons.FaReact />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Active Record {icons.SiRubyonrails ? <React.Fragment>{<icons.SiRubyonrails />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Cypress {icons.SiCypress ? <React.Fragment>{<icons.SiCypress />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Playwright {icons.TiVendorMicrosoft ? <React.Fragment>{<icons.TiVendorMicrosoft />}</React.Fragment> : <span>Loading...</span>}
            </p>
          </div>
        </div>

        {/* CI/CD and Version Control */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            CI/CD and Version Control
          </div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>
              Git {icons.FaGithubSquare ? <React.Fragment>{<icons.FaGithubSquare />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Bitbucket {icons.FaBitbucket ? <React.Fragment>{<icons.FaBitbucket />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Atlassian Suite {icons.FaAtlassian ? <React.Fragment>{<icons.FaAtlassian />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Heroku {icons.SiHeroku ? <React.Fragment>{<icons.SiHeroku />}</React.Fragment> : <span>Loading...</span>}
            </p>
            <p>
              Docker {icons.FaDocker ? <React.Fragment>{<icons.FaDocker />}</React.Fragment> : <span>Loading...</span>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTechStack;

