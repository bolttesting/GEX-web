import { useState, useRef } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial", "Utility", "Healthcare", "Education"];

export default function ProjectsGridSection() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  useReveal(ref);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            label="All Projects"
            title="Browse by category"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-brand-dark text-white"
                    : "bg-white text-brand-dark hover:bg-brand-dark hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="gs-reveal group bg-white rounded-3xl p-4 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[240px] rounded-2xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold">
                  {project.category}
                </span>
              </div>
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-brand-gray text-sm mb-4 flex-1">{project.summary}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-xs text-brand-gray">
                  <span>{project.location}</span>
                  <span className="font-semibold text-brand-dark">{project.capacity}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-brand-gray">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
