import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "Greenova (\u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) respects your privacy. This policy explains what we collect, how we use it, and the choices you have.",
      "By using our site, you agree to the practices described below. We only collect what we need to serve you well — nothing more.",
    ],
  },
  {
    title: "Information we collect",
    paragraphs: [
      "When you contact us or fill in a form, we collect the details you provide — such as your name, email, phone number, and the message itself.",
      "We also collect basic analytics (pages viewed, rough location by country, device type) to improve the site experience.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "Your contact details are used to respond to your inquiries and, if you opt in, to send you occasional updates about our services.",
      "Analytics are used to understand which content is helpful and where we can improve. We never sell personal data.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "We use strictly necessary cookies for site functionality and optional analytics cookies. You can manage preferences in your browser settings at any time.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "Contact inquiries are retained for up to 24 months unless you request earlier deletion. Analytics data is anonymized after 14 months.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of your personal data at any time by emailing info.greenova@gmail.com.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about this policy, reach us at 245 West 14th Street, New York, NY 11201, or info.greenova@gmail.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Greenova</title>
        <meta name="description" content="Greenova privacy policy." />
      </Head>
      <LegalLayout
        title="Privacy Policy"
        updatedAt="May 1, 2026"
        sections={sections}
        breadcrumbLabel="Privacy"
      />
    </>
  );
}
