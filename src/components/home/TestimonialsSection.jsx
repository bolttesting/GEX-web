import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    type: "video",
    videoMp4: "/videos/Hero video.mp4",
    poster: "/images/gulfex-plant.jpg",
  },
  {
    type: "text",
    variant: "light",
    quote: '"Gulf Ex — best aluminium extrusion ever."',
    avatar: "/images/photo-1500648767791-00dcc994a43e.webp",
    name: "Matthew Ogunrinde",
    role: "Senior Manager, ABC Company",
  },
  {
    type: "text",
    variant: "dark",
    quote: '"I found Gulf Ex expertise in aluminum extrusion."',
    avatar: "/images/photo-1507003211169-0a1dd7228f2d.webp",
    name: "Chandan Rateria",
    role: "Supervisor, Consultaic LLC",
  },
  {
    type: "video",
    videoMp4: "/videos/Hero video.mp4",
    poster: "/images/gulfex-plant.jpg",
  },
  {
    type: "text",
    variant: "light",
    quote: '"One of the well-known, best aluminium extrusion companies not only in Dubai but in the whole of the Middle East."',
    avatar: "/images/photo-1519085360753-af0119f7cbe7.webp",
    name: "John Doe",
    role: "Director, PBJR",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

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

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 gs-reveal">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-dark" />
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark">
              What our <br /> clients say
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="gs-reveal">
          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            speed={800}
            spaceBetween={28}
            slidesPerView={1.1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              1024: { slidesPerView: 2.3, spaceBetween: 28 },
              1280: { slidesPerView: 2.8, spaceBetween: 32 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                {item.type === "video" ? (
                  <div className="h-[400px] sm:h-[440px] md:h-[480px] rounded-[2rem] overflow-hidden relative group">
                    <video
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={item.videoMp4} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                  </div>
                ) : (
                  <div
                    className={`h-[400px] sm:h-[440px] md:h-[480px] rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between ${
                      item.variant === "dark" ? "bg-brand-dark text-white" : "bg-[#f6e8f0]"
                    }`}
                  >
                    <div className="flex-1 flex flex-col justify-center">
                      <svg
                        className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 ${
                          item.variant === "dark" ? "text-brand-primary" : "text-brand-dark/30"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M116,72v88a64.07,64.07,0,0,1-64,64,8,8,0,0,1,0-16,48.05,48.05,0,0,0,48-48v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H100A16,16,0,0,1,116,72Zm100-16H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h44v8a48.05,48.05,0,0,1-48,48,8,8,0,0,0,0,16,64.07,64.07,0,0,0,64-64V72A16,16,0,0,0,216,56Z" />
                      </svg>
                      <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                        {item.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">{item.name}</h4>
                        <p
                          className={`text-xs sm:text-sm ${
                            item.variant === "dark" ? "text-gray-400" : "text-brand-gray"
                          }`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
