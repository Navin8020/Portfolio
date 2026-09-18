import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">

      {/* LEFT SIDE */}
      <div className="home-content">

        <p className="small-title">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Navinkumar D</span>
        </h1>

        <h2>
          Computer Science Graduate & Aspiring Software Developer
        </h2>

        <p className="home-description">
          I am passionate about software development, modern web
          technologies, artificial intelligence, and machine learning.
          I enjoy creating practical applications that solve real-world
          problems.
        </p>

        {/* BUTTONS */}
        <div className="home-buttons">

          <Link
            to="/projects"
            className="primary-button"
          >
            View My Projects ↗
          </Link>

          <Link
            to="/resume"
            className="secondary-button"
          >
            View Resume
          </Link>

        </div>

        {/* QUICK INFO */}
        <div className="home-info">

          <div className="info-item">
            <strong>01</strong>
            <span>Web Development</span>
          </div>

          <div className="info-item">
            <strong>02</strong>
            <span>AI & Machine Learning</span>
          </div>

          <div className="info-item">
            <strong>03</strong>
            <span>Software Development</span>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="home-image">

        <div className="profile-decoration"></div>

        <img
          src="/profile.png"
          alt="Navinkumar D"
        />

        <div className="profile-badge">
          <span className="status-dot"></span>
          Open to Opportunities
        </div>

      </div>

    </section>
  );
}

export default Home;