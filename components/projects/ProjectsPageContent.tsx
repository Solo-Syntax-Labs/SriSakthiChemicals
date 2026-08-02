import Image from "next/image";
import { projectsContent } from "@/lib/projects";

export default function ProjectsPageContent() {
  const { introSections, stpBenefits, technicalBackground, plants } = projectsContent;

  return (
    <>
      {introSections.map((section) => (
        <section className="product-section projects-intro" key={section.title}>
          <div className="container">
            <div className="product-section-cont">
              <div className="product-section-left">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

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

      {plants.map((plant) => (
        <section className="ro-plant-bg" key={plant.title}>
          <div
            className={
              plant.imagePosition === "left"
                ? "project-section-container-2"
                : "project-section-container"
            }
          >
            <div className="project-section-image">
              <Image
                src={plant.image}
                alt={plant.title}
                width={900}
                height={700}
                className="project-plant-image"
              />
            </div>
            <div className="product-section-3-cont projects-plant-copy">
              <h3>{plant.title}</h3>
              <ul>
                {plant.items.map((item) => (
                  <li key={item}>
                    <div className="benifits-div">
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
