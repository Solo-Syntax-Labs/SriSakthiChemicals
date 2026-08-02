import { site } from "@/lib/site";

export const aboutContent = {
  intro: {
    eyebrow: "Company profile",
    title: "Industrial water programs designed for Indian plants",
    image: "/images/etp-plant.jpg",
    paragraphs: [
      `${site.fullName} formulates and supplies specialty water-treatment chemicals for boilers, cooling towers, chillers, RO systems, effluent plants, and process applications.`,
      "Alongside chemistry, we support ETP, STP, RO, softening, and DM plant needs — so operations teams get products and practical guidance from one accountable partner.",
    ],
  },
  sections: [
    {
      id: "legacy",
      title: "Experience that shows up on the shop floor",
      variant: "tint-text-left" as const,
      image: "/images/about-image-4.png",
      imageStyle: "plain" as const,
      items: [
        `Decades of water-treatment work have shaped how ${site.name} selects chemistry, recommends dosing, and supports plant teams.`,
        "We prioritize stable performance over short-term fixes — protecting assets, energy efficiency, and uptime.",
        "Our portfolio has grown with customer needs: specialty chemicals, foam control, and plant systems for process and utility water.",
      ],
    },
    {
      id: "products",
      title: "What we manufacture and deliver",
      variant: "plain-image-left" as const,
      image: "/images/experiments-chemistry-lab-conducting-experiment-laboratory-scaled.jpg",
      imageStyle: "plain" as const,
      items: [
        "Specialty treatment chemicals for boilers, cooling towers, chillers, RO membranes, and effluent circuits.",
        "Process aids such as defoamers, coagulants, flocculants, biocides, and corrosion inhibitors built for industrial duty.",
        "Plant fabrication and installation support for ETP, STP, RO, softening, and DM systems when a full treatment train is needed.",
        "Recommendations tuned to source water, metallurgy, and operating pressure — not one generic formula for every site.",
      ],
    },
    {
      id: "commitment",
      title: "Quality and responsibility in every batch",
      variant: "tint-text-left" as const,
      image: "/images/coworkers-stacking-hands-together-scaled.jpg",
      imageStyle: "plain" as const,
      items: [
        "Every product line is checked against performance and consistency standards before it reaches your plant.",
        "We balance treatment strength with cost control and environmental care — cleaner discharge without fragile operations.",
        "Documentation, application guidance, and responsive support are part of how we stand behind our chemistry.",
      ],
    },
    {
      id: "customer-focus",
      title: "Partnership beyond product supply",
      variant: "plain-image-left" as const,
      image: "/images/customer-focus-text-write-paper-concept_384948-11990.jpg",
      imageStyle: "plain" as const,
      items: [
        "We start with your water analysis, equipment, and production constraints before recommending a program.",
        "Support can include site reviews, lab trials, dosing guidance, and follow-up when conditions change.",
        "Whether you run a compact utility setup or a multi-plant network, we stay close to the people who keep water systems online.",
      ],
    },
    {
      id: "innovation",
      title: "Improving formulations with plant feedback",
      variant: "tint-text-left" as const,
      image: "/images/branding-innovation-creative-inspire-concept-scaled.jpg",
      imageStyle: "plain" as const,
      items: [
        "Our lab and application teams refine products using real operating data from industrial customers.",
        "We invest in better inhibitors, cleaner biocides, and treatment approaches that reduce downtime and chemical waste.",
        "Growth for Indigon means stronger technical depth — not just a longer product list.",
      ],
    },
    {
      id: "vision",
      title: "Where we are headed",
      variant: "plain-image-left" as const,
      image: "/images/hero-2.webp",
      imageStyle: "plain" as const,
      items: [
        `We aim to be the preferred water-treatment partner for industries that need reliable chemistry, clear advice, and accountable service.`,
        "Our long-term goal is efficient plants with lower environmental load — cleaner water loops that protect both production and community resources.",
      ],
    },
  ],
};
