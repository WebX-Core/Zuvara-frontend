"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { babyCareProducts } from "@/constants/babyCareProduct";
import ProductCard from "../common-ui/ProductCard";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";

const Product = () => {
  const [activeTab, setActiveTab] = useState<"baby" | "clothing" | "stroller">(
    "baby"
  );

  const products =
    activeTab === "baby"
      ? babyCareProducts
      : activeTab === "clothing"
        ? clothingProducts
        : strollerRockerProducts;

  const tabs = [
    { id: "baby", label: "Baby Care", icon: "/icons/l.png" },
    { id: "clothing", label: "Clothing", icon: "/icons/clothes.png" },
    {
      id: "stroller",
      label: "Strollers & Rockers",
      icon: "/icons/stroller.png",
    },
  ] as const;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="h-auto md:h-[60vh] bg-babyCare flex flex-col lg:flex-row items-center justify-between relative px-4 lg:px-0  lg:pt-0">

        {/* Left Content */}
        <div className="w-full lg:w-2/3 mx-auto px-4 lg:pl-36 py-12 lg:py-24 flex flex-col items-start justify-end relative z-10">

          <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-3">
            Premium Collection
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#45685e] mb-3 leading-tight lg:leading-none font-poppins">
            Discover our complete range of products
          </h2>

          <p className="hidden md:block text-zinc-600 text-sm lg:text-base leading-relaxed max-w-md">
            Quality baby products designed for comfort and safety.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 relative h-64 lg:h-full min-h-[280px] flex justify-center items-end z-20">
          <Image
            src="/images/baby/baby-with-product.png"
            alt="Baby with product"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Background Brand Text */}
        <div className="hidden lg:block absolute right-0 -top-32 z-0 pointer-events-none text-[#45685e] font-extrabold">
          <h2 className="text-[140px] xl:text-[180px] uppercase leading-none opacity-60">
            zuvara
          </h2>
        </div>

      </section>

      {/* ================= PRODUCT SECTION ================= */}
      <section className="relative py-8 lg:py-12">

        <div className="container mx-auto px-4 sm:px-6 lg:px-6 w-full lg:w-[90%]">

          {/* Tabs */}
          <div className="flex gap-3 py-4 lg:justify-center overflow-x-auto whitespace-nowrap">

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 lg:px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-babyCare text-zinc-600 shadow-lg"
                    : "bg-zinc-100 text-foreground hover:bg-zinc-200"
                }`}
              >
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      activeTab === tab.id ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>

                {activeTab === tab.id && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {tab.label}
                  </motion.span>
                )}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-10 pb-10"
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                activeTab={activeTab}
              />
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Product;