 "use client";

import BlogList from "@/app/components/blogs/BlogList";
// import HeroSection from "@/app/components/blogs/HeroSection";
import React from "react";
import { useSection } from "@/app/providers/SectionProvider";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

const Page = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
     const productBottomWave = assetWithFill(wave4Svg, "#ffffff");

  return (
    <div
      className="relative overflow-hidden pb-40"
      style={{
        background: isPersonal
          ? "linear-gradient(180deg, rgba(130,0,219,0.10) 0%, rgba(130,0,219,0.03) 55%, rgba(255,255,255,1) 100%)"
          : "#BFDDCA",
      }}
    >
  <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
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
