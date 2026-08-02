import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProjectsPageContent from "@/components/projects/ProjectsPageContent";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects – ${site.legalName}`,
  description:
    "Explore Indigon water treatment plant projects including STP Ozone Bioxy Plasma technology, RO plants, Softening plants, and DM plants.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageBanner title="Our Projects" />
      <ProjectsPageContent />
    </SiteShell>
  );
}
