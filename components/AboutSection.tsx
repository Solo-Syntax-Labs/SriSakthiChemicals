import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const highlights = [
  { value: "30+", label: "Years of field experience" },
  { value: "15MT+", label: "Daily production capacity" },
  { value: "R&D", label: "Lab & application support" },
];

export default function AboutSection() {
  return (
    <section className="home-about">
      <div className="container home-about-grid">
        <div className="home-about-copy">
          <p className="section-kicker">Built for industry water</p>
          <h2>Chemistry and support under one {site.shortName} roof</h2>
          <p className="home-about-lead">
            {site.name} helps factories keep boilers, cooling systems, RO trains,
            and effluent plants running clean — with specialty chemicals and
            practical on-ground guidance.
          </p>
          <p>
            From formulation through application support, we focus on measurable
            results: less scale, less corrosion, steadier throughput, and water
            programs that fit real plant conditions.
          </p>

          <div className="home-about-stats">
            {highlights.map((item) => (
              <div className="home-about-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className="home-about-cta">
            Read our story
          </Link>
        </div>

        <div className="home-about-visual">
          <div className="home-about-photo">
            <Image
              src="/images/brand/brochure-lab.png"
              alt={`${site.name} laboratory and quality capability`}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="home-about-photo-image"
              priority
            />
          </div>
          <aside className="home-about-note">
            <p>
              Manufacturer & exporter of water treatment chemicals and speciality
              additives.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
