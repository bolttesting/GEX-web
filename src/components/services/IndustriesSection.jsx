import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const industries = [
  { name: "Residential", description: "Single-family, townhouses, and multi-unit buildings." },
  { name: "Hospitality", description: "Hotels, resorts, and sustainable tourism properties." },
  { name: "Education", description: "K-12 schools, universities, and research campuses." },
  { name: "Healthcare", description: "Clinics, hospitals, and mission-critical facilities." },
  { name: "Retail", description: "Shopping centres, flagship stores, and distribution." },
  { name: "Agriculture", description: "Farms, greenhouses, and food-processing plants." },
  { name: "Industrial", description: "Manufacturing, logistics, and heavy operations." },
  { name: "Public Sector", description: "Government buildings, utilities, and civic spaces." },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Industries"
            title="Clean energy for every sector"
            description="We&apos;ve helped organisations of every shape and size make the transition."
            variant="light"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="gs-reveal bg-brand-dark p-6 sm:p-8 group hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-gray-500">0{i + 1}</span>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4-4m0 0h-8m8 0v8M7 16l-4 4m0 0v-8m0 8h8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{ind.name}</h3>
              <p className="text-sm text-gray-400">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
