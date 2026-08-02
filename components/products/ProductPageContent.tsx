import Image from "next/image";
import Link from "next/link";
import type { ProductPageData } from "@/lib/products";

type ProductPageContentProps = {
  product: ProductPageData;
};

export default function ProductPageContent({ product }: ProductPageContentProps) {
  return (
    <div className="product-page">
      <section className="product-section">
        <div className="container">
          <div className="product-intro">
            <p className="section-kicker">Specialty chemicals</p>
            <h2>{product.title}</h2>
            <p>{product.intro}</p>
            <Link href="/contact" className="product-intro-cta">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <section className="product-section-2">
        <div className="product-sec-tion-2-image">
          <Image
            src={product.range.sideImage}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="product-side-image"
            priority
          />
          <div className="product-media-caption">
            <span>{product.shortLabel}</span>
            <strong>Application focus</strong>
          </div>
        </div>
        <div className="product-section-2-cont">
          <p className="section-kicker">Range</p>
          <h3>{product.range.heading}</h3>
          <div className="product-sec-2-box-section">
            {product.range.items.map((item) => (
              <article className="product-sec-2-box" key={item.title}>
                <div className="box-img" aria-hidden>
                  <span />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section-3">
        <div className="product-section-3-cont">
          <p className="section-kicker">Why Indigon</p>
          <h3>{product.secondary.heading}</h3>
          <ul
            className={
              product.secondary.variant === "benefits" ? "benefits-list" : "product-list"
            }
          >
            {product.secondary.items.map((item) => (
              <li key={item.title}>
                <div className="benifits-div">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-sec-tion-3-image">
          <Image
            src={product.secondary.sideImage}
            alt={product.secondary.heading}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="product-side-image"
          />
        </div>
      </section>
    </div>
  );
}
