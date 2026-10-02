import PageHero from "@/components/shared/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      label="Our Services"
      title="Clean-energy services, end to end"
      description="From the first site visit to a live dashboard showing your savings — we design, install, and care for every part of your energy system."
      image="/images/photo-1508514177221-188b1cf16e9d.webp"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
    />
  );
}
