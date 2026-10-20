const quickLinks = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Services", "services.html"],
  ["Portfolio", "portfolio.html"],
  ["Blog", "blog.html"],
];

export default function SiteFooter() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <a href="index.html" className="navbar-brand fw-bold">
                <i className="bi bi-code-square me-2" aria-hidden="true"></i>
                FIDDEL TECH
              </a>
              <p className="footer-description mt-3">
                Building modern web experiences and data-driven solutions that
                help businesses and individuals thrive in the digital age.
              </p>
              <div className="footer-social mt-3">
                <a
                  href="https://github.com/fiddel-cmd"
                  aria-label="GitHub"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-github" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fiddel-owuor-9511b9367/"
                  aria-label="LinkedIn"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-links">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-links">
              {["Web Development", "Data Analytics", "UI/UX Design", "IT Consulting"].map(
                (label) => (
                  <li key={label}>
                    <a href="services.html">{label}</a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h2 className="footer-heading">Get In Touch</h2>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-envelope" aria-hidden="true"></i>
                <a href="mailto:Fiddel.owuor@strathmore.edu">
                  Fiddel.owuor@strathmore.edu
                </a>
              </li>
              <li>
                <i className="bi bi-phone" aria-hidden="true"></i>
                <a href="tel:+254741291441">+254 741291441</a>
              </li>
              <li>
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <a href="https://wa.me/254741291441">WhatsApp</a>
              </li>
              <li>
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6 text-md-start text-center">
              <p className="mb-0">
                &copy; 2026 Fiddel Tech Solutions. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <p className="mb-0">
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
