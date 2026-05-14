"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

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

const ProductList = () => {
  const productBottomWave = assetWithFill(wave4Svg, "#fce7f3");

  const getCardTheme = (product: ProductType) => {
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

  const filteredProducts = useMemo(() => personalCareProducts, []);

  return (
    <section className="relative py-8 pb-12 lg:pb-40">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />

      <div className="container mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:px-6">
        <div className="mb-5 flex flex-col items-center justify-center gap-2 text-center sm:mb-6">
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-4 flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-6 pb-10 lg:gap-x-5 lg:gap-y-8"
        >
          {filteredProducts.map((product, index) => {
            const displayImage = product.variants?.[0]?.image || product.image;
            const cardTheme = getCardTheme(product);

            return (
              <Link
                key={product.id}
                href={`/personalCareProduct/${product.slug}`}
                className="group block h-full w-full min-[430px]:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-1rem)]"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="flex h-full flex-col rounded-3xl transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <div
                    className="relative flex h-48 items-center justify-center overflow-hidden rounded-[1.75rem] py-2 sm:h-56"
                    style={{ backgroundColor: cardTheme.background }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-6 bottom-4 h-9 rounded-full blur-2xl"
                      style={{
                        backgroundColor: hexToRgba(cardTheme.foreground, 0.18),
                      }}
                    />
                    <Image
                      src={displayImage}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                    />
                  </div>

                  <div className="flex flex-1 items-center justify-between px-1.5 pb-1 pt-3 sm:px-2">
                    <h3
                      className="max-w-[75%] text-sm font-semibold leading-snug sm:text-base"
                      style={{ color: cardTheme.foreground }}
                    >
                      {product.name}
                    </h3>

                    <span
                      className="shrink-0 rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1"
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
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductList;
