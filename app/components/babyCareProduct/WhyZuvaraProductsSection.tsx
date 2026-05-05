import {
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { hexToRgba, colors } from "@/lib/tokens";
import type { BabyCareListingTheme } from "@/app/components/babyCareProduct/theme";
import { assetWithFill, wave3Svg } from "@/constants/svgs";
import SectionIntro, {
  sectionContentSpacing,
} from "@/app/components/common-ui/SectionIntro";

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
    <section className="relative overflow-hidden bg-babyCare px-4 py-6 pb-16 sm:px-6 lg:px-8  lg:pb-36">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <SectionIntro
          align="center"
          className="mx-auto max-w-3xl"
          title={<>Why Zuvara Products</>}
          description="Built for comfort, safety, and easier daily care."
          titleClassName="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-tight"
          descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
          titleStyle={{ color: theme.accent }}
          descriptionStyle={{ color: hexToRgba(theme.accent, 0.76) }}
        />

        {/* Cards */}
        <div
          className={`mx-auto ${sectionContentSpacing} grid max-w-xl grid-cols-2 gap-2 md:grid md:grid-cols-2 md:gap-6`}
        >
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
                className=" flex h-4 w-4 md:h-12 md:w-12 items-center justify-center rounded-xl"
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
                  className="text-xs md:text-base font-medium"
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
