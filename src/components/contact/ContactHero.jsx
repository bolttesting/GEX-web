import PageHero from "@/components/shared/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      label="Contact Us"
      title="Let's start a conversation"
      description="Whether it's a quick question or a multi-megawatt project, we're happy to talk. Most replies land within one business day."
      image="/images/photo-1497436072909-60f360e1d4b1.webp"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    />
  );
}
