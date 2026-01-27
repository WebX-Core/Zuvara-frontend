"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import StatsDivider from "../personalCare/StatsDivider";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <main className="relative bg-personalCare/10 min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between">
      <section className="container mx-auto px-6 lg:px-12 max-w-7xl flex-1 flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 gap-12 lg:gap-0 relative z-10">
        {/* Left Content: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm"
          >
            <span className="text-sm font-semibold text-personalCare uppercase tracking-wider">
              100% Cotton Feel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 leading-tight"
          >
            Ultimate Comfort <br />
            <span className="text-personalCare">Zero Leakage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-zinc-600 font-medium max-w-lg leading-relaxed"
          >
            Experience our ultra-thin sanitary pads and period panties designed
            for maximum absorption and breathable softness.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-8 flex items-center gap-6"
          >
             <div className="flex flex-col">
                <span className="font-bold text-2xl text-zinc-800">12h</span>
                <span className="text-xs font-medium text-zinc-500 uppercase">Protection</span>
             </div>
             <div className="w-px h-10 bg-zinc-300"></div>
             <div className="flex flex-col">
                <span className="font-bold text-2xl text-zinc-800">100%</span>
                <span className="text-xs font-medium text-zinc-500 uppercase">Rash Free</span>
             </div>
             <div className="w-px h-10 bg-zinc-300"></div>
             <div className="flex flex-col">
                 <span className="font-bold text-2xl text-zinc-800">Eco</span>
                 <span className="text-xs font-medium text-zinc-500 uppercase">Friendly</span>
             </div>
          </motion.div> */}
        </div>

        {/* Right Content: Product Composition */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center h-[50vh] lg:h-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Decorative Circle Behind */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[80%] aspect-square rounded-full border border-pink-200/50 bg-white/40 backdrop-blur-sm -z-10"
            />

            {/* Main Product: Period Panties */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative z-10 w-[70%] max-w-sm"
            >
              <Image
                src="/images/personalCare/period-panties.png"
                alt="Period Panties"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-2xl object-contain translate-x-12 lg:translate-x-0"
                priority
              />
            </motion.div>

            {/* Secondary Product: Sanitary Pad (Floating) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="absolute bottom-30 lg:bottom-10 left-0 lg:left-10 w-[45%] max-w-[200px] z-20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full transform scale-90"></div>
                <Image
                  src="/images/personalCare/sanitary-pad.png"
                  alt="Sanitary Pad"
                  width={300}
                  height={300}
                  className="w-full h-auto drop-shadow-xl object-contain rotate-[-15deg] hover:rotate-[-5deg] transition-transform duration-500"
                />

                {/* Floating badge on the pad */}
                <div className="absolute -top-8 lg:-top-4 -right-4 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center border border-pink-100">
                  <span className="text-[10px] font-bold text-personalCare leading-none text-center">
                    Ultra
                    <br />
                    Thin
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Stats Part */}
      {!isSmallerDevice && (
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full z-40">
          <StatsDivider />
        </div>
      )}
    </main>
  );
};

export default HeroSection;
