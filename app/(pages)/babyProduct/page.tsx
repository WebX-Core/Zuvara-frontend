"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import type { Product } from "@/type/babyCareProductType";
import { babyCareProducts } from "@/constants/babyCareProduct"; // adjust path if needed

const btnBase =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
const btnSoft =
  btnBase +
  " bg-white/14 text-white ring-1 ring-white/20 hover:bg-white/18 backdrop-blur";
const btnPrimary =
  btnBase +
  " bg-white text-black hover:bg-white/90 ring-1 ring-black/10";

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function pickHeroBaby(p: Product) {
  // "baby changes" image:
  // prefer heroImage2 (you used it for hero alt pack), fallback to heroImage then image.
  return (p as any).heroImage2 || p.heroImage || p.image;
}

function pickHeroPack(p: Product) {
  // pack/product visual:
  return p.heroImage || p.image || pickHeroBaby(p);
}

export default function BabyCareHero() {
  const products = babyCareProducts as Product[];
  const [activeIdx, setActiveIdx] = useState(0);

  const active = useMemo(
    () => products[clampIndex(activeIdx, products.length)],
    [activeIdx, products]
  );

  const fg = (active as any).foreground || "#ffffff";
  const bg = (active as any).background || "#456a5c";

  const heroBabySrc = pickHeroBaby(active);
  const heroPackSrc = pickHeroPack(active);

  const title = active?.name ?? "Zuvara";
  const category = active?.category ?? "Baby Care";
  const price = active?.price?.amount;
  const currency = active?.price?.currency ?? "NPR";

  const highlights: string[] = (active as any).highlights ?? [];
  const desc = active?.description ?? "";
  const subDesc1 = (active as any).subDesc1 ?? "";
  const subDesc2 = (active as any).subDesc2 ?? "";
  const subDesc3 = (active as any).subDesc3 ?? "";
  const subDesc4 = (active as any).subDesc4 ?? "";
  const hasLongDesc = !!(subDesc1 || subDesc2 || subDesc3 || subDesc4);

  const rating = (active as any).rating;
  const reviews = (active as any).reviews;

  return (
    <div className="w-full">
      {/* HERO */}
      <motion.section
        className="relative overflow-hidden"
        animate={{ backgroundColor: bg }}
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
            {/* LEFT: Copy + controls */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1"
                  style={{
                    color: fg,
                    borderColor: "rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.10)",
                  }}
                >
                  <Sparkles size={14} />
                  <span className="opacity-90">{category}</span>
                </div>

                <div className="mt-4">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={active.id + "-title"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32 }}
                      className="text-4xl font-extrabold tracking-tight md:text-5xl"
                      style={{ color: fg }}
                    >
                      {title}
                    </motion.h1>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.id + "-desc"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.92, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, delay: 0.03 }}
                      className="mt-4 max-w-xl text-base md:text-lg"
                      style={{ color: fg }}
                    >
                      {desc}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* rating + price */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {typeof rating === "number" && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-sm ring-1 ring-white/20 backdrop-blur">
                      <Star size={16} className="opacity-90" color={fg} />
                      <span style={{ color: fg }}>
                        {rating.toFixed(1)}
                        {typeof reviews === "number" ? (
                          <span className="opacity-80"> • {reviews} reviews</span>
                        ) : null}
                      </span>
                    </div>
                  )}

                  {typeof price === "number" && (
                    <div
                      className="inline-flex items-baseline gap-2 rounded-full bg-black/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur"
                      style={{ color: fg }}
                    >
                      <span className="text-sm opacity-80">From</span>
                      <span className="text-xl font-bold">
                        {currency} {price}
                      </span>
                    </div>
                  )}
                </div>

                {/* product selector */}
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
                      const isActive = p.id === active.id;
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
                          style={!isActive ? { color: fg } : undefined}
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
                    View details
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Animated baby + product pack */}
            <div className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[620px]">
                {/* base glass card */}
                <div className="absolute inset-0 rounded-[32px] bg-white/10 ring-1 ring-white/20 backdrop-blur" />

                {/* baby (changes animated) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-baby"}
                    initial={{ opacity: 0, x: 24, scale: 0.98, rotate: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, x: -18, scale: 0.985, rotate: -0.4 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 p-6 md:p-8">
                      <div className="relative h-full w-full">
                        <Image
                          src={heroBabySrc}
                          alt={`${active.name} baby`}
                          fill
                          priority
                          className="object-contain drop-shadow-2xl"
                          sizes="(max-width: 1024px) 92vw, 48vw"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* pack/product (slower parallax-ish) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-pack"}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.99 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute -bottom-6 right-4 h-[48%] w-[48%] md:right-6 md:h-[52%] md:w-[52%]"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={heroPackSrc}
                        alt={`${active.name} pack`}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1024px) 52vw, 28vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* small badges */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {(active.variants || []).slice(0, 6).map((v) => (
                  <div
                    key={v.id}
                    className="flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs ring-1 ring-white/20 backdrop-blur"
                    style={{ color: fg }}
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
                      <span className="opacity-80">({(v as any).weight}kg)</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* DESCRIPTION BELOW HERO (changes with product) */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: long description */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-longdesc"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-gray-500">
                      Product Story
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                      {active.name}
                    </h2>
                  </div>

                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold ring-1"
                    style={{
                      color: bg,
                      backgroundColor: `${bg}15`,
                      borderColor: `${bg}35`,
                    }}
                  >
                    {active.slug}
                  </span>
                </div>

                {/* If no subDesc fields, show just description */}
                {!hasLongDesc ? (
                  <p className="mt-5 text-gray-700">{active.description}</p>
                ) : (
                  <div className="mt-5 space-y-4 text-gray-700">
                    {subDesc1 ? <p>{subDesc1}</p> : null}
                    {subDesc2 ? <p>{subDesc2}</p> : null}
                    {subDesc3 ? <p>{subDesc3}</p> : null}
                    {subDesc4 ? <p>{subDesc4}</p> : null}
                  </div>
                )}

                {/* quick meta */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {typeof rating === "number" ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-sm ring-1 ring-black/5">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-semibold text-gray-900">
                        {rating.toFixed(1)}
                      </span>
                      {typeof reviews === "number" ? (
                        <span className="text-gray-500">({reviews})</span>
                      ) : null}
                    </div>
                  ) : null}

                  {active.category ? (
                    <div className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm ring-1 ring-black/5">
                      <span className="text-gray-700">{active.category}</span>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: highlights */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-highlights"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8"
              >
                <p className="text-xs font-semibold tracking-wide text-gray-500">
                  Highlights
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  What you’ll love
                </h3>

                {highlights.length ? (
                  <ul className="mt-5 space-y-3">
                    {highlights.slice(0, 8).map((h, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span
                          className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-white"
                          style={{ backgroundColor: bg }}
                        >
                          ✓
                        </span>
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-gray-600">
                    Add <code className="text-gray-900">highlights: []</code> to
                    this product to show key points here.
                  </p>
                )}

                <div className="mt-7">
                  <button
                    className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
                    style={{ backgroundColor: bg }}
                    type="button"
                  >
                    Choose this product
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}