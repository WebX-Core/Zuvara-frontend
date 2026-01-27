import AboutProduct from "@/app/components/personalCare/AboutProduct";
import HeroSection from "@/app/components/personalCare/HeroSection";
import StatsDivider from "@/app/components/personalCare/StatsDivider";
import StatsDividerMob from "@/app/components/personalCare/StatsDividerMob";
import WhyUsSection from "@/app/components/personalCare/WhyUsSection";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      {/* <StatsDivider /> */}
      {/* <StatsDividerMob /> */}
      <WhyUsSection />
      <AboutProduct />
    </div>
  );
};

export default page;
