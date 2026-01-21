"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../common-ui/SectionHeading";
import { useMediaQuery } from "react-responsive";
import ImageGridSection from "./ImageGridSection";

const WhyChoose = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  const values = [
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
      id: 3,
      icon: "/icons/trusted.png",
      title: "Trusted by Dermatologists",
      description: "Dermatologist-tested & toxin-free for safer everyday use",
    },
    {
      id: 4,
      icon: "/icons/comfortable.png",
      title: "Comfortable Fit",
      description: "Easy-fit design for comfort, movement, and leak protection",
    },
  ];

  return (
    <section className="curvy-border-mob lg:curvy-border flex items-center justify-center lg:-mt-32 h-[180vh] lg:h-[140vh] bg-[#cadaa9] border-t border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:mb-16 text-center"
        >
          <SectionHeading
            title="Why Parents Choose"
            highlight="Zuvara"
            description="Trusted by Nepali families for our commitment to quality, safety, and care"
            align="center"
          />
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center gap-4">
          {/* Values Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon */}
                    <div className="mb-4 size-16 lg:size-24 rounded-full border-2 border-dashed border-secondary flex items-center justify-center">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        width={isSmallerDevice ? 34 : 48}
                        height={isSmallerDevice ? 34 : 48}
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="md:text-lg font-semibold text-foreground mb-1 lg:mb-2 font-poppins">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ImageGridSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
