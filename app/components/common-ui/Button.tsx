import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface ButtonProps {
  content: string;
  link: string;
  icon?: string;
}

const Button = ({ content, link, icon }: ButtonProps) => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="w-fit">
      <Link
        href={link}
        className="flex items-center gap-2 bg-linear-to-l from-foreground to-[#8cd700] text-background! hover:bg-linear-to-r hover:bg-foreground hover:text-background! font-medium px-4 lg:px-6 py-2 lg:py-3 transition-all duration-300 rounded-full text-sm lg:text-base"
      >
        {icon && (
          <Icon
            icon={icon}
            width={isSmallerDevice ? "20" : "24"}
            height={isSmallerDevice ? "20" : "24"}
          />
        )}
        {/* {icon && <Icon icon={icon} className="size-5 lg:size-6" />} */}
        {content}
      </Link>
    </div>
  );
};

export default Button;
