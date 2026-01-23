"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  descClassName?: string;
  highlighterColor?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  title,
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
      className={`${alignClasses} mb-4 ${className}`}
    >
      <h2 className="text-2xl lg:text-4xl font-semibold text-foreground font-poppins">
        {title}{" "}
        {highlight && (
          <span className={`text-[#8cd700] ${highlighterColor}`}>
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`text-lg text-zinc-600 text-center max-w-2xl mt-2 mx-auto ${descClassName}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
