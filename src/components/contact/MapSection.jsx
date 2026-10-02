import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

export default function MapSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal rounded-3xl overflow-hidden h-[380px] sm:h-[500px] relative">
          <iframe
            title="Greenova Office Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.73%2C-73.99%2C40.75&layer=mapnik&marker=40.74,-74"
            className="w-full h-full border-0"
            loading="lazy"
          />
          <div className="absolute top-6 left-6 bg-brand-dark text-white rounded-2xl p-5 max-w-xs shadow-xl">
            <div className="text-xs uppercase tracking-wider text-brand-primary mb-2">
              Our HQ
            </div>
            <div className="font-semibold mb-1">Greenova New York</div>
            <div className="text-sm text-gray-300">245 West 14th Street, NY 11201</div>
          </div>
        </div>
      </div>
    </section>
  );
}
