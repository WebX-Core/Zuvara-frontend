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

type ProductItem = BabyProduct | ClothingProduct | StrollerProduct;

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

  const browseHref = `/${routeMap[activeTab]}`;

  const getDescription = (product: ProductItem) =>
    product.description ??
    "Premium product designed for everyday comfort and reliable care.";

  return (
    <>
      {/* ================= PRODUCT SECTION ================= */}
      <section className="relative py-8 lg:py-12 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 w-full lg:w-[90%]">
          <div className="mb-8 flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
              Bestsellers
            </h2>
            <Link
              href={browseHref}
              className="text-sm font-medium text-zinc-700 hover:text-foreground transition-colors"
            >
              Browse all products {"->"}
            </Link>
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

          {/* Products Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 pb-10 flex flex-wrap justify-center gap-5"
          >
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/${routeMap[activeTab]}/${product.slug}`}
                className="group block w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="h-full rounded-2xl border border-zinc-200 bg-white p-3 flex flex-col"
                >
                  <div className="relative h-44 rounded-2xl bg-babyCare/20 overflow-hidden">
                    <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-wider font-semibold text-zinc-500">
                      {product.category}
                    </span>
                    <Image
                      src={product.variants?.[0]?.image || product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-zinc-900 group-hover:text-foreground line-clamp-1">
                    <span className="group-hover:underline underline-foreground decoration-foreground">
                      {product.name}
                    </span>
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 leading-relaxed line-clamp-2 min-h-9">
                    {getDescription(product)}
                  </p>
                  <div className="mt-auto pt-4 flex justify-end">
                    <span className="inline-flex items-center rounded-full border border-foreground px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors group-hover:bg-foreground group-hover:text-white group-hover:border-foreground">
                      Learn more
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Product;
