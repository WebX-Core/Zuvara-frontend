"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type {
  Product as ProductType,
  Variant,
} from "@/type/babyCareProductType";

interface ProductCardProps {
  product: ProductType;
  index: number;
  activeTab: "baby" | "personal";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  activeTab,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const { variants } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className={`group h-full flex flex-col bg-white rounded-lg border border-transparent overflow-hidden transition-all duration-400 relative ${
          activeTab === "baby"
            ? "hover:border-foreground"
            : "hover:border-personalCare"
        }`}
      >
        {/* Best Seller Badge */}
        <div
          className={`absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-xs font-medium shadow-sm ${
            activeTab === "baby" ? "text-foreground" : "text-personalCare"
          }`}
        >
          Best Seller
        </div>

        {/* Product Image Container */}
        <div className="relative bg-zinc-200 aspect-square overflow-hidden h-40 md:h-60 lg:h-72 shrink-0">
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
            <div className="flex gap-2 items-center justify-center overflow-x-auto w-full">
              <div className="flex items-center justify-center pt-2">
                {variants && variants.length > 0 && (
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                    {variants[0].color ? "Color: " : "Size: "}
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
                        setSelectedVariant(variant);
                      }}
                      className={`shrink-0 size-10 rounded border-2 overflow-hidden transition-all ${
                        (selectedVariant?.id || variants[0].id) === variant.id
                          ? `border-zinc-500 ring-2 ${
                              activeTab === "baby"
                                ? "ring-foreground"
                                : "ring-personalCare"
                            }`
                          : "border-zinc-300 hover:border-zinc-500"
                      }`}
                      title={variant.color || variant.size}
                    >
                      {variant.color ? (
                        <Image
                          src={variant.image}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white text-[10px] md:text-sm font-bold text-zinc-700">
                          {variant.size}
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
        <div className="flex-1 p-4 flex flex-col">
          {/* Name */}
          <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Link - Minimal Style */}
          <Link
            href={`/product/${product.id}`}
            className="text-xs text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
          >
            View details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
