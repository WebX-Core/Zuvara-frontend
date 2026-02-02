"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypingAnimation } from "../shared/TypingAnimation";
import Title from "../shared/Title";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <div
      className={cn(
        "h-[75vh] lg:min-h-screen flex lg:items-center justify-center transition-colors duration-500 pt-4 lg:pt-0",
      )}
    >
      <section className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="h-full flex flex-col lg:flex-row lg:items-center justify-between lg:justify-center relative">
          <div className="lg:w-1/2">
            <Title
              title="Let's"
              highligher="Connect"
              desc="Diapers, wipes, and gentle care products meticulously designed
                to keep your baby clean, comfortable, and remarkably happy."
            />
          </div>

          <div className="lg:w-1/2 flex justify-end relative">
            {/* Premium Rounded Message Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              style={{ originX: 1, originY: 1 }}
              className={cn(
                "absolute -top-16 md:top-0 lg:-top-16 left-0 md:left-[35%] lg:left-[20%] z-10 p-4 w-full max-w-55 md:max-w-70 h-36 md:h-28 rounded-2xl",
                isPersonal
                  ? "bg-personalCare/50 text-white"
                  : "bg-babyCare/70 text-foreground",
              )}
            >
              <TypingAnimation
                text="Hello! Looking for gentle, comfy diapers for your baby?"
                className="text-xl font-semibold"
                duration={75}
                delay={1500}
              />

              {/* The Rounded Tail */}
              <div
                className={cn(
                  "absolute -bottom-10 right-12 size-10",
                  isPersonal ? "bg-personalCare/50" : "bg-babyCare/70",
                )}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              />
            </motion.div>

            <div className="relative">
              <div
                className={cn(
                  "absolute inset-0 blur-3xl opacity-20 rounded-full",
                  isPersonal ? "bg-ternary" : "bg-blue-400",
                )}
              />
              <Image
                src="/images/baby/baby-calling.png"
                alt="baby calling"
                width={200}
                height={200}
                className="relative z-0 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
