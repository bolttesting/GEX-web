import Head from "next/head";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ApproachSection from "@/components/services/ApproachSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import PricingSection from "@/components/services/PricingSection";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — Greenova</title>
        <meta
          name="description"
          content="Greenova services: residential solar, commercial energy, storage, EV charging, monitoring, and consulting."
        />
      </Head>
      <ServicesHero />
      <ServicesGridSection />
      <ApproachSection />
      <BenefitsSection />
      <IndustriesSection />
      <PricingSection />
      <ServicesFaqSection />
      <CtaBanner
        label="Let&apos;s Talk"
        title={"Not sure which service\nfits your goals?"}
        description="We'll walk you through it. No pressure, no jargon — just a free 20-minute consultation."
        buttonLabel="Book a free call"
        buttonHref="/contact"
      />
    </>
  );
}
