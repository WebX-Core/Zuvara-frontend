"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { Section, Container } from "@/app/components/layout";
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
  const footerWave = assetWithFill(wave4Svg, "#f4e8fc");

  const getDescription = (product: ProductType) =>
    product.description ??
    "Premium product designed for everyday comfort and reliable care.";

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
    <Section size="md" className="relative overflow-hidden bg-white lg:pb-32">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: footerWave.markup }}
      />
      <Container>
        <SectionIntro
          align="center"
          className={`${sectionIntroSpacing} max-w-4xl`}
          eyebrow={
            <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
              Shop the range
            </span>
          }
          title={
            <>
              Best selling
              <span className="ml-3 font-light italic text-personalCare/70">
                personal essentials
              </span>
            </>
          }
          description="Discover our most loved personal care products, chosen for soft comfort, dependable protection, and a lighter everyday feel."
          titleClassName="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.95] tracking-tight text-personalCare"
          descriptionClassName="text-sm font-medium leading-relaxed text-zinc-600 md:text-base"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className={`${sectionContentSpacing} grid gap-5 md:grid-cols-2`}
        >
          {personalCareProducts.map((product, index) => {
            const displayImage = product.variants?.[0]?.image || product.image;
            const variantLabels = (product.variants ?? [])
              .map((variant) => variant.size)
              .filter(Boolean)
              .slice(0, 3);
            const cardTheme = getCardTheme(product);

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
                  className="flex h-full flex-col overflow-hidden rounded-[1.9rem] border p-4 shadow-[0_18px_40px_rgba(24,24,27,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(219,39,119,0.12)] sm:p-5"
                  style={{
                    borderColor: cardTheme.border,
                    backgroundColor: cardTheme.background,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: cardTheme.chip,
                        color: cardTheme.foreground,
                      }}
                    >
                      {product.category}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: cardTheme.chip,
                        color: cardTheme.foreground,
                      }}
                    >
                      <Star size={12} className="fill-current" />
                      {product.rating.toFixed(1)}
                    </span>
                  </div>

                  <div
                    className="relative mt-4 h-56 overflow-hidden rounded-[1.6rem]"
                    style={{ backgroundColor: cardTheme.chip }}
                  >
                    <Image
                      src={displayImage}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 768px) 42vw, 92vw"
                    />
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <h3
                      className="mt-4 line-clamp-1 text-2xl font-semibold lg:text-3xl"
                      style={{ color: cardTheme.foreground }}
                    >
                      {product.name}
                    </h3>
                    {/* <p
                      className="mt-2 text-sm font-medium leading-relaxed line-clamp-2"
                      style={{ color: `${cardTheme.foreground}bb` }}
                    >
                      {getDescription(product)}
                    </p> */}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {variantLabels.map((label) => (
                        <span
                          key={`${product.id}-${label}`}
                          className="rounded-md border px-2.5 py-1 text-[11px] font-medium"
                          style={{
                            borderColor: cardTheme.border,
                            color: `${cardTheme.foreground}cc`,
                          }}
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.18em]"
                          style={{ color: `${cardTheme.foreground}88` }}
                        >
                          Trusted by
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: cardTheme.foreground }}
                        >
                          {product.reviews}+ happy customers
                        </p>
                      </div>

                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-white transition-colors duration-300"
                        style={{ backgroundColor: cardTheme.foreground }}
                      >
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
      </Container>
    </Section>
  );
};

export default ProductList;
