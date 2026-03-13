 "use client";

import BlogList from "@/app/components/blogs/BlogList";
// import HeroSection from "@/app/components/blogs/HeroSection";
import React from "react";
import { useSection } from "@/app/providers/SectionProvider";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

const Page = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const wave = assetWithFill(wave4Svg, isPersonal ? "#f4e8fc" : "#ffffff");

  return (
    <div
      className="relative overflow-hidden pb-20 sm:pb-40"
      style={{
        background: isPersonal
          ? "#ffffff"
          : "#BFDDCA",
        
      }}
    >
       <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: wave.markup }}
      />
      <div
        className="pointer-events-none absolute -top-16 -left-16 h-52 w-52 rounded-full blur-3xl"
        style={{
          backgroundColor: isPersonal
            ? "rgba(147,82,191,0.20)"
            : "rgba(69,104,94,0.20)",
        }}
      />
      {/* <HeroSection /> */}
      <BlogList />
    </div>
  );
};

export default Page;
