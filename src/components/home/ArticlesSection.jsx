import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { blogs } from "@/data/blogs";

gsap.registerPlugin(ScrollTrigger);

export default function ArticlesSection() {
  const sectionRef = useRef(null);

  // Take first 3 posts for home showcase
  const [primary, second, third] = blogs;

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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 gs-reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-dark" />
              Latest News
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight">
              News from Gulf Extrusion
            </h2>
          </div>
          <Link
            href="/blogs"
            className="text-sm font-semibold text-brand-dark hover:text-brand-primary underline underline-offset-4 whitespace-nowrap"
          >
            View all articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Article 1 (Large) */}
          <Link
            href={`/blogs/${primary.slug}`}
            className="md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden group cursor-pointer gs-reveal"
          >
            <div className="h-[280px] sm:h-[320px] lg:h-full min-h-[320px] relative overflow-hidden">
              <img
                src={primary.image}
                alt={primary.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="flex items-center gap-2 text-xs mb-3 opacity-80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {primary.date}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  {primary.title}
                </h3>
                <span className="text-sm font-semibold hover:text-brand-primary transition-colors underline underline-offset-4">
                  Read more
                </span>
              </div>
            </div>
          </Link>

          {/* Article Column 2 */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-5 sm:gap-6">
            {[second, third].map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="bg-white rounded-3xl p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center group cursor-pointer gs-reveal"
              >
                <div className="w-full sm:w-1/3 h-[200px] rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="py-2 flex-1">
                  <div className="flex items-center gap-2 text-xs mb-3 text-brand-gray">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-brand-dark group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm font-semibold text-brand-dark underline underline-offset-4">
                    Read more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
