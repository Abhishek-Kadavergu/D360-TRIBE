import { useEffect, useRef } from "react";

const Footer = () => {
  const canvasRef = useRef(null);

  // Starry background particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let stars = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 3000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        drift: Math.random() * 0.3 + 0.05,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      stars.forEach((s) => {
        const twinkle = Math.sin(time * 0.001 * s.drift + s.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * twinkle})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const productLinks = [
    { label: "Home", sectionId: "home" },
    { label: "Features", sectionId: "services" },
    { label: "Use Cases", sectionId: "work" },
    { label: "About", sectionId: "about" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-premium" role="contentinfo" aria-label="Site footer">
      {/* Starry canvas background */}
      <canvas ref={canvasRef} className="footer-premium__stars" aria-hidden="true" />

      {/* Gradient overlay */}
      <div className="footer-premium__overlay" aria-hidden="true" />

      {/* Top divider */}
      <div className="footer-premium__top-border" aria-hidden="true" />

      {/* Main content */}
      <div className="footer-premium__container">
        <div className="footer-premium__grid">
          {/* Column 1: Brand */}
          <div className="footer-premium__brand">
            <div className="footer-premium__logo-row">
              {/* Shield icon */}
              {/* <svg
                className="footer-premium__logo-icon"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16 2L4 8v8c0 7.5 5.1 14.5 12 16 6.9-1.5 12-8.5 12-16V8L16 2z"
                  fill="url(#shield-grad)"
                  opacity="0.9"
                />
                <path
                  d="M16 6l-8 4v5.6c0 5.3 3.4 10.2 8 11.4 4.6-1.2 8-6.1 8-11.4V10l-8-4z"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <path
                  d="M13 16l2 2 4-5"
                  stroke="#cfa355"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="shield-grad" x1="4" y1="2" x2="28" y2="26">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#0d1b2a" />
                  </linearGradient>
                </defs>
              </svg> */}
              <span className="footer-premium__logo-text">
                D360 <span className="footer-premium__logo-accent">Tribe</span>
              </span>
            </div>
            <p className="footer-premium__tagline">
              Securely adopt AI with built&#8209;in data protection, governance,
              and compliance.
            </p>
          </div>

          {/* Column 2: Product */}
          <nav className="footer-premium__col" aria-label="Product links">
            <h3 className="footer-premium__heading">Product</h3>
            <ul className="footer-premium__list">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.sectionId)}
                    className="footer-premium__link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Company */}
          <div className="footer-premium__col">
            <h3 className="footer-premium__heading">Company</h3>
            <ul className="footer-premium__list">
              <li>
                <a
                  href="https://www.piazzaconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-premium__link"
                >
                  Piazza Consulting Group
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="footer-premium__col">
            <h3 className="footer-premium__heading">Connect</h3>
            <ul className="footer-premium__list footer-premium__social-list">
              <li>
                <a
                  href="https://www.instagram.com/piazzaconsulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-premium__link footer-premium__link--social"
                  aria-label="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/piazzaconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-premium__link footer-premium__link--social"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-premium__bottom">
          <div className="footer-premium__bottom-divider" aria-hidden="true" />
          <div className="footer-premium__bottom-inner">
            <p className="footer-premium__copyright">
              &copy; {currentYear} PCG. All rights reserved.
            </p>
            <p className="footer-premium__bottom-tagline">
              Designed for the AI Era.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
