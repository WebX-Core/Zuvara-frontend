"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";

import type { Product } from "@/type/babyCareProductType";
import { babyCareProducts } from "@/constants/babyCareProduct";

import DescSection from "@/app/components/babyCareProductPage/DescSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import FaqSection from "@/app/components/common-ui/FaqSection";

/* ───────────────────────── Theme ───────────────────────── */
//
type Theme = {
  bg: string;
  headingColor: string;
  subtleText: string;
  cardBg: string;
  cardBorder: string;
  pageText: string;
  starColor: string;
  productGlow: string;
};

function themeFromProduct(p: Product): Theme {
  const bg = p.background || "#456a5c";
  const fg = (p as any).foreground || "#ffffff";

  const darkText = fg === "#000000";

  return {
    bg,
    headingColor: darkText ? "#0f172a" : fg,
    pageText: darkText ? "#0f172a" : fg,
    subtleText: darkText ? "rgba(15,23,42,0.62)" : "rgba(255,255,255,0.78)",
    cardBg: darkText ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.10)",
    cardBorder: darkText ? "rgba(15,23,42,0.10)" : "rgba(255,255,255,0.18)",
    starColor: "#f59e0b",
    productGlow: darkText ? "#111827" : "#ffffff",
  };
}

/* ───────────────────────── Helpers ───────────────────────── */

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function pickHeroBaby(p: Product) {
  return (p as any).heroImage2 || p.heroImage || p.image;
}

