import Image from "next/image";
import { motion } from "framer-motion";
import type { Variant } from "@/type/babyCareProductType";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type SizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
  sizeGuideImages?: string[];
};

export default function SizeGuideSection({
  theme,
  variants,
}: SizeGuideSectionProps) {
  return (
    <section className="immersive-section relative px-4 py-10 md:py-14 lg:px-10 lg:py-16">
      {/* Decorative Background Elements */}
      <div
        className="pointer-events-none absolute right-4 md:right-10 top-10 h-32 w-32 md:h-44 md:w-44 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.42) }}
      />
      <div
        className="pointer-events-none absolute left-4 md:left-10 bottom-10 h-40 w-40 md:h-56 md:w-56 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.08) }}
      />

      <div className="mx-auto max-w-7xl space-y-10 perspective-1200px">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            Find Their Perfect
            <span className="font-light italic opacity-60"> Little Fit</span>
          </h2>
          <p
            className="text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto"
            style={{ color: hexToRgba(theme.accent, 0.8) }}
          >
            Every baby grows at their own pace. Use this chart for a secure,
            comfortable fit.
          </p>
          {/* Metric Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase shadow-sm"
              style={{
                borderColor: theme.accent,
                backgroundColor: hexToRgba(theme.accent, 0.08),
                color: theme.accent,
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Standard Metric (KG)
            </span>
          </motion.div>
        </motion.div>

        {/* Size Cards Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
          {variants.map((variant, idx) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col items-center justify-center p-4 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 cursor-pointer"
              style={{
                borderColor: `${theme.border}88`,
                backgroundColor: "white",
                boxShadow: `0 4px 20px ${hexToRgba(theme.accent, 0.08)}`,
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                style={{ backgroundColor: hexToRgba(theme.accent, 0.15) }}
              />

              {/* Icon */}
              <div className="mb-3 md:mb-4 relative">
                <div
                  className="absolute inset-0 rounded-full blur-xl md:blur-2xl opacity-30"
                  style={{ backgroundColor: theme.accent }}
                />
                <Image
                  src={variant.icon || "/icons/default.png"}
                  alt={variant.size || "Size"}
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-20 md:h-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Size Badge */}
              <div
                className="px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-2 md:mb-3"
                style={{
                  backgroundColor: hexToRgba(theme.accent, 0.1),
                }}
              >
                <span
                  className="text-xl md:text-3xl font-black"
                  style={{ color: theme.accent }}
                >
                  {variant.size}
                </span>
              </div>

              {/* Weight Range */}
              <div className="text-center">
                <div className="text-sm md:text-xl font-bold text-zinc-800 mb-0.5 md:mb-1">
                  {variant.weight} kg
                </div>
                <div
                  className="text-[10px] md:text-xs font-semibold uppercase tracking-wider"
                  style={{ color: hexToRgba(theme.accent, 0.6) }}
                >
                  Weight
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-3/4 rounded-full transition-all duration-300"
                style={{ backgroundColor: theme.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="rounded-2xl border-l-4 px-6 py-5 shadow-sm"
            style={{
              borderColor: theme.accent,
              backgroundColor: hexToRgba(theme.accent, 0.05),
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.accent }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: hexToRgba(theme.accent, 0.9) }}
                >
                  <strong className="font-bold" style={{ color: theme.accent }}>
                    Pro tip:
                  </strong>{" "}
                  If your baby is close to the upper weight limit, size up for
                  better overnight absorbency and a more comfortable fit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
