import type { CSSProperties } from "react";
import type { Product } from "@/type/babyCareProductType";
import FaqSection from "@/app/components/common-ui/FaqSection";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type FaqAndCloseViewSectionProps = {
  active: Product;
  theme: ThemePreset;
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";
export default function FaqAndCloseViewSection({
  active,
  theme,
}: FaqAndCloseViewSectionProps) {
  const cardStyle = {
    borderColor: `${theme.border}66`,
    backgroundColor: hexToRgba(theme.pageBg, 0.78),
  } as CSSProperties;

  return (
    <section className="immersive-section relative px-6 pb-14 pt-6 lg:px-10 lg:pb-12">
      <div
        className="pointer-events-none absolute left-10 top-0 h-40 w-52 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.4) }}
      />
      <div className="mx-auto max-w-7xl space-y-6 perspective-1200px">
        <div className="fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Questions You Ask With Love
          </h2>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: hexToRgba(theme.accent, 1) }}
          >
            Honest answers for the questions every caring parent asks before
            saying yes.
          </p>
        </div>

        <div className="fx-rise" style={cardStyle}>
          <FaqSection
            product={active}
            faqs={active.faqs}
            questionColor={theme.accent}
            answerColor={hexToRgba(theme.accent, 0.76)}
          />
        </div>
      </div>
    </section>
  );
}
