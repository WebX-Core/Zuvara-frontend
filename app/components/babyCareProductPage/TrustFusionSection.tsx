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

// const sectionTitle =
//   "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function TrustFusionSection({
  theme,
  comparisonRows,
  images,
}: TrustFusionSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
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
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
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

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
      return;
    }

    goPrev();
  };

  return (
    <section className="immersive-section relative px-6  lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-44 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.12) }}
      />

      <div className="mx-auto max-w-7xl perspective-1200px">
        <div className=" flex flex-col  sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span
              className="flex items-center gap-2 py-2 text-lg font-semibold sm:text-xl"
              style={{ color: theme.accent }}
            >
              Hear from our wonderful customers
            </span>
            <p
              className="text-sm hidden sm:block"
              style={{ color: hexToRgba(theme.accent, 0.68) }}
            >
              Swipe through real feedback from people who trust
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 bg-white! items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.92),
                color: theme.accent,
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 bg-white! items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.92),
                color: theme.accent,
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${safeActiveIndex * (100 / visibleCards)}%)`,
            }}
          >
            {trustFusionTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0  pt-2 lg:w-1/2"
              >
                <article
                  className="fx-rise fx-float  flex h-full min-h-92 flex-col items-center rounded-[2.25rem] border p-6 text-center md:min-h-100 md:p-7"
                  style={{
                    borderColor: `${theme.border}66`,
                    backgroundColor: hexToRgba(theme.pageBg, 0.96),
                  }}
                >
                  <div className="flex w-full items-start justify-between gap-3">
                    <span
                      className="w-fit rounded-full px-3.5 py-1.5 text-xs font-semibold"
                      style={{
                        backgroundColor: hexToRgba(theme.containerBg, 0.36),
                        color: hexToRgba(theme.accent, 0.75),
                      }}
                    >
                      {testimonial.badge}
                    </span>
                    <span
                      className="shrink-0 text-sm text-right"
                      style={{ color: hexToRgba(theme.accent, 0.48) }}
                    >
                      {testimonial.time}
                    </span>
                  </div>

                  <div
                    className="relative mt-5 h-16 w-16 overflow-hidden rounded-full border md:h-18 md:w-18"
                    style={{ borderColor: `${theme.border}66` }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-5 flex flex-col items-center gap-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <Star
                            key={index}
                            size={17}
                            fill="#fbbf24"
                            color="#fbbf24"
                          />
                        ),
                      )}
                    </div>

                    <div>
                      <p
                        className="text-base font-semibold md:text-lg"
                        style={{ color: theme.accent }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: hexToRgba(theme.accent, 0.62) }}
                      >
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-5 text-base leading-relaxed md:text-lg"
                    style={{ color: hexToRgba(theme.accent, 0.82) }}
                  >
                    {testimonial.text}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTestimonial(index)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: safeActiveIndex === index ? "2.8rem" : "0.7rem",
                backgroundColor:
                  safeActiveIndex === index
                    ? theme.accent
                    : "rgba(132,170,165,0.35)",
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl space-y-8">
        <div className="fx-rise">
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            Why Zuvara
            <span className="font-light italic opacity-60"> Wins</span>
          </h2>
          <p
            className="mt-2 text-sm font-medium"
            style={{ color: hexToRgba(theme.accent, 0.68) }}
          >
            A quick side-by-side look at the care your baby deserves.
          </p>
        </div>

        <div
          className="flex items-center justify-center rounded-4xl px-2 sm:px-4"
          style={{ backgroundColor: hexToRgba(theme.containerBg, 0.2) }}
        >
          <div className="w-full">
            <div className="relative h-55 w-full overflow-hidden rounded-3xl sm:h-75 md:h-115 lg:h-140">
              <h2
                className="absolute left-3 top-3 z-10 text-2xl font-bold uppercase sm:left-4 sm:top-4 sm:text-4xl md:text-6xl lg:text-7xl"
                style={{ color: hexToRgba(theme.accent, 0.75) }}
              >
                Zuvara
              </h2>
              <Image
                src={images.comparisonZuvara}
                alt="Zuvara care"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
              <h2 className="absolute right-3 top-3 z-10 text-2xl font-bold uppercase text-zinc-500/70 sm:right-4 sm:top-4 sm:text-4xl md:text-6xl lg:text-7xl">
                Ordinary
              </h2>
            </div>
          </div>
        </div>

        {/* ── MOBILE: sticky feature col + scrollable brand cols ── */}
        <div className="fx-rise overflow-visible md:hidden">
          <div className="py-4" data-carousel-swipe-ignore="true">
            <div
              className="overflow-hidden rounded-[1.4rem] border"
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

        {/* ── DESKTOP ── */}
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
