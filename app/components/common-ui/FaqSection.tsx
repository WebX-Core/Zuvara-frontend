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
    <div className="space-y-3">
      <Accordions type="single" className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            id={`faq-${index}`}
            title={faq.question}
            className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm px-4 py-1 md:px-6 transition-all duration-300 hover:shadow-lg hover:bg-white/80 border border-transparent hover:border-opacity-20"
            triggerClassName="text-left text-base font-bold hover:no-underline md:text-lg py-4"
            triggerStyle={{ color: headingColor }}
            style={{ borderColor: `${headingColor}15` }}
          >
            <div className="pb-4 pt-1 px-1">
              <p
                className="whitespace-pre-line text-sm font-medium leading-relaxed md:text-base opacity-90"
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
