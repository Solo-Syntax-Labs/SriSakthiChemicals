import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import PageBanner from "@/components/PageBanner";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact – ${site.legalName}`,
  description:
    "Contact Indigon Tech India Pvt Ltd for water treatment chemicals, plant products, and technical support.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageBanner title="Contact" />
      <ContactPageContent />
    </SiteShell>
  );
}
