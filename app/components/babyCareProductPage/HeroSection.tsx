import React from "react";
import { Product } from "@/type/babyCareProductType";
import Button from "../common-ui/Button";
import Link from "next/link";

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
    // <div className="relative h-dvh">
    //   <div className="absolute top-4 left-1/2 -translate-x-1/2">
    //     <div className="flex flex-col items-center gap-4">
    //       <span className="text-[10px] lg:text-xs font-bold uppercase lg:tracking-wider whitespace-nowrap px-3 py-1 bg-(--product-bg) text-(--product-fg) rounded-full">
    //         {product.category}
    //       </span>
    //       <p className="text-3xl lg:text-5xl font-semibold text-(--product-bg)">
    //         {product.name}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
    //     <img
    //       src={product.heroImage}
    //       alt={`${product.name} - "Hero Image"`}
    //       className="w-200"
    //     />
    //   </div>
    // </div>
    <div className="relative h-dvh flex items-center justify-between">
      <div className="w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-3xl lg:text-5xl font-semibold">{product.name}</p>

          <div className="flex flex-col gap-3 my-4">
            {product.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="shrink-0 size-6 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform bg-(--product-bg)/10">
                  <div className="size-2 rounded-full bg-(--product-bg)" />
                </div>
                <span className="text-zinc-600 font-medium lg:text-lg leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
          <Button
            content="View Product"
            onClick={handleScroll}
            link="#product-info"
            bgColor={product.background}
            textColor={product.foreground || "#ffffff"}
          />
        </div>
      </div>
      <div className="w-1/2 h-full relative">
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
        <img
          src={product.heroImage}
          alt={`${product.name} - "Hero Image"`}
          className="w-80 absolute mt-12 top-1/2 -translate-y-1/2 left-0 z-10"
        />
        <img
          src={product.heroImage2}
          alt={`${product.name} - "Hero Image"`}
          className="w-80 absolute top-1/2 -translate-y-1/2 right-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
