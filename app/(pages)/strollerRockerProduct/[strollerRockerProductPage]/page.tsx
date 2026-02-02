"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";
import type { Product, Variant } from "@/type/strollerRockerProductType";
import { ChevronRight, Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const StrollerProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [activeTab, setActiveTab] = useState("features");
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  useEffect(() => {
    const productSlug = params.strollerRockerProductPage;
    const foundProduct = strollerRockerProducts.find(
      (p) => p.slug === productSlug,
    );

    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.variants && foundProduct.variants.length > 0) {
        setSelectedVariant(foundProduct.variants[0]);
      }
    }
  }, [params.strollerRockerProductPage]);

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
            href="/clothing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            Back to Collection
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-4 lg:pt-16 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {isSmallerDevice ? (
          // {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="lg:hidden group flex items-center gap-2 bg-white text-zinc-500 hover:text-white hover:bg-foreground transition-colors mb-3 lg:mb-6 px-2 py-1 rounded-full font-bold text-sm lg:tracking-widest"
          >
            <div className="rounded-full transition-colors">
              <ArrowLeft size={16} />
            </div>
            Back
          </button>
        ) : (
          // {/* Breadcrumbs */}
          <nav className="hidden lg:flex items-center gap-2 text-sm text-zinc-700 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/clothing"
              className="hover:text-foreground transition-colors"
            >
              Strollers & Rockers
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        )}

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Top Section: Image and Basic info side-by-side on mobile */}
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-8 w-full lg:w-1/2">
            {/* Image Area */}
            <div className="w-1/2 lg:w-full">
              <motion.div
                layoutId={`product-image-${product.id}`}
                className="relative aspect-square bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100"
              >
                <Image
                  src={
                    selectedVariant?.image ||
                    product.image ||
                    "/placeholder.png"
                  }
                  alt={product.name}
                  fill
                  className="object-contain p-6 lg:p-16 transition-all duration-500"
                  priority
                />
              </motion.div>
            </div>

            {/* Basic Info (Category, Title, Rating) - Only visible on mobile here */}
            <div className="w-1/2 lg:hidden flex flex-col lg:justify-center">
              <div className="flex items-center gap-2 mb-2 text-[8px] font-bold uppercase whitespace-nowrap">
                <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-base font-black mb-2 leading-tight tracking-tight">
                {product.name}
              </h1>

              <p className="text-[10px] font-bold text-zinc-500 mb-3">
                {selectedVariant?.color}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-zinc-900 text-white px-2 py-1 rounded-lg text-[10px] font-bold">
                  <span>{product.rating || 4.8}</span>
                  <Star size={8} fill="white" />
                </div>
                <span className="text-zinc-500 text-[10px] font-medium">
                  {product.reviews || 42} Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Basic Info - Only visible on desktop here */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-3 mb-2 lg:mb-4 text-xs font-bold uppercase lg:tracking-wider whitespace-nowrap">
                  <span className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-xl md:text-3xl lg:text-4xl font-black mb-3 lg:mb-6 leading-tight tracking-tight">
                  {product.name} - {selectedVariant?.color}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1 bg-zinc-900 text-white px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg text-xs lg:text-sm font-bold">
                    <span>{product.rating || 4.8}</span>
                    <Star size={14} fill="white" />
                  </div>
                  <span className="text-zinc-500 text-xs lg:text-sm font-medium">
                    {product.reviews || 42} Reviews
                  </span>
                </div>
              </div>

              {!isSmallerDevice && (
                <hr className="text-zinc-500 h-px w-full my-4 lg:my-8" />
              )}

              {/* Specs Grid */}
              {selectedVariant &&
                (selectedVariant.weight || selectedVariant.width) && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {selectedVariant.weight && (
                      <div className="p-4 bg-zinc-50 rounded-xl">
                        <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider mb-1">
                          Weight
                        </p>
                        <p className="font-bold text-zinc-900">
                          {selectedVariant.weight}
                        </p>
                      </div>
                    )}
                    {selectedVariant.width && (
                      <div className="p-4 bg-zinc-50 rounded-xl">
                        <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider mb-1">
                          Dimensions
                        </p>
                        <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider mb-1">
                          (Width x Height x Depth)
                        </p>
                        <p className="font-bold text-zinc-900 text-[10px] lg:text-xs">
                          {selectedVariant.width} x {selectedVariant.height} x{" "}
                          {selectedVariant.depth}
                        </p>
                      </div>
                    )}
                  </div>
                )}

              {/* Variant Selection */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xs font-black text-zinc-900 uppercase tracking-[0.2em] mb-4">
                    {product.variants.some((v) => v.color) && "Select Variant"}
                  </h3>
                  <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`group relative px-4 py-2 rounded-xl border-2 transition-all duration-300 flex items-center gap-2 ${
                          selectedVariant?.id === v.id
                            ? "border-zinc-900 bg-zinc-900 text-white shadow-lg"
                            : "border-zinc-100 hover:border-zinc-300 text-zinc-600 bg-zinc-50"
                        }`}
                      >
                        {v.color && (
                          <img
                            src={v.image}
                            alt={`${product.name} - ${v.color}`}
                            className={`size-8 transition-all ${selectedVariant?.id === v.id ? "brightness-125" : ""}`}
                          />
                        )}
                        <span className="font-bold text-xs lg:text-sm leading-none">
                          {v.color || `Variant ${v.id}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description / Features Tab */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {selectedVariant?.features?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-zinc-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrollerProductDetailPage;
