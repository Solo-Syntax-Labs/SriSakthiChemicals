import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProjectsPageContent from "@/components/projects/ProjectsPageContent";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Sri Sakthi Chemicals application programs across industries — RO, cooling, closed-loop, effluent, sugar, and paper process chemistry.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageBanner title="Our Projects" />
      <ProjectsPageContent />
    </SiteShell>
  );
}
