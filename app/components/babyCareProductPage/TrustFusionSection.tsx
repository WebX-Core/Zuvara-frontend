"use client";

import { useEffect, useState } from "react";
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

  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-44 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.12) }}
      />

      <div className="mx-auto max-w-7xl perspective-1200px">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span
              className="flex items-center gap-2 py-2 text-lg font-semibold sm:text-xl"
              style={{ color: theme.accent }}
            >
              Hear from our wonderful customers
            </span>
            <p
              className="text-sm"
              style={{ color: hexToRgba(theme.accent, 0.68) }}
            >
              Swipe through real feedback from people who trust
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
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
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
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

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${safeActiveIndex * (100 / visibleCards)}%)`,
            }}
          >
            {trustFusionTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 px-2.5 pt-2 lg:w-1/2"
              >
                <article
                  className="fx-rise fx-float  flex h-full min-h-92 flex-col items-center rounded-[2.25rem] border p-6 text-center md:min-h-100 md:p-7"
                  style={{
                    borderColor: `${theme.border}66`,
                    backgroundColor: hexToRgba(theme.pageBg, 0.96),
                  }}
                >
                  <div
                    className="relative h-16 w-16 overflow-hidden rounded-full border md:h-18 md:w-18"
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

                    <div className="flex min-w-72 justify-between">
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
                        className="text-sm"
                        style={{ color: hexToRgba(theme.accent, 0.48) }}
                      >
                        {testimonial.time}
                      </span>
                    </div>
                  </div>

                  <p
                    className="mt-5 text-base leading-relaxed md:text-lg"
                    style={{ color: hexToRgba(theme.accent, 0.82) }}
                  >
                    {testimonial.text}
                  </p>

                  <div
                    className="mt-6 flex items-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: hexToRgba(theme.accent, 0.62) }}
                  >
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                    Verified review
                  </div>
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

        <div className="fx-rise overflow-visible md:hidden">
          <div
            className="overflow-x-auto overscroll-x-contain px-3 py-4"
            data-carousel-swipe-ignore="true"
          >
            <div
              className="inline-block w-max min-w-full overflow-hidden rounded-[1.4rem] border bg-white/70 align-top"
              style={{ borderColor: `${theme.border}33` }}
            >
              <div
                className="grid min-w-max grid-cols-[10rem_8.5rem_8.5rem]"
                style={{ borderColor: `${theme.border}33` }}
              >
                <div
                  className="border-b px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    borderColor: `${theme.border}33`,
                    color: hexToRgba(theme.accent, 0.62),
                  }}
                >
                  Feature
                </div>
                <div
                  className="border-b border-l bg-white px-4 py-3 text-center"
                  style={{
                    borderColor: `${theme.border}33`,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <p
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: theme.accent }}
                  >
                    Zuvara
                  </p>
                </div>
                <div
                  className="border-b border-l bg-white px-4 py-3 text-center"
                  style={{
                    borderColor: `${theme.border}33`,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <p
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: hexToRgba(theme.accent, 0.72) }}
                  >
                    Ordinary
                  </p>
                </div>

                {comparisonRows.map((row, idx) => (
                  <div
                    key={row.label}
                    className="contents"
                  >
                    <div
                      className="flex min-h-18 items-center border-b px-4 py-4 text-sm font-medium leading-snug"
                      style={{
                        borderColor: `${theme.border}22`,
                        backgroundColor:
                          idx % 2 === 0
                            ? hexToRgba(theme.pageBg, 0.18)
                            : "transparent",
                        color: hexToRgba(theme.accent, 0.84),
                      }}
                    >
                      {row.label}
                    </div>
                    <div
                      className="flex min-h-18 items-center justify-center border-b border-l bg-white px-4 py-4 text-center text-sm font-semibold"
                      style={{
                        borderColor: `${theme.border}33`,
                        color: theme.accent,
                      }}
                    >
                      {row.zuvara}
                    </div>
                    <div
                      className="flex min-h-18 items-center justify-center border-b border-l bg-white px-4 py-4 text-center text-sm"
                      style={{
                        borderColor: `${theme.border}33`,
                        color: hexToRgba(theme.accent, 0.62),
                      }}
                    >
                      {row.ordinary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="fx-rise hidden overflow-hidden rounded-3xl md:block"
          style={{
            border: `1px solid ${theme.border}33`,
            backgroundColor: hexToRgba(theme.pageBg, 0.9),
          }}
        >
          <div
            className="grid grid-cols-12 text-[11px] font-semibold uppercase tracking-wide"
            style={{
              borderColor: `${theme.border}44`,
              color: hexToRgba(theme.accent, 0.62),
            }}
          >
            <div className="col-span-6 border-b px-4 py-3">Feature</div>
            <div
              className="col-span-3 border-b border-l bg-white px-4 py-3 text-center"
              style={{ borderColor: `${theme.border}33` }}
            >
              Zuvara
            </div>
            <div
              className="col-span-3 border-b border-l bg-white px-4 py-3 text-center"
              style={{ borderColor: `${theme.border}33` }}
            >
              Ordinary
            </div>
          </div>

          {comparisonRows.map((row, idx) => (
            <div
              key={row.label}
              className="fx-float grid grid-cols-12 items-stretch text-sm"
            >
              <div
                className="col-span-6 flex min-h-20 items-center border-b px-4 py-4 text-base font-medium"
                style={{
                  borderColor: `${theme.border}22`,
                  backgroundColor:
                    idx % 2 === 0 ? hexToRgba(theme.pageBg, 0.18) : "transparent",
                  color: hexToRgba(theme.accent, 0.82),
                }}
              >
                {row.label}
              </div>
              <div
                className="col-span-3 flex min-h-20 items-center justify-center border-b border-l bg-white px-4 py-4 text-center text-base font-semibold"
                style={{
                  borderColor: `${theme.border}33`,
                  color: theme.accent,
                }}
              >
                {row.zuvara}
              </div>
              <div
                className="col-span-3 flex min-h-20 items-center justify-center border-b border-l bg-white px-4 py-4 text-center text-base"
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
