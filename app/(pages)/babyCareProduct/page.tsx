"use client";

import React from "react";
import { motion } from "framer-motion";
import DesktopHero from "@/app/components/babyCareProduct/HeroSection";
import Product from "@/app/components/babyCare/Product";
import { useMediaQuery } from "react-responsive";
import MobileHero from "@/app/components/babyCareProductMobile/HeroSection";
import MobileProductList from "@/app/components/babyCareProductMobile/ProductList";

const BabyCareProductPage = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#FCFAF8]" // Soft off-white for a premium feel
    >
      {isSmallerDevice ? (
        <>
          <MobileHero />
          <div className="pb-12">
            <MobileProductList />
          </div>
        </>
      ) : (
        <>
          <DesktopHero />
          <div className="max-w-[1440px] mx-auto pb-24">
            <Product />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default BabyCareProductPage;
