import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current.querySelectorAll(".gs-reveal");
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden text-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/projects/the-opus.jpg"
          alt="The Opus, a Gulf Extrusion project in Dubai"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-brand-dark/60" />
        {/* Gradient that fades to footer color only at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-brand-dark" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gs-reveal">
        <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5 sm:mb-6 justify-center text-gray-300">
          <span className="w-2 h-2 rounded-full bg-brand-primary" />
          Enquire
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-5 sm:mb-6 leading-tight">
          Precision beyond measure. <br /> Talk to Gulf Extrusion.
        </h2>
        <p className="text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto text-base sm:text-lg">
          From a cut length to a finished kit — extrusion, anodizing, powder coating, and fabrication in Dubai.
        </p>
        <Button href="/contact" variant="primary" size="xl" radius="pill">
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
