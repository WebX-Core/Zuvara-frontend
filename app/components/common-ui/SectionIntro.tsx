import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionIntroSpacing = "mb-8 md:mb-10 lg:mb-12";
export const sectionContentSpacing = "mt-8 md:mt-10";

type SectionIntroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs = "h2",
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
  titleStyle,
  descriptionStyle,
}: SectionIntroProps) {
  const TitleTag = titleAs;
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow}
      <div
        className={cn(
          "flex flex-col gap-3",
          isCentered && "items-center",
          contentClassName,
        )}
      >
        <TitleTag className={titleClassName} style={titleStyle}>
          {title}
        </TitleTag>
        {description ? (
          <p
            className={cn("max-w-2xl", descriptionClassName)}
            style={descriptionStyle}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
