"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

const ProductList = () => {
  const footerWave = assetWithFill(wave4Svg, "#f4e8fc");

  const getDescription = (product: ProductType) =>
    product.description ??
    "Premium product designed for everyday comfort and reliable care.";

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 lg:pb-32">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: footerWave.markup }}
      />
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-center gap-2 text-center">
          <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
            Shop the range
          </span>
          <h2 className="mt-5 max-w-4xl text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.95] tracking-tight text-personalCare">
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          {personalCareProducts.map((product, index) => {
            const displayImage = product.variants?.[0]?.image || product.image;
            const variantLabels = (product.variants ?? [])
              .map((variant) => variant.size)
              .filter(Boolean)
              .slice(0, 3);

            return (
              <Link
                key={product.id}
                href={`/personalCareProduct/${product.slug}`}
                className="group block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-personalCare/12 bg-white p-4 shadow-[0_18px_40px_rgba(24,24,27,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(219,39,119,0.12)] sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-personalCare/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-personalCare">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-personalCare/6 px-2.5 py-1 text-xs font-medium text-personalCare">
                      <Star size={12} className="fill-current" />
                      {product.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="relative mt-4 h-56 overflow-hidden rounded-[1.6rem] bg-linear-to-br from-personalCare/12 to-white">
                    <Image
                      src={displayImage}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 768px) 42vw, 92vw"
                    />
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold leading-tight text-zinc-900 lg:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-500 line-clamp-2">
                      {getDescription(product)}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {variantLabels.map((label) => (
                        <span
                          key={`${product.id}-${label}`}
                          className="rounded-md border border-personalCare/14 px-2.5 py-1 text-[11px] font-medium text-zinc-600"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                          Trusted by
                        </p>
                        <p className="text-sm font-semibold text-zinc-900">
                          {product.reviews}+ happy customers
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-personalCare px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-personalCare/90">
                        View details
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
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
