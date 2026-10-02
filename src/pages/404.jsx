import Head from "next/head";
import Link from "next/link";
import Button from "@/components/shared/Button";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found — Greenova</title>
      </Head>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img
            src="/images/photo-1466611653911-95081537e5b7.webp"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-6 justify-center text-gray-300">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Error 404
            </div>

            <h1 className="text-[30vw] sm:text-[22vw] md:text-[18vw] lg:text-[220px] font-bold leading-none text-brand-primary tracking-tighter mb-4">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              We couldn&apos;t find that page
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto text-base sm:text-lg">
              The page you&apos;re looking for has either moved, been renamed, or never existed. Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/" variant="primary" size="lg" radius="pill">
                Back to home
              </Button>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white border-b border-white/30 pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                Or get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
