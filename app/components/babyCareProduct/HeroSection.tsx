"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Title from "../shared/Title";

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
    <section className="relative lg:min-h-screen flex lg:items-center overflow-hidden">
      <div
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col lg:flex-row lg:items-center pt-4 md:pt-0"
      >
        <div className="lg:w-1/2">
          <Title
            title="Everyday Baby"
            highligher="Care Essentials."
            desc="Diapers, wipes, and gentle care products meticulously designed to
              keep your baby clean, comfortable, and remarkably happy."
          />
        </div>

        <div className="lg:w-1/2 flex justify-end items-center relative">
          <img
            src="/images/baby/baby-in-cotton-cloud.png"
            alt="Baby in cotton cloud"
            className="baby-image w-auto h-auto max-h-[50vh] lg:max-h-[80vh] object-contain drop-shadow-xl z-30"
          />

          <img
            src="/images/diaper/diaper-on-cloud.png"
            alt="diaper on the cloud"
            className="diaper-image absolute top-[0%] lg:top-[10%] left-[15%] drop-shadow-xl w-40 lg:w-48 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
