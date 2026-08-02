import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function AboutSection() {
  return (
    <section className="homepage-section-1">
      <div className="container">
        <div className="homepage-sec-1-cont">
          <div className="homepage-sec-1-left">
            <Image
              src="/images/04.png"
              alt="Indigon water treatment solutions"
              width={720}
              height={720}
              className="about-main-image"
            />
          </div>
          <div className="homepage-sec-1-right">
            <div className="blurred-logo">
              <Image src="/images/03.png" alt="" width={180} height={180} />
            </div>
            <h1>About</h1>
            <h2>Empowering Industries with Chemical Ingenuity</h2>
            <p>
              {site.fullName} was founded with a clear vision: to revolutionize
              the water treatment industry through innovation, expertise, and
              dedication. Over the years, we have evolved from a modest chemical
              manufacturer into a trusted leader, providing state-of-the-art water
              treatment solutions to industries across various sectors.
            </p>
            <Link href="/about">
              <button type="button">Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
