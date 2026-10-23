import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web, mobile, and desktop projects by Fidel, including AquaSense, CityFix, and APUSH Research & Care.",
};

export default function PortfolioPage() {
  return (
    <main id="main-content">
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="container">
          <p className="eyebrow">SELECTED WORK</p>
          <h1 id="portfolio-title">Projects built to solve real problems.</h1>
          <p>
            A selection of projects across mobile, web, and desktop—along with
            the technologies used to build them.
          </p>
        </div>
      </section>

      <section
        className="portfolio-list section-space"
        aria-label="Project portfolio"
      >
        <div className="container portfolio-grid">
          {projects.map((project, index) => (
            <article
              className="portfolio-card"
              id={project.slug}
              key={project.slug}
              aria-labelledby={`${project.slug}-title`}
            >
              <p className="project-index">
                PROJECT {String(index + 1).padStart(2, "0")}
              </p>
              <p className="project-category">{project.category}</p>
              <h2 id={`${project.slug}-title`}>{project.name}</h2>
              <p className="project-summary">{project.summary}</p>
              <h3 className="project-stack-title">Built with</h3>
              <ul className="project-tags" aria-label={`${project.name} technologies`}>
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="project-card-actions">
                <Link className="project-link" href={`/portfolio/${project.slug}`}>
                  Read case study <span aria-hidden="true">→</span>
                </Link>
                {project.repository && (
                  <a
                    className="project-repository"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source on GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
