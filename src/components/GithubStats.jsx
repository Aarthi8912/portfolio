import "./GithubStats.css";
import {
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaStar,
  FaDatabase
} from "react-icons/fa";

function GithubStats() {
  return (
    <section className="github-section" id="github">

      <div className="section-title">
        <span>Coding Journey</span>
        <h2>Developer Statistics</h2>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <FaGithub className="stat-icon" />
          <h3>10+</h3>
          <p>Repositories</p>
        </div>

        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <h3>5+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <FaLaptopCode className="stat-icon" />
          <h3>3+</h3>
          <p>Internships</p>
        </div>

        <div className="stat-card">
          <FaCode className="stat-icon" />
          <h3>5000+</h3>
          <p>Lines of Code</p>
        </div>

        <div className="stat-card">
          <FaDatabase className="stat-icon" />
          <h3>5+</h3>
          <p>Datasets Analyzed</p>
        </div>

        <div className="stat-card">
          <FaStar className="stat-icon" />
          <h3>8.77</h3>
          <p>Current CGPA</p>
        </div>

      </div>

      <div className="github-profile">

        <a
          href="https://github.com/Aarthi8912"
          target="_blank"
          rel="noreferrer"
        >
          Visit My GitHub Profile
        </a>

      </div>

    </section>
  );
}

export default GithubStats;