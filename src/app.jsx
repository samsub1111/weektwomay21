import "./app.css";

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#references">References</a>
            </li>
          </ul>
        </nav>
        <h1>John Doe</h1>
        <p>Full Stack Developer</p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I am John, a passionate full stack developer with experience
            in building web applications using modern technologies. I specialize
            in the MERN stack and have worked extensively in the healthcare and
            banking sectors, delivering scalable and user-centric solutions.
          </p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="experience">
            <h3>Senior Software Engineer at ABC Healthcare</h3>
            <p>March 2018 - December 2019</p>
            <ul>
              <li>
                Designed and developed healthcare web applications using the
                MERN stack.
              </li>
              <li>Ensured HIPAA compliance in all developed applications.</li>
              <li>
                Integrated machine learning models for predictive analytics.
              </li>
            </ul>
          </div>
          <div className="experience">
            <h3>Sr. React/Svelte Engineer at EnthuZiastic</h3>
            <p>March 2021 - January 2022</p>
            <ul>
              <li>
                Led the development of interactive web applications using React
                and Svelte.
              </li>
              <li>
                Collaborated with designers and product managers to deliver
                user-friendly interfaces.
              </li>
              <li>
                Optimized application performance and ensured responsive design.
              </li>
            </ul>
          </div>
          <div className="experience">
            <h3>Software Engineer III at XYZ Bank</h3>
            <p>January 2020 - Present</p>
            <ul>
              <li>
                Developed and maintained banking applications using Node.js and
                React.
              </li>
              <li>
                Led a team of developers to ensure timely delivery of projects.
              </li>
              <li>
                Implemented microservices architecture for scalable
                applications.
              </li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>
              <a href="https://healthcare-analytics.com" target="_blank">
                Healthcare Analytics Platform
              </a>
            </h3>
            <p>
              Developed a comprehensive healthcare analytics platform using the
              MERN stack. The platform integrates machine learning models to
              provide predictive analytics for patient health outcomes, enabling
              healthcare providers to make data-driven decisions.
            </p>
            <p>
              Key features include real-time data visualization, patient health
              monitoring dashboards, and predictive risk analysis. The platform
              has improved patient outcome predictions by 20%, contributing to
              more effective treatment plans and better patient care.
            </p>
          </div>
          <div className="project">
            <h3>
              <a href="https://banking-app-suite.com" target="_blank">
                Banking Application Suite
              </a>
            </h3>
            <p>
              Led the development of a suite of banking applications with a
              microservices architecture. This suite of applications enhances
              scalability and performance, ensuring robust security measures to
              protect sensitive financial data.
            </p>
            <p>
              The suite includes features like online account management, secure
              transaction processing, and personalized financial advice. By
              implementing these applications, transaction processing time was
              reduced by 30%, significantly improving user experience and
              operational efficiency.
            </p>
          </div>
          <div className="project">
            <h3>
              <a href="https://interactive-learning.com" target="_blank">
                Interactive Learning Portal
              </a>
            </h3>
            <p>
              Created an interactive learning portal for EnthuZiastic using
              React and Svelte. The portal provides users with a seamless and
              engaging educational experience, featuring interactive lessons,
              quizzes, and progress tracking.
            </p>
            <p>
              This project involved close collaboration with designers and
              educators to ensure the platform met user needs. The portal
              increased user engagement by 25%, offering a dynamic and
              responsive learning environment for students of all ages.
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Svelte</li>
            <li>HTML & CSS</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>AWS</li>
          </ul>
        </section>

        <section id="references">
          <h2>References</h2>
          <div className="reference">
            <h3>Jane Smith</h3>
            <p>Senior Manager at XYZ Bank</p>
            <p>Email: jane.smith@xyzbank.com</p>
          </div>
          <div className="reference">
            <h3>Michael Johnson</h3>
            <p>CTO at ABC Healthcare</p>
            <p>Email: michael.johnson@abchealthcare.com</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 John Doe</p>
      </footer>
    </div>
  );
}

export default App;
