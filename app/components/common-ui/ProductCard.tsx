"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

// Types remain the same as your structure
import type { Product as BabyProduct } from "@/type/babyCareProductType";
import type { Product as ClothingProduct } from "@/type/babyClothesType";
import type { Product as StrollerProduct } from "@/type/strollerRockerProductType";
import type { Product as PersonalProduct } from "@/type/personalCareProductType";
import { colors } from "@/lib/tokens";

type ProductType =
  | BabyProduct
  | ClothingProduct
  | StrollerProduct
  | PersonalProduct;

interface ProductCardProps {
  product: ProductType;
  index: number;
  activeTab: "baby" | "personal" | "clothing" | "stroller";
  className?: string;
  style?: React.CSSProperties;
}

type ProductVariant = NonNullable<ProductType["variants"]>[number];

const getVariantLabel = (variant: ProductVariant) => {
  if ("size" in variant && variant.size) return variant.size;
  if ("color" in variant && variant.color) return variant.color;
  if ("name" in variant && variant.name) return variant.name;
  if ("weight" in variant && variant.weight) return variant.weight;
  return "";
};

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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  activeTab,
  className,
}) => {
  const routeMap: Record<typeof activeTab, string> = {
    baby: "babyCareProduct",
    personal: "personalCareProduct",
    stroller: "strollerRockerProduct",
    clothing: "clothing",
  };

  const displayImage = product.variants?.[0]?.image || product.image;
  const detailsHref = `/${routeMap[activeTab]}/${product.slug}`;

  const variantLabels = (product.variants ?? [])
    .map(getVariantLabel)
    .filter(Boolean)
    .slice(0, 3);

  const price = "price" in product ? product.price : undefined;
  const priceLabel = price
    ? `${price.currency} ${price.amount}`
    : "Explore variants";
  const mobilePalette =
    activeTab === "clothing"
      ? clothingPaletteBySlug[product.slug]
      : activeTab === "stroller"
        ? strollerPaletteBySlug[product.slug]
        : null;
  const mobileCardTheme = mobilePalette
    ? {
        background: hexToRgba(mobilePalette.background, 0.72),
        foreground: mobilePalette.foreground,
        chip: hexToRgba(mobilePalette.background, 0.88),
      }
    : {
        background: hexToRgba(colors.baby.chip, 0.28),
        foreground: colors.baby.accent,
        chip: hexToRgba(colors.baby.chip, 0.46),
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className={`h-full w-full ${className}`}
    >
      <Link href={detailsHref} className="block h-full">
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex h-full flex-col gap-4 rounded-4xl transition-transform duration-300 lg:hidden"
        >
          <div
            className="relative flex h-40 items-center justify-center overflow-hidden rounded-[1.75rem] py-2"
            style={{ backgroundColor: mobileCardTheme.background }}
          >
            <div
              className="pointer-events-none absolute inset-x-6 bottom-4 h-9 rounded-full blur-2xl"
              style={{
                backgroundColor: hexToRgba(mobileCardTheme.foreground, 0.18),
              }}
            />
            <Image
              src={displayImage}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 40vw, 90vw"
            />
          </div>

          <div className="flex flex-1 items-center justify-between px-2 pb-4">
            <h3
              className="max-w-40 text-sm font-semibold leading-snug sm:max-w-52 sm:text-base"
              style={{ color: mobileCardTheme.foreground }}
            >
              {product.name}
            </h3>

            <span
              className="shrink-0 rounded-full p-2 -rotate-45 transition-transform duration-300 group-hover:translate-x-1"
              style={{
                backgroundColor: mobileCardTheme.chip,
                color: mobileCardTheme.foreground,
              }}
            >
              <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative hidden h-full min-h-84 flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-baby-accent/35 hover:shadow-xl hover:shadow-baby-accent/10 lg:flex lg:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-700">
              {product.category}
            </span>
            {product.rating ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-baby-chip px-2.5 py-1 text-xs font-medium text-baby-accent">
                <Star size={12} className="fill-current" />
                {product.rating.toFixed(1)}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-1 flex-col">
            <h3 className="text-xl font-semibold leading-snug text-zinc-900 lg:text-2xl">
              {product.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2">
              {product.description ??
                "Premium quality product designed for everyday comfort and reliable care."}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {variantLabels.map((label) => (
                <span
                  key={`${product.id}-${label}`}
                  className="rounded-md border border-zinc-200 px-2 py-1 text-[11px] font-medium text-zinc-600"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-zinc-400">
                  Starting from
                </p>
                <p className="text-sm font-semibold text-zinc-900">
                  {priceLabel}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-baby-accent px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-baby-accent-soft">
                View Details
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-3 -right-2 h-36 w-36 transition-transform duration-500 group-hover:scale-105 sm:h-40 sm:w-40">
            <div className="absolute inset-0 rounded-full bg-[#eef4f1]" />
            <Image
              src={displayImage}
              alt={product.name}
              fill
              className="object-contain p-3"
              sizes="180px"
            />
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
