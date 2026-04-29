"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as PersonalProduct } from "@/type/personalCareProductType";
import PersonalProductHeroSection from "@/app/components/personalCareProduct/PersonalProductHeroSection";
// import PersonalWhyItMattersSection from "@/app/components/personalCareProduct/PersonalWhyItMattersSection";
import PersonalComfortDetailsSection from "@/app/components/personalCareProduct/PersonalComfortDetailsSection";
import PersonalSizeGuideSection from "@/app/components/personalCareProduct/PersonalSizeGuideSection";
import PersonalTrustFusionSection from "@/app/components/personalCareProduct/PersonalTrustFusionSection";
import PersonalCarePromiseSection from "@/app/components/personalCareProduct/PersonalCarePromiseSection";
import PersonalFaqAndCloseViewSection from "@/app/components/personalCareProduct/PersonalFaqAndCloseViewSection";
import PersonalProductCloseViewSection from "@/app/components/personalCareProduct/PersonalProductCloseViewSection";
import ProductVideoSection from "@/app/components/babyCareProductPage/ProductVideoSection";

import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";

const comparisonRows = [
  { label: "Skin Compatibility", zuvara: "Derm-tested", ordinary: "Varies" },
  { label: "Absorbency Performance", zuvara: "High", ordinary: "Standard" },
  { label: "Odour Control", zuvara: "Advanced", ordinary: "Basic" },
  { label: "Leak Protection", zuvara: "Multi-layer", ordinary: "Regular" },
  { label: "Everyday Comfort", zuvara: "Adaptive fit", ordinary: "Generic fit" },
  { label: "Night Support", zuvara: "Overnight-ready", ordinary: "Not always" },
  { label: "Breathability", zuvara: "Airflow layer", ordinary: "Limited" },
];

const personalTechnicalDetailImages: Record<string, string[]> = {
  "period-panties": [
    "/PRODUCTS/personal/period%20panties/tech1.jpg",
    "/PRODUCTS/personal/period%20panties/tech2.jpg",
    "/PRODUCTS/personal/period%20panties/tech3.jpg",
    "/PRODUCTS/personal/period%20panties/tech4.jpg",
  ],
  "sanitary-pads": [
    "/PRODUCTS/personal/sanitary%20pads/tech1.jpg",
    "/PRODUCTS/personal/sanitary%20pads/tech2.jpg",
    "/PRODUCTS/personal/sanitary%20pads/tech3.jpg",
    "/PRODUCTS/personal/sanitary%20pads/tech4.jpg",
  ],
};

const personalSizeGuideImageOverrides: Record<string, string[]> = {
  "period-panties": [
    "/PRODUCTS/personal/period%20panties/size_m-l.jpg",
    "/PRODUCTS/personal/period%20panties/size_l-xl.jpg",
  ],
  "sanitary-pads": [
    "/PRODUCTS/personal/sanitary%20pads/tech1.jpg",
    "/PRODUCTS/personal/sanitary%20pads/tech2.jpg",
  ],
};

const personalHeroPackSectionImages: Record<string, string> = {
  "period-panties": "/images/personalCare/period-panties.png",
  "sanitary-pads": "/images/personalCare/sanitary-pad.png",
};

const personalComparisonImageBySlug: Record<string, string> = {
  "period-panties": "/comparison-diapers/period-panties.png",
  "sanitary-pads": "/comparison-diapers/pad.png",
};

