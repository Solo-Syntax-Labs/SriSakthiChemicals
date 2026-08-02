import Image from "next/image";
import { qualityContent } from "@/lib/quality";

export default function QualityPageContent() {
  const { title, intro, blocks, monitoringClosing } = qualityContent;

  return (
    <section className="quality-page">
      <div className="container">
        <div className="quality-page-section-cont">
          <h1>{title}</h1>
          <p className="quality-intro">{intro}</p>

          {blocks.map((block) => {
            const isImageRight = block.imagePosition === "right";
            const rowClass = isImageRight ? "quality-section-1" : "quality-section-2";

            const text = (
              <div className={isImageRight ? "quality-sec-1-left" : "quality-sec-2-right"}>
                <h3>{block.title}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {block.items ? (
                  <ul>
                    {block.items.map((item) => (
                      <li key={item.title}>
                        <div className="benifits-div">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {block.title === "Continuous Monitoring and Maintenance" ? (
                  <p>{monitoringClosing}</p>
                ) : null}
              </div>
            );

            const image = (
              <div className={isImageRight ? "quality-sec-1-right" : "quality-sec-2-left"}>
                <Image
                  src={block.image}
                  alt={block.title}
                  width={640}
                  height={480}
                  className="quality-image"
                />
              </div>
            );

            return (
              <div className={rowClass} key={block.title}>
                {isImageRight ? (
                  <>
                    {text}
                    {image}
                  </>
                ) : (
                  <>
                    {image}
                    {text}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
