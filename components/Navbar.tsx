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
          </ul>
          <ThemeToggle />
          <a className="contact-link" href="mailto:Fiddel.owuor@strathmore.edu">
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}
