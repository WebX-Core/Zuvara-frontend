import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalProductCloseViewSectionProps = {
  product: Product;
  theme: ThemePreset;
  technicalDetailImages: string[];
};

export default function PersonalProductCloseViewSection({
  product,
  theme,
  technicalDetailImages,
}: PersonalProductCloseViewSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  if (!product.productCloseView) return null;

  const detailImages = technicalDetailImages.slice(0, 4);
  const midIndex = Math.ceil(detailImages.length / 2);
  const leftDetailImages = detailImages.slice(0, midIndex);
  const rightDetailImages = detailImages.slice(midIndex);

  return (
    <section className="relative px-2 py-8 lg:px-4 lg:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 space-y-3 fx-rise">
          <span
            className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: hexToRgba(theme.accent, 0.55) }}
          >
            Engineering Spotlight
          </span>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            A Closer Look At{" "}
            <span className="font-light italic opacity-60">Every Layer.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:hidden">
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

          <div className="order-2 mx-auto hidden w-full max-w-64 space-y-6 lg:col-span-3 lg:order-1 lg:block lg:max-w-none lg:space-y-24">
            {leftDetailImages.map((imageSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[1.8rem] border"
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

          <div className="lg:col-span-6 relative order-1 lg:order-2 flex flex-col items-center px-6">
            <div
              className={`fx-rise relative z-10 w-full max-w-sm lg:max-w-md mx-auto ${
                isMobile ? "" : "transform transition-transform duration-700 hover:scale-105"
              }`}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="fx-parallax object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
                />
              </div>

              <div
                className={`absolute inset-0 -z-10 border-2 rounded-full scale-110 ${isMobile ? "" : "animate-pulse"}`}
                style={{ borderColor: `${theme.border}66` }}
              />
            </div>

            <div
              className="fx-rise mt-8 px-5 py-2 rounded-full border backdrop-blur-sm shadow-sm"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.72),
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: hexToRgba(theme.accent, 0.62) }}
              >
                Interactive Anatomy
              </p>
            </div>
          </div>

          <div className="order-3 mx-auto hidden w-full max-w-64 space-y-6 lg:col-span-3 lg:block lg:max-w-none lg:space-y-24">
            {rightDetailImages.map((imageSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[1.8rem] border"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.86),
                }}
              >
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={imageSrc}
                    alt={`Technical detail ${midIndex + idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
