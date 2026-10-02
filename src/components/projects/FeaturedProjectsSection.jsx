import { useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

export default function FeaturedProjectsSection() {
  const ref = useRef(null);
  useReveal(ref);
  const featured = projects.filter((p) => p.featured);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            label="Featured Work"
            title="Three projects we&apos;re especially proud of"
            description="Different scales, different contexts, same principles — careful design and durable results."
          />
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`gs-reveal group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr] rounded-3xl overflow-hidden h-[300px] sm:h-[420px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:[direction:ltr]">
                <div className="flex flex-wrap items-center gap-3 text-sm text-brand-gray mb-4">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-gray" />
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-gray" />
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-gray text-base sm:text-lg mb-6 leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-brand-gray mb-1">Capacity</div>
                    <div className="text-lg font-semibold text-brand-dark">{project.capacity}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    View project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
