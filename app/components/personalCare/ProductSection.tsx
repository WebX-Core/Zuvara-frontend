"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import { Section, Container, Stack } from "@/app/components/layout";
import SectionIntro, {
  sectionContentSpacing,
} from "@/app/components/common-ui/SectionIntro";
import MobileProductCarousel from "./MobileProductCarousel";

const ProductCard = ({
  product,
}: {
  product: (typeof personalCareProducts)[number];
}) => {
  const features = (product.highlights ?? product.features ?? []).slice(0, 4);
  const variantLabels = product.variants.slice(0, 3).map((variant) => ({
    id: variant.id,
    label: variant.size,
  }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full rounded-[2rem] border border-personalCare/12 bg-white p-5 sm:p-6 lg:p-9"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="hidden text-sm font-semibold text-personalCare/75 lg:block">
              Exclusive Features
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-personalCare/8 px-3 py-1 text-xs font-medium text-personalCare">
              <Star size={13} className="fill-current" />
              {product.rating.toFixed(1)}
            </span>
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-500">
              {product.reviews}+ reviews
            </span>
          </div>

          <h3 className="mt-3 text-3xl font-semibold leading-[0.96] tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            {product.name}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {variantLabels.map((variant) => (
              <span
                key={variant.id}
                className="rounded-full border border-personalCare/15 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700"
              >
                {variant.label}
              </span>
            ))}
          </div>

          <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-zinc-600 md:text-base">
            {product.subDesc1 ?? product.description}
          </p>

          <div className="mt-6 hidden flex-wrap items-center gap-3 lg:flex">
            <Link
              href={`/personalCareProduct/${product.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-personalCare px-4 py-2 text-sm font-semibold text-white! transition-all duration-300 hover:bg-personalCare/90"
            >
              View product
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/personalCareProduct"
              className="inline-flex rounded-full border border-personalCare/20 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors duration-300 hover:bg-personalCare/6"
            >
              Browse collection
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto flex h-56 items-center justify-center sm:min-h-96 lg:min-h-[30rem]">
            <div className="absolute h-48 w-48 rounded-full bg-personalCare/8 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

            <div className="absolute left-0 top-4 z-10 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 sm:top-10 sm:px-4 sm:py-3 sm:text-sm">
              {features[0] ?? "Soft-touch comfort"}
            </div>

            <div className="absolute bottom-4 right-0 z-10 rounded-xl bg-personalCare px-3 py-2 text-xs font-semibold text-white sm:bottom-8 sm:px-4 sm:py-3 sm:text-sm">
              {features[1] ?? "Reliable protection"}
            </div>

            <div className="relative z-20 h-44 w-full max-w-xs sm:h-64 lg:h-[26rem]">
              <Image
                src={product.productImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 36vw, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProductSection = () => {
  return (
    <Section size="md" className="relative overflow-hidden bg-white">
      <Container>
        <SectionIntro
          align="center"
          className="mx-auto max-w-3xl"
          eyebrow={
            <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
              Signature products
            </span>
          }
          title={
            <>
              Designed for everyday
              <span className="ml-2 italic font-light text-personalCare/70">
                comfort and confidence.
              </span>
            </>
          }
          description="Explore the personal care essentials built to feel soft, stay dependable, and support your routine from day wear to overnight use."
          titleClassName="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-tight text-personalCare"
          descriptionClassName="text-sm font-medium leading-relaxed text-zinc-600 md:text-base"
        />

        <div className={`${sectionContentSpacing} lg:hidden`}>
          <MobileProductCarousel
            products={personalCareProducts}
            getProductHref={(product) => `/personalCareProduct/${product.slug}`}
            browseHref="/personalCareProduct"
          />
        </div>

        <Stack spacing="lg" className={`${sectionContentSpacing} hidden lg:flex`}>
          {personalCareProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
      </Container>
    </Section>
  );
};

export default ProductSection;
