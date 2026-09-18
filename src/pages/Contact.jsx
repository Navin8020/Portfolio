function Contact() {
  return (
    <section className="page-section contact-page">

      {/* HEADER */}
      <div className="contact-header">

        <p className="small-title">
          GET IN TOUCH
        </p>

        <h1>
          Let's build something
          <span> meaningful.</span>
        </h1>

        <p>
          I'm open to internships, entry-level opportunities, software
          development roles, and interesting projects. Feel free to reach
          out and connect with me.
        </p>

      </div>


      {/* CONTACT CONTENT */}
      <div className="contact-layout">

        {/* MAIN CONTACT CARD */}
        <div className="contact-main">

          <div className="contact-card">

            <span className="contact-number">
              01
            </span>

            <h2>
              Start a conversation
            </h2>

            <p className="contact-description">
              Whether you want to discuss an opportunity, a project, or
              simply connect, you can reach me through the links below.
            </p>


            {/* CONTACT ITEMS */}
            <div className="contact-items">

              {/* EMAIL */}
              <a
                href="mailto:knaveeen34@gmail.com"
                className="contact-item"
              >

                <div className="contact-icon email-icon">
                  @
                </div>

                <div className="contact-item-content">

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    knaveeen34@gmail.com
                  </strong>

                </div>

                <b>
                  ↗
                </b>

              </a>


              {/* GITHUB */}
              <a
                href="https://github.com/Navin8020"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <div className="contact-icon github-icon">
                  GH
                </div>

                <div className="contact-item-content">

                  <span>
                    GITHUB
                  </span>

                  <strong>
                    github.com/Navin8020
                  </strong>

                </div>

                <b>
                  ↗
                </b>

              </a>


              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/navin-kumar-33b36b36a"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <div className="contact-icon linkedin-icon">
                  in
                </div>

                <div className="contact-item-content">

                  <span>
                    LINKEDIN
                  </span>

                  <strong>
                    linkedin.com/in/navin-kumar-33b36b36a
                  </strong>

                </div>

                <b>
                  ↗
                </b>

              </a>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <aside className="contact-side">

          {/* AVAILABILITY */}
          <div className="contact-highlight">

            <span>
              AVAILABILITY
            </span>

            <div className="availability">

              <span className="availability-dot"></span>

              Open to Opportunities

            </div>

            <p>
              Currently interested in starting my professional career
              and gaining practical industry experience.
            </p>

          </div>


          {/* AREAS OF INTEREST */}
          <div className="contact-highlight">

            <span>
              AREAS OF INTEREST
            </span>

            <div className="interest-tags">

              <span>
                Software Development
              </span>

              <span>
                Web Development
              </span>

              <span>
                AI / ML
              </span>

              <span>
                API Development
              </span>

            </div>

          </div>


          {/* CTA */}
          <div className="contact-cta">

            <div className="cta-circle">
              ↗
            </div>

            <h3>
              Have an opportunity?
            </h3>

            <p>
              I'd be happy to hear from you.
            </p>

            <a
              href="mailto:knaveeen34@gmail.com"
              className="cta-link"
            >
              Send me an email →
            </a>

          </div>

        </aside>

      </div>

    </section>
  );
}

export default Contact;