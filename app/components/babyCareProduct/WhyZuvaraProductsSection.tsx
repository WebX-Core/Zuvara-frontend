import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { hexToRgba, colors } from "@/lib/tokens";
import type { BabyCareListingTheme } from "@/app/components/babyCareProduct/theme";
import { assetWithFill, wave3Svg } from "@/constants/svgs";

type WhyZuvaraProductsSectionProps = {
  theme: BabyCareListingTheme;
};

const reasons = [
  {
    title: "Gentle by design",
    body: "Soft essentials for delicate skin.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted protection",
    body: "Reliable comfort and absorbency.",
    icon: ShieldCheck,
  },
  {
    title: "Made to feel better",
    body: "Balanced fit for longer comfort.",
    icon: Sparkles,
  },
  {
    title: "Clinically gentle",
    body: "Expert-tested for the softest, safest care.",
    icon: BadgeCheck,
  },
];

export default function WhyZuvaraProductsSection({
  theme,
}: WhyZuvaraProductsSectionProps) {
  const productBottomWave = assetWithFill(wave3Svg, colors.baby.hero);

  return (
    <section className="relative overflow-hidden bg-babyCare px-4 sm:px-6 lg:px-8 pb-10 lg:pb-36">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
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
            Built for comfort, safety, and easier daily care.
          </p>
        </div>

        {/* Cards */}
        <div className="my-10 max-w-xl mx-auto grid grid-cols-2   md:grid gap-4 md:grid-cols-2 md:gap-6 ">
          {reasons.map(({ title, icon: Icon }) => (
            <article
              key={title}
              className="flex  items-center justify-start gap-2 rounded-2xl px-3 py-2 md:px-4 md:py-4 text-center  transition-transform duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: hexToRgba(theme.pageBg, 0.96),
              }}
            >
              {/* Icon */}
              <div
                className=" flex h-6 w-6 md:h-12 md:w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: hexToRgba(theme.chipBg, 0.85),
                  color: theme.accent,
                }}
              >
                <Icon size={22} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 text-left">
                <h3
                  className="text-sm md:text-base font-semibold"
                  style={{ color: theme.accent }}
                >
                  {title}
                </h3>
                {/* <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: hexToRgba(theme.accent, 0.72) }}
                >
                  {body}
                </p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
