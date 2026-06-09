import "./Contact.css";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-title">
        <span>Let's Connect</span>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-grid">

        {/* Email */}

        <a
          href="mailto:aarthia776@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <p>
            aarthia776@gmail.com
          </p>
        </a>

        {/* LinkedIn */}

        <a
          href="https://linkedin.com/in/s-aarthi-825a29262"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <p>
            Connect Professionally
          </p>
        </a>

        {/* GitHub */}

        <a
          href="https://github.com/Aarthi8912"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <p>
            View My Repositories
          </p>
        </a>

        {/* Phone */}

        <a
          href="tel:+916385481983"
          className="contact-card"
        >
          <FaPhoneAlt className="contact-icon" />

          <h3>Phone</h3>

          <p>
            +91 6385481983
          </p>
        </a>

        {/* Location */}

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <p>
            Vilathikulam,Thoothukudi District,Tamil Nadu, India
          </p>
        </div>

        {/* Hire Me */}

        <a
          href="mailto:aarthia776@gmail.com"
          className="contact-card hire-card"
        >
          <FaPaperPlane className="contact-icon" />

          <h3>Hire Me</h3>

          <p>
            Available for Opportunities
          </p>
        </a>

      </div>

    </section>
  );
}

export default Contact;