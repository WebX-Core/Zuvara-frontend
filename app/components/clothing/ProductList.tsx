"use client";

import React from "react";
import ProductCard from "../common-ui/ProductCard";
import { clothingProducts } from "@/constant/babyClothes";
import type { Product as ProductType } from "@/type/babyClothesType";

const ProductList = () => {
  return (
    <section className="container min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
        {clothingProducts.map((product, index) => (
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
