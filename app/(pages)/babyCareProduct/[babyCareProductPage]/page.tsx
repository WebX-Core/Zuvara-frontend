"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Star, ChevronRight as CrumbChevron } from "lucide-react";

import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product, Variant } from "@/type/babyCareProductType";

import DescSection from "@/app/components/babyCareProductPage/DescSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import FaqSection from "@/app/components/common-ui/FaqSection";

/* ───────────────────────── THEME ───────────────────────── */

type Theme = {
  name: string;
  bg: string;
  fg: string;
  pageBg: string;
  pageText: string;
  subtleText: string;
  cardBg: string;
  cardBorder: string;
  divider: string;
  headingColor: string;
  starColor: string;
  glowColor: string;
};

const THEMES: Theme[] = [
  {
    name: "yellow",
    bg: "#d97706",
    fg: "#ffffff",
    pageBg: "#fffbeb",
    pageText: "#1c1917",
    subtleText: "#78716c",
    cardBg: "#ffffff",
    cardBorder: "rgba(0,0,0,0.08)",
    divider: "rgba(0,0,0,0.08)",
    headingColor: "#92400e",
    starColor: "#f59e0b",
    glowColor: "#fbbf24",
  },
  {
    name: "purple",
    bg: "#7c3aed",
    fg: "#ffffff",
    pageBg: "#f5f3ff",
    pageText: "#1e1b4b",
    subtleText: "#6b7280",
    cardBg: "#ffffff",
    cardBorder: "rgba(0,0,0,0.08)",
    divider: "rgba(0,0,0,0.08)",
    headingColor: "#5b21b6",
    starColor: "#7c3aed",
    glowColor: "#a78bfa",
  },
  {
    name: "blue",
    bg: "#1d4ed8",
    fg: "#ffffff",
    pageBg: "#eff6ff",
    pageText: "#1e3a5f",
    subtleText: "#4b5563",
    cardBg: "#ffffff",
    cardBorder: "rgba(0,0,0,0.08)",
    divider: "rgba(0,0,0,0.08)",
    headingColor: "#1e40af",
    starColor: "#2563eb",
    glowColor: "#60a5fa",
  },
];

/* ───────────────────────── TYPES ───────────────────────── */

type Money = {
  amount: number;
  currency: "USD" | "NPR" | "EUR" | "GBP";
};

type ProductExtras = {
  rating?: number; // 0..5
  reviewCount?: number;
  badge?: string;
  price?: Money;
  subscriptionNote?: string;

  benefits?: string[];

  video?: string; // mp4/webm (you used product.video in your code)
  videoPoster?: string; // optional poster
  galleryImages?: string[];

  bundle?: {
    title: string;
    desc: string;
    price: Money;
    compareAtPrice?: Money;
  };
};

type ProductWithExtras = Product & Partial<ProductExtras>;

type MediaKind = "image" | "video";

type ActiveMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string };

/* ───────────────────────── HELPERS ───────────────────────── */

function formatMoney(m: Money): string {
  const symbol = m.currency === "USD" ? "$" : m.currency === "EUR" ? "€" : m.currency === "GBP" ? "£" : "Rs";
  const decimals = m.currency === "USD" || m.currency === "EUR" || m.currency === "GBP" ? 2 : 0;
  return `${symbol} ${m.amount.toFixed(decimals)}`;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function safeIdx<T>(arr: readonly T[], idx: number): T | undefined {
  return idx >= 0 && idx < arr.length ? arr[idx] : undefined;
}

function pickThumb(p: ProductWithExtras): string {
  const fromVariant = p.variants?.[0]?.image;
  // some datasets have p.image, some don't — keep safe
  const maybe = (fromVariant ?? (p as unknown as { image?: string }).image) as string | undefined;
  return maybe && maybe.length > 0 ? maybe : "/placeholder.png";
}

/* ───────────────────────── UI PIECES ───────────────────────── */

function RatingRow(props: {
  rating: number;
  reviewCount: number;
  starColor: string;
  subtleText: string;
}) {
  const rounded = Math.round(props.rating);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const active = i < rounded;
          return (
            <Star
              key={i}
              size={14}
              style={{ color: props.starColor }}
              fill={active ? props.starColor : "transparent"}
              className={active ? "" : "opacity-35"}
            />
          );
        })}
      </div>

      <p className="text-sm font-semibold">{props.rating.toFixed(1)}</p>

      <p className="text-sm" style={{ color: props.subtleText }}>
        {props.reviewCount.toLocaleString()} reviews
      </p>
    </div>
  );
}

