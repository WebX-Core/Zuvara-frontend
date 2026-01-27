"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";

const HeroSection = () => {
  return (
    <section className={cn("min-h-screen w-screen relative")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-foreground text-white text-sm font-semibold tracking-wide backdrop-blur-sm border border-white/20 mb-4">
              NEW COLLECTION 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Cozy Comfort <br />
              <span className="text-secondary drop-shadow-sm">
                Stylish Look
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-700/80 max-w-lg font-medium"
          >
            Soft, breathable, and durable clothing designed for your baby's
            every move. From playtime to naptime, we've got them covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* <Button
              content="Shop Collection"
              link="/clothing"
              className="bg-foreground text-white hover:bg-white hover:text-foreground"
            /> */}
            {/* <Button 
              content="View Lookbook" 
              link="#lookbook" 
              className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white"
            /> */}
          </motion.div>

          {/* Trust Badge */}
          {/* <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="size-10 rounded-full border-2 border-babyCare bg-zinc-200 overflow-hidden">
                  <Image 
                    src={`/images/mom/mom${i} (1).png`} 
                    alt="User" 
                    width={40} 
                    height={40} 
                    className="object-cover w-full h-full"
                    // Fallback to a placeholder if specific image fails, but using generic naming for now
                    onError={(e) => {
                       // @ts-ignore
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-semibold text-foreground">
              Loved by <span className="underline decoration-wavy">5,000+</span> Moms
            </div>
          </motion.div> */}
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

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-white/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;
