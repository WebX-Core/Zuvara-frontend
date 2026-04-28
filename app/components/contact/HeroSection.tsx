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
  const imageSize = isPersonal ? (isMobile ? 220 : 380) : isMobile ? 180 : 260;
  const wave = assetWithFill(wave4Svg, isPersonal ? "#f4e8fc" : "#ffffff");

  return (
    <div
      className={cn(
        "relative flex min-h-[calc(100svh-4rem)] justify-center overflow-hidden pt-16 lg:min-h-screen lg:items-center lg:pt-0",
        isPersonal ? "bg-personalCare/10" : "bg-babyCare",
      )}
    >
      <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: wave.markup }}
      />

      <section className="container relative z-20 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="relative flex flex-col gap-8 pb-24 lg:min-h-screen lg:flex-row lg:items-end lg:justify-center lg:gap-10 lg:pb-28">
          
          {/* Left: Contact */}
          <div className="w-full lg:w-2/3">
            <ContactSection />
          </div>
         {/* Right: Bubble + Image as one anchored unit */}
<div className="relative flex w-full justify-center lg:w-1/3 lg:justify-end">
  
  {/* On desktop: relative container so bubble can absolute-position above image */}
  <div
    className={cn(
      "relative flex flex-col items-center lg:flex lg:items-end",
      isPersonal ? "lg:items-center" : "lg:items-start",
    )}
  >
    {/* Chat bubble — stacked on mobile, absolutely above image on desktop */}
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
      style={{ originX: 0.5, originY: 1 }}
      className={cn(
        "relative z-10 mb-2 w-full max-w-[18rem] rounded-2xl p-4 sm:max-w-sm",
        
        "lg:absolute  lg:mb-0 lg:-translate-y-3",
        isPersonal
          ? "bg-personalCare/50 text-white lg:max-w-[20rem] lg:left-1/2 lg:-translate-x-1/2"
          : "bg-foreground/80 text-white lg:max-w-70 lg:left-0",
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

      {/* Tail pointing down toward image */}
      <div
        className={cn(
          "absolute -bottom-5 left-1/2 -translate-x-1/2 size-5 sm:-bottom-6 sm:size-6 lg:-bottom-7 lg:size-7",
          isPersonal ? "bg-personalCare/50" : "bg-foreground/80",
        )}
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        }}
      />
    </motion.div>

    {/* Image — sits at bottom of column on desktop, normal flow on mobile */}
    <div className="relative z-0 pt-5 sm:pt-6 lg:pt-0">
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
          "object-contain drop-shadow-2xl",
          isPersonal ? "mx-auto lg:translate-x-6" : "",
        )}
      />
    </div>
  </div>
</div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;