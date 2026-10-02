import { useRef, useState } from "react";
import useReveal from "@/hooks/useReveal";
import Button from "@/components/shared/Button";

const topics = ["Residential Solar", "Commercial Energy", "Storage & EV", "Consulting", "Other"];

export default function ContactFormSection() {
  const ref = useRef(null);
  const [topic, setTopic] = useState(topics[0]);
  const [submitted, setSubmitted] = useState(false);
  useReveal(ref);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="gs-reveal space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
                <span className="w-2 h-2 rounded-full bg-brand-dark" />
                Reach Out
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark mb-4">
                Let&apos;s build something that lasts
              </h2>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                Fill in a few details and we&apos;ll respond with tailored next steps within one business day.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Call</div>
                  <div className="font-medium text-brand-dark">+1 (212) 555 - 4831</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Email</div>
                  <div className="font-medium text-brand-dark">info.greenova@gmail.com</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Visit</div>
                  <div className="font-medium text-brand-dark">245 West 14th Street<br/>New York, NY 11201</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="text-xs uppercase tracking-wider text-brand-gray mb-3">Office Hours</div>
              <p className="text-brand-dark">Monday – Friday<br/>9:00 AM – 6:00 PM EST</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="gs-reveal bg-brand-dark text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Thanks for reaching out</h3>
                <p className="text-gray-400 mb-6">
                  We&apos;ve received your message. Expect a reply within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-primary text-sm font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Send us a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                    I&apos;m interested in
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          topic === t
                            ? "bg-brand-primary text-white font-semibold"
                            : "bg-white/5 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us a little about your project or question..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" radius="rounded" fullWidth>
                  Send message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
