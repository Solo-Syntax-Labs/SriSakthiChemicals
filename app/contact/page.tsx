import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import PageBanner from "@/components/PageBanner";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sri Sakthi Chemicals (P) Ltd for water treatment chemicals, specialty additives, and technical application support.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageBanner title="Contact" />
      <ContactPageContent />
    </SiteShell>
  );
}
