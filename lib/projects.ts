import { site } from "@/lib/site";

export type BenefitItem = {
  title?: string;
  description: string;
};

export type PlantSection = {
  title: string;
  image: string;
  imagePosition: "left" | "right";
  items: string[];
};

export const projectsContent = {
  intro:
    `${site.name} fabricates and installs treatment plants sized to your process — from RO and softening to DM, STP, and integrated utility water schemes.`,
  introSections: [
    {
      title: "Water treatment plants",
      description: `We design and install RO, softening, DM, and related plants across capacities, configured for your source water and process demand — not a one-size package.`,
    },
    {
      title: "Advanced STP: Ozone Bioxy Plasma",
      description: `For sewage treatment, Indigon offers Ozone Bioxy Plasma technology — combining ozone and bio-oxygen for compact, low-sludge wastewater treatment with a smaller operating footprint.`,
    },
  ],
  stpBenefits: {
    title: "Why plants choose this STP approach",
    background: "/images/projects/stp-benefits.jpg",
    align: "left" as const,
    items: [
      {
        title: "No sludge burden",
        description: "Avoids conventional sludge handling loads that slow operations.",
      },
      {
        title: "No biological train required",
        description: "Removes dependence on traditional biological process blocks.",
      },
      {
        title: "Compact footprint",
        description: "Needs less civil space than many conventional STP layouts.",
      },
      {
        title: "Chemical-light operation",
        description: "Designed for cleaner operation with minimal chemical dependence.",
      },
      {
        title: "Lower manpower load",
        description: "Simpler operating philosophy reduces day-to-day staffing pressure.",
      },
      {
        title: "Stronger sustainability profile",
        description: "Breaks down pollutants toward cleaner gas pathways and reuse potential.",
      },
    ] satisfies BenefitItem[],
  },
  technicalBackground: {
    title: "Technical background in brief",
    background: "/images/projects/stp-technical.jpg",
    align: "right" as const,
    items: [
      {
        description:
          "Treatment relies on a controlled combination of ozone and bio-oxygen plasma at the right stoichiometric ratio.",
      },
      {
        description: "The technology platform is patented.",
      },
      {
        description:
          "Bio-oxygen is an intermediate, more reactive stage that helps break down high BOD/COD loads and solubilize biological mass during recirculation.",
      },
      {
        description:
          "Outlet ozone/bio-oxygen balance helps confirm decomposition performance in operation.",
      },
      {
        description:
          "Simple ozonation alone is better suited to polishing low-toxicity, low-TSS treated sewage — this combined approach targets tougher raw sewage loads.",
      },
    ] satisfies BenefitItem[],
  },
  plants: [
    {
      title: "Reverse Osmosis (RO) plants",
      image: "/images/projects/ro-plant.png",
      imagePosition: "right",
      items: [
        "Removes dissolved salts and contaminants for process-ready water.",
        "Sized for industrial duty across borewell, municipal, and mixed sources.",
        "Configurable recovery and pretreatment to protect membranes.",
        "Built for stable purified water quality under varying feed conditions.",
      ],
    },
    {
      title: "Softening plants",
      image: "/images/projects/softening.jpg",
      imagePosition: "left",
      items: [
        "Removes hardness ions that drive scale in boilers and cooling loops.",
        "Protects heat-transfer surfaces and reduces cleaning frequency.",
        "Suited to utilities that need dependable soft water supply.",
        "Designed for straightforward operation and maintenance access.",
      ],
    },
    {
      title: "Deionization (DM) plants",
      image: "/images/projects/dm-plant.jpg",
      imagePosition: "right",
      items: [
        "Delivers low-conductivity water for high-purity industrial uses.",
        "Common in power, process, and quality-critical manufacturing.",
        "Available in automatic and semi-automatic configurations.",
        "Stable output when paired with the right pretreatment train.",
      ],
    },
  ] satisfies PlantSection[],
};
