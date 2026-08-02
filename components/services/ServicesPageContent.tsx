import Image from "next/image";
import Link from "next/link";
import { servicesContent } from "@/lib/services";

export default function ServicesPageContent() {
  const { intro, cards, audit } = servicesContent;

  return (
    <div className="services-page">
      <section className="page-intro-band">
        <div className="container">
          <p className="section-kicker">Field & lab support</p>
          <h2>Services that keep water systems efficient</h2>
          <p>{intro}</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {cards.map((card, index) => (
              <article className="services-card" key={card.title}>
                <div className="services-icon">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={480}
                    height={240}
                    className="services-icon-image"
                  />
                </div>
                <span className="services-card-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
                <Link href="/contact" className="services-card-link">
                  Request support →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-audit">
        <div className="container">
          <div className="page-intro-band is-compact">
            <p className="section-kicker">Boiler performance</p>
            <h2>{audit.title}</h2>
            <p>{audit.intro}</p>
          </div>

          {audit.blocks.map((block, index) => (
            <div
              className={`service-audit-row ${index % 2 === 1 ? "is-flip" : ""}`}
              key={block.title}
            >
              <div className="service-audit-media">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={720}
                  height={480}
                  className="audit-image"
                />
              </div>
              <div className="service-audit-copy">
                <p className="section-kicker">0{index + 1}</p>
                <h3>{block.title}</h3>
                {block.description ? <p>{block.description}</p> : null}
                {block.benefits ? (
                  <ul className="service-benefit-list">
                    {block.benefits.map((benefit) => (
                      <li key={benefit.title}>
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
