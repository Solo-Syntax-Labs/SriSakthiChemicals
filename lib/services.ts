export type ServiceCard = {
  title: string;
  description: string;
  image: string;
};

export type AuditBlock = {
  title: string;
  description?: string;
  image: string;
  imagePosition: "left" | "right";
  benefits?: { title: string; description: string }[];
};

export const servicesContent = {
  intro:
    "Indigon field and lab teams help plants recover efficiency, commission equipment correctly, and keep water programs under control — not just deliver chemicals.",
  cards: [
    {
      title: "Boiler & condenser descaling",
      description:
        "Targeted descaling for boilers and condensers to restore heat transfer, cut fuel waste, and extend equipment life with controlled, plant-safe methods.",
      image: "/images/services/boiler-descaling.png",
    },
    {
      title: "Equipment erection & commissioning",
      description:
        "End-to-end erection and commissioning for water-treatment skids and plants, with disciplined installation checks and startup support.",
      image: "/images/services/equipment-erction-commissioning.jpg",
    },
    {
      title: "Industrial water balancing audit",
      description:
        "Audit water use across utilities and process loops to find losses, imbalance, and opportunities for lower cost and better recovery.",
      image: "/images/services/upgrade.png",
    },
    {
      title: "Water treatment consultancy",
      description:
        "Process and wastewater consultancy covering scheme selection, site supervision, and practical engineering support through installation.",
      image: "/images/services/water-testing-1020x510-1.jpg",
    },
    {
      title: "Laboratory testing",
      description:
        "Water and process sample testing under controlled lab conditions to guide product selection, dosing, and ongoing monitoring.",
      image: "/images/services/istockphoto-537040913-612x612-1.jpg",
    },
  ] satisfies ServiceCard[],
  audit: {
    title: "Boiler energy audit",
    intro:
      "Our boiler energy audits combine combustion review, heat-transfer checks, and Indigon fireside chemistry to unlock typical fuel savings of 15–25% where systems are out of tune.",
    blocks: [
      {
        title: "What the audit covers",
        description:
          "We examine combustion efficiency, heat-transfer surfaces, excess air, fouling risk, and emissions trends — then convert findings into a clear action list for operations and maintenance teams.",
        image: "/images/services/what-we-offer.jpg",
        imagePosition: "left",
      },
      {
        title: "3T tuning technology",
        description:
          "3T tuning fine-tunes combustion and heat-transfer conditions so the boiler holds a more efficient operating window with lower fuel burn and steadier steam delivery.",
        image: "/images/services/3T-tuning-technology.png",
        imagePosition: "right",
      },
      {
        title: "Indigon fireside additives",
        description:
          "Fireside additives help improve combustion cleanliness, reduce fouling/slag tendency, and protect heat-transfer surfaces for longer, more efficient campaigns.",
        image: "/images/services/fireide-additvies.jpg",
        imagePosition: "left",
      },
      {
        title: "Benefits you can measure",
        image: "/images/services/savings.jpg",
        imagePosition: "right",
        benefits: [
          {
            title: "Fuel savings",
            description: "Typical opportunity range of 15–25% where inefficiency is significant.",
          },
          {
            title: "Stronger reliability",
            description: "Cleaner fireside conditions and more stable boiler performance.",
          },
          {
            title: "Lower emissions load",
            description: "Better combustion control supports cleaner stack performance.",
          },
          {
            title: "Site-specific plan",
            description: "Recommendations matched to your fuel, load pattern, and metallurgy.",
          },
        ],
      },
    ] satisfies AuditBlock[],
  },
};
