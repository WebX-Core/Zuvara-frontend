import Link from "next/link";
import { Accordion, Accordions } from "@/app/components/ui/accordion";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import type { PersonalCareListingTheme } from "@/app/components/personalCareProduct/theme";

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
  return (
    <section className="px-4 py-8 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
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
        <h2
          className="mt-5 text-5xl font-semibold leading-none tracking-tight"
          style={{ color: theme.accent }}
        >
          Questions women ask
          <span
            className="ml-2 italic font-light"
            style={{ color: theme.accentSoft }}
          >
            before they choose.
          </span>
        </h2>
        <p
          className="mt-4 text-sm leading-relaxed font-medium md:text-base"
          style={{ color: hexToRgba(theme.accent, 0.74) }}
        >
          A quick guide to common questions around comfort, protection levels,
          and choosing the right Zuvara personal care product.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-6 overflow-hidden lg:grid-cols-[1.2fr_0.8fr]">
        <Accordions type="single" className="space-y-3 divide-y-0">
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              id={`personal-listing-faq-${index}`}
              title={faq.question}
              className="overflow-hidden rounded-[1.4rem] border px-4 transition-colors duration-300"
              triggerClassName="py-4 text-left text-sm font-semibold hover:no-underline md:text-base"
              triggerStyle={{ color: theme.accent }}
              style={{
                borderColor: `${theme.border}55`,
                backgroundColor: hexToRgba(theme.pageBg, 0.98),
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
          className="rounded-[1.6rem] border p-5 md:p-6"
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
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: theme.accent, color: theme.pageBg }}
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
