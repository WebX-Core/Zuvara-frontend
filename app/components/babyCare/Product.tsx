"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { babyCareProducts } from "@/constants/babyCareProduct";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";
import type { Product as BabyProduct } from "@/type/babyCareProductType";
import type { Product as ClothingProduct } from "@/type/babyClothesType";
import type { Product as StrollerProduct } from "@/type/strollerRockerProductType";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { colors } from "@/lib/tokens";

type ProductItem = BabyProduct | ClothingProduct | StrollerProduct;

const hexToRgba = (hex: string, alpha: number) => {
  const normalizedHex = hex.replace("#", "");
  const fullHex =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((char) => char + char)
          .join("")
      : normalizedHex;

  const r = Number.parseInt(fullHex.slice(0, 2), 16);
  const g = Number.parseInt(fullHex.slice(2, 4), 16);
  const b = Number.parseInt(fullHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const babyDetailPagePaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "premium-diapers-pants": {
    background: colors.baby.chip,
    foreground: colors.baby.accent,
  },
  "supreme-diapers": {
    background: "#dbeefe",
    foreground: "#2d6f9f",
  },
  "value-diapers-pants": {
    background: "#fff1bf",
    foreground: "#8b6b00",
  },
  "moisturising-tissue": {
    background: "#e8defd",
    foreground: "#6a4aa3",
  },
  "value-wet-wipes": {
    background: colors.baby.chip,
    foreground: colors.baby.accent,
  },
};

const clothingPaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "co-ord-sets": {
    background: "#ffe7dc",
    foreground: "#b8613f",
  },
  "hoodies-joggers": {
    background: "#e8f4dc",
    foreground: "#5f7d3e",
  },
  "polo-t-shirt": {
    background: "#dff2fb",
    foreground: "#2e7293",
  },
  "t-shirt-shorts": {
    background: "#f7ebff",
    foreground: "#7b52a7",
  },
};

const strollerPaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "zuvara-zinx-infant-to-toddler-baby-rocker": {
    background: "#e3efff",
    foreground: "#3b6b9d",
  },
  "zuvara-cheer-baby-stroller": {
    background: "#ecf3ef",
    foreground: "#4f6f63",
  },
};

