"use client";

import HeroSection from "@/app/components/contact/HeroSection";
import { useSection } from "@/app/providers/SectionProvider";
// import MapSection from "@/app/components/contact/MapSection";

const Page = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: isPersonal
          ? "linear-gradient(180deg, rgba(130,0,219,0.12) 0%, rgba(130,0,219,0.04) 50%, rgba(255,255,255,1) 100%)"
          : "linear-gradient(180deg, rgba(191,221,202,0.48) 0%, rgba(191,221,202,0.12) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -top-14 right-6 h-48 w-48 rounded-full blur-3xl"
        style={{
          backgroundColor: isPersonal
            ? "rgba(147,82,191,0.20)"
            : "rgba(69,104,94,0.20)",
        }}
      />
      <HeroSection />
      {/* <MapSection /> */}
    </div>
  );
};

export default Page;
