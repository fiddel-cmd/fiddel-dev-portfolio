import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Fidel Dev home">
          FIDEL DEV
        </Link>
        <div className="nav-actions">
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <ThemeToggle />
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/fiddel-owuor-9511b9367/"
            target="_blank"
            rel="noreferrer"
          >
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}
