import "./Internship.css";

function Internship() {
  return (
    <section className="internship-section" id="internship">

      <div className="section-title">
        <span>Professional Experience</span>
        <h2>Internships</h2>
      </div>

      <div className="certificate-grid">

        {/* InternPe */}

        <div className="certificate-card">

          <img
            src="/certificates/internpe.jpg"
            alt="InternPe Certificate"
          />

          <div className="certificate-content">

            <h3>AI / ML Intern</h3>

            <h4>InternPe</h4>

            <p>
              Worked on Machine Learning,
              Data Analysis and Predictive Models.
            </p>

            <a
    href="/certificates/internpe.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="view-btn"
  >
    View Certificate
  </a>

          </div>

        </div>

        {/* Astro */}

        <div className="certificate-card">

          <img
            src="/certificates/astro.jpg"
            alt="Astro Certificate"
          />

          <div className="certificate-content">

            <h3>Full Stack Developer Intern</h3>

            <h4>Astro Web Solution</h4>

            <p>
              Developed responsive websites,
              APIs and database integration.
            </p>

             <a
    href="/certificates/astro.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="view-btn"
  >
    View Certificate
  </a>

          </div>

        </div>

        <div className="certificate-card">

          <img
            src="/certificates/techno.jpg"
            alt="Techno Certificate"
          />

          <div className="certificate-content">

            <h3>Web Developer Intern</h3>

            <h4>TECHNOHACKS SOLUTIONS PVT.LTD</h4>

            <p> Skilled in creating interactive and visually appealing websites using modern web technologies.
              
    
            </p>

             <a
    href="/certificates/techno.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="view-btn"
  >
    View Certificate
  </a>

          </div>

        </div>

        {/* Third Internship */}

        <div className="certificate-card">

          <img
            src="/certificates/intern3.jpg"
            alt="Internship Certificate"
          />

          <div className="certificate-content">

            <h3>Data Scientist Intern</h3>

            <h4>SOURCESYS TECHNOLOGIES PVT.LTD.</h4>

            <p>
              Focused on solving real-world problems through analytics and machine learning
            </p>

            <a
    href="/certificates/intern3.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="view-btn"
  >
    View Certificate
  </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Internship;