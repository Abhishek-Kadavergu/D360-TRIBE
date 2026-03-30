import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const heroRef = useRef(null);
  const taglineRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        taglineRef.current,
        { opacity: 0, filter: "blur(8px)", y: 10 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, ease: "power2.out" }
      );

      const d360Chars = heading1Ref.current?.querySelectorAll(".hero-char");
      if (d360Chars?.length) {
        tl.fromTo(
          d360Chars,
          { opacity: 0, y: 60, rotateX: -40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.04,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      const tribeChars = heading2Ref.current?.querySelectorAll(".hero-char");
      if (tribeChars?.length) {
        tl.fromTo(
          tribeChars,
          { opacity: 0, y: 60, rotateX: -40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.04,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      tl.fromTo(
        ".hero-divider",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
        "-=0.3"
      );

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.1"
      );
      tl.fromTo(
        line2Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    },
    { scope: heroRef }
  );

  const splitChars = (word) =>
    word.split("").map((char, i) => (
      <span
        key={i}
        className="hero-char"
        style={{ display: "inline-block", perspective: "600px" }}
      >
        {char}
      </span>
    ));

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      <div className="hero-content">
        <p ref={taglineRef} className="hero-tagline" style={{ opacity: 0 }}>
          Run HR on autopilot
        </p>

        <div
          className="hero-heading-wrap"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <h1 ref={heading1Ref} className="hero-heading hero-heading--line1">
            {splitChars("D360")}
          </h1>
          <h1 ref={heading2Ref} className="hero-heading hero-heading--line2">
            {splitChars("TRIBE")}
          </h1>
        </div>

        <div className="hero-divider" />

        <div className="hero-description">
          <p
            ref={line1Ref}
            className="hero-desc-line hero-desc-line--highlight"
            style={{ opacity: 0 }}
          >
            Automate workflows. Slash manual HR work.
          </p>
          <p
            ref={line2Ref}
            className="hero-desc-line hero-desc-line--emphasis"
            style={{ opacity: 0 }}
          >
            AI HRMS. One stack. Book a demo.
          </p>
        </div>

        <div ref={scrollRef} className="hero-scroll-indicator" style={{ opacity: 0 }}>
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line">
            <div className="hero-scroll-dot" />
          </div>
        </div>
      </div>

      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
