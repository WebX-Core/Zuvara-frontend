import { useEffect, useState } from "react";
import type { Product } from "@/type/babyCareProductType";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  MoveRight,
  MoveRightIcon,
  Star,
} from "lucide-react";
import ContactIntentModal from "@/app/components/common-ui/ContactIntentModal";
import Link from "next/link";

type ThemePreset = {
  accent: string;
  pageBg: string;
  containerBg: string;
  border: string;
  chipBg: string;
  sectionTint: string;
};

type BabyCareHeroSectionProps = {
  active: Product;
  products: Product[];
  heroPackSrc: string;
  theme: ThemePreset;
  onPrev: () => void;
  onNext: () => void;
  onSelectProduct: (index: number) => void;
  pickHeroPack: (product: Product) => string;
  enableMobileSwipe?: boolean;
};

export default function BabyCareHeroSection({
  active,
  products: _products,
  heroPackSrc,
  theme,
  onPrev,
  onNext,
  enableMobileSwipe = true,
}: BabyCareHeroSectionProps) {
  void _products;
  const [isMobile, setIsMobile] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const handleHeroSwipe = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!isMobile) return;

    if (info.offset.x <= -50) {
      onNext();
      return;
    }

    if (info.offset.x >= 50) {
      onPrev();
    }
  };

  return (
    <motion.section
      className="relative overflow-hidden h-screen flex flex-col"
      animate={isMobile ? undefined : { backgroundColor: theme.pageBg }}
      transition={isMobile ? undefined : { duration: 0.45, ease: "easeOut" }}
      drag={isMobile && enableMobileSwipe ? "x" : false}
      dragElastic={0.22}
      dragSnapToOrigin
      onDragEnd={enableMobileSwipe ? handleHeroSwipe : undefined}
      style={{ touchAction: enableMobileSwipe ? "pan-y" : "auto" }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex md:items-center md:h-full px-4">
        <div className="relative mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Column - Product Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative">
                  {/* Category Badge */}
                  <div className="absolute top-0 left-0 z-10">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                      style={{
                        backgroundColor: theme.accent,
                        color: "white",
                      }}
                    >
                      {active.category}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="pointer-events-none relative mx-auto h-96 lg:h-[500px] w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id + "-pack"}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={heroPackSrc}
                          alt={`${active.name} pack`}
                          fill
                          className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                          sizes="(max-width: 1024px) 90vw, 50vw"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Decorative Background */}
                    <div
                      className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-20"
                      style={{ backgroundColor: theme.accent }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              {/* Product Name & Rating */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3"
                  style={{ color: theme.accent }}
                >
                  {active.name}
                </motion.h1>

                {/* Rating & Reviews */}
                {active.rating && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill={
                            i < Math.floor(active.rating || 0)
                              ? theme.accent
                              : "#e5e7eb"
                          }
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-zinc-700">
                      {active.rating}{" "}
                      <span className="font-normal text-zinc-500">
                        ({active.reviews} reviews)
                      </span>
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Safety Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 p-4 rounded-xl border"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: `${theme.accent}08`,
                }}
              >
                <Heart
                  size={20}
                  style={{ color: theme.accent }}
                  className="shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="text-sm font-bold text-zinc-800 mb-1">
                    100% Safe & Chemical-Free
                  </h4>
                  <p className="text-xs text-zinc-600">
                    0% Parabens, Latex, Fragrance, Phthalates, and Chlorine.
                    Pediatrician tested and approved for sensitive skin.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: theme.accent }}
                >
                  <span>Inquiry Now</span>
                  <MoveRightIcon />
                </button>
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: `${theme.border}44` }}
              >
                <span className="text-sm font-medium text-zinc-600">
                  Browse Products:
                </span>
                <button
                  type="button"
                  onClick={onPrev}
                  className="rounded-full border-2 bg-white px-4 py-2 font-medium hover:bg-zinc-50 transition-all duration-300 flex items-center gap-2"
                  style={{ borderColor: theme.border, color: theme.accent }}
                  aria-label="Previous product"
                >
                  <ChevronLeft size={18} />
                  <span className="text-sm">Previous</span>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="rounded-full border-2 bg-white px-4 py-2 font-medium hover:bg-zinc-50 transition-all duration-300 flex items-center gap-2"
                  style={{ borderColor: theme.border, color: theme.accent }}
                  aria-label="Next product"
                >
                  <span className="text-sm">Next</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - App-like Design */}
      <div className="md:hidden flex flex-col h-full">
        {/* Top Section - Product Image (60% height) */}
        <div
          className="relative flex-1 flex items-center justify-center"
          style={{ backgroundColor: theme.containerBg }}
        >
          {/* Category Badge - Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md"
              style={{
                backgroundColor: theme.accent,
                color: "white",
              }}
            >
              {active.category}
            </span>
          </div>

          {/* Swipe Indicator */}
          <div className="absolute top-4 right-4 z-10 flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full max-w-md px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-pack-mobile"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={heroPackSrc}
                  alt={`${active.name} pack`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="90vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section - Product Info (40% height) */}
        <div className="relative bg-white rounded-t-[2rem] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-6 py-6 flex flex-col">
          {/* Drag Handle */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-zinc-300" />

          {/* Product Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold leading-tight mb-2 mt-2"
            style={{ color: theme.accent }}
          >
            {active.name}
          </motion.h1>

          {/* Rating & Reviews - Compact */}
          {active.rating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="flex items-center gap-0.5">
                <Star size={14} fill={theme.accent} color={theme.accent} />
                <span
                  className="text-sm font-bold"
                  style={{ color: theme.accent }}
                >
                  {active.rating}
                </span>
              </div>
              <span className="text-xs text-zinc-500">
                ({active.reviews} reviews)
              </span>
            </motion.div>
          )}

          {/* Safety Badge - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 p-3 rounded-xl mb-4"
            style={{
              backgroundColor: `${theme.accent}08`,
              borderLeft: `3px solid ${theme.accent}`,
            }}
          >
            <Heart
              size={16}
              style={{ color: theme.accent }}
              className="shrink-0"
            />
            <p className="text-xs font-semibold text-zinc-700">
              100% Safe & Chemical-Free Formula
            </p>
          </motion.div>

          {/* CTA Buttons - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3 mt-auto"
          >
            <button
              type="button"
              onClick={() => setIsInquiryModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white shadow-lg active:scale-95 transition-transform"
              style={{ backgroundColor: theme.accent }}
            >
              <span>Inquiry Now</span>
              <MoveRightIcon />
            </button>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-4"
          >
            <button
              type="button"
              onClick={onPrev}
              className="py-2 px-4 rounded-full flex items-center active:scale-90 transition-transform"
              style={{ backgroundColor: `${theme.accent}15` }}
              aria-label="Previous product"
            >

              <ChevronLeft size={20} style={{ color: theme.accent }} />
              <span className="text-sm font-medium">Prev</span>
            </button>
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor:
                      i === 1 ? theme.accent : `${theme.accent}30`,
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={onNext}
              className="py-2 px-4 flex items-center rounded-full active:scale-90 transition-transform"
              style={{ backgroundColor: `${theme.accent}15` }}
              aria-label="Next product"
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronRight size={20} style={{ color: theme.accent }} />
            </button>
          </motion.div>
        </div>
      </div>

      {isInquiryModalOpen ? (
        <ContactIntentModal
          intent="inquiry"
          onClose={() => setIsInquiryModalOpen(false)}
          productName={active.name}
          themeColor={theme.accent}
        />
      ) : null}
    </motion.section>
  );
}
