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
    <section className="page-section skills-page">

      {/* HEADER */}
      <div className="skills-header">

        <p className="small-title">
          TECHNICAL SKILLS
        </p>

        <h1>
          Tools I use to
          <span> build things.</span>
        </h1>

        <p>
          My technical skill set covers programming, web development,
          databases, APIs, artificial intelligence, machine learning,
          and modern development tools.
        </p>

      </div>


      {/* SKILL CATEGORIES */}
      <div className="skills-categories">

        {skillCategories.map((category) => (
          <article
            className="skill-category"
            key={category.number}
          >

            <div className="skill-category-top">

              <span className="skill-number">
                {category.number}
              </span>

              <span className="skill-arrow">
                ↗
              </span>

            </div>


            <h2>
              {category.title}
            </h2>


            <p>
              {category.description}
            </p>


            <div className="skill-tags">

              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Skills;