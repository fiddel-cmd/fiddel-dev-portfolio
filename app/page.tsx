import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Fidel Dev | Full-Stack Developer",
  description:
    "Fidel is a second-year BBIT student at Strathmore University who builds full-stack web and mobile apps end to end.",
};

const featuredProjects = [
  "CityFix",
  "AquaSense",
  "APUSH Research & Care Services",
  "Chama Manager",
  "Hotel Reservation System",
];

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
            description="Each case study will cover the problem, my role, the stack, and one decision I made along the way."
          />

          <div className="project-preview-grid">
            {featuredProjects.map((project, index) => (
              <article className="project-preview" key={project}>
                <p className="project-index">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{project}</h3>
                <p className="project-todo">
                  [TODO: my content — project summary]
                </p>
                <p className="project-todo">[TODO: my content — stack]</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
