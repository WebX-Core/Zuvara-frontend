"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create timeline for baby image
      const babyTl = gsap.timeline();
      babyTl
        .fromTo(
          ".baby-image",
          {
            y: "100vh",
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.out",
          },
        )
        .to(".baby-image", {
          y: -15,
          duration: 2.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });

      // Create timeline for diaper image
      const diaperTl = gsap.timeline({ delay: 0.3 });
      diaperTl
        .fromTo(
          ".diaper-image",
          {
            y: "100vh",
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.out",
          },
        )
        .to(".diaper-image", {
          y: -15,
          duration: 2,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
    },
    { scope: containerRef },
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col lg:flex-row lg:items-center"
      >
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-foreground">
              Everyday Baby <br />
              <span className="text-secondary whitespace-nowrap">
                Care Essentials.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl">
              Diapers, wipes, and gentle care products meticulously designed to
              keep your baby clean, comfortable, and remarkably happy.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center relative">
          <img
            src="/images/baby/baby-in-cotton-cloud.png"
            alt="Baby in cotton cloud"
            className="baby-image w-auto h-auto max-h-[60vh] lg:max-h-[80vh] object-contain drop-shadow-xl"
          />

          <img
            src="/images/products/diaper-on-cloud.png"
            alt="diaper on the cloud"
            className="diaper-image absolute top-[10%] left-0 drop-shadow-xl w-48"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
