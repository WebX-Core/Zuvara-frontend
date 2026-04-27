"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import { colors } from "@/lib/tokens";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { babyCareProducts } from "@/constants/babyCareProduct";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";

type SearchItemType = "baby-care" | "clothing" | "stroller";

type SearchItem = {
  id: string | number;
  name: string;
  category: string;
  image: string;
  type: SearchItemType;
  href: string;
};

const searchableProducts = [
  ...babyCareProducts.map((product) => ({
    ...product,
    type: "baby-care" as const,
    href: `/babyCareProduct/${product.slug}`,
  })),
  ...clothingProducts.map((product) => ({
    ...product,
    type: "clothing" as const,
    href: `/clothing/${product.slug}`,
  })),
  ...strollerRockerProducts.map((product) => ({
    ...product,
    type: "stroller" as const,
    href: `/strollerRockerProduct/${product.slug}`,
  })),
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const featuredProductLists = useMemo(
    () =>
      babyCareProducts.map((product) => ({
        id: product.id,
        name: product.name,
        desc: product.category || product.description,
        image: product.heroImage || product.image,
        background: product.background || colors.baby.chip,
        foreground: product.foreground || "#111827",
        href: `/babyCareProduct/${product.slug}`,
      })),
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProductLists.length);
    }, 5000);
    return () => clearInterval(timer);
  });

  const filteredProducts = useMemo<SearchItem[]>(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return searchableProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.category.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, 5);
  }, [searchQuery]);

  // Handle outside click to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentProduct = featuredProductLists[currentIndex];

  return (
    <section className="relative z-60 w-full px-4 pt-4 flex flex-col gap-4">
      <div className="relative z-50" ref={searchRef}>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            className="w-full pl-10 pr-4 py-3 border-2 border-zinc-100 text-base focus:outline-none focus:border-babyCare/50 rounded-2xl bg-zinc-50/50 backdrop-blur-sm transition-all"
          />
          <Icon
            icon="mingcute:search-line"
            className="absolute top-1/2 -translate-y-1/2 left-3.5 size-5 text-zinc-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 -translate-y-1/2 right-3.5 text-zinc-400 hover:text-zinc-600"
              aria-label="Clear search"
            >
              <Icon icon="material-symbols:close-rounded" className="size-6" />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        <AnimatePresence>
          {isSearchFocused && filteredProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden z-50"
            >
              <div className="p-2 space-y-1">
                {filteredProducts.map((product) => (
                  <Link
                    key={`${product.type}-${product.id}`}
                    href={product.href}
                    onClick={() => setIsSearchFocused(false)}
                    className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-xl transition-colors group"
                  >
                    <div className="size-12 bg-zinc-100 rounded-lg shrink-0 relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="48px"
                        className="object-contain p-1 transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-zinc-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-zinc-500 font-medium truncate">
                        {product.category}
                      </p>
                    </div>
                    <Icon
                      icon="material-symbols:chevron-right-rounded"
                      className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          {/* <h2 className="text-2xl font-semibold">Featured Products</h2> */}
        </div>

        <div className="relative h-40 overflow-hidden  rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex w-full rounded-2xl p-4"
              style={{ backgroundColor: currentProduct.background }}
            >
              <div className="w-2/3 flex flex-col justify-center">
                <p
                  className="text-xl font-bold leading-tight"
                  style={{ color: currentProduct.foreground }}
                >
                  {currentProduct.name}
                </p>
                <p
                  className="mt-1 text-sm font-medium"
                  style={{ color: `${currentProduct.foreground}cc` }}
                >
                  {currentProduct.desc}
                </p>
                <Link
                  href={currentProduct.href}
                  className="mt-4 w-fit border-b-2 pb-0.5 text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: currentProduct.foreground,
                    borderColor: currentProduct.foreground,
                  }}
                >
                  View Now
                </Link>
              </div>
              <div className="w-1/3 relative flex items-center justify-center">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  sizes="33vw"
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-1.5">
          {featuredProductLists.map((product, idx) => (
            <div
              key={product.id}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: currentIndex === idx ? "1.5rem" : "0.375rem",
                backgroundColor:
                  currentIndex === idx ? product.background : "#e4e4e7",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
