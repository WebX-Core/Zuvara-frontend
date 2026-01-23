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

import ProductCard from "../common-ui/ProductCard";
// import BigImage from "./BigImage";

const Product = () => {
  const [activeTab, setActiveTab] = useState<"baby" | "personal">("baby");

  const products =
    activeTab === "baby"
      ? (babyCareProducts as unknown as ProductType[])
      : (personalCareProducts as unknown as ProductType[]);

  return (
    <>
      {/* <BigImage /> */}
      <section className="h-auto md:h-[40vh] lg:h-[80vh] xl:h-[70vh] bg-divider flex items-center relative">
        {/* top curve border */}
        <div className="custom-shape-divider-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container w-full">
          <div className="overflow-hidden">
            {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-12 items-center"> */}
            <div className="flex items-center">
              {/* Left Side - Text Content */}
              <div className="w-2/3 lg:w-1/2 pl-8 lg:py-24 flex flex-col items-start justify-center lg:pl-36">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Premium Collection
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-3 font-poppins leading-[0.9] lg:leading-none">
                  Discover our{" "}
                  <span className="text-[#8cd700] italic">complete range</span>{" "}
                  of products
                </h2>
                <p className="hidden md:block text-zinc-700 text-sm lg:text-base leading-relaxed">
                  Quality baby products designed for comfort and safety.
                </p>
              </div>

              {/* Right Side - Animated Image */}
              <div
                // ref={imageRef}
                className="w-1/3 lg:w-1/2 relative h-64 md:h-full min-h-64"
              >
                <Image
                  src="/images/baby/baby-with-product.png"
                  alt="Baby with product"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* bottom curve border */}
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

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
