import Image from "next/image";
import type { Variant } from "@/type/babyCareProductType";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type SizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
  sizeGuideImages?: string[];
};

export default function SizeGuideSection({
  theme,
  variants,
  sizeGuideImages = sizeImages,
}: SizeGuideSectionProps) {
  void variants;

  return (
    <section className="immersive-section relative px-6 py-10 md:py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute right-4 md:right-10 top-10 h-32 w-32 md:h-44 md:w-44 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.42) }}
      />
      <div className="mx-auto max-w-7xl space-y-7 perspective-1200px">
        <div className="fx-rise flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: hexToRgba(theme.accent, 0.9) }}
            >
              Find Their Perfect
              <span className="font-light italic opacity-60"> Little Fit</span>
            </h2>
            <p
              className="mt-3 text-sm md:text-base font-medium leading-relaxed"
              style={{ color: hexToRgba(theme.accent, 1) }}
            >
              Every baby grows at their own pace. Use this chart for a secure,
              comfortable fit.
            </p>
          </div>
          <span
            className="w-fit rounded-full border px-4 py-2 text-xs font-bold tracking-widest uppercase"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.chipBg, 0.55),
              color: theme.accent,
            }}
          >
            Standard Metric (KG)
          </span>
        </div>

        <div
          className="fx-rise overflow-hidden rounded-3xl border shadow-sm"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.88),
          }}
        >
          <div className="grid grid-cols-4 gap-4 px-6 py-4 md:gap-12 md:p-12 mx-auto">
            {sizeGuideImages.map((src, idx) => (
              <div
                key={idx}
                className="relative transition-transform duration-500 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Size Guide Option ${idx + 1}`}
                  width={20}
                  height={20}
                  className="h-20 w-28 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72"
                />
              </div>
            ))}
          </div>
        </div>

        <p
          className="fx-rise rounded-2xl border px-5 py-4 text-sm leading-relaxed"
          style={{
            borderColor: `${theme.border}44`,
            backgroundColor: hexToRgba(theme.pageBg, 0.72),
            color: hexToRgba(theme.accent, 0.8),
          }}
        >
          <strong className="font-bold" style={{ color: theme.accent }}>
            Pro tip:
          </strong>{" "}
          If your baby is close to the upper weight limit, size up for better
          overnight absorbency and a more comfortable fit.
        </p>
      </div>
    </section>
  );
}

const sizeImages = [
  "/images/diaper/sizes/m.png",
  "/images/diaper/sizes/l.png",
  "/images/diaper/sizes/xl.png",
  "/images/diaper/sizes/xxl.png",
];
