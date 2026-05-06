import Image from "next/image";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalCarePromiseSectionProps = {
  theme: ThemePreset;
  conceptImages: string[];
};

export default function PersonalCarePromiseSection({
  theme,
  conceptImages,
}: PersonalCarePromiseSectionProps) {
  const sideImage = conceptImages[0];

  return (
    <section className="immersive-section relative px-4 pb-6 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute right-8 top-8 h-48 w-48 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.14) }}
      />
      <div className="mx-auto max-w-7xl space-y-7 perspective-1200px">
        <div
          className="fx-rise relative overflow-hidden rounded-[2.2rem] border px-6 py-8 md:px-8 md:py-10 lg:px-10"
          style={{
            borderColor: `${theme.border}66`,
            background: `linear-gradient(135deg, ${hexToRgba(theme.containerBg, 0.92)} 0%, ${hexToRgba(theme.sectionTint, 0.96)} 100%)`,
            boxShadow: `0 24px 56px ${hexToRgba(theme.accent, 0.08)}`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: hexToRgba(theme.pageBg, 0.34) }}
          />
          <div
            className="pointer-events-none absolute right-24 bottom-0 h-56 w-56 rounded-full"
            style={{
              background: `radial-gradient(circle, ${hexToRgba(theme.pageBg, 0.42)} 0%, ${hexToRgba(theme.pageBg, 0)} 72%)`,
            }}
          />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="fx-float flex h-full flex-col justify-center lg:col-span-7">
              <span
                className="mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{
                  borderColor: `${theme.border}55`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.46),
                  color: hexToRgba(theme.accent, 0.72),
                }}
              >
                Care Support
              </span>
              <h3
                className="max-w-xl text-[clamp(2rem,4.8vw,3.8rem)] leading-[1.02] tracking-tight"
                style={{ color: theme.accent }}
              >
                Peace of mind,
                <span
                  className="ml-2 italic font-light"
                  style={{ color: hexToRgba(theme.accent, 0.72) }}
                >
                  your comfort partner.
                </span>
              </h3>
              <p
                className="mt-4 max-w-lg text-sm font-medium leading-relaxed md:text-base"
                style={{ color: hexToRgba(theme.accent, 1) }}
              >
                If fit, comfort, or absorbency does not feel right, reach out
                within 7 days and our care team will help you find a better
                option quickly.
              </p>

              <div
                className="mt-6 grid gap-2 text-sm md:max-w-xl md:grid-cols-3"
                style={{ color: hexToRgba(theme.accent, 0.74) }}
              >
                <div>Fast support from care experts</div>
                <div>Help with fit and absorbency issues</div>
                <div>Clear, women-first guidance</div>
              </div>
            </div>

            <div className="relative hidden sm:block lg:col-span-5">
              <div
                className="fx-float relative mx-auto w-65 rounded-[2.3rem] border-[6px] bg-black p-2 shadow-[0_28px_60px_rgba(0,0,0,0.22)] md:w-75"
                style={{ borderColor: "#0c0f0d" }}
              >
                <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                <div
                  className="relative overflow-hidden rounded-[1.9rem]"
                  style={{ backgroundColor: hexToRgba(theme.pageBg, 0.98) }}
                >
                  <div className="p-4">
                    <p
                      className="text-[11px] font-medium"
                      style={{ color: hexToRgba(theme.accent, 0.56) }}
                    >
                      Hello
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: theme.accent }}
                    >
                      Zuvara Care
                    </p>
                    <div className="mt-3 flex gap-2">
                      {["Fit help", "Overnight", "Comfort"].map((chip, idx) => (
                        <span
                          key={chip}
                          className="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                          style={{
                            backgroundColor:
                              idx === 1
                                ? theme.accent
                                : hexToRgba(theme.containerBg, 0.6),
                            color:
                              idx === 1
                                ? theme.pageBg
                                : hexToRgba(theme.accent, 0.7),
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div
                      className="relative overflow-hidden rounded-[1.4rem] p-3"
                      style={{
                        background: `linear-gradient(180deg, ${hexToRgba(theme.containerBg, 0.5)} 0%, ${hexToRgba(theme.pageBg, 0.92)} 100%)`,
                      }}
                    >
                      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-black">
                        Live help
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-[1.1rem]">
                        <Image
                          src={sideImage}
                          alt="Woman resting comfortably"
                          fill
                          sizes="(max-width: 1024px) 100vw, 30vw"
                          className="fx-parallax object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, ${hexToRgba(theme.pageBg, 0.05)} 0%, ${hexToRgba(theme.accent, 0.34)} 100%)`,
                          }}
                        />
                        <div className="absolute left-3 top-3 max-w-32 rounded-2xl bg-black/20 px-3 py-2 text-white backdrop-blur-xs">
                          <p className="text-xs font-semibold leading-tight">
                            Comfort check-in within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-4 flex items-center justify-between rounded-2xl px-4 py-3"
                      style={{
                        backgroundColor: hexToRgba(theme.containerBg, 0.52),
                      }}
                    >
                      <span
                        className="text-xs font-semibold"
                        style={{ color: theme.accent }}
                      >
                        Women-first guidance
                      </span>
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-semibold"
                        style={{
                          backgroundColor: theme.accent,
                          color: theme.pageBg,
                        }}
                      >
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
