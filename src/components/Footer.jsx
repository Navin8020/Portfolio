import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            NAVINKUMAR <span>D</span>
          </Link>

          <p>
            Computer Science Graduate & Aspiring Software Developer
          </p>

        </div>

        <div className="footer-navigation">

          <span>QUICK LINKS</span>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-socials">

          <span>CONNECT</span>

          <a
            href="https://github.com/Navin8020"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/navin-kumar-33b36b36a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Navinkumar D. All rights reserved.
        </p>

        <p>
          Built with React + Vite
        </p>

      </div>

    </footer>
  );
}

export default Footer;