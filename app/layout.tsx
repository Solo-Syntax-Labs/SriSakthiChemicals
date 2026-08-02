import type { Metadata } from "next";
import { Open_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import type { CSSProperties } from "react";
import PageLoader from "@/components/PageLoader";
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

export const metadata: Metadata = {
  title: "Indigon - Tech India Pvt Ltd",
  description:
    "Indigon Tech India Private Limited provides industrial water treatment chemicals and plant products across boiler, cooling tower, RO, ETP, and process applications.",
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
        <Script id="indigon-theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('indigon-theme-v2');if(t!=='light'&&t!=='dark'){t='dark';localStorage.setItem('indigon-theme-v2',t);}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`}
        </Script>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