const themePresets: ThemePreset[] = [
  {
    accent: "#7b2cbf",
    pageBg: "#fbf6ff",
    containerBg: "#f0e2fb",
    border: "#cfb2e8",
    chipBg: "#ead7f9",
    sectionTint: "#f5ebff",
  },
  {
    accent: "#9d4edd",
    pageBg: "#fdf7ff",
    containerBg: "#f7e8ff",
    border: "#dcb8f5",
    chipBg: "#f1dcff",
    sectionTint: "#f7edff",
  },
  {
    accent: "#5a189a",
    pageBg: "#f8f2ff",
    containerBg: "#ead9ff",
    border: "#b89ada",
    chipBg: "#dfc4f8",
    sectionTint: "#f2e7ff",
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

function pickHeroPack(product: PersonalProduct) {
  return product.image || product.variants?.[0]?.image || product.productImage;
}

export default function Page() {
  const params = useParams<{ personalCareProductPage: string }>();
  const slug = params?.personalCareProductPage;

  const mappedProducts = useMemo(() => personalCareProducts, []);

  const product = mappedProducts.find((item) => item.slug === slug);
  const initialIndex = Math.max(
    0,
    mappedProducts.findIndex((item) => item.slug === slug),
  );

  const [activeIdx, setActiveIdx] = useState(initialIndex);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  const active =
    mappedProducts.length > 0
      ? mappedProducts[clampIndex(activeIdx, mappedProducts.length)]
      : product || mappedProducts[0];

  const theme = themePresets[clampIndex(activeIdx, themePresets.length)];
  const heroPackSrc =
    personalHeroPackSectionImages[active?.slug ?? ""] ||
    (active ? pickHeroPack(active) : "");
  const variants = active?.variants || [];
  const heroAvatars =
    active?.heroAvatars && active.heroAvatars.length > 0
      ? active.heroAvatars
      : [active.image, active.image, active.image, active.image];
  const moodboardImages =
    active?.moodboardImages && active.moodboardImages.length > 0
      ? active.moodboardImages
      : [active.image];
  const technicalDetailImages =
    personalTechnicalDetailImages[active?.slug ?? ""] ||
    moodboardImages.slice(0, 4);
  const sizeGuideImages =
    personalSizeGuideImageOverrides[active?.slug ?? ""] ||
    (active?.sizeGuideImages && active.sizeGuideImages.length > 0
      ? active.sizeGuideImages
      : [active.image]);
  const whyItMattersImage = active?.whyItMattersImage || active.image;
  const baseTrustImages = active?.trustImages || {
    testimonialPrimary: active.image,
    testimonialSecondary: active.image,
    comparisonZuvara: active.image,
    comparisonOrdinary: active.image,
  };
  const personalComparisonImage =
    personalComparisonImageBySlug[active?.slug ?? ""] || active.image;
  const trustImages = {
    ...baseTrustImages,
    comparisonZuvara: personalComparisonImage,
    comparisonOrdinary: personalComparisonImage,
  };
  const carePromiseImages =
    active?.carePromiseImages && active.carePromiseImages.length > 0
      ? active.carePromiseImages
      : [active.image];

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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      gsap.to(".theme-orb", {
        y: -30,
        x: 20,
        duration: 6,
        yoyo: true,
        repeat: -1,
        stagger: 0.35,
        ease: "sine.inOut",
      });

      const sections = gsap.utils.toArray<HTMLElement>(".immersive-section");
      sections.forEach((section) => {
        const rises = section.querySelectorAll(".fx-rise");
        const floats = section.querySelectorAll(".fx-float");
        const parallax = section.querySelectorAll(".fx-parallax");

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

        if (floats.length) {
          gsap.to(floats, {
            yPercent: -4,
            stagger: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (parallax.length && isDesktop) {
          gsap.to(parallax, {
            yPercent: -5,
            scale: 1.01,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, [active?.id, theme.accent]);

  if (!product || !active) {
    return (
      <main className="min-h-screen grid place-items-center px-6">
        <p className="text-zinc-600">Product not found.</p>
      </main>
    );
  }

  return (
    <main
      ref={rootRef}
      className="relative overflow-hidden text-zinc-800 antialiased md:transition-colors md:duration-500"
      style={{ backgroundColor: theme.pageBg }}
    >
      <div
        className="theme-orb pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.2) }}
      />
      <div
        className="theme-orb pointer-events-none absolute top-120 -right-20 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.44) }}
      />
      <div
        className="theme-orb pointer-events-none absolute top-360 left-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.14) }}
      />

      <PersonalProductHeroSection
        active={active}
        products={mappedProducts}
        heroPackSrc={heroPackSrc}
        heroAvatars={heroAvatars}
        theme={theme}
        onPrev={() => setActiveIdx((v) => v - 1)}
        onNext={() => setActiveIdx((v) => v + 1)}
        onSelectProduct={setActiveIdx}
      />

      {/* <PersonalWhyItMattersSection
        theme={theme}
        backgroundImage={whyItMattersImage}
      /> */}

      <PersonalProductCloseViewSection
        product={active}
        theme={theme}
        technicalDetailImages={technicalDetailImages}
      />
      <ProductVideoSection />
      <PersonalComfortDetailsSection
        theme={theme}
        moodboardImages={moodboardImages}
      />

      <PersonalSizeGuideSection
        theme={theme}
        variants={variants}
        sizeGuideImages={sizeGuideImages}
      />

      <PersonalTrustFusionSection
        theme={theme}
        comparisonRows={comparisonRows}
        images={trustImages}
      />

      <PersonalCarePromiseSection
        theme={theme}
        conceptImages={carePromiseImages}
      />

      <PersonalFaqAndCloseViewSection active={active} theme={theme} />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_18px_32px_rgba(0,0,0,0.16)] transition-all duration-300 md:right-8 md:bottom-8 ${
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
