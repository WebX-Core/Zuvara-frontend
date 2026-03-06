import { motion } from "framer-motion";
import type { Product } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalProductCloseViewSectionProps = {
  product: Product;
  theme: ThemePreset;
};

export default function PersonalProductCloseViewSection({
  product,
  theme,
}: PersonalProductCloseViewSectionProps) {
  if (!product.productCloseView) return null;

  const midIndex = Math.ceil((product.productCloseView.length || 0) / 2);
  const leftFeatures = product.productCloseView.slice(0, midIndex);
  const rightFeatures = product.productCloseView.slice(midIndex);

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
          <div className="lg:col-span-3 space-y-12 lg:space-y-24 order-2 lg:order-1">
            {leftFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative flex items-center lg:flex-row-reverse gap-6 text-left lg:text-right"
              >
                <div
                  className="fx-float shrink-0 size-14 lg:size-16 rounded-2xl border flex items-center justify-center p-3 shadow-sm transition-all group-hover:shadow-md group-hover:scale-110"
                  style={{
                    backgroundColor: hexToRgba(theme.pageBg, 0.86),
                    borderColor: `${theme.border}66`,
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p
                    className="text-sm lg:text-base font-bold leading-snug uppercase tracking-tight"
                    style={{ color: hexToRgba(theme.accent, 0.86) }}
                  >
                    {feature.label}
                  </p>
                  <div
                    className="hidden lg:block h-1 w-12 ml-auto rounded-full group-hover:w-20 transition-all duration-500"
                    style={{ backgroundColor: `${theme.accent}44` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2 flex flex-col items-center">
            <div className="fx-rise relative z-10 w-full max-w-sm lg:max-w-md mx-auto transform transition-transform duration-700 hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="fx-parallax w-full h-auto object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
              />

              <div
                className="absolute inset-0 border-2 rounded-full scale-110 -z-10 animate-pulse"
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

          <div className="lg:col-span-3 space-y-12 lg:space-y-24 order-3">
            {rightFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative flex items-center gap-6 text-left"
              >
                <div
                  className="fx-float shrink-0 size-14 lg:size-16 rounded-2xl border flex items-center justify-center p-3 shadow-sm transition-all group-hover:shadow-md group-hover:scale-110"
                  style={{
                    backgroundColor: hexToRgba(theme.pageBg, 0.86),
                    borderColor: `${theme.border}66`,
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p
                    className="text-sm lg:text-base font-bold leading-snug uppercase tracking-tight"
                    style={{ color: hexToRgba(theme.accent, 0.86) }}
                  >
                    {feature.label}
                  </p>
                  <div
                    className="hidden lg:block h-1 w-12 rounded-full group-hover:w-20 transition-all duration-500"
                    style={{ backgroundColor: `${theme.accent}44` }}
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
