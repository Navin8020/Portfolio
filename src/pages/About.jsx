function About() {
  return (
    <section className="about-v2">

      <div className="about-v2-container">

        {/* HEADER */}
        <div className="about-v2-header">

          <div className="about-v2-label">
            <span></span>
            ABOUT ME
          </div>

          <h1 className="about-v2-title">
            Computer Science graduate
            <strong>building practical solutions.</strong>
          </h1>

          <p className="about-v2-intro">
            I'm Navinkumar D, a Computer Science graduate interested in
            software development, web technologies, artificial intelligence,
            and machine learning. I enjoy turning ideas into practical
            applications while continuously improving my technical and
            problem-solving skills.
          </p>

        </div>


        {/* MAIN GRID */}
        <div className="about-v2-grid">

          {/* LEFT COLUMN */}
          <div className="about-v2-main">

            {/* WHO I AM */}
            <article className="about-v2-card">

              <div className="about-v2-number">
                01
              </div>

              <h2>Who I Am</h2>

              <p>
                I enjoy learning new technologies and transforming ideas
                into practical software applications. My interests include
                full-stack web development, artificial intelligence,
                machine learning, and API-based applications.
              </p>

              <p>
                During my academic journey, I have worked on projects that
                combine modern web technologies with real-world problem
                solving. These projects have helped me improve my programming,
                debugging, API integration, and application development skills.
              </p>

            </article>


            {/* EDUCATION */}
            <article className="about-v2-card about-v2-education">

              <div className="about-v2-number">
                02
              </div>

              <h2>Education Qualification</h2>


              {/* DEGREE */}
              <div className="about-v2-education-item">

                <div className="about-v2-education-icon">
                  🎓
                </div>

                <div className="about-v2-education-content">

                  <span className="about-v2-education-label">
                    UNDERGRADUATE DEGREE
                  </span>

                  <h3>
                    B.Sc. Computer Science
                  </h3>

                  <p>
                    Kalsalingam Academy Of Research And Education
                  </p>

                  <div className="about-v2-education-meta">

                    <span>
                      Year <strong>2026</strong>
                    </span>

                    <span>
                      CGPA <strong>7.9 / 10</strong>
                    </span>

                  </div>

                </div>

              </div>


              {/* 12TH */}
              <div className="about-v2-education-item">

                <div className="about-v2-education-icon">
                  📘
                </div>

                <div className="about-v2-education-content">

                  <span className="about-v2-education-label">
                    HIGHER SECONDARY
                  </span>

                  <h3>
                    Higher Secondary Education (12th)
                  </h3>

                  <p>
                    Government Higher Secondary School
                  </p>

                  <div className="about-v2-education-meta">

                    <span>
                      Year <strong>2023</strong>
                    </span>

                    <span>
                      Percentage <strong>64%</strong>
                    </span>

                  </div>

                </div>

              </div>


              {/* 10TH */}
              <div className="about-v2-education-item">

                <div className="about-v2-education-icon">
                  📚
                </div>

                <div className="about-v2-education-content">

                  <span className="about-v2-education-label">
                    SECONDARY EDUCATION
                  </span>

                  <h3>
                    Secondary School Education (10th)
                  </h3>

                  <p>
                    Government Higher Secondary School
                  </p>

                  <div className="about-v2-education-meta">

                    <span>
                      Year <strong>2021</strong>
                    </span>

                    <span>
                      Percentage <strong>NA</strong>
                    </span>

                  </div>

                </div>

              </div>

            </article>


            {/* GOAL */}
            <article className="about-v2-card">

              <div className="about-v2-number">
                03
              </div>

              <h2>My Goal</h2>

              <p>
                My goal is to begin my career in the IT industry as a
                software developer, where I can apply my programming
                knowledge and contribute to real-world software projects.
              </p>

              <p>
                I aim to continuously improve my problem-solving skills,
                learn industry-relevant technologies, and grow as a
                professional while building reliable and meaningful
                applications.
              </p>

            </article>

          </div>


          {/* RIGHT COLUMN */}
          <aside className="about-v2-side">

            {/* INTERESTS */}
            <div className="about-v2-side-card">

              <span className="about-v2-side-label">
                INTERESTS
              </span>

              <div className="about-v2-tags">

                <span>Software Development</span>
                <span>Web Development</span>
                <span>Artificial Intelligence</span>
                <span>Machine Learning</span>

              </div>

            </div>


            {/* CURRENT FOCUS */}
            <div className="about-v2-side-card">

              <span className="about-v2-side-label">
                CURRENT FOCUS
              </span>

              <h3>
                Building &amp; Learning
              </h3>

              <p>
                Currently focused on improving my software development
                skills, strengthening programming and problem-solving
                abilities, and building practical projects using modern
                technologies.
              </p>

              <div className="about-v2-focus-tags">

                <span>Programming</span>
                <span>Web Development</span>
                <span>AI / ML</span>
                <span>Projects</span>

              </div>

            </div>


            {/* QUICK PROFILE */}
            <div className="about-v2-profile-card">

              <span className="about-v2-side-label">
                QUICK PROFILE
              </span>

              <div className="about-v2-profile-row">
                <span>Degree</span>
                <strong>B.Sc. Computer Science</strong>
              </div>

              <div className="about-v2-profile-row">
                <span>Graduation</span>
                <strong>2026</strong>
              </div>

              <div className="about-v2-profile-row">
                <span>CGPA</span>
                <strong>7.9 / 10</strong>
              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>
  );
}

export default About;