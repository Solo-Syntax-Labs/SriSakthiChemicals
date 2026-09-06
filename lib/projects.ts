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
  intro: `${site.name} supplies water treatment and specialty chemistry for the systems plants already run — boilers, cooling towers, RO trains, ETPs, STPs, and process lines across multiple industries.`,
  introSections: [
    {
      title: "Programs for industrial water systems",
      description: `We support RO, cooling, boiler, effluent, and utility water programs configured around your source water and process demand — chemistry and application guidance, not a one-size package.`,
    },
    {
      title: "Solutions across industries",
      description: `From paper & pulp and textiles to sugar & distilleries, cement, chemical process, hospitals, hotels, dairy, petroleum, and desalination — SSC application teams help match products to each process duty.`,
    },
  ],
  stpBenefits: {
    title: "Industries we regularly support",
    background: "/images/projects/stp-benefits.jpg",
    align: "left" as const,
    items: [
      {
        title: "Paper & pulp",
        description: "Retention, reinforcing, dispersant agents, and process foam control.",
      },
      {
        title: "Textiles & effluent",
        description: "Coagulants, polymers, and colour-removal programs for tough coloured streams.",
      },
      {
        title: "Sugar & distilleries",
        description: "Mill sanitation, juice clarification, evaporator antiscalants, and viscosity aids.",
      },
      {
        title: "Utilities & power",
        description: "Boiler, fireside, cooling, and closed-loop chemistry for heat-transfer assets.",
      },
      {
        title: "RO & desalination",
        description: "Membrane antiscalants, cleaners, biocides, and permeate-line protection.",
      },
      {
        title: "Process industries",
        description: "Chemical process, resins & paints, dairy, fertilizer, petroleum, and general manufacturing.",
      },
    ] satisfies BenefitItem[],
  },
  technicalBackground: {
    title: "How we engage on site",
    background: "/images/projects/stp-technical.jpg",
    align: "right" as const,
    items: [
      {
        description:
          "System audit and survey to understand water quality, metallurgy, and operating constraints.",
      },
      {
        description:
          "Program selection across boiler, cooling, RO, effluent, sugar, and paper specialty lines.",
      },
      {
        description:
          "Application monitoring with sampling guidance and corrective action when trends drift.",
      },
      {
        description:
          "Operator training and treatment review so plant teams can sustain the program day to day.",
      },
      {
        description:
          "Monthly trend reporting and optimisation to balance protection, cost, and environmental care.",
      },
    ] satisfies BenefitItem[],
  },
  plants: [
    {
      title: "Reverse Osmosis programs",
      image: "/images/projects/ro-plant.png",
      imagePosition: "right",
      items: [
        "Antiscalants and cleaners to protect membrane performance.",
        "Biocides for online dosing and offline sanitisation.",
        "Membrane-compatible flocculants for feed optimisation.",
        "Specialty chemistry for chlorine reduction and permeate-line corrosion protection.",
      ],
    },
    {
      title: "Cooling & closed-loop programs",
      image: "/images/projects/softening.jpg",
      imagePosition: "left",
      items: [
        "Corrosion inhibitors for carbon steel and multimetal systems.",
        "Antiscalants, antifoulants, and dispersants for heat-transfer surfaces.",
        "Non-oxidising biocides and chlorine dioxide options for microbial control.",
        "Closed-system nitrite / molybdate / phosphonate programs for chillers and sealed loops.",
      ],
    },
    {
      title: "Effluent & process programs",
      image: "/images/projects/dm-plant.jpg",
      imagePosition: "right",
      items: [
        "Polymers and coagulants for solids separation in ETPs.",
        "Colour-removal aids for textile and other coloured effluents.",
        "Sugar process biocides, flocculants, and evaporator antiscalants.",
        "Paper wet-end agents and defoamers for process foam control.",
      ],
    },
  ] satisfies PlantSection[],
};
