import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { services } from "@/data/services";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ServiceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const service = services.find((s) => s.slug === slug) || services[0];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{service.title} — Greenova Services</title>
        <meta name="description" content={service.summary} />
      </Head>

      <PageHero
        label={`Service / ${service.number}`}
        title={service.title}
        description={service.description}
        image={service.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Metrics bar */}
      <section className="py-12 sm:py-16 bg-brand-light border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.metrics.map((m, i) => (
              <div key={i}>
                <div className="text-xs uppercase tracking-wider text-brand-gray mb-2">
                  {m.label}
                </div>
                <div className="text-xl sm:text-2xl font-medium text-brand-dark">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
                <span className="w-2 h-2 rounded-full bg-brand-dark" />
                Overview
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-brand-dark mb-8">
                What&apos;s included
              </h2>
              <div className="space-y-5 text-brand-gray text-base sm:text-lg leading-relaxed">
                {service.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Features Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200"
                  >
                    <svg className="w-5 h-5 text-brand-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium text-brand-dark">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 self-start">
              <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold mb-5">Quick Facts</h3>
                <dl className="space-y-4 text-sm">
                  {service.metrics.map((m, i) => (
                    <div key={i} className={`flex justify-between ${i < service.metrics.length - 1 ? "border-b border-white/10 pb-3" : ""}`}>
                      <dt className="text-gray-400">{m.label}</dt>
                      <dd className="font-medium">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="/contact"
                  className="mt-6 block text-center bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#821954] transition-colors"
                >
                  Request a quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-dark" />
              How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark">
              Our process for {service.title.toLowerCase()}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 sm:p-8">
                <div className="text-4xl font-light text-brand-dark/40 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-brand-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark">
              Explore other services
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-dark hover:text-brand-primary underline underline-offset-4 whitespace-nowrap"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-white rounded-3xl p-4 flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className="h-[200px] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-semibold mb-2 text-brand-dark">{item.title}</h3>
                  <p className="text-brand-gray text-sm">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Ready when you are"
        title={`Let's talk about your\n${service.title.toLowerCase()} project`}
        description="A quick consult is often enough to shape a great plan. We're here when you are."
        buttonLabel="Start the conversation"
        buttonHref="/contact"
      />
    </>
  );
}
