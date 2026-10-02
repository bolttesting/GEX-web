import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!router.isReady || !project) {
    return null;
  }
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{project.title} — Greenova Projects</title>
        <meta name="description" content={project.summary} />
      </Head>

      <PageHero
        label={`Project / ${project.category}`}
        title={project.title}
        description={project.summary}
        image={project.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Project Facts */}
      <section className="py-12 sm:py-16 bg-brand-light border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">Client</div>
              <div className="text-lg sm:text-xl font-medium text-brand-dark">{project.client}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">Location</div>
              <div className="text-lg sm:text-xl font-medium text-brand-dark">{project.location}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">Capacity</div>
              <div className="text-lg sm:text-xl font-medium text-brand-dark">{project.capacity}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">Category</div>
              <div className="text-lg sm:text-xl font-medium text-brand-dark">{project.category}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">Year</div>
              <div className="text-lg sm:text-xl font-medium text-brand-dark">{project.year}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Approach / Outcome */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { label: "The Challenge", value: project.challenge },
              { label: "Our Approach", value: project.approach },
              { label: "Outcome", value: project.outcome, highlighted: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 rounded-3xl ${
                  item.highlighted
                    ? "bg-brand-dark text-white"
                    : "bg-white text-brand-dark border border-gray-200"
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-wider mb-4 ${
                    item.highlighted ? "text-brand-primary" : "text-brand-gray"
                  }`}
                >
                  {item.label}
                </div>
                <p className={`text-base sm:text-lg leading-relaxed ${
                  item.highlighted ? "text-gray-200" : "text-brand-dark"
                }`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 sm:py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
            Project metrics at a glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {project.metrics.map((m, i) => (
              <div key={i} className="border-t-2 border-brand-primary pt-5">
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-brand-primary mb-2">
                  {m.value}
                </div>
                <p className="text-gray-400 text-sm sm:text-base">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark mb-10">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="md:col-span-2 h-[300px] sm:h-[400px] rounded-3xl overflow-hidden">
              <img src={project.gallery[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[300px] sm:h-[400px] rounded-3xl overflow-hidden">
              <img src={project.gallery[1]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[250px] rounded-3xl overflow-hidden">
              <img src={project.gallery[2]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[250px] rounded-3xl overflow-hidden">
              <img src={project.gallery[3]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[250px] rounded-3xl overflow-hidden">
              <img src={project.gallery[4]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark">
              More projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-brand-dark hover:text-brand-primary underline underline-offset-4 whitespace-nowrap"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group bg-white rounded-3xl p-4 hover:shadow-xl transition-shadow"
              >
                <div className="h-[200px] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pb-2">
                  <div className="text-xs text-brand-gray mb-2">{item.category}</div>
                  <h3 className="text-lg font-semibold text-brand-dark">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Your project next?"
        title={"Let's create\nsomething that lasts"}
        description="From first sketch to last inspection, we'd love to partner on your next clean-energy project."
        buttonLabel="Start a project"
        buttonHref="/contact"
      />
    </>
  );
}
