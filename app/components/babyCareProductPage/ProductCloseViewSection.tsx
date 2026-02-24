import React from "react";
import { Product } from "@/type/babyCareProductType";
import { motion } from "framer-motion";

interface ProductCloseViewProps {
  product: Product;
}

const ProductCloseViewSection = ({ product }: ProductCloseViewProps) => {
  if (!product.productCloseView) return null;

  const midIndex = Math.ceil((product.productCloseView.length || 0) / 2);
  const leftFeatures = product.productCloseView.slice(0, midIndex);
  const rightFeatures = product.productCloseView.slice(midIndex);

  return (
    <section className="py-4 lg:py-8">
      <div className="">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Features */}
          <div className="lg:col-span-3 space-y-8 lg:space-y-16 lg:text-right order-2 lg:order-1">
            {leftFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col lg:items-end gap-2"
              >
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="size-10 lg:size-12 grayscale group-hover:grayscale-0 transition-all"
                />
                <p className="text-zinc-800 font-semibold leading-snug">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image Column */}
          <div className="lg:col-span-6 relative flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
              <div className="w-full h-full relative z-10 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-3xl"
                />
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[90%] aspect-square rounded-full blur-[100px] opacity-20 pointer-events-none bg-(--product-bg)" />
            </div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-3 space-y-8 lg:space-y-16 order-3">
            {rightFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + midIndex) * 0.1 }}
                className="flex flex-col lg:items-start gap-2"
              >
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="size-10 lg:size-12 grayscale group-hover:grayscale-0 transition-all"
                />
                <p className="text-zinc-800 font-semibold leading-snug">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCloseViewSection;
