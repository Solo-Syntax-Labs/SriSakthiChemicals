import Image from "next/image";
import { qualityContent } from "@/lib/quality";

export default function QualityPageContent() {
  const { title, intro, blocks, monitoringClosing } = qualityContent;

  return (
    <div className="quality-page">
      <section className="page-intro-band">
        <div className="container">
          <p className="section-kicker">Assurance</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
      </section>

      {blocks.map((block, index) => (
        <section
          className={`quality-band ${index % 2 === 0 ? "is-soft" : "is-plain"}`}
          key={block.title}
        >
          <div className="container">
            <div className={`quality-row ${index % 2 === 1 ? "is-flip" : ""}`}>
              <div className="quality-copy">
                <p className="section-kicker">0{index + 1}</p>
                <h3>{block.title}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {block.items ? (
                  <ul className="quality-item-list">
                    {block.items.map((item) => (
                      <li key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {block.title === "Ongoing checks after release" ? (
                  <p className="quality-closing">{monitoringClosing}</p>
                ) : null}
              </div>
              <div className="quality-media">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={640}
                  height={480}
                  className="quality-image"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
