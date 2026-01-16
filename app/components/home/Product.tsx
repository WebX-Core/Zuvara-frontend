"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Organic Baby Shampoo",
      rating: 4.5,
      reviews: 128,
      image: "/diaper/diaper2.png",
      category: "Baby Care",
      inStock: true,
    },
    {
      id: 2,
      name: "Gentle Face Moisturizer",
      rating: 4.8,
      reviews: 245,
      image: "/diaper/diaper.png",
      category: "Skincare",
      inStock: true,
    },
    {
      id: 3,
      name: "Premium Body Lotion",
      rating: 4.6,
      reviews: 189,
      image: "/diaper/diaper2.png",
      category: "Personal Care",
      inStock: true,
    },
    {
      id: 4,
      name: "Hair Restoration Serum",
      rating: 4.7,
      reviews: 312,
      image: "/diaper/diaper.png",
      category: "Hair Care",
      inStock: true,
    },
    {
      id: 5,
      name: "Wellness Vitamin Supplement",
      rating: 4.4,
      reviews: 156,
      image: "/diaper/diaper2.png",
      category: "Wellness",
      inStock: true,
    },
    {
      id: 6,
      name: "Organic Lip Balm",
      rating: 4.9,
      reviews: 423,
      image: "/diaper/diaper.png",
      category: "Organic",
      inStock: true,
    },
  ];

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-5xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-poppins">
              Featured <span className="text-[#8cd700] italic">Products</span>
            </h2>
            <p className="text-zinc-600 text-md mt-2">
              Discover our best-selling items
            </p>
          </motion.div>
          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              content="View All Products"
              link="/products"
              icon="healthicons:nappy-diaper"
            />
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-2">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/product/${product.id}`}>
                <div className="group h-full flex flex-col bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-[#8cd700]  transition-all duration-400 hover:shadow-md">
                  {/* Product Image Container */}
                  <div className="relative bg-zinc-100 aspect-square overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300"
                    />

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-3 lg:p-4 flex flex-col">
                    {/* Category */}
                    <p className="text-xs text-zinc-500 mb-1">
                      {product.category}
                    </p>

                    {/* Name */}
                    <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2 line-clamp-2 group-hover:text-foreground transition-colors">
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
                                : "text-zinc-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-600">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Add to Cart Button */}

                    <button
                      type="submit"
                      className="bg-foreground/10 border border-zinc-300 hover:bg-zinc-50 text-foreground hover:text-[#8cd700] font-semibold px-6 py-2 rounded-full transition-all text-sm flex justify-center items-center gap-2"
                    >
                      View Products
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
