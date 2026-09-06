import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sri Sakthi Chemicals services include system audits, program selection, troubleshooting, application monitoring, operator training, and program optimisation.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageBanner title="Our Services" />
      <ServicesPageContent />
    </SiteShell>
  );
}
