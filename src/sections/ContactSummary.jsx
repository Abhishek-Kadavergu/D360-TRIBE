import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = ["Automate", "Control", "Scale", "Secure", "Simplify"];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen gap-2 mb-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive mt-16">
        <p>
          Scale the <span className="font-normal">business</span>.
          <br />
          Not the <span className="text-gold">software bill</span>.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 px-4">
        <p className="font-[family-name:var(--font-amiamie)] text-xs font-medium uppercase tracking-[0.35em] text-black/60 md:text-sm">
          Powered by
        </p>
        <a
          href="https://piazza-website-beta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/40"
          aria-label="Piazza Consulting Group — open website"
        >
          <img
            src="/images/piazza-logo-black.png"
            alt="Piazza Consulting Group"
            className="h-20 w-auto max-w-[min(95vw,500px)] object-contain md:h-24 lg:h-28"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSummary;
