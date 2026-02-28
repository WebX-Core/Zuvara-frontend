import type { Metadata } from "next";
import {  Cormorant_Garamond, Montserrat, Amatic_SC } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./providers/LenisProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const amaticSc = Amatic_SC({
  weight: ["400","700"],
  variable: "--font-amatic",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Zuvara - Premium Baby & Kids Care Products",
  description:
    "Premium quality baby care, kids fashion, and household products for families in Nepal",
  icons: {
    icon: "/favicon.png",
  },
};

import CrawlingBaby from "./components/shared/CrawlingBaby";
import { SectionProvider } from "./providers/SectionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${amaticSc.variable} antialiased text-zinc-900 overflow-x-hidden! `}
      >
        <LenisProvider>
          <SectionProvider>
            {children}
            {/* <CrawlingBaby /> */}
          </SectionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
