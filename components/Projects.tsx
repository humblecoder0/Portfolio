import Image from "next/image";
import { projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container-content">
        <div className="work-heading">
          <SectionHeading title="Ideas, brought to life." />
          <p>
            From a community’s home on the web
            <br className="desktop-break" /> to a world built from imagination.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${index === 0 ? "project-featured" : ""}`}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} (opens in a new tab)`}
              >
                <div className={`project-visual project-visual-${index}`}>
                  <div className="project-browser">
                    <div className="project-screen">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 760px) 90vw, 60vw"
                            : "(max-width: 760px) 90vw, 44vw"
                        }
                      />
                    </div>
                  </div>
                  <span className="project-open" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    {index === 0 && <span>Featured project</span>}
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="project-visit">
                    Explore project <ArrowUpRightIcon />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
