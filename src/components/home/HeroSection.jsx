import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";

gsap.registerPlugin(ScrollTrigger);

const heroStats = [
  {
    value: "49",
    label: "Years of experience in aluminium extrusion",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="13" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 18.5 10 27l6-3 6 3-2-8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M16 10.2v2.2l1.6 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "650",
    label: "Skilled and well trained employees",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 14.5h16l-1.2 3.2H9.2L8 14.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10 14.5V12a6 6 0 0 1 12 0v2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="22" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 24.2V27M13.4 25.4l-1.6 1.6M18.6 25.4l1.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "800",
    label: "Happy customers around the globe",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="13" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 24.5c.8-3.4 3.5-5 7-5s6.2 1.6 7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M23.5 8.5 25 10l2.2.4-1.6 1.6.3 2.2L23.5 13l-2.4 1.2.3-2.2-1.6-1.6 2.2-.4L23.5 8.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "49",
    label: "Countries where we export our products",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 8c2.2 2.4 3.2 5 3.2 8s-1 5.6-3.2 8c-2.2-2.4-3.2-5-3.2-8s1-5.6 3.2-8Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 16h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const elemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
      );

      gsap.fromTo(
        elemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        },
      );

      // Parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elemsRef.current.includes(el)) {
      elemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative mx-3 sm:mx-4 mt-3 min-h-[calc(100svh-1.5rem)] pb-12 pt-28 sm:pt-32 md:pt-36 flex items-center justify-center overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] bg-brand-dark"
    >
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={bgRef}
          src="/videos/Hero video.mp4"
          poster="/images/photo-1466611653911-95081537e5b7.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-black/20" />
      </div>

      {/* Faint horizontal line */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between">
        {/* Main Title Area */}
        <div className="flex flex-col justify-center">
          <div className="max-w-5xl text-white">
            <div
              ref={addToRefs}
              className="inline-flex items-center gap-2 text-sm font-medium mb-4 sm:mb-6 text-white/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Al Ghurair Group · Since 1976
            </div>
            <h1
              ref={addToRefs}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.1] tracking-tight"
            >
              Precision aluminium extrusion, shaped in Dubai
            </h1>
          </div>
        </div>

        {/* Bottom Elements */}
        <div ref={addToRefs} className="mt-8 w-full sm:mt-12">
          <div className="max-w-[26rem]">
            <p className="mb-6 text-base leading-relaxed text-gray-200 sm:mb-8 sm:text-lg">
              Gulf Extrusion supplies architectural, automotive, industrial, and transportation profiles — extruded, finished, and fabricated in the UAE.
            </p>
            <Button href="/services" variant="primary" size="lg" radius="pill">
              Explore Services
            </Button>
          </div>

          <div className="dark-glass mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-5 rounded-[2rem] p-4 sm:p-5 lg:grid-cols-4 lg:gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="shrink-0 text-brand-primary">{stat.icon}</span>
                <div className="min-w-0">
                  <p className="text-2xl font-medium leading-none text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
