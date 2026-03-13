"use client";

import HeroSection from "@/app/components/contact/HeroSection";
import { useSection } from "@/app/providers/SectionProvider";

const Page = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: isPersonal
          ? "#D3C4DE"
          : "#bfddd9",
      }}
    >
      <div
        className={`pointer-events-none absolute right-2 top-2 z-10 text-right text-[clamp(3.5rem,18vw,8rem)] font-black uppercase leading-none select-none md:right-8 md:top-3 lg:right-10 lg:top-4 ${isPersonal ? "text-ternary/80" : "text-foreground"}`}
 
      >
        ZUVARA
      </div>
      <div
        className="pointer-events-none absolute -top-14 right-6 h-48 w-48 rounded-full blur-3xl"
        style={{
          backgroundColor: isPersonal
            ? "rgba(147,82,191,0.20)"
            : "rgba(69,104,94,0.20)",
        }}
      />
      <HeroSection />
    </div>
  );
};

export default Page;
