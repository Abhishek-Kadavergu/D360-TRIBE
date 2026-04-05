import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Services = () => {
  const text = `One platform. The full employee lifecycle.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Ship faster. Operate lighter."}
        title={"Platform"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-1 sm:px-1 md:px-3 lg:px-6 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 ultra-small-screen"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)]">{service.title}</h2>
              <p className="text-[length:var(--text-body)] leading-relaxed tracking-wider text-white/50 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 text-[clamp(1rem,1.8vw,1.375rem)] text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`} className="w-full">
                    <h3 className="flex w-full">
                      <span className="mr-8 md:mr-12 text-sm text-white/30 flex-shrink-0">
                        0{itemIndex + 1}
                      </span>
                      <span className="flex-1">{item.title}</span>
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
