"use client";

import { FAQ } from "@/type/babyCareProductType";
import { Accordion, Accordions } from "../ui/accordion";

interface FaqSectionProps {
  faqs?: FAQ[];
  questionColor?: string;
  answerColor?: string;
}

const FaqSection = ({
  faqs = [],
  questionColor = "text-zinc-900",
  answerColor = "text-zinc-600",
}: FaqSectionProps) => {
  if (faqs.length === 0) return null;

  // Split into two columns for the grid
  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section className="">
      <div className="mb-4">
        <h2
          className={`text-lg lg:text-3xl font-semibold lg:font-black mb-2 lg:mb-4 tracking-tight ${questionColor}`}
        >
          Frequently Asked Questions
        </h2>
        <p className={`${answerColor} font-medium`}>
          Everything you need to know about this product.
        </p>
      </div>

      <div className="grid grid-cols-1">
        <div className="flex flex-col">
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
                triggerClassName={questionColor}
              >
                <p
                  className={`${answerColor} text-sm lg:text-base lg:leading-relaxed whitespace-pre-line`}
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
                triggerClassName={questionColor}
              >
                <p
                  className={`${answerColor} leading-relaxed whitespace-pre-line`}
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
