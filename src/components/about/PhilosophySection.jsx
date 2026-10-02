import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const pillars = [
  {
    tag: "Nature-led",
    title: "Biology as a blueprint",
    description:
      "Forests are already perfect clean-energy systems. We study them, learn from them, and let that wisdom shape the way we design.",
    image: "/images/photo-1473341304170-971dccb5ac1e.webp",
  },
  {
    tag: "Precision tech",
    title: "Engineering that respects the earth",
    description:
      "Every kWh generated is earned through meticulous engineering, smart grid integration, and components sourced with real accountability.",
    image: "/images/photo-1508514177221-188b1cf16e9d.webp",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Our Philosophy"
            title="Where biology meets technology"
            description="A thoughtful balance of natural intelligence and engineering precision."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="gs-reveal group relative rounded-[2rem] overflow-hidden bg-brand-dark text-white min-h-[480px] flex flex-col"
            >
              <div className="absolute inset-0">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
              </div>

              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-semibold mb-5 self-start">
                  {pillar.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium mb-3">{pillar.title}</h3>
                <p className="text-gray-200 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
