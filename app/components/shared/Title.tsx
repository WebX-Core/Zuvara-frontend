import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface TitleProps {
  title: string;
  highligher?: string;
  titleClassName?: string;
  desc?: string;
  descClassName?: string;
  showBreak?: boolean;
}
const Title = ({
  title,
  highligher,
  titleClassName,
  desc,
  descClassName,
  showBreak = true,
}: TitleProps) => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-semibold",
          isPersonal ? "text-zinc-900" : "text-foreground",
          titleClassName,
        )}
      >
        {title} {showBreak && <br />}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(isPersonal ? "text-personalCare" : "text-secondary")}
        >
          {highligher}
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "text-lg lg:text-xl text-zinc-600 font-medium max-w-lg leading-relaxed",
          descClassName,
        )}
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Title;
