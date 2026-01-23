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
    <section className="flex items-center justify-center py-20 lg:py-0 h-auto md:h-[65vh] lg:h-[140vh] bg-divider relative">
      {/* top curve border */}
      <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

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

      {/* bottom curve border */}
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChoose;
