"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product } from "@/type/babyCareProductType";
import ProductNotFound from "@/app/components/babyCareProductPage/ProductNotFound";
import BabyCareHeroSection from "@/app/components/babyCareProductPage/BabyCareHeroSection";
// import WhyTouchMattersSection from "@/app/components/babyCareProductPage/WhyTouchMattersSection";
import ComfortDetailsSection from "@/app/components/babyCareProductPage/ComfortDetailsSection";
import SizeGuideSection from "@/app/components/babyCareProductPage/SizeGuideSection";
import TrustFusionSection from "@/app/components/babyCareProductPage/TrustFusionSection";
import CarePromiseSection from "@/app/components/babyCareProductPage/CarePromiseSection";
import FaqAndCloseViewSection from "@/app/components/babyCareProductPage/FaqAndCloseViewSection";
import ProductVideoSection from "@/app/components/babyCareProductPage/ProductVideoSection";
import { hexToRgba, type ThemePreset, colors } from "@/lib/tokens";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";

const productImageSets: Record<
  string,
  { moodboardImages: string[]; technicalDetailImages: string[] }
> = {
  "supreme-diapers": {
    moodboardImages: [
      "/PRODUCTS/Baby/supreme-diapers/technology.jpg",
      "/images/baby/baby29.png",
      "/images/baby/baby24.png",
      "/images/baby/baby31.png",
      "/images/baby/baby30.png",
      "/images/baby/baby14.png",
      "/images/baby/baby32.png",
      "/images/baby/baby33.png",
      "/images/baby/baby10.png",
      "/images/baby/baby23.png",
      "/images/baby/baby20.png",
      "/images/baby/baby12.png",
    ],
    technicalDetailImages: [
      "/PRODUCTS/Baby/supreme-diapers/tech1.jpg",
      "/PRODUCTS/Baby/supreme-diapers/tech2.jpg",
      "/PRODUCTS/Baby/supreme-diapers/tech3.jpg",
      "/PRODUCTS/Baby/supreme-diapers/tech4.jpg",
    ],
  },
  "premium-diapers-pants": {
    moodboardImages: [
      "/PRODUCTS/Baby/premium-diapers/technology.jpg",
      "/images/baby/baby29.png",
      "/images/baby/baby24.png",
      "/images/baby/baby31.png",
      "/images/baby/baby30.png",
      "/images/baby/baby14.png",
      "/images/baby/baby32.png",
      "/images/baby/baby33.png",
      "/images/baby/baby10.png",
      "/images/baby/baby23.png",
      "/images/baby/baby20.png",
      "/images/baby/baby12.png",
    ],
    technicalDetailImages: [
      "/PRODUCTS/Baby/premium-diapers/tech1.jpg",
      "/PRODUCTS/Baby/premium-diapers/tech2.jpg",
      "/PRODUCTS/Baby/premium-diapers/tech3.jpg",
      "/PRODUCTS/Baby/premium-diapers/tech4.jpg",
    ],
  },
  "value-diapers-pants": {
    moodboardImages: [
      "/PRODUCTS/Baby/value-diapers/technology.jpg",
      "/images/baby/baby29.png",
      "/images/baby/baby24.png",
      "/images/baby/baby31.png",
      "/images/baby/baby30.png",
      "/images/baby/baby14.png",
      "/images/baby/baby32.png",
      "/images/baby/baby33.png",
      "/images/baby/baby10.png",
      "/images/baby/baby23.png",
      "/images/baby/baby20.png",
      "/images/baby/baby12.png",
    ],
    technicalDetailImages: [
      "/PRODUCTS/Baby/value-diapers/tech1.jpg",
      "/PRODUCTS/Baby/value-diapers/tech2.jpg",
      "/PRODUCTS/Baby/value-diapers/tech3.jpg",
      "/PRODUCTS/Baby/value-diapers/tech4.jpg",
    ],
  },
  "moisturising-tissue": {
    moodboardImages: [
      "/PRODUCTS/Baby/tissue/technology.jpg",
      "/images/baby/baby29.png",
      "/images/baby/baby24.png",
      "/images/baby/baby31.png",
      "/images/baby/baby30.png",
      "/images/baby/baby14.png",
      "/images/baby/baby32.png",
      "/images/baby/baby33.png",
      "/images/baby/baby10.png",
      "/images/baby/baby23.png",
      "/images/baby/baby20.png",
      "/images/baby/baby12.png",
    ],
    technicalDetailImages: [
      "/PRODUCTS/Baby/tissue/tech1.jpg",
      "/PRODUCTS/Baby/tissue/tech2.jpg",
      "/PRODUCTS/Baby/tissue/tech3.jpg",
      "/PRODUCTS/Baby/tissue/tech4.jpg",
    ],
  },
  "value-wet-wipes": {
    moodboardImages: [
      "/PRODUCTS/Baby/wet-wipes/product2.jpg",
      "/images/baby/baby29.png",
      "/images/baby/baby24.png",
      "/images/baby/baby31.png",
      "/images/baby/baby30.png",
      "/images/baby/baby14.png",
      "/images/baby/baby32.png",
      "/images/baby/baby33.png",
      "/images/baby/baby10.png",
      "/images/baby/baby23.png",
      "/images/baby/baby20.png",
      "/images/baby/baby12.png",
    ],
    technicalDetailImages: [
      "/PRODUCTS/Baby/wet-wipes/tech1.jpg",
      "/PRODUCTS/Baby/wet-wipes/tech2.jpg",
      "/PRODUCTS/Baby/wet-wipes/tech3.jpg",
      "/PRODUCTS/Baby/wet-wipes/tech4.jpg",
    ],
  },
};

