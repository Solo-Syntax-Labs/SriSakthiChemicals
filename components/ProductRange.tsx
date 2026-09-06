import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function ProductRange() {
  return (
    <section className="home-products">
      <div className="container">
        <div className="home-products-head">
          <p className="section-kicker">Specialty chemistry</p>
          <h2>Product lines built for utility and process water</h2>
          <p>
            {site.name} supplies treatment programs for boilers, cooling systems, chillers,
            RO circuits, effluent trains, foam control, and sugar/paper process needs —
            with guidance matched to your plant conditions.
          </p>
        </div>

        <div className="home-products-grid">
          {site.products.map((product, index) => (
            <Link href={product.href} className="home-products-card" key={product.href}>
              <span className="home-products-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="home-products-icon">
                <Image src={product.icon} alt="" width={56} height={56} />
              </div>
              <h3>{product.label}</h3>
              <span className="home-products-link">Explore →</span>
            </Link>
          ))}
        </div>

        <div className="home-products-cta-wrap">
          <Link href="/products" className="home-products-cta">
            Browse full catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
