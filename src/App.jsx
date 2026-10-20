import { useEffect, useState } from "react";
import SiteNav from "./components/SiteNav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function AboutIntro() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="page-title">About Me</h2>
            <p className="page-subtitle">
              Passionate about building solutions that make a difference
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem("theme") === "dark",
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("mainNav");
      const currentScroll = window.scrollY;

      setShowScrollTop(currentScroll > 300);
      if (navbar) {
        navbar.style.boxShadow =
          currentScroll > 50
            ? "0 4px 20px rgba(0, 0, 0, 0.1)"
            : "0 1px 3px rgba(0, 0, 0, 0.1)";
        navbar.style.padding = currentScroll > 50 ? "0.5rem 0" : "1rem 0";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SiteNav
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((current) => !current)}
      />
      <HeroSection />
      <main>
        <AboutIntro />
        <ServicesSection />
        <SkillsSection />
      </main>
      <SiteFooter />
      <button
        id="scrollTopBtn"
        className={`scroll-top-btn${showScrollTop ? " visible" : ""}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-chevron-up" aria-hidden="true"></i>
      </button>
    </>
  );
}
