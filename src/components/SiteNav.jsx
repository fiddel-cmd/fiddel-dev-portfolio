const navigationLinks = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Services", "services.html"],
  ["Portfolio", "portfolio.html"],
  ["Testimonials", "testimonials.html"],
  ["Blog", "blog.html"],
  ["Contact", "contact.html"],
];

export default function SiteNav({ isDarkMode, onThemeToggle }) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-3"
      id="mainNav"
      aria-label="Main navigation"
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="index.html">
          <i className="bi bi-code-square me-2" aria-hidden="true"></i>
          FIDDEL TECH
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navigationLinks.map(([label, href]) => (
              <li className="nav-item" key={href}>
                <a
                  className={`nav-link${currentPage === href ? " active" : ""}`}
                  href={href}
                  aria-current={currentPage === href ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center ms-lg-3">
            <button
              id="themeToggle"
              className="btn btn-outline-primary me-2"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              onClick={onThemeToggle}
            >
              <i
                className={`bi bi-${isDarkMode ? "sun" : "moon"}-fill`}
                aria-hidden="true"
              ></i>
            </button>
            <a href="contact.html" className="btn btn-primary hire-btn">
              <i className="bi bi-send me-1" aria-hidden="true"></i>
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
