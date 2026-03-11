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

  // const browseHref = `/${routeMap[activeTab]}`;

  const getDescription = (product: ProductItem) =>
    product.description ??
    "Premium product designed for everyday comfort and reliable care.";
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

  return (
    <>
      {/* ================= PRODUCT SECTION ================= */}
      <section className="relative py-8 lg:pb-20">
        <div
          className="absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
        />
        <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
          <div className="mb-8 flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight text-[#45685e]">
              Best selling
              <span className="ml-3 font-light italic text-[#6d877f]">
                baby essentials
              </span>
            </h2>

            <p className="hero-copy mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              Discover our most loved products, chosen by parents for their
              perfect blend of comfort, quality, and style. These essentials are
              designed to support your baby&apos;s daily needs with care and
              reliability.
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
                      src={getCardImage(product)}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                    />
                  </div>

                  <h3 className="mt-4 text-sm lg:text-xl font-semibold text-zinc-900 group-hover:text-foreground line-clamp-1">
                    <span className="group-hover:underline underline-foreground decoration-foreground">
                      {product.name}
                    </span>
                  </h3>
                  <p className="mt-1 text-xs lg:text-sm font-medium text-zinc-500 leading-relaxed line-clamp-2 min-h-9">
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
