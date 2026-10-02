import { useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function CaseStudySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Case Study"
            title="How we built Helios Commercial Park"
            description="A closer look at one of our most complex commercial deployments."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="gs-reveal rounded-3xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
            <img
              src="/images/photo-1466611653911-95081537e5b7.webp"
              alt="Helios Commercial Park"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="gs-reveal space-y-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">
                The Challenge
              </div>
              <p className="text-brand-dark text-base sm:text-lg leading-relaxed">
                Twelve buildings, mixed roof materials, and a tight timeline. The client needed
                measurable ESG progress before the next board review.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">
                Our Approach
              </div>
              <p className="text-brand-dark text-base sm:text-lg leading-relaxed">
                We phased the install building-by-building, added carport arrays to expand capacity,
                and built a unified monitoring dashboard across the entire park.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl sm:text-3xl font-light text-brand-dark">2.4 MW</div>
                <p className="text-xs text-brand-gray mt-1">Installed capacity</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-brand-dark">68%</div>
                <p className="text-xs text-brand-gray mt-1">Grid reliance cut</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-brand-dark">9 mo</div>
                <p className="text-xs text-brand-gray mt-1">Time to completion</p>
              </div>
            </div>

            <Link
              href="/projects/helios-commercial-park"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors"
            >
              Read full case study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
