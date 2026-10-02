import Head from "next/head";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectStatsSection from "@/components/projects/ProjectStatsSection";
import FeaturedProjectsSection from "@/components/projects/FeaturedProjectsSection";
import CaseStudySection from "@/components/projects/CaseStudySection";
import ProjectsGridSection from "@/components/projects/ProjectsGridSection";
import ProcessQualitySection from "@/components/projects/ProcessQualitySection";
import ClientQuoteSection from "@/components/projects/ClientQuoteSection";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects — Greenova</title>
        <meta name="description" content="Greenova portfolio: residential, commercial, healthcare, and education clean-energy projects." />
      </Head>
      <ProjectsHero />
      <ProjectStatsSection />
      <FeaturedProjectsSection />
      <CaseStudySection />
      <ProjectsGridSection />
      <ProcessQualitySection />
      <ClientQuoteSection />
      <CtaBanner
        label="Have a project in mind?"
        title={"We love a good\nclean-energy challenge"}
        description="Send us the rough shape of your project. We'll reply with honest thoughts and next steps."
        buttonLabel="Send us a brief"
        buttonHref="/contact"
      />
    </>
  );
}
