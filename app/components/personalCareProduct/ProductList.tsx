"use client";

import React from "react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import ProductCard from "../common-ui/ProductCard";
import type { Product as ProductType } from "@/type/babyCareProductType";

const ProductList = () => {
  return (
    <section className="container min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl lg:pt-36">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
        {personalCareProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product as unknown as ProductType}
            index={index}
            activeTab="personal"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
