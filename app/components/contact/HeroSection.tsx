"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypingAnimation } from "../shared/TypingAnimation";
import { useMediaQuery } from "react-responsive";
import ContactSection from "./ContactSection";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const imageSize = isPersonal
    ? isMobile
      ? 220
      : 380
    : isMobile
      ? 180
      : 260;
  const wave = assetWithFill(wave4Svg, isPersonal ? "#f4e8fc" : "#ffffff");

  return (
    <div
      className={cn(
        "relative flex min-h-[calc(100svh-4rem)] justify-center overflow-hidden pt-16 lg:min-h-screen lg:items-center lg:pt-0",
        isPersonal ? "bg-personalCare/10" : "bg-[#bfddca]",
      )}
    >
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: wave.markup }}
      />
      <section className="container relative z-20 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative flex flex-col gap-8 pb-24 lg:min-h-screen lg:flex-row lg:items-end lg:justify-center lg:gap-10 lg:pb-28">
          <div className="w-full lg:w-2/3">
            <ContactSection />
          </div>

          <div className="relative flex w-full items-end justify-center lg:w-1/3 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              style={{ originX: 1, originY: 1 }}
              className={cn(
                "absolute left-1/2 top-0 z-10 h-auto w-full max-w-[18rem] -translate-x-1/2 rounded-2xl p-4 sm:max-w-sm",
                isPersonal
                  ? "bg-personalCare/50 text-white lg:left-1/2 lg:top-auto lg:max-w-[20rem] lg:-translate-x-1/2 lg:-translate-y-6"
                  : "bg-foreground/80 text-white lg:left-0 lg:top-auto lg:max-w-70 lg:translate-x-0 lg:-translate-y-10",
              )}
            >
              <TypingAnimation
                text={
                  isPersonal
                    ? "Hi! Looking for comfortable, reliable personal care products?"
                    : "Hello! Looking for gentle, comfy diapers for your baby?"
                }
                className="text-base font-semibold sm:text-lg lg:text-xl"
                duration={75}
                delay={1500}
              />

              <div
                className={cn(
                  "absolute -bottom-6 right-8 size-6 sm:-bottom-8 sm:right-10 sm:size-8 lg:-bottom-10 lg:right-12 lg:size-10",
                  isPersonal
                    ? "bg-personalCare/50 lg:-bottom-8 lg:right-1/2 lg:size-8 lg:translate-x-1/2"
                    : "bg-foreground/80",
                )}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              />
            </motion.div>

            <div className="relative mt-24 sm:mt-28 lg:mt-0">
              <Image
                src={
                  isPersonal
                    ? "/new/contacpagemom.png"
                    : "/images/baby/baby-calling.webp"
                }
                alt={isPersonal ? "mom calling" : "baby calling"}
                width={imageSize}
                height={imageSize}
                className={cn(
                  "relative z-0 object-contain drop-shadow-2xl",
                  isPersonal ? "mx-auto sm:max-w-[22rem] lg:max-w-none lg:translate-x-6" : "",
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
