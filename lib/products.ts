import { site } from "@/lib/site";

export type ProductItem = {
  title: string;
  description: string;
};

export type ProductPageData = {
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  intro: string;
  icon: string;
  range: {
    heading: string;
    sideImage: string;
    items: ProductItem[];
  };
  secondary: {
    heading: string;
    sideImage: string;
    items: ProductItem[];
    variant: "benefits" | "product-list";
  };
};

export const products: ProductPageData[] = [
  {
    slug: "boiler-treatment-chemicals",
    title: "Boiler Treatment Chemicals",
    shortLabel: "Boiler",
    description:
      "Boiler water and fireside treatment programs for low- and high-pressure boilers.",
    intro: `At ${site.fullName}, we supply boiler water treatment programs and fireside additives designed to control corrosion, scale, and deposits while supporting cleaner combustion and longer equipment life.`,
    icon: "/images/06.png",
    range: {
      heading: "Boiler water treatment programs",
      sideImage: "/images/products/boiler-main.jpg",
      items: [
        {
          title: "Single-drum LP programs",
          description:
            "Corrosion, pH, and scale control products formulated for low-pressure boilers in a convenient single-drum approach.",
        },
        {
          title: "Multifunctional tannin blends",
          description:
            "Special tannin blends suited to LP and HP boilers for combined protection and deposit control.",
        },
        {
          title: "Oxygen scavengers",
          description:
            "Non-toxic, non-carcinogenic oxygen scavengers that help prevent pitting and corrosion in feedwater and boiler circuits.",
        },
        {
          title: "Condensate corrosion protectors",
          description:
            "Near-end and far-end steam condensate corrosion protection to safeguard return lines and heat-transfer surfaces.",
        },
        {
          title: "Online & offline cleaners",
          description:
            "Cleaning products for removing deposits during operation or planned shutdowns.",
        },
      ],
    },
    secondary: {
      heading: "Boiler fireside treatment programs",
      sideImage: "/images/products/boiler-detail.jpg",
      variant: "product-list",
      items: [
        {
          title: "Multifunctional additives",
          description:
            "Fireside additives that support cleaner combustion and more stable heat-transfer performance.",
        },
        {
          title: "Sludge & sediment dispersants",
          description:
            "Help keep fuel-side systems freer of sludge and sediment build-up.",
        },
        {
          title: "Fuel-system corrosion inhibitors",
          description:
            "Protect fuel handling and fireside metallurgy from corrosion attack.",
        },
        {
          title: "Anti-oxidants & combustion improvers",
          description:
            "Support combustion efficiency and reduce fouling tendency on heat-transfer surfaces.",
        },
        {
          title: "Deposit & corrosion control agents",
          description:
            "Help clean dirty systems and control fireside deposits that waste fuel and raise stack temperatures.",
        },
      ],
    },
  },
  {
    slug: "cooling-tower-treatment-chemicals",
    title: "Cooling Tower Treatment Chemicals",
    shortLabel: "Cooling Tower",
    description:
      "Cooling water treatment programs for corrosion, scale, fouling, and biological control.",
    intro: `At ${site.fullName}, we supply cooling water treatment programs for industrial and utility cooling towers — protecting carbon steel and multimetal systems while controlling scale, fouling, and microbial growth.`,
    icon: "/images/cooling-tower.png",
    range: {
      heading: "Cooling water treatment programs",
      sideImage: "/images/products/cooling-main.jpg",
      items: [
        {
          title: "Corrosion inhibitors",
          description:
            "Carbon steel and multimetal corrosion inhibitors that extend equipment life and reduce maintenance.",
        },
        {
          title: "Antiscalants & antifoulants",
          description:
            "Control mineral scale and fouling that reduce heat-transfer efficiency.",
        },
        {
          title: "Special & bio-dispersants",
          description:
            "Disperse deposits and biofilms so biocides and inhibitors work more effectively.",
        },
        {
          title: "Non-oxidising biocides",
          description:
            "Control bacteria, fungi, and algae that drive biofouling and hygiene risk.",
        },
        {
          title: "Chlorine activators & ClO₂ precursors",
          description:
            "Chlorine activators plus chlorine dioxide precursors and generators for stronger disinfection control.",
        },
        {
          title: "Single-drum programs",
          description:
            "Combined corrosion, scale, and deposit control products for simpler dosing on suitable systems.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of SSC cooling programs",
      sideImage: "/images/products/cooling-detail.jpg",
      variant: "benefits",
      items: [
        {
          title: "Corrosion protection",
          description:
            "Inhibitors help protect heat exchangers, piping, and tower metallurgy.",
        },
        {
          title: "Scale & fouling control",
          description:
            "Cleaner surfaces support better heat transfer and more stable flow.",
        },
        {
          title: "Microbial control",
          description:
            "Biocide and dispersant programs reduce biofilm and algae pressure.",
        },
        {
          title: "Application support",
          description:
            "Program selection and monitoring help keep chemistry matched to your tower duty.",
        },
      ],
    },
  },
  {
    slug: "chillers-treatment-chemicals",
    title: "Chillers Treatment Chemicals",
    shortLabel: "Chillers Treatment",
    description:
      "Closed-system treatment programs for chillers and sealed cooling loops.",
    intro: `At ${site.fullName}, we provide closed-system treatment programs — including nitrite, molybdate, and phosphonate-based approaches — to protect chillers and sealed loops from corrosion, scale, and deposits.`,
    icon: "/images/chiller.png",
    range: {
      heading: "Closed-system treatment programs",
      sideImage: "/images/products/chiller-main.jpg",
      items: [
        {
          title: "Nitrite-based programs",
          description:
            "Closed-loop corrosion control suited to many chilled-water and sealed systems.",
        },
        {
          title: "Molybdate-based programs",
          description:
            "Multimetal protection options where molybdate chemistry is preferred.",
        },
        {
          title: "Phosphonate-based programs",
          description:
            "Deposit and corrosion support for closed circuits under industrial duty.",
        },
        {
          title: "Scale & deposit control",
          description:
            "Help keep heat-exchange surfaces clean so chillers hold design efficiency.",
        },
        {
          title: "System monitoring support",
          description:
            "Application guidance for inhibitor residuals, pH, and makeup quality.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of closed-loop programs",
      sideImage: "/images/products/chiller-detail.jpg",
      variant: "benefits",
      items: [
        {
          title: "Improved heat transfer",
          description:
            "Cleaner surfaces help chillers run closer to design efficiency.",
        },
        {
          title: "Equipment protection",
          description:
            "Corrosion and deposit control reduce wear and unplanned downtime.",
        },
        {
          title: "Reliable operation",
          description:
            "Balanced chemistry supports stable day-to-day closed-loop performance.",
        },
        {
          title: "Site-fit programs",
          description:
            "Formulations can be matched to metallurgy, water quality, and operating conditions.",
        },
      ],
    },
  },
  {
    slug: "ro-treatment-chemicals",
    title: "Reverse Osmosis Treatment Chemicals",
    shortLabel: "Reverse Osmosis",
    description:
      "RO membrane programs for antiscalants, cleaners, biocides, and permeate-line protection.",
    intro: `At ${site.fullName}, we provide reverse osmosis treatment programs that prevent membrane scaling and fouling, support cleaning and sanitisation, and protect permeate supply lines.`,
    icon: "/images/sea-water.png",
    range: {
      heading: "RO treatment programs",
      sideImage: "/images/products/ro-main.jpg",
      items: [
        {
          title: "Antiscalants",
          description:
            "Prevent scale formation on RO membranes and support longer membrane life.",
        },
        {
          title: "Membrane cleaners",
          description:
            "Remove scale and fouling deposits to restore membrane performance.",
        },
        {
          title: "Membrane-compatible flocculants",
          description:
            "Optimise feed water clarification ahead of the RO train.",
        },
        {
          title: "Biocides for online & offline dosing",
          description:
            "Control biological growth during operation and sanitisation cycles.",
        },
        {
          title: "Chlorine reduction & permeate protection",
          description:
            "Specialty chemicals for chlorine reduction and corrosion protection in permeate supply lines.",
        },
      ],
    },
    secondary: {
      heading: "Key features of SSC RO chemistry",
      sideImage: "/images/products/ro-detail.png",
      variant: "benefits",
      items: [
        {
          title: "Scale & fouling control",
          description:
            "Programs target both mineral scaling and membrane fouling mechanisms.",
        },
        {
          title: "Cleaning readiness",
          description:
            "Cleaners and biocides support planned recovery when performance drifts.",
        },
        {
          title: "Feed optimisation",
          description:
            "Flocculant options help improve pretreatment ahead of membranes.",
        },
      ],
    },
  },
  {
    slug: "effluent-treatment-chemicals",
    title: "Effluent Treatment Chemicals",
    shortLabel: "Effluent Water",
    description:
      "Polymers, coagulants, and colour-removal aids for industrial effluent plants.",
    intro: `${site.fullName} offers effluent treatment chemicals for textiles, dyeing, paper, sugar, and other industrial streams — helping ETPs clarify wastewater and move toward cleaner discharge.`,
    icon: "/images/purification.png",
    range: {
      heading: "Effluent treatment programs",
      sideImage: "/images/products/etp-main.jpg",
      items: [
        {
          title: "Polymers",
          description:
            "Wide range of non-ionic, cationic, and anionic polymers in medium and high molecular weights.",
        },
        {
          title: "Coagulants",
          description:
            "Help separate suspended solids from water across varied effluent categories.",
        },
        {
          title: "Colour removal aids",
          description:
            "Specialty colour-removal agents for textile and other coloured industrial effluents.",
        },
        {
          title: "Coagulant & colour blends",
          description:
            "Combined formulations matched to different effluent types and treatment trains.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of SSC effluent programs",
      sideImage: "/images/products/etp-detail.jpg",
      variant: "benefits",
      items: [
        {
          title: "Industry-ready options",
          description:
            "Product choices for textiles, paper, sugar, and broader industrial wastewater.",
        },
        {
          title: "Clearer discharge path",
          description:
            "Better solids and colour removal support regulatory and reuse goals.",
        },
        {
          title: "Application guidance",
          description:
            "Program selection and monitoring help keep ETP performance stable.",
        },
      ],
    },
  },
  {
    slug: "defoamers",
    title: "Defoamers",
    shortLabel: "Defoamers",
    description:
      "Specialty defoamers for paper, sugar, effluent, and other foaming processes.",
    intro: `${site.fullName} offers defoamers designed to control foam in paper processing, sugar operations, effluent evaporators, and other industrial applications where foam disrupts production.`,
    icon: "/images/06.png",
    range: {
      heading: "Defoamer range",
      sideImage: "/images/products/defoamer-main.jpg",
      items: [
        {
          title: "Process defoamers",
          description:
            "Control foam in paper, sugar, and general process streams without disrupting chemistry.",
        },
        {
          title: "Effluent & evaporator foam control",
          description:
            "Help keep ETP and evaporator operations stable when foam loads rise.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of SSC defoamers",
      sideImage: "/images/products/defoamer-detail.jpg",
      variant: "benefits",
      items: [
        {
          title: "Application-led selection",
          description:
            "We review the process first, then recommend the defoamer that fits foam type and duty.",
        },
      ],
    },
  },
  {
    slug: "paper-sugar-processing-chemicals",
    title: "Paper & Sugar Processing Chemicals",
    shortLabel: "Paper & Sugar",
    description:
      "Specialty chemicals that support paper making and sugar process efficiency.",
    intro: `At ${site.fullName}, we offer specialty chemicals for paper and sugar industries — from retention and reinforcing agents to mill sanitation, juice clarification, and evaporator antiscalants.`,
    icon: "/images/sugar.png",
    range: {
      heading: "For paper industries",
      sideImage: "/images/products/paper-main.jpg",
      items: [
        {
          title: "Paper retention agent",
          description:
            "Enhance fiber and filler retention during paper production.",
        },
        {
          title: "Anionic garbage capture agent",
          description:
            "Help capture anionic trash that interferes with wet-end chemistry.",
        },
        {
          title: "Paper reinforcing agent",
          description:
            "Strengthen paper structure and mechanical properties.",
        },
        {
          title: "Paper dispersant agent",
          description:
            "Improve fiber and filler dispersion for better formation.",
        },
      ],
    },
    secondary: {
      heading: "For sugar industries",
      sideImage: "/images/products/sugar-detail.jpg",
      variant: "product-list",
      items: [
        {
          title: "Mill sanitation biocide",
          description:
            "Control microbial growth in mills for cleaner operations and better sugar quality.",
        },
        {
          title: "Flocculants / colour removal",
          description:
            "Support juice clarification and colour removal for purer products.",
        },
        {
          title: "Evaporator antiscalants",
          description:
            "Reduce scale in evaporators to protect heat transfer and uptime.",
        },
        {
          title: "Viscosity reducer",
          description:
            "Help manage process viscosity where sugar streams require it.",
        },
        {
          title: "Scale softeners",
          description:
            "Assist with softening and removal of process scale deposits.",
        },
      ],
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs() {
  return products.map((product) => product.slug);
}
