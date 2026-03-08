 "use client";

import BlogList from "@/app/components/blogs/BlogList";
// import HeroSection from "@/app/components/blogs/HeroSection";
import React from "react";
import { useSection } from "@/app/providers/SectionProvider";

const Page = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: isPersonal
          ? "linear-gradient(180deg, rgba(130,0,219,0.10) 0%, rgba(130,0,219,0.03) 55%, rgba(255,255,255,1) 100%)"
          : "linear-gradient(180deg, rgba(191,221,202,0.45) 0%, rgba(191,221,202,0.12) 55%, rgba(255,255,255,1) 100%)",
      }}
    >
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
