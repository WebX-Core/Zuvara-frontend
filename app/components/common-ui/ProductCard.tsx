"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Types remain the same as your structure
import type { Product as BabyProduct, Variant as BabyVariant } from "@/type/babyCareProductType";
import type { Product as ClothingProduct, Variant as ClothingVariant } from "@/type/babyClothesType";
import type { Product as StrollerProduct, Variant as StrollerVariant } from "@/type/strollerRockerProductType";
import type { Product as PersonalProduct, Variant as PersonalVariant } from "@/type/personalCareProductType";

type ProductType = BabyProduct | ClothingProduct | StrollerProduct | PersonalProduct;

interface ProductCardProps {
  product: ProductType;
  index: number;
  activeTab: "baby" | "personal" | "clothing" | "stroller";
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, activeTab, className }) => {
  const router = useRouter();
  
  const routeMap: Record<typeof activeTab, string> = {
    baby: "babyCareProduct",
    personal: "personalCareProduct",
    stroller: "strollerRockerProduct",
    clothing: "clothing",
  };

  const displayImage = product.variants?.[0]?.image || product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`h-full w-full ${className}`}
    >
      <motion.div
        onClick={() => router.push(`/${routeMap[activeTab]}/${product.slug}`)}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative flex flex-col h-full bg-white border border-zinc-100 rounded-[32px] p-8 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-shadow duration-500"
      >
        {/* Label */}
        <div className="z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700/60">
            Premium Selection
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col mt-4 flex-1 z-10">
          <h3 className="text-2xl font-semibold text-zinc-900 leading-snug">
            {product.name}
          </h3>
          <p className="mt-3 text-sm text-zinc-500 leading-relaxed line-clamp-2 max-w-[85%]">
            {product.description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 mt-8 z-10 text-emerald-900">
          <span className="text-sm font-medium tracking-wide">View </span>
          <div className="p-1.5 rounded-full bg-emerald-50 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </div>
        </div>

        {/* Hero Image - Maintains Scale and Perspective */}
        <div className="absolute -bottom-6 -right-6 w-48 h-48 transition-transform duration-700 ease-out group-hover:scale-110">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            className="object-contain"
            sizes="200px"
          />
        </div>

        {/* Decorative Background Accent */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;