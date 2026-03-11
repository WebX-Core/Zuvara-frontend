"use client";

import React from "react";
import { motion } from "framer-motion";
import DesktopHero from "@/app/components/babyCareProduct/HeroSection";
import Product from "@/app/components/babyCare/Product";
import { useMediaQuery } from "react-responsive";
import MobileHero from "@/app/components/babyCareProductMobile/HeroSection";
import WhyZuvaraProductsSection from "@/app/components/babyCareProduct/WhyZuvaraProductsSection";
import ProductFaqSection from "@/app/components/babyCareProduct/ProductFaqSection";
import { babyCareListingTheme } from "@/app/components/babyCareProduct/theme";

const BabyCareProductPage = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-hidden bg-babyCare/20"
    >
      {isSmallerDevice ? (
        <>
          <MobileHero />
          <div className="pb-12">
            <Product />
           
              <WhyZuvaraProductsSection theme={babyCareListingTheme} />
              <ProductFaqSection theme={babyCareListingTheme} />
            
          </div>
        </>
      ) : (
        <>
          <DesktopHero theme={babyCareListingTheme} />

          <Product />

          <WhyZuvaraProductsSection theme={babyCareListingTheme} />
          <ProductFaqSection theme={babyCareListingTheme} />
        </>
      )}
    </motion.div>
  );
};

export default BabyCareProductPage;
