import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * sm  → py-8  md:py-10   tight sections (hero sub-bands, footers)
 * md  → py-12 md:py-16   standard page sections
 * lg  → py-16 md:py-24   primary hero and hero-level sections
 */
type SectionSize = "sm" | "md" | "lg";

type SectionTag = "section" | "div" | "article" | "aside" | "header" | "footer" | "main";

type SectionProps = HTMLAttributes<HTMLElement> & {
  size?: SectionSize;
  /** Semantic HTML tag. Defaults to "section". */
  as?: SectionTag;
  children: ReactNode;
};

// ─── Maps ─────────────────────────────────────────────────────────────────────

const sizeMap: Record<SectionSize, string> = {
  sm: "py-8  md:py-10",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
};

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Section
 *
 * Controls vertical rhythm for page-level sections.
 * Does NOT manage horizontal padding — use Container inside it.
 *
 * @example
 * <Section size="md">
 *   <Container>…</Container>
 * </Section>
 */
export default function Section({
  size = "md",
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(sizeMap[size], className)} {...props}>
      {children}
    </Tag>
  );
}
