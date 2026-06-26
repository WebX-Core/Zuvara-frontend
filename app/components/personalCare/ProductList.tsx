"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { categoryService } from "@/services/categoryService";
import { productService } from "@/services/productService";

interface AdaptedProduct {
  id: string;
  name: string;
  slug: string;
  image: string;
  category: string;
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
      ? normalizedHex.split("").map((char) => char + char).join("")
      : normalizedHex;

  const r = Number.parseInt(fullHex.slice(0, 2), 16);
  const g = Number.parseInt(fullHex.slice(2, 4), 16);
  const b = Number.parseInt(fullHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const personalDetailPagePaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "period-panties": {
    background: "#f0e2fb",
    foreground: "#7b2cbf",
  },
  "sanitary-pads": {
    background: "#f7e8ff",
    foreground: "#9d4edd",
  },
};

const categoryIconMap: Record<string, string> = {
  "period-panties": "/icons/period.png",
  "sanitary-pads": "/icons/pad.png",
};

const ProductSkeleton = () => (
  <div className="w-full lg:w-[calc(25%-0.9375rem)] flex flex-col gap-4 rounded-4xl animate-pulse">
    <div className="h-40 sm:h-56 bg-zinc-100 rounded-[1.75rem] w-full" />
    <div className="flex justify-between items-center px-2 pb-4">
      <div className="h-5 bg-zinc-100 rounded w-2/3" />
      <div className="h-8 w-8 bg-zinc-100 rounded-full shrink-0" />
    </div>
  </div>
);

const TabsSkeleton = () => (
  <div className="category-tabs flex gap-3 overflow-x-auto py-4 whitespace-nowrap lg:justify-center animate-pulse">
    {[1, 2].map((n) => (
      <div key={n} className="w-36 h-11 bg-zinc-100 rounded-full shrink-0" />
    ))}
  </div>
);

const ProductList = () => {
  const [categories, setCategories] = useState<DynamicCategory[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [products, setProducts] = useState<AdaptedProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const productBottomWave = assetWithFill(wave4Svg, "#f4e8fc");

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch categories and products from backend
        const [catData, prodData] = await Promise.all([
          categoryService.getCategories(),
          productService.getProducts(),
        ]);

        if (!active) return;

        // Filter categories under "personal-care" portal
        const personalCareCats = catData.category
          .filter((c) => c.portal?.slug === "personal-care")
          .sort((a, b) => a.sortOrder - b.sortOrder);

        if (personalCareCats.length === 0) {
          setError("No categories found.");
          setLoading(false);
          return;
        }

        setCategories(
          personalCareCats.map((c) => ({
            id: c.id,
            categoryName: c.categoryName,
            slug: c.slug,
          }))
        );
        setActiveTab(personalCareCats[0].slug);

        // Filter personal care products
        const personalProducts = prodData.filter(
          (p) => p.portal?.slug === "personal-care"
        );

        if (personalProducts.length === 0) {
          setError("No products found.");
          setLoading(false);
          return;
        }

        const adapted = personalProducts.map((p) => ({
          id: p.id,
          name: p.productName,
          slug: p.slug,
          image: p.coverImage,
          category: p.category?.slug || "",
        }));
        setProducts(adapted);
      } catch (err) {
        console.error("Failed to load personal care data:", err);
        if (!active) return;
        setError("Failed to load products. Please try again later.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadData();

    return () => {
      active = false;
    };
  }, []);

  const getCardTheme = (product: AdaptedProduct) => {
    const detailPalette = personalDetailPagePaletteBySlug[product.slug] ?? {
      background: "#f0e2fb",
      foreground: "#7b2cbf",
    };

    return {
      background: hexToRgba(detailPalette.background, 0.28),
      foreground: detailPalette.foreground,
      border: hexToRgba(detailPalette.foreground, 0.16),
      chip: hexToRgba(detailPalette.background, 0.46),
    };
  };

  const filteredProducts = products.filter((p) => p.category === activeTab);
  const featuredProducts = filteredProducts.slice(0, 8);

  if (error && !loading) {
    return (
      <section className="relative py-8 pb-12 lg:pb-40">
        <div
          className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
        />
        <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
          <div className="mb-2 flex flex-col items-center justify-center leading-8 gap-2 text-center">
            <h2 className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.4rem)] font-semibold tracking-tight text-personalCare">
              Best selling
              <span className="ml-2 font-light italic text-personalCare/70">
                personal essentials
              </span>
            </h2>
            <p className="hero-copy mt-2 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              Discover our most loved personal care products, chosen for soft
              comfort, dependable protection, and a lighter everyday feel.
            </p>
          </div>
          <div className="mt-12 text-center">
            <p className="text-zinc-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-personalCare px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

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
      `}</style>
      <section className="relative py-8 pb-12 lg:pb-40">
        <div
          className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
        />
        <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
          {/* Title Section */}
          <div className="mb-2 flex flex-col items-center justify-center leading-8 gap-2 text-center">
            <h2 className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.4rem)] font-semibold tracking-tight text-personalCare">
              Best selling
              <span className="ml-2 font-light italic text-personalCare/70">
                personal essentials
              </span>
            </h2>
            <p className="hero-copy mt-2 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              Discover our most loved personal care products, chosen for soft
              comfort, dependable protection, and a lighter everyday feel.
            </p>
          </div>

          {/* Category Tabs */}
          {loading ? (
            <TabsSkeleton />
          ) : (
            <div className="category-tabs flex gap-3 overflow-x-auto py-4 whitespace-nowrap lg:justify-center">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.slug)}
                  className={`px-4 lg:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                    activeTab === tab.slug
                      ? "bg-personalCare/10 text-personalCare border-personalCare/30 shadow-md"
                      : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {categoryIconMap[tab.slug] && (
                    <div className="relative w-6 h-6 shrink-0">
                      <Image
                        src={categoryIconMap[tab.slug]}
                        alt={tab.categoryName}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
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

          {/* Product Grid */}
          {loading ? (
            <div className="mt-4 mx-auto max-w-7xl grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 pb-10 lg:gap-4">
              {[1, 2, 3, 4].map((n) => (
                <ProductSkeleton key={n} />
              ))}
            </div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 mx-auto max-w-7xl grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 pb-10 lg:gap-4"
            >
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product, index) => {
                  const cardTheme = getCardTheme(product);

                  return (
                    <Link
                      key={product.id}
                      href={`/personalCareProduct/${product.slug}`}
                      className="group block w-full lg:w-[calc(25%-0.9375rem)]"
                    >
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.45 }}
                        viewport={{ once: true }}
                        className="flex h-full flex-col gap-4 rounded-4xl transition-transform duration-300 group-hover:-translate-y-1"
                      >
                        {/* Card Image Container */}
                        <div
                          className="relative flex h-40 items-center justify-center overflow-hidden rounded-[1.75rem] py-2 sm:h-56"
                          style={{ backgroundColor: cardTheme.background }}
                        >
                          <div
                            className="pointer-events-none absolute inset-x-6 bottom-4 h-9 rounded-full blur-2xl"
                            style={{
                              backgroundColor: hexToRgba(
                                cardTheme.foreground,
                                0.18
                              ),
                            }}
                          />
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                          />
                        </div>

                        {/* Card Footer */}
                        <div className="flex flex-1 items-center justify-between px-2 pb-4">
                          <h3
                            className="max-w-40 text-sm font-semibold leading-snug sm:max-w-52 sm:text-base"
                            style={{ color: cardTheme.foreground }}
                          >
                            {product.name}
                          </h3>
                          <span
                            className="shrink-0 rounded-full p-2 -rotate-45 transition-transform duration-300 group-hover:translate-x-1"
                            style={{
                              backgroundColor: cardTheme.chip,
                              color: cardTheme.foreground,
                            }}
                          >
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </motion.article>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full w-full py-12 text-center text-zinc-500 text-sm">
                  No products found in this category.
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductList;
