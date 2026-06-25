"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { ArrowUp } from "lucide-react";
import type { Product } from "@/type/babyCareProductType";
import ProductNotFound from "@/app/components/babyCareProductPage/ProductNotFound";
import BabyCareHeroSection from "@/app/components/babyCareProductPage/BabyCareHeroSection";
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
import { useProductBySlug } from "@/hooks/useProduct";

// Static fallback images for sections that don't have API equivalents
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
];

export default function Page() {
  const params = useParams<{ babyCareProductPage: string }>();
  const slug = params?.babyCareProductPage;
  
  // Fetch product from API
  const { data: apiProduct, isLoading, error } = useProductBySlug(slug ?? "");
  
  const rootRef = useRef<HTMLElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = themePresets[0];

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
    if (!apiProduct) return;
    
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
  }, [apiProduct]);

  // Loading state with skeleton
  if (isLoading) {
    return (
      <main
        className="relative min-h-screen overflow-hidden text-zinc-800 antialiased"
        style={{ backgroundColor: theme.pageBg }}
      >
        {/* Hero Skeleton */}
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left - Product Image Skeleton */}
            <div className="flex items-center justify-center">
              <div className="relative h-96 w-96 animate-pulse rounded-3xl bg-gray-200/50" />
            </div>
            
            {/* Right - Product Info Skeleton */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200/50" />
                <div className="h-12 w-3/4 animate-pulse rounded-lg bg-gray-200/50" />
                <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200/50" />
                <div className="h-6 w-5/6 animate-pulse rounded-lg bg-gray-200/50" />
              </div>
              
              <div className="flex gap-3">
                <div className="h-12 w-32 animate-pulse rounded-full bg-gray-200/50" />
                <div className="h-12 w-32 animate-pulse rounded-full bg-gray-200/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Skeletons */}
        <div className="space-y-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl space-y-6">
                <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200/50 mx-auto" />
                <div className="h-6 w-96 animate-pulse rounded-lg bg-gray-200/50 mx-auto" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-48 animate-pulse rounded-2xl bg-gray-200/50" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // Error or not found
  if (error || !apiProduct) {
    return <ProductNotFound />;
  }

  // Convert API product to Product interface for components
  const product: Product = {
    id: 0,
    name: apiProduct.productName,
    slug: apiProduct.slug,
    category: apiProduct.category?.categoryName ?? "Baby Care",
    rating: 4.8,
    reviews: apiProduct.reviews?.length ?? 0,
    image: apiProduct.coverImage,
    heroImage: apiProduct.coverImage,
    heroImage2: apiProduct.media?.[0] ?? apiProduct.coverImage,
    video: apiProduct.videoUrl ?? undefined,
    description: apiProduct.description ?? "",
    productCloseView: [],
    faqs: [],
    variants: (apiProduct.availableSizes ?? []).map((s, idx) => ({
      id: idx + 1,
      image: apiProduct.coverImage,
      size: s.size,
      weight: s.weight,
    })),
  };

  // Extract dynamic data from API
  const heroPackSrc = apiProduct.coverImage;
  const moodboardImages = apiProduct.media ?? [];
  const technicalDetailImages = apiProduct.media?.slice(0, 4) ?? [];
  const highlightImages = apiProduct.highlights
    ?.filter((h) => h.isActive)
    .flatMap((h) => h.highlightImages) ?? [];
  const comparisonImage = apiProduct.coverImage;

  return (
    <main
      ref={rootRef}
      className="relative overflow-hidden text-zinc-800 antialiased"
      style={{ backgroundColor: theme.pageBg }}
    >
      <div className="relative">
        {/* Theme orbs */}
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

        <BabyCareHeroSection
          active={product}
          products={[product]}
          heroPackSrc={heroPackSrc}
          theme={theme}
          onPrev={() => {}}
          onNext={() => {}}
          onSelectProduct={() => {}}
          pickHeroPack={() => heroPackSrc}
        />

        <ProductCloseViewSection
          product={product}
          theme={theme}
          technicalDetailImages={technicalDetailImages}
          highlightImages={highlightImages.length > 0 ? highlightImages : undefined}
        />

        <ProductVideoSection theme={theme} videoUrl={apiProduct.videoUrl} />

        <ComfortDetailsSection
          theme={theme}
          moodboardImages={moodboardImages}
        />

        <SizeGuideSection
          theme={theme}
          variants={product.variants}
          sizeGuideImages={undefined}
          availableSizes={apiProduct.availableSizes}
        />

        <TrustFusionSection
          theme={theme}
          comparisonRows={comparisonRows}
          images={{
            comparisonZuvara: comparisonImage,
            comparisonOrdinary: comparisonImage,
          }}
          reviews={apiProduct.reviews}
        />

        <CarePromiseSection
          theme={theme}
          conceptImages={conceptImages}
        />

        <FaqAndCloseViewSection 
          active={product} 
          theme={theme} 
          productId={apiProduct.id}
        />
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
