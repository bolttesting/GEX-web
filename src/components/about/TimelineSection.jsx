import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const milestones = [
  { year: "2016", title: "The beginning", description: "Founded in a small garage with a big mission: make clean energy mainstream." },
  { year: "2018", title: "First 100 installations", description: "Crossed our first hundred homes — and learned every lesson they taught us." },
  { year: "2020", title: "Commercial expansion", description: "Launched our commercial division to help businesses go green at scale." },
  { year: "2022", title: "Smart Grid integration", description: "Partnered with utilities to enable real-time, grid-responsive solar systems." },
  { year: "2024", title: "Global footprint", description: "Operating across 14 countries with a growing network of certified installers." },
  { year: "2026", title: "Today", description: "Empowering 800+ customers with 25MW of installed capacity and counting." },
];

export default function TimelineSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="Our Journey"
            title="A decade of building a cleaner future"
            description="Milestones that shaped who we are today — and where we&apos;re headed."
            align="center"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center vertical line (desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

          <div className="space-y-10 md:space-y-16">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`gs-reveal relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={`md:[direction:ltr] ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-brand-dark text-brand-primary text-sm font-semibold mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-brand-gray">{item.description}</p>
                </div>

                {/* Dot on center line */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-brand-primary border-4 border-brand-light" />
                </div>

                <div className="md:[direction:ltr]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
