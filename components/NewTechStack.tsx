

const NewTechStack = () => {
  return (
    <>
    <div className="space-y-6 w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
      <div className="collapse bg-base-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Frontend</div>
        <div className="collapse-content space-y-2">
          <p>React</p>
          <p>React-Native</p>
          <p>Angular</p>
          <p>Typescript</p>
          <p>Next.js</p>
          <p>SCSS</p>
          <p>TailwindCSS</p>
          <p>Bootstrap</p>
          <p>DaisyUI</p>
        </div>
      </div>

      <div className="collapse bg-base-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Backend</div>
        <div className="collapse-content space-y-2">
          <p>Node</p>
          <p>Express.js</p>
          <p>Ruby on Rails</p>
          <p>Python</p>
          <p>Java</p>
          <p>postgreSQL</p>
          <p>MongoDB</p>
          <p>AWS</p>
        </div>
      </div>

      <div className="collapse bg-base-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Testing</div>
        <div className="collapse-content space-y-2">
          <p>Jest</p>
          <p>Playwright</p>
          <p>React-Testing-Library</p>
          <p>Active Record</p>
          <p>Cypress</p>
        </div>
      </div>

      <div className="collapse bg-base-200 p-4 rounded-lg shadow-md">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          CI/CD and Version Control
        </div>
        <div className="collapse-content space-y-2">
          <p>Git</p>
          <p>Bitbucket</p>
          <p>Atlassian Suite</p>
          <p>Heroku</p>
          <p>Docker</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewTechStack;
