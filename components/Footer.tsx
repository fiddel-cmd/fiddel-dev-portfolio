export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Fidel Dev</p>
        <ul className="footer-links" aria-label="Social profiles">
          <li>
            <a href="https://github.com/fiddel-cmd" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fiddel-owuor-9511b9367/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
