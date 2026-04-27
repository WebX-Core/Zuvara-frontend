import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Brand = "baby" | "personal" | "neutral";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  brand?: Brand;
};

const base = "inline-flex items-center rounded-chip px-3 py-1 text-xs font-semibold tracking-wide";

const brandStyles: Record<Brand, string> = {
  baby:     "bg-baby-chip text-baby-accent",
  personal: "bg-personal-chip text-personal-accent",
  neutral:  "bg-zinc-100 text-zinc-600",
};

export default function Badge({
  brand = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(base, brandStyles[brand], className)} {...props}>
      {children}
    </span>
  );
}
