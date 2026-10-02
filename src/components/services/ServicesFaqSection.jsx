import { useState, useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "How long does a residential install take?",
    answer:
      "Most home systems go from contract to commissioning within 6-10 weeks. The install itself typically takes 1-3 days on site.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes — we partner with several green-energy lenders to offer 0% APR plans and long-term financing based on project value.",
  },
  {
    question: "What happens if my panels need repair?",
    answer:
      "All installations are covered by a 25-year warranty on panels and workmanship. Repairs are handled by our certified field team at no additional cost.",
  },
  {
    question: "Can I expand my system later?",
    answer:
      "Absolutely. We design every system with future expansion in mind — from adding more panels to integrating batteries or EV chargers.",
  },
  {
    question: "Do you work with renters or HOAs?",
    answer:
      "Yes. We have dedicated programs for rental properties and HOA-governed communities. Talk to us and we&apos;ll walk through the options.",
  },
];

export default function ServicesFaqSection() {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <div className="gs-reveal">
            <SectionHeading
              label="FAQ"
              title="Answers to the common questions"
              description="Don&apos;t see what you&apos;re looking for? Get in touch — we love tough questions."
            />
          </div>

          <div className="gs-reveal flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="border-b border-gray-200 py-5 sm:py-6 cursor-pointer"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="flex justify-between items-center gap-4 group">
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-brand-dark group-hover:text-brand-primary transition-colors">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 text-brand-gray ${
                      isOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="pt-4 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
