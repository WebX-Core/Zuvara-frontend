import type { Product } from "@/type/babyCareProductType";
import FaqSection from "@/app/components/common-ui/FaqSection";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

type FaqAndCloseViewSectionProps = {
  active: Product;
  theme: ThemePreset;
};

const sectionTitle =
  "text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1]";
const sectionSubtitle = "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed";

export default function FaqAndCloseViewSection({
  active,
  theme,
}: FaqAndCloseViewSectionProps) {
  const footerWave = assetWithFill(wave4Svg, "#ffffff");

  return (
    <section className="relative px-4 py-16 md:px-6 lg:px-10 lg:py-24">
      {/* Footer Wave */}
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: footerWave.markup }}
      />

      {/* Decorative Background Elements */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: theme.accent }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full md:max-w-4xl">
        {/* Header - Centered */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Questions You Ask With Love
          </h2>
          <p
            className={`${sectionSubtitle} mt-3 md:mt-4 mx-auto md:max-w-2xl`}
            style={{ color: hexToRgba(theme.accent, 0.7) }}
          >
            Honest answers for the questions every caring parent asks before
            saying yes.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="relative">
          {/* Subtle Background Card */}
          <div
            className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-40"
            style={{
              background: `linear-gradient(135deg, ${hexToRgba(theme.accent, 0.05)} 0%, ${hexToRgba(theme.containerBg, 0.1)} 100%)`,
            }}
          />

          {/* FAQ Content */}
          <div className="relative px-3 py-6 md:px-8 md:py-10">
            <FaqSection
              product={active}
              faqs={active.faqs}
              questionColor={theme.accent}
              answerColor={hexToRgba(theme.accent, 0.76)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
