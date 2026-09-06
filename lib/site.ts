export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const site = {
  name: "Sri Sakthi Chemicals",
  legalName: "Sri Sakthi Chemicals (P) Ltd",
  fullName: "Sri Sakthi Chemicals (P) Ltd",
  shortName: "SSC",
  website: "https://www.srisakthichemicals.com",
  sisterConcern: "RSG Exports & Imports",
  slogan: "Globe in Palm to Grow",
  people: ["Mr. V. Bala Krishnan", "Mr. B. Kapilan"],
  phones: ["+91 98652 51577", "+91 94433 75330", "+91 96268 13034"],
  landline: "",
  emails: ["srisakthichemdu@gmail.com", "balassm.1972@gmail.com"],
  address: [
    "Plot No: 38, New Kurinji Residency,",
    "Pandi Kovil Ring Road, Karuppayurani (PO),",
    "East Anna Nagar, Madurai - 625020.",
  ],
  whatsapp: "919865251577",
  productLinks: [
    { label: "Boiler Treatment Chemicals", href: "/products/boiler-treatment-chemicals" },
    { label: "Cooling Tower Treatment Chemicals", href: "/products/cooling-tower-treatment-chemicals" },
    { label: "Chillers Treatment Chemicals", href: "/products/chillers-treatment-chemicals" },
    { label: "Reverse Osmosis Treatment Chemicals", href: "/products/ro-treatment-chemicals" },
    { label: "Effluent Treatment Chemicals", href: "/products/effluent-treatment-chemicals" },
    { label: "Defoamers", href: "/products/defoamers" },
    { label: "Paper & Sugar Processing Chemicals", href: "/products/paper-sugar-processing-chemicals" },
  ] satisfies NavChild[],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Boiler Treatment Chemicals", href: "/products/boiler-treatment-chemicals" },
        { label: "Cooling Tower Treatment Chemicals", href: "/products/cooling-tower-treatment-chemicals" },
        { label: "Chillers Treatment Chemicals", href: "/products/chillers-treatment-chemicals" },
        { label: "Reverse Osmosis Treatment Chemicals", href: "/products/ro-treatment-chemicals" },
        { label: "Effluent Treatment Chemicals", href: "/products/effluent-treatment-chemicals" },
        { label: "Defoamers", href: "/products/defoamers" },
        { label: "Paper & Sugar Processing Chemicals", href: "/products/paper-sugar-processing-chemicals" },
      ],
    },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Quality", href: "/quality" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  products: [
    { label: "Boiler", href: "/products/boiler-treatment-chemicals", icon: "/images/06.png" },
    { label: "Cooling Tower", href: "/products/cooling-tower-treatment-chemicals", icon: "/images/cooling-tower.png" },
    { label: "Chillers Treatment", href: "/products/chillers-treatment-chemicals", icon: "/images/chiller.png" },
    { label: "Reverse Osmosis", href: "/products/ro-treatment-chemicals", icon: "/images/sea-water.png" },
    { label: "Effluent Water", href: "/products/effluent-treatment-chemicals", icon: "/images/purification.png" },
    { label: "Sugar Process Chemical", href: "/products/paper-sugar-processing-chemicals", icon: "/images/sugar.png" },
  ],
  heroSlides: [
    {
      image: "/images/hero-1.gif",
      eyebrow: "Sri Sakthi Chemicals",
      title: "Turning Complex Chemistry into",
      highlight: "EVERYDAY CONVENIENCE.",
    },
    {
      image: "/images/hero-2.webp",
      eyebrow: "Industrial Water Treatment",
      title: "Reliable Chemistry for",
      highlight: "CLEANER OPERATIONS.",
    },
    {
      image: "/images/hero-3.gif",
      eyebrow: "Specialty Programs",
      title: "Advanced Treatment Built for",
      highlight: "INDUSTRIAL PERFORMANCE.",
    },
  ],
  plantSlides: [
    {
      title: "ETP Programs",
      description:
        "Effluent treatment chemicals and programs that help industrial wastewater plants remove contaminants and move toward cleaner discharge and reuse.",
      image: "/images/home/plant-etp.jpg",
    },
    {
      title: "STP Programs",
      description:
        "Specialty chemistry and application support for sewage treatment systems serving hospitals, hotels, and industrial campuses.",
      image: "/images/home/plant-stp.jpg",
    },
    {
      title: "RO Programs",
      description:
        "Membrane antiscalants, cleaners, biocides, and monitoring support for high-purity reverse osmosis trains.",
      image: "/images/home/plant-ro.jpg",
    },
    {
      title: "Utility Water",
      description:
        "Boiler, cooling, and closed-loop treatment programs that protect heat-transfer equipment and keep utilities reliable.",
      image: "/images/home/plant-dm.jpg",
    },
  ],
  clients: [
    { src: "/images/logo.png", alt: "Client logo" },
    { src: "/images/Layer-26.png", alt: "Client logo" },
    { src: "/images/images-1-300x48.png", alt: "Client logo" },
    { src: "/images/logo_header-300x53.png", alt: "Client logo" },
    { src: "/images/white-wheel-logo-300x161.png", alt: "Client logo" },
    { src: "/images/VRG_blue-metal.png", alt: "Client logo" },
    { src: "/images/TNEB.png", alt: "Client logo" },
    { src: "/images/SCM-mills.png", alt: "Client logo" },
    { src: "/images/logo_nobal-17.png", alt: "Client logo" },
    { src: "/images/gknm-logo.png", alt: "Client logo" },
  ],
};
