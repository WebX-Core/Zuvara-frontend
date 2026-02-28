"use client";

import React from "react";
import { babyCareProducts } from "@/constants/babyCareProduct";
import ProductCard from "../common-ui/ProductCard";
import type { Product as ProductType } from "@/type/babyCareProductType";
import SectionHeading from "../common-ui/SectionHeading";
import { useMediaQuery } from "react-responsive";


const ProductList = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <section className="container lg:min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-6 w-[90%]">
      <SectionHeading
        title="Our Premium"
        highlight="Diaper Collection"
        description="Discover our best-selling items"
        align={`${isSmallerDevice ? "left" : "center"}`}
        descClassName={`${isSmallerDevice ? "text-left" : "text-center"}`}
      />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 mt-8 h-200">
        {babyCareProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product as unknown as ProductType}
            index={index}
            activeTab="baby"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
