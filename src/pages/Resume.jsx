function Resume() {
  return (
    <section className="resume-v2">
      <div className="resume-v2-container">

        {/* HEADER */}
        <div className="resume-v2-header">

          <div className="resume-v2-label">
            <span></span>
            MY RESUME
          </div>

          <h1>
            My professional
            <strong>profile.</strong>
          </h1>

          <p>
            Explore my resume to learn more about my education, technical
            skills, projects, and career interests.
          </p>

        </div>


        {/* MAIN CONTENT */}
        <div className="resume-v2-grid">

          {/* LEFT SIDE */}
          <div className="resume-v2-left">

            {/* RESUME CARD */}
            <article className="resume-v2-card">

              <div className="resume-v2-card-top">

                <span className="resume-v2-number">
                  01
                </span>

                <span className="resume-v2-arrow">
                  ↗
                </span>

              </div>

              <h2>
                Resume
              </h2>

              <p>
                My resume provides an overview of my academic background,
                technical skills, projects, and career interests as a
                Computer Science graduate.
              </p>

              <div className="resume-v2-actions">

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-primary-button"
                >
                  View Resume ↗
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="resume-secondary-button"
                >
                  Download PDF ↓
                </a>

              </div>

            </article>


            {/* EDUCATION */}
            <article className="resume-v2-card">

              <div className="resume-v2-card-top">

                <span className="resume-v2-number">
                  02
                </span>

                <span className="resume-v2-section-label">
                  EDUCATION
                </span>

              </div>

              <div className="resume-education">

                <div className="resume-education-item">

                  <div className="resume-timeline-dot"></div>

                  <div>
                    <span className="resume-item-label">
                      B.Sc. COMPUTER SCIENCE
                    </span>

                    <h3>
                      Kalsalingam Academy Of Research And Education
                    </h3>

                    <p>
                      2026 · CGPA 7.9 / 10
                    </p>
                  </div>

                </div>


                <div className="resume-education-item">

                  <div className="resume-timeline-dot"></div>

                  <div>
                    <span className="resume-item-label">
                      HIGHER SECONDARY EDUCATION
                    </span>

                    <h3>
                      Government Higher Secondary School
                    </h3>

                    <p>
                      2023 · 64%
                    </p>
                  </div>

                </div>


                <div className="resume-education-item last">

                  <div className="resume-timeline-dot"></div>

                  <div>
                    <span className="resume-item-label">
                      SECONDARY EDUCATION
                    </span>

                    <h3>
                      Government Higher Secondary School
                    </h3>

                    <p>
                      2021 · Percentage: NA
                    </p>
                  </div>

                </div>

              </div>

            </article>


            {/* CAREER FOCUS */}
            <article className="resume-v2-card resume-focus-card">

              <div className="resume-v2-card-top">

                <span className="resume-v2-number">
                  03
                </span>

                <span className="resume-v2-section-label">
                  CAREER FOCUS
                </span>

              </div>

              <h2>
                Building & learning.
              </h2>

              <p>
                Interested in opportunities related to software development,
                web development, artificial intelligence, and machine
                learning. I aim to apply my technical knowledge to practical
                software projects while continuously developing my skills.
              </p>

              <div className="resume-focus-tags">
                <span>Software Development</span>
                <span>Web Development</span>
                <span>AI / ML</span>
                <span>Problem Solving</span>
              </div>

            </article>

          </div>


          {/* RIGHT SIDE */}
          <aside className="resume-v2-right">

            <div className="resume-document">

              <div className="resume-document-top">

                <span>
                  RESUME.PDF
                </span>

                <span className="resume-available">
                  Available
                </span>

              </div>


              <div className="resume-document-body">

                <div className="resume-pdf-icon">
                  PDF
                </div>

                <span className="resume-document-label">
                  PROFESSIONAL PROFILE
                </span>

                <h2>
                  Navinkumar D
                </h2>

                <p>
                  Computer Science Graduate
                </p>


                <div className="resume-document-lines">

                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>

                </div>


                <div className="resume-document-details">

                  <div>
                    <span>EDUCATION</span>
                    <strong>B.Sc. Computer Science</strong>
                  </div>

                  <div>
                    <span>FOCUS</span>
                    <strong>Software Development</strong>
                  </div>

                </div>


                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-open-button"
                >
                  Open Resume ↗
                </a>

              </div>

            </div>


            {/* QUICK INFO */}
            <div className="resume-quick-card">

              <span>
                QUICK INFO
              </span>

              <div className="resume-quick-item">
                <strong>01</strong>
                <p>
                  Computer Science Graduate
                </p>
              </div>

              <div className="resume-quick-item">
                <strong>02</strong>
                <p>
                  Web & Software Development
                </p>
              </div>

              <div className="resume-quick-item">
                <strong>03</strong>
                <p>
                  AI & Machine Learning
                </p>
              </div>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}

export default Resume;