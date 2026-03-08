import Image from "next/image";
import type { Variant } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalSizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
  sizeGuideImages: string[];
};


export default function PersonalSizeGuideSection({
  theme,
  variants,
  sizeGuideImages,
}: PersonalSizeGuideSectionProps) {
  void variants;

  return (
    <section className="immersive-section relative px-6 py-10 md:py-14 lg:px-10 lg:py-16">
      {/* Background Decorative Element - Adjusted for mobile */}
      <div
        className="pointer-events-none absolute right-4 md:right-10 top-10 h-32 w-32 md:h-44 md:w-44 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.42) }}
      />

      <div className="mx-auto max-w-7xl space-y-7 perspective-1200px">
        {/* Header Section: Stacks on mobile, Side-by-side on desktop */}
        <div className="fx-rise flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: hexToRgba(theme.accent, 0.9) }}
            >
              Find Your Perfect
              <span className="font-light italic opacity-60"> Everyday Fit</span>
            </h2>
            <p
              className="mt-3 text-sm md:text-base font-medium leading-relaxed"
              style={{ color: hexToRgba(theme.accent, 1) }}
            >
              Choose the variant that matches your flow and comfort preference
              for day-long confidence.
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
            Comfort Guide
          </span>
        </div>

        {/* Image Grid: Responsive layout for size guide images */}
        <div
          className="fx-rise overflow-hidden rounded-3xl border shadow-sm"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.88),
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-8 md:p-12">
            {sizeGuideImages.map((src, idx) => (
              <div 
                key={idx} 
                className="relative h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72 transition-transform hover:scale-105 duration-500"
              >
                <Image
                  src={src}
                  alt={`Size Guide Option ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 240px, 300px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip Section */}
        <p
          className="fx-rise rounded-2xl border px-5 py-4 text-sm leading-relaxed"
          style={{
            borderColor: `${theme.border}44`,
            backgroundColor: hexToRgba(theme.pageBg, 0.72),
            color: hexToRgba(theme.accent, 0.8),
          }}
        >
          <strong className="font-bold" style={{ color: theme.accent }}>Pro tip:</strong> On heavier days or overnight, choose higher
          absorbency for worry-free movement and sleep.
        </p>
      </div>
    </section>
  );
}