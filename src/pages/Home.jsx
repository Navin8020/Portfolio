import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-v2">

      <div className="home-v2-container">

        {/* LEFT */}
        <div className="home-v2-left">

          <div className="home-v2-label">
            <span></span>
            WELCOME TO MY PORTFOLIO
          </div>

          <h1 className="home-v2-title">
            Hi, I'm
            <strong>Navinkumar D</strong>
          </h1>

          <h2 className="home-v2-subtitle">
            Computer Science Graduate &amp; Aspiring Software Developer
          </h2>

          <p className="home-v2-description">
            I am passionate about software development, modern web
            technologies, artificial intelligence, and machine learning.
            I enjoy creating practical applications that solve real-world
            problems.
          </p>

          <div className="home-v2-buttons">
            <Link to="/projects" className="home-v2-primary">
              View My Projects <span>↗</span>
            </Link>

            <Link to="/resume" className="home-v2-secondary">
              View Resume
            </Link>
          </div>

          <div className="home-v2-info">

            <div>
              <b>01</b>
              <span>Web Development</span>
            </div>

            <div>
              <b>02</b>
              <span>AI &amp; Machine Learning</span>
            </div>

            <div>
              <b>03</b>
              <span>Software Development</span>
            </div>

          </div>

        </div>


        {/* RIGHT */}
        <div className="home-v2-right">

          <div className="home-v2-glow"></div>

          <div className="home-v2-ring home-v2-ring-1"></div>
          <div className="home-v2-ring home-v2-ring-2"></div>

          <div className="home-v2-dot home-v2-dot-1"></div>
          <div className="home-v2-dot home-v2-dot-2"></div>

          <div className="home-v2-photo">

            <img
              src="/profile.png"
              alt="Navinkumar D"
            />

          </div>

          <div className="home-v2-badge">
            <span></span>
            Open to Opportunities
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;