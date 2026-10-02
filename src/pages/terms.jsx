import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";

const sections = [
  {
    title: "Acceptance of terms",
    paragraphs: [
      "By accessing or using the Greenova website and services, you agree to these Terms & Conditions. If you do not agree, please do not use the service.",
    ],
  },
  {
    title: "Use of the site",
    paragraphs: [
      "You agree to use the site lawfully and respectfully. You may not copy, reproduce, or redistribute our content without prior written consent.",
    ],
  },
  {
    title: "Service engagements",
    paragraphs: [
      "Any engagement for clean-energy services is governed by a separate project agreement signed between Greenova and the client. These site Terms do not constitute such an agreement.",
    ],
  },
  {
    title: "Warranties",
    paragraphs: [
      "Hardware warranties are provided by the original manufacturer; workmanship warranties are provided directly by Greenova as specified in each project agreement.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Greenova is not liable for indirect or consequential damages arising from use of this site or its content.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of the site after updates constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions? Email info.greenova@gmail.com or write to 245 West 14th Street, New York, NY 11201.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions — Greenova</title>
        <meta name="description" content="Greenova terms and conditions." />
      </Head>
      <LegalLayout
        title="Terms & Conditions"
        updatedAt="May 1, 2026"
        sections={sections}
        breadcrumbLabel="Terms"
      />
    </>
  );
}
