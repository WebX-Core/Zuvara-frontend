import Image from "next/image";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type ComparisonRow = {
  label: string;
  zuvara: string;
  ordinary: string;
};

type TrustFusionSectionProps = {
  theme: ThemePreset;
  comparisonRows: ComparisonRow[];
  images: {
    comparisonZuvara: string;
    comparisonOrdinary: string;
  };
};

// const sectionTitle =
//   "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function TrustFusionSection({
  theme,
  comparisonRows,
  images,
}: TrustFusionSectionProps) {
  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-44 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.12) }}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-4 perspective-1200px lg:flex-row lg:gap-6">
        <article
          className="fx-rise fx-float rounded-3xl border p-5 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.accent, 1),
          }}
        >
          <div className="flex items-start gap-4 md:items-center">
            <div
              className="h-11 w-11 overflow-hidden rounded-full border"
              style={{
                borderColor: `${theme.border}66`,
              }}
            >
              <Image
                src="/images/baby/baby15.png"
                alt="Sarah M."
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: theme.chipBg }}
              >
                Sarah M. · Verified Parent
              </p>
              <p
                className="mt-1 text-sm md:text-base italic"
                style={{ color: hexToRgba(theme.chipBg, 0.78) }}
              >
                &quot;Finally, a night where I didn&apos;t wake up to a leak.
                Zuvara feels like a soft hug that works.&quot;
              </p>
            </div>
          </div>
        </article>
        <article
          className="fx-rise fx-float rounded-3xl border p-5 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 1),
          }}
        >
          <div className="flex items-start gap-4 md:items-center">
            <div
              className="h-11 w-11 overflow-hidden rounded-full border"
              style={{ borderColor: `${theme.border}66` }}
            >
              <Image
                src="/images/baby/baby15.png"
                alt="Sarah M."
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: theme.accent }}
              >
                Sarah M. · Verified Parent
              </p>
              <p
                className="mt-1 text-sm md:text-base italic"
                style={{ color: hexToRgba(theme.accent, 0.78) }}
              >
                &quot;Finally, a night where I didn&apos;t wake up to a leak.
                Zuvara feels like a soft hug that works.&quot;
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className="mx-auto mt-12 max-w-7xl space-y-8">
        <div className="fx-rise">
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            Why Zuvara
            <span className="font-light italic opacity-60"> Wins</span>
          </h2>
          <p
            className="mt-2 text-sm font-medium"
            style={{ color: hexToRgba(theme.accent, 0.68) }}
          >
            A quick side-by-side look at the care your baby deserves.
          </p>
        </div>

        <div
          className="flex items-center justify-center rounded-4xl px-2 sm:px-4"
          style={{ backgroundColor: hexToRgba(theme.containerBg, 0.2) }}
        >
          <div className="w-full">
            <div className="relative h-[220px] w-full overflow-hidden rounded-3xl sm:h-[300px] md:h-[460px] lg:h-[560px]">
                <h2
                  className="absolute left-3 top-3 z-10 text-2xl font-bold uppercase sm:left-4 sm:top-4 sm:text-4xl md:text-6xl lg:text-7xl"
                  style={{ color: hexToRgba(theme.accent, 0.75) }}
                >
                  Zuvara
                </h2>
              <Image
                src={images.comparisonZuvara}
                alt="Zuvara care"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
              <h2 className="absolute right-3 top-3 z-10 text-2xl font-bold uppercase text-zinc-500/70 sm:right-4 sm:top-4 sm:text-4xl md:text-6xl lg:text-7xl">
                  Ordinary
                </h2>
            </div>
          </div>
        </div>

        <div
          className="fx-rise overflow-hidden rounded-3xl border"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.9),
          }}
        >
          <div
            className="hidden grid-cols-12 border-b px-4 py-3 text-[11px] font-semibold uppercase tracking-wide md:grid"
            style={{
              borderColor: `${theme.border}44`,
              backgroundColor: hexToRgba(theme.containerBg, 0.34),
              color: hexToRgba(theme.accent, 0.62),
            }}
          >
            <div className="col-span-6">Feature</div>
            <div className="col-span-3 text-center">Zuvara</div>
            <div className="col-span-3 text-center">Ordinary</div>
          </div>

          {comparisonRows.map((row, idx) => (
            <div
              key={row.label}
              className="fx-float grid gap-2 px-4 py-3 text-sm md:grid-cols-12 md:items-center"
              style={{
                borderTop: idx === 0 ? "none" : `1px solid ${theme.border}33`,
              }}
            >
              <div
                className="font-medium md:col-span-6"
                style={{ color: hexToRgba(theme.accent, 0.82) }}
              >
                {row.label}
              </div>
              <div className="grid grid-cols-2 gap-3 md:col-span-6 md:contents">
                <div
                  className="rounded-2xl px-3 py-2 text-center font-semibold md:rounded-none md:px-0 md:py-0"
                  style={{
                    color: theme.accent,
                    backgroundColor: hexToRgba(theme.containerBg, 0.28),
                  }}
                >
                  <span className="mb-1 block text-[10px] uppercase tracking-wide text-zinc-500 md:hidden">
                    Zuvara
                  </span>
                  {row.zuvara}
                </div>
                <div
                  className="rounded-2xl px-3 py-2 text-center md:rounded-none md:px-0 md:py-0"
                  style={{
                    color: hexToRgba(theme.accent, 0.7),
                    backgroundColor: hexToRgba(theme.pageBg, 0.2),
                  }}
                >
                  <span className="mb-1 block text-[10px] uppercase tracking-wide text-zinc-500 md:hidden">
                    Ordinary
                  </span>
                  {row.ordinary}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
