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

// variable statements set type of icons as react function components
const ReactIcon = FaReact as unknown as React.FC;
const AngularIcon = FaAngular as unknown as React.FC;
const TsIcon = SiTypescript as unknown as React.FC;
const JsIcon = SiJavascript as unknown as React.FC;
const ScssIcon = BsFiletypeScss as unknown as React.FC;
const TailwindIcon = SiTailwindcss as unknown as React.FC;
const BootstrapIcon = FaBootstrap as unknown as React.FC;
const DaisyIcon = SiDaisyui as unknown as React.FC;
const NodeIcon = FaNodeJs as unknown as React.FC;
const ExpressIcon = SiExpress as unknown as React.FC;
const RubyOnRailsIcon = SiRubyonrails as unknown as React.FC;
const PyIcon = FaPython as unknown as React.FC;
const JavaIcon = FaJava as unknown as React.FC;
const SQLIcon = BiLogoPostgresql as unknown as React.FC;
const MongoIcon = SiMongodb as unknown as React.FC;
const AWSIcon = FaAws as unknown as React.FC;
const JestIcon = SiJest as unknown as React.FC;
const CypressIcon = SiCypress as unknown as React.FC;
const GitIcon = FaGithubSquare as unknown as React.FC;
const BitbucketIcon = FaBitbucket as unknown as React.FC;
const AtlassianIcon = FaAtlassian as unknown as React.FC;
const HerokuIcon = SiHeroku as unknown as React.FC;
const DockerIcon = FaDocker as unknown as React.FC;

const NewTechStack = () => {
  return (
    <>
    <h2 className="text-center text-4xl text-color-white font-bold mb-4 pt-[100px] p-4">My Tech Stack</h2>
    <div className="space-y-6 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
      <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Frontend</div>
        <div className="collapse-content space-y-2">
          <p>React <span className="inline-block ml-2"> <ReactIcon /> </span></p>
          <p>React-Native <span className="inline-block ml-2"> <ReactIcon /> </span> </p>
          <p>Angular <span className="inline-block ml-2"> <AngularIcon /> </span> </p>
          <p>Typescript <span className="inline-block ml-2"> <TsIcon /> </span> </p>
          <p>Next.js <span className="inline-block ml-2"> <JsIcon /> </span></p>
          <p>SCSS<span className="inline-block ml-2"> <ScssIcon /> </span></p>
          <p>TailwindCSS<span className="inline-block ml-2"> <TailwindIcon /> </span></p>
          <p>Bootstrap<span className="inline-block ml-2"> <BootstrapIcon /> </span></p>
          <p>DaisyUI<span className="inline-block ml-2"> <DaisyIcon /> </span></p>
        </div>
      </div>

      <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Backend</div>
        <div className="collapse-content space-y-2">
          <p>Node<span className="inline-block ml-2"> <NodeIcon /> </span></p>
          <p>Express.js<span className="inline-block ml-2"> <ExpressIcon /> </span></p>
          <p>Ruby on Rails<span className="inline-block ml-2"> <RubyOnRailsIcon /> </span></p>
          <p>Python<span className="inline-block ml-2"> <PyIcon /> </span></p>
          <p>Java<span className="inline-block ml-2"> <JavaIcon /> </span></p>
          <p>postgreSQL<span className="inline-block ml-2"> <SQLIcon /> </span></p>
          <p>MongoDB<span className="inline-block ml-2"> <MongoIcon /> </span></p>
          <p>AWS<span className="inline-block ml-2"> <AWSIcon /> </span></p>
        </div>
      </div>

      <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Testing</div>
        <div className="collapse-content space-y-2">
          <p>Jest<span className="inline-block ml-2"> <JestIcon /> </span></p>
          {/* need the .ico for Playwright */}
          <p>Playwright <span><img src="public/static/playwright_logo_icon_248827.ico" alt="Playwright icon" className="w-6 h-6"/></span></p>
          <p>React-Testing-Library<span className="inline-block ml-2"> <ReactIcon /> </span></p>
          <p>Active Record<span className="inline-block ml-2"> <RubyOnRailsIcon /> </span></p>
          <p>Cypress<span className="inline-block ml-2"> <CypressIcon /> </span></p>
        </div>
      </div>

      <div className="collapse bg-gray-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          CI/CD and Version Control
        </div>
        <div className="collapse-content space-y-2">
          <p>Git<span className="inline-block ml-2"> <GitIcon /> </span></p>
          <p>Bitbucket<span className="inline-block ml-2"> <BitbucketIcon /> </span></p>
          <p>Atlassian Suite<span className="inline-block ml-2"> <AtlassianIcon /> </span></p>
          <p>Heroku<span className="inline-block ml-2"> <HerokuIcon /> </span></p>
          <p>Docker<span className="inline-block ml-2"> <DockerIcon /> </span></p>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewTechStack;
