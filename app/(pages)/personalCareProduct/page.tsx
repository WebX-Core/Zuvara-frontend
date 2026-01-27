import StatsDividerMob from "@/app/components/personalCare/StatsDividerMob";
import HeroSection from "@/app/components/personalCareProduct/HeroSection";
import ProductList from "@/app/components/personalCareProduct/ProductList";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <StatsDividerMob />
      <ProductList />
    </div>
  );
};

export default page;
