import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

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
