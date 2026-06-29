"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { babyCareProducts } from "@/constants/babyCareProduct";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { colors } from "@/lib/tokens";
import { categoryService } from "@/services/categoryService";
import { productService } from "@/services/productService";

interface AdaptedProduct {
  id: string;
  name: string;
  slug: string;
  image: string;
  heroImage: string;
  category: string;
  isBestSeller?: boolean;
}

interface DynamicCategory {
  id: string;
  categoryName: string;
  slug: string;
}

const hexToRgba = (hex: string, alpha: number) => {
  const normalizedHex = hex.replace("#", "");
  const fullHex =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((char) => char + char)
          .join("")
      : normalizedHex;

  const r = Number.parseInt(fullHex.slice(0, 2), 16);
  const g = Number.parseInt(fullHex.slice(2, 4), 16);
  const b = Number.parseInt(fullHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const babyDetailPagePaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "premium-diapers-pants": {
    background: colors.baby.chip,
    foreground: colors.baby.accent,
  },
  "supreme-diapers": {
    background: "#dbeefe",
    foreground: "#2d6f9f",
  },
  "value-diapers-pants": {
    background: "#fff1bf",
    foreground: "#8b6b00",
  },
  "moisturising-tissue": {
    background: "#e8defd",
    foreground: "#6a4aa3",
  },
  "value-wet-wipes": {
    background: colors.baby.chip,
    foreground: colors.baby.accent,
  },
};

const clothingPaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "co-ord-sets": {
    background: "#ffe7dc",
    foreground: "#b8613f",
  },
  "hoodies-joggers": {
    background: "#e8f4dc",
    foreground: "#5f7d3e",
  },
  "polo-t-shirt": {
    background: "#dff2fb",
    foreground: "#2e7293",
  },
  "t-shirt-shorts": {
    background: "#f7ebff",
    foreground: "#7b52a7",
  },
};

const strollerPaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "zuvara-zinx-infant-to-toddler-baby-rocker": {
    background: "#e3efff",
    foreground: "#3b6b9d",
  },
  "zuvara-cheer-baby-stroller": {
    background: "#ecf3ef",
    foreground: "#4f6f63",
  },
};

const categoryIconMap: Record<string, string> = {
  "baby-products": "/icons/l.png",
  "clothing": "/icons/clothes.png",
  "strollers-rockers": "/icons/stroller.png",
};

const categoryRouteMap: Record<string, string> = {
  "baby-products": "babyCareProduct",
  "clothing": "babyCareProduct",
  "strollers-rockers": "babyCareProduct",
};

const ProductSkeleton = () => (
  <div className="w-[calc(50%_-_0.75rem)] sm:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_1.5rem)] max-w-sm flex flex-col gap-5 rounded-4xl animate-pulse">
    <div className="h-64 sm:h-72 lg:h-80 bg-zinc-100 rounded-[2rem] w-full" />
    <div className="flex justify-between items-center px-3 pb-2">
      <div className="h-5 bg-zinc-100 rounded w-2/3" />
      <div className="h-9 w-9 bg-zinc-100 rounded-full shrink-0" />
    </div>
  </div>
);

const TabsSkeleton = () => (
  <div className="category-tabs flex gap-3 overflow-x-auto py-4 whitespace-nowrap lg:justify-center animate-pulse">
    {[1, 2, 3].map((n) => (
      <div key={n} className="w-36 h-11 bg-zinc-100 rounded-full shrink-0" />
    ))}
  </div>
);

interface ProductProps {
  showBestSellersOnly?: boolean;
}

