import { site } from "@/lib/site";

export const aboutContent = {
  intro: {
    eyebrow: "Company profile",
    title: "Manufacturer & exporter of water treatment chemicals",
    image: "/images/brand/brochure-lab.png",
    paragraphs: [
      `${site.fullName} (${site.shortName}) is a leading manufacturer, exporter, and supplier of water treatment chemicals and speciality additives for cooling towers, boilers, RO plants, ETPs, STPs, and other process applications.`,
      "With over 30 years of experience and an R&D-led approach, we deliver practical chemistry and application support under one roof for plants across India and international markets.",
    ],
  },
  sections: [
    {
      id: "legacy",
      title: "Experience that shows up on the shop floor",
      variant: "tint-text-left" as const,
      image: "/images/brand/brochure-plant.png",
      imageStyle: "plain" as const,
      items: [
        `${site.shortName} has grown with industries that depend on reliable water chemistry — paper & pulp, textiles, sugar, chemical process, lubrication, petroleum, and more.`,
        "Our directors and application specialists combine industrial chemistry knowledge with field experience to recommend programs that fit real operating conditions.",
        `Sister concern ${site.sisterConcern} supports a broader export and import network under the spirit of “${site.slogan}”.`,
      ],
    },
    {
      id: "products",
      title: "What we manufacture and deliver",
      variant: "plain-image-left" as const,
      image: "/images/brand/brochure-lab-2.png",
      imageStyle: "plain" as const,
      items: [
        "Boiler water and fireside treatment programs for LP and HP systems.",
        "Cooling water, closed-loop, RO membrane, and effluent treatment chemistry.",
        "Sugar process chemicals plus paper retention, reinforcing, dispersant agents, and defoamers.",
        "Recommendations tuned to source water, metallurgy, and process duty — not one generic formula for every site.",
      ],
    },
    {
      id: "commitment",
      title: "Capability built for consistent supply",
      variant: "tint-text-left" as const,
      image: "/images/brand/brochure-lab.png",
      imageStyle: "plain" as const,
      items: [
        "State-of-the-art laboratory and R&D centre for product development and application support.",
        "Production capacity of over 15 MT per day with established quality assurance practices.",
        "Well-trained, process-specific personnel with health and safety procedures implemented on the floor.",
      ],
    },
    {
      id: "customer-focus",
      title: "Partnership beyond product supply",
      variant: "plain-image-left" as const,
      image: "/images/home/plant-about.jpg",
      imageStyle: "plain" as const,
      items: [
        "We start with system audits, water conditions, and operating constraints before recommending a program.",
        "Support includes application monitoring, treatment review, operator training, and program optimisation.",
        "Whether you run a compact utility setup or a multi-plant network, we stay close to the teams who keep water systems online.",
      ],
    },
    {
      id: "innovation",
      title: "Improving formulations with plant feedback",
      variant: "tint-text-left" as const,
      image: "/images/brand/brochure-lab-2.png",
      imageStyle: "plain" as const,
      items: [
        "Our lab and application teams refine products using real operating data from industrial customers.",
        "We invest in better inhibitors, cleaner biocides, and treatment approaches that reduce downtime and chemical waste.",
        `Growth for ${site.name} means stronger technical depth — not just a longer product list.`,
      ],
    },
    {
      id: "vision",
      title: "Where we are headed",
      variant: "plain-image-left" as const,
      image: "/images/brand/brochure-plant.png",
      imageStyle: "plain" as const,
      items: [
        `We aim to be the preferred water-treatment partner for industries that need reliable chemistry, clear advice, and accountable service.`,
        "Our long-term goal is efficient plants with lower environmental load — cleaner water loops that protect both production and community resources.",
        `Led by ${site.people.join(" and ")}.`,
      ],
    },
  ],
};
