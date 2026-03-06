import type { Product } from "@/type/personalCareProductType";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Check, ChevronLeft, ChevronRight } from "lucide-react";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";

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
  heroAvatars,
  theme,
  onPrev,
  onNext,
}: PersonalProductHeroSectionProps) {
  void _products;
  return (
    <motion.section
      className="relative overflow-hidden"
      animate={{ backgroundColor: theme.pageBg }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-7xl pt-8 pb-10 md:pt-10 md:pb-14">
        <div className="relative mt-10">
          <div className="flex justify-between">
            <div>
              <h1
                className="text-5xl font-semibold leading-[0.95] tracking-tight"
                style={{ color: theme.accent }}
              >
                Comfort begins
                <br />
                with confidence
              </h1>
            </div>

            <div className="py-2">
              <div className="flex -space-x-3">
                {heroAvatars.map((avatar, idx) => (
                  <div
                    key={`${avatar}-${idx}`}
                    className="relative h-12 w-12 rounded-full border-2 overflow-hidden bg-white"
                    style={{ borderColor: theme.pageBg, zIndex: 10 - idx }}
                  >
                    <Image
                      src={avatar}
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div
                  className="h-12 w-12 rounded-full grid place-items-center font-semibold"
                  style={{ backgroundColor: theme.chipBg, color: theme.accent }}
                >
                  +
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base text-zinc-600">
                Trusted by 5,000+ women every month
              </p>

              <Link href="/products">
                <button
                  className="mt-8 py-3 px-6 rounded-full text-white! text-xl md:text-sm font-semibold tracking-wide"
                  style={{ backgroundColor: theme.accent }}
                >
                  Inquiry Now
                </button>
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 -top-30 z-20 h-50 w-70 -translate-x-1/2 md:h-160 md:w-110">
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
                  sizes="(max-width: 1024px) 60vw, 22vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div
          className="relative h-107.5 md:h-100 overflow-hidden rounded-4xl px-6 lg:px-10 pt-16 pb:8 md:pb-16 md:pt-20 lg:pt-30 transition-colors duration-500"
          style={{ backgroundColor: theme.containerBg }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-white/20" />
            <div className="absolute right-8 -top-24 h-56 w-56 rounded-full bg-white/20" />
            <div className="absolute right-28 -bottom-32 h-64 w-64 rounded-full bg-white/20" />
          </div>

          <div className="w-full relative flex justify-between items-end gap-6 ">
            <div className="w-full ">
              <p className={`max-w-xs ${bodyText} font-medium`}>
                Every day asks a lot from you. Our personal care products are
                designed to protect your comfort through work, rest, and sleep.
              </p>
              <Link
                href="#touch"
                className="mt-4 inline-flex items-center gap-2 font-semibold"
                style={{ color: theme.accent }}
              >
                Find more details <ArrowDown size={16} />
              </Link>
            </div>
            <div className="w-full flex flex-col justify-end items-center">
              <h2
                className="text-nowrap text-2xl leading-[1.02] line-clamp-2 font-semibold"
                style={{ color: theme.accent }}
              >
                {active.name}
              </h2>
              <p className="mt-2 text-base md:text-sm font-medium text-zinc-600">
                {active.category}
              </p>
            </div>
            <div className="w-full text-zinc-700 space-y-4 lg:pt-14">
              <div className="w-2/3 mx-auto">
                <div className="flex items-center gap-3">
                  <Check
                    size={18}
                    style={{ color: theme.accent }}
                    strokeWidth={3}
                  />
                  <span className="text-base font-medium">
                    High absorbency support.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check
                    size={18}
                    style={{ color: theme.accent }}
                    strokeWidth={3}
                  />
                  <span className="text-base font-medium">Cloud-soft comfort.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check
                    size={18}
                    style={{ color: theme.accent }}
                    strokeWidth={3}
                  />
                  <span className="text-base font-medium">
                    Made for sensitive skin.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex justify-self-center items-center gap-3 py-2">
              <button
                type="button"
                onClick={onPrev}
                className=" px-6 py-3 font-medium hover:bg-white/20 rounded-full border bg-white/70 flex items-center justify-center gap-2"
                style={{ borderColor: theme.border, color: theme.accent }}
                aria-label="Previous product"
              >
                <ChevronLeft size={18} />
                Prev
              </button>
              <button
                type="button"
                onClick={onNext}
                className=" px-6 py-3 font-medium hover:bg-white/20 rounded-full border bg-white/70 flex items-center justify-center gap-2"
                style={{ borderColor: theme.border, color: theme.accent }}
                aria-label="Next product"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* <div className="absolute left-0 -right-6 bottom-0 z-20 flex start justify-start">
            <div className="flex pl-2 gap-1 bg-gray-100 rounded-tr-2xl py-2 pr-2">
              {products.map((p, i) => {
                const isActive = p.id === active.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onSelectProduct(i)}
                    className="relative h-16 w-16 overflow-hidden rounded-2xl border transition hover:opacity-90"
                    style={{
                      borderColor: isActive ? theme.accent : theme.border,
                      boxShadow: isActive
                        ? `0 0 0 2px ${theme.accent}40`
                        : undefined,
                    }}
                  >
                    <Image
                      src={pickHeroPack(p)}
                      alt={p.name}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                );
              })}
            </div>
            <div className="hidden md:block" />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
}
