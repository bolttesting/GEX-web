import Head from "next/head";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionValuesSection from "@/components/about/MissionValuesSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import TimelineSection from "@/components/about/TimelineSection";
import ImpactStatsSection from "@/components/about/ImpactStatsSection";
import TeamSection from "@/components/about/TeamSection";
import PartnersSection from "@/components/about/PartnersSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — Greenova</title>
        <meta
          name="description"
          content="Learn about Greenova — a modern clean-energy company blending biology and technology for a sustainable future."
        />
      </Head>
      <AboutHero />
      <StorySection />
      <MissionValuesSection />
      <PhilosophySection />
      <TimelineSection />
      <ImpactStatsSection />
      <TeamSection />
      <PartnersSection />
      <CtaBanner
        label="Work with us"
        title={"Ready to plant\nyour energy future?"}
        description="We'd love to help you design, build, and monitor a system that fits."
        buttonLabel="Start a conversation"
        buttonHref="/contact"
      />
    </>
  );
}
