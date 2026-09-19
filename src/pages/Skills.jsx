function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Programming",
      description:
        "Programming languages I use for problem solving and application development.",
      skills: ["Python", "Java", "C", "C++"],
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Technologies I use to build responsive and modern web applications.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    },
    {
      number: "03",
      title: "Database & APIs",
      description:
        "Technologies used for data management and connecting applications with external services.",
      skills: ["SQL", "PostgreSQL", "REST API", "API Integration"],
    },
    {
      number: "04",
      title: "AI & Machine Learning",
      description:
        "Technologies and concepts explored while developing intelligent applications.",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "CNN",
        "MRI Image Analysis",
      ],
    },
    {
      number: "05",
      title: "Tools & Technologies",
      description:
        "Development tools I use for coding, testing, version control, and project development.",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
    },
    {
      number: "06",
      title: "Development Skills",
      description:
        "Practical development skills gained through academic and personal projects.",
      skills: [
        "Problem Solving",
        "Debugging",
        "API Integration",
        "Project Development",
      ],
    },
  ];

  return (
    <section className="skills-v2">
      <div className="skills-v2-container">

        {/* HEADER */}
        <div className="skills-v2-header">

          <div className="skills-v2-label">
            <span></span>
            TECHNICAL SKILLS
          </div>

          <h1>
            Tools I use to
            <strong>build things.</strong>
          </h1>

          <p>
            My technical skill set covers programming, web development,
            databases, APIs, artificial intelligence, machine learning,
            and modern development tools.
          </p>

        </div>


        {/* SKILLS GRID */}
        <div className="skills-v2-grid">

          {skillCategories.map((category) => (
            <article
              className="skills-v2-card"
              key={category.number}
            >

              <div className="skills-v2-card-top">

                <span className="skills-v2-number">
                  {category.number}
                </span>

                <span className="skills-v2-arrow">
                  ↗
                </span>

              </div>


              <div className="skills-v2-card-content">

                <h2>{category.title}</h2>

                <p>
                  {category.description}
                </p>

              </div>


              <div className="skills-v2-tags">

                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>


              <div className="skills-v2-bottom">

                <span>
                  {category.skills.length}{" "}
                  {category.skills.length === 1
                    ? "skill"
                    : "skills"}
                </span>

                <span className="skills-v2-line"></span>

              </div>

            </article>
          ))}

        </div>


        {/* BOTTOM SUMMARY */}
        <div className="skills-v2-summary">

          <div className="skills-v2-summary-number">
            06
          </div>

          <div className="skills-v2-summary-content">

            <span>TECHNICAL AREAS</span>

            <h2>
              Continuously learning,
              <strong> building and improving.</strong>
            </h2>

            <p>
              I continue to strengthen my programming fundamentals,
              development skills, and understanding of modern technologies
              through projects and practical learning.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;