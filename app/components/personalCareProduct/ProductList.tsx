"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";

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
  const getDescription = (product: ProductType) =>
    product.description ??
    "Premium product designed for everyday comfort and reliable care.";

  const getCardTheme = (product: ProductType) => {
    const detailPalette =
      personalDetailPagePaletteBySlug[product.slug] ?? {
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
    <section className="container lg:min-h-screen mx-auto py-8 lg:py-20 px-4 sm:px-6 lg:px-6 max-w-7xl">
      <div className="mb-8 flex flex-col items-center justify-center gap-2 text-center">
        <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
          Shop the range
        </span>
        <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-personalCare">
          Best selling
          <span className="ml-3 font-light italic text-personalCare/70">
            personal essentials
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
          Discover our most loved personal care products, chosen for soft
          comfort, dependable protection, and a lighter everyday feel.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-5">
        {personalCareProducts.map((product, index) => {
          const cardTheme = getCardTheme(product);

          return (
            <Link
              key={product.id}
              href={`/personalCareProduct/${product.slug}`}
              className="group block w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                className="flex h-full flex-col justify-center rounded-2xl border p-3"
                style={{
                  borderColor: cardTheme.border,
                  backgroundColor: cardTheme.background,
                }}
              >
                <div
                  className="relative h-44 overflow-hidden rounded-2xl"
                  style={{ backgroundColor: cardTheme.chip }}
                >
                  <span
                    className="absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: `${cardTheme.foreground}cc` }}
                  >
                    {product.category}
                  </span>
                  <Image
                    src={product.image || product.variants?.[0]?.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                  />
                </div>

                <h3
                  className="mt-4 line-clamp-1 text-2xl font-semibold md:text-3xl"
                  style={{ color: cardTheme.foreground }}
                >
                  <span
                    className="group-hover:underline"
                    style={{ textDecorationColor: cardTheme.foreground }}
                  >
                    {product.name}
                  </span>
                </h3>
                {/* <p className="mt-1 text-xs text-zinc-500 leading-relaxed line-clamp-2 min-h-9">
                  {getDescription(product)}
                </p> */}
                <div className="mt-auto flex justify-end pt-4">
                  <span
                    className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                    style={{
                      borderColor: cardTheme.foreground,
                      color: cardTheme.foreground,
                    }}
                  >
                    Learn more
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
