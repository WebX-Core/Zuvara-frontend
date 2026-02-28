"use client";

import React, { useMemo } from "react";
import type { Product } from "@/type/babyCareProductType";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  BadgeCheck,
  ChevronDown,
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
  rating: number; // 0..5
  comment: string;

  // optional extras (if you have them)
  countryCode?: string; // "US", "NP", etc
  verifiedLabel?: string; // "Verified Reviewer" / "Verified Buyer"
  date?: string; // "02/27/26"
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

/* ───────────────────────── helpers ───────────────────────── */

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatDateFallback(input?: string): string {
  // If you already store "02/27/26", return it directly.
  if (input && input.trim().length > 0) return input;
  return "—";
}

function getFlagEmoji(countryCode?: string): string | null {
  if (!countryCode) return null;
  const code = countryCode.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code)) return null;

  const A = 0x1f1e6;
  const char0 = code.charCodeAt(0) - 65 + A;
  const char1 = code.charCodeAt(1) - 65 + A;
  return String.fromCodePoint(char0, char1);
}

/* ───────────────────────── UI bits ───────────────────────── */

function StarsRow(props: { rating: number; starColor: string }) {
  const rounded = clamp(Math.round(props.rating), 0, 5);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const active = i < rounded;
        return (
          <Star
            key={i}
            size={14}
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
    <div className="flex items-center gap-2 mt-1">
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

/* ───────────────────────── Component ───────────────────────── */

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

  const reviews = useMemo<ReviewBase[]>(() => {
    return Array.isArray(product.reviewsData) ? product.reviewsData : [];
  }, [product.reviewsData]);

  return (
    <section className={className ?? "px-24"}>
      {/* Header */}
      <div className="space-y-2">
        <h2
          className="text-xl md:text-3xl font-extrabold tracking-tight"
          style={{ color: headingColor }}
        >
          Reviews
        </h2>
        <p className="text-sm md:text-base" style={{ color: subtleText }}>
          Real stories from parents like you.
        </p>
      </div>

      {/* List */}
      <div
        className="mt-6 rounded-2xl border bg-white/60 backdrop-blur"
        style={{ borderColor: divider }}
      >
        {reviews.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-semibold" style={{ color: subtleText }}>
              No reviews yet for this product.
            </p>
          </div>
        ) : (
          <div>
            {reviews.map((review, idx) => {
              const flag = getFlagEmoji(review.countryCode);
              const verifiedLabel =
                review.verifiedLabel ?? "Verified Reviewer";

              const dateText = formatDateFallback(review.date);

              const yes = review.helpfulYes ?? 0;
              const no = review.helpfulNo ?? 0;

              return (
                <div key={review.id}>
                  {/* Row */}
                  <div className="px-4 md:px-6 py-5 md:py-6">
                    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_110px] gap-4 md:gap-6 items-start">
                      {/* Left: user */}
                      <div>
                        <div className="flex items-center gap-2">
                          <p
                            className="font-extrabold text-base"
                            style={{ color: pageText }}
                          >
                            {review.userName}
                          </p>
                          {flag ? (
                            <span
                              className="text-base leading-none"
                              aria-label={review.countryCode}
                              title={review.countryCode}
                            >
                              {flag}
                            </span>
                          ) : null}
                        </div>

                        <VerifiedBadge
                          label={verifiedLabel}
                          subtleText={subtleText}
                        />
                      </div>

                      {/* Middle: stars + text */}
                      <div className="space-y-2">
                        <StarsRow rating={review.rating} starColor={starColor} />
                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{ color: pageText }}
                        >
                          {review.comment}
                        </p>
                      </div>

                      {/* Right: date */}
                      <div className="md:text-right">
                        <p
                          className="text-sm font-bold"
                          style={{ color: headingColor }}
                        >
                          {dateText}
                        </p>
                      </div>
                    </div>

                    {/* Helpful row (bottom-right like screenshot) */}
                    <div className="mt-4 flex items-center justify-end gap-4">
                      <p className="text-sm" style={{ color: subtleText }}>
                        Was this review helpful?
                      </p>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
                        style={{ color: pageText }}
                        aria-label="Helpful yes"
                      >
                        <ThumbsUp size={16} />
                        <span>{yes}</span>
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition"
                        style={{ color: pageText }}
                        aria-label="Helpful no"
                      >
                        <ThumbsDown size={16} />
                        <span>{no}</span>
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  {idx !== reviews.length - 1 ? (
                    <div
                      className="h-px w-full"
                      style={{ backgroundColor: divider }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Optional "Show more" footer (nice touch like real stores) */}
      {reviews.length > 0 ? (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-babyCare backdrop-blur text-sm font-semibold hover:opacity-90 transition"
            style={{ borderColor: divider, color: pageText }}
          >
            Show more <ChevronDown size={16} />
          </button>
        </div>
      ) : null}
    </section>
  );
}