import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogs } from "@/data/blogs";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

const pageLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "404", href: "/404" },
  { label: "Pricing", href: "/pricing" },
  { label: "Service Details", href: `/services/${services[0].slug}` },
  { label: "Projects Details", href: `/projects/${projects[0].slug}` },
  { label: "Blog Details", href: `/blogs/${blogs[0].slug}` },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  const isPagesActive = pageLinks.some((link) => isActive(link.href));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close drawer on route change
  useEffect(() => {
    const handleRouteChange = () => setMobileOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 dark-glass rounded-full mt-3 sm:mt-4 pl-5 sm:pl-6 pr-4 sm:pr-6 md:pl-8 md:pr-3 text-white">
            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label="Gulf Extrusion">
              <img
                src="/images/gex-logo.png"
                alt="Gulf Extrusion"
                className="h-7 sm:h-8 w-auto brightness-0 invert"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              {mainLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`nav-link transition-colors ${
                      active ? "is-active text-white" : "hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="relative group cursor-pointer">
                <span
                  className={`flex items-center gap-1 nav-link transition-colors ${
                    isPagesActive ? "is-active text-white" : "hover:text-white"
                  }`}
                >
                  Pages
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute top-full right-0 mt-4 w-56 bg-brand-dark border border-white/10 rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {pageLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          active
                            ? "bg-white/5 text-white"
                            : "hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block shrink-0">
              <Button href="/contact" variant="primary" size="md" radius="pill">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-brand-dark text-white z-[70] transform transition-transform duration-500 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col shadow-2xl`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <img src="/images/gex-logo.png" alt="Gulf Extrusion" className="h-7 w-auto brightness-0 invert" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <nav className="flex flex-col">
            {mainLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-3 text-lg font-medium border-b border-white/5 transition-colors ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-white" />}
                </Link>
              );
            })}

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Pages</p>
              <div className="flex flex-col">
                {pageLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-2.5 text-sm border-b border-white/5 transition-colors ${
                        active ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-5 border-t border-white/10 shrink-0">
          <Button href="/contact" variant="primary" size="md" radius="pill" fullWidth>
            Contact Us
          </Button>
          <div className="flex items-center justify-center gap-4 mt-4 text-gray-400 text-sm">
            <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms</Link>
          </div>
        </div>
      </aside>
    </>
  );
}
