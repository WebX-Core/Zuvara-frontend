"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import { Section, Container, Stack } from "@/app/components/layout";

const ProductSection = () => {
  return (
    <Section size="md" className="relative overflow-hidden bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
            Signature products
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-tight text-personalCare">
            Designed for everyday
            <span className="ml-2 italic font-light text-personalCare/70">
              comfort and confidence.
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Explore the personal care essentials built to feel soft, stay
            dependable, and support your routine from day wear to overnight use.
          </p>
        </div>

        <Stack spacing="lg" className="mt-12">
          {personalCareProducts.map((product) => {
            const features = (
              product.highlights ??
              product.features ??
              []
            ).slice(0, 4);
            const variantLabels = product.variants
              .slice(0, 3)
              .map((variant) => ({
                id: variant.id,
                label: variant.size,
              }));

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[2rem] border border-personalCare/10 bg-linear-to-br from-white to-personalCare/4 p-5 shadow-[0_22px_44px_rgba(24,24,27,0.06)] sm:p-6 lg:p-8"
              >
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-personalCare/75">
                        Exclusive Features
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-personalCare/8 px-3 py-1 text-xs font-medium text-personalCare">
                        <Star size={13} className="fill-current" />
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-500 shadow-sm">
                        {product.reviews}+ reviews
                      </span>
                    </div>

                    <h3 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-tight text-zinc-900 sm:text-5xl">
                      {product.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm font-medium leading-8 text-zinc-600 md:text-base">
                      {product.subDesc1 ?? product.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {variantLabels.map((variant) => (
                        <span
                          key={variant.id}
                          className="rounded-full border border-personalCare/15 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700"
                        >
                          {variant.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/personalCareProduct/${product.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-personalCare px-6 py-3 text-sm font-semibold text-white! shadow-[0_18px_35px_rgba(219,39,119,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-personalCare/90"
                      >
                        View product
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/personalCareProduct"
                        className="inline-flex rounded-full border border-personalCare/20 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors duration-300 hover:bg-personalCare/6"
                      >
                        Browse collection
                      </Link>
                    </div>
                  </div>

                  <div className="relative ">
                    <div className="relative mx-auto flex min-h-96 items-center justify-center sm:min-h-112 lg:min-h-120">
                      <div className="absolute h-80 w-80 rounded-full bg-personalCare/8 sm:h-96 sm:w-96 lg:h-112 lg:w-md" />

                      <div className="absolute left-0 top-10 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-[0_16px_30px_rgba(24,24,27,0.08)] sm:left-4 lg:left-0">
                        {features[0] ?? "Soft-touch comfort"}
                      </div>

                      <div className="absolute bottom-8 right-0 rounded-2xl bg-personalCare px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(219,39,119,0.22)] sm:right-4 lg:right-0">
                        {features[1] ?? "Reliable protection"}
                      </div>

                      <div className="relative h-80 w-full max-w-sm sm:h-96 lg:h-112">
                        <Image
                          src={product.productImage}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-[0_30px_45px_rgba(45,19,68,0.16)]"
                          sizes="(min-width: 1024px) 36vw, 90vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </Stack>
      </Container>
    </Section>
  );
};

export default ProductSection;
