import { site } from "@/lib/site";

export type QualityBlock = {
  title: string;
  paragraphs: string[];
  image: string;
  imagePosition: "left" | "right";
  items?: { title: string; description: string }[];
};

export const qualityContent = {
  title: `Quality Assurance at ${site.legalName}`,
  intro: `At ${site.name}, quality is the foundation of everything we do. As a leading manufacturer and formulator of specialty water treatment chemicals, we are committed to delivering products that meet the highest industry standards. Our dedication to quality ensures that our customers receive consistent, reliable, and effective solutions tailored to their specific needs.`,
  blocks: [
    {
      title: "Rigorous Quality Control",
      imagePosition: "right",
      image: "/images/quality/istockphoto-1207928621-612x612-1.jpg",
      paragraphs: [
        "We adhere to a comprehensive quality management system (QMS) that governs every step of our production process. From the selection of raw materials to the final product, we implement strict quality control measures to ensure the purity, performance, and safety of our chemicals. Each batch is tested against stringent parameters, including chemical composition, efficacy, and environmental impact, to maintain the highest levels of quality.",
      ],
    },
    {
      title: "Certifications and Standards",
      imagePosition: "left",
      image:
        "/images/quality/concept-of-iso-standards-quality-control-assurance-warranty-business-technology006-free-photo.jpg",
      paragraphs: [
        `${site.name} is proud to maintain ISO 9001:2015 certification, a globally recognized standard that ensures our products and services consistently meet customer and regulatory requirements. This certification reflects our commitment to continuous improvement and innovation in water treatment solutions.`,
        "In addition to ISO certification, our products comply with industry-specific standards such as the American Society for Testing and Materials (ASTM) and other relevant environmental and safety regulations.",
      ],
    },
    {
      title: "In-House Research and Development",
      imagePosition: "right",
      image: "/images/quality/istockphoto-909908830-612x612-1.jpg",
      paragraphs: [
        "To uphold our product standards and drive innovation, we operate a state-of-the-art in-house research and development laboratory. Our R&D team is dedicated to improving existing products and developing new solutions that meet the evolving needs of the market. By leveraging advanced technologies and customer feedback, we continuously enhance our product offerings to deliver superior performance and efficiency.",
      ],
    },
    {
      title: "Wet Lab for Customer Analysis",
      imagePosition: "left",
      image: "/images/quality/istockphoto-537040913-612x612-1.jpg",
      paragraphs: [
        "Our commitment to quality is further supported by our wet lab, where we analyze water samples from our customers. This facility enables us to recommend the most suitable products based on specific water conditions and performance requirements. Regular monitoring of product performance at customer sites ensures that our solutions deliver the expected results, allowing us to make timely adjustments and improvements as needed.",
      ],
    },
    {
      title: "Continuous Monitoring and Maintenance",
      imagePosition: "right",
      image: "/images/quality/operation-land.png",
      paragraphs: [
        "To guarantee that our products maintain their performance over time, we conduct regular audits and performance evaluations. This includes:",
      ],
      items: [
        {
          title: "Batch Testing",
          description:
            "Every formulation is tested before release to ensure consistency and effectiveness.",
        },
        {
          title: "Shelf-life Monitoring",
          description:
            "We track the stability of our chemicals to guarantee their long-term performance.",
        },
        {
          title: "Customer Feedback",
          description:
            "We work closely with our clients to gather feedback and fine-tune our formulations to meet evolving requirements.",
        },
      ],
      // trailing paragraph after list handled separately in content below
    },
    {
      title: "Commitment to Sustainability",
      imagePosition: "left",
      image: "/images/quality/istockphoto-90360989-612x612-1.jpg",
      paragraphs: [
        `At ${site.name}, sustainability is integral to our quality philosophy. We prioritize eco-friendly formulations, responsible manufacturing practices, and solutions that help industries reduce environmental impact while maintaining performance. Our goal is to support cleaner operations and long-term resource efficiency for every customer we serve.`,
      ],
    },
  ] satisfies QualityBlock[],
  monitoringClosing:
    "By employing advanced analytical techniques and maintaining a robust in-house laboratory, we are able to continuously monitor and enhance the quality of our products.",
};
