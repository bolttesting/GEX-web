import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const benefits = [
  { metric: "30%", label: "Average annual energy savings for residential clients." },
  { metric: "25yr", label: "Warranty on panels and workmanship across all installs." },
  { metric: "72hr", label: "From signed plan to full commissioning on typical projects." },
  { metric: "24/7", label: "System monitoring with automated alerts and support." },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="Why Greenova"
            title="Real numbers, real results"
            description="What you can expect when you work with us."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="gs-reveal bg-white rounded-3xl p-6 sm:p-8 text-center border border-gray-200 hover:border-brand-dark transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-light text-brand-dark mb-3">{b.metric}</div>
              <p className="text-brand-gray text-sm sm:text-base">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
