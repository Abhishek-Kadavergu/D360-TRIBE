import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  const text = `Scale teams without HR sprawl.`;
  const aboutText = `D360 Tribe pairs AI automation with disciplined workflows—from first day to last. You reclaim time, cut errors, and prove every step.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Automation first. Visibility always."}
        title={"About D360 Tribe"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-10 lg:gap-16 px-1 sm:px-1 md:px-3 lg:px-6 pb-10 lg:pb-16 text-[length:var(--text-body-lg)] font-light tracking-wide lg:flex-row text-white/55 ultra-small-screen">
        <img
          ref={imgRef}
          src="images/image-02.jpg"
          alt="D360 Tribe Platform"
          className="w-md rounded-3xl"
        />
        <div className="w-full">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          <div className="mt-4 space-y-2 text-[length:var(--text-body)]">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:zap" className="text-white/80" />
              <span>Automate the full employee lifecycle</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:shield-check" className="text-white/80" />
              <span>Security and audit trails by default</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:trending-up" className="text-white/80" />
              <span>Control cost as you scale headcount</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
