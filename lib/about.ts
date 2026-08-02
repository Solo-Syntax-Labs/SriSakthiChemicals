import { site } from "@/lib/site";

export const aboutContent = {
  intro: {
    eyebrow: "About Us",
    title: "The Ultimate Problem Solver to your daily world",
    image: "/images/04.png",
    paragraphs: [
      `${site.fullName} was founded with a clear vision to revolutionize the water treatment industry through innovation, expertise, dedication and technology-driven solutions for diverse water treatment needs.`,
      "Over the past two decades, we have evolved from a modest chemical manufacturer into a trusted leader, providing state-of-the-art water treatment solutions to industries across various sectors.",
    ],
  },
  sections: [
    {
      id: "legacy",
      title: "OUR LEGACY",
      variant: "tint-text-left" as const,
      image: "/images/about-image-4.png",
      imageStyle: "plain" as const,
      items: [
        `With over 25 years of industry experience, ${site.name} has become synonymous with quality, innovation, and customer-centric solutions.`,
        "We have always been at the forefront of water treatment technology, and we are proud to carry forward a legacy of excellence.",
        "Over the years, we have continuously expanded our portfolio, offering a comprehensive range of specialty chemicals and water treatment plants tailored to meet the unique needs of our clients.",
      ],
    },
    {
      id: "products",
      title: "OUR PRODUCTS",
      variant: "plain-image-left" as const,
      image: "/images/experiments-chemistry-lab-conducting-experiment-laboratory-scaled.jpg",
      imageStyle: "slant" as const,
      items: [
        "We specialize in the design, manufacturing, and supply of specialty water treatment chemicals for industrial applications, including boilers, cooling towers, reverse osmosis plants, effluent treatment plants and other specialty applications.",
        "Our advanced range of products includes defoamers, flocculants, coagulants, corrosion inhibitors, biocides, and more—all developed with a commitment to environmental sustainability and regulatory compliance.",
        "In addition to our chemical solutions, we also fabricate and install high-performance water treatment plants, including ETPs, STPs, RO Plants, Softening Plants, and deionization (DM) plants, offering end-to-end services from consultation to after-sales support.",
        "Each of our solutions is tailored to the specific requirements of our clients, ensuring optimal efficiency and cost-effectiveness.",
      ],
    },
    {
      id: "commitment",
      title: "OUR COMMITMENT",
      variant: "tint-text-left" as const,
      image: "/images/coworkers-stacking-hands-together-scaled.jpg",
      imageStyle: "slant" as const,
      items: [
        `At ${site.name}, we are driven by a commitment to quality, economy, and environmental responsibility.`,
        "Every product we manufacture undergoes rigorous testing to ensure that it meets the highest industry standards.",
        "We believe that sustainability is not just a buzzword but a responsibility, and our eco-friendly formulations are designed to minimize the environmental impact while maximizing performance.",
      ],
    },
    {
      id: "customer-focus",
      title: "CUSTOMER FOCUS",
      variant: "plain-image-left" as const,
      image: "/images/customer-focus-text-write-paper-concept_384948-11990.jpg",
      imageStyle: "slant" as const,
      items: [
        "Our approach is deeply customer-centric, and we pride ourselves on building long-term relationships with our clients.",
        "Whether it’s a small-scale operation or a large industrial plant, we work closely with our customers to understand their unique challenges and provide customized solutions that deliver results.",
        "From conducting on-site assessments and lab trials to offering technical support and after-sales service, we ensure that our clients receive the best possible experience.",
      ],
    },
    {
      id: "innovation",
      title: "INNOVATION AND GROWTH",
      variant: "tint-text-left" as const,
      image: "/images/branding-innovation-creative-inspire-concept-scaled.jpg",
      imageStyle: "slant" as const,
      items: [
        "As a forward-thinking company, we constantly invest in research and development to stay ahead of industry trends and technological advancements.",
        "Our R&D team works tirelessly to develop new formulations, improve existing products, and find innovative ways to enhance water treatment processes.",
        "Our journey from a small startup to an industry leader is a testament to our dedication to growth, innovation, and excellence.",
        "As we look to the future, we remain committed to pushing the boundaries of what’s possible in water treatment, delivering cutting-edge solutions that not only solve today’s problems but anticipate tomorrow’s challenges.",
      ],
    },
    {
      id: "vision",
      title: "OUR VISION",
      variant: "plain-image-left" as const,
      image: "/images/360_F_239520607_abB3AakIrZozIAPgdVAMiMArLwi0uJTL.jpg",
      imageStyle: "slant" as const,
      items: [
        "Our vision is to become a global leader in water treatment solutions, renowned for our innovative products, superior quality, and commitment to sustainability.",
        "We aim to create a future where industries can operate efficiently while minimizing their environmental footprint, ensuring a cleaner and healthier world for future generations.",
      ],
    },
  ],
};