const Product = ({ showBestSellersOnly = false }: ProductProps) => {
  const [categories, setCategories] = useState<DynamicCategory[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [products, setProducts] = useState<AdaptedProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // After products load, if the URL hash targets this section, scroll to it.
  useEffect(() => {
    if (loading) return;
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#products") return;

    const id = window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(id);
  }, [loading]);

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        setLoading(true);

        // Fetch categories and products from backend
        const [catData, prodData] = await Promise.all([
          categoryService.getCategories(),
          productService.getProducts(),
        ]);

        if (!active) return;

        // Filter categories under "baby-care" portal
        const babyCareCats = catData.category
          .filter((c) => c.portal?.slug === "baby-care")
          .sort((a, b) => a.sortOrder - b.sortOrder);

        if (babyCareCats.length > 0) {
          setCategories(babyCareCats.map(c => ({
            id: c.id,
            categoryName: c.categoryName,
            slug: c.slug,
          })));
          setActiveTab(babyCareCats[0].slug);
        } else {
          useStaticFallback();
          return;
        }

        if (prodData && prodData.length > 0) {
          const adapted = prodData.map((p) => ({
            id: p.id,
            name: p.productName,
            slug: p.slug,
            image: p.coverImage,
            heroImage: p.coverImage,
            category: p.category?.slug || "",
            isBestSeller: p.isBestSeller || false,
          }));
          setProducts(adapted);
        } else {
          useStaticFallback();
        }
      } catch (err) {
        console.error("Failed to load dynamic data, falling back to static constants:", err);
        if (!active) return;
        useStaticFallback();
      } finally {
        if (active) setLoading(false);
      }
    }

    function useStaticFallback() {
      const fallbackCats = [
        { id: "baby-products", categoryName: "Baby Products", slug: "baby-products" },
        { id: "clothing", categoryName: "Clothing", slug: "clothing" },
        { id: "strollers-rockers", categoryName: "Strollers & Rockers", slug: "strollers-rockers" },
      ];
      setCategories(fallbackCats);
      setActiveTab("baby-products");

      const staticBaby = babyCareProducts.map((p) => ({
        id: String(p.id),
        name: p.name,
        slug: p.slug,
        image: p.variants?.[0]?.image || p.image || p.heroImage || "/images/placeholder.png",
        heroImage: p.heroImage || p.image || "/images/placeholder.png",
        category: "baby-products",
      }));

      const staticClothing = clothingProducts.map((p) => ({
        id: String(p.id),
        name: p.name,
        slug: p.slug,
        image: p.image || "/images/placeholder.png",
        heroImage: p.image || "/images/placeholder.png",
        category: "clothing",
      }));

      const staticStroller = strollerRockerProducts.map((p) => ({
        id: String(p.id),
        name: p.name,
        slug: p.slug,
        image: p.image || "/images/placeholder.png",
        heroImage: p.image || "/images/placeholder.png",
        category: "strollers-rockers",
      }));

      setProducts([...staticBaby, ...staticClothing, ...staticStroller]);
    }

    loadData();

    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = showBestSellersOnly
    ? products.filter((p) => p.isBestSeller)
    : products.filter((p) => p.category === activeTab);
  const featuredProducts = filteredProducts.slice(0, 8);
  const shouldShowViewMore = filteredProducts.length > featuredProducts.length;

  const collectionHref = `/${categoryRouteMap[activeTab] || "babyCareProduct"}`;
  const productBottomWave = assetWithFill(wave4Svg, "#BFDDCA");

  const getCardImage = (product: AdaptedProduct) => {
    if (activeTab !== "baby-products") {
      return product.image || "/images/placeholder.png";
    }

    if (product.slug === "moisturising-tissue") {
      return "/PRODUCTS/Baby/tissue/product.png";
    }

    if (product.slug === "value-wet-wipes") {
      return "/PRODUCTS/Baby/wet-wipes/product.png";
    }

    return product.image || product.heroImage || "/images/placeholder.png";
  };

  const getCardTheme = (product: AdaptedProduct) => {
    if (activeTab === "clothing") {
      const palette = clothingPaletteBySlug[product.slug] ?? {
        background: "#edf5f1",
        foreground: colors.baby.accent,
      };

      return {
        background: hexToRgba(palette.background, 0.72),
        foreground: palette.foreground,
        border: hexToRgba(palette.foreground, 0.16),
        chip: hexToRgba(palette.background, 0.88),
      };
    }

    if (activeTab === "strollers-rockers") {
      const palette = strollerPaletteBySlug[product.slug] ?? {
        background: "#edf5f1",
        foreground: colors.baby.accent,
      };

      return {
        background: hexToRgba(palette.background, 0.72),
        foreground: palette.foreground,
        border: hexToRgba(palette.foreground, 0.16),
        chip: hexToRgba(palette.background, 0.88),
      };
    }

    if (activeTab !== "baby-products") {
      return {
        background: "#ffffff",
        foreground: "#111827",
        border: "#e4e4e7",
        chip: "rgba(255,255,255,0.7)",
      };
    }

    const detailPalette = babyDetailPagePaletteBySlug[product.slug] ?? null;
    const background = detailPalette?.background || colors.baby.chip;
    const foreground = detailPalette?.foreground || "#111827";

    return {
      background: hexToRgba(background, 0.28),
      foreground,
      border: hexToRgba(foreground, 0.16),
      chip: hexToRgba(background, 0.46),
    };
  };

  const renderProductCard = (product: AdaptedProduct, index: number, inCarousel = false) => {
    const cardTheme = getCardTheme(product);

    return (
      <Link
        key={product.id}
        href={`/${categoryRouteMap[activeTab] || "babyCareProduct"}/${product.slug}`}
        className={`group block ${inCarousel ? "w-full" : "w-[calc(50%_-_0.75rem)] sm:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_1.5rem)] max-w-sm"}`}
      >
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
          viewport={{ once: true }}
          className="flex h-full flex-col gap-5 rounded-4xl  transition-transform duration-300 group-hover:-translate-y-1"
        >
          <div
            className="relative flex gap-4 h-64 items-center justify-center overflow-hidden rounded-[2rem] py-4 sm:h-72 lg:h-80"
            style={{ backgroundColor: cardTheme.background }}
          >
            <div
              className="pointer-events-none absolute inset-x-6 bottom-4 h-12 rounded-full blur-2xl"
              style={{ backgroundColor: hexToRgba(cardTheme.foreground, 0.18) }}
            />
            <Image
              src={getCardImage(product)}
              alt={product.name}
              fill
              className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
            />
          </div>

          <div className="flex flex-1 items-center justify-between px-3 pb-2">
            <h3
              className="text-base font-semibold leading-snug sm:text-lg"
              style={{ color: cardTheme.foreground }}
            >
              {product.name}
            </h3>

            <span
              className="shrink-0 rounded-full p-2.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-1"
              style={{
                backgroundColor: cardTheme.chip,
                color: cardTheme.foreground,
              }}
            >
              <ArrowRight size={18} />
            </span>
          </div>
        </motion.article>
      </Link>
    );
  };

  return (
    <>
      <style>{`
        .category-tabs {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .category-tabs::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* ================= PRODUCT SECTION ================= */}
      <section ref={sectionRef} id="products" className="relative py-8 pb-12 lg:pb-40 scroll-mt-24">
        <div
          className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
        />
        <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
          {/* Title - centered */}
          <div className="mb-2 flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.4rem)] font-semibold tracking-tight text-baby-accent">
              {showBestSellersOnly ? (
                <>
                  Best selling
                  <span className="ml-2 font-light italic text-baby-accent-soft">
                    baby essentials
                  </span>
                </>
              ) : (
                <>
                  Explore our
                  <span className="ml-2 font-light italic text-baby-accent-soft">
                    baby essentials
                  </span>
                </>
              )}
            </h2>
            <p className="hero-copy mt-2 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              {showBestSellersOnly
                ? "Discover our most loved products, trusted by parents for comfort, quality, and everyday care."
                : "Browse our full range of baby essentials, crafted for comfort, quality, and everyday care."}
            </p>
          </div>

          {/* Category Tabs - Only show if not in best-sellers-only mode */}
          {!showBestSellersOnly && (
            <>
              {loading ? (
                <TabsSkeleton />
              ) : (
                <div className="category-tabs flex gap-3 overflow-x-auto py-4 whitespace-nowrap lg:justify-center">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.slug)}
                  className={`px-4 lg:px-5 py-2.5 rounded-full  text-sm  font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 border! ${
                    activeTab === tab.slug
                      ? "bg-babyCare text-foreground border-none border-baby-accent-soft shadow-md"
                      : "bg-white text-foreground  border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <div className="relative w-6 h-6 shrink-0">
                    <Image
                      src={categoryIconMap[tab.slug] || "/icons/l.png"}
                      alt={tab.categoryName}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        activeTab === tab.slug ? "text-foreground" : ""
                      }`}
                    />
                  </div>

                  <motion.span
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {tab.categoryName}
                  </motion.span>
                </button>
              ))}
            </div>
              )}
            </>
          )}

          {loading ? (
            <div className="mt-4 mx-auto max-w-7xl flex flex-wrap justify-center gap-6 pb-10 lg:gap-8">
              {[1, 2, 3, 4].map((n) => (
                <ProductSkeleton key={n} />
              ))}
            </div>
          ) : showBestSellersOnly ? (
            // Carousel for best-sellers
            <div className="mt-6 pb-10">
              <div className="mx-auto max-w-7xl">
                {/* Navigation buttons - top right above carousel */}
                {!loading && featuredProducts.length > 0 && (
                  <div className="mb-4 flex items-center justify-end gap-2">
                    <button
                      onClick={() => scrollCarousel("left")}
                      className="rounded-full p-3 transition-all duration-300 hover:scale-110 border border-baby-accent/20 hover:border-baby-accent/40"
                      style={{ backgroundColor: hexToRgba(colors.baby.chip, 0.5) }}
                      aria-label="Previous products"
                    >
                      <ChevronLeft size={20} className="text-baby-accent" />
                    </button>
                    <button
                      onClick={() => scrollCarousel("right")}
                      className="rounded-full p-3 transition-all duration-300 hover:scale-110 border border-baby-accent/20 hover:border-baby-accent/40"
                      style={{ backgroundColor: hexToRgba(colors.baby.chip, 0.5) }}
                      aria-label="Next products"
                    >
                      <ChevronRight size={20} className="text-baby-accent" />
                    </button>
                  </div>
                )}
                <div className="relative">
                  <motion.div
                    ref={carouselRef}
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory py-2"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    {featuredProducts.map((product, index) => (
                      <div 
                        key={product.id} 
                        className="flex-none w-[80%] min-w-[280px] max-w-[24rem] sm:w-[calc(50%_-_1rem)] sm:min-w-[300px] lg:w-[calc(25%_-_1.125rem)] snap-start"
                      >
                        {renderProductCard(product, index, true)}
                      </div>
                    ))}
                    {!loading && featuredProducts.length === 0 && (
                      <div className="w-full py-12 text-center text-zinc-500 text-sm">
                        No best-seller products found.
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            // Grid for category tabs view
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 mx-auto max-w-7xl flex flex-wrap justify-center gap-6 pb-10 lg:gap-8"
            >
              {featuredProducts.map((product, index) =>
                renderProductCard(product, index),
              )}
              {!loading && featuredProducts.length === 0 && (
                <div className="w-full py-12 text-center text-zinc-500 text-sm">
                  No products found in this category.
                </div>
              )}
            </motion.div>
          )}

          {!loading && shouldShowViewMore && !showBestSellersOnly ? (
            <div className="flex justify-center">
              <Link
                href={collectionHref}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white! transition-transform duration-300 hover:-translate-y-0.5"
              >
                View more
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Product;
