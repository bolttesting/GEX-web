import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const qualities = [
  {
    title: "Certified installers",
    description: "Every project is led by NABCEP-certified professionals with at least a decade of field experience.",
  },
  {
    title: "Tier-1 components",
    description: "We source only from manufacturers with proven 25-year track records and transparent supply chains.",
  },
  {
    title: "Independent inspections",
    description: "Third-party engineering audits verify every install before we call a project complete.",
  },
  {
    title: "Lifetime monitoring",
    description: "Every system is connected to 24/7 monitoring — we see problems before you do.",
  },
];

export default function ProcessQualitySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="Our Standards"
            title="How we guarantee quality"
            description="Behind every elegant project is a rigorous set of standards we never compromise on."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {qualities.map((item, i) => (
            <div
              key={i}
              className="gs-reveal bg-white rounded-3xl p-6 sm:p-8 flex gap-5 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-primary flex items-center justify-center font-semibold shrink-0">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">{item.title}</h3>
                <p className="text-brand-gray text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
