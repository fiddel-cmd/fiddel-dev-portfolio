import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

const cityFixVariants = [
  {
    title: "Urban impact",
    description: "A close-up pothole image paired with a city repair callout.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    alt: "A city street with visible road damage and urban infrastructure issues",
  },
  {
    title: "Citizen reporting",
    description: "A lighter visual that keeps the focus on issue submission and action.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "A busy urban street scene suited for a citizen reporting dashboard concept",
  },
  {
    title: "Resolution flow",
    description: "A cleaner mockup emphasizing tracking, categorization, and repair status.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    alt: "A modern city road showing the infrastructure management workflow",
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content">
      <header className="case-study-hero">
        <div className="container case-study-intro">
          <div className="case-study-topbar">
            <Link className="back-link" href="/portfolio">
              ← Back to portfolio
            </Link>
            <span className="project-category case-study-badge">
              {project.category}
            </span>
          </div>

          <p className="eyebrow">CASE STUDY</p>
          <h1>{project.name}</h1>
          <p className="case-study-summary">{project.summary}</p>

          <ul className="project-tags" aria-label={`${project.name} technologies`}>
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

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
      </header>

      {project.slug === "cityfix" && (
        <section className="cityfix-visuals section-space" aria-labelledby="cityfix-visual-title">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">VISUAL DIRECTION</p>
              <h2 id="cityfix-visual-title">Urban impact selected for the CityFix case study.</h2>
            </div>

            <div className="cityfix-visual-grid cityfix-visual-grid-single">
              {cityFixVariants.slice(0, 1).map((variant) => (
                <figure className="cityfix-visual-card cityfix-visual-card-featured" key={variant.title}>
                  <img src={variant.image} alt={variant.alt} />
                  <figcaption>
                    <span>{variant.title}</span>
                    <strong>Best fit for the case study</strong>
                    <p>{variant.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="case-study section-space">
        <div className="container case-study-body">
          <article>
            {project.article?.map((section) => (
              <section className="case-study-section" key={section.heading}>
                <h2>{section.heading}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.list && (
                  <ul className="case-study-list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
