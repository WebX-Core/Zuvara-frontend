import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Brand   = "baby" | "personal" | "neutral";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  brand?: Brand;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const sizes = "px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base";

const variants: Record<Variant, Record<Brand, string>> = {
  primary: {
    baby:     "bg-baby-accent text-white hover:shadow-xl hover:scale-105 focus-visible:ring-baby-accent",
    personal: "bg-personal-accent text-white hover:shadow-xl hover:scale-105 focus-visible:ring-personal-accent",
    neutral:  "bg-zinc-900 text-white hover:shadow-xl hover:scale-105 focus-visible:ring-zinc-900",
  },
  outline: {
    baby:     "outline outline-baby-accent text-baby-accent hover:bg-baby-chip hover:scale-105 focus-visible:ring-baby-accent",
    personal: "outline outline-personal-accent text-personal-accent hover:bg-personal-chip hover:scale-105 focus-visible:ring-personal-accent",
    neutral:  "outline outline-zinc-900 text-zinc-900 hover:bg-zinc-100 hover:scale-105 focus-visible:ring-zinc-900",
  },
  ghost: {
    baby:     "border border-baby-border bg-white/70 text-baby-accent hover:bg-white/20",
    personal: "border border-personal-border bg-white/70 text-personal-accent hover:bg-white/20",
    neutral:  "border border-zinc-200 bg-white/70 text-zinc-700 hover:bg-zinc-50",
  },
};

export default function Button({
  variant = "primary",
  brand = "baby",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, sizes, variants[variant][brand], className)}
      {...props}
    >
      {children}
    </button>
  );
}
