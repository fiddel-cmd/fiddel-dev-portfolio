import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/projects";
import portrait from "../Images/DSC_0680.jpg";

export const metadata: Metadata = {
  title: "Fidel Dev | Full-Stack Developer",
  description:
    "Fidel is a second-year BBIT student at Strathmore University who builds full-stack web and mobile apps end to end.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">BBIT STUDENT · STRATHMORE UNIVERSITY</p>
            <h1 id="home-title">
              I build full-stack web and mobile apps end to end.
            </h1>
            <p className="hero-summary">
              I’m a second-year BBIT student in Nairobi who thinks about how
              software works in practice—not just how it looks in code.
            </p>
            <div className="hero-actions">
              <Button href="#selected-work">
                View projects
                <span aria-hidden="true">↓</span>
              </Button>
              <Button
                href="https://www.linkedin.com/in/fiddel-owuor-9511b9367/"
                external
                variant="secondary"
              >
                Contact me
                <span aria-hidden="true">↗</span>
              </Button>
            </div>

            <aside className="current-work" aria-label="Current work">
              <p className="current-work-label">
                <span className="status-indicator" aria-hidden="true"></span>
                CURRENT WORK
              </p>
              <h2>Systems that work in the real world.</h2>
              <p>
                Working with Strathmore ICT Services on a live biometric
                attendance rollout.
              </p>
              <span className="current-work-context">Nairobi, Kenya</span>
            </aside>
          </div>

          <figure className="hero-portrait">
            <Image
              src={portrait}
              alt="Fidel Owuor at Strathmore University"
              unoptimized
              priority
              sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 70vw, 38vw"
            />
            <figcaption>
              <span>Fidel Owuor</span>
              <span>Developer · Nairobi, Kenya</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="featured-work section-space"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <div className="container">
          <SectionHeading
            eyebrow="SELECTED WORK"
            id="work-title"
            title="Projects, with the details that matter."
            description="A selection of web, mobile, and desktop projects, with a quick look at what they do and the tools behind them."
          />

          <div className="project-preview-grid">
            {projects.slice(0, 3).map((project, index) => (
              <article className="project-preview" key={project.slug}>
                <p className="project-index">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{project.name}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-tags" aria-label={`${project.name} technologies`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <Link className="project-preview-link" href={`/portfolio#${project.slug}`}>
                  View project details <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="portfolio-action">
            <Button href="/portfolio">
              Explore all projects <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
