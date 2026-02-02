"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import Title from "../shared/Title";

const HeroSection = () => {
  return (
    <section className="lg:min-h-screen w-screen relative lg:flex lg:items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-16 pt-4 lg:pt-0">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10">
          <Title
            title="Cozy Comfort"
            highligher="Stylish Look"
            desc="Soft, breathable, and durable clothing designed for your baby's
            every move. From playtime to naptime, we've got them covered."
          />
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative z-10 font-bold flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-babyCare/30 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/baby/baby-in-hoodies-joggers.png"
                alt="Baby in Hoodies and Joggers"
                width={500} // Adjust based on actual aspect ratio
                height={600}
                className="object-cover h-[40vh] lg:h-[70vh] w-auto max-w-full"
                priority
              />

              {/* Floating Tag */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-babyCare rounded-full flex items-center justify-center text-foreground">
                    🛍️
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold uppercase">
                      Featured
                    </p>
                    <p className="font-bold text-foreground">
                      Cozy Knit Hoodie
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
