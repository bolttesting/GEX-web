import Head from "next/head";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MapSection from "@/components/contact/MapSection";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Greenova</title>
        <meta name="description" content="Get in touch with Greenova. We typically respond within one business day." />
      </Head>
      <ContactHero />
      <ContactFormSection />
      <MapSection />
    </>
  );
}
