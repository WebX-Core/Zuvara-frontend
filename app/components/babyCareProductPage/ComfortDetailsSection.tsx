import PhotoMosaic from "@/app/components/babyCareProductPage/PhotoMosaic";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type ComfortDetailsSectionProps = {
  theme: ThemePreset;
  moodboardImages: string[];
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function ComfortDetailsSection({
  theme,
  moodboardImages,
}: ComfortDetailsSectionProps) {
  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8 perspective-1200px">
        <div className="fx-rise flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className={sectionTitle} style={{ color: theme.accent }}>
              Small Details,{" "}
              <span
                className="italic font-light"
                style={{ color: hexToRgba(theme.accent, 0.56) }}
              >
                Big Comfort.
              </span>
            </h2>
            <p
              className="mt-3 text-sm md:text-base"
              style={{ color: hexToRgba(theme.accent, 1) }}
            >
              Designed to feel light, fit better, and stay comfortable through
              active and sleepy moments.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 text-xs font-semibold tracking-wide md:text-sm">
            {["Dermatologically Tested", "12hr Leak Guard"].map((chip) => (
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
          <PhotoMosaic
            images={moodboardImages}
            className="fx-parallax"
            theme={theme}
          />
        </div>

        {/* <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Gentle Protection",
              body: "Ultra-soft layers designed to reduce friction where baby skin needs comfort most.",
            },
            {
              title: "Nap-Time Security",
              body: "Advanced absorbency for longer dryness, helping you rest while they dream.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="fx-rise fx-float rounded-3xl border p-5 transition-transform duration-500 hover:-translate-y-1"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.accent, 1),
              }}
            >
              <h3
                className="text-base font-semibold"
                style={{ color: theme.pageBg }}
              >
                {item.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed font-medium"
                style={{ color: hexToRgba(theme.pageBg, 0.72) }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div> */}

        {/* <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                  className={`"object-contain object-bottom p-6"} transition-transform duration-700 group-hover:scale-[1.04]`}
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
        </div> */}
      </div>
    </section>
  );
}
