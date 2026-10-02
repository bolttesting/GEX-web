import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner({
  label = "Get Started",
  title = "Your adventure awaits\nStart eco exploring now",
  description = "Merging ecological insights and digital design for sustainable businesses.",
  buttonLabel = "Book An Intro Call",
  buttonHref = "/contact",
  image = "/images/photo-1466611653911-95081537e5b7.webp",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll(".cta-reveal"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden text-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <img src={image} alt="CTA Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-brand-dark" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cta-reveal inline-flex items-center gap-2 text-sm font-semibold mb-5 sm:mb-6 justify-center text-gray-300">
          <span className="w-2 h-2 rounded-full bg-brand-primary" />
          {label}
        </div>
        <h2 className="cta-reveal text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-5 sm:mb-6 leading-tight whitespace-pre-line">
          {title}
        </h2>
        <p className="cta-reveal text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto text-base sm:text-lg">
          {description}
        </p>
        <div className="cta-reveal">
          <Button href={buttonHref} variant="primary" size="xl" radius="pill">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
