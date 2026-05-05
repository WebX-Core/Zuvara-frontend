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
        className="w-full space-y-1 [perspective-distant]"
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            id={`faq-${index}`}
            title={faq.question}
            className="fx-rise overflow-hidden rounded-2xl px-2 md:px-3 transition-transform duration-500 hover:-translate-y-1"
            triggerClassName="text-left text-sm font-semibold hover:no-underline md:text-base"
            triggerStyle={{ color: headingColor }}
          >
            <div className="pb-2 pt-1">
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
