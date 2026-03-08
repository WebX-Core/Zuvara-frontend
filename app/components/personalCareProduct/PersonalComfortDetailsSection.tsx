import Image from "next/image";
import PersonalPhotoMosaic from "@/app/components/personalCareProduct/PersonalPhotoMosaic";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalComfortDetailsSectionProps = {
  theme: ThemePreset;
  highlights: string[];
  moodboardImages: string[];
  technicalDetailImages: string[];
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function PersonalComfortDetailsSection({
  theme,
  highlights,
  moodboardImages,
  technicalDetailImages,
}: PersonalComfortDetailsSectionProps) {
  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8 perspective-1200px">
        <div className="fx-rise flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className={sectionTitle} style={{ color: theme.accent }}>
              Thoughtful Details, {" "}
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
          <div className="flex gap-3 text-xs font-semibold tracking-wide md:text-sm">
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

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, idx) => (
            <article
              key={item}
              className="group fx-rise fx-float relative overflow-hidden rounded-[1.6rem] transition-transform duration-500 hover:-translate-y-1 h-100"
            >
              <div className="absolute inset-0 h-100">
                <Image
                  src={technicalDetailImages[idx] || technicalDetailImages[0]}
                  alt={item}
                  fill
                  className="rounded-[1.6rem] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
                    style={{
                      backgroundColor: hexToRgba("#ffffff", 0.55),
                      color: hexToRgba(theme.accent, 0.78),
                    }}
                  >
                    Detail {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: hexToRgba(theme.accent, 0.58) }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
