"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PhotoMosaicProps = {
  images: string[];
  className?: string;
  theme?: ThemePreset;
};

const DESKTOP_VISIBLE = 4; // Show 4 images at once on desktop
const SLIDE_BY = 1; // Slide by 1 image at a time

export default function PhotoMosaic({
  images,
  className,
  theme,
}: PhotoMosaicProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const safeImages = images.filter(Boolean);

  const visibleCount = isMobile ? 1 : DESKTOP_VISIBLE;
  const maxIndex = Math.max(0, safeImages.length - visibleCount);

  useEffect(() => {
    if (safeImages.length <= visibleCount) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        if (current >= maxIndex) return 0;
        return current + SLIDE_BY;
      });
    }, 4500);

    return () => window.clearInterval(timer);
  }, [safeImages.length, visibleCount, maxIndex]);

  const goPrev = () => {
    setActiveIndex((current) => Math.max(0, current - SLIDE_BY));
  };

  const goNext = () => {
    setActiveIndex((current) => Math.min(maxIndex, current + SLIDE_BY));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (
      !isMobile ||
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

  if (safeImages.length === 0) {
    return null;
  }

  // Calculate the percentage to shift
  const cardWidthPercent = 100 / visibleCount;
  const translatePercent = -(activeIndex * cardWidthPercent);

  return (
    <div className={`relative overflow-hidden md:p-0 ${className ?? ""}`}>
      <div className="mb-5 flex items-start justify-between gap-3 md:mb-6">
        <div
          className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] md:text-xs border"
          style={{
            borderColor: theme ? `${theme.border}55` : undefined,
            color: theme ? theme.accent : "#111827",
          }}
        >
          Comfort Gallery
        </div>
      </div>

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(${translatePercent}%)` }}
        >
          {safeImages.map((src, index) => (
            <article
              key={`${src}-${index}`}
              className={`flex-shrink-0 ${isMobile ? "w-full" : "w-1/4"} px-2`}
            >
              <div
                className={`group relative overflow-hidden rounded-[1.75rem] border ${isMobile ? "min-h-88" : "min-h-52 md:min-h-64 xl:min-h-[calc(70vh-8.5rem)]"}`}
                style={{
                  borderColor: theme ? `${theme.border}44` : undefined,
                  boxShadow: `0 20px 48px ${hexToRgba(theme?.accent ?? "#111827", 0.1)}`,
                }}
              >
                <Image
                  src={src}
                  alt={`Comfort gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center items-center gap-2 md:mt-6">
        {Array.from({ length: Math.ceil(safeImages.length / SLIDE_BY) }).map((_, index) => {
          const isActive = index === Math.floor(activeIndex / SLIDE_BY);
          return (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => setActiveIndex(Math.min(index * SLIDE_BY, maxIndex))}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: isActive ? "2.75rem" : "0.7rem",
                backgroundColor: theme
                  ? isActive
                    ? theme.accent
                    : hexToRgba(theme.accent, 0.22)
                  : isActive
                    ? "#111827"
                    : "rgba(17,24,39,0.22)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
