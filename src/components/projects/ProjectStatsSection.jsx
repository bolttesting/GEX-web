import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

const stats = [
  { value: "180+", label: "Projects delivered" },
  { value: "14", label: "Countries served" },
  { value: "25 MW", label: "Total capacity installed" },
  { value: "102k t", label: "CO₂ offset to date" },
];

export default function ProjectStatsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 justify-center text-gray-400">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            Portfolio at a glance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            Proven performance, at every scale
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`gs-reveal text-center ${i < stats.length ? "sm:px-6" : ""}`}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary mb-3">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
