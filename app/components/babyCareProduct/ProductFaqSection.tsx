import Link from "next/link";
import { Accordion, Accordions } from "@/app/components/ui/accordion";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import type { BabyCareListingTheme } from "@/app/components/babyCareProduct/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

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
      className="relative px-4 py-10 sm:px-6 lg:px-8 lg:py-16 lg:pb-40"
      style={{
        borderColor: `${theme.border}55`,
      }}
    >
      <div
        className="pointer-events-none absolute -bottom-14 sm:-bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <span
          className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.88),
            color: theme.accent,
          }}
        >
          Product FAQ
        </span>
        <h2
          className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-none tracking-tight"
          style={{ color: theme.accent }}
        >
          Questions parents ask
          <span
            className="ml-2 italic font-light"
            style={{ color: theme.accentSoft }}
          >
            before they choose.
          </span>
        </h2>
        <p
          className="mt-4 text-sm font-medium leading-relaxed md:text-base"
          style={{ color: hexToRgba(theme.accent, 0.74) }}
        >
          A quick guide to the most common questions around comfort, sizing, and
          selecting the right Zuvara product.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-6 overflow-hidden lg:grid-cols-[1.2fr_0.8fr]">
        <Accordions type="single" className="space-y-3 divide-y-0">
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              id={`listing-faq-${index}`}
              title={faq.question}
              className="overflow-hidden rounded-[1.4rem] border px-4 transition-transform duration-300 hover:bg-babyCare/50"
              triggerClassName="py-4 text-left text-sm font-semibold md:text-base hover:no-underline "
              triggerStyle={{ color: theme.accent }}
              style={{
                borderColor: `${theme.border}55`,
              }}
            >
              <p
                className="pb-4 text-sm leading-relaxed md:text-base"
                style={{ color: hexToRgba(theme.accent, 0.72) }}
              >
                {faq.answer}
              </p>
            </Accordion>
          ))}
        </Accordions>

        <div
          className="rounded-[1.6rem] border p-5 md:p-6 bg-babyCare/50"
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
      </div>
    </section>
  );
}
