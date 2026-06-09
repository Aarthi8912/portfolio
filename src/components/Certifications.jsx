import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">

      <div className="section-title">
        <span>Achievements & Learning</span>
        <h2>Certifications</h2>
      </div>

      <div className="cert-grid">

        {/* Certificate 1 */}

        <div className="cert-card">
          <img
            src="/certificates/nptel-dbms.jpg"
            alt="NPTEL DBMS"
          />

          <div className="cert-content">
            <h3>NPTEL DBMS</h3>

            <p>
              Elite Certification in Database
              Management Systems.
            </p>

            <span className="cert-badge">
              Elite
            </span>

            <a
              href="/certificates/nptel-dbms.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>

        {/* Certificate 2 */}

        <div className="cert-card">
          <img
            src="/certificates/nptel-java.jpg"
            alt="NPTEL Java"
          />

          <div className="cert-content">
            <h3>NPTEL Java</h3>

            <p>
              Elite Certification in Java
              Programming.
            </p>

            <span className="cert-badge">
              Elite
            </span>

            <a
              href="/certificates/nptel-java.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>

        {/* Certificate 3 */}

        <div className="cert-card">
          <img
            src="/certificates/ds.jpg"
            alt="Data Science"
          />

          <div className="cert-content">
            <h3>Python for Data Science</h3>

            <p>
              Data Analysis, Visualization
              and Machine Learning.
            </p>

            <span className="cert-badge">
              Professional
            </span>

            <a
              href="/certificates/ds.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>

        {/* Certificate 4 */}

        <div className="cert-card">
          <img
            src="/certificates/ai.jpg"
            alt="Artificial Intelligence"
          />

          <div className="cert-content">
            <h3>Artificial Intelligence Tutorial</h3>

            <p>
              Supervised and Unsupervised
              Learning Techniques.
            </p>

            <span className="cert-badge">
              Beginner
            </span>

            <a
              href="/certificates/ai.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>

        {/* Certificate 5 */}

        <div className="cert-card">
          <img
            src="/certificates/python.jpg"
            alt="Python"
          />

          <div className="cert-content">
            <h3>Python Basics</h3>

            <p>
              Dashboard Design and Business
              Intelligence Analytics.
            </p>

            <span className="cert-badge">
              Professional
            </span>

            <a
              href="/certificates/python.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>

        {/* Certificate 6 */}

        <div className="cert-card">
          <img
            src="/certificates/wipro.jpg"
            alt="Java"
          />

          <div className="cert-content">
            <h3>Java Certification</h3>

            <p>
              TalentNext Wipro Java Course Certification.
              
            </p>

            <span className="cert-badge">
              Advanced
            </span>

            <a
              href="/certificates/wipro.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Certifications;