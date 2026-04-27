import { useEffect, useState } from "react";
import type { Product } from "@/type/personalCareProductType";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ArrowDown, Check, ChevronLeft, ChevronRight, ShareIcon } from "lucide-react";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import ContactIntentModal from "@/app/components/common-ui/ContactIntentModal";

type PersonalProductHeroSectionProps = {
  active: Product;
  products: Product[];
  heroPackSrc: string;
  heroAvatars: string[];
  theme: ThemePreset;
  onPrev: () => void;
  onNext: () => void;
  onSelectProduct: (index: number) => void;
};

const bodyText = "text-sm md:text-base leading-relaxed text-zinc-700";

export default function PersonalProductHeroSection({
  active,
  products: _products,
  heroPackSrc,
  heroAvatars: _heroAvatars,
  theme,
  onPrev,
  onNext,
}: PersonalProductHeroSectionProps) {
  void _products;
  void _heroAvatars;
  const [isMobile, setIsMobile] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const handleHeroSwipe = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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
      className="relative overflow-hidden px-4"
      animate={isMobile ? undefined : { backgroundColor: theme.pageBg }}
      transition={isMobile ? undefined : { duration: 0.45, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-7xl pb-10 md:pt-10 md:pb-14">
        <motion.div
          className="relative mt-10"
          drag={isMobile ? "x" : false}
          dragElastic={0.22}
          dragSnapToOrigin
          onDragEnd={handleHeroSwipe}
        >
          <div className="w-full flex justify-between items-center order-first md:order-0 md:py-12">
            <div>
              <h1
                className="text-2xl sm:text-4xl md:font-bold leading-[1.02] line-clamp-2 font-semibold"
                style={{ color: theme.accent }}
              >
                {active.name}
              </h1>
              <p className="mt-2 text-base md:text-sm font-medium text-zinc-600">
                {active.category}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsInquiryModalOpen(true)}
              className="mt-8 flex gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide text-white md:px-6 md:py-3 md:text-base"
              style={{ backgroundColor: theme.accent }}
            >
              <span>Inquiry </span>
              <span>
                <ShareIcon />
              </span>
            </button>
          </div>

          <div className="pointer-events-none relative md:absolute left-1/2 md:-top-30 z-20 h-80 w-full md:h-160 md:w-110 -translate-x-1/2 mt-8 md:mt-0">
            {isMobile ? (
              <div className="absolute inset-0">
                <Image
                  src={heroPackSrc}
                  alt={`${active.name} pack`}
                  fill
                  className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                  sizes="(max-width: 1024px) 80vw, 22vw"
                />
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + "-pack"}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroPackSrc}
                    alt={`${active.name} pack`}
                    fill
                    className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                    sizes="(max-width: 1024px) 80vw, 22vw"
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        <div
          className="relative min-h-100 overflow-hidden rounded-4xl px-6 lg:px-10 pt-16 pb-8 md:h-100 md:pb-16 md:pt-20 lg:pt-30 md:transition-colors md:duration-500"
          style={{ backgroundColor: theme.containerBg }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-white/20" />
            <div className="absolute right-8 -top-24 h-56 w-56 rounded-full bg-white/20" />
            <div className="absolute right-28 -bottom-32 h-64 w-64 rounded-full bg-white/20" />
          </div>

          <div className="w-full relative flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-6">
            <div className="w-full text-center md:text-left">
              <p className={`max-w-xs mx-auto md:mx-0 ${bodyText} font-medium`}>
                Every day asks a lot from you. Our personal care products are
                made for comfort, confidence, and dependable protection.
              </p>
              <Link
                href="#touch"
                className="mt-4 inline-flex items-center gap-2 font-semibold"
                style={{ color: theme.accent }}
              >
                Find more details <ArrowDown size={16} />
              </Link>
            </div>

            <div className="w-full text-zinc-700 lg:pt-14">
              <div className="w-full md:w-2/3 mx-auto">
                {[
                  "High absorbency support.",
                  "Cloud-soft comfort.",
                  "Made for sensitive skin.",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check
                      size={18}
                      style={{ color: theme.accent }}
                      strokeWidth={3}
                    />
                    <span className="text-base font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-8 md:pt-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 py-2">
              <button
                type="button"
                onClick={onPrev}
                className="rounded-full border bg-white/70 px-5 py-2.5 font-medium hover:bg-white/20 flex items-center justify-center gap-2 md:px-6 md:py-3"
                style={{ borderColor: theme.border, color: theme.accent }}
                aria-label="Previous product"
              >
                <ChevronLeft size={18} />
                <span className="flex flex-col items-start leading-none">
                  <span>Prev</span>
                  <span className="text-[10px] font-normal opacity-70 md:hidden">
                    Swipe right
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={onNext}
                className="rounded-full border bg-white/70 px-5 py-2.5 font-medium hover:bg-white/20 flex items-center justify-center gap-2 md:px-6 md:py-3"
                style={{ borderColor: theme.border, color: theme.accent }}
                aria-label="Next product"
              >
                <span className="flex flex-col items-end leading-none">
                  <span>Next</span>
                  <span className="text-[10px] font-normal opacity-70 md:hidden">
                    Swipe left
                  </span>
                </span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
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