const conceptImages = [
  "/images/baby/baby14.png",
  "/images/baby/baby10.png",
  "/images/baby/baby12.png",
  "/images/baby/baby13.png",
  "/images/baby/baby16.png",
  "/images/baby/baby18.png",
  "/images/baby/baby19.png",
  "/images/baby/baby21.png",
  "/images/baby/baby22.png",
  "/images/baby/baby27.png",
];

const comparisonImageBySlug: Record<string, string> = {
  "supreme-diapers": "/comparison-diapers/supreme-diaper.png",
  "premium-diapers-pants": "/comparison-diapers/premium-diaper.png",
  "value-diapers-pants": "/comparison-diapers/value-diaper.png",
  "moisturising-tissue": "/comparison-diapers/tissue.png",
  "value-wet-wipes": "/comparison-diapers/wet-wipes.png",
};

const comparisonRows = [
  { label: "Dermatologically Tested", zuvara: "Yes", ordinary: "Not Always" },
  { label: "Hypoallergenic Design", zuvara: "Yes", ordinary: "Varies" },
  { label: "Toxin-Free Materials", zuvara: "Yes", ordinary: "Varies" },
  { label: "Breathable Layers", zuvara: "Advanced", ordinary: "Basic" },
  { label: "Chlorine Bleaching", zuvara: "No", ordinary: "Usually Yes" },
  { label: "Fragrance", zuvara: "No", ordinary: "Often Added" },
  { label: "Absorbency", zuvara: "Up to 12 Hours", ordinary: "4-6 Hours" },
];

const themePresets: ThemePreset[] = [
  {
    accent: colors.baby.accent,
    pageBg: colors.baby.hero,
    containerBg: colors.baby.chip,
    border: colors.baby.border,
    chipBg: colors.baby.chip,
    sectionTint: colors.baby.panel,
  },
  {
    accent: "#2d6f9f",
    pageBg: "#f1f7fd",
    containerBg: "#dbeefe",
    border: "#8eb9dd",
    chipBg: "#d4e8fb",
    sectionTint: "#e8f1fb",
  },
  {
    accent: "#8b6b00",
    pageBg: "#fff9ea",
    containerBg: "#fff1bf",
    border: "#d5bd6d",
    chipBg: "#ffe8a0",
    sectionTint: "#fff5d8",
  },
  {
    accent: "#6a4aa3",
    pageBg: "#f6f2ff",
    containerBg: "#e8defd",
    border: "#b49cdc",
    chipBg: "#decef9",
    sectionTint: "#efe7ff",
  },
];

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function pickHeroBaby(p: Product) {
  return p.heroImage2 || p.heroImage || p.image;
}

function pickHeroPack(p: Product) {
  return p.heroImage || p.image || pickHeroBaby(p);
}

