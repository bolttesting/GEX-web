import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageHero({
  label = "Greenova",
  title,
  description,
  image,
  breadcrumb,
  align = "center",
}) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" }
      );
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-reveal"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] sm:min-h-[75vh] pt-32 pb-20 flex items-end overflow-hidden bg-brand-dark text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={`max-w-4xl flex flex-col gap-4 sm:gap-6 ${alignClass}`}>
          {breadcrumb && (
            <div className="hero-reveal flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/70 font-medium">
              {breadcrumb.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2 min-w-0">
                  {i > 0 && (
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-brand-primary transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-brand-primary line-clamp-1 w-[200px] md:w-auto">{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}

          <div className="hero-reveal inline-flex items-center gap-2 text-sm font-semibold text-white/80">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            {label}
          </div>
          <h1 className="hero-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.15] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="hero-reveal text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
