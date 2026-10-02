import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 49, suffix: "", label: "Years of experience in aluminium extrusion" },
  { target: 650, suffix: "", label: "Skilled and well trained employees" },
  { target: 800, suffix: "", label: "Happy customers around the globe" },
  { target: 49, suffix: "", label: "Countries where we export our products" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

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

      // Counter animations
      counterRefs.current.forEach((counter, index) => {
        if (!counter) return;
        ScrollTrigger.create({
          trigger: counter,
          start: "top 90%",
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: stats[index].target,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power1.out",
            });
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-dark text-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Image with Glass Card */}
          <div className="relative gs-reveal h-full">
            <img
              src="/images/photo-1621905251189-08b45d6a269e.webp"
              alt="Gulf Extrusion plant"
              className="rounded-3xl w-full h-[400px] sm:h-[500px] lg:h-full object-cover"
            />

            {/* Floating Glass Card */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 sm:left-8 sm:right-8 md:right-auto md:w-80 dark-glass p-5 sm:p-6 rounded-2xl">
              <h4 className="font-semibold text-base sm:text-lg mb-4">The Plant</h4>
              <div className="flex justify-between text-xs sm:text-sm mb-5 sm:mb-6">
                <div>
                  <span className="block text-gray-400">Extrude</span>
                  <span className="font-medium">Profiles</span>
                </div>
                <div>
                  <span className="block text-gray-400">Anodize</span>
                  <span className="font-medium">QUALANOD</span>
                </div>
                <div>
                  <span className="block text-gray-400">Coat</span>
                  <span className="font-medium text-brand-primary">In-house</span>
                </div>
              </div>
              {/* Simple Chart Visual */}
              <div className="flex items-end gap-2 h-14 sm:h-16 w-full opacity-80">
                <div className="w-1/6 bg-white/20 h-1/2 rounded-t-sm" />
                <div className="w-1/6 bg-white/40 h-3/4 rounded-t-sm" />
                <div className="w-1/6 bg-brand-primary h-full rounded-t-sm" />
                <div className="w-1/6 bg-white/30 h-2/3 rounded-t-sm" />
                <div className="w-1/6 bg-white/50 h-4/5 rounded-t-sm" />
                <div className="w-1/6 bg-brand-primary/80 h-full rounded-t-sm relative">
                  <div className="absolute -top-3 -right-2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_#9D2065]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5 sm:mb-6 text-gray-400 gs-reveal">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              About Gulf Extrusion
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8 leading-snug gs-reveal text-gray-200">
              Founded in Dubai in 1976, we are the flagship company of Al Ghurair Group and a leader in aluminium extrusion.
            </h2>
            <div className="mb-12 sm:mb-16 gs-reveal">
              <Button href="/about" variant="primary" size="md" radius="pill">
                More About Us
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8 border-t border-white/10 pt-8 sm:pt-12 gs-reveal">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-2 flex items-baseline">
                    <span ref={(el) => (counterRefs.current[index] = el)}>0</span>
                    {stat.suffix}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
