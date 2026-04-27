import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardVariant = "section" | "elevated" | "flat";
type Brand       = "baby" | "personal" | "neutral";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  brand?: Brand;
};

const base = "relative overflow-hidden";

const variants: Record<CardVariant, string> = {
  /** Large structural panel — product hero containers */
  section:  "rounded-card px-6 lg:px-10 py-8",
  /** Floating card — search dropdowns, modals, elevated surfaces */
  elevated: "rounded-modal shadow-xl border border-zinc-100 bg-white",
  /** Flat surface card — product listing tiles */
  flat:     "rounded-modal border border-zinc-100 bg-white",
};

const brandBg: Record<Brand, string> = {
  baby:     "bg-baby-panel",
  personal: "bg-personal-panel",
  neutral:  "bg-zinc-50",
};

export default function Card({
  variant = "flat",
  brand,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        base,
        variants[variant],
        variant === "section" && brand ? brandBg[brand] : "",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
