import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-title">
        <span>Academic Journey</span>
        <h2>Education</h2>
      </div>

      <div className="timeline">

        {/* College */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <div className="edu-image">
              <img
                src="/images/ramco.jpg"
                alt="Ramco Institute"
              />
            </div>

            <div className="edu-details">

              <span className="year">
                2022 - 2026
              </span>

              <h3>
                B.Tech Information Technology (Hons)
              </h3>

              <h4>
                Ramco Institute of Technology
              </h4>

              <p>
                CGPA : 8.77
              </p>

            </div>

          </div>

        </div>

        {/* HSC */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <div className="edu-image">
              <img
                src="/images/carm1.jpg"
                alt="HSC School"
              />
            </div>

            <div className="edu-details">

              <span className="year">
                2021 - 2022
              </span>

              <h3>
                Higher Secondary Education (HSC)
              </h3>

              <h4>
                C.A.R.M Higher Secondary School,
                Vilathikulam
              </h4>

              <p>
                Score : 88%
              </p>

            </div>

          </div>

        </div>

        {/* SSLC */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <div className="edu-image">
              <img
                src="/images/carm2.jpg"
                alt="SSLC School"
              />
            </div>

            <div className="edu-details">

              <span className="year">
                2019 - 2020
              </span>

              <h3>
                Secondary Education (SSLC)
              </h3>

              <h4>
                Maharajapuram Seeni Matriculation School,
                Nagalapuram
              </h4>

              <p>
                Score : 93.6%
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;