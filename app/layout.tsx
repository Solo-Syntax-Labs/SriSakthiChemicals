import type { Metadata } from "next";
import { Open_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import type { CSSProperties } from "react";
import PageLoader from "@/components/PageLoader";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteDescription =
  "Manufacturer and exporter of water treatment chemicals and speciality additives for boilers, cooling towers, RO, effluent plants, and process industries.";

/** Prefer GitHub Pages origin+basePath when exporting; otherwise marketing site URL. */
function getMetadataBase(): URL {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (basePath) {
    return new URL(`https://solo-syntax-labs.github.io${basePath}/`);
  }
  const siteUrl = site.website.startsWith("http")
    ? site.website
    : `https://${site.website}`;
  return new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: site.legalName,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  applicationName: site.name,
  keywords: [
    "Sri Sakthi Chemicals",
    "water treatment chemicals",
    "boiler treatment",
    "cooling tower chemicals",
    "RO chemicals",
    "effluent treatment",
    "Madurai",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/images/brand/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.legalName,
    description: siteDescription,
    images: [
      {
        url: "/images/brand/favicon-512.png",
        width: 512,
        height: 512,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: site.legalName,
    description: siteDescription,
    images: ["/images/brand/favicon-512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const assetVars = {
    "--bg-about": `url("${assetPrefix}/images/about-bg.png")`,
    "--bg-footer": `url("${assetPrefix}/images/footer-bg.jpg")`,
    "--bg-water-drop": `url("${assetPrefix}/images/water-drop.png")`,
  } as CSSProperties;

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${outfit.variable} ${openSans.variable} h-full`}
      style={assetVars}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <Script id="ssc-theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('ssc-theme-v1');if(t!=='light'&&t!=='dark'){t='dark';localStorage.setItem('ssc-theme-v1',t);}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`}
        </Script>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
