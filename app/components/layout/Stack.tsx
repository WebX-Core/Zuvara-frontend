import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * Spacing scale:
 *
 * xs  → gap-2   tight inline elements (icon + label, badge clusters)
 * sm  → gap-3   compact UI groups (form field + helper text)
 * md  → gap-6   component-level groups (card body, form sections)
 * lg  → gap-10  section-level groups (hero text + CTA, feature rows)
 * xl  → gap-16  top-level page blocks stacked vertically
 */
type StackSpacing = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * align maps to Tailwind `items-*` on the cross axis.
 * Default is "stretch" so children fill the full width by default.
 */
type StackAlign = "start" | "center" | "end" | "stretch";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  spacing?: StackSpacing;
  align?: StackAlign;
  children: ReactNode;
};

// ─── Maps ─────────────────────────────────────────────────────────────────────

const spacingMap: Record<StackSpacing, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-10",
  xl: "gap-16",
};

const alignMap: Record<StackAlign, string> = {
  start:   "items-start",
  center:  "items-center",
  end:     "items-end",
  stretch: "items-stretch",
};

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Stack
 *
 * Vertical flex layout with controlled gap spacing.
 * Use `spacing` to pick from the 5-level scale.
 * Children must NOT add outer margins — Stack owns the spacing.
 *
 * @example
 * <Stack spacing="md" align="start">
 *   <Heading />
 *   <Text />
 *   <Button />
 * </Stack>
 */
export default function Stack({
  spacing = "md",
  align = "stretch",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        spacingMap[spacing],
        alignMap[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
