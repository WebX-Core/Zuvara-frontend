import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Geist({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zuvara - Premium Baby & Kids Care Products",
  description:
    "Premium quality baby care, kids fashion, and household products for families in Nepal",
};

import CrawlingBaby from "./components/shared/CrawlingBaby";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#BCDDC4] text-zinc-900 overflow-x-hidden ${montserrat.variable}`}
      >
        <LenisProvider>
          {children}
          <CrawlingBaby />
        </LenisProvider>
      </body>
    </html>
  );
}
