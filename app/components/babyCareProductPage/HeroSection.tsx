"use client";
import React from "react";
import { Product } from "@/type/babyCareProductType";
import Button from "../common-ui/Button";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  product: Product;
}
const HeroSection = ({ product }: HeroSectionProps) => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("product-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-dvh flex items-center justify-between w-full mx-auto ">
      {product.heroImage && (
        <Image
          src={product.heroImage}
          alt={`${product.name} - "Hero Image"`}
          width={300}
          height={300}
          className=""
        />
      )}
      <div className="w-1/3">
        <div className="flex flex-col gap-4">
          <p className="text-3xl lg:text-[120px] text-zinc-800 font-bold leading-30">
            {product.name}
          </p>

          <div className="flex flex-col gap-3 my-4">{product.subDesc1}</div>
        </div>
      </div>
      {/* <div className="w-1/2 h-full relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[140%] opacity-90"
        >
          <path
            fill={product.background || "#456a5c"}
            d="M50.5,-42.6C61,-27.2,61.9,-6.4,56.6,11.4C51.4,29.3,39.9,44.3,23.6,54.1C7.2,64,-14.1,68.8,-34.7,62.5C-55.3,56.3,-75.1,39,-78.1,19.6C-81.1,0.3,-67.2,-21.2,-51.4,-37.8C-35.6,-54.5,-17.8,-66.5,1.1,-67.4C20,-68.3,40,-58.1,50.5,-42.6Z"
            transform="translate(100 100)"
          />
        </svg>
      
       
      </div> */}
      {product.heroImage2 && 
       <Image
        src={product.heroImage2}
        alt={`${product.name} - "Hero Image"`}
        width={350}
        height={300}
        className=""
      ></Image>
      }
     
    </div>
  );
};

export default HeroSection;
