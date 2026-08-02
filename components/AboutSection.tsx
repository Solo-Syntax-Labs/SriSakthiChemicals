import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const highlights = [
  { value: "25+", label: "Years of field experience" },
  { value: "7+", label: "Chemical product lines" },
  { value: "ETP–DM", label: "Plant engineering support" },
];

export default function AboutSection() {
  return (
    <section className="home-about">
      <div className="container home-about-grid">
        <div className="home-about-copy">
          <p className="section-kicker">Built for industry water</p>
          <h2>Chemistry, plants, and support under one Indigon roof</h2>
          <p className="home-about-lead">
            {site.name} helps factories keep boilers, cooling systems, and treatment
            plants running clean — with specialty chemicals and practical on-ground
            guidance.
          </p>
          <p>
            From formulation through application support, we focus on measurable
            results: less scale, less corrosion, steadier throughput, and water
            programs that fit real plant conditions in India.
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
              src="/images/etp-plant.jpg"
              alt="Indigon industrial water treatment plant"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className="home-about-photo-image"
              priority
            />
          </div>
          <aside className="home-about-note">
            <p>Specialty chemicals + plant know-how for process water that stays reliable.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
