import { site } from "@/lib/site";

export type QualityBlock = {
  title: string;
  paragraphs: string[];
  image: string;
  imagePosition: "left" | "right";
  items?: { title: string; description: string }[];
};

export const qualityContent = {
  title: "Quality that holds up in real plant conditions",
  intro: `At ${site.name}, quality means consistent chemistry, clear testing, and products that perform after they leave our facility — backed by lab capability and disciplined production practice.`,
  blocks: [
    {
      title: "Process control from lab to dispatch",
      imagePosition: "right",
      image: "/images/brand/brochure-lab.png",
      paragraphs: [
        "Our quality approach covers raw-material checks, in-process controls, and finished-batch testing for composition, performance, and application safety before release.",
      ],
    },
    {
      title: "Laboratory & R&D capability",
      imagePosition: "left",
      image: "/images/quality/rnd.jpg",
      paragraphs: [
        `${site.shortName} maintains a state-of-the-art laboratory and R&D centre so formulations can be refined against real plant feedback and water conditions.`,
        "Well-trained, process-specific personnel support both production consistency and application troubleshooting.",
      ],
    },
    {
      title: "Production capacity with QA discipline",
      imagePosition: "right",
      image: "/images/quality/process-control.jpg",
      paragraphs: [
        "With production capacity of over 15 MT per day, established quality assurance practices help batches stay consistent as volumes scale.",
      ],
    },
    {
      title: "Wet lab support for your water",
      imagePosition: "left",
      image: "/images/quality/wet-lab.jpg",
      paragraphs: [
        "Customer water samples and system data guide product selection and dosing — then performance can be reviewed again after programs start.",
      ],
    },
    {
      title: "Health, safety & ongoing checks",
      imagePosition: "right",
      image: "/images/quality/monitoring.jpg",
      paragraphs: [
        "Health and safety procedures are implemented on the floor, and quality does not stop at dispatch — we watch batch consistency and field feedback over time.",
      ],
      items: [
        {
          title: "Batch testing",
          description: "Lots are verified before release to customers.",
        },
        {
          title: "Application monitoring",
          description: "Field trends help confirm the program is holding in operation.",
        },
        {
          title: "Customer feedback loops",
          description: "Site results help us tighten formulations and guidance.",
        },
      ],
    },
    {
      title: "Responsible chemistry for plant and environment",
      imagePosition: "left",
      image: "/images/quality/sustainability.jpg",
      paragraphs: [
        `We design for effective treatment with responsible chemistry — helping plants protect assets while reducing unnecessary chemical load and environmental impact.`,
      ],
    },
  ] satisfies QualityBlock[],
  monitoringClosing:
    "Lab methods, production discipline, and application review keep Sri Sakthi Chemicals products consistent from batch to batch.",
};
