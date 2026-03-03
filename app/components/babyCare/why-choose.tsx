"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../common-ui/SectionHeading";
// import { useMediaQuery } from "react-responsive";
import ImageGridSection from "./ImageGridSection";

const WhyChoose = () => {
  const values = [
    {
      id: 1,
      icon: "/icons/premium.png",
      title: "Premium Quality",
      description:
        "Gentle materials specifically designed to protect delicate baby skin.",
    },
    {
      id: 2,
      icon: "/icons/nature.png",
      title: "100% Natural",
      description:
        "Hypoallergenic and toxin-free components for long-lasting dryness.",
    },
    {
      id: 3,
      icon: "/icons/trusted.png",
      title: "Dermatologist Tested",
      description:
        "Clinically validated safety standards for your baby’s daily routine.",
    },
    {
      id: 4,
      icon: "/icons/comfortable.png",
      title: "Ergonomic Fit",
      description:
        "Advanced design ensuring comfort, ease of movement, and leak protection.",
    },
  ];

  return (
    <section className="flex flex-col justify-center lg:py-0 h-[120vh] w-full relative">
      {/* ─── TOP WAVE ─── */}
      <div className=" w-full z-20000 pointer-events-none">
        <Image
          src="/new/wave.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20000 pointer-events-none">
        <Image
          src="/new/white-wave.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="w-full bg-babyCare  z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <SectionHeading
            title="Why Choose Zuvara"
            highlight=""
            description="Our commitment to uncompromising quality, safety, and comfort for every stage of your baby's growth."
            align="center"
          />
        </motion.div>

        <div className="  bg-babyCare ">
          <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto  max-w-7xl">
            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-2 size-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Visual Grid */}
            <div className="w-full">
              <ImageGridSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
