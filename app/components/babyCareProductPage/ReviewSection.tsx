"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/type/babyCareProductType";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

type Theme = {
  bg: string;
  headingColor: string;
  subtleText: string;
  cardBg: string;
  cardBorder: string;
  pageText: string;
  starColor: string;
};

type ReviewBase = {
  id: string | number;
  userName: string;
  userInitial: string;
  rating: number;
  comment: string;
  countryCode?: string;
  verifiedLabel?: string;
  date?: string;
  helpfulYes?: number;
  helpfulNo?: number;
};

interface ReviewSectionProps {
  product: Product & {
    reviewsData?: ReviewBase[];
  };
  className?: string;
  theme?: Theme;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatDateFallback(input?: string): string {
  if (input && input.trim().length > 0) return input;
  return "—";
}

function getFlagEmoji(countryCode?: string): string | null {
  if (!countryCode) return null;
  const code = countryCode.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code)) return null;

  const a = 0x1f1e6;
  const char0 = code.charCodeAt(0) - 65 + a;
  const char1 = code.charCodeAt(1) - 65 + a;
  return String.fromCodePoint(char0, char1);
}

function StarsRow(props: { rating: number; starColor: string }) {
  const rounded = clamp(Math.round(props.rating), 0, 5);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const active = index < rounded;

        return (
          <Star
            key={index}
            size={17}
            className={active ? "" : "opacity-35"}
            fill={active ? props.starColor : "transparent"}
            stroke={props.starColor}
          />
        );
      })}
    </div>
  );
}

function VerifiedBadge(props: { label: string; subtleText: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <BadgeCheck size={16} className="text-emerald-700" />
      <span
        className="text-sm font-semibold"
        style={{ color: props.subtleText }}
      >
        {props.label}
      </span>
    </div>
  );
}

export default function ReviewSection({
  product,
  className,
  theme,
}: ReviewSectionProps) {
  const headingColor = theme?.headingColor || product.background || "#0f172a";
  const subtleText = theme?.subtleText || "#64748b";
  const pageText = theme?.pageText || "#0f172a";
  const divider = theme?.cardBorder || "rgba(0,0,0,0.10)";
  const starColor = theme?.starColor || "#f59e0b";
  const cardBg = theme?.cardBg || "rgba(255,255,255,0.94)";

  const reviews = useMemo<ReviewBase[]>(
    () => (Array.isArray(product.reviewsData) ? product.reviewsData : []),
    [product.reviewsData],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const maxIndex = Math.max(0, reviews.length - visibleCards);
  const safeActiveIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
        return;
      }

      if (window.innerWidth < 1024) {
        setVisibleCards(2);
        return;
      }

      setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const goPrev = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section className={className ?? ""}>
      <div className="space-y-2 text-center">
        <h2
          className="text-2xl font-semibold tracking-tight md:text-4xl"
          style={{ color: headingColor }}
        >
          Reviews
        </h2>
        <p className="text-sm md:text-base" style={{ color: subtleText }}>
          Real stories from parents like you.
        </p>
      </div>

      {reviews.length === 0 ? (
        <div
          className="mt-6 rounded-2xl border py-12 text-center"
          style={{ borderColor: divider }}
        >
          <p className="font-semibold" style={{ color: subtleText }}>
            No reviews yet for this product.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: subtleText }}>
              Swipe through real feedback from parents
            </p>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: divider,
                  backgroundColor: cardBg,
                  color: headingColor,
                }}
                aria-label="Previous reviews"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: divider,
                  backgroundColor: cardBg,
                  color: headingColor,
                }}
                aria-label="Next reviews"
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
              {reviews.map((review) => {
                const flag = getFlagEmoji(review.countryCode);
                const verifiedLabel =
                  review.verifiedLabel ?? "Verified Reviewer";
                const dateText = formatDateFallback(review.date);
                const yes = review.helpfulYes ?? 0;
                const no = review.helpfulNo ?? 0;

                return (
                  <div
                    key={review.id}
                    className="w-full shrink-0 px-2.5 md:w-1/2 lg:w-1/3"
                  >
                    <article
                      className="flex h-full min-h-92 flex-col items-center rounded-[2.25rem] border p-6 text-center md:min-h-100 md:p-7"
                      style={{
                        borderColor: divider,
                        backgroundColor: cardBg,
                      }}
                    >
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold md:h-18 md:w-18"
                        style={{
                          backgroundColor: `${headingColor}14`,
                          color: headingColor,
                        }}
                      >
                        {review.userInitial}
                      </div>

                      <div className="mt-5 flex flex-col items-center gap-3">
                        <StarsRow
                          rating={review.rating}
                          starColor={starColor}
                        />

                        <div>
                          <p
                            className="text-base font-semibold md:text-lg"
                            style={{ color: headingColor }}
                          >
                            {review.userName}
                          </p>
                          <div
                            className="mt-1 flex items-center justify-center gap-2 text-sm"
                            style={{ color: subtleText }}
                          >
                            {flag ? (
                              <span
                                aria-label={review.countryCode}
                                title={review.countryCode}
                              >
                                {flag}
                              </span>
                            ) : null}
                            <span>{dateText}</span>
                          </div>
                        </div>

                        <VerifiedBadge
                          label={verifiedLabel}
                          subtleText={subtleText}
                        />
                      </div>

                      <p
                        className="mt-5 text-base leading-relaxed md:text-lg"
                        style={{ color: pageText }}
                      >
                        {review.comment}
                      </p>

                      <div
                        className="mt-6 flex items-center gap-4 text-sm"
                        style={{ color: subtleText }}
                      >
                        <span>Helpful?</span>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 font-semibold transition hover:opacity-80"
                          style={{ color: pageText }}
                          aria-label="Helpful yes"
                        >
                          <ThumbsUp size={16} />
                          <span>{yes}</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 font-semibold transition hover:opacity-80"
                          style={{ color: pageText }}
                          aria-label="Helpful no"
                        >
                          <ThumbsDown size={16} />
                          <span>{no}</span>
                        </button>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: safeActiveIndex === index ? "2.8rem" : "0.7rem",
                  backgroundColor:
                    safeActiveIndex === index
                      ? headingColor
                      : "rgba(132,170,165,0.35)",
                }}
                aria-label={`Go to review slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{ borderColor: divider, color: pageText }}
            >
              Show more <ChevronDown size={16} />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
