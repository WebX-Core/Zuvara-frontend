import { Icon } from "@iconify-icon/react";
import Link from "next/link";

interface ButtonProps {
  content: string;
  link: string;
  icon?: string;
}

const Button = ({ content, link, icon }: ButtonProps) => {
  return (
    <div className="w-fit">
      <Link
        href={link}
        className="flex items-center gap-2 bg-linear-to-l from-foreground to-[#8cd700]  text-background! border-2 border-foreground hover:bg-linear-to-r hover:bg-foreground hover:text-background! font-medium px-6 py-3 transition-transform duration-300 rounded-full"
      >
        {icon && <Icon icon={icon} width="24" height="24" />}
        {content}
      </Link>
    </div>
  );
};

export default Button;
