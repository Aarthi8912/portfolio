
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-title">
        <span>My Work</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card featured">

          <span className="featured-badge">
            Featured
          </span>

          <img
            src="/projects/employee.png"
            alt="Employee Performance Prediction"
          />

          <div className="project-content">

            <h3>
              Employee Performance Prediction System
            </h3>

            <p>
              AI-powered HR Analytics platform that predicts
              employee performance and provides intelligent
              recommendations using Machine Learning.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>FlaskAPI</span>
              <span>Random Forest</span>
              <span>Streamlit</span>
              <span>MySQL</span>
            </div>

            <a
  href="https://github.com/Aarthi8912/Employee-Performance-Prediction"
  target="_blank"
  rel="noreferrer"
>
  <button>GitHub</button>
</a>

<a
  href="https://employee-performance-prediction-citrqqzzb7k4rl5eyfjkny.streamlit.app/"
  target="_blank"
  rel="noreferrer"
>
  <button className="demo-btn">
    Live Demo
  </button>
</a>
          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <img
            src="/projects/zomato.png"
            alt="Zomato Dashboard"
          />

          <div className="project-content">

            <h3>Zomato Restaurant Analytics & Customer Insights Dashboard</h3>

            <p>
              Power BI dashboard analyzing restaurant
              ratings, cuisines, customer behavior
              and market trends.
            </p>

            <div className="tech-stack">
              <span>Power BI</span>
              <span>SQL</span>
              <span>Excel</span>
              <span>Python</span>
            </div>

            <a
  href="https://github.com/Aarthi8912/zomato-analytics-project"
  target="_blank"
  rel="noreferrer"
>
  <button>GitHub</button>
</a>

<a
  href="https://zomato-analytics-project-erndvfqyg87y3vyxqd6dxn.streamlit.app/"
  target="_blank"
  rel="noreferrer"
>
  <button className="demo-btn">
    Dashboard
  </button>
</a>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <img
            src="/projects/nutrition.png"
            alt="Nutrition Prediction"
          />

          <div className="project-content">

            <h3>
              Nutritional Deficiency Prediction
            </h3>

            <p>
              Attention-Guided Denoising Autoencoder
              with Multi-Task Learning for predicting
              nutritional deficiencies.
            </p>

            <div className="tech-stack">
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>Deep Learning</span>
              <span>Python</span>
            </div>

            <a
  href="https://github.com/Aarthi8912/nutrient-deficiency-prediction"
  target="_blank"
  rel="noreferrer"
>
  <button>GitHub</button>
</a>

<a
  href="https://nutrient-deficiency-prediction-yaedfuhnkhefizxussgbdw.streamlit.app/"
  target="_blank"
  rel="noreferrer"
>
  <button className="demo-btn">
    Live Demo
  </button>
</a>

          </div>

        </div>

        {/* Project 4 */}

        <div className="project-card">

          <img
            src="/projects/portfolio.png"
            alt="Portfolio"
          />

          <div className="project-content">

            <h3>Premium Portfolio Website</h3>

            <p>
              Modern portfolio with glassmorphism,
              responsive UI, animations and
              interactive sections.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
  href="https://github.com/Aarthi8912/portfolio"
  target="_blank"
  rel="noreferrer"
>
  <button>GitHub</button>
</a>

<a
  href="/"
  target="_blank"
  rel="noreferrer"
>
  <button className="demo-btn">
    Portfolio
  </button>
</a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;