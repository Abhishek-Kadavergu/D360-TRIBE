import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `See D360 Tribe on your terms. Book a live walkthrough.`;
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Talk to us. Move faster."}
          title={"Book a demo"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-1 sm:px-1 md:px-3 lg:px-6 font-light text-white uppercase text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight mb-10 ultra-small-screen">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-[length:var(--text-body-lg)] tracking-wider lowercase">
                hello@d360tribe.com
              </p>
            </div>
            <div className="social-link">
              <h2>Sales</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-[length:var(--text-body-lg)] lowercase">
                Pick a slot. We show the product.
              </p>
            </div>
            <div className="social-link">
              <h2>Connect</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) =>
                  social.internal ? (
                    <Link
                      key={index}
                      to={social.href}
                      className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {"{ "}
                      {social.name}
                      {" }"}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {"{ "}
                      {social.name}
                      {" }"}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
