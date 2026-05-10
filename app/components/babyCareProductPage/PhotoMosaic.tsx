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

const PAGE_SIZE = 4;

export default function PhotoMosaic({
  images,
  className,
  theme,
}: PhotoMosaicProps) {
  const [activePage, setActivePage] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const safeImages = images.filter(Boolean);
  const desktopPages: string[][] = [];
  const mobilePages = safeImages.map((image) => [image]);

  for (let index = 0; index < safeImages.length; index += PAGE_SIZE) {
    desktopPages.push(safeImages.slice(index, index + PAGE_SIZE));
  }

  const pages = isMobile ? mobilePages : desktopPages;

  useEffect(() => {
    if (pages.length <= 1) return;

    const timer = window.setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [pages.length]);

  if (!pages.length) {
    return null;
  }

  const safeActivePage = activePage % pages.length;

  const goPrev = () => {
    setActivePage((current) =>
      current === 0 ? pages.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActivePage((current) => (current + 1) % pages.length);
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

  return (
    <div className={`relative overflow-hidden md:p-0 ${className ?? ""}`}>
      <div className="mb-5 flex items-center justify-between gap-3 md:mb-6">
        <div
          className="rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] md:text-xs"
          style={{
            color: theme ? theme.accent : "#111827",
          }}
        >
          Comfort Gallery
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 bg-white items-center justify-center rounded-full border text-sm transition-transform duration-300 hover:scale-[1.04]"
            style={{
              borderColor: theme ? `${theme.border}55` : undefined,

              color: theme ? theme.accent : "#111827",
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 bg-white items-center justify-center rounded-full border text-sm transition-transform duration-300 hover:scale-[1.04]"
            style={{
              borderColor: theme ? `${theme.border}55` : undefined,

              color: theme ? theme.accent : "#111827",
            }}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${safeActivePage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={`page-${pageIndex}`}
              className={`grid min-w-full flex-none gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2 xl:grid-cols-4"}`}
            >
              {page.map((src, cardIndex) => (
                <article
                  key={`${src}-${cardIndex}`}
                  className={`group relative overflow-hidden rounded-[1.75rem] border ${isMobile ? "min-h-88" : "min-h-52 md:min-h-64 xl:min-h-[calc(70vh-8.5rem)]"}`}
                  style={{
                    borderColor: theme ? `${theme.border}44` : undefined,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Comfort gallery ${pageIndex * PAGE_SIZE + cardIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center items-center gap-2 md:mt-6">
        {pages.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => setActivePage(index)}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: index === safeActivePage ? "2.75rem" : "0.7rem",
              backgroundColor: theme
                ? index === safeActivePage
                  ? theme.accent
                  : hexToRgba(theme.accent, 0.22)
                : index === safeActivePage
                  ? "#111827"
                  : "rgba(17,24,39,0.22)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
