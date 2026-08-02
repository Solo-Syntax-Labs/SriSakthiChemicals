import Image from "next/image";
import { aboutContent } from "@/lib/about";

export default function AboutPageContent() {
  const { intro, sections } = aboutContent;

  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-section-cont">
            <div className="about-sec-left">
              <Image
                src={intro.image}
                alt="About Indigon"
                width={720}
                height={720}
                className="about-intro-image"
                priority
              />
            </div>
            <div className="about-sec-right">
              <h6>{intro.eyebrow}</h6>
              <h1>{intro.title}</h1>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sections.map((section) => {
        const isTint = section.variant.startsWith("tint");
        const imageLeft = section.variant.includes("image-left");
        const sectionClass = isTint
          ? section.id === "legacy"
            ? "about-section-2"
            : "about-sec-4"
          : section.id === "products"
            ? "about-sec-3"
            : "about-sec-5";

        const image = (
          <div className={imageLeft ? "about-media about-media-left" : "about-media about-media-right"}>
            <Image
              src={section.image}
              alt={section.title}
              width={900}
              height={700}
              className={section.imageStyle === "slant" ? "slant-image" : "plain-image"}
            />
          </div>
        );

        const text = (
          <div className={imageLeft ? "about-copy about-copy-right" : "about-copy about-copy-left"}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          </div>
        );

        return (
          <section className={sectionClass} key={section.id}>
            <div className="container">
              <div className="about-row">
                {imageLeft ? (
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
            </div>
          </section>
        );
      })}
    </>
  );
}
