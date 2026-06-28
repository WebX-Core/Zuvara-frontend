"use client";

import type { Product } from "@/type/personalCareProductType";
import FaqSection from "@/app/components/common-ui/FaqSection";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { useFaqsByProduct } from "@/hooks/useFaq";

type PersonalFaqAndCloseViewSectionProps = {
  active: Product;
  theme: ThemePreset;
  productId?: string;
  faqs?: Array<{
    id: string;
    question: string;
    answer: string;
    isActive?: boolean;
  }>;
};

const sectionTitle =
  "text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1]";
const sectionSubtitle = "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed";

export default function PersonalFaqAndCloseViewSection({
  active,
  theme,
  productId,
  faqs: propFaqs,
}: PersonalFaqAndCloseViewSectionProps) {
  const footerWave = assetWithFill(wave4Svg, "#f4e8fc");
  
  // Fetch product-specific FAQs from API as fallback
  const { faqs: apiFaqs, isLoading } = useFaqsByProduct(productId);
  
  // Use FAQs from props first (from product detail endpoint), fallback to separate API call
  const faqs = propFaqs && propFaqs.length > 0 ? propFaqs : apiFaqs;
  
  // Show loading state only if no prop FAQs and API is loading
  if (!propFaqs && isLoading) {
    return (
      <section className="relative px-4 py-16 md:px-6 lg:px-10 lg:py-30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className={sectionTitle} style={{ color: theme.accent }}>
              Frequently Asked Questions
            </h2>
            <p className={`${sectionSubtitle} mt-3`} style={{ color: hexToRgba(theme.accent, 0.7) }}>
              Loading FAQs...
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  // Don't render section if no FAQs
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="relative px-4 py-16 md:px-6 lg:px-10 lg:py-30">
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
            Questions You Ask With Care
          </h2>
          <p
            className={`${sectionSubtitle} mt-3 md:mt-4 mx-auto md:max-w-2xl`}
            style={{ color: hexToRgba(theme.accent, 0.7) }}
          >
            Honest answers for the questions you ask before choosing the right
            care for yourself.
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
              faqs={faqs}
              questionColor={theme.accent}
              answerColor={hexToRgba(theme.accent, 0.76)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
