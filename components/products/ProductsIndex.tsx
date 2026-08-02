import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function ProductsIndex() {
  return (
    <section className="products-index">
      <div className="container">
        <div className="products-index-intro">
          <p className="section-kicker">Product catalogue</p>
          <h2>Our Product Range</h2>
          <p>
            {site.fullName} offers specialty water treatment and process chemicals
            engineered for boilers, cooling systems, chillers, RO plants, effluent
            treatment, foam control, and paper & sugar processing.
          </p>
        </div>

        <div className="products-index-grid">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="products-index-card"
            >
              <div className="products-index-card-top">
                <span className="products-index-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="products-index-icon">
                  <Image src={product.icon} alt="" width={56} height={56} />
                </div>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span className="products-index-link">View products →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
