import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";
import PageBanner from "@/components/PageBanner";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About – ${site.legalName}`,
  description: `Learn about ${site.fullName}, our legacy, products, commitment, and vision in industrial water treatment.`,
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageBanner title="About" />
      <AboutPageContent />
    </SiteShell>
  );
}
