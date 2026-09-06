import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import QualityPageContent from "@/components/quality/QualityPageContent";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Learn about Sri Sakthi Chemicals quality assurance, laboratory and R&D capability, wet lab support, continuous monitoring, and responsible chemistry.",
};

export default function QualityPage() {
  return (
    <SiteShell>
      <PageBanner title="Quality" />
      <QualityPageContent />
    </SiteShell>
  );
}
