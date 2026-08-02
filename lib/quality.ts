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
  intro: `At ${site.name}, quality means consistent chemistry, clear testing, and products that perform after they leave our facility — not just paperwork on a shelf.`,
  blocks: [
    {
      title: "Process control from raw material to dispatch",
      imagePosition: "right",
      image: "/images/quality/process-control.jpg",
      paragraphs: [
        "Our quality system covers raw-material checks, in-process controls, and finished-batch testing for composition, performance, and application safety before release.",
      ],
    },
    {
      title: "Standards we work to",
      imagePosition: "left",
      image: "/images/quality/standards.jpg",
      paragraphs: [
        `${site.name} maintains ISO 9001:2015 practices so product and service delivery stay consistent with customer and regulatory expectations.`,
        "Where relevant, formulations and methods also align with recognized industrial and environmental guidance used by our customer segments.",
      ],
    },
    {
      title: "In-house R&D for better programs",
      imagePosition: "right",
      image: "/images/quality/rnd.jpg",
      paragraphs: [
        "Our lab team refines inhibitors, biocides, and process aids using plant feedback — improving stability, handling, and treatment results under Indian operating conditions.",
      ],
    },
    {
      title: "Wet lab support for your water",
      imagePosition: "left",
      image: "/images/quality/wet-lab.jpg",
      paragraphs: [
        "Customer water samples are evaluated so recommendations match actual hardness, contamination, and process constraints — then performance can be reviewed again after dosing starts.",
      ],
    },
    {
      title: "Ongoing checks after release",
      imagePosition: "right",
      image: "/images/quality/monitoring.jpg",
      paragraphs: [
        "Quality does not stop at dispatch. We keep watching batch consistency and field feedback so programs stay effective over time.",
      ],
      items: [
        {
          title: "Batch testing",
          description: "Each lot is verified before it is released to customers.",
        },
        {
          title: "Stability tracking",
          description: "Shelf performance is monitored so chemistry stays dependable in storage.",
        },
        {
          title: "Customer feedback loops",
          description: "Site results help us tighten formulations and application guidance.",
        },
      ],
    },
    {
      title: "Sustainability as a quality metric",
      imagePosition: "left",
      image: "/images/quality/sustainability.jpg",
      paragraphs: [
        `We design for effective treatment with responsible chemistry — helping plants protect assets while reducing unnecessary chemical load and environmental impact.`,
      ],
    },
  ] satisfies QualityBlock[],
  monitoringClosing:
    "Advanced lab methods and disciplined release checks keep Indigon products consistent from batch to batch.",
};
