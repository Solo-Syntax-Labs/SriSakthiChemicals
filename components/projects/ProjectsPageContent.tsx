import Image from "next/image";
import { projectsContent } from "@/lib/projects";

export default function ProjectsPageContent() {
  const { intro, introSections, stpBenefits, technicalBackground, plants } =
    projectsContent;

  return (
    <div className="projects-page">
      <section className="page-intro-band">
        <div className="container">
          <p className="section-kicker">Plant engineering</p>
          <h2>Projects built around your water duty</h2>
          <p>{intro}</p>
        </div>
      </section>

      <section className="projects-intro-grid">
        <div className="container projects-intro-cards">
          {introSections.map((section, index) => (
            <article className="projects-intro-card" key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-panel-section">
        <Image
          src={stpBenefits.background}
          alt=""
          fill
          sizes="100vw"
          className="projects-panel-bg"
        />
        <div className="container projects-panel-wrap">
          <div className={`projects-panel projects-panel-${stpBenefits.align}`}>
            <p className="section-kicker">STP technology</p>
            <h3>{stpBenefits.title}</h3>
            <ul>
              {stpBenefits.items.map((item) => (
                <li key={item.title}>
                  <div className="benifits-div">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-panel-section">
        <Image
          src={technicalBackground.background}
          alt=""
          fill
          sizes="100vw"
          className="projects-panel-bg"
        />
        <div className="container projects-panel-wrap">
          <div
            className={`projects-panel projects-panel-${technicalBackground.align}`}
          >
            <p className="section-kicker">How it works</p>
            <h3>{technicalBackground.title}</h3>
            <ul>
              {technicalBackground.items.map((item) => (
                <li key={item.description.slice(0, 40)}>
                  <div className="benifits-div">
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-plants">
        <div className="container">
          <div className="page-intro-band is-compact">
            <p className="section-kicker">Core plant types</p>
            <h2>RO, softening, and DM systems</h2>
          </div>
        </div>
        {plants.map((plant, index) => (
          <div
            className={`projects-plant-row ${index % 2 === 1 ? "is-flip" : ""}`}
            key={plant.title}
          >
            <div className="projects-plant-media">
              <Image
                src={plant.image}
                alt={plant.title}
                width={900}
                height={700}
                className="project-plant-image"
              />
            </div>
            <div className="projects-plant-copy">
              <p className="section-kicker">0{index + 1}</p>
              <h3>{plant.title}</h3>
              <ul>
                {plant.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
