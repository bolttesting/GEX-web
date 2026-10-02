import { useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export default function ServicesGridSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="What We Offer"
            title="Six focused practices"
            description="Each service is a full discipline — design, engineering, installation, and long-term support."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="gs-reveal group bg-white rounded-3xl p-4 flex flex-col hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-[240px] rounded-2xl overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-bold">
                  {service.number}
                </span>
              </div>
              <div className="px-2 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-brand-dark">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-sm sm:text-base mb-5 flex-1">{service.summary}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    Learn more
                  </span>
                  <svg
                    className="w-5 h-5 text-brand-dark group-hover:text-brand-primary group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
