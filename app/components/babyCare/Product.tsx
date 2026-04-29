"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

  // const browseHref = `/${routeMap[activeTab]}`;

  // const getDescription = (product: ProductItem) =>
  //   product.description ??
  //   "Premium product designed for everyday comfort and reliable care.";
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
        className="group block w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
      >
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
          viewport={{ once: true }}
          className="flex h-full flex-col rounded-2xl border p-1"
          style={{
            borderColor: cardTheme.border,
            backgroundColor: cardTheme.background,
          }}
        >
          <div
            className="relative h-44 overflow-hidden rounded-2xl"
            style={{ backgroundColor: cardTheme.chip }}
          >
            {/* <span
              className="absolute top-3 left-3 z-10 text-sm font-semibold uppercase tracking-wider"
              style={{ color: `${cardTheme.foreground}cc` }}
            >
              {product.category}
            </span> */}
            <Image
              src={getCardImage(product)}
              alt={product.name}
              fill
              className="object-contain  transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
            />
          </div>
          <div className="mt-4 flex  flex-1 flex-col items-center justify-between text-center lg:mt-0 lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <h3
              className="max-w-56 text-md font-semibold line-clamp-2 lg:max-w-40 lg:text-sm"
              style={{ color: cardTheme.foreground }}
            >
              <span
                className="group-hover:underline"
                style={{
                  textDecorationColor: cardTheme.foreground,
                }}
              >
                {product.name}
              </span>
            </h3>

            <div className="flex pt-2 justify-center pb-2 lg:mt-auto lg:justify-end lg:pt-4 lg:pb-0">
              <span
                className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  borderColor: cardTheme.foreground,
                  color: cardTheme.foreground,
                }}
              >
                Learn more
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  };

  return (
    <>
      {/* ================= PRODUCT SECTION ================= */}
      <section className="relative py-8 lg:pb-28">
        <div
          className="absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
        />
        <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
          <div className="mb-8 flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight text-baby-accent">
              Best selling
              <span className="ml-3 font-light italic text-baby-accent-soft">
                baby essentials
              </span>
            </h2>

            <p className="hero-copy mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              Discover our most loved products, trusted by parents for comfort,
              quality, and everyday care.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 py-4 lg:justify-center overflow-x-auto whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 lg:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                  activeTab === tab.id
                    ? "bg-babyCare text-foreground border-babyCare shadow-md"
                    : "bg-white text-foreground border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
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
            className="mt-8 mx-auto flex max-w-7xl flex-wrap justify-center gap-5 pb-10"
          >
            {products.map((product, index) =>
              renderProductCard(product, index),
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Product;
