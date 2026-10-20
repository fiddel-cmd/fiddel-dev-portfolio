export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7 hero-content">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
              <i className="bi bi-rocket-takeoff me-1" aria-hidden="true"></i>
              Welcome to Fiddel Tech Solutions
            </span>
            <h1 className="hero-title">
              Building Modern Web Experiences &amp;{" "}
              <span className="highlight">Data-Driven Solutions</span>
            </h1>
            <p className="hero-subtitle">
              I help businesses and individuals build fast, responsive websites
              and insightful data solutions that drive real results.
            </p>
            <div className="hero-buttons">
              <a href="portfolio.html" className="btn btn-primary btn-lg me-3">
                <i className="bi bi-briefcase me-2" aria-hidden="true"></i>
                View My Work
              </a>
              <a href="contact.html" className="btn btn-outline-primary btn-lg">
                <i className="bi bi-chat-dots me-2" aria-hidden="true"></i>
                Contact Me
              </a>
            </div>
            <div className="hero-stats mt-5">
              <div className="row g-4">
                {[
                  ["15+", "Projects Delivered"],
                  ["30+", "Happy Clients"],
                  ["2+", "Years Experience"],
                ].map(([value, label]) => (
                  <div className="col-4" key={label}>
                    <div className="stat-item">
                      <h3 className="stat-number">{value}</h3>
                      <p className="stat-label">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5 hero-image text-center">
            <div className="hero-illustration">
              <i
                className="bi bi-code-square display-1 text-primary"
                aria-hidden="true"
              ></i>
              <div className="floating-icons" aria-hidden="true">
                <i className="bi bi-graph-up-arrow floating-icon icon-1"></i>
                <i className="bi bi-laptop floating-icon icon-2"></i>
                <i className="bi bi-phone floating-icon icon-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,100 720,0 1080,40 C1260,60 1380,80 1440,70 L1440,100 L0,100 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
