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
  introSections: [
    {
      title: "Water Treatment Plants",
      description: `At ${site.name}, we specialize in the fabrication and installation of water treatment plants, including Reverse Osmosis (RO) plants, Softening plants, Deionization (DM) plants, and more. We cater to all types and capacities, tailored to meet your specific process needs.`,
    },
    {
      title: "Advanced STP Technology: Ozone Bioxy Plasma",
      description: `At ${site.name}, we introduce Ozone Bioxy Plasma Technology, a revolutionary advancement in Sewage Treatment Plants (STPs). This technology uses a powerful combination of ozone and bio-oxygen to deliver efficient and eco-friendly wastewater treatment.`,
    },
  ],
  stpBenefits: {
    title: "Benefits of Our STP Technology",
    background: "/images/projects/vecteezy_waste-water-in-pond-wastewater-and-hazardous-waste_27541136-scaled.jpg",
    align: "left" as const,
    items: [
      {
        title: "No Sludge Generation",
        description:
          "Completely eliminates sludge, making it a cleaner and hassle-free process.",
      },
      {
        title: "No Biological Treatment Required",
        description: "Removes the need for conventional biological processes.",
      },
      {
        title: "Space-Saving Design",
        description: "Requires significantly less space compared to traditional STPs.",
      },
      {
        title: "Chemical-Free Operation",
        description:
          "No chemicals are required, ensuring an environmentally friendly approach.",
      },
      {
        title: "Minimal Manpower",
        description:
          "Automation and simplicity reduce the need for extensive manpower.",
      },
      {
        title: "Eco-Friendly",
        description:
          "Converts pollutants into harmless gases like O₂ and NO₂, making it highly sustainable.",
      },
    ] satisfies BenefitItem[],
  },
  technicalBackground: {
    title: "Brief Technical Background",
    background: "/images/projects/stp-technical-bg-image.jpg",
    align: "right" as const,
    items: [
      {
        description:
          "The pillar of the treatment scheme is a combination of Ozone and another component called Bio-Oxygen plasma – at the right stoichiometric ratio.",
      },
      {
        description: "This technology is Patented.",
      },
      {
        description:
          "Bio Oxygen is an intermediate stage before ozone, having different (lesser) inter-atomic angles as in an ozone molecule, making it more reactive than normal ozone.",
      },
      {
        description:
          "This enhanced reactivity is the secret of breaking down high BOD, COD in raw sewage, along with making the entire biological mass / sludge fully soluble inside the wastewater during recirculation inside the ozone cum bio-oxygen contact tank.",
      },
      {
        description:
          "Apart from that, the percentage of ozone and bio-oxygen in the outlet gas produced from our equipment ascertains the success of the decompositions.",
      },
      {
        description:
          "Simple ozonation is only good for treated sewage of low toxicity and TSS, for polishing residual / small levels of COD, BOD.",
      },
    ] satisfies BenefitItem[],
  },
  plants: [
    {
      title: "Reverse Osmosis (RO) Plants",
      image: "/images/projects/ro-image-2-transformed-e1727238234482.jpeg",
      imagePosition: "right",
      items: [
        "Removes dissolved salts, chemicals, and contaminants from water.",
        "Ensures high-quality, purified water for industrial processes.",
        "Available in various capacities to meet your specific needs.",
        "Customizable for different water sources such as borewell, municipal, and more.",
      ],
    },
    {
      title: "Softening Plants",
      image: "/images/projects/softening-plants.jpg",
      imagePosition: "left",
      items: [
        "Removes hardness-causing minerals like calcium and magnesium.",
        "Prevents scaling in boilers, cooling towers, and other equipment.",
        "Ideal for industries requiring soft water for smooth operation.",
        "Efficient systems designed for easy maintenance and high performance.",
      ],
    },
    {
      title: "Deionization (DM) Plants",
      image: "/images/projects/dm-water-treatment-plant-for-sugar.jpg",
      imagePosition: "right",
      items: [
        "Eliminates ionic impurities from water for high-purity applications.",
        "Suitable for industries like pharmaceuticals, electronics, and power plants.",
        "Offers consistent, low-conductivity water output.",
        "Available in automatic and semi-automatic configurations.",
      ],
    },
  ] satisfies PlantSection[],
};
