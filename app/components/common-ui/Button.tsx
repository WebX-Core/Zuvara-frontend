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
  onClick?: (e: React.MouseEvent) => void;
  bgColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  content,
  buttonClassName,
  link,
  icon,
  for: variant = "babyCare",
  className,
  onClick,
  bgColor,
  textColor,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 480 });
  
  const variantBg = variant === "personalCare" 
    ? "bg-personalCare ring ring-zinc-400" 
    : "bg-foreground";
    
  const variantText = "text-white"; // Default text color

  const buttonClasses = cn(
    "flex items-center justify-center lg:justify-start gap-2 font-medium px-4 lg:px-6 py-3 transition-all duration-300 rounded-lg md:rounded-full text-sm lg:text-base",
    !bgColor && variantBg,
    !textColor && variantText,
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  // If type is submit or no link provided, render as button
  if (type === "submit" || type === "reset" || !link) {
    return (
      <div className={cn("w-fit", buttonClassName)}>
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          style={buttonStyle}
          className={buttonClasses}
        >
          {!isSmallerDevice && icon && (
            <Icon icon={icon} width={"24"} height={"24"} />
          )}
          {content}
        </button>
      </div>
    );
  }

  // Otherwise render as Link
  return (
    <div className={cn("w-fit", buttonClassName)}>
      <Link
        href={link}
        onClick={onClick}
        style={buttonStyle}
        className={buttonClasses}
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
