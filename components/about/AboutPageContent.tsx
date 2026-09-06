import Image from "next/image";
import { aboutContent } from "@/lib/about";
import { site } from "@/lib/site";

export default function AboutPageContent() {
  const { intro, sections } = aboutContent;

  return (
    <div className="about-page">
      <section className="about-section about-intro">
        <div className="container">
          <div className="about-section-cont">
            <div className="about-sec-left">
              <div className="about-intro-media">
                <Image
                  src={intro.image}
                  alt={`About ${site.name}`}
                  width={900}
                  height={700}
                  className="about-intro-image"
                  priority
                />
              </div>
            </div>
            <div className="about-sec-right">
              <p className="section-kicker">{intro.eyebrow}</p>
              <h1>{intro.title}</h1>
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, index) => {
        const imageLeft = index % 2 === 1;

        return (
          <section
            className={`about-band ${index % 2 === 0 ? "is-soft" : "is-plain"}`}
            key={section.id}
          >
            <div className="container">
              <div className={`about-row ${imageLeft ? "is-image-left" : ""}`}>
                <div className="about-copy">
                  <p className="section-kicker">0{index + 1}</p>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="about-media">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 48vw"
                    className="plain-image"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
