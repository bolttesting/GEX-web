import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

const plans = [
  {
    name: "Starter",
    description: "For small homes and first-time solar users.",
    price: "From $6,900",
    features: ["Up to 6kW system", "Monitoring app", "10-year warranty", "1-year aftercare"],
    highlighted: false,
  },
  {
    name: "Home Pro",
    description: "Our most popular choice for most households.",
    price: "From $12,400",
    features: ["6-12kW system", "Battery-ready wiring", "25-year warranty", "Priority aftercare"],
    highlighted: true,
  },
  {
    name: "Commercial",
    description: "Custom quotes based on site audit and goals.",
    price: "Custom",
    features: ["Full site audit", "ROI modelling", "Dedicated manager", "24/7 monitoring"],
    highlighted: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="Pricing"
            title="Plans that scale with you"
            description="Indicative pricing — every project is unique, so your final quote is built from a site audit."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`gs-reveal p-8 rounded-3xl flex flex-col ${
                plan.highlighted
                  ? "bg-brand-dark text-white shadow-2xl md:-translate-y-4"
                  : "bg-white text-brand-dark border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-bold mb-5 self-start">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className={`mb-6 text-sm ${plan.highlighted ? "text-gray-400" : "text-brand-gray"}`}>
                {plan.description}
              </p>
              <div className="text-4xl font-light mb-6">{plan.price}</div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-brand-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={plan.highlighted ? "primary" : "dark"}
                size="md"
                radius="rounded"
                fullWidth
              >
                Get a quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
