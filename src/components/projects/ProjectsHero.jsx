import PageHero from "@/components/shared/PageHero";

export default function ProjectsHero() {
  return (
    <PageHero
      label="Our Projects"
      title="Built to perform. Designed to last."
      description="Every project is a story — of constraints met, of craft applied, and of communities powered for decades to come."
      image="/images/photo-1473341304170-971dccb5ac1e.webp"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Projects" },
      ]}
    />
  );
}
