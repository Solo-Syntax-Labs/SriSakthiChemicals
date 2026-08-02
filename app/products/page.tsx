import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProductsIndex from "@/components/products/ProductsIndex";
import SiteShell from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Products – ${site.legalName}`,
  description:
    "Explore Indigon specialty chemicals for boiler, cooling tower, chillers, RO, effluent treatment, defoamers, and paper & sugar processing.",
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <PageBanner title="Our Products" />
      <ProductsIndex />
    </SiteShell>
  );
}
