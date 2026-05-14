import Link from "next/link";
import { Accordion, Accordions } from "@/app/components/ui/accordion";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import type { PersonalCareListingTheme } from "@/app/components/personalCareProduct/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import SectionIntro, { sectionContentSpacing } from "@/app/components/common-ui/SectionIntro";

type ProductFaqSectionProps = {
  theme: PersonalCareListingTheme;
};

const faqs = [
  {
    question: "Which Zuvara product is best for everyday period care?",
    answer:
      "It depends on the level of protection, comfort, and routine you need most. Some customers prefer lighter daily options, while others choose products designed for longer wear or overnight support.",
  },
  {
    question:
      "Are Zuvara personal care products comfortable for sensitive skin?",
    answer:
      "Zuvara personal care products are designed with softness and comfort in mind so they feel gentler during regular use and on more sensitive days.",
  },
  {
    question: "How do I choose between pads and period panties?",
    answer:
      "Pads are often chosen for familiar daily use and easy switching, while period panties can be better when you want integrated protection with less shifting during long wear.",
  },
  {
    question: "Can someone help me decide which product fits my routine?",
    answer:
      "Yes. If you are unsure which option makes sense for your day, overnight use, or activity level, Zuvara can help you compare products and choose the right fit.",
  },
];

export default function ProductFaqSection({ theme }: ProductFaqSectionProps) {
  const footerWave = assetWithFill(wave4Svg, "#f4e8fc");
  const faqCardBg = hexToRgba(theme.pageBg, 0.82);
  const faqCardBorder = `${theme.border}66`;

  return (
    <section className="relative px-4 py-10 md:px-8 md:py-20 md:pb-40">
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: footerWave.markup }}
      />
      <SectionIntro
        align="center"
        className="mx-auto max-w-3xl"
        eyebrow={
          <span
            className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.9),
              color: theme.accent,
            }}
          >
            Product FAQ
          </span>
        }
        title={
          <>
            Questions women ask
            <span
              className="ml-2 italic font-light"
              style={{ color: theme.accentSoft }}
            >
              before they choose.
            </span>
          </>
        }
        description="A quick guide to common questions around comfort, protection levels, and choosing the right Zuvara personal care product."
        titleClassName="text-center text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl"
        descriptionClassName="mx-auto max-w-2xl text-center text-sm font-medium leading-relaxed md:text-base"
        titleStyle={{ color: theme.accent }}
        descriptionStyle={{ color: hexToRgba(theme.accent, 0.74) }}
      />

      <div
        className={`mx-auto ${sectionContentSpacing} grid max-w-7xl gap-6 overflow-hidden lg:grid-cols-[1.25fr_0.75fr]`}
      >
        <Accordions
          type="single"
          defaultValue="personal-listing-faq-0"
          className="space-y-3 divide-y-0"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              id={`personal-listing-faq-${index}`}
              title={faq.question}
              className="overflow-hidden rounded-[1.2rem] border px-4 py-1 transition-colors duration-300 md:px-5"
              style={{
                borderColor: faqCardBorder,
                backgroundColor: faqCardBg,
              }}
              triggerClassName="text-left text-sm font-semibold leading-relaxed hover:no-underline md:text-base"
              triggerStyle={{ color: theme.accent }}
            >
              <p
                className="pb-3 text-sm leading-relaxed md:text-base"
                style={{ color: hexToRgba(theme.accent, 0.72) }}
              >
                {faq.answer}
              </p>
            </Accordion>
          ))}
        </Accordions>

        <div
          className="h-fit rounded-[1.6rem] border p-5 md:p-6 lg:sticky lg:top-24"
          style={{
            borderColor: `${theme.border}55`,
            backgroundColor: hexToRgba(theme.accent, 0.06),
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
            className="mt-3 text-sm font-medium leading-relaxed md:text-base"
            style={{ color: hexToRgba(theme.accent, 0.8) }}
          >
            Get product guidance, help comparing options, and recommendations
            based on your comfort needs and daily routine.
          </p>
          <ul
            className="mt-4 space-y-2 text-sm font-medium"
            style={{ color: hexToRgba(theme.accent, 0.82) }}
          >
            <li>Comfort-first recommendations</li>
            <li>Help choosing for day or night use</li>
            <li>Quick answers from support</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition-opacity duration-300 hover:opacity-90 lg:ml-auto"
            style={{ backgroundColor: theme.accent, color: theme.pageBg }}
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
