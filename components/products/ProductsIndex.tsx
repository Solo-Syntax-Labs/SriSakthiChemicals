import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function ProductsIndex() {
  return (
    <section className="products-index">
      <div className="container">
        <div className="products-index-intro">
          <h2>Our Product Range</h2>
          <p>
            {site.fullName} offers specialty water treatment and process chemicals
            engineered for boilers, cooling systems, chillers, RO plants, effluent
            treatment, foam control, and paper & sugar processing.
          </p>
        </div>

        <div className="products-index-grid">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="products-index-card"
            >
              <div className="products-index-icon">
                <Image src={product.icon} alt="" width={56} height={56} />
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span>Know More</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
