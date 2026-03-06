"use client";
import type { FAQ } from "@/type/babyCareProductType";
import { Accordion, Accordions } from "../ui/accordion";

type ProductForFaq = {
  id?: number;
  background?: string;
};

interface FaqSectionProps {
  faqs?: FAQ[];
  questionColor?: string;
  answerColor?: string;
  product: ProductForFaq;
}

const FaqSection = ({
  faqs = [],
  questionColor,
  answerColor,
  product,
}: FaqSectionProps) => {
  if (faqs.length === 0) return null;

  const headingColor = questionColor || product.background || "#17181c";
  const bodyColor = answerColor || "#52525b";

  return (
    <div className="space-y-4">
      <Accordions
        type="single"
        className="w-full space-y-3 [perspective-distant]"
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            id={`faq-${index}`}
            title={faq.question}
            className="fx-rise overflow-hidden rounded-2xl border px-4 md:px-5 transition-transform duration-500 hover:-translate-y-1"
            triggerClassName="py-4 text-left text-sm font-semibold md:text-base hover:no-underline"
            triggerStyle={{ color: headingColor }}
            style={{
              borderColor: `${headingColor}33`,
              backgroundColor: `${headingColor}08`,
            }}
          >
            <div className="pb-4 pt-1">
              <p
                className="whitespace-pre-line text-sm font-medium leading-relaxed md:text-base"
                style={{ color: bodyColor }}
              >
                {faq.answer}
              </p>
            </div>
          </Accordion>
        ))}
      </Accordions>
    </div>
  );
};

export default FaqSection;
