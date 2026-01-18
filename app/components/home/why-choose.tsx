"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhyChoose = () => {
  const values = [
    {
      id: 3,
      icon: "/icons/trusted.png",
      title: "Trusted by Dermatologists",
      description: "Dermatologist-tested & toxin-free for safer everyday use",
    },
    {
      id: 1,
      icon: "/icons/premium.png",
      title: "Premium Quality",
      description:
        "Gentle, premium-quality materials that protect delicate baby skin",
    },
    {
      id: 2,
      icon: "/icons/nature.png",
      title: "100% Natural",
      description: "Superior absorption for longer dryness and fewer changes",
    },
    {
      id: 4,
      icon: "/icons/comfortable.png",
      title: "Comfortable Fit",
      description: "Easy-fit design for comfort, movement, and leak protection",
    },
  ];

  return (
    <section className="py-4 lg:py-12 bg-linear-to-r from-zinc-50 to-zinc-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl lg:text-4xl font-semibold text-foreground font-poppins mb-2 md:mb-4">
            Why Parents Choose <span className="text-[#8cd700]">Zuvara</span>
          </h2>
          <p className="text-md text-zinc-600 max-w-2xl mx-auto">
            Discover the core values that make Zuvara the trusted choice for
            families seeking premium baby care products in Nepal.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {values.map((value, index) => {
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-zinc-200 bg-white hover:border-[#8cd700] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 p-3">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                    className="text-foreground group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Title */}
                <h3 className="text-md font-medium text-secondary! mb-2 font-poppins">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed hidden md:block ">
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