function SectionCard(props: {
  title?: string;
  children: React.ReactNode;
  borderColor: string;
  subtleText: string;
}) {
  return (
    <div className="rounded-3xl backdrop-blur-xl" style={{ borderColor: props.borderColor }}>
      {props.title ? (
        <div className="px-6 pt-6">
          <p className="text-sm font-semibold" style={{ color: props.subtleText }}>
            {props.title}
          </p>
        </div>
      ) : null}

      <div className="px-6 pb-6 pt-3">{props.children}</div>
    </div>
  );
}

function Lightbox(props: { open: boolean; media: ActiveMedia | null; onClose: () => void }) {
  if (!props.open || !props.media) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
        <div className="relative w-full max-w-6xl max-h-[85vh] rounded-3xl overflow-hidden border bg-black border-white/15">
          <button
            type="button"
            onClick={props.onClose}
            className="absolute right-3 top-3 md:right-4 md:top-4 z-10 rounded-full px-3 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur"
            aria-label="Close"
          >
            Close
          </button>

          <div className="relative w-full h-[65vh] md:h-[78vh]">
            {props.media.kind === "image" ? (
              <Image src={props.media.src} alt={props.media.alt} fill className="object-contain" priority />
            ) : (
              <video
                className="w-full h-full object-cover"
                src={props.media.src}
                poster={props.media.poster}
                controls
                autoPlay
                playsInline
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumbs(props: {
  theme: Theme;
  productName: string;
  onGoHome: () => void;
  onGoListing: () => void;
}) {
  const { theme, productName } = props;
  return (
    <div className="pt-6">
      <div
        className="inline-flex items-center gap-2 rounded-full border bg-white/60 backdrop-blur px-4 py-2 shadow-sm"
        style={{ borderColor: theme.cardBorder, color: theme.pageText }}
      >
        <button
          type="button"
          onClick={props.onGoHome}
          className="text-sm font-semibold hover:opacity-80 transition"
        >
          Home
        </button>
        <CrumbChevron size={14} className="opacity-50" />
        <button
          type="button"
          onClick={props.onGoListing}
          className="text-sm font-semibold hover:opacity-80 transition"
        >
          Baby Care
        </button>
        <CrumbChevron size={14} className="opacity-50" />
        <span className="text-sm font-semibold truncate max-w-[46vw] md:max-w-none">
          {productName}
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 }); // kept (you may use later)

  /* Theme */
  const rawTheme = Number(searchParams.get("theme") ?? "0");
  const themeIndex = Number.isFinite(rawTheme) ? rawTheme % THEMES.length : 0;
  const theme = THEMES[themeIndex];

  /* Product */
  const productSlug = params.babyCareProductPage as string;

  const product = useMemo<ProductWithExtras | null>(() => {
    const found = babyCareProducts.find((p) => p.slug === productSlug) ?? null;
    return found as ProductWithExtras | null;
  }, [productSlug]);

  /* Related products (simple + smart) */
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const currentIndex = babyCareProducts.findIndex((p) => p.slug === productSlug);
    const base = babyCareProducts.filter((p) => p.slug !== productSlug);

    // Prefer same category if present
    const sameCategory = base.filter((p) => p.category && p.category === product.category);
    const pool = sameCategory.length >= 3 ? sameCategory : base;

    // pick 4 items around current index for variety
    const start = Math.max(0, currentIndex);
    const picked = [...pool].slice(start, start + 4);
    return picked.slice(0, 4) as ProductWithExtras[];
  }, [productSlug, product]);

  /* Variant selection */
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setSelectedVariant(product?.variants?.[0] ?? null), 0);
    return () => clearTimeout(t);
  }, [productSlug, product?.variants]);

  /* Lightbox */
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<ActiveMedia | null>(null);

  function openLightbox(media: ActiveMedia) {
    setActiveMedia(media);
    setIsLightboxOpen(true);
  }
  function closeLightbox() {
    setIsLightboxOpen(false);
  }

  useEffect(() => {
    if (!isLightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  /* Next/Prev product */
  function goRelative(offset: number) {
    const currentIndex = babyCareProducts.findIndex((p) => p.slug === productSlug);
    const safeCurrent = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (safeCurrent + offset + babyCareProducts.length) % babyCareProducts.length;

    const nextThemeIndex = (themeIndex + 1) % THEMES.length;
    const nextSlug = babyCareProducts[nextIndex]?.slug;
    if (!nextSlug) return;

    router.push(`/babyCareProduct/${nextSlug}?theme=${nextThemeIndex}`);
  }

  /* Not found */
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.pageBg }}>
        <h2 className="text-xl font-semibold" style={{ color: theme.pageText }}>
          Product Not Found
        </h2>
      </div>
    );
  }

  const themedProduct: Product = {
    ...product,
    background: theme.bg,
    foreground: theme.fg,
  };

  /* Derived display data */
  const rating = clamp(product.rating ?? 4.8, 0, 5);
  const reviewCount = product.reviewCount ?? 11243;
  const badge = product.badge ?? "Bestseller";
  const subscriptionNote =
    product.subscriptionNote ?? "30-day supply delivered monthly. Pause or cancel anytime.";

  const benefits = product.benefits ?? [
    "Designed for everyday comfort and consistency",
    "Supports a healthy routine and digestion",
    "Gentle formula suitable for daily use",
    "Made with quality and safety in mind",
  ];

  /* Media selection */
  const variantImages = (product.variants ?? []).map((v) => v.image).filter((s): s is string => Boolean(s));
  const heroImg = selectedVariant?.image ?? safeIdx(variantImages, 0) ?? "/placeholder.png";

  // You used product.video in your code; keep it consistent
  const videoUrl = product.video;
  const videoPoster = product.videoPoster ?? heroImg;
  const heroKind: MediaKind = videoUrl ? "video" : "image";

  const galleryFromProduct = (product.galleryImages ?? []).filter((s): s is string => Boolean(s));
  const galleryPool = galleryFromProduct.length > 0 ? galleryFromProduct : variantImages;

  const g1 = safeIdx(galleryPool, 1) ?? heroImg;
  const g2 = safeIdx(galleryPool, 2) ?? heroImg;
  const g3 = safeIdx(galleryPool, 3) ?? heroImg;

  // relatedProducts computed above to avoid conditional hook call

  return (
    <div className="min-h-screen lg:pb-16 w-full" style={{ backgroundColor: theme.pageBg, color: theme.pageText }}>
      <div className=" pt-4">
        <div className="pl-24">
 <Breadcrumbs
          theme={theme}
          productName={product.name}
          onGoHome={() => router.push("/")}
          onGoListing={() => router.push("/babyCareProduct")}
          
        />
        </div>
       
        {/* ───────────────── main grid ───────────────── */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.55fr_1fr] items-start w-full ">
          {/* LEFT */}
          <div className="space-y-6 pl-24">
            {/* Hero: video if exists else image. Click opens fullscreen */}
            <div
              className="rounded-xs border overflow-hidden bg-white/60 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
              style={{ borderColor: theme.cardBorder }}
            >
              <div
                className="relative w-full aspect-[16/10] md:aspect-video"
                style={{
                  background: `radial-gradient(1200px 500px at 50% 45%, ${theme.glowColor}1f 0%, transparent 60%)`,
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (heroKind === "video" && videoUrl) {
                      openLightbox({ kind: "video", src: videoUrl, poster: videoPoster });
                    } else {
                      openLightbox({ kind: "image", src: heroImg, alt: product.name });
                    }
                  }}
                  className="absolute inset-0 w-full h-full cursor-zoom-in z-10"
                  aria-label="Open fullscreen preview"
                >
                  <span className="sr-only">Open fullscreen preview</span>
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${heroKind}-${heroImg}-${videoUrl ?? ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    {videoUrl ? (
                      <video
                        className="w-full h-full object-fill rounded-2xl md:object-cover drop-shadow-[0_24px_40px_rgba(0,0,0,0.15)]"
                        src={videoUrl}
                        poster={videoPoster}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <Image
                        src={heroImg}
                        alt={product.name}
                        fill
                        priority
                        className="object-contain p-6 md:p-12 drop-shadow-[0_24px_40px_rgba(0,0,0,0.15)]"
                      />
                    )}

                    {videoUrl ? (
                      <div className="absolute left-6 bottom-6">
                        <div
                          className="px-3 py-1.5 rounded-full text-xs font-semibold border bg-white/70 backdrop-blur"
                          style={{ borderColor: theme.cardBorder, color: theme.pageText }}
                        >
                          Video Preview
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Gallery blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[g1, g2, g3].map((src, idx) => (
                <button
                  key={`${src}-${idx}`}
                  type="button"
                  onClick={() => openLightbox({ kind: "image", src, alt: "Product gallery" })}
                  className="text-left rounded-xl border overflow-hidden bg-white/60 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
                  style={{ borderColor: theme.cardBorder }}
                  aria-label="Open gallery fullscreen"
                >
                  <div className="relative w-full aspect-16/10">
                    <Image src={src} alt="Product gallery" fill className="object-contain" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT sticky */}
          <aside className="lg:sticky lg:top-6 pr-24">
            <SectionCard borderColor={theme.cardBorder} subtleText={theme.subtleText}>
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">{product.name}</h1>

                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${theme.bg}14`, color: theme.headingColor }}
                >
                  {badge}
                </span>
              </div>

              <div className="mt-3">
                <RatingRow rating={rating} reviewCount={reviewCount} starColor={theme.starColor} subtleText={theme.subtleText} />
              </div>

              <p className="mt-4 text-sm leading-relaxed" style={{ color: theme.subtleText }}>
                {product.subDesc1}
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-full py-3.5 font-semibold shadow-[0_14px_40px_rgba(0,0,0,0.15)] transition hover:-translate-y-px hover:opacity-95 active:scale-[0.99]"
                style={{ backgroundColor: theme.bg, color: theme.fg }}
              >
                Purchase Now
              </button>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: theme.divider }}>
                <p className="text-sm font-bold" style={{ color: theme.headingColor }}>
                  Benefits
                </p>

                <ul className="mt-3 space-y-2.5">
                  {benefits.slice(0, 4).map((b, idx) => (
                    <li key={`${b}-${idx}`} className="flex gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: theme.bg }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {product.bundle ? (
                  <div className="mt-6 rounded-xl border bg-white/70 p-4" style={{ borderColor: theme.cardBorder }}>
                    <p className="text-xs font-bold" style={{ color: theme.headingColor }}>
                      {product.bundle.title}
                    </p>
                    <p className="mt-1 text-sm" style={{ color: theme.subtleText }}>
                      {product.bundle.desc}
                    </p>
                  </div>
                ) : null}
              </div>
            </SectionCard>
          </aside>
        </div>

        {/* ─── bottom sections ─── */}
        <div className="mt-16 space-y-16">
          <div className="  ">
          <DescSection product={themedProduct} />
          <ProductCloseViewSection product={themedProduct} />

          </div>
          <ProductFeature product={themedProduct} />
          <ReviewSection product={themedProduct} theme={theme} />
          <FaqSection product={themedProduct} questionColor={theme.headingColor} answerColor={theme.subtleText} faqs={product.faqs} />
        </div>
                  {/* Related Products */}
        <section className="mt-20 px-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold" style={{ color: theme.headingColor }}>
                Related Products
              </h2>
              <p className="mt-1 text-sm" style={{ color: theme.subtleText }}>
                More picks you might love
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/babyCareProduct")}
              className="text-sm font-semibold underline underline-offset-4 hover:opacity-80 transition"
              style={{ color: theme.pageText }}
            >
              View all
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p) => {
              const thumb = pickThumb(p);
              const pThemeIndex = Math.abs((p.slug?.length ?? 0) + themeIndex) % THEMES.length;

              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => router.push(`/babyCareProduct/${p.slug}?theme=${pThemeIndex}`)}
                  className="text-left rounded-2xl border bg-white/65 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.07)] overflow-hidden transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
                  style={{ borderColor: theme.cardBorder }}
                >
                  <div
                    className="relative w-full aspect-[16/11]"
                    style={{
                      background: `radial-gradient(900px 350px at 50% 35%, ${theme.glowColor}14 0%, transparent 60%)`,
                    }}
                  >
                    <Image src={thumb} alt={p.name} fill className="object-contain p-5" />
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-extrabold leading-snug line-clamp-2">{p.name}</p>
                    <p className="mt-1 text-xs" style={{ color: theme.subtleText }}>
                      {(p.category ?? "Baby Care").toString()}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2">
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                        style={{ backgroundColor: `${theme.bg}14`, color: theme.headingColor }}
                      >
                        Explore
                      </span>
                      <span className="text-[11px] font-semibold" style={{ color: theme.subtleText }}>
                        Tap to view
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* Fullscreen viewer */}
      <Lightbox open={isLightboxOpen} media={activeMedia} onClose={closeLightbox} />
    </div>
  );
};

export default ProductDetailPage;