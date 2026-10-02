import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We listen. Site visits, conversations, and careful analysis of your energy habits.",
  },
  {
    number: "02",
    title: "Design",
    description: "Engineering plans that balance performance, aesthetics, and your budget.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Licensed installers, quality hardware, transparent timelines.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Continuous monitoring, maintenance, and reports that prove the impact.",
  },
];

export default function ApproachSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div className="gs-reveal lg:sticky lg:top-32 self-start">
            <SectionHeading
              label="Our Approach"
              title="Four steps. No shortcuts."
              description="Every project follows the same honest process — from the first conversation to long-term care."
            />
          </div>

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="gs-reveal group bg-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 sm:gap-8 hover:bg-brand-dark hover:text-white transition-colors duration-500"
              >
                <div className="text-5xl sm:text-6xl font-light text-brand-dark/30 group-hover:text-brand-primary transition-colors shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-brand-gray group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
