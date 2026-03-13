import type { CSSProperties } from "react";
import type { Product } from "@/type/personalCareProductType";
import FaqSection from "@/app/components/common-ui/FaqSection";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

type PersonalFaqAndCloseViewSectionProps = {
  active: Product;
  theme: ThemePreset;
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function PersonalFaqAndCloseViewSection({
  active,
  theme,
}: PersonalFaqAndCloseViewSectionProps) {
  const footerWave = assetWithFill(wave4Svg, "#f4e8fc");
  const cardStyle = {
    borderColor: `${theme.border}66`,
    backgroundColor: hexToRgba(theme.pageBg, 0.78),
  } as CSSProperties;

  return (
    <section className="immersive-section relative px-6 pb-14 pt-6 lg:px-10 lg:pb-16">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: footerWave.markup }}
      />
      <div
        className="pointer-events-none absolute left-10 top-0 h-40 w-52 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.4) }}
      />
      <div className="mx-auto max-w-7xl space-y-6 perspective-1200px">
        <div className="fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Questions Women Ask Before They Trust
          </h2>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: hexToRgba(theme.accent, 1) }}
          >
            Clear answers about comfort, skin safety, flow support, and
            everyday confidence.
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
