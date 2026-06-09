import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-title">
        <span>Technical Expertise</span>
        <h2>Technology Galaxy</h2>
      </div>

      <div className="galaxy-container">

        <div className="center-core">
          <h3>AI / ML</h3>
          <p>Data Science</p>
        </div>

        <div className="orbit orbit1">
          <span className="planet python">Python</span>
          <span className="planet sql">SQL</span>
        </div>

        <div className="orbit orbit2">
          <span className="planet powerbi">Power BI</span>
          <span className="planet react">React</span>
        </div>

        <div className="orbit orbit3">
          <span className="planet flask">Flask</span>
          <span className="planet fastapi">FastAPI</span>
        </div>

        <div className="orbit orbit4">
          <span className="planet ml">Machine Learning</span>
          <span className="planet pandas">Pandas</span>
        </div>

        <div className="orbit orbit5">
          <span className="planet numpy">NumPy</span>
          <span className="planet mysql">MySQL</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;