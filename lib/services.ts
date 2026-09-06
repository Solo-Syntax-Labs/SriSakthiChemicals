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
    "Sri Sakthi Chemicals field and application teams help plants select the right program, monitor results, and keep water systems under control — not just deliver chemicals.",
  cards: [
    {
      title: "System audit",
      description:
        "Review utility and process water systems to identify chemistry gaps, fouling risk, and operating issues before recommending a treatment path.",
      image: "/images/services/audit-cover.jpg",
    },
    {
      title: "Recommendation & program selection",
      description:
        "Match boiler, cooling, RO, effluent, and process chemistry to your water quality, metallurgy, and production constraints.",
      image: "/images/services/consultancy.jpg",
    },
    {
      title: "Troubleshooting",
      description:
        "Investigate scale, corrosion, foam, biofilm, or membrane problems and correct dosing or product selection quickly.",
      image: "/images/services/water-audit.jpg",
    },
    {
      title: "Application & monitoring",
      description:
        "Support day-to-day dosing, sampling, and field checks so treatment programs stay on target as plant conditions change.",
      image: "/images/services/lab-testing.jpg",
    },
    {
      title: "Treatment review & operator training",
      description:
        "Review program performance with your team and train operators on testing, dosing, and safe handling practices.",
      image: "/images/services/commissioning.jpg",
    },
    {
      title: "Monthly trend reports & optimisation",
      description:
        "Track key parameters over time and refine the program to improve reliability, chemical use, and operating cost.",
      image: "/images/services/savings.jpg",
    },
  ] satisfies ServiceCard[],
  audit: {
    title: "How our service cycle works",
    intro:
      "From first survey to ongoing optimisation, SSC application support is built around measurable plant performance and clear operator guidance.",
    blocks: [
      {
        title: "Audit survey",
        description:
          "We examine system design, water quality, dosing points, and recent failures so recommendations are grounded in plant reality — not generic catalogues.",
        image: "/images/services/boiler-descaling.jpg",
        imagePosition: "left",
      },
      {
        title: "Program selection",
        description:
          "Boiler, fireside, cooling, closed-loop, RO, effluent, sugar, and paper specialty products are selected to match load, metallurgy, and feed-water chemistry.",
        image: "/images/services/tuning.jpg",
        imagePosition: "right",
      },
      {
        title: "Application & monitoring",
        description:
          "Field support covers dosing setup, sample interpretation, and corrective action when trends drift — keeping membranes, heat exchangers, and effluent trains stable.",
        image: "/images/services/fireside.jpg",
        imagePosition: "left",
      },
      {
        title: "Benefits you can track",
        image: "/images/services/savings.jpg",
        imagePosition: "right",
        benefits: [
          {
            title: "Clearer operating picture",
            description: "Audits and trend reports show what is working and what needs adjustment.",
          },
          {
            title: "Faster troubleshooting",
            description: "Application specialists help correct scale, corrosion, foam, and fouling issues.",
          },
          {
            title: "Operator confidence",
            description: "Training and review sessions keep plant teams aligned on testing and dosing.",
          },
          {
            title: "Program optimisation",
            description: "Ongoing refinement balances protection, cost, and environmental care.",
          },
        ],
      },
    ] satisfies AuditBlock[],
  },
};
