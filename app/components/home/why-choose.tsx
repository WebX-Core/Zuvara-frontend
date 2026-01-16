"use client";

import { Leaf, Heart, Award, Truck } from "lucide-react";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const values = [
    {
      id: 1,
      icon: Heart,
      title: "Made for Sensitive Skin",
      description: "Gentle formulations designed for delicate baby skin care",
    },
    {
      id: 2,
      icon: Leaf,
      title: "100% Natural",
      description: "Premium ingredients backed by dermatological research",
    },
    {
      id: 3,
      icon: Award,
      title: "Trusted by Nepali Family",
      description: "Serving families across Nepal with quality and care",
    },
    {
      id: 4,
      icon: Truck,
      title: "Wholesale & Supply Options",
      description: "Flexible bulk ordering for retailers and businesses",
    },
  ];

  return (
    <section className="py-4 lg:py-8 bg-linear-to-b from-white to-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground font-poppins mb-4">
            Why Choose <span className="text-[#8cd700] italic">Zuvara</span>
          </h2>
          <p className="text-md text-zinc-600 max-w-2xl">
            Discover the core values that make Zuvara the trusted choice for
            families seeking premium baby care products in Nepal.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-zinc-200 bg-white hover:border-[#8cd700] hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 p-3 rounded-full bg-[#8cd700]/10 group-hover:bg-[#8cd700]/20 transition-colors">
                  <IconComponent
                    size={28}
                    className="text-foreground group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Title */}
                <h3 className="text-md font-medium text-foreground mb-2 font-poppins">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
