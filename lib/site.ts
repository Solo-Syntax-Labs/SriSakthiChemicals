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
  name: "Indigon",
  legalName: "Indigon - Tech India Pvt Ltd",
  fullName: "Indigon Tech India Private Limited",
  phones: ["+91 88833 38262", "+91 98427 51296"],
  landline: "04288 - 242047",
  emails: ["info@indigon.com", "contact@indigon.com"],
  address: [
    "4/181-E2, Mahalakshmi Nagar,",
    "Kadachanallur, Pallipalayam,",
    "Erode -638008.",
  ],
  whatsapp: "918883338262",
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
    "/images/02-01-01-scaled.jpg",
    "/images/01-01-scaled.jpg",
    "/images/slider-1-scaled.jpg",
    "/images/slider-4-scaled.jpg",
  ],
  plantSlides: [
    {
      title: "ETP Plant",
      description:
        "An effluent treatment (ETP) is a facility designed to treat industrial waste water by removing contaminants, ensuring that the discharge meets environmental regulations before being released or reused.",
      image: "/images/etp-plant.jpg",
    },
    {
      title: "STP Plant",
      description:
        "At Indigon, we introduce Ozone Bioxy Plasma Technology, a revolutionary advancement in Sewage Treatment Plants (STPs).",
      image: "/images/stp-plant.jpg",
    },
    {
      title: "RO Plant",
      description: "Advanced reverse osmosis systems engineered for high-purity industrial water treatment.",
      image: "/images/home-page-RO-image.png",
    },
    {
      title: "DM Plant",
      description: "Eliminates ionic impurities from water for high-purity applications.",
      image: "/images/dm-water-treatment-plant-for-sugar.jpg",
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
