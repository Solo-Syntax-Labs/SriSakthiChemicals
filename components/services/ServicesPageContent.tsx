import Image from "next/image";
import Link from "next/link";
import { servicesContent } from "@/lib/services";

export default function ServicesPageContent() {
  const { cards, audit } = servicesContent;

  return (
    <>
      <section className="services-section">
        <div className="container">
          <div className="services-sec-cont">
            <div className="services-section-left">
              {cards.map((card) => (
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
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <div className="service-btn">
                    <Link href="/contact">
                      <button type="button">Contact Us</button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section-2">
        <div className="container">
          <div className="service-sec-2-cont">
            <h1>{audit.title}</h1>
            <p className="service-audit-intro">{audit.intro}</p>

            {audit.blocks.map((block) => {
              const isImageLeft = block.imagePosition === "left";
              const rowClass = isImageLeft
                ? "boiler-aduit-section"
                : "boiler-aduit-section-2";

              const image = (
                <div
                  className={
                    isImageLeft ? "boilder-aduit-sec-left" : "boiler-audit-sec-2-right"
                  }
                >
                  <Image
                    src={block.image}
                    alt={block.title}
                    width={720}
                    height={480}
                    className="audit-image"
                  />
                </div>
              );

              const text = (
                <div
                  className={
                    isImageLeft ? "boiler-audit-sec-right" : "boilder-aduit-sec-2-left"
                  }
                >
                  <h3>{block.title}</h3>
                  {block.description ? <p>{block.description}</p> : null}
                  {block.benefits ? (
                    <ul>
                      {block.benefits.map((benefit) => (
                        <li key={benefit.title}>
                          <h4>{benefit.title}</h4>
                          <p>{benefit.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );

              return (
                <div className={rowClass} key={block.title}>
                  {isImageLeft ? (
                    <>
                      {image}
                      {text}
                    </>
                  ) : (
                    <>
                      {text}
                      {image}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