function pickHeroPack(p: Product) {
  return p.heroImage || p.image || pickHeroBaby(p);
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "").trim();
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function tintBg(hex: string, alpha = 0.09) {
  try {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch {
    return "rgba(0,0,0,0.04)";
  }
}

/* ───────────────────────── UI: Section Shell ───────────────────────── */

function SectionShell(props: {
  theme: Theme;
  index: number;
  children: React.ReactNode;
  title?: string;
  eyebrow?: string;
  className?: string;
}) {
  const { theme, index, children, title, eyebrow, className } = props;

  const isTint = index % 2 === 1;
  const surfaceBg = isTint ? tintBg(theme.bg, 0.11) : "rgba(255,255,255,0.96)";

  return (
    <section className={className}>
      <div
        className="rounded-3xl ring-1 shadow-sm"
        style={{ background: surfaceBg, borderColor: "rgba(0,0,0,0.06)" }}
      >
        <div className="p-5 md:p-8">
          {(eyebrow || title) ? (
            <div className="mb-6 text-center md:text-left">
              {eyebrow ? (
                <p
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: theme.subtleText }}
                >
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2
                  className="mt-2 text-xl md:text-3xl font-extrabold tracking-tight"
                  style={{ color: theme.headingColor }}
                >
                  {title}
                </h2>
              ) : null}
            </div>
          ) : null}

          {children}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Buttons ───────────────────────── */

const btnBase =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

const btnSoft =
  btnBase +
  " bg-white/14 text-white ring-1 ring-white/20 hover:bg-white/18 backdrop-blur";

const btnPrimary =
  btnBase + " bg-white text-black hover:bg-white/90 ring-1 ring-black/10";

/* ───────────────────────── Page ───────────────────────── */

export default function ProductHeroFullPageAlternating() {
  const products = babyCareProducts as Product[];
  const [activeIdx, setActiveIdx] = useState(0);

  const product = useMemo(
    () => products[clampIndex(activeIdx, products.length)],
    [activeIdx, products]
  );

  const theme = useMemo(() => themeFromProduct(product), [product]);

  // Merge theme into product so children using product.background/foreground stay aligned
  const themedProduct = useMemo<Product>(() => {
    return {
      ...product,
      background: product.background || theme.bg,
      foreground: (product as any).foreground || theme.pageText,
    };
  }, [product, theme]);

  const heroBabySrc = pickHeroBaby(themedProduct);
  const heroPackSrc = pickHeroPack(themedProduct);

  const rating = (themedProduct as any).rating;
  const reviews = (themedProduct as any).reviews;

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.bg,
        // Shared vars used by ProductFeature + your updated sections
        ["--subtle-text" as any]: theme.subtleText,
        ["--page-text" as any]: theme.pageText,
        ["--product-glow" as any]: theme.productGlow,
      }}
    >
      {/* ================= HERO ================= */}
      <motion.section
        className="relative overflow-hidden"
        animate={{ backgroundColor: theme.bg }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* soft blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-140px] left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 backdrop-blur"
                style={{
                  color: theme.pageText,
                  borderColor: theme.cardBorder,
                  background: theme.cardBg,
                }}
              >
                <span className="opacity-90">
                  {themedProduct.category || "Baby Care"}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={themedProduct.id + "-name"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl"
                  style={{ color: theme.pageText }}
                >
                  {themedProduct.name}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={themedProduct.id + "-desc"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, delay: 0.03 }}
                  className="mt-4 max-w-xl text-base md:text-lg"
                  style={{ color: theme.pageText }}
                >
                  {themedProduct.description}
                </motion.p>
              </AnimatePresence>

              {/* rating + price */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {typeof rating === "number" ? (
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ring-1 backdrop-blur"
                    style={{
                      background: theme.cardBg,
                      borderColor: theme.cardBorder,
                    }}
                  >
                    <Star size={16} color={theme.pageText} />
                    <span style={{ color: theme.pageText }}>
                      {rating.toFixed(1)}
                      {typeof reviews === "number" ? (
                        <span className="opacity-80"> • {reviews} reviews</span>
                      ) : null}
                    </span>
                  </div>
                ) : null}

                {themedProduct.price?.amount ? (
                  <div
                    className="inline-flex items-baseline gap-2 rounded-full px-4 py-2 ring-1 backdrop-blur"
                    style={{
                      background: "rgba(0,0,0,0.10)",
                      borderColor: theme.cardBorder,
                      color: theme.pageText,
                    }}
                  >
                    <span className="text-sm opacity-80">From</span>
                    <span className="text-xl font-extrabold">
                      {themedProduct.price.currency} {themedProduct.price.amount}
                    </span>
                  </div>
                ) : null}
              </div>

              {/* selector */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveIdx((v) => v - 1)}
                  className={btnSoft}
                  aria-label="Previous product"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex flex-wrap gap-2">
                  {products.map((p, i) => {
                    const isActive = p.id === themedProduct.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActiveIdx(i)}
                        className={
                          "rounded-full px-4 py-2 text-sm ring-1 transition backdrop-blur " +
                          (isActive
                            ? "bg-white text-black ring-white/40"
                            : "bg-white/12 text-white ring-white/20 hover:bg-white/16")
                        }
                        style={!isActive ? { color: theme.pageText } : undefined}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIdx((v) => v + 1)}
                  className={btnSoft}
                  aria-label="Next product"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className={btnPrimary}>
                  <ShoppingCart size={18} className="mr-2" />
                  Buy now
                </button>

                <button type="button" className={btnSoft}>
                  View details <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Right visuals */}
            <div className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[620px]">
                <div
                  className="absolute inset-0 rounded-[32px] ring-1 backdrop-blur"
                  style={{
                    background: theme.cardBg,
                    borderColor: theme.cardBorder,
                  }}
                />

                {/* baby */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={themedProduct.id + "-baby"}
                    initial={{ opacity: 0, x: 24, scale: 0.98, rotate: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, x: -18, scale: 0.985, rotate: -0.4 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="absolute inset-0 p-6 md:p-8"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={heroBabySrc}
                        alt={`${themedProduct.name} baby`}
                        fill
                        priority
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1024px) 92vw, 48vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* pack */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={themedProduct.id + "-pack"}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.99 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute -bottom-6 right-4 h-[48%] w-[48%] md:right-6 md:h-[52%] md:w-[52%]"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={heroPackSrc}
                        alt={`${themedProduct.name} pack`}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1024px) 52vw, 28vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* chips */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {(themedProduct.variants || []).slice(0, 8).map((v) => (
                  <div
                    key={v.id}
                    className="flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 backdrop-blur"
                    style={{
                      background: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.pageText,
                    }}
                  >
                    {v.icon ? (
                      <Image
                        src={v.icon}
                        alt={v.size}
                        width={18}
                        height={18}
                        className="opacity-95"
                      />
                    ) : null}
                    <span className="font-semibold">{v.size}</span>
                    {"weight" in v && (v as any).weight ? (
                      <span className="opacity-80">
                        ({(v as any).weight}kg)
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= BODY (alternating surfaces) ================= */}
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-10">
        <SectionShell theme={theme} index={0}>
          <DescSection product={themedProduct} />
        </SectionShell>

        <SectionShell theme={theme} index={1} eyebrow="Details" title="Closer look">
          <ProductCloseViewSection product={themedProduct} />
        </SectionShell>

        <SectionShell theme={theme} index={2} eyebrow="Features" title="Why it’s better">
          <ProductFeature
            product={themedProduct}
            style={{
              ["--subtle-text" as any]: theme.subtleText,
              ["--page-text" as any]: theme.pageText,
              ["--product-glow" as any]: theme.productGlow,
            }}
          />
        </SectionShell>

        <SectionShell theme={theme} index={3}>
          <ReviewSection product={themedProduct as any} theme={theme as any} />
        </SectionShell>

        <SectionShell theme={theme} index={4}>
          <FaqSection
            product={themedProduct}
            questionColor={theme.headingColor}
            answerColor={theme.subtleText}
            faqs={(product as any).faqs}
          />
        </SectionShell>
      </div>
    </main>
  );
}