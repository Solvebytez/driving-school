import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Onest,
  Pathway_Extreme,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TopBar } from "@/components/site/common/top-bar";
import { MainNav } from "@/components/site/common/main-nav";
import { FooterSection } from "@/components/site/common/footer-section";
import { CTASection } from "@/components/site/homepage/cta-section";
import { LocationResetProvider } from "@/components/location-reset-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const pathwayExtreme = Pathway_Extreme({
  subsets: ["latin"],
  variable: "--font-pathway-extreme",
  display: "swap",
});

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased ${montserrat.variable} ${onest.variable} ${pathwayExtreme.variable}`}
      >
        <LocationResetProvider>
          <TopBar />
          <MainNav />
          {children}
          <CTASection />
          <FooterSection />
          <Analytics />
        </LocationResetProvider>
      </body>
    </html>
  );
}
