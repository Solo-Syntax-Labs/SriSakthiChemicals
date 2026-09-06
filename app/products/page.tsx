import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProductsIndex from "@/components/products/ProductsIndex";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Sri Sakthi Chemicals specialty programs for boiler, cooling tower, chillers, RO, effluent treatment, defoamers, and paper & sugar processing.",
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <PageBanner title="Our Products" />
      <ProductsIndex />
    </SiteShell>
  );
}
