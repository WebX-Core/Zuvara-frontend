"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";
import SectionIntro, {
  sectionContentSpacing,
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";

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
  const getCardTheme = (product: ProductType) => {
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

  return (
    <section className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:min-h-screen lg:px-6 lg:py-20">
      <SectionIntro
        align="center"
        className={`${sectionIntroSpacing} mx-auto w-full max-w-4xl`}
        eyebrow={
          <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
            Shop the range
          </span>
        }
        title={
          <span className="block text-center">
            <span className="block">Best selling</span>
            <span className="mt-1 block font-light italic text-personalCare/70">
              personal essentials
            </span>
          </span>
        }
        description="Discover our most loved personal care products, chosen for soft comfort, dependable protection, and a lighter everyday feel."
        titleClassName="mx-auto max-w-3xl text-center text-4xl font-semibold leading-[0.95] tracking-tight text-personalCare sm:text-5xl"
        descriptionClassName="mx-auto text-center text-sm font-medium leading-relaxed text-zinc-600 md:text-base"
      />
      <div
        className={`${sectionContentSpacing} flex flex-wrap justify-center gap-4 lg:gap-5`}
      >
        {personalCareProducts.map((product, index) => {
          const displayImage = product.image || product.variants?.[0]?.image;
          const cardTheme = getCardTheme(product);

          return (
            <Link
              key={product.id}
              href={`/personalCareProduct/${product.slug}`}
              className="group block h-full w-full min-[430px]:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.9375rem)]"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-[1.75rem] border p-2 transition-transform duration-300 group-hover:-translate-y-1"
                style={{ borderColor: cardTheme.border }}
              >
                <div
                  className="relative flex h-44 items-center justify-center overflow-hidden rounded-[1.35rem] py-2 sm:h-52 lg:h-56"
                  style={{ backgroundColor: cardTheme.background }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-6 bottom-4 h-9 rounded-full blur-2xl"
                    style={{ backgroundColor: `${cardTheme.foreground}2e` }}
                  />
                  <Image
                    src={displayImage}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                  />
                </div>

                <div className="flex flex-1 items-center justify-between gap-3 px-2 pb-3 pt-3 sm:pb-4">
                  <h3
                    className="max-w-[75%] text-sm font-semibold leading-snug sm:text-base"
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
        })}
      </div>
    </section>
  );
};

export default ProductList;
