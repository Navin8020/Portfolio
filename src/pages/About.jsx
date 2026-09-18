function About() {
  return (
    <section className="page-section about-page">

      {/* HEADER */}
<div className="about-header">

  <p className="small-title">
    ABOUT ME
  </p>

  <h1>
    Computer Science graduate
    <span> building practical solutions.</span>
  </h1>

  <p className="about-intro">
    I'm Navinkumar D, a Computer Science graduate interested in software
    development, web technologies, artificial intelligence, and machine
    learning. I enjoy turning ideas into practical applications while
    continuously improving my technical and problem-solving skills.
  </p>

</div>

      {/* MAIN CONTENT */}
      <div className="about-grid">

        <div className="about-main">

          {/* WHO I AM */}
          <div className="about-card">

            <div className="about-card-number">
              01
            </div>

            <h2>
              Who I Am
            </h2>

            <p>
              I enjoy learning new technologies and transforming ideas into
              practical software applications. My interests include
              full-stack web development, artificial intelligence,
              machine learning, and API-based applications.
            </p>

            <p>
              During my academic journey, I have worked on projects that
              combine modern web technologies with real-world problem
              solving. These projects have helped me improve my programming,
              debugging, API integration, and application development skills.
            </p>

          </div>


          {/* EDUCATION SUMMARY */}
<div className="about-highlight">

  <span>
    EDUCATION
  </span>

  <div className="sidebar-education">

    <div className="sidebar-education-item">
      <h3>
        B.Sc. Computer Science
      </h3>

      <p>
        Kalsalingam Academy Of Research And Education
      </p>

      <small>
        2026 · CGPA 7.9 / 10
      </small>
    </div>


    <div className="sidebar-education-item">
      <h3>
        Higher Secondary (12th)
      </h3>

      <p>
        Government Higher Secondary School
      </p>

      <small>
        2023 · 64%
      </small>
    </div>


    <div className="sidebar-education-item">
      <h3>
        Secondary Education (10th)
      </h3>

      <p>
        Government Higher Secondary School
      </p>

      <small>
        2021 · Percentage: NA
      </small>
    </div>

  </div>

</div>

          {/* CAREER GOAL */}
          <div className="about-card">

            <div className="about-card-number">
              03
            </div>

            <h2>
              My Goal
            </h2>

            <p>
              My goal is to begin my career in the IT industry as a software
             developer, where I can apply my programming knowledge and contribute
             to real-world software projects.
            </p>

            <p>
              I aim to continuously improve my problem-solving skills, learn
             industry-relevant technologies, and grow as a professional while
             building reliable and meaningful applications.
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <aside className="about-side">

          


          {/* INTERESTS */}
         <div className="about-highlight">

         <span>
         INTERESTS
        </span>

        <div className="interest-tags">
        <span>Software Development</span>
        <span>Web Development</span>
        <span>Artificial Intelligence</span>
        <span>Machine Learning</span>
        </div>

  </div>


          {/* CURRENT FOCUS */}
<div className="about-highlight">

  <span>
    CURRENT FOCUS
  </span>

  <h3>
    Building & Learning
  </h3>

  <p>
    Currently focused on improving my software development skills,
    strengthening programming and problem-solving abilities, and building
    practical projects using modern technologies.
  </p>

  <div className="focus-tags">
    <span>Programming</span>
    <span>Web Development</span>
    <span>AI / ML</span>
    <span>Projects</span>
  </div>

</div>

        </aside>

      </div>

    </section>
  );
}

export default About;