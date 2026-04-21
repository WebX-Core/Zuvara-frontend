"use client";

import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
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

const featuredProductLists = [
  {
    id: 1,
    name: "Diaper Pants",
    desc: "Ultra-Comfortable, Pant Style",
    image: "/images/baby/baby-with-product.webp",
  },
  {
    id: 2,
    name: "Baby Wipes",
    desc: "Gentle & Pure, Alcohol Free",
    image: "/images/baby/baby-with-product.webp",
  },
  {
    id: 3,
    name: "Baby Lotion",
    desc: "Nourishing Protection for Skin",
    image: "/images/baby/baby-with-product.webp",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<SearchItem[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProductLists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Combine and search products
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const allProducts = [
        ...babyCareProducts.map((p) => ({
          ...p,
          type: "baby-care" as const,
          href: `/babyCareProduct/${p.slug}`,
        })),
        ...clothingProducts.map((p) => ({
          ...p,
          type: "clothing" as const,
          href: `/clothing/${p.slug}`,
        })),
        ...strollerRockerProducts.map((p) => ({
          ...p,
          type: "stroller" as const,
          href: `/strollerRockerProduct/${p.slug}`,
        })),
      ];

      const filtered = allProducts
        .filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 5); // Limit to top 5 results for mobile performance

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
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
    <section className="relative z-60 w-screen px-4 pt-4 flex flex-col  gap-4">
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
                {filteredProducts.map((product, idx) => (
                  <Link
                    key={`${product.type}-${product.id}`}
                    href={product.href}
                    onClick={() => setIsSearchFocused(false)}
                    className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-xl transition-colors group"
                  >
                    <div className="size-12 bg-zinc-100 rounded-lg shrink-0 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="size-full object-contain p-1 group-hover:scale-110 transition-transform"
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
              className="absolute inset-0 w-full flex rounded-2xl p-4 bg-babyCare/70"
            >
              <div className="w-2/3 flex flex-col justify-center">
                <p className="text-xl font-bold text-zinc-900 leading-tight">
                  {currentProduct.name}
                </p>
                <p className="text-sm text-zinc-600 font-medium mt-1">
                  {currentProduct.desc}
                </p>
                <button className="mt-4 text-xs font-bold uppercase tracking-wider text-foreground w-fit border-b-2 border-foreground pb-0.5">
                  View Now
                </button>
              </div>
              <div className="w-1/3 relative flex items-center justify-center">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="max-h-full object-contain drop-shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-1.5">
          {featuredProductLists.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-6 bg-foreground" : "w-1.5 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
