import Link from "next/link";
import { Accordion, Accordions } from "@/app/components/ui/accordion";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import type { BabyCareListingTheme } from "@/app/components/babyCareProduct/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { Icon } from "@iconify/react";
import SectionIntro, {
  sectionContentSpacing,
} from "@/app/components/common-ui/SectionIntro";

type ProductFaqSectionProps = {
  theme: BabyCareListingTheme;
};

const faqs = [
  {
    question: "Which Zuvara baby product is best for everyday use?",
    answer:
      "Start with the product that matches your baby's age, skin sensitivity, and daily routine. Most parents choose diapers and wipes first, then add other care essentials as needed.",
  },
  {
    question: "Are Zuvara products designed for delicate baby skin?",
    answer:
      "Zuvara baby care products are selected and designed with softness, comfort, and everyday skin sensitivity in mind so they feel gentle during regular use.",
  },
  {
    question: "How do I choose the right diaper size?",
    answer:
      "Use your baby's current weight as the starting point, then size up if you are near the upper limit or need a little more overnight comfort and absorbency.",
  },
  {
    question: "Where can I get help choosing the right product?",
    answer:
      "If you are unsure what to pick, our team can help you compare options and guide you toward the best fit for your baby's stage and routine.",
  },
];

export default function ProductFaqSection({ theme }: ProductFaqSectionProps) {
  const productBottomWave = assetWithFill(wave4Svg, "#ffffff");
  return (
    <section
      className="relative px-4 py-6 sm:px-6 lg:px-8 lg:py-16 lg:pb-40"
      style={{
        borderColor: `${theme.border}55`,
      }}
    >
      <div
        className="pointer-events-none absolute -bottom-14 sm:-bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />

      <SectionIntro
        align="center"
        className="mx-auto max-w-3xl"
        title={
          <>
            Questions parents ask
            <span
              className="ml-2 italic font-light"
              style={{ color: theme.accentSoft }}
            >
              before they choose.
            </span>
          </>
        }
        description="A quick guide to the most common questions around comfort, sizing, and selecting the right Zuvara product."
        titleClassName="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-none tracking-tight"
        descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
        titleStyle={{ color: theme.accent }}
        descriptionStyle={{ color: hexToRgba(theme.accent, 0.74) }}
      />

      <div
        className={`mx-auto ${sectionContentSpacing} grid max-w-7xl gap-6 overflow-hidden lg:grid-cols-[1.2fr_0.8fr]`}
      >
        <Accordions type="single" className="space-y-2 divide-y-0">
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              id={`listing-faq-${index}`}
              title={faq.question}
              className="overflow-hidden rounded-[1.4rem] px-2 transition-transform duration-300 hover:bg-babyCare/50"
              triggerClassName="text-left text-sm font-semibold hover:no-underline md:text-base"
              triggerStyle={{ color: theme.accent }}
            >
              <p
                className="pb-2 text-sm leading-relaxed md:text-base"
                style={{ color: hexToRgba(theme.accent, 0.72) }}
              >
                {faq.answer}
              </p>
            </Accordion>
          ))}
        </Accordions>

        {/* Desktop CTA */}
        <div
          className="hidden lg:block rounded-[1.6rem] border p-5 md:p-6 bg-babyCare/50"
          style={{
            borderColor: `${theme.border}55`,
          }}
        >
          <p
            className="text-sm font-semibold"
            style={{ color: hexToRgba(theme.accent, 0.8) }}
          >
            Need more help?
          </p>
          <h3
            className="mt-3 text-2xl font-semibold leading-tight"
            style={{ color: theme.accent }}
          >
            Talk to Zuvara before you decide.
          </h3>
          <p
            className="mt-3 text-sm leading-relaxed md:text-base font-medium"
            style={{ color: hexToRgba(theme.accent, 0.8) }}
          >
            Get product guidance, sizing help, and recommendations based on your
            baby&apos;s routine and comfort needs.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-babyCare/90"
            style={{ backgroundColor: theme.accent, color: theme.pageBg }}
          >
            Contact support
          </Link>
        </div>

        {/* Mobile CTA - Hero Style */}
        <div className="lg:hidden rounded-2xl overflow-hidden shadow-lg bg-linear-to-br from-babyCare to-babyCare/90 p-4">
          <div className="flex items-start gap-4">
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-baby-accent-soft backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Icon
                    icon="mdi:help-circle-outline"
                    className="size-4 text-white"
                  />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Need Help?
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-baby-accent">
                  Talk to Zuvara before you decide.
                </h3>
                <p className="text-sm font-medium text-baby-accent-soft leading-relaxed">
                  Get product guidance and recommendations.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-baby-accent px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Contact Support</span>
                <Icon
                  icon="material-symbols:arrow-forward-rounded"
                  className="size-5"
                />
              </Link>
            </div>
            <div className="relative size-24 shrink-0">
              <div className="absolute inset-0 rounded-2xl backdrop-blur-sm" />
              <div className="relative size-full flex items-center justify-center">
                <Icon
                  icon="mdi:baby-face-outline"
                  className="size-16 text-white/90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
