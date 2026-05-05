"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import SectionIntro from "./SectionIntro";

interface SectionHeadingProps {
  title: ReactNode;
  titleClassName?: string;
  highlight?: ReactNode;
  description?: ReactNode;
  className?: string;
  descClassName?: string;
  highlighterColor?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  title,
  titleClassName,
  highlight,
  description,
  className,
  descClassName,
  highlighterColor,
  align = "left",
}: SectionHeadingProps) => {
  const alignClasses = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      <SectionIntro
        align={align}
        title={
          <>
            {title}{" "}
            {highlight ? (
              <span className={`text-[#8cd700] ${highlighterColor ?? ""}`}>
                {highlight}
              </span>
            ) : null}
          </>
        }
        description={description}
        titleClassName={`text-2xl font-bold text-foreground font-poppins lg:text-4xl ${titleClassName ?? ""}`}
        descriptionClassName={`text-lg text-zinc-600 ${alignClasses} ${descClassName ?? ""}`}
      />
    </motion.div>
  );
};

export default SectionHeading;
