"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product, Variant } from "@/type/babyCareProductType";
import { ChevronRight, Star, Check, ArrowLeft } from "lucide-react";
import FaqSection from "@/app/components/common-ui/FaqSection";
import { useMediaQuery } from "react-responsive";

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const isSmallerDevice = useMediaQuery({ maxWidth: "768px" });

  useEffect(() => {
    const productSlug = params.babyCareProductPage;
    const foundProduct = babyCareProducts.find((p) => p.slug === productSlug);

    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.variants && foundProduct.variants.length > 0) {
        setSelectedVariant(foundProduct.variants[0]);
      }
    }
  }, [params.babyCareProductPage]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Product Not Found
          </h2>
          <p className="text-zinc-600 mb-8">
            The product you are looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/babyCareProduct"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 lg:pt-16 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="lg:hidden group flex items-center gap-2 text-zinc-500 hover:text-white hover:bg-foreground transition-colors mb-3 lg:mb-6 px-2 py-1 rounded-full font-bold text-sm lg:tracking-widest"
        >
          <div className="rounded-full transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back
        </button>

        {/* Breadcrumbs */}
        <nav className="hidden lg:flex items-center gap-2 text-sm text-zinc-700 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/babyCareProduct"
            className="hover:text-foreground transition-colors"
          >
            Baby Care
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"> */}
        <div className="flex gap-4 lg:gap-8">
          {/* Left Column: Image Gallery */}
          <div className="w-1/2">
            <motion.div
              layoutId={`product-image-${product.id}`}
              className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-zinc-200"
            >
              <Image
                src={
                  selectedVariant?.image || product.image || "/placeholder.png"
                }
                alt={product.name}
                fill
                className="object-contain p-4 transition-all duration-500"
                priority
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg">
                    OUT OF STOCK
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-1/2 flex flex-col justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2 lg:mb-4 text-[8px] lg:text-xs font-bold uppercase lg:tracking-wider whitespace-nowrap">
                <span className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full">
                  {product.category}
                </span>
                {product.inStock && (
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    In Stock
                  </span>
                )}
              </div>

              <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-tight tracking-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 bg-zinc-900 text-white px-2 lg:px-3 py-1 lg;py-1.5 rounded-lg text-xs lg:text-sm font-bold">
                  <span>{product.rating}</span>
                  <Star size={isSmallerDevice ? 10 : 14} fill="white" />
                </div>
              </div>

              {!isSmallerDevice && (
                <hr className="text-zinc-500 h-px w-full my-4 lg:my-8" />
              )}

              {/* Variant Selection */}
              {!isSmallerDevice &&
                product.variants &&
                product.variants.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xs font-black text-black uppercase tracking-[0.2em] mb-4">
                      {product.variants[0].color
                        ? "Select Variant"
                        : "Select Size"}
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {product.variants.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariant(v)}
                          className={`group relative w-16 lg:w-32 p-2 lg;p-4 rounded-2xl transition-all duration-300 ${
                            selectedVariant?.id === v.id
                              ? "border-zinc-900 bg-zinc-900 text-white"
                              : "border-zinc-100 hover:border-zinc-300 text-zinc-600 bg-zinc-50"
                          }`}
                        >
                          <div className="flex flex-col gap-1 items-center">
                            <img
                              src={v.icon}
                              alt={`${product.name} - ${v.size} size`}
                              className={`size-12 object-contain ${selectedVariant?.id === v.id && "invert"}`}
                            />
                            <span className="font-bold text-base leading-none mb-1">
                              {v.color || v.size}
                            </span>
                            {v.weight && (
                              <span
                                className={`text-xs font-bold uppercase tracking-wider ${
                                  selectedVariant?.id === v.id
                                    ? "text-zinc-400"
                                    : "text-zinc-400"
                                }`}
                              >
                                {v.weight} kg
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </motion.div>
          </div>
        </div>

        {isSmallerDevice && product.variants && product.variants.length > 0 && (
          <div className="my-8">
            <h3 className="text-xs font-black text-black uppercase tracking-[0.2em] mb-4">
              {product.variants[0].color ? "Select Variant" : "Select Size"}
            </h3>
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`group relative w- lg:w-32 p-2 lg:p-4 rounded-2xl transition-all duration-300 ${
                    selectedVariant?.id === v.id
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-100 hover:border-zinc-300 text-zinc-600 bg-zinc-50"
                  }`}
                >
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      src={v.icon}
                      alt={`${product.name} - ${v.size} size`}
                      className={`size-8 lg:size-12 object-contain ${selectedVariant?.id === v.id && "invert"}`}
                    />
                    <span className="font-bold text-sm lg:text-base leading-none mb-1">
                      {v.color || v.size}
                    </span>
                    {v.weight && (
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          selectedVariant?.id === v.id
                            ? "text-zinc-400"
                            : "text-zinc-400"
                        }`}
                      >
                        {v.weight} kg
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Tabs Section */}
        <div className="mt-16 lg:mt-32">
          <div className="flex border-b border-zinc-100 overflow-x-auto gap-12 scrollbar-hide">
            {[
              "Description",
              "Reviews",
              ...(product.faqs && product.faqs.length > 0 ? ["FAQ"] : []),
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-4 font-black text-xs lg:text-sm tracking-widest uppercase transition-all relative ${
                  activeTab === tab.toLowerCase()
                    ? "text-foreground"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-foreground rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="py-4 md:py-8 lg:py-16 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                {activeTab === "description" && (
                  <div className="space-y-4 lg:space-y-8">
                    <h2 className="text-lg lg:text-3xl font-semibold lg:font-black text-zinc-900 leading-tight">
                      {product.description ||
                        `Experience the ultimate care for your little one with ${product.name}. Specially formulated and designed for sensitive skin, providing 24-hour protection and comfort.`}
                    </h2>
                    <p className="text-zinc-600 text-xs md:text-sm lg:text-xl lg:leading-relaxed font-medium flex flex-col gap-2 lg:gap-4">
                      <span>{product.subDesc1}</span>
                      <span>{product.subDesc2}</span>
                      <span>{product.subDesc3}</span>
                      <span>{product.subDesc4}</span>
                    </p>
                    {product.highlights && product.highlights.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 pt-6">
                        {product.highlights.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-center gap-2 lg:gap-4 group"
                          >
                            <div className="p-1 bg-zinc-900 text-white rounded-full">
                              <Check size={isSmallerDevice ? 10 : 14} />
                            </div>
                            <span className="text-zinc-800 text-sm lg:text-base lg:font-bold">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="space-y-6 lg:space-y-12">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <h2 className="text-lg lg:text-3xl font-semibold lg:font-black text-zinc-900">
                          The Zuvara Community
                        </h2>
                        <p className="text-zinc-500 mt-1 lg:mt-2 font-medium">
                          Real stories from parents like you.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg;gap-8">
                      {(product.reviewsData && product.reviewsData.length > 0
                        ? product.reviewsData
                        : []
                      ).map((review) => (
                        <div
                          key={review.id}
                          className="p-4 lg:p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col h-full hover:shadow-xl hover:shadow-zinc-100 transition-all"
                        >
                          <div className="flex items-center gap-4 mb-4 lg:mb-8">
                            <div className="size-12 lg:size-14 bg-white rounded-xl shadow-sm flex items-center justify-center font-black lg:text-xl text-zinc-900 border border-zinc-100">
                              {review.userInitial}
                            </div>
                            <div>
                              <h4 className="font-black text-zinc-900">
                                {review.userName}
                              </h4>
                              <div className="flex text-zinc-900 gap-0.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={10}
                                    fill={
                                      i < review.rating
                                        ? "currentColor"
                                        : "none"
                                    }
                                    stroke="currentColor"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-zinc-600 font-medium lg:text-lg leading-relaxed italic">
                            "{review.comment}"
                          </p>
                        </div>
                      ))}
                      {(!product.reviewsData ||
                        product.reviewsData.length === 0) && (
                        <div className="col-span-full py-12 text-center bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
                          <p className="text-zinc-400 font-bold">
                            No reviews yet for this product.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {activeTab === "faq" && (
                  <FaqSection
                    questionColor="text-zinc-900"
                    faqs={product.faqs}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