export default function Page() {
  const params = useParams<{ babyCareProductPage: string }>();
  const slug = params?.babyCareProductPage;
  const products = useMemo(() => babyCareProducts, []);
  const product = products.find((item) => item.slug === slug);
  const initialIndex = Math.max(
    0,
    products.findIndex((item) => item.slug === slug),
  );
  const [activeIdx, setActiveIdx] = useState(initialIndex);
  const rootRef = useRef<HTMLElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const active =
    products.length > 0
      ? products[clampIndex(activeIdx, products.length)]
      : product || babyCareProducts[0];
  const theme = themePresets[clampIndex(activeIdx, themePresets.length)];

  useEffect(() => {
    const handleVisibility = () => {
      const footer = document.querySelector("footer");
      const pastFirstScreen = window.scrollY > window.innerHeight;
      const footerReached = footer
        ? footer.getBoundingClientRect().top <= window.innerHeight
        : false;

      setShowScrollTop(pastFirstScreen && !footerReached);
    };

    handleVisibility();
    window.addEventListener("scroll", handleVisibility, { passive: true });
    window.addEventListener("resize", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".immersive-section");
      sections.forEach((section) => {
        const rises = section.querySelectorAll(".fx-rise");

        if (rises.length) {
          gsap.fromTo(
            rises,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            },
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, [active?.id, theme.accent]);

  if (!product || !active) {
    return <ProductNotFound />;
  }

  const getRenderData = (currentProduct: Product, index: number) => {
    const currentTheme = themePresets[clampIndex(index, themePresets.length)];
    const currentHeroPackSrc = pickHeroPack(currentProduct);
    const currentVariants = currentProduct?.variants || [];
    const currentImageSet =
      productImageSets[currentProduct?.slug ?? ""] ||
      productImageSets["supreme-diapers"];
    const currentComparisonImage =
      comparisonImageBySlug[currentProduct?.slug ?? ""] ||
      currentProduct?.image ||
      currentHeroPackSrc;

    return {
      theme: currentTheme,
      heroPackSrc: currentHeroPackSrc,
      variants: currentVariants,
      imageSet: currentImageSet,
      trustImages: {
        comparisonZuvara: currentComparisonImage,
        comparisonOrdinary: currentComparisonImage,
      },
    };
  };

  const renderPageContent = (currentProduct: Product, index: number) => {
    const {
      theme: currentTheme,
      heroPackSrc: currentHeroPackSrc,
      variants: currentVariants,
      imageSet,
      trustImages: currentTrustImages,
    } = getRenderData(currentProduct, index);

    return (
      <>
        <div
          className="theme-orb pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: hexToRgba(currentTheme.accent, 0.2) }}
        />
        <div
          className="theme-orb pointer-events-none absolute top-120 -right-20 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: hexToRgba(currentTheme.chipBg, 0.44) }}
        />
        <div
          className="theme-orb pointer-events-none absolute top-360 left-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: hexToRgba(currentTheme.accent, 0.14) }}
        />

        <BabyCareHeroSection
          active={currentProduct}
          products={products}
          heroPackSrc={currentHeroPackSrc}
          theme={currentTheme}
          onPrev={() => setActiveIdx((v) => v - 1)}
          onNext={() => setActiveIdx((v) => v + 1)}
          onSelectProduct={setActiveIdx}
          pickHeroPack={pickHeroPack}
        />

        {/* <WhyTouchMattersSection
          theme={currentTheme}
          backgroundImage={imageSet.moodboardImages[0] || pickHeroBaby(currentProduct)}
        /> */}
        <ProductCloseViewSection
          product={currentProduct}
          theme={currentTheme}
          technicalDetailImages={imageSet.technicalDetailImages}
        />
        <ProductVideoSection />

        <ComfortDetailsSection
          theme={currentTheme}
          moodboardImages={imageSet.moodboardImages}
        />

        <SizeGuideSection
          theme={currentTheme}
          variants={currentVariants}
          sizeGuideImages={currentProduct?.sizeGuideImages}
        />

        <TrustFusionSection
          theme={currentTheme}
          comparisonRows={comparisonRows}
          images={currentTrustImages}
        />

        <CarePromiseSection
          theme={currentTheme}
          conceptImages={conceptImages}
        />

        <FaqAndCloseViewSection active={currentProduct} theme={currentTheme} />
      </>
    );
  };

  return (
    <main
      ref={rootRef}
      className="relative overflow-hidden text-zinc-800 antialiased md:transition-colors md:duration-500"
      style={{ backgroundColor: theme.pageBg }}
    >
      <div className="relative">
        {renderPageContent(active, clampIndex(activeIdx, products.length))}
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_18px_32px_rgba(0,0,0,0.16)] transition-all duration-300 sm:h-12 sm:w-12 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{
          borderColor: `${theme.border}88`,
          backgroundColor: hexToRgba(theme.pageBg, 0.92),
          color: theme.accent,
          boxShadow: `0 18px 32px ${hexToRgba(theme.accent, 0.2)}`,
        }}
      >
        <ArrowUp size={18} strokeWidth={2.4} />
      </button>
    </main>
  );
}
