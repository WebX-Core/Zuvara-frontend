"use client";
import { FAQ, Product } from "@/type/babyCareProductType";
import { Accordion, Accordions } from "../ui/accordion";

interface FaqSectionProps {
  faqs?: FAQ[];
  questionColor?: string;
  answerColor?: string;
  product: Product;
}

const FaqSection = ({
  faqs = [],
  questionColor,
  answerColor,
  product,
}: FaqSectionProps) => {
  if (faqs.length === 0) return null;

  const headingColor = questionColor || product.background || "#000000";
  const bodyColor = answerColor || "#52525b";

  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section className="py-4 lg:py-8 ">
      <div className="flex flex-col gap-2 items-center justify-center mb-4">
        <h2
          className="text-lg lg:text-3xl font-semibold"
          style={{ color: headingColor }}
        >
          Frequently Asked Questions
        </h2>
        <p className="lg:text-lg leading-relaxed" style={{ color: bodyColor }}>
          Everything you need to know about this product.
        </p>
      </div>

      <div className="grid grid-cols-1  w-2xl mx-auto">
        <div className="flex flex-col ">
          <Accordions
            type="single"
            className="w-full border-none bg-transparent shadow-none divide-y-0"
          >
            {leftColumn.map((faq, index) => (
              <Accordion
                key={index}
                id={`faq-left-${index}`}
                title={faq.question}
                className="border-b border-zinc-100 lg:last:border-0"
                triggerClassName=""
                triggerStyle={{ color: headingColor, colorProperty: headingColor }}
              >
                <p
                  className="text-sm lg:text-base lg:leading-relaxed whitespace-pre-line"
                  style={{ color: bodyColor }}
                >
                  {faq.answer}
                </p>
              </Accordion>
            ))}
          </Accordions>
        </div>
        <div className="flex flex-col">
          <Accordions
            type="single"
            className="w-full border-none bg-transparent shadow-none divide-y-0"
          >
            {rightColumn.map((faq, index) => (
              <Accordion
                key={index}
                id={`faq-right-${index}`}
                title={faq.question}
                className="border-b border-zinc-100 last:border-0"
                triggerClassName=""
                triggerStyle={{ color: headingColor, colorProperty: headingColor }}
              >
                <p
                  className="leading-relaxed whitespace-pre-line"
                  style={{ color: bodyColor }}
                >
                  {faq.answer}
                </p>
              </Accordion>
            ))}
          </Accordions>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;