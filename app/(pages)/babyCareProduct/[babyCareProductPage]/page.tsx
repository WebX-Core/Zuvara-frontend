"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product, Variant } from "@/type/babyCareProductType";
import { ChevronRight, ArrowLeft } from "lucide-react";
import FaqSection from "@/app/components/common-ui/FaqSection";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react/dist/iconify.js";
import DescSection from "@/app/components/babyCareProductPage/DescSection";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import HeroSection from "@/app/components/babyCareProductPage/HeroSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ProductVideoSection from "@/app/components/babyCareProductPage/ProductVideoSection";

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [activeTab, setActiveTab] = useState("information");
  // const [showFullDescription, setShowFullDescription] = useState(false);
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

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
    <div
      className="min-h-screen lg:pb-16"
      style={
        {
          "--product-bg": product.background || "#18181b",
          "--product-fg": product.foreground || "#ffffff",
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative h-auto">
        {/* {isSmallerDevice ? (
          <button
            onClick={() => router.back()}
            className="lg:hidden group flex items-center gap-2 text-zinc-500 hover:text-white hover:bg-foreground transition-colors mb-3 lg:mb-6 px-2 py-1 rounded-full font-bold text-sm lg:tracking-widest"
          >
            <div className="rounded-full transition-colors">
              <ArrowLeft size={16} />
            </div>
            Back
          </button>
        ) : (
          <nav className="hidden lg:flex items-center gap-2 text-sm text-zinc-700 mb-4 overflow-x-auto whitespace-nowrap">
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
        )} */}
        <div className="">
          <HeroSection product={product} />
        </div>

        <div
          id="product-info"
          className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 relative scroll-mt-16"
        >
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <motion.div
              layoutId={`product-image-${product.id}`}
              className="relative w-full aspect-square bg-white rounded-3xl overflow-hidden border border-zinc-200"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVariant?.id || "default"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedVariant?.image || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-contain p-8 lg:p-16"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] lg:text-xs font-bold uppercase lg:tracking-wider whitespace-nowrap px-3 py-1 bg-(--product-bg) text-(--product-fg) rounded-full">
                    {product.category}
                  </span>
                  <div className="w-fit flex items-center gap-1 text-xs lg:text-sm font-bold">
                    <span>{product.rating}</span>
                    <Icon
                      icon="ic:round-star"
                      className="size-5 text-yellow-500"
                    />
                  </div>
                </div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold leading-tight tracking-tight">
                  {product.name}
                </h1>
                <p className="space-y-4 text-zinc-600 text-sm lg:text-base leading-relaxed">
                  {product.subDesc1}
                </p>
              </div>

              {/* Thumbnails of Other Variants */}
              <div className="">
                <span className="text-[10px] lg:text-xs font-black text-zinc-400 uppercase tracking-widest block mb-1">
                  Available Products
                </span>
                {product.variants && product.variants.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto py-2 px-1 scrollbar-hide">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        aria-label={`Select ${v.size || v.color || "variant"}`}
                        title={`Select ${v.size || v.color || "variant"}`}
                        className={`relative size-20 lg:size-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                          selectedVariant?.id === v.id
                            ? "border-(--product-bg) ring-2 ring-(--product-bg)/20 ring-offset-2"
                            : "border-zinc-100 hover:border-zinc-300 bg-white"
                        }`}
                      >
                        <Image
                          src={v.image}
                          alt={`${product.name} - ${v.size || v.color}`}
                          fill
                          className="object-contain p-2"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Selected Variant Data (Size, Weight, etc.) */}
              {selectedVariant && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedVariant.size && (
                    <div className="bg-zinc-50 border border-zinc-100 p-3 lg:p-4 rounded-2xl">
                      <span className="text-[10px] lg:text-xs font-black text-zinc-400 uppercase tracking-widest block mb-1">
                        Size
                      </span>
                      <span className="text-lg lg:text-xl font-black text-zinc-900">
                        {selectedVariant.size}
                      </span>
                    </div>
                  )}
                  {selectedVariant.weight && (
                    <div className="bg-zinc-50 border border-zinc-100 p-3 lg:p-4 rounded-2xl">
                      <span className="text-[10px] lg:text-xs font-black text-zinc-400 uppercase tracking-widest block mb-1">
                        Body Weight
                      </span>
                      <span className="text-lg lg:text-xl font-black text-zinc-900">
                        {selectedVariant.weight}{" "}
                        <span className="text-sm font-bold text-zinc-500">
                          kg
                        </span>
                      </span>
                    </div>
                  )}
                  {selectedVariant.color && (
                    <div className="bg-zinc-50 border border-zinc-100 p-3 lg:p-4 rounded-2xl">
                      <span className="text-[10px] lg:text-xs font-black text-zinc-400 uppercase tracking-widest block mb-1">
                        Variant
                      </span>
                      <span className="text-lg lg:text-xl font-black text-zinc-900">
                        {selectedVariant.color}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <div className="mt-8 lg:mt-16">
          <div className="py-4 md:py-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <DescSection product={product} />
                <ProductCloseViewSection product={product} />
                <ProductVideoSection product={product} />
                <ProductFeature product={product} />
                <ReviewSection product={product} />
                <FaqSection
                  product={product}
                  questionColor="text-zinc-900"
                  faqs={product.faqs}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
