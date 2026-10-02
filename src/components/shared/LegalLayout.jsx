import PageHero from "@/components/shared/PageHero";

export default function LegalLayout({ title, updatedAt, sections, breadcrumbLabel }) {
  return (
    <>
      <PageHero
        label="Legal"
        title={title}
        description={`Last updated ${updatedAt}.`}
        image="/images/photo-1532601224476-15c79f2f7a51.webp"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: breadcrumbLabel || title },
        ]}
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 lg:gap-16">
            {/* TOC */}
            <aside className="lg:sticky lg:top-28 self-start">
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-3">
                Table of contents
              </div>
              <ul className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#sec-${i}`}
                      className="text-brand-dark hover:text-brand-primary transition-colors"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content */}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i} id={`sec-${i}`} className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-medium text-brand-dark mb-4">
                    {i + 1}. {s.title}
                  </h2>
                  <div className="space-y-4 text-brand-gray text-base sm:text-lg leading-relaxed">
                    {s.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
