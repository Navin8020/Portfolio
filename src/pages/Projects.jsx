function Projects() {
  const projects = [
    {
      number: "01",
      title: "NeuroLocusAI",
      category: "AI / MACHINE LEARNING",
      status: "Completed",
      image: "/project-neurolocus.png",
      description:
        "An AI-powered web application designed for automated ependymoma detection and localization from MRI brain images.",
      technologies: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "React",
        "PostgreSQL",
      ],
      features: [
        "MRI image upload and processing",
        "Automated tumor detection",
        "Tumor localization",
        "Detection history",
        "PostgreSQL database integration",
      ],
      liveLink: "https://automated-ependymoma-detection.vercel.app/",
      githubLink:
        "https://github.com/Mageshwaran88/automated-ependymoma-detection-be",
    },

    {
      number: "02",
      title: "SportIq",
      category: "WEB DEVELOPMENT / SPORTS",
      status: "In Development",
      image: "/project-sportiq.png",
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
    <section className="projects-v2">

      <div className="projects-v2-container">

        {/* HEADER */}
        <div className="projects-v2-header">

          <div className="projects-v2-label">
            <span></span>
            MY WORK
          </div>

          <h1>
            Projects that
            <strong>solve problems.</strong>
          </h1>

          <p>
            A selection of projects I've developed while exploring software
            development, artificial intelligence, machine learning, and
            modern web technologies.
          </p>

        </div>


        {/* PROJECT LIST */}
        <div className="projects-v2-list">

          {projects.map((project) => (
            <article
              className="projects-v2-card"
              key={project.number}
            >

              {/* TOP LINE */}
              <div className="projects-v2-card-line"></div>


              {/* PROJECT IMAGE */}
              <div className="projects-v2-image">

                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />

                <div className="projects-v2-image-overlay">
                  <span>{project.number}</span>
                  <strong>{project.title}</strong>
                </div>

              </div>


              {/* PROJECT TOP */}
              <div className="projects-v2-top">

                <span className="projects-v2-number">
                  {project.number}
                </span>

                <div className="projects-v2-meta">

                  <span className="projects-v2-category">
                    {project.category}
                  </span>

                  <span
                    className={
                      project.status === "Completed"
                        ? "projects-v2-status completed"
                        : "projects-v2-status development"
                    }
                  >
                    <span></span>
                    {project.status}
                  </span>

                </div>

              </div>


              {/* PROJECT CONTENT */}
              <div className="projects-v2-content">

                <div className="projects-v2-main">

                  <h2>{project.title}</h2>

                  <p className="projects-v2-description">
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}
                  <div className="projects-v2-technologies">

                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>


                {/* FEATURES */}
                <div className="projects-v2-features">

                  <span className="projects-v2-feature-label">
                    KEY FEATURES
                  </span>

                  <ul>

                    {project.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>


              {/* ACTIONS */}
              <div className="projects-v2-actions">

                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-v2-primary"
                  >
                    Live Project
                    <span>↗</span>
                  </a>
                )}

                {project.githubLink !== "#" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-v2-secondary"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                )}

                {project.liveLink === "#" &&
                  project.githubLink === "#" && (
                    <span className="projects-v2-development-message">
                      Project currently in development
                    </span>
                  )}

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;