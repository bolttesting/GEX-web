import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
  {
    icon: "leaf",
    number: "01",
    title: "Mission",
    image: "/images/extrusion-plant.jpg",
    content:
      "Our mission is to supply top-quality aluminum extrusion products and services to the world.",
  },
  {
    icon: "sun",
    number: "02",
    title: "Vision",
    image: "/images/architectural.jpg",
    content:
      "Our vision is to be the global aluminum extrusion center of excellence.",
  },
  {
    icon: "people",
    number: "03",
    title: "Values",
    image: "/images/values-team.jpg",
    content:
      "Innovation, integrity, and respect define our culture, along with a strong management ethos and a proactive approach.",
  },
];

const icons = {
  leaf: (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
      <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,50,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C206,177.18,227.93,116.2,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77L165.17,102.1a8,8,0,0,0-11.31-11.31L65.73,178.92c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.21C209.19,114.89,189.22,167.41,153.75,189.5Z" />
    </svg>
  ),
  sun: (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
      <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8a8,8,0,0,0-11.32,11.32Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z" />
    </svg>
  ),
  people: (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 256 256">
      <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176Z" />
    </svg>
  ),
};

export default function SustainableSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

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

  // Animate accordion content height
  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;
      const isActive = activeIndex === index;
      gsap.to(el, {
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 gs-reveal">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 justify-center text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-dark" />
            About the Company
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-brand-dark leading-tight">
            The flagship company of Al Ghurair Group
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] gs-reveal">
            <img
              key={accordionData[Math.max(activeIndex, 0)].image}
              src={accordionData[Math.max(activeIndex, 0)].image}
              alt={accordionData[Math.max(activeIndex, 0)].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col gap-4 gs-reveal">
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`rounded-3xl p-5 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 border ${
                    isActive
                      ? "bg-brand-dark text-white border-transparent shadow-xl"
                      : "bg-white border-gray-200 hover:border-brand-dark/30"
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-brand-primary" : "text-brand-dark"
                      }`}
                    >
                      {icons[item.icon]}
                    </span>
                    <span className={`font-light text-lg sm:text-xl ${isActive ? "text-gray-400" : "text-gray-400"}`}>
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-0">{item.title}</h3>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden"
                    style={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  >
                    <p className={`pt-4 leading-relaxed text-sm sm:text-base ${isActive ? "text-gray-300" : "text-brand-gray"}`}>
                      {item.content}
                    </p>
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
