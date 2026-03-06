"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

// Types remain the same as your structure
import type {
  Product as BabyProduct,
} from "@/type/babyCareProductType";
import type {
  Product as ClothingProduct,
} from "@/type/babyClothesType";
import type {
  Product as StrollerProduct,
} from "@/type/strollerRockerProductType";
import type {
  Product as PersonalProduct,
} from "@/type/personalCareProductType";

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
    .map((variant) => variant.size ?? variant.color ?? "")
    .filter(Boolean)
    .slice(0, 3);

  const price = "price" in product ? product.price : undefined;
  const priceLabel = price
    ? `${price.currency} ${price.amount}`
    : "Explore variants";

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
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#45685e]/35 hover:shadow-xl hover:shadow-[#45685e]/10 lg:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-700">
              {product.category}
            </span>
            {product.rating ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#eef4f1] px-2.5 py-1 text-xs font-medium text-[#45685e]">
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

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#45685e] px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-[#38564f]">
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
