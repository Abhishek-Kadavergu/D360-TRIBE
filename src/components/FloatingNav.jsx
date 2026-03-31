import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";
import useActiveSection from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { label: "Home", sectionId: "home" },
  { label: "Features", sectionId: "services" },
  { label: "Use cases", sectionId: "work" },
  { label: "About", sectionId: "about" },
  // { label: "Contact", sectionId: "contact" },
];

const FloatingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isBookDemo = location.pathname === "/book-demo";

  const { scrollDir, atTop } = useScrollDirection();
  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.sectionId), []);
  const activeSection = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isVisible = isBookDemo || atTop || scrollDir === "up" || mobileOpen;

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      });
      setMobileOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const goBookDemo = () => {
    navigate("/book-demo");
    setMobileOpen(false);
  };

  const goHome = () => {
    navigate("/");
    setMobileOpen(false);
  };

  if (isBookDemo) {
    return (
      <header
        className="floating-nav-wrapper"
        style={{
          transform: "translateX(-50%) translateY(0)",
        }}
      >
        <nav className="floating-nav">
          <button
            type="button"
            className="floating-nav__logo"
            onClick={goHome}
          >
            D360 <span>Tribe</span>
          </button>
          <span
            className="hidden flex-1 text-center text-[13px] font-light uppercase tracking-[0.12em] text-white/50 sm:block"
          >
            Book a demo
          </span>
          <button
            type="button"
            className="floating-nav__cta floating-nav__cta--book-demo-nav"
            onClick={goHome}
          >
            Back to site
          </button>
        </nav>
      </header>
    );
  }

  return (
    <header
      className="floating-nav-wrapper"
      style={{
        transform: isVisible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(-120%)",
      }}
    >
      <nav className="floating-nav">
        <button
          type="button"
          className="floating-nav__logo"
          onClick={() => scrollTo("home")}
        >
          D360 <span>Tribe</span>
        </button>

        <ul className="floating-nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.sectionId}>
              <button
                type="button"
                className={`floating-nav__link ${activeSection === item.sectionId
                    ? "floating-nav__link--active"
                    : ""
                  }`}
                onClick={() => scrollTo(item.sectionId)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="floating-nav__cta" onClick={goBookDemo}>
          Book Demo
        </button>

        <button
          type="button"
          className={`floating-nav__burger ${mobileOpen ? "floating-nav__burger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`floating-nav__mobile ${mobileOpen ? "floating-nav__mobile--open" : ""
          }`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.sectionId}
            type="button"
            className={`floating-nav__mobile-link ${activeSection === item.sectionId
                ? "floating-nav__mobile-link--active"
                : ""
              }`}
            onClick={() => scrollTo(item.sectionId)}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          className="floating-nav__cta floating-nav__cta--mobile"
          onClick={goBookDemo}
        >
          Book Demo
        </button>
      </div>
    </header>
  );
};

export default FloatingNav;
