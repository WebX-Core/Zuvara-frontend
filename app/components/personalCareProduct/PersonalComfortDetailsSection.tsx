import PersonalPhotoMosaic from "@/app/components/personalCareProduct/PersonalPhotoMosaic";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalComfortDetailsSectionProps = {
  theme: ThemePreset;
  moodboardImages: string[];
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function PersonalComfortDetailsSection({
  theme,
  moodboardImages,
}: PersonalComfortDetailsSectionProps) {
  if (!moodboardImages || moodboardImages.length === 0) {
    return null;
  }
  return (
    <section className="relative px-4 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8 perspective-1200px">
        <div className="fx-rise flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className={sectionTitle} style={{ color: theme.accent }}>
              Thoughtful Details,{" "}
              <span
                className="italic font-light"
                style={{ color: hexToRgba(theme.accent, 0.56) }}
              >
                Complete Confidence.
              </span>
            </h2>
            <p
              className="mt-3 text-sm md:text-base"
              style={{ color: hexToRgba(theme.accent, 1) }}
            >
              Designed to feel light, fit better, and stay comfortable through
              meetings, commutes, and sleep.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 text-xs font-semibold tracking-wide md:text-sm">
            {["Dermatologically Tested", "Overnight Confidence"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border px-4 py-2"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.chipBg, 0.55),
                  color: theme.accent,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="fx-rise overflow-hidden">
          <PersonalPhotoMosaic
            images={moodboardImages}
            className="fx-parallax"
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
}
