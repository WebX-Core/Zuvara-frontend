"use client";

import Link from "next/link";
import { Accordion, Accordions } from "@/app/components/ui/accordion";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import type { PersonalCareListingTheme } from "@/app/components/personalCareProduct/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import SectionIntro, { sectionContentSpacing } from "@/app/components/common-ui/SectionIntro";
import { useFaqsByPortal } from "@/hooks/useFaq";
import { Icon } from "@iconify/react";

type ProductFaqSectionProps = {
  theme: PersonalCareListingTheme;
};

export default function ProductFaqSection({ theme }: ProductFaqSectionProps) {
  const { faqs, isLoading, isError } = useFaqsByPortal("personal-care");
  const footerWave = assetWithFill(wave4Svg, "#f4e8fc");

  return (
    <section className="relative px-4 py-8 md:px-8 md:py-20 md:pb-40">
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
        titleClassName="text-5xl font-semibold leading-none tracking-tight"
        descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
        titleStyle={{ color: theme.accent }}
        descriptionStyle={{ color: hexToRgba(theme.accent, 0.74) }}
      />

      <div className={`mx-auto ${sectionContentSpacing} grid max-w-7xl gap-6 overflow-hidden lg:grid-cols-[1.2fr_0.8fr]`}>
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-3">
              <Icon
                icon="eos-icons:loading"
                className="size-6"
                style={{ color: theme.accent }}
              />
              <p
                className="text-sm font-medium"
                style={{ color: hexToRgba(theme.accent, 0.7) }}
              >
                Loading FAQs...
              </p>
            </div>
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-12">
            <p
              className="text-sm font-medium"
              style={{ color: hexToRgba(theme.accent, 0.7) }}
            >
              Failed to load FAQs. Please try again later.
            </p>
          </div>
        ) : faqs.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <p
              className="text-sm font-medium"
              style={{ color: hexToRgba(theme.accent, 0.7) }}
            >
              No FAQs available at the moment.
            </p>
          </div>
        ) : (
          <Accordions type="single" className="space-y-1 divide-y-0">
            {faqs.map((faq, index) => (
              <Accordion
                key={faq.id}
                id={`personal-listing-faq-${index}`}
                title={faq.question}
                className="overflow-hidden rounded-[1.4rem] px-2 transition-colors duration-300"
                triggerClassName="text-left text-sm font-semibold hover:no-underline md:text-base"
                triggerStyle={{ color: theme.accent }}
              >
                <div
                  className="pb-2 text-sm leading-relaxed md:text-base prose prose-sm max-w-none [&_p]:mb-2"
                  style={{ color: hexToRgba(theme.accent, 0.72) }}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </Accordion>
            ))}
          </Accordions>
        )}

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
