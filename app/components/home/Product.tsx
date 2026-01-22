"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import SectionHeading from "../common-ui/SectionHeading";

import { babyCareProducts } from "@/constant/babyCareProduct";
import { personalCareProducts } from "@/constant/personalCareProduct";
import type {
  Product as ProductType,
  Variant,
} from "@/type/babyCareProductType";

const Product = () => {
  const [selectedVariant, setSelectedVariant] = useState<
    Record<number, Variant>
  >({});
  const [activeTab, setActiveTab] = useState<"baby" | "personal">("baby");

  const products =
    activeTab === "baby"
      ? (babyCareProducts as unknown as ProductType[])
      : (personalCareProducts as unknown as ProductType[]);

  return (
    <section className="bg-white">
      <div className="container mt-8 lg;mt-0 mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {/* Section Header */}
        {/* <div className="flex flex-col gap-2 justify-between items-center">
          <SectionHeading
            title="Featured"
            highlight="Products"
            description="Discover our best-selling items"
            align="center"
          />
        </div> */}

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab("baby")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "baby"
                ? "bg-foreground text-white shadow-lg"
                : "bg-zinc-100 text-foreground hover:bg-zinc-200"
            }`}
          >
            Baby Care
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "personal"
                ? "bg-personalCare text-white shadow-lg"
                : "bg-zinc-100 text-personalCare hover:bg-zinc-200"
            }`}
          >
            Personal Care
          </button>
        </div>

        {/* Products Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
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
                    activeTab === "baby"
                      ? "text-foreground"
                      : "text-personalCare"
                  }`}
                >
                  Best Seller
                </div>

                {/* Product Image Container */}
                <div className="relative bg-zinc-200 aspect-square overflow-hidden h-40 md:h-60 lg:h-72 shrink-0">
                  <Image
                    src={selectedVariant[product.id]?.image || product.image}
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
                <div className="px-3 py-2 bg-zinc-100 border-t border-zinc-100  w-full">
                  <div className="flex gap-4 items-center justify-center overflow-x-auto w-full">
                    {product.variants && product.variants.length > 0 && (
                      <div className="p-2 flex gap-2 items-center">
                        {product.variants.slice(0, 6).map((variant) => (
                          <button
                            key={variant.id}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedVariant((prev) => ({
                                ...prev,
                                [product.id]: variant,
                              }));
                            }}
                            className={`shrink-0 size-10 lg:size-12 rounded border-2 overflow-hidden transition-all ${
                              selectedVariant[product.id]?.id === variant.id
                                ? `border-zinc-500 ring-2 ${
                                    activeTab === "baby"
                                      ? "ring-foreground"
                                      : "ring-personalCare"
                                  }`
                                : "border-zinc-300 hover:border-zinc-500"
                            }`}
                            title={variant.color}
                          >
                            <Image
                              src={variant.image}
                              alt={variant.color}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                        {product.variants.length > 6 && (
                          <div className="shrink-0 w-12 h-12 rounded border-2 border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600 hover:border-zinc-500 transition-all">
                            +{product.variants.length - 6}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 p-4 flex flex-col">
                  {/* Name */}
                  <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  {/* <p className="text-xs text-zinc-600 mb-3 line-clamp-2">
                    {product.category} - Premium Quality
                  </p> */}

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
          ))}
        </motion.div>
        <div className="flex w-full justify-center mt-8">
          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              content="View All Products"
              link="/products"
              icon="healthicons:nappy-diaper"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
