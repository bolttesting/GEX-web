import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { target: 49, suffix: "", label: "Years of experience in aluminium extrusion." },
  { target: 650, suffix: "", label: "Skilled and well trained employees." },
  { target: 49, suffix: "", label: "Countries where we export our products." },
];

export default function MilestonesSection() {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

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

      counterRefs.current.forEach((counter, index) => {
        if (!counter) return;
        ScrollTrigger.create({
          trigger: counter,
          start: "top 90%",
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: milestones[index].target,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power1.out",
            });
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 border-y border-gray-200 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gray shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Gulf Extrusion
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full md:w-3/4">
            {milestones.map((item, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-light mb-2">
                  <span ref={(el) => (counterRefs.current[index] = el)}>0</span>
                  {item.suffix}
                </div>
                <p className="text-sm text-brand-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
