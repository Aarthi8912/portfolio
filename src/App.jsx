import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="tagline">
            Welcome to my Portfolio
          </p>

          <h1>
            Hi, I'm <span>Aarthi S</span>
          </h1>

          <h2>
            Data Analyst | AI/ML Engineer | Data Scientist
          </h2>

          <p className="description">
            Passionate about transforming data into meaningful
            insights and building intelligent solutions using
            Machine Learning, Data Analytics, Power BI, SQL,
            Python and Modern Web Technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects">
              <button>
                View Projects
              </button>
            </a>

            <a
              href="/resume/Aarthi_S_Resume.pdf"
              download
            >
              <button className="outline">
                Download Resume
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Education */}
      <Education />

      {/* Internship */}
      <Internship />

      {/* Certifications */}
      <Certifications />

      {/* Projects */}
      <Projects />

      {/* Achievements */}
      <Achievements />

      {/* Github Stats */}
      <GithubStats />

      {/* Contact */}
      <Contact />

      {/* Back To Top */}
      <BackToTop />

    </div>
  );
}

export default App;