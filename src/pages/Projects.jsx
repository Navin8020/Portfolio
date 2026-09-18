function Projects() {
  const projects = [
    {
      number: "01",
      title: "NeuroLocusAI",
      category: "AI / DEEP LEARNING",
      status: "Completed",
      image: "neurolocus.png",

      description:
        "An AI-powered web application designed for automated ependymoma detection and localization from MRI brain images.",

      technologies: [
        "Web Development",
        "CNN",
        "Deep Learning",
        
        "PostgreSQL",
      ],

      features: [
        "MRI image upload and processing",
        "Automated tumor detection",
        "Tumor localization",
        "Detection history",
        "PostgreSQL database integration",
      ],

      liveLink:
        "https://automated-ependymoma-detection.vercel.app/",

      githubLink:
        "https://github.com/Mageshwaran88/automated-ependymoma-detection-be",
    },

    {
      number: "02",
      title: "SportIq",
      category: "WEB DEVELOPMENT / SPORTS",
      status: "In Development",
      image: "Sportiq.png",

      description:
        "A modern sports analysis platform designed to provide football match information, events, lineups, player details, and detailed match statistics using REST APIs.",

      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "REST API",
        "API-Football",
      ],

      features: [
        "Live football fixtures",
        "Match events and goals",
        "Cards and substitutions",
        "Player lineups",
        "Detailed match statistics",
      ],

      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="page-section projects-page">

      {/* HEADER */}
      <div className="projects-header">

        <p className="small-title">
          MY WORK
        </p>

        <h1>
          Projects that
          <span> solve problems.</span>
        </h1>

        <p>
          A selection of projects I've developed while exploring software
          development, artificial intelligence, machine learning, and
          modern web technologies.
        </p>

      </div>


      {/* PROJECTS */}
      <div className="projects-list">

        {projects.map((project) => (
          <article
            className="project-card-new"
            key={project.number}
          >

            {/* PROJECT PREVIEW */}
            <div className="project-preview">

              <img
                src={project.image}
                alt={`${project.title} project preview`}
              />

              <div className="project-preview-overlay">
                <span>
                  VIEW PROJECT
                </span>
              </div>

            </div>


            {/* TOP */}
            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-top-right">

                <span className="project-category">
                  {project.category}
                </span>

                <span
                  className={
                    project.status === "Completed"
                      ? "project-status completed"
                      : "project-status development"
                  }
                >

                  <span className="project-status-dot"></span>

                  {project.status}

                </span>

              </div>

            </div>


            {/* CONTENT */}
            <div className="project-content">

              <div className="project-main">

                <h2>
                  {project.title}
                </h2>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>


              {/* FEATURES */}
              <div className="project-features">

                <h3>
                  Key Features
                </h3>

                <ul>

                  {project.features.map((feature) => (
                    <li key={feature}>

                      <span className="feature-check">
                        ✓
                      </span>

                      {feature}

                    </li>
                  ))}

                </ul>

              </div>

            </div>


            {/* ACTIONS */}
            <div className="project-actions">

              {project.liveLink !== "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Live Project ↗
                </a>
              )}

              {project.githubLink !== "#" && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  GitHub ↗
                </a>
              )}

              {project.liveLink === "#" &&
                project.githubLink === "#" && (
                  <span className="project-coming">
                    Project in Development
                  </span>
                )}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;