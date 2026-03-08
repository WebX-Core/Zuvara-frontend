import Image from "next/image";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type ComparisonRow = {
  label: string;
  zuvara: string;
  ordinary: string;
};

type PersonalTrustFusionSectionProps = {
  theme: ThemePreset;
  comparisonRows: ComparisonRow[];
  images: {
    testimonialPrimary: string;
    testimonialSecondary: string;
    comparisonZuvara: string;
    comparisonOrdinary: string;
  };
};

export default function PersonalTrustFusionSection({
  theme,
  comparisonRows,
  images,
}: PersonalTrustFusionSectionProps) {
  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-44 w-60 -translate-x-1/2 rounded-full blur-3xl opacity-50"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.12) }}
      />

      {/* Testimonials Container - Stack on mobile, Side-by-side on desktop */}
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-6">
        <article
          className="fx-rise fx-float w-full rounded-3xl border p-5 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.accent, 1),
          }}
        >
          <div className="flex items-start gap-4 md:items-center">
            <div
              className="h-11 w-11 shrink-0 overflow-hidden rounded-full border"
              style={{ borderColor: `${theme.border}66` }}
            >
              <Image
                src={images.testimonialPrimary}
                alt="Nina R."
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: theme.chipBg }}>
                Nina R. · Verified Customer
              </p>
              <p
                className="mt-1 text-sm md:text-base italic"
                style={{ color: hexToRgba(theme.chipBg, 0.78) }}
              >
                &quot;I feel secure even on long days. It is soft, breathable,
                and genuinely dependable.&quot;
              </p>
            </div>
          </div>
        </article>

        <article
          className="fx-rise fx-float w-full rounded-3xl border p-5 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 1),
          }}
        >
          <div className="flex items-start gap-4 md:items-center">
            <div
              className="h-11 w-11 shrink-0 overflow-hidden rounded-full border"
              style={{ borderColor: `${theme.border}66` }}
            >
              <Image
                src={images.testimonialSecondary}
                alt="Priya T."
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: theme.accent }}>
                Priya T. · Verified Customer
              </p>
              <p
                className="mt-1 text-sm md:text-base italic"
                style={{ color: hexToRgba(theme.accent, 0.78) }}
              >
                &quot;No bunching, no stress. It stays comfortable through work,
                travel, and sleep.&quot;
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="mx-auto mt-16 max-w-7xl space-y-8">
        <div className="fx-rise text-center md:text-left">
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            Why Zuvara
            <span className="font-light italic opacity-60"> Wins</span>
          </h2>
          <p
            className="mt-2 text-sm md:text-base font-medium"
            style={{ color: hexToRgba(theme.accent, 0.68) }}
          >
            A side-by-side look at comfort, performance, and everyday confidence.
          </p>
        </div>

        {/* Visual Comparison Section - Hidden side text on mobile, Flex images */}
        <div
          className="flex flex-col md:flex-row justify-center items-center rounded-3xl md:rounded-4xl overflow-hidden"
          style={{ backgroundColor: hexToRgba(theme.containerBg, 0.2) }}
        >
          <div className="hidden lg:block lg:w-1/4 text-center">
            <h2
              className="text-6xl xl:text-8xl font-bold uppercase rotate-180 [writing-mode:vertical-lr]"
              style={{ color: hexToRgba(theme.accent, 0.15) }}
            >
              Zuvara
            </h2>
          </div>

          <div className="w-full lg:w-2/4 flex">
            <div className="relative w-1/2 overflow-hidden">
               <div className="absolute top-4 left-4 z-10 md:hidden bg-white/80 px-2 py-1 rounded text-[10px] font-bold uppercase">Zuvara</div>
              <Image
                src={images.comparisonZuvara}
                alt="Zuvara care"
                width={800}
                height={1200}
                className="h-75 md:h-125 lg:h-150 w-full object-cover"
              />
            </div>
            <div className="relative w-1/2 overflow-hidden border-l-2" style={{ borderColor: theme.border }}>
              <div className="absolute top-4 right-4 z-10 md:hidden bg-zinc-200/80 px-2 py-1 rounded text-[10px] font-bold uppercase">Ordinary</div>
              <Image
                src={images.comparisonOrdinary}
                alt="Typical care"
                width={800}
                height={1200}
                className="h-75 md:h-125 lg:h-150 w-full object-cover"
              />
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/4 text-center">
            <h2 className="text-6xl xl:text-8xl font-bold uppercase [writing-mode:vertical-lr] text-zinc-500/10">
              Ordinary
            </h2>
          </div>
        </div>

        {/* Comparison Table - Scrollable on very small devices */}
        <div className="overflow-x-auto">
          <div
            className="min-w-125 md:min-w-full fx-rise overflow-hidden rounded-3xl border"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.9),
            }}
          >
            <div
              className="grid grid-cols-12 border-b px-6 py-4 text-[11px] font-semibold uppercase tracking-widest"
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
                className="fx-float grid grid-cols-12 items-center px-6 py-4 text-sm md:text-base"
                style={{
                  borderTop: idx === 0 ? "none" : `1px solid ${theme.border}33`,
                }}
              >
                <div
                  className="col-span-6 font-medium"
                  style={{ color: hexToRgba(theme.accent, 0.82) }}
                >
                  {row.label}
                </div>
                <div
                  className="col-span-3 text-center font-bold"
                  style={{ color: theme.accent }}
                >
                  {row.zuvara}
                </div>
                <div
                  className="col-span-3 text-center"
                  style={{ color: hexToRgba(theme.accent, 0.5) }}
                >
                  {row.ordinary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}