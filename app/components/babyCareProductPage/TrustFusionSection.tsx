"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import { trustFusionTestimonials } from "@/app/components/babyCareProductPage/trustFusionTestimonials";

type ComparisonRow = {
  label: string;
  zuvara: string;
  ordinary: string;
};

type TrustFusionSectionProps = {
  theme: ThemePreset;
  comparisonRows: ComparisonRow[];
  images: {
    comparisonZuvara: string;
    comparisonOrdinary: string;
  };
};

export default function TrustFusionSection({
  theme,
  comparisonRows,
  images,
}: TrustFusionSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const maxIndex = Math.max(0, trustFusionTestimonials.length - visibleCards);
  const safeActiveIndex = Math.min(activeTestimonial, maxIndex);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 1024) {
        setVisibleCards(1);
        return;
      }

      setVisibleCards(2);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const goPrev = () => {
    setActiveTestimonial((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const goNext = () => {
    setActiveTestimonial((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(false);

    if (
      visibleCards !== 1 ||
      touchStartXRef.current == null ||
      touchStartYRef.current == null
    ) {
      return;
    }

    const touchEndX =
      event.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const touchEndY =
      event.changedTouches[0]?.clientY ?? touchStartYRef.current;
    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    // Reduced threshold for better responsiveness
    if (Math.abs(deltaX) < 30 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
      return;
    }

    goPrev();
  };

  return (
    <section className="immersive-section relative px-4 py-10 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-44 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.12) }}
      />

      <div className="mx-auto max-w-7xl perspective-1200px">
        {/* Header Section - More Prominent */}
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            What Parents
            <span className="font-light italic opacity-60"> Are Saying</span>
          </h2>
          <p
            className="text-xs md:text-base font-medium max-w-2xl mx-auto"
            style={{ color: hexToRgba(theme.accent, 0.68) }}
          >
            Real experiences from families who trust Zuvara for their little
            ones
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop Navigation Buttons */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              borderColor: theme.accent,
              backgroundColor: "white",
              color: theme.accent,
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              borderColor: theme.accent,
              backgroundColor: "white",
              color: theme.accent,
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden px-0 lg:px-16 cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              touchAction: "pan-y",
              userSelect: isDragging ? "none" : "auto",
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${safeActiveIndex * (100 / visibleCards)}%)`,
              }}
            >
              {trustFusionTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 lg:w-1/2 px-2 md:px-3"
                >
                  <article
                    className="flex h-full flex-col rounded-2xl md:rounded-3xl border-2 p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                    style={{
                      borderColor: `${theme.border}88`,
                      minHeight: "360px",
                    }}
                  >
                    {/* Header with Badge and Time */}
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <span
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: hexToRgba(theme.accent, 0.1),
                          color: theme.accent,
                        }}
                      >
                        {testimonial.badge}
                      </span>
                      <span
                        className="text-xs md:text-sm font-medium"
                        style={{ color: hexToRgba(theme.accent, 0.5) }}
                      >
                        {testimonial.time}
                      </span>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div
                        className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full border-2 shrink-0"
                        style={{ borderColor: theme.accent }}
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-base md:text-lg font-bold mb-0.5 md:mb-1 truncate"
                          style={{ color: theme.accent }}
                        >
                          {testimonial.name}
                        </p>
                        <p
                          className="text-xs md:text-sm font-medium truncate"
                          style={{ color: hexToRgba(theme.accent, 0.6) }}
                        >
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 md:gap-1 mb-4 md:mb-6">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className="md:w-[20px] md:h-[20px]"
                            fill="#fbbf24"
                            color="#fbbf24"
                          />
                        ),
                      )}
                    </div>

                    {/* Testimonial Text */}
                    <p
                      className="text-sm md:text-base lg:text-lg leading-relaxed flex-1"
                      style={{ color: hexToRgba(theme.accent, 0.85) }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg active:scale-95 transition-transform"
              style={{
                borderColor: theme.accent,
                backgroundColor: "white",
                color: theme.accent,
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg active:scale-95 transition-transform"
              style={{
                borderColor: theme.accent,
                backgroundColor: "white",
                color: theme.accent,
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Pagination Dots - Larger & More Visible */}
        <div className="mt-6 md:mt-8 flex justify-center gap-2 md:gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTestimonial(index)}
              className="h-2.5 md:h-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                width: safeActiveIndex === index ? "2.5rem" : "0.75rem",
                backgroundColor:
                  safeActiveIndex === index
                    ? theme.accent
                    : hexToRgba(theme.accent, 0.25),
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="mx-auto mt-16 md:mt-20 max-w-7xl space-y-8">
        <div className="fx-rise text-center">
          <h2
            className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            Why Zuvara
            <span className="font-light italic opacity-60"> Wins</span>
          </h2>
          <p
            className="mt-2 text-xs md:text-sm font-medium"
            style={{ color: hexToRgba(theme.accent, 0.68) }}
          >
            A quick side-by-side look at the care your baby deserves.
          </p>
        </div>

        <div
          className="flex items-center justify-center rounded-3xl md:rounded-4xl px-2 sm:px-4"
          style={{ backgroundColor: hexToRgba(theme.containerBg, 0.2) }}
        >
          <div className="w-full">
            <div className="relative h-55 w-full overflow-hidden rounded-2xl md:rounded-3xl sm:h-75 md:h-115 lg:h-140">
              <Image
                src={images.comparisonZuvara}
                alt="Zuvara care"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* MOBILE: sticky feature col + scrollable brand cols */}
        <div className="fx-rise overflow-visible md:hidden">
          <div className="py-4" data-carousel-swipe-ignore="true">
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: `${theme.border}33` }}
            >
              <div className="flex">
                {/* Sticky feature column */}
                <div
                  className="shrink-0 border-r"
                  style={{
                    width: "10rem",
                    borderColor: `${theme.border}33`,
                    backgroundColor: theme.pageBg,
                  }}
                >
                  {/* Header */}
                  <div
                    className="flex h-10 items-center px-3 text-[11px] font-semibold text-white uppercase tracking-[0.18em]"
                    style={{ backgroundColor: theme.accent }}
                  >
                    Feature
                  </div>

                  {/* Feature rows */}
                  {comparisonRows.map((row, idx) => (
                    <div
                      key={row.label}
                      className="flex min-h-16 items-center border-t px-3 py-2 text-[13px] font-medium leading-snug"
                      style={{
                        borderColor: `${theme.border}22`,
                        backgroundColor:
                          idx % 2 === 0
                            ? hexToRgba(theme.pageBg, 0.6)
                            : theme.pageBg,
                        color: hexToRgba(theme.accent, 0.84),
                      }}
                    >
                      {row.label}
                    </div>
                  ))}
                </div>

                {/* Scrollable brand columns */}
                <div
                  className="overflow-x-auto overscroll-x-contain"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex" style={{ minWidth: "max-content" }}>
                    {/* Zuvara column */}
                    <div className="w-34 shrink-0">
                      {/* Header */}
                      <div
                        className="flex h-10 items-center justify-center"
                        style={{ backgroundColor: theme.accent }}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-white">
                          Zuvara
                        </p>
                      </div>

                      {comparisonRows.map((row) => (
                        <div
                          key={row.label}
                          className="flex min-h-16 bg-white items-center justify-center border-t border-l px-3 py-2 text-center text-[13px] font-semibold"
                          style={{
                            borderColor: `${theme.border}33`,
                            color: theme.accent,
                          }}
                        >
                          {row.zuvara}
                        </div>
                      ))}
                    </div>

                    {/* Ordinary column */}
                    <div className="w-34 shrink-0">
                      {/* Header */}
                      <div
                        className="flex h-10 items-center justify-center border-l"
                        style={{
                          borderColor: `${theme.border}33`,
                          backgroundColor: theme.accent,
                        }}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-white">
                          Ordinary
                        </p>
                      </div>

                      {comparisonRows.map((row) => (
                        <div
                          key={row.label}
                          className="flex min-h-16 bg-white items-center justify-center border-t border-l px-3 py-2 text-center text-[13px]"
                          style={{
                            borderColor: `${theme.border}33`,
                            color: hexToRgba(theme.accent, 0.96),
                          }}
                        >
                          {row.ordinary}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div
          className="fx-rise hidden overflow-hidden rounded-3xl md:block"
          style={{
            border: `1px solid ${theme.border}33`,
            backgroundColor: hexToRgba(theme.pageBg, 0.9),
          }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-12 text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: theme.accent }}
          >
            <div className="col-span-6 px-4 py-2.5 text-white">Feature</div>
            <div
              className="col-span-3 border-l px-4 py-2.5 text-center text-white"
              style={{ borderColor: `${theme.border}33` }}
            >
              Zuvara
            </div>
            <div
              className="col-span-3 border-l px-4 py-2.5 text-center text-white"
              style={{ borderColor: `${theme.border}33` }}
            >
              Ordinary
            </div>
          </div>

          {/* Data rows */}
          {comparisonRows.map((row, idx) => (
            <div
              key={row.label}
              className="fx-float grid grid-cols-12 items-stretch text-sm"
              style={{
                backgroundColor:
                  idx % 2 === 0 ? hexToRgba(theme.pageBg, 0.6) : theme.pageBg,
              }}
            >
              <div
                className="col-span-6 flex min-h-16 items-center border-b px-4 py-2.5 text-base font-medium"
                style={{
                  borderColor: `${theme.border}22`,
                  color: theme.accent,
                }}
              >
                {row.label}
              </div>
              <div
                className="col-span-3 bg-white flex min-h-16 items-center justify-center border-b border-l px-4 py-2.5 text-center text-base font-semibold"
                style={{
                  borderColor: `${theme.border}33`,
                  color: theme.accent,
                }}
              >
                {row.zuvara}
              </div>
              <div
                className="col-span-3 bg-white flex min-h-16 items-center justify-center border-b border-l px-4 py-2.5 text-center text-base"
                style={{
                  borderColor: `${theme.border}33`,
                  color: hexToRgba(theme.accent, 0.7),
                }}
              >
                {row.ordinary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
