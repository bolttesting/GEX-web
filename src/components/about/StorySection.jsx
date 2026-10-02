import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function StorySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="gs-reveal order-2 lg:order-1 rounded-3xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
            <img
              src="/images/photo-1497435334941-8c899ee9e8e9.webp"
              alt="Our story"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 gs-reveal">
            <SectionHeading
              label="Our Story"
              title="From a small idea to a clean-energy movement"
            />
            <div className="mt-6 sm:mt-8 space-y-4 text-brand-gray text-base sm:text-lg leading-relaxed">
              <p>
                Greenova was born in 2016 out of a simple belief — that clean energy should be accessible, reliable, and beautifully designed for everyone. What started as three engineers in a garage has grown into a trusted partner for hundreds of homes and businesses.
              </p>
              <p>
                We believe sustainability isn&apos;t just about technology. It&apos;s about care, craftsmanship, and long-term thinking. Every panel we install, every design we deliver, carries that promise.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl sm:text-4xl font-light text-brand-dark">2016</div>
                <p className="text-sm text-brand-gray mt-1">Year Founded</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-brand-dark">14+</div>
                <p className="text-sm text-brand-gray mt-1">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
