import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import PageHero from "@/components/shared/PageHero";
import useReveal from "@/hooks/useReveal";
import CtaBanner from "@/components/shared/CtaBanner";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  const ref = useRef(null);
  useReveal(ref);

  const featured = blogs.find((b) => b.featured) || blogs[0];
  const rest = blogs.filter((b) => b.slug !== featured.slug);

  return (
    <>
      <Head>
        <title>Blog — Greenova</title>
        <meta name="description" content="Articles, guides, and field notes from the Greenova team." />
      </Head>

      <PageHero
        label="Greenova Journal"
        title="Stories, guides, and field notes"
        description="Practical writing on clean energy, design, and the business of going green."
        image="/images/photo-1497435334941-8c899ee9e8e9.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <Link
            href={`/blogs/${featured.slug}`}
            className="gs-reveal group block rounded-3xl overflow-hidden bg-brand-dark text-white mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[300px] lg:h-full min-h-[380px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs mb-4 text-gray-400">
                  <span className="px-3 py-1 bg-brand-primary text-white rounded-full font-semibold">
                    Featured
                  </span>
                  <span>{featured.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span>{featured.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4 group-hover:text-brand-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-300 mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="gs-reveal group bg-white rounded-3xl p-4 flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className="h-[220px] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-brand-gray mb-3">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-gray" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray text-sm mb-4 flex-1">{post.excerpt}</p>
                  <div className="text-xs text-brand-gray pt-3 border-t border-gray-200">
                    By {post.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Stay in the loop"
        title={"Get our thinking,\nstraight to your inbox"}
        description="One email, once a month. Real insights, zero fluff."
        buttonLabel="Subscribe"
        buttonHref="/contact"
      />
    </>
  );
}
