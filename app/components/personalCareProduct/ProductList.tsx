"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionIntro, {
  sectionContentSpacing,
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";
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

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const [catData, prodData] = await Promise.all([
          categoryService.getCategories(),
          productService.getProducts(),
        ]);

        if (!active) return;

        // Categories under "personal-care" portal
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

        // Products under "personal-care" portal
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
      background: detailPalette.background,
      foreground: detailPalette.foreground,
      border: `${detailPalette.foreground}22`,
      chip: "rgba(255,255,255,0.72)",
    };
  };

  const filteredProducts = products.filter((p) => p.category === activeTab);

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
      <section className="container lg:min-h-screen mx-auto py-8 lg:py-20 px-4 sm:px-6 lg:px-6 max-w-7xl">
        <SectionIntro
          align="center"
          className={`${sectionIntroSpacing} max-w-4xl mx-auto`}
          eyebrow={
            <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
              Shop the range
            </span>
          }
          title={
            <>
              Explore our
              <span className="ml-3 font-light italic text-personalCare/70">
                personal essentials
              </span>
            </>
          }
          description="Browse our full range of personal care products, chosen for soft comfort, dependable protection, and a lighter everyday feel."
          titleClassName="text-5xl font-semibold leading-[0.95] tracking-tight text-personalCare"
          descriptionClassName="text-sm font-medium leading-relaxed text-zinc-600 md:text-base"
        />

        {/* Category Tabs */}
        {loading ? (
          <TabsSkeleton />
        ) : !error ? (
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
        ) : null}

        {/* Product Grid */}
        {loading ? (
          <div
            className={`${sectionContentSpacing} flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto`}
          >
            {[1, 2, 3].map((n) => (
              <ProductSkeleton key={n} />
            ))}
          </div>
        ) : error ? (
          <div className="mt-12 text-center">
            <p className="text-zinc-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-personalCare px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Retry
            </button>
          </div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`${sectionContentSpacing} flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                const cardTheme = getCardTheme(product);

                return (
                  <Link
                    key={product.id}
                    href={`/personalCareProduct/${product.slug}`}
                    className="group block w-[calc(50%_-_0.75rem)] sm:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_1.5rem)] max-w-sm"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.45 }}
                      viewport={{ once: true }}
                      className="flex h-full flex-col gap-5 rounded-4xl transition-transform duration-300 group-hover:-translate-y-1"
                    >
                      <div
                        className="relative flex h-64 sm:h-72 lg:h-80 items-center justify-center overflow-hidden rounded-[2rem] py-4"
                        style={{ backgroundColor: cardTheme.background }}
                      >
                        <div
                          className="pointer-events-none absolute inset-x-6 bottom-4 h-12 rounded-full blur-2xl"
                          style={{ backgroundColor: `${cardTheme.foreground}2e` }}
                        />
                        <Image
                          src={product.image}
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
              })
            ) : (
              <div className="w-full py-12 text-center text-zinc-500 text-sm">
                No products found in this category.
              </div>
            )}
          </motion.div>
        )}
      </section>
    </>
  );
};

export default ProductList;
