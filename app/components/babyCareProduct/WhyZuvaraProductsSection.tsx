import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import type { BabyCareListingTheme } from "@/app/components/babyCareProduct/theme";
import { assetWithFill, wave3Svg } from "@/constants/svgs";


type WhyZuvaraProductsSectionProps = {
  theme: BabyCareListingTheme;
};

const reasons = [
  {
    title: "Gentle by design",
    body: "Everyday essentials built for delicate skin, softer touch, and calmer routines.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted protection",
    body: "Parents choose Zuvara for reliable absorbency, comfort, and practical daily performance.",
    icon: ShieldCheck,
  },
  {
    title: "Made to feel better",
    body: "Thoughtful materials and balanced fit help your baby stay comfortable longer.",
    icon: Sparkles,
  },
];

export default function WhyZuvaraProductsSection({
  theme,
}: WhyZuvaraProductsSectionProps) {

  const productBottomWave = assetWithFill(wave3Svg, "#f2f7f5");

  return (
    <section className="relative overflow-hidden bg-babyCare px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pb-28">

        <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />
       
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.88),
              color: theme.accent,
            }}
          >
            Why Zuvara Products
          </span>
          <h2
            className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-tight"
            style={{ color: theme.accent }}
          >
            Everyday care that feels
            <span
              className="ml-2 italic font-light"
              style={{ color: theme.accentSoft }}
            >
              thoughtful and trusted.
            </span>
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed font-medium md:text-base"
            style={{ color: hexToRgba(theme.accent, 0.76) }}
          >
            Zuvara products are built around comfort, safety, and the practical
            needs parents care about most from morning changes to overnight use.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="relative mx-auto w-full max-w-[360px]"
            >
              <svg
                viewBox="0 0 400 200"
                className="block h-[220px] w-full sm:h-[240px] md:h-[260px]"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M40 110 C30 70 70 40 120 50 C150 20 220 20 250 50 C300 40 360 70 350 120 C360 160 300 180 240 170 C200 190 130 185 90 165 C50 160 25 135 40 110 Z"
                  fill={hexToRgba(theme.pageBg, 0.96)}
                />
              </svg>

              <div className="absolute inset-0 z-10 flex items-center justify-center px-10 py-8 sm:px-12 sm:py-10">
                <div className="w-full max-w-[230px] text-center">
                  <div
                    className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-4 sm:h-11 sm:w-11"
                    style={{
                      backgroundColor: hexToRgba(theme.chipBg, 0.85),
                      color: theme.accent,
                    }}
                  >
                    <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
                  </div>
                  <h3
                    className="text-sm font-semibold sm:text-base"
                    style={{ color: theme.accent }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-2 text-xs leading-relaxed sm:text-sm"
                    style={{ color: hexToRgba(theme.accent, 0.72) }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
