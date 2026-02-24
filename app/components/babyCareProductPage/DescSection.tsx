import React from "react";
import { Product } from "@/type/babyCareProductType";

interface DescSectionProps {
  product: Product;
}

const DescSection = ({ product }: DescSectionProps) => {
  return (
    <div className="py-4 lg:py-8 text-center">
      <p
        style={{
          color: product.background || "#000000",
        }}
        className="text-lg lg:text-3xl font-semibold"
      >
        {product.description}
      </p>
      <div className="space-y-3 text-zinc-600 text-sm lg:text-base leading-relaxed">
        <p>{product.subDesc1}</p>
        {/* <p>{product.subDesc2}</p>
        <p>{product.subDesc3}</p>
        <p>{product.subDesc4}</p> */}
      </div>
    </div>
  );
};

export default DescSection;
