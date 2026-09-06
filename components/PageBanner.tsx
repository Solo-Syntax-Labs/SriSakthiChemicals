import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type PageBannerProps = {
  title: string;
  crumbs?: { label: string; href?: string }[];
};

export default function PageBanner({ title, crumbs }: PageBannerProps) {
  const items = crumbs ?? [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <section className="inner-banner">
      <Image
        src="/images/hero-2.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="inner-banner-bg"
      />
      <div className="inner-banner-overlay" />
      <div className="inner-banner-glow" aria-hidden />
      <div className="inner-banner-section">
        <p className="inner-banner-kicker">{site.name}</p>
        <h3>{title}</h3>
        <ul className="breadcrumb">
          {items.map((item) => (
            <li key={item.label}>
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
