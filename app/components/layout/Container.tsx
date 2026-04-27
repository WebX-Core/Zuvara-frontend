import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * sm  → max-w-3xl   prose, modals, narrow forms
 * md  → max-w-5xl   mid-width content columns
 * lg  → max-w-7xl   standard page content (default)
 * xl  → max-w-screen-2xl  full-bleed-ish wide layouts
 */
type ContainerSize = "sm" | "md" | "lg" | "xl";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
  children: ReactNode;
};

// ─── Maps ─────────────────────────────────────────────────────────────────────

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
};

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Container
 *
 * Centers content horizontally and constrains max-width.
 * Applies consistent horizontal padding to prevent content
 * from touching viewport edges on small screens.
 *
 * @example
 * <Container size="lg">
 *   <Stack>…</Stack>
 * </Container>
 */
export default function Container({
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
