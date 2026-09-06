import Image from "next/image";
import { site } from "@/lib/site";

type BrandLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
};

/** Renders theme-aware transparent logos (white on dark, navy on light). */
export default function BrandLogo({
  width = 160,
  height = 64,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className="brand-logo-wrap">
      <Image
        src="/images/brand/sri-sakthi-logo.png"
        alt={`${site.name} logo`}
        width={width}
        height={height}
        className="brand-logo brand-logo-on-dark"
        priority={priority}
      />
      <Image
        src="/images/brand/sri-sakthi-logo-on-light.png"
        alt=""
        width={width}
        height={height}
        className="brand-logo brand-logo-on-light"
        aria-hidden
      />
    </span>
  );
}
