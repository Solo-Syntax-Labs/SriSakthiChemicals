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
      "Boiler water treatment chemicals for low, medium, and high-pressure boilers, including power plant boilers.",
    intro: `At ${site.fullName}, we provide a comprehensive range of boiler water treatment chemicals for low, medium, and high-pressure boilers, including power plant boilers. Our solutions are designed to optimize boiler performance, prevent corrosion, and enhance energy efficiency. We ensure that our products meet stringent quality standards and offer environmental benefits.`,
    icon: "/images/06.png",
    range: {
      heading: "Our Product Range Includes",
      sideImage: "/images/products/boiler-image-2.jpg",
      items: [
        {
          title: "Antiscalants",
          description:
            "Prevent the formation of scale deposits in boilers, ensuring efficient heat transfer and prolonging the lifespan of boiler equipment.",
        },
        {
          title: "Corrosion Inhibitors",
          description:
            "Protect internal boiler surfaces from corrosion by forming a protective film, reducing maintenance costs and extending equipment life.",
        },
        {
          title: "Oxygen Scavengers",
          description:
            "Remove dissolved oxygen in feed water to prevent pitting and corrosion in boilers and pre-boiler systems.",
        },
        {
          title: "pH Boosters",
          description:
            "Regulate the pH level in the boiler water, preventing acidic or alkaline corrosion and enhancing the overall efficiency of the boiler system.",
        },
        {
          title: "Descalants",
          description:
            "Effectively remove scale buildup from boiler surfaces, restoring optimal heat transfer and improving boiler efficiency.",
        },
        {
          title: "Wet Lay-Up Chemicals",
          description:
            "Designed for the protection of boilers during shutdown periods, these chemicals prevent corrosion and preserve the internal integrity of the system.",
        },
        {
          title: "Fireside Treatment Chemicals",
          description:
            "Improve combustion efficiency by enhancing unburnt carbon values, ensuring cleaner combustion, and reducing energy losses in the fire side of the boiler.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of Our Boiler Treatment Chemicals",
      sideImage: "/images/products/boiler-image-e1727154377503.jpeg",
      variant: "benefits",
      items: [
        {
          title: "Enhanced Efficiency",
          description:
            "Our chemicals ensure optimal boiler performance by preventing scale and corrosion, resulting in better heat transfer and reduced energy consumption.",
        },
        {
          title: "Extended Equipment Life",
          description:
            "By protecting the internal and external surfaces of boilers, our products significantly extend equipment life, reducing downtime and maintenance costs.",
        },
        {
          title: "Environmental Compliance",
          description:
            "Our solutions are formulated to be environmentally friendly, helping industries meet regulatory requirements while maintaining performance.",
        },
        {
          title: "Customized Solutions",
          description:
            "We offer tailored formulations to suit the specific needs of different boiler pressure ranges and industry requirements.",
        },
      ],
    },
  },
  {
    slug: "cooling-tower-treatment-chemicals",
    title: "Cooling Tower Treatment Chemicals",
    shortLabel: "Cooling Tower",
    description:
      "Cooling water treatment chemicals to prevent corrosion, scaling, and biological growth in cooling towers.",
    intro: `At ${site.fullName}, we supply a comprehensive range of cooling water treatment chemicals for industrial and power station cooling towers. Our advanced products are designed to enhance system performance, prevent corrosion and scaling, and control biological growth, ensuring optimal cooling tower efficiency.`,
    icon: "/images/cooling-tower.png",
    range: {
      heading: "Our Product Range Includes",
      sideImage: "/images/products/cooling-tower-1.jpg",
      items: [
        {
          title: "Antiscalants",
          description:
            "Prevent the formation of scale in cooling systems, maintaining efficient heat exchange and preventing downtime.",
        },
        {
          title: "Corrosion and Scale Inhibitors",
          description:
            "Protect cooling system surfaces from corrosion and scale buildup, prolonging the life of equipment and reducing maintenance costs.",
        },
        {
          title: "Oxidizing and Non-Oxidizing Biocides",
          description:
            "Control microbial growth, including bacteria, fungi, and algae, to prevent biofouling and maintain clean surfaces in cooling towers.",
        },
        {
          title: "Bio-Dispersants",
          description:
            "Break down and disperse biofilms and organic matter, ensuring efficient biocide performance and preventing microbial growth.",
        },
        {
          title: "Mineral Dispersants",
          description:
            "Prevent the precipitation of minerals that cause scaling, keeping cooling systems clean and operating efficiently.",
        },
        {
          title: "pH Neutralizers",
          description:
            "Balance pH levels in cooling water to prevent acidic or alkaline conditions that can lead to corrosion or scaling.",
        },
        {
          title: "Chlorine Dioxide Precursors and Generators",
          description:
            "Provide a powerful and controlled solution for disinfection and biofilm removal, ensuring consistent and effective microbial control.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of Cooling Tower Treatment Chemicals",
      sideImage: "/images/products/cooling-tower-working.jpg",
      variant: "benefits",
      items: [
        {
          title: "Corrosion Protection",
          description:
            "Formulated to inhibit rust and corrosion, our chemicals extend the lifespan of cooling system components, minimizing maintenance costs.",
        },
        {
          title: "Scale Prevention",
          description:
            "By controlling scale formation, our chemicals maintain optimal flow rates and system performance, preventing costly downtime.",
        },
        {
          title: "Microbial Control",
          description:
            "Our biocides effectively prevent the growth of harmful bacteria and algae, ensuring a cleaner and healthier system.",
        },
        {
          title: "Customized Solutions",
          description:
            "We offer tailored formulations to suit the specific needs of different cooling systems and industry requirements.",
        },
      ],
    },
  },
  {
    slug: "chillers-treatment-chemicals",
    title: "Chillers Treatment Chemicals",
    shortLabel: "Chillers Treatment",
    description:
      "Specialty chemicals for industrial chillers to control scale, corrosion, and microbial growth.",
    intro: `At ${site.fullName}, we provide specialized chiller treatment chemicals formulated to protect closed-loop and open chiller systems. Our solutions help maintain heat-transfer efficiency, prevent corrosion and fouling, and support reliable cooling performance across industrial applications.`,
    icon: "/images/chiller.png",
    range: {
      heading: "Our Product Range Includes",
      sideImage: "/images/products/cooling-tower-1.jpg",
      items: [
        {
          title: "Corrosion Inhibitors",
          description:
            "Protect chiller metallurgy from rust and corrosion, extending equipment life and reducing maintenance frequency.",
        },
        {
          title: "Scale Inhibitors",
          description:
            "Control mineral scale formation on heat-exchange surfaces to maintain efficient cooling performance.",
        },
        {
          title: "Biocides",
          description:
            "Prevent microbial growth and biofilm formation that can reduce heat-transfer efficiency and cause fouling.",
        },
        {
          title: "Dispersants",
          description:
            "Keep suspended solids and deposits dispersed for cleaner system operation and improved flow.",
        },
        {
          title: "pH Conditioners",
          description:
            "Maintain balanced water chemistry to protect chiller components and stabilize treatment programs.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of Our Chillers Treatment Chemicals",
      sideImage: "/images/products/cooling-tower-working.jpg",
      variant: "benefits",
      items: [
        {
          title: "Improved Heat Transfer",
          description:
            "Cleaner heat-exchange surfaces help chillers run more efficiently with lower energy demand.",
        },
        {
          title: "Equipment Protection",
          description:
            "Corrosion and scale control reduce wear, leakage risk, and unplanned downtime.",
        },
        {
          title: "Reliable Operation",
          description:
            "Balanced chemistry and microbial control support stable day-to-day chiller performance.",
        },
        {
          title: "Customized Programs",
          description:
            "Formulations can be tailored to system metallurgy, water quality, and operating conditions.",
        },
      ],
    },
  },
  {
    slug: "ro-treatment-chemicals",
    title: "Reverse Osmosis Treatment Chemicals",
    shortLabel: "Reverse Osmosis",
    description:
      "RO treatment chemicals to prevent fouling, scaling, and biological growth while improving purification efficiency.",
    intro: `At ${site.fullName}, we provide a complete range of reverse osmosis treatment chemicals that ensure the optimal performance and longevity of Reverse Osmosis systems. Our products are designed to prevent fouling, scaling, and biological growth, while enhancing the efficiency of water purification processes. All of our products are customized based on the specific input water quality, ensuring maximum effectiveness.`,
    icon: "/images/sea-water.png",
    range: {
      heading: "Our Product Range Includes",
      sideImage: "/images/products/ro-image-new-1.jpg",
      items: [
        {
          title: "Antiscalants",
          description:
            "Prevent scale formation on RO membranes, improving system efficiency and extending membrane life. These are custom-formulated based on the feed water quality.",
        },
        {
          title: "Biocides",
          description:
            "Control the growth of microorganisms that can lead to biofouling in RO membranes, ensuring smooth operation and reduced maintenance.",
        },
        {
          title: "pH Boosters",
          description:
            "Adjust and optimize the pH levels in RO feed water, protecting membranes from acidic or alkaline damage and improving system performance.",
        },
        {
          title: "Membrane Descalants",
          description:
            "Effectively remove existing scale deposits from membranes, restoring their performance and preventing costly downtime.",
        },
        {
          title: "Biological Cleaners",
          description:
            "Specialized cleaners designed to remove organic and biological fouling from membranes, enhancing their lifespan and ensuring consistent water quality.",
        },
      ],
    },
    secondary: {
      heading: "Key Features of Our Reverse Osmosis and Desalination Chemicals",
      sideImage: "/images/products/ro-new-image-2.png",
      variant: "benefits",
      items: [
        {
          title: "Tailor-Made Formulations",
          description:
            "Each product is formulated based on specific water quality to ensure optimal performance.",
        },
        {
          title: "Improved System Longevity",
          description:
            "Our chemicals help prevent membrane fouling and scaling, extending system life and reducing maintenance costs.",
        },
        {
          title: "Enhanced Efficiency",
          description:
            "By keeping membranes clean and functional, our solutions ensure the highest levels of water purification and desalination efficiency.",
        },
      ],
    },
  },
  {
    slug: "effluent-treatment-chemicals",
    title: "Effluent Treatment Chemicals",
    shortLabel: "Effluent Water",
    description:
      "Effluent treatment chemicals for textiles, dyeing, paper, sugar, automobile, mining, and more.",
    intro: `${site.fullName} offers a comprehensive range of effluent treatment chemicals designed to meet the needs of diverse industries, including textiles, dyeing, paper, sugar, automobile, mining, and more. Our products are tailored to enhance the efficiency of industrial Effluent Treatment Plants (ETPs), ensuring compliance with environmental regulations and improving wastewater quality.`,
    icon: "/images/purification.png",
    range: {
      heading: "Our Product Range Includes",
      sideImage: "/images/products/Effluent-Treatment-Plant.jpg",
      items: [
        {
          title: "Decolorants",
          description:
            "Effectively remove color from industrial effluents, particularly in industries like textiles and dyeing, helping to achieve regulatory discharge limits.",
        },
        {
          title: "Coagulants",
          description:
            "Available in various types and combinations, these chemicals aid in the aggregation of suspended particles, facilitating their removal from wastewater.",
        },
        {
          title: "Anionic Polyelectrolytes",
          description:
            "These are available with different charge densities and molecular weights, ideal for settling applications, helping to clarify wastewater by improving the sedimentation of solids.",
        },
        {
          title: "Cationic Polyelectrolytes",
          description:
            "Used for dewatering sludge and other industrial applications, these are formulated with varying charge densities and molecular weights to suit specific industrial needs.",
        },
        {
          title: "Evaporator Antiscalants",
          description:
            "Prevent and loosen scale formation in evaporators, enhancing operational efficiency and extending equipment life.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of Our Effluent Treatment Chemicals",
      sideImage: "/images/products/s8.jpg",
      variant: "benefits",
      items: [
        {
          title: "Industry-Specific Solutions",
          description:
            "Tailored products for a wide range of industries, ensuring optimal treatment efficiency.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Our chemicals help industries meet stringent environmental standards for wastewater discharge.",
        },
        {
          title: "Enhanced Performance",
          description:
            "Improve settling, dewatering, and color removal processes, resulting in cleaner and safer wastewater.",
        },
      ],
    },
  },
  {
    slug: "defoamers",
    title: "Defoamers",
    shortLabel: "Defoamers",
    description:
      "Silicone and non-silicone defoamers for paper, sugar, ETP evaporators, and other foaming processes.",
    intro: `${site.fullName} offers a wide range of defoamers, designed to effectively control foam in various industrial processes. Our defoamers are widely used in industries such as paper processing, sugar distilleries (for fermenters), evaporators in effluent treatment plants (ETP), and any other applications where foaming occurs.`,
    icon: "/images/06.png",
    range: {
      heading: "Our Product Range Includes",
      sideImage:
        "/images/products/experiments-chemistry-lab-conducting-experiment-laboratory-scaled.jpg",
      items: [
        {
          title: "Silicone Defoamers",
          description:
            "Efficient in controlling foam in a wide variety of industrial processes.",
        },
        {
          title: "Non-Silicone Defoamers",
          description:
            "Suitable for applications where silicone-based products are not preferred.",
        },
      ],
    },
    secondary: {
      heading: "Benefits of Our Defoamers",
      sideImage: "/images/products/upgrade.png",
      variant: "benefits",
      items: [
        {
          title: "Tailored Solutions",
          description:
            "We first analyze the customer’s process to determine the type of defoamer that will be most effective. Based on our evaluation, we suggest the most suitable product from our extensive range of defoamers, ensuring optimal foam control for each unique application.",
        },
      ],
    },
  },
  {
    slug: "paper-sugar-processing-chemicals",
    title: "Paper & Sugar Processing Chemicals",
    shortLabel: "Paper & Sugar",
    description:
      "Specialty chemicals that optimize efficiency and quality in paper and sugar industry processes.",
    intro: `At ${site.fullName}, we offer a comprehensive range of chemicals designed to optimize the efficiency and quality of processes in both the paper and sugar industries.`,
    icon: "/images/sugar.png",
    range: {
      heading: "For Paper Industries:",
      sideImage: "/images/products/Paper-Mills-Pivoting-to-Meet-Market-Demand.png",
      items: [
        {
          title: "Retention Aids",
          description:
            "Enhance fiber and filler retention during paper production, improving paper quality and reducing waste.",
        },
        {
          title: "Drainage Aids",
          description:
            "Accelerate water removal during the paper-making process, increasing machine speed and productivity.",
        },
        {
          title: "Paper Dispersant Agents",
          description:
            "Improve the dispersion of fibers and fillers, resulting in better paper formation and smoother production processes.",
        },
        {
          title: "Paper Reinforcing Agents",
          description:
            "Strengthen the paper structure, enhancing its durability and mechanical properties.",
        },
      ],
    },
    secondary: {
      heading: "For Sugar Industries",
      sideImage: "/images/products/3320-saharnye_zavody.png",
      variant: "product-list",
      items: [
        {
          title: "Mill Sanitation Biocides",
          description:
            "Control microbial growth in mills, ensuring cleaner operations and improved sugar quality.",
        },
        {
          title: "Color Removal Agents for Juice Clarification",
          description:
            "Remove color impurities during sugar juice clarification, leading to purer final products.",
        },
        {
          title: "Evaporator Antiscalants",
          description:
            "Prevent scale buildup in evaporators, improving efficiency and reducing maintenance costs.",
        },
        {
          title: "Viscosity Reducers",
          description:
            "Reduce the viscosity of sugar syrup, facilitating smoother processing and enhancing production efficiency.",
        },
        {
          title: "Scale Softeners",
          description:
            "Loosen and remove existing scale deposits, optimizing heat transfer and equipment performance.",
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
