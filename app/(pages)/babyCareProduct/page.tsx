"use client";

// import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHero from "@/app/components/babyCareProduct/HeroSection";
// import DesktopProductList from "@/app/components/babyCareProduct/ProductList";
import MobileHero from "@/app/components/babyCareProductMobile/HeroSection";
import MobileProductList from "@/app/components/babyCareProductMobile/ProductList";
import Product from "@/app/components/babyCare/Product";

const BabyCareProductPage = () => {
  // const [isMounted, setIsMounted] = useState(false);
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return <div className="min-h-screen bg-white" />;
  // }

  return (
    <div className="">
      {isSmallerDevice ? (
        <>
          <MobileHero />
          <MobileProductList />
        </>
      ) : (
        <>
          <DesktopHero />
          <Product />
        </>
      )}
    </div>
  );
};

export default BabyCareProductPage;
