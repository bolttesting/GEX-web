import { useEffect, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
];

const utilityLinks = [
  { label: "404", href: "/404" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Projects Details", href: `/projects/${projects[0].slug}` },
  { label: "Service Details", href: `/services/${services[0].slug}` },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [mainOpen, setMainOpen] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const attachLenis = () => {
      window.lenis?.on("scroll", onScroll);
    };
    attachLenis();
    const attachId = window.setTimeout(attachLenis, 0);

    return () => {
      window.clearTimeout(attachId);
      window.removeEventListener("scroll", onScroll);
      window.lenis?.off("scroll", onScroll);
    };
  }, []);

  const handleBackToTop = () => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: reduceMotion ? 0 : 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <>
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg transition-all duration-300 hover:bg-[#821954] ${
        showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
    <footer className="bg-brand-dark text-white pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Socials — second on mobile */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <h4 className="mb-6 text-lg font-semibold">Follow Us</h4>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href="https://gulfex.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" /></svg>
              </a>
              <a href="https://gulfex.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29Z" /></svg>
              </a>
              <a href="https://gulfex.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" /></svg>
              </a>
              <a href="https://gulfex.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" /></svg>
              </a>
            </div>
            <p className="mx-auto max-w-xs text-sm text-gray-400 lg:mx-0">
              Gulf Extrusion LLC, the flagship company of Al Ghurair Group. Aluminium extrusion from Dubai since 1976.
            </p>
          </div>

          {/* Page lists — each one opens and closes on mobile */}
          <div className="order-3 flex w-full flex-col items-center gap-2 lg:contents">
            <div className="w-full text-center lg:order-2 lg:w-auto lg:text-left">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-lg font-semibold lg:hidden"
                aria-expanded={mainOpen}
                onClick={() => setMainOpen((open) => !open)}
              >
                Main Pages
                <svg
                  className={`h-4 w-4 transition-transform ${mainOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h4 className="mb-6 hidden text-lg font-semibold lg:block">Main Pages</h4>
              <ul className={`${mainOpen ? "mt-4 flex" : "hidden"} flex-col items-center gap-3 text-gray-400 lg:mt-0 lg:flex lg:items-start`}>
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-brand-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full text-center lg:order-3 lg:w-auto lg:text-left">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-lg font-semibold lg:hidden"
                aria-expanded={utilityOpen}
                onClick={() => setUtilityOpen((open) => !open)}
              >
                Utility Pages
                <svg
                  className={`h-4 w-4 transition-transform ${utilityOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h4 className="mb-6 hidden text-lg font-semibold lg:block">Utility Pages</h4>
              <ul className={`${utilityOpen ? "mt-4 flex" : "hidden"} flex-col items-center gap-3 text-gray-400 lg:mt-0 lg:flex lg:items-start`}>
                {utilityLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-brand-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo, then newsletter — first on mobile */}
          <div className="order-1 flex flex-col items-center text-center lg:order-4 lg:items-start lg:text-left">
            <img
              src="/images/gulf-extrusion-logo.png"
              alt="Gulf Extrusion"
              className="mx-auto mb-8 h-auto w-full max-w-[280px] lg:mx-0"
            />
            <h4 className="mb-6 text-lg font-semibold">
              Subscribe to our newsletter for weekly updates, market and special offers.
            </h4>
            <form className="relative w-full max-w-sm lg:max-w-none" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent border-b border-white/20 py-3 pr-12 focus:outline-none focus:border-brand-primary text-white placeholder-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand-primary text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#821954] transition-colors"
                aria-label="Subscribe"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L120.65,160l44.69-44.69a8,8,0,0,0-11.31-11.31L109.34,148.69,37.53,111.35,226.2,53.07Z" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-12 mt-8">
          <div className="grid grid-cols-1 items-start gap-8 pb-12 text-center md:grid-cols-2 md:text-left">
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Call Us</p>
              <p className="text-lg">Toll free 800-485339</p>
              <a href="mailto:sales@gulfex.com" className="text-gray-400 hover:text-brand-primary transition-colors">
                sales@gulfex.com
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Visit Us</p>
              <p className="text-lg">PO Box 5598</p>
              <p className="text-gray-400">Dubai, United Arab Emirates</p>
            </div>

          </div>
        </div>
      </div>

      {/* GREENOVA full-width */}
      <div className="w-full flex justify-center overflow-hidden leading-none mt-4 px-4">
        <h2 className="text-brand-primary font-bold tracking-tight whitespace-nowrap leading-[0.85] text-[clamp(3rem,18vw,20rem)]">
          GULFEX
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 pt-6 border-t border-white/5 gap-4">
          <p>
            Copyright © 2026, Gulf Extrusion. All rights reserved. Designed &amp; developed by{" "}
            <a
              href="https://LogixContact.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Logix Contact
            </a>
          </p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
