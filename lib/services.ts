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
  cards: [
    {
      title: "Boiler and Condensers Descaling",
      description:
        "Our skilled team provides professional descaling services for boilers and condensers, ensuring optimal efficiency and longevity of your equipment. We utilize advanced techniques and eco-friendly solutions to effectively remove scale buildup, enhancing performance and reducing energy consumption. Trust us to keep your systems running smoothly and reliably.",
      image: "/images/services/boiler-descaling.png",
    },
    {
      title: "Water treatment Equipment Erection & Commissioning",
      description:
        "Our expert team specializes in the complete erection and commissioning of water treatment equipment. We ensure that all installations are performed with precision and adhere to the highest industry standards. With a focus on efficiency and reliability, we take pride in delivering seamless integration of systems, guaranteeing optimal performance and water quality for your facility. Trust us to handle your water treatment needs from start to finish.",
      image: "/images/services/equipment-erction-commissioning.jpg",
    },
    {
      title: "Industrial water balancing Audit Service",
      description:
        "Our team of experts offers comprehensive industrial water balancing audits tailored to any type of industry. We assess your water usage, identify inefficiencies, and provide actionable insights to optimize your system. By ensuring proper water distribution and management, we help you reduce costs, improve sustainability, and enhance overall operational efficiency. Trust us to help you make the most of your water resources.",
      image: "/images/services/upgrade.png",
    },
    {
      title: "Water Treatment Consultancy Service",
      description:
        "We are engaged in providing consultancy services for waste water treatment. The effluent treatment plant consultants also provide allied services that include site supervision for all engineering activities and for proper and timely installation of systems.",
      image: "/images/services/water-testing-1020x510-1.jpg",
    },
    {
      title: "Lab Testing Service",
      description:
        "Our firm is known for providing Laboratory Testing Services in compliance with industry standards. Advanced facility of our firm provides controlled conditions essential for carrying out various scientific experiments, measurement and researches.",
      image: "/images/services/istockphoto-537040913-612x612-1.jpg",
    },
  ] satisfies ServiceCard[],
  audit: {
    title: "Boiler Energy Audit",
    intro:
      "We specialize in enhancing boiler efficiency through our comprehensive energy audit services and cutting-edge technologies. Our approach leverages 3T Tuning Technology and Indigon Fireside Additives, allowing us to achieve significant fuel reduction of 15-25% for our clients.",
    blocks: [
      {
        title: "What We Offer",
        description:
          "Boiler Energy Audits: Our detailed audits identify inefficiencies and provide actionable insights to optimize your boiler systems. We analyze key parameters, including combustion efficiency, heat transfer, and emissions, to pinpoint areas for improvement.",
        image: "/images/services/what-we-offer.jpg",
        imagePosition: "left",
      },
      {
        title: "3T Tuning Technology",
        description:
          "This innovative technology fine-tunes boiler performance by optimizing combustion conditions and enhancing heat transfer. By adjusting key operational variables, we ensure your boiler operates at peak efficiency, resulting in lower fuel consumption and reduced operational costs.",
        image: "/images/services/3T-tuning-technology.png",
        imagePosition: "right",
      },
      {
        title: "Indigon Fireside Additives",
        description:
          "Our specially formulated additives improve combustion efficiency and reduce fouling and slag buildup. By enhancing the fuel quality, Indigon additives help maintain optimal heat transfer and extend the lifespan of your boiler.",
        image: "/images/services/fireide-additvies.jpg",
        imagePosition: "left",
      },
      {
        title: "Benefits of Boiler Energy Audits",
        image: "/images/services/savings.jpg",
        imagePosition: "right",
        benefits: [
          {
            title: "Significant Fuel Savings",
            description:
              "Reduce your fuel consumption by 15-25%, leading to substantial cost savings.",
          },
          {
            title: "Enhanced Efficiency",
            description: "Improve overall boiler performance and reliability.",
          },
          {
            title: "Environmental Impact",
            description: "Decrease emissions and contribute to a greener operation.",
          },
          {
            title: "Tailored Products",
            description:
              "We customize our services to meet the specific needs of your facility, ensuring maximum benefit.",
          },
        ],
      },
    ] satisfies AuditBlock[],
  },
};
