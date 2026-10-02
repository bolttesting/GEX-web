import Head from "next/head";
import PageHero from "@/components/shared/PageHero";
import PricingSection from "@/components/services/PricingSection";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing — Greenova</title>
        <meta name="description" content="Transparent pricing for residential, commercial, and custom clean-energy systems." />
      </Head>
      <PageHero
        label="Pricing"
        title="Honest plans, no surprises"
        description="Every project is unique — these plans are a starting point. Your final quote comes from a site audit, with full transparency on every line item."
        image="/images/photo-1473341304170-971dccb5ac1e.webp"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      <PricingSection />
      <BenefitsSection />
      <ServicesFaqSection />
      <CtaBanner
        label="Ready to talk numbers?"
        title={"Let's build\na custom quote"}
        description="Tell us about your site and we'll send a detailed estimate within a few days."
        buttonLabel="Request a quote"
        buttonHref="/contact"
      />
    </>
  );
}
