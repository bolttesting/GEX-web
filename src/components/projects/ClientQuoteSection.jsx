import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

export default function ClientQuoteSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-brand-primary" fill="currentColor" viewBox="0 0 256 256">
            <path d="M116,72v88a64.07,64.07,0,0,1-64,64,8,8,0,0,1,0-16,48.05,48.05,0,0,0,48-48v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H100A16,16,0,0,1,116,72Zm100-16H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h44v8a48.05,48.05,0,0,1-48,48,8,8,0,0,0,0,16,64.07,64.07,0,0,0,64-64V72A16,16,0,0,0,216,56Z" />
          </svg>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark leading-snug mb-10">
            &ldquo;Working with Greenova was the easiest part of going green.
            They designed a system that actually fit our buildings, delivered on
            time, and the monitoring dashboard has become a real operations tool
            for our team.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center">
            <img
              src="/images/photo-1580489944761-15a19d654956.webp"
              alt="Client"
              className="w-14 h-14 rounded-full object-cover mb-3"
            />
            <div className="font-semibold text-brand-dark">Maria Santos</div>
            <div className="text-sm text-brand-gray">Operations Director, Helios Park</div>
          </div>
        </div>
      </div>
    </section>
  );
}
