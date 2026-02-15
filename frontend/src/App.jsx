import { ArrowRight } from "lucide-react";
import logo from "./assets/aegislogo.jpeg"; 
import "./index.css";

export default function AegisLandingPage() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src={logo}
              alt="AEGIS logo"
              className="logo-img"
            />

            <span>AEGIS</span>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#domains">Domains</a>
            <a href="#join">Join</a>
          </div>

          <button className="primary-btn small">Apply Now</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Building the Future of
            <span> Cybersecurity</span>
          </h1>

          <p>
            AEGIS is the cybersecurity club of SRMIST Delhi NCR, focused on
            real-world skills, competitions, and research-driven learning.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started <ArrowRight size={16} />
            </button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="stat">
            <h2>50+</h2>
            <p>Members</p>
          </div>
          <div className="stat">
            <h2>20+</h2>
            <p>Workshops</p>
          </div>
          <div className="stat">
            <h2>10+</h2>
            <p>CTFs</p>
          </div>
          <div className="stat">
            <h2>5+</h2>
            <p>Projects</p>
          </div>
        </div>
      </section>

      <section id="about" className="section light">
        <h2>Why AEGIS?</h2>
        <p>
        We deliver comprehensive, structured cybersecurity training that integrates industry-aligned instruction with immersive,
        hands-on experience and collaborative learning. Our approach ensures participants develop both the technical expertise and practical skills required to address real-world security challenges with confidence.
        </p>
      </section>

      <section id="join" className="cta">
        <h2>Join the AEGIS Community</h2>
        <p>Be part of something impactful at SRMIST Delhi NCR.</p>
        <button className="primary-btn">Apply Today</button>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} AEGIS Cybersecurity Club | SRMIST Delhi NCR
      </footer>
    </div>
  );
}
