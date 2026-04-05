import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);

  const text = `Six outcomes. One platform.`;

  useGSAP(() => {
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Outcomes you can measure."}
        title={"Use cases"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            <div className="flex justify-between px-1 sm:px-1 md:px-3 lg:px-6 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white ultra-small-screen">
              <div className="flex flex-col gap-1 md:gap-2 md:flex-row md:items-baseline md:justify-between md:w-full md:pr-8">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight">
                  {project.name}
                </h2>
                <p className="text-sm md:text-base text-black/70 md:group-hover:text-white/80 md:max-w-xl md:text-right tracking-wide">
                  {project.description}
                </p>
              </div>
              <Icon
                icon="lucide:arrow-up-right"
                className="md:size-6 size-5 flex-shrink-0 md:mt-1"
              />
            </div>
            <div className="w-full h-0.5 bg-black/80" />
            <div className="relative flex items-center justify-center px-1 sm:px-1 md:px-3 lg:px-6 md:hidden h-[400px] ultra-small-screen">
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
