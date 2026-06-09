import "./Achievements.css";

function Achievements() {

  const achievements = [

    {
      year: "2026",
      icon: "📖",
      title: "Research Paper Publication",
      desc: "Published research paper 'Denoising Autoencoder With Multi-Task Learning For Nutrient Deficiency Prediction For Women and Adolescents' at ICICSDF'26 Conference on 7 March 2026."
    },

    {
      year: "2025",
      icon: "💻",
      title: "Top Performer - Neo Codeathon",
      desc: "Recognized as Top Performer in September Month Edition 2025."
    },

    {
      year: "2024",
      icon: "🥈",
      title: "Elite + Silver - NPTEL",
      desc: "Data Science Using Python."
    },

    {
      year: "2024",
      icon: "🏅",
      title: "Elite - NPTEL",
      desc: "Programming in Java conducted by IIT Kharagpur."
    },

    {
      year: "2024",
      icon: "⭐",
      title: "HackerRank Skill Certificate",
      desc: "Java Basics Certification."
    },

    {
      year: "2024",
      icon: "🚀",
      title: "Zoho Creator Student Training",
      desc: "Young Creators Program Workshop."
    },

    {
      year: "2024",
      icon: "🥈",
      title: "Second Prize - Lyrical Hunt",
      desc: "Legacy-2024 State Level Intercollege Competition."
    },

    {
      year: "2024",
      icon: "📐",
      title: "Ramanujan Mathematical Competition",
      desc: "National Level Competition by ISTE Tamil Nadu."
    },

    {
      year: "2023",
      icon: "🥇",
      title: "First Prize - Beat The Bug",
      desc: "RIT Infotrix Association."
    },

    {
      year: "2023",
      icon: "🎯",
      title: "TECHFINIX'23 Symposium",
      desc: "National Level Technical Symposium."
    }

  ];

  return (
    <section className="achievements-section" id="achievements">

      <div className="section-title">
        <span>Recognition & Excellence</span>
        <h2>Achievements</h2>
      </div>

      {/* Featured Achievement */}

      <div className="featured-achievement">

        <div className="featured-icon">
          🏆
        </div>

        <div>
          <h3>Featured Achievement</h3>

          <h2>
            Research Paper Published at ICICSDF'26
          </h2>

          <p>
            Denoising Autoencoder With Multi-Task Learning
            For Nutrient Deficiency Prediction For Women
            and Adolescents
          </p>

          <span>
            Published on 7 March 2026
          </span>
        </div>

      </div>

      {/* Timeline */}

      <div className="timeline">

        {achievements.map((item, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-dot">
              {item.icon}
            </div>

            <div className="timeline-content">

              <span className="year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;