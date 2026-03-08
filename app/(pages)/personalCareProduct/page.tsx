"use client";

import HeroSection from "@/app/components/personalCareProduct/HeroSection";
import ProductFaqSection from "@/app/components/personalCareProduct/ProductFaqSection";
import ProductList from "@/app/components/personalCareProduct/ProductList";
import WhyZuvaraProductsSection from "@/app/components/personalCareProduct/WhyZuvaraProductsSection";
import { personalCareListingTheme } from "@/app/components/personalCareProduct/theme";
import { motion } from "framer-motion";

const PersonalCarePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-personalCare/6"
    >
      <HeroSection />
      <ProductList />
      <WhyZuvaraProductsSection theme={personalCareListingTheme} />
      <ProductFaqSection theme={personalCareListingTheme} />
    </motion.main>
  );
};

export default PersonalCarePage;
