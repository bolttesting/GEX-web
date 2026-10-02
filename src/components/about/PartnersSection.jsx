import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const partners = [
  "SunCorp", "EcoGrid", "Volturo", "LuminaX", "TerraNet", "GreenForge", "Biotech Nordics", "Helios Labs",
];

export default function PartnersSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="Trusted Partners"
            title="We don&apos;t build this alone"
            description="A network of energy leaders, research labs, and local installers powers our mission."
            align="center"
          />
        </div>

        <div className="gs-reveal grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-3xl overflow-hidden border border-gray-200">
          {partners.map((name, i) => (
            <div
              key={i}
              className="aspect-[3/2] bg-brand-light flex items-center justify-center p-6 group hover:bg-[#f6e8f0] transition-colors"
            >
              <span className="text-xl sm:text-2xl font-semibold text-brand-dark/60 group-hover:text-brand-dark transition-colors tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
