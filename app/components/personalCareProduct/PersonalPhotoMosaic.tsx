"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalPhotoMosaicProps = {
  images: string[];
  className?: string;
  theme?: ThemePreset;
};

const PAGE_SIZE = 4;

export default function PersonalPhotoMosaic({
  images,
  className,
  theme,
}: PersonalPhotoMosaicProps) {
  const [activePage, setActivePage] = useState(0);
  const safeImages = images.filter(Boolean);
  const pages: string[][] = [];

  for (let index = 0; index < safeImages.length; index += PAGE_SIZE) {
    pages.push(safeImages.slice(index, index + PAGE_SIZE));
  }

  useEffect(() => {
    if (pages.length <= 1) return;

    const timer = window.setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [pages.length]);

  const currentPage =
    pages.length > 0 ? Math.min(activePage, pages.length - 1) : 0;

  if (!pages.length) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden p-4 md:p-0 ${className ?? ""}`}>
      <div className="mb-5 flex items-start justify-between gap-3 md:mb-6">
        <div
          className="rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] md:text-xs"
          style={{
            borderColor: theme ? `${theme.border}55` : undefined,
            backgroundColor: theme ? hexToRgba(theme.pageBg, 0.65) : undefined,
            color: theme ? theme.accent : "#111827",
          }}
        >
          Comfort Gallery
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setActivePage((current) =>
                current === 0 ? pages.length - 1 : current - 1,
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-transform duration-300 hover:scale-[1.04]"
            style={{
              borderColor: theme ? `${theme.border}55` : undefined,
              backgroundColor: theme
                ? hexToRgba(theme.pageBg, 0.72)
                : undefined,
              color: theme ? theme.accent : "#111827",
            }}
            aria-label="Previous slide"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() =>
              setActivePage((current) => (current + 1) % pages.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-transform duration-300 hover:scale-[1.04]"
            style={{
              borderColor: theme ? `${theme.border}55` : undefined,
              backgroundColor: theme
                ? hexToRgba(theme.pageBg, 0.72)
                : undefined,
              color: theme ? theme.accent : "#111827",
            }}
            aria-label="Next slide"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={`page-${pageIndex}`}
              className="grid min-w-full flex-none grid-cols-2 gap-4 xl:grid-cols-4"
            >
              {page.map((src, cardIndex) => (
                <article
                  key={`${src}-${cardIndex}`}
                  className="group relative min-h-52 overflow-hidden rounded-[1.75rem] border md:min-h-64 xl:min-h-[calc(70vh-8.5rem)]"
                  style={{
                    borderColor: theme ? `${theme.border}44` : undefined,
                    boxShadow: `0 20px 48px ${hexToRgba(theme?.accent ?? "#111827", 0.1)}`,
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
              width: index === currentPage ? "2.75rem" : "0.7rem",
              backgroundColor: theme
                ? index === currentPage
                  ? theme.accent
                  : hexToRgba(theme.accent, 0.22)
                : index === currentPage
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
