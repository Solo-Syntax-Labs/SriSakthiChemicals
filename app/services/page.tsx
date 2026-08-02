import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services – ${site.legalName}`,
  description:
    "Indigon services include boiler descaling, equipment erection & commissioning, water audits, consultancy, lab testing, and boiler energy audits.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageBanner title="Our Services" />
      <ServicesPageContent />
    </SiteShell>
  );
}
