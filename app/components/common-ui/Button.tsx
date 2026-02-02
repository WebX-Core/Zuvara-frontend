"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
interface ButtonProps {
  content: string;
  buttonClassName?: string;
  link?: string;
  icon?: string;
  for?: "babyCare" | "personalCare";
  className?: string;
}

const Button = ({
  content,
  buttonClassName,
  link,
  icon,
  for: variant = "babyCare",
  className,
}: ButtonProps) => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 480 });
  const variantStyles =
    variant === "personalCare"
      ? "bg-personalCare text-zinc-100! ring ring-zinc-400"
      : "bg-foreground text-zinc-100!";
  // : "bg-linear-to-l from-foreground to-[#8cd700] text-background! hover:bg-linear-to-r hover:bg-foreground hover:text-background!";
  return (
    <div className={cn("w-fit", buttonClassName)}>
      <Link
        href={link || "#"}
        className={cn(
          "flex items-center justify-center lg:justify-start gap-2 font-medium px-4 lg:px-6 py-3 transition-all duration-300 rounded-lg md:rounded-full text-sm lg:text-base",
          variantStyles,
          className,
        )}
      >
        {!isSmallerDevice && icon && (
          <Icon icon={icon} width={"24"} height={"24"} />
        )}
        {content}
      </Link>
    </div>
  );
};
export default Button;
