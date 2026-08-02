import type { Metadata } from "next";
import { Open_Sans, Outfit } from "next/font/google";
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
    "Indigon Tech India Private Limited provides industrial water treatment chemicals and plant solutions across boiler, cooling tower, RO, ETP, and process applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${openSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
