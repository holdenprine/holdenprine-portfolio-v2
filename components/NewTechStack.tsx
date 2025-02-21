import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";

// Variables for icon components
const ReactIcon: React.FC = FaReact as React.FC;
const AngularIcon: React.FC = FaAngular as React.FC;
const TsIcon: React.FC = SiTypescript as React.FC;
const JsIcon: React.FC = SiJavascript as React.FC;
const ScssIcon: React.FC = BsFiletypeScss as React.FC;
const TailwindIcon: React.FC = SiTailwindcss as React.FC;
const BootstrapIcon: React.FC = FaBootstrap as React.FC;
const DaisyIcon: React.FC = SiDaisyui as React.FC;
const NodeIcon: React.FC = FaNodeJs as React.FC;
const ExpressIcon: React.FC = SiExpress as React.FC;
const RubyOnRailsIcon: React.FC = SiRubyonrails as React.FC;
const PyIcon: React.FC = FaPython as React.FC;
const JavaIcon: React.FC = FaJava as React.FC;
const SQLIcon: React.FC = BiLogoPostgresql as React.FC;
const MongoIcon: React.FC = SiMongodb as React.FC;
const AWSIcon: React.FC = FaAws as React.FC;
const JestIcon: React.FC = SiJest as React.FC;
const CypressIcon: React.FC = SiCypress as React.FC;
const GitIcon: React.FC = FaGithubSquare as React.FC;
const BitbucketIcon: React.FC = FaBitbucket as React.FC;
const AtlassianIcon: React.FC = FaAtlassian as React.FC;
const HerokuIcon: React.FC = SiHeroku as React.FC;
const DockerIcon: React.FC = FaDocker as React.FC;
const PlaywrightIcon: React.FC = TiVendorMicrosoft as React.FC;

const NewTechStack: React.FC = () => {
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
            <p>React <ReactIcon /></p>
            <p>React-Native <ReactIcon /></p>
            <p>Angular <AngularIcon /></p>
            <p>Typescript <TsIcon /></p>
            <p>Next.js <JsIcon /></p>
            <p>SCSS <ScssIcon /></p>
            <p>TailwindCSS <TailwindIcon /></p>
            <p>Bootstrap <BootstrapIcon /></p>
            <p>DaisyUI <DaisyIcon /></p>
          </div>
        </div>

        {/* Backend */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Backend</div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>Node <NodeIcon /></p>
            <p>Express.js <ExpressIcon /></p>
            <p>Ruby on Rails <RubyOnRailsIcon /></p>
            <p>Python <PyIcon /></p>
            <p>Java <JavaIcon /></p>
            <p>postgreSQL <SQLIcon /></p>
            <p>MongoDB <MongoIcon /></p>
            <p>AWS <AWSIcon /></p>
          </div>
        </div>

        {/* Testing */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Testing</div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>Jest <JestIcon /></p>
            <p>React-Testing-Library <ReactIcon /></p>
            <p>Active Record <RubyOnRailsIcon /></p>
            <p>Cypress <CypressIcon /></p>
            <p>Playwright <PlaywrightIcon /></p>
          </div>
        </div>

        {/* CI/CD and Version Control */}
        <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            CI/CD and Version Control
          </div>
          <div className="collapse-content flex flex-wrap items-center gap-4">
            <p>Git <GitIcon /></p>
            <p>Bitbucket <BitbucketIcon /></p>
            <p>Atlassian Suite <AtlassianIcon /></p>
            <p>Heroku <HerokuIcon /></p>
            <p>Docker <DockerIcon /></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTechStack;

