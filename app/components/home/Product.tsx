"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const Product = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Organic Baby Shampoo",
      price: 599,
      originalPrice: 799,
      rating: 4.5,
      reviews: 128,
      image: "/diaper/diaper3.png",
      category: "Baby Care",
      inStock: true,
    },
    {
      id: 2,
      name: "Gentle Face Moisturizer",
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 245,
      image: "/diaper/diaper.png",
      category: "Skincare",
      inStock: true,
    },
    {
      id: 3,
      name: "Premium Body Lotion",
      price: 899,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 189,
      image: "/diaper/diaper2.png",
      category: "Personal Care",
      inStock: true,
    },
    {
      id: 4,
      name: "Hair Restoration Serum",
      price: 1599,
      originalPrice: 1999,
      rating: 4.7,
      reviews: 312,
      image: "/diaper/diaper.png",
      category: "Hair Care",
      inStock: true,
    },
    {
      id: 5,
      name: "Wellness Vitamin Supplement",
      price: 499,
      originalPrice: 699,
      rating: 4.4,
      reviews: 156,
      image: "/diaper/diaper2.png",
      category: "Wellness",
      inStock: true,
    },
    {
      id: 6,
      name: "Organic Lip Balm",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 423,
      image: "/diaper/diaper.png",
      category: "Organic",
      inStock: true,
    },
    {
      id: 7,
      name: "Hypoallergenic Cream",
      price: 1099,
      originalPrice: 1399,
      rating: 4.3,
      reviews: 98,
      image: "/diaper/diaper2.png",
      category: "Sensitive",
      inStock: false,
    },
    {
      id: 8,
      name: "Luxury Night Serum",
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 567,
      image: "/diaper/diaper.png",
      category: "Premium",
      inStock: true,
    },
  ];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-5xl">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins">
            Featured Products
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Discover our best-selling items
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group h-full flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                {/* Product Image Container */}
                <div className="relative bg-gray-100 aspect-square overflow-hidden flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{discount(product.originalPrice, product.price)}%
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-all"
                  >
                    <Heart
                      size={16}
                      className={`transition-colors ${
                        wishlist.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 p-3 lg:p-4 flex flex-col">
                  {/* Category */}
                  <p className="text-xs text-gray-500 mb-1">
                    {product.category}
                  </p>

                  {/* Name */}
                  <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-foreground transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-base lg:text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => e.preventDefault()}
                    disabled={!product.inStock}
                    className={`w-full py-2 rounded-md text-sm font-semibold transition-all mt-auto ${
                      product.inStock
                        ? "bg-teal-600 hover:bg-teal-700 text-white"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? (
                      <div className="flex items-center justify-center gap-2">
                        <ShoppingCart size={14} />
                        Add
                      </div>
                    ) : (
                      "Out of Stock"
                    )}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
