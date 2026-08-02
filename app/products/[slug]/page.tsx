import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ProductPageContent from "@/components/products/ProductPageContent";
import SiteShell from "@/components/SiteShell";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";
import { site } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: `Products – ${site.legalName}` };

  return {
    title: `${product.title} – ${site.legalName}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <SiteShell>
      <PageBanner
        title="Our Products"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />
      <ProductPageContent product={product} />
    </SiteShell>
  );
}
