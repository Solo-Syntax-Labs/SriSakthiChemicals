import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function ProductRange() {
  return (
    <section className="homepage-sec-2">
      <div className="container">
        <h3>Our Product Range</h3>
        <div className="homepage-sec-2-cont">
          <div className="homepage-sec-2-left">
            <h2>Redefining Excellence through chemical expertise</h2>
            <p>
              At {site.fullName}, we provide a comprehensive range of boiler water
              treatment chemicals for low, medium, and high-pressure boilers,
              including power plant boilers.
            </p>
            <Link href="/products/boiler-treatment-chemicals">
              <button type="button">Know More</button>
            </Link>
          </div>
          <div className="homepage-sec-2-right">
            {site.products.map((product) => (
              <div className="product-range-icon-section" key={product.href}>
                <div className="range-icon">
                  <Link href={product.href}>
                    <Image
                      src={product.icon}
                      alt={product.label}
                      width={75}
                      height={75}
                    />
                  </Link>
                </div>
                <h4>
                  <Link href={product.href}>{product.label}</Link>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
