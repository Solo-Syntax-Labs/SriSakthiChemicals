import Image from "next/image";
import Link from "next/link";

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
        src="/images/inner-banner-scaled.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="inner-banner-bg"
      />
      <div className="inner-banner-overlay" />
      <div className="inner-banner-section">
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
