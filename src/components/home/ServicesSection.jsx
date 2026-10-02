import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { services } from "@/data/services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

// Map real services to slide format with home-friendly tag labels
const slides = services.map((svc) => ({
  slug: svc.slug,
  image: svc.image,
  title: svc.title,
  description: svc.summary,
  tags: svc.features.slice(0, 2),
}));

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2.2);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      setSlidesToShow(width < 768 ? 1 : width < 1024 ? 1.5 : 2.2);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

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

  // Calculate progress
  const maxSlide = Math.max(1, slides.length - Math.floor(slidesToShow));
  const progress = ((currentSlide / maxSlide) * 100) || 0;
  const displayProgress = Math.max(15, Math.min(100, progress || 15));

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 gs-reveal">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-dark" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark max-w-md">
              Extrusion, finishing, and fabrication
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-24 sm:w-32 h-1 bg-gray-300 rounded-full overflow-hidden relative">
              <div
                className="absolute top-0 left-0 h-full bg-brand-dark rounded-full transition-all duration-500 ease-out"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide >= maxSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div className="gs-reveal -mx-3">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.slug} className="h-full px-3">
                <Link
                  href={`/services/${slide.slug}`}
                  className="flex h-full flex-col rounded-3xl bg-white p-4 group hover:shadow-xl transition-shadow"
                >
                  <div className="h-[220px] sm:h-[260px] w-full rounded-2xl overflow-hidden mb-5 sm:mb-6 shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 px-2 text-brand-dark group-hover:text-brand-primary transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-brand-gray mb-5 sm:mb-6 px-2 flex-grow text-sm sm:text-base">{slide.description}</p>
                  <div className="flex gap-2 px-2 pb-2 flex-wrap">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 border border-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