const Product = () => {
  const [activeTab, setActiveTab] = useState<"baby" | "clothing" | "stroller">(
    "baby",
  );

  const products: ProductItem[] =
    activeTab === "baby"
      ? babyCareProducts
      : activeTab === "clothing"
        ? clothingProducts
        : strollerRockerProducts;

  const tabs = [
    { id: "baby", label: "Baby Products", icon: "/icons/l.png" },
    { id: "clothing", label: "Clothing", icon: "/icons/clothes.png" },
    {
      id: "stroller",
      label: "Strollers & Rockers",
      icon: "/icons/stroller.png",
    },
  ] as const;

  const routeMap: Record<typeof activeTab, string> = {
    baby: "babyCareProduct",
    clothing: "clothing",
    stroller: "strollerRockerProduct",
  };
  const collectionHref = `/${routeMap[activeTab]}`;
  const featuredProducts = products.slice(0, 4);
  const shouldShowViewMore = products.length > featuredProducts.length;

  const productBottomWave = assetWithFill(wave4Svg, "#BFDDCA");

  const getCardImage = (product: ProductItem) => {
    if (activeTab !== "baby") {
      return product.image;
    }

    const babyProduct = product as BabyProduct;

    if (babyProduct.slug === "moisturising-tissue") {
      return "/PRODUCTS/Baby/tissue/product.png";
    }

    if (babyProduct.slug === "value-wet-wipes") {
      return "/PRODUCTS/Baby/wet-wipes/product.png";
    }

    return (
      babyProduct.variants?.[0]?.image ||
      babyProduct.image ||
      babyProduct.heroImage ||
      "/images/placeholder.png"
    );
  };

  const getCardTheme = (product: ProductItem) => {
    if (activeTab === "clothing") {
      const clothingProduct = product as ClothingProduct;
      const palette = clothingPaletteBySlug[clothingProduct.slug] ?? {
        background: "#edf5f1",
        foreground: colors.baby.accent,
      };

      return {
        background: hexToRgba(palette.background, 0.72),
        foreground: palette.foreground,
        border: hexToRgba(palette.foreground, 0.16),
        chip: hexToRgba(palette.background, 0.88),
      };
    }

    if (activeTab === "stroller") {
      const strollerProduct = product as StrollerProduct;
      const palette = strollerPaletteBySlug[strollerProduct.slug] ?? {
        background: "#edf5f1",
        foreground: colors.baby.accent,
      };

      return {
        background: hexToRgba(palette.background, 0.72),
        foreground: palette.foreground,
        border: hexToRgba(palette.foreground, 0.16),
        chip: hexToRgba(palette.background, 0.88),
      };
    }

    if (activeTab !== "baby") {
      return {
        background: "#ffffff",
        foreground: "#111827",
        border: "#e4e4e7",
        chip: "rgba(255,255,255,0.7)",
      };
    }

    const babyProduct = product as BabyProduct;
    const detailPalette = babyDetailPagePaletteBySlug[babyProduct.slug] ?? null;
    const background =
      detailPalette?.background || babyProduct.background || colors.baby.chip;
    const foreground =
      detailPalette?.foreground || babyProduct.foreground || "#111827";

    return {
      background: hexToRgba(background, 0.28),
      foreground,
      border: hexToRgba(foreground, 0.16),
      chip: hexToRgba(background, 0.46),
    };
  };

  const renderProductCard = (product: ProductItem, index: number) => {
    const cardTheme = getCardTheme(product);

    return (
      <Link
        key={product.id}
        href={`/${routeMap[activeTab]}/${product.slug}`}
        className="group block w-full lg:w-[calc(25%-0.9375rem)]"
      >
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
          viewport={{ once: true }}
          className="flex h-full flex-col gap-4 rounded-4xl  transition-transform duration-300 group-hover:-translate-y-1"
        >
          <div
            className="relative flex gap-4 h-40 items-center justify-center overflow-hidden rounded-[1.75rem]  py-2 sm:h-56"
            style={{ backgroundColor: cardTheme.background }}
          >
            <div
              className="pointer-events-none absolute inset-x-6 bottom-4 h-9 rounded-full blur-2xl"
              style={{ backgroundColor: hexToRgba(cardTheme.foreground, 0.18) }}
            />
            <Image
              src={getCardImage(product)}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
            />
          </div>

          <div className="flex flex-1 items-center justify-between  px-2 pb-4  ">
            <h3
              className="max-w-40 text-sm font-semibold leading-snug text-zinc-900 sm:max-w-52 sm:text-base"
              style={{ color: cardTheme.foreground }}
            >
              {product.name}
            </h3>

            <span
              className="shrink-0 rounded-full p-2 -rotate-45 transition-transform duration-300 group-hover:translate-x-1"
              style={{
                backgroundColor: cardTheme.chip,
                color: cardTheme.foreground,
              }}
            >
              <ArrowRight size={16} />
            </span>
          </div>
        </motion.article>
      </Link>
    );
  };

  return (
    <>
      <style>{`
        .category-tabs {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .category-tabs::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* ================= PRODUCT SECTION ================= */}
      <section className="relative py-8 pb-12 lg:pb-40">
        <div
          className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
        />
        <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
          <div className="mb-2 flex flex-col items-center justify-center leading-8 gap-2 text-center">
            <h2 className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.4rem)] font-semibold  tracking-tight text-baby-accent">
              Best selling
              <span className="ml-2  font-light italic text-baby-accent-soft">
                baby essentials
              </span>
            </h2>

            <p className="hero-copy mt-2 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              Discover our most loved products, trusted by parents for comfort,
              quality, and everyday care.
            </p>
          </div>

          {/* Tabs */}
          <div className="category-tabs flex gap-3 overflow-x-auto py-4 whitespace-nowrap lg:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 lg:px-5 py-2.5 rounded-full  text-sm  font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 border! ${
                  activeTab === tab.id
                    ? "bg-babyCare text-foreground border-none border-baby-accent-soft shadow-md"
                    : "bg-white text-foreground  border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      activeTab === tab.id ? "text-foreground" : ""
                    }`}
                  />
                </div>

                <motion.span
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.label}
                </motion.span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 mx-auto  max-w-7xl grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2  pb-10 lg:gap-4"
          >
            {featuredProducts.map((product, index) =>
              renderProductCard(product, index),
            )}
          </motion.div>

          {shouldShowViewMore ? (
            <div className="flex justify-center">
              <Link
                href={collectionHref}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white! transition-transform duration-300 hover:-translate-y-0.5"
              >
                View more
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Product;
