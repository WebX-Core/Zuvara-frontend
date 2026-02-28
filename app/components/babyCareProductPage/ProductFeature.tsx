import React from "react";
import { Product } from "@/type/babyCareProductType";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductFeature = ({
  product,
  className,
  style,
}: {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}) => {
  if (!product.featureImage) return null;

  const midIndex = Math.ceil((product.features?.length || 0) / 2);
  const leftFeatures = product.features?.slice(0, midIndex) || [];
  const rightFeatures = product.features?.slice(midIndex) || [];

  // Use product.background which is overridden by the theme in the parent
  const accentColor = product.background || "#000000";
  const textColor = product.foreground || "#ffffff";

  return (
    <section
      className={`py-4 lg:py-8 overflow-hidden ${className ?? ""}`}
      // The parent may pass CSS variable overrides via style prop
      style={style}
    >
      <div>
        <div className="mb-16 lg:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg lg:text-3xl font-semibold"
            style={{ color: accentColor }}
          >
            {product.featureTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:text-lg leading-relaxed max-w-5xl mx-auto"
            // Uses CSS var set by parent or falls back to zinc-600
            style={{ color: "var(--subtle-text, #52525b)" }}
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
                <p
                  className="font-semibold leading-snug"
                  style={{ color: "var(--page-text, #18181b)" }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6 relative flex flex-col items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 inset-x-0 z-20 text-center flex flex-col items-center gap-2"
            >
              <div className="flex gap-4">
                {product.featureImageTitle1 && (
                  <span
                    className="px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-lg"
                    style={{ backgroundColor: accentColor, color: textColor }}
                  >
                    {product.featureImageTitle1}
                  </span>
                )}
                {product.featureImageTitle2 && (
                  <span
                    className="px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-lg"
                    style={{ backgroundColor: accentColor, color: textColor }}
                  >
                    {product.featureImageTitle2}
                  </span>
                )}
              </div>
              {product.featureImageDesc && (
                <p
                  className="font-bold text-sm tracking-wide bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full"
                  style={{ color: "var(--subtle-text, #52525b)" }}
                >
                  {product.featureImageDesc}
                </p>
              )}
            </motion.div>

            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-[100px] opacity-20 pointer-events-none"
                style={{ backgroundColor: "var(--product-glow, #a1a1aa)" }}
              />
              <div className="w-full h-full relative z-10">
                <Image
                  src={product.featureImage}
                  alt={"image"}
                  fill
                  className="object-contain drop-shadow-2xl"
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
                <p
                  className="font-semibold leading-snug"
                  style={{ color: "var(--page-text, #18181b)" }}
                >
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