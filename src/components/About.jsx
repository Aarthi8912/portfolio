import "./About.css";
import {
  FaGraduationCap,
  FaBrain,
  FaChartLine,
  FaLaptopCode,
  FaAward,
  FaDownload
} from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-title">
        <span>Get To Know Me</span>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <div className="image-card">

            <img
              src="/images/profile.jpg"
              alt="Aarthi"
            />

            <div className="floating-badge badge1">
              AI/ML
            </div>

            <div className="floating-badge badge2">
              Data Analytics
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <h3>
            Turning Data into Intelligent Solutions 🚀
          </h3>

          <p>
            I'm Aarthi S, a B.Tech Information Technology student
            passionate about Data Analytics, Artificial Intelligence,
            Machine Learning, and Full Stack Development.

            I enjoy transforming raw data into meaningful insights
            and building intelligent systems that solve real-world
            business challenges through data-driven decision making.
          </p>

          {/* Highlights */}

          <div className="highlights">

            <div className="highlight">
              <FaGraduationCap />
              <span>B.Tech IT (Hons)</span>
            </div>

            <div className="highlight">
              <FaBrain />
              <span>AI / ML Engineer</span>
            </div>

            <div className="highlight">
              <FaChartLine />
              <span>Data Analyst</span>
            </div>

            <div className="highlight">
              <FaLaptopCode />
              <span>Web Developer</span>
            </div>

          </div>

          {/* Stats */}

          <div className="stats-grid">

            <div className="stat-card">
              <h3>8.77</h3>
              <p>CGPA</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>3+</h3>
              <p>Internships</p>
            </div>

            <div className="stat-card">
              <h3>6+</h3>
              <p>Certificates</p>
            </div>

          </div>

          {/* Achievement Card */}

          <div className="achievement-box">
            <FaAward className="award-icon" />

            <div>
              <h4>Career Goal</h4>

              <p>
                Aspiring Data Scientist focused on AI-driven
                analytics and intelligent business solutions.
              </p>
            </div>
          </div>

          <a
            href="/resume/Aarthi_S_Resume.pdf"
            download
            className="resume-download"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;