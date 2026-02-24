import React from "react";
import { Product } from "@/type/babyCareProductType";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface ProductFeatureProps {
  product: Product;
}

const ProductFeature = ({ product }: ProductFeatureProps) => {
  if (!product.featureImage) return null;

  const midIndex = Math.ceil((product.features?.length || 0) / 2);
  const leftFeatures = product.features?.slice(0, midIndex) || [];
  const rightFeatures = product.features?.slice(midIndex) || [];

  return (
    <section className="py-4 lg:py-8 bg-white overflow-hidden">
      <div className="">
        <div className="mb-16 lg:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: product.background || "#000000",
            }}
            className="text-lg lg:text-3xl font-semibold"
          >
            {product.featureTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 lg:text-lg leading-relaxed max-w-5xl mx-auto"
          >
            {product.featureDesc}
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Features */}
          <div className="lg:col-span-3 space-y-12 lg:text-right order-2 lg:order-1">
            {leftFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col lg:items-end gap-4"
              >
                {/* <div className="p-3 bg-zinc-100 rounded-2xl w-fit">
                  <Check className="size-6 text-zinc-900" />
                </div> */}
                <p className="text-zinc-800 font-semibold leading-snug">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image Column */}
          <div className="lg:col-span-6 relative flex flex-col items-center order-1 lg:order-2">
            {/* Overlay Titles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 inset-x-0 z-20 text-center flex flex-col items-center gap-2"
            >
              <div className="flex gap-4">
                {product.featureImageTitle1 && (
                  <span
                    style={{
                      backgroundColor: product.background || "#18181b",
                      color: product.foreground || "#ffffff",
                    }}
                    className="px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-lg"
                  >
                    {product.featureImageTitle1}
                  </span>
                )}
                {product.featureImageTitle2 && (
                  <span
                    style={{
                      backgroundColor: product.background || "#18181b",
                      color: product.foreground || "#ffffff",
                    }}
                    className="px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-lg"
                  >
                    {product.featureImageTitle2}
                  </span>
                )}
              </div>
              {product.featureImageDesc && (
                <p className="text-zinc-500 font-bold text-sm tracking-wide bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full">
                  {product.featureImageDesc}
                </p>
              )}
            </motion.div>

            {/* Central Image with Cloud Effect */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="w-full h-full relative z-10">
                <img
                  src={product.featureImage}
                  alt={product.featureTitle}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-3 space-y-12 order-3">
            {rightFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                {/* <div className="p-3 bg-zinc-100 rounded-2xl w-fit">
                  <Check className="size-6 text-zinc-900" />
                </div> */}
                <p className="text-zinc-800 font-semibold leading-snug">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
