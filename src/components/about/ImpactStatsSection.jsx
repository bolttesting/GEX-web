import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const impacts = [
  { target: 25, suffix: "MW", label: "Total installed capacity" },
  { target: 102000, suffix: "t", label: "Tons of CO₂ saved to date", format: true },
  { target: 817, suffix: "+", label: "Satisfied customers" },
  { target: 14, suffix: "", label: "Countries served" },
];

export default function ImpactStatsSection() {
  const ref = useRef(null);
  const counterRefs = useRef([]);
  useReveal(ref);

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = impacts[i].target;
        const isFormat = impacts[i].format;
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: "power1.out",
              onUpdate: () => {
                el.innerHTML = isFormat
                  ? Math.round(obj.val).toLocaleString()
                  : Math.round(obj.val);
              },
            });
          },
          once: true,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Measurable Impact"
            title="Numbers that mean something"
            description="Every project contributes to a larger picture. Here&apos;s what we&apos;ve built together."
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {impacts.map((item, i) => (
            <div key={i} className="gs-reveal border-t-2 border-brand-dark pt-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-brand-dark mb-3 flex items-baseline">
                <span ref={(el) => (counterRefs.current[i] = el)}>0</span>
                <span className="text-2xl sm:text-3xl ml-1">{item.suffix}</span>
              </div>
              <p className="text-brand-gray text-sm sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
