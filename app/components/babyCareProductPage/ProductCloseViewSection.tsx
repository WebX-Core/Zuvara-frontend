import { Product } from "@/type/babyCareProductType";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

interface ProductCloseViewProps {
  product: Product;
  theme: ThemePreset;
  technicalDetailImages: string[];
}

const ProductCloseViewSection = ({
  product,
  theme,
  technicalDetailImages,
}: ProductCloseViewProps) => {
  if (!product.productCloseView) return null;

  const detailImages = technicalDetailImages.slice(0, 4);

  return (
    <section className="relative px-4 py-8 lg:px-4 lg:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            A Closer Look At{" "}
            <span className="font-light italic opacity-60">Every Layer.</span>
          </h2>
        </div>

        {/* MOBILE LAYOUT - Grid 2 columns */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {detailImages.map((imageSrc, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[1.4rem] border"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.86),
              }}
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={imageSrc}
                  alt={`Technical detail ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT - Horizontal Flex */}
        <div className="hidden lg:flex lg:flex-row lg:gap-6 lg:items-center lg:justify-center">
          {detailImages.map((imageSrc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[1.8rem] border flex-1 max-w-xs"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.86),
              }}
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={imageSrc}
                  alt={`Technical detail ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCloseViewSection;
