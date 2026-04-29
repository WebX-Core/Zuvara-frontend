"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ─── Types ──────────────────────────────────────────────────────────────────────

export type Product = (typeof personalCareProducts)[number];

export interface MobileProductCarouselProps {
  products: Product[];
  getProductHref?: (product: Product) => string;
  browseHref?: string;
}

interface MobileProductCardProps {
  product: Product;
  getProductHref: (product: Product) => string;
  browseHref: string;
}

// ─── Mobile Card ────────────────────────────────────────────────────────────────

const MobileProductCard = ({
  product,
  getProductHref,
  browseHref,
}: MobileProductCardProps) => {
  const features = (product.highlights ?? product.features ?? []).slice(0, 2);
  const variantLabels = product.variants.slice(0, 3).map((v) => ({
    id: v.id,
    label: v.size,
  }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full rounded-[2rem] border border-personalCare/10 bg-linear-to-br from-white to-personalCare/4 p-5 shadow-[0_22px_44px_rgba(24,24,27,0.06)]"
    >
      {/* Product image */}
      <div className="relative mx-auto flex h-52 items-center justify-center">
        <div className="absolute h-44 w-44 rounded-full bg-personalCare/8" />

        {features[0] && (
          <div className="absolute left-0 top-3 z-10 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-zinc-800 shadow-[0_12px_24px_rgba(24,24,27,0.08)]">
            {features[0]}
          </div>
        )}

        {features[1] && (
          <div className="absolute bottom-3 right-0 z-10 rounded-2xl bg-personalCare px-3 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(219,39,119,0.22)]">
            {features[1]}
          </div>
        )}

        <div className="relative z-20 h-40 w-full max-w-[220px]">
          <Image
            src={product.productImage}
            alt={product.name}
            fill
            className="object-contain drop-shadow-[0_24px_36px_rgba(45,19,68,0.16)]"
            sizes="220px"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-personalCare/8 px-3 py-1 text-xs font-medium text-personalCare">
            <Star size={12} className="fill-current" />
            {product.rating.toFixed(1)}
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-500 shadow-sm">
            {product.reviews}+ reviews
          </span>
        </div>

        <h3 className="mt-2.5 text-2xl font-semibold leading-tight tracking-tight text-zinc-900">
          {product.name}
        </h3>

        {variantLabels.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {variantLabels.map((v) => (
              <span
                key={v.id}
                className="rounded-full border border-personalCare/15 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-700"
              >
                {v.label}
              </span>
            ))}
          </div>
        )}

        <p className="mt-2.5 text-sm font-medium leading-6 text-zinc-600">
          {product.subDesc1 ?? product.description}
        </p>

        <div className="mt-4 mb-2 flex flex-wrap items-center gap-2.5">
          <Link
            href={getProductHref(product)}
            className="inline-flex items-center gap-2 rounded-full bg-personalCare px-4 py-2 text-sm font-semibold text-white! shadow-[0_14px_28px_rgba(219,39,119,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-personalCare/90"
          >
            View product
            <ArrowRight size={15} />
          </Link>
          <Link
            href={browseHref}
            className="inline-flex rounded-full border border-personalCare/20 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors duration-300 hover:bg-personalCare/6"
          >
            Browse collection
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

// ─── Mobile Carousel ────────────────────────────────────────────────────────────

const MobileProductCarousel = ({
  products,
  getProductHref = (product) => `/personalCareProduct/${product.slug}`,
  browseHref = "/personalCareProduct",
}: MobileProductCarouselProps) => {
  return (
    <>
      <style>{`
        .mobile-product-swiper .swiper-pagination {
          position: static;
          margin-top: 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        .mobile-product-swiper .swiper-pagination-bullet {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background: #8F1ADF40;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s;
        }
        .mobile-product-swiper .swiper-pagination-bullet-active {
          width: 1.5rem;
          background: #8F1ADF;
        }
      `}</style>

      <div className="mobile-product-swiper">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          grabCursor
          a11y={{ enabled: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <MobileProductCard
                product={product}
                getProductHref={getProductHref}
                browseHref={browseHref}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MobileProductCarousel;