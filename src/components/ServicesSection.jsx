const services = [
  {
    icon: "code-square",
    title: "Frontend Web Development",
    description:
      "Responsive landing pages, portfolio sites and business websites built with HTML, CSS, Bootstrap and Next.js.",
    anchor: "frontend",
  },
  {
    icon: "stack",
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web applications using Next.js, PostgreSQL, Prisma and third-party API integrations.",
    anchor: "fullstack",
  },
  {
    icon: "phone",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built with React Native and Expo for both Android and iOS.",
    anchor: "mobile",
  },
  {
    icon: "database",
    title: "Database Design",
    description:
      "PostgreSQL schema design, JDBC integration and Prisma ORM setup for reliable and scalable data layers.",
    anchor: "database",
  },
  {
    icon: "plug",
    title: "API Integration",
    description:
      "Connecting third-party services like SendGrid, Axios and payment gateways into your existing product.",
    anchor: "api",
  },
  {
    icon: "megaphone",
    title: "Tech Content Creation",
    description:
      "Engaging tech content for blogs, LinkedIn and social media covering software engineering, data science and cybersecurity.",
    anchor: "content",
  },
  {
    icon: "window-desktop",
    title: "Desktop App Development",
    description:
      "Java desktop applications with JavaFX and PostgreSQL for businesses needing offline-capable GUI tools.",
    anchor: "desktop",
  },
  {
    icon: "file-earmark-text",
    title: "IT Project Documentation",
    description:
      "Clear project plans, requirements, and workflow documentation for startups and small teams using SDLC and PMBOK frameworks.",
    anchor: "docs",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
              <i
                className="bi bi-grid-3x3-gap-fill me-1"
                aria-hidden="true"
              ></i>
              What I Do
            </span>
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              I offer a range of services to help you build, grow, and optimize
              your digital presence.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {services.map(({ icon, title, description, anchor }) => (
            <div className="col-lg-3 col-md-6" key={anchor}>
              <article className="service-card">
                <div className="service-icon">
                  <i className={`bi bi-${icon}`} aria-hidden="true"></i>
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={`services.html#${anchor}`} className="service-link">
                  Learn More <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
