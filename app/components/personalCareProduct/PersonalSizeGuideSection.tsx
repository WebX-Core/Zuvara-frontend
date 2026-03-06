import Image from "next/image";
import type { Variant } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalSizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
  sizeGuideImages: string[];
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function PersonalSizeGuideSection({
  theme,
  variants,
  sizeGuideImages,
}: PersonalSizeGuideSectionProps) {
  void variants;

  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute right-10 top-10 h-44 w-44 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.42) }}
      />
      <div className="mx-auto max-w-7xl space-y-7 perspective-1200px">
        <div className="fx-rise flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight"
              style={{ color: hexToRgba(theme.accent, 0.9) }}
            >
              Find Your Perfect
              <span className="font-light italic opacity-60"> Everyday Fit</span>
            </h2>
            <h2 className={sectionTitle} style={{ color: theme.accent }}></h2>
            <p
              className="mt-2 text-sm md:text-base font-medium"
              style={{ color: hexToRgba(theme.accent, 1) }}
            >
              Choose the variant that matches your flow and comfort preference
              for day-long confidence.
            </p>
          </div>
          <span
            className="w-fit rounded-full border px-4 py-2 text-xs font-semibold tracking-wide"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.chipBg, 0.55),
              color: theme.accent,
            }}
          >
            Comfort Guide
          </span>
        </div>

        <div
          className="fx-rise overflow-hidden rounded-3xl border"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.88),
          }}
        >
          <div className="flex items-center justify-center gap-8 p-6">
            {sizeGuideImages.map((src, idx) => (
              <Image
                src={src}
                key={idx}
                alt="Size Guide"
                height={500}
                width={500}
                className="h-50 w-50 object-contain"
              />
            ))}
          </div>
        </div>

        <p
          className="fx-rise px-4 py-3 text-sm"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.72),
            color: hexToRgba(theme.accent, 0.8),
          }}
        >
          <strong>Pro tip:</strong> On heavier days or overnight, choose higher
          absorbency for worry-free movement and sleep.
        </p>
      </div>
    </section>
  );
}
