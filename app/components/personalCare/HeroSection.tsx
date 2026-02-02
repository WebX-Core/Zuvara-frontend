"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
// import StatsDivider from "../personalCare/StatsDivider";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
import Title from "../shared/Title";

const featureLists = [
  { id: 1, title: "Ultra-soft, pillow-like comfort" },
  { id: 2, title: "Breathable and skin-friendly" },
  { id: 3, title: "Perfect fit for restful sleep" },
  { id: 4, title: "Fast absorption" },
  { id: 5, title: "Side-leak guards" },
  { id: 6, title: "All-night dryness guarantee" },
];

const HeroSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <main className="relative bg-personalCare/5 min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between">
      <section className="container mx-auto px-6 lg:px-6 max-w-7xl flex-1 flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 gap-12 lg:gap-0 relative z-10">
        {/* Left Content: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm"
          >
            <span className="text-sm font-semibold text-personalCare uppercase tracking-wider">
              100% Cotton Feel
            </span>
          </motion.div> */}
          <Title
            title="Ultimate Comfort"
            highligher="Zero Leakage."
            desc="Experience our ultra-thin sanitary pads and period panties designed
            for maximum absorption and breathable softness."
          />
        </div>

        {/* Right Content: Product Composition */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center h-[50vh] lg:h-auto">
          <div className="w-full relative min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center gap-2">
            {/* Mobile Layout - Top Triangle (Features 1, 2, 3) */}
            <div className="lg:hidden w-full space-y-2 z-20">
              {/* Point 1: Top Center */}
              <div className="flex justify-center">
                <MobileFeatureCard
                  feature={featureLists[0]}
                  className="w-[85%]"
                />
              </div>
              {/* Point 2 & 3: Horizontal line below 1 */}
              <div className="flex justify-between gap-3">
                <MobileFeatureCard
                  feature={featureLists[1]}
                  className="flex-1"
                />
                <MobileFeatureCard
                  feature={featureLists[2]}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Desktop Circular Features - Lines Layer (Behind Image) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none -z-10">
              {featureLists.map((feature, index) => {
                const angle = index * 60 - 60;
                const radius = 280;
                const innerRadius = 180;
                return (
                  <div
                    key={`line-${feature.id}`}
                    className="absolute top-1/2 left-1/2"
                  >
                    <div
                      className="absolute top-0 left-0 h-px bg-linear-to-r from-personalCare/40 to-transparent origin-left hidden xl:block"
                      style={{
                        width: `${radius - innerRadius - 20}px`,
                        transform: `rotate(${angle}deg) translateX(${innerRadius}px)`,
                      }}
                    >
                      <div className="absolute right-0 -top-1 size-2 bg-personalCare rounded-full border-2 border-white shadow-sm" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Image Container */}
            <div className="relative z-10 size-44 md:size-80 lg:size-96 flex items-center justify-center">
              {/* Opaque mask to truly hide lines behind everything */}
              <div className="absolute inset-0 bg-white rounded-full z-0" />

              <div className="absolute inset-4 bg-personalCare/20 rounded-full blur-2xl z-10" />
              <div className="absolute inset-0 bg-personalCare/5 rounded-full border border-personalCare/10 z-10" />
              <img
                src="/images/personalCare/sleeping-lady.png"
                alt="Sleeping Lady"
                className="relative z-20 w-full h-full object-contain drop-shadow-2xl float-animation"
              />
            </div>

            {/* Mobile Layout - Bottom Inverted Triangle (Features 4, 5, 6) */}
            <div className="lg:hidden w-full space-y-4 z-20">
              {/* Point 4 & 5: Horizontal line below image */}
              <div className="flex justify-between gap-3">
                <MobileFeatureCard
                  feature={featureLists[3]}
                  className="flex-1"
                />
                <MobileFeatureCard
                  feature={featureLists[4]}
                  className="flex-1"
                />
              </div>
              {/* Point 6: Bottom Center */}
              <div className="flex justify-center">
                <MobileFeatureCard
                  feature={featureLists[5]}
                  className="w-[85%]"
                />
              </div>
            </div>

            {/* Desktop Circular Features - Cards Layer (In Front of Image) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none z-20">
              {featureLists.map((feature, index) => {
                const angle = index * 60 - 60;
                const radius = 280;
                return (
                  <div
                    key={`card-${feature.id}`}
                    className="absolute top-1/2 left-1/2"
                  >
                    <div
                      className="absolute pointer-events-auto group -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                      }}
                    >
                      <div className="bg-white/70 backdrop-blur-md border border-personalCare/20 px-6 py-3 rounded-2xl shadow-lg hover:shadow-personalCare/20 transition-all duration-500 hover:-translate-y-1 text-center">
                        <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                          {feature.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;

const MobileFeatureCard = ({
  feature,
  className,
}: {
  feature: any;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white/90 backdrop-blur-md border border-personalCare/20 px-6 py-3 rounded-2xl shadow-sm flex items-center gap-3 justify-center text-center",
      className,
    )}
  >
    {/* <div className="size-1.5 bg-personalCare rounded-full shrink-0" /> */}
    <p className="text-xs font-bold text-gray-800 leading-tight">
      {feature.title}
    </p>
  </div>
);
