import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useReveal(ref, selector = ".gs-reveal") {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const elements = ref.current.querySelectorAll(selector);
      elements.forEach((elem) => {
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
    }, ref);
    return () => ctx.revert();
  }, [ref, selector]);
}
