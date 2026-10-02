import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { blogs } from "@/data/blogs";

function BlockRenderer({ block }) {
  if (block.type === "paragraph") {
    return <p>{block.content}</p>;
  }
  if (block.type === "heading") {
    return <h3 className="text-xl sm:text-2xl font-medium text-brand-dark mt-8 sm:mt-10 mb-2">{block.content}</h3>;
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-brand-primary pl-5 sm:pl-6 italic my-8 sm:my-10 text-brand-dark text-lg sm:text-xl leading-relaxed">
        &ldquo;{block.content}&rdquo;
      </blockquote>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="list-disc list-outside space-y-2 pl-6 sm:pl-8">
        {block.items.map((item, i) => (
          <li key={i} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogs.find((b) => b.slug === slug) || blogs[0];
  const others = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{post.title} — Greenova Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <PageHero
        label={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: post.title },
        ]}
      />

      {/* Article */}
      <article className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-4 pb-6 sm:pb-8 border-b border-gray-200 mb-6 sm:mb-8">
                <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-primary flex items-center justify-center font-bold shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-brand-dark truncate">{post.author}</div>
                  <div className="text-xs sm:text-sm text-brand-gray">
                    {post.authorRole} · {post.date} · {post.readTime}
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-brand-dark text-base sm:text-lg leading-relaxed break-words">
                <p className="text-lg sm:text-xl md:text-2xl font-medium">{post.excerpt}</p>
                {post.body.map((block, i) => (
                  <BlockRenderer key={i} block={block} />
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-wrap gap-2 items-center">
                <span className="text-sm font-semibold text-brand-dark mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-gray-300 text-xs sm:text-sm text-brand-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Back + Share */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 self-start space-y-5 sm:space-y-6">
              <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold mb-3">Get our monthly digest</h3>
                <p className="text-sm text-gray-400 mb-5">
                  Best essays, guides, and field notes. Once a month, no spam.
                </p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                  />
                  <button
                    type="submit"
                    className="bg-brand-primary text-white font-semibold px-4 py-3 rounded-xl hover:bg-[#821954] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200">
                <div className="text-xs uppercase tracking-wider text-brand-gray mb-3">
                  About the author
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark text-brand-primary flex items-center justify-center font-bold shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-brand-dark truncate">{post.author}</div>
                    <div className="text-sm text-brand-gray">{post.authorRole}</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f6e8f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark mb-10">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {others.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-3xl p-4 hover:shadow-xl transition-shadow"
              >
                <div className="h-[200px] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pb-2">
                  <div className="text-xs text-brand-gray mb-2">
                    {post.category} · {post.date}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark leading-snug">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        label="Talk to us"
        title={"Have thoughts\non this piece?"}
        description="We love hearing what our readers think. Send us a note anytime."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
