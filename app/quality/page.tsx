import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import QualityPageContent from "@/components/quality/QualityPageContent";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Quality – ${site.legalName}`,
  description:
    "Learn about Indigon quality assurance, ISO standards, in-house R&D, wet lab analysis, continuous monitoring, and sustainability commitment.",
};

export default function QualityPage() {
  return (
    <SiteShell>
      <PageBanner title="Quality" />
      <QualityPageContent />
    </SiteShell>
  );
}
