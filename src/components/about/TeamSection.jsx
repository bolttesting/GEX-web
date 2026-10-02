import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const team = [
  {
    name: "Lena Hartwell",
    role: "Co-Founder & CEO",
    image: "/images/photo-1580489944761-15a19d654956.webp",
  },
  {
    name: "Daniel Oyelaran",
    role: "Head of Engineering",
    image: "/images/photo-1507003211169-0a1dd7228f2d.webp",
  },
  {
    name: "Ayesha Khan",
    role: "Sustainability Lead",
    image: "/images/photo-1494790108377-be9c29b29330.webp",
  },
  {
    name: "Marco Tan",
    role: "Design Director",
    image: "/images/photo-1519085360753-af0119f7cbe7.webp",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 gs-reveal">
          <SectionHeading
            label="The Team"
            title="People who make it happen"
            description="A small, senior team working closely with every client."
          />
          <a
            href="/about"
            className="text-sm font-semibold text-brand-dark underline underline-offset-4 hover:text-brand-primary transition-colors"
          >
            View all team members
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {team.map((member, i) => (
            <div key={i} className="gs-reveal group cursor-pointer">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gray-200 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-semibold text-brand-dark">{member.name}</h3>
              <p className="text-sm text-brand-gray">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
