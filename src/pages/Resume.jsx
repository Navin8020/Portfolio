function Resume() {
  return (
    <section className="page-section resume-page">

      {/* HEADER */}
      <div className="resume-header">

        <p className="small-title">
          MY RESUME
        </p>

        <h1>
          My professional
          <span> profile.</span>
        </h1>

        <p>
          Explore my resume to learn more about my education, technical
          skills, projects, and career interests.
        </p>

      </div>


      {/* RESUME CONTENT */}
      <div className="resume-layout">

        {/* LEFT SIDE */}
        <div className="resume-info">

          {/* RESUME CARD */}
          <div className="resume-card">

            <span className="resume-number">
              01
            </span>

            <h2>
              Resume
            </h2>

            <p>
              My latest resume contains information about my academic
              background, technical skills, projects, and professional
              interests.
            </p>

            <div className="resume-actions">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                View Resume ↗
              </a>

              <a
                href="/resume.pdf"
                download
                className="secondary-button"
              >
                Download PDF ↓
              </a>

            </div>

          </div>


          {/* CAREER FOCUS */}
          <div className="resume-card resume-highlight">

            <span className="resume-number">
              02
            </span>

            <h2>
              Career Focus
            </h2>

            <p>
              Interested in opportunities related to software development,
              web development, artificial intelligence, and machine
              learning.
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="resume-preview">

          <div className="preview-top">

            <span>
              RESUME.PDF
            </span>

            <span className="preview-status">
              Available
            </span>

          </div>


          <div className="preview-content">

            <div className="preview-icon">
              PDF
            </div>

            <h2>
              Navinkumar D
            </h2>

            <p>
              Computer Science Graduate
            </p>


            <div className="preview-lines">

              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>


            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Open Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;