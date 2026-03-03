"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { babyCareProducts } from "@/constants/babyCareProduct";
import ProductCard from "../common-ui/ProductCard";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";
import SectionHeading from "../common-ui/SectionHeading";

const Product = () => {
  const [activeTab, setActiveTab] = useState<"baby" | "clothing" | "stroller">(
    "baby",
  );

  const products =
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

  return (
    <>
      {/* ================= PRODUCT SECTION ================= */}
      <section className="relative py-8 lg:py-12 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 w-full lg:w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <SectionHeading
              title="Our Products"
              highlight=""
              description="Explore our range of premium baby care products, designed with love and care for your little one."
              align="center"
            />
          </motion.div>
          {/* Tabs */}
          <div className="flex gap-3 py-4 lg:justify-center overflow-x-auto whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 lg:px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-babyCare text-foreground shadow-lg"
                    : "bg-zinc-100 text-foreground hover:bg-zinc-200"
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
