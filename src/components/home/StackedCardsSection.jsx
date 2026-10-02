import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: "/images/architectural.jpg",
    title: "Architectural",
    number: "01",
    description:
      "Standard profiles, curtain wall, sliding, hinged, and fire-rated systems.",
    href: "/services",
    cta: "View More",
  },
  {
    image: "/images/automotive.jpg",
    title: "Automotive",
    number: "02",
    description:
      "Crash-grade alloys, multi-hollow EV battery profiles, tight tolerances, and IATF 16949 finishing.",
    href: "/services",
    cta: "View More",
  },
  {
    image: "/images/industrial.jpg",
    title: "Industrial",
    number: "03",
    description:
      "Tents, street furniture, electrical, HVAC, oil and gas, heat sinks, and actuators.",
    href: "/services",
    cta: "View More",
  },
  {
    image: "/images/transportation.jpg",
    title: "Transportation",
    number: "04",
    description:
      "Trailers, helipads, locomotive, marine, and bicycle profiles.",
    href: "/services",
    cta: "View More",
  },
];

export default function StackedCardsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = sectionRef.current.querySelectorAll(".gs-reveal");
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            Products
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight">
            Architectural, automotive, <br className="hidden sm:block" /> industrial, and transport
          </h2>
        </div>

        {/* Sticky Cards Container */}
        <div className="sticky-card-wrapper max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="sticky-card h-[50vh] min-h-[320px] sm:h-[60vh] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-xl group block"
              style={{ top: `${12 + index * 2}vh`, zIndex: index + 1 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">{card.title}</h3>
                  <span className="text-lg sm:text-xl font-light shrink-0">{card.number}</span>
                </div>
                <div>
                  <p className="max-w-xl text-base sm:text-lg md:text-xl text-gray-200 mb-4">{card.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                    {card.cta}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
