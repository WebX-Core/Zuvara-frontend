"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type {
  Product as BabyProduct,
  Variant as BabyVariant,
} from "@/type/babyCareProductType";
import type {
  Product as ClothingProduct,
  Variant as ClothingVariant,
} from "@/type/babyClothesType";
import type {
  Product as StrollerProduct,
  Variant as StrollerVariant,
} from "@/type/strollerRockerProductType";
import type {
  Product as PersonalProduct,
  Variant as PersonalVariant,
} from "@/type/personalCareProductType";

type ProductType =
  | BabyProduct
  | ClothingProduct
  | StrollerProduct
  | PersonalProduct;
type UnifiedVariant =
  | BabyVariant
  | ClothingVariant
  | StrollerVariant
  | PersonalVariant;

interface ProductCardProps {
  product: ProductType;
  index: number;
  activeTab: "baby" | "personal" | "clothing" | "stroller";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  activeTab,
}) => {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState<UnifiedVariant | null>(
    null,
  );
  const { variants } = product;

  // Type assertion since variants structure might differ slightly or just be compatible
  // We assume Variant structure is compatible enough for this UI across types

  const productUrl =
    activeTab === "baby"
      ? `/babyCareProduct/${product.slug}`
      : activeTab === "personal"
        ? `/personalCareProduct/${product.slug}`
        : activeTab === "stroller"
          ? `/strollerRockerProduct/${product.slug}`
          : `/clothing/${product.slug}`;

  const handleCardClick = () => {
    router.push(productUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        onClick={handleCardClick}
        className={`group h-full flex flex-col bg-white rounded-2xl border border-transparent overflow-hidden transition-all duration-400 relative cursor-pointer ${
          activeTab === "baby"
            ? "hover:border-foreground"
            : activeTab === "personal"
              ? "hover:border-personalCare"
              : "hover:border-foreground"
        }`}
      >
        {/* Best Seller Badge */}
        <div
          className={`absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm ${
            activeTab === "personal" ? "text-personalCare" : "text-foreground"
          }`}
        >
          Best Seller
        </div>

        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden h-40 md:h-60 lg:h-72 shrink-0">
          <Image
            src={selectedVariant?.image || product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300"
          />

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Variant Thumbnails - Below Image */}
        {variants && variants.length > 0 && (
          <div className="px-3 py-2 bg-zinc-100 border-t border-zinc-100 w-full">
            <div className="flex gap-2 items-center justify-start lg:justify-center overflow-x-auto w-full">
              <div className="hidden lg:flex items-center justify-center pt-2">
                {variants && variants.length > 0 && (
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                    {(variants[0] as any).color ? "Color: " : "Size: "}
                  </p>
                )}
              </div>
              {variants && variants.length > 0 && (
                <div className="p-2 flex gap-2 items-center">
                  {variants.slice(0, 6).map((variant) => (
                    <button
                      key={variant.id}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation(); // Prevent navigation when clicking variant
                        setSelectedVariant(variant);
                      }}
                      className={`shrink-0 size-10 rounded border-2 overflow-hidden transition-all ${
                        (selectedVariant?.id || variants[0].id) === variant.id
                          ? `border-zinc-500 ring-2 ${
                              activeTab === "personal"
                                ? "ring-personalCare"
                                : "ring-foreground"
                            }`
                          : "border-zinc-300 hover:border-zinc-500"
                      }`}
                      title={(variant as any).color || (variant as any).size}
                    >
                      {(variant as any).color ? (
                        <Image
                          src={variant.image}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white text-[10px] md:text-sm font-bold text-zinc-700">
                          {(variant as any).size}
                        </div>
                      )}
                    </button>
                  ))}
                  {variants.length > 6 && (
                    <div className="shrink-0 w-12 h-12 rounded border-2 border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600 hover:border-zinc-500 transition-all">
                      +{variants.length - 6}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Product Info */}
        <div className="flex-1 p-4 flex flex-col bg-zinc-100">
          {/* Name */}
          <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Minimal View details text (not a link anymore, just a hint) */}
          <p className="text-xs text-zinc-500 group-hover:text-zinc-900 font-medium transition-colors">
            View details →
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
