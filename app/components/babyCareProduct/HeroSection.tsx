"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import Title from "../shared/Title";
import Image from "next/image";

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
    <section className="h-[80vh] bg-babyCare flex flex-col lg:flex-row items-center justify-center relative px-4">
      <div className="w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-20 relative z-30">
        {/* Left Content */}
        <div className="w-full mx-auto z-10">
          <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-3">
            Premium Collection
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#45685e] mb-3 leading-tight lg:leading-none font-poppins">
            Discover our complete range of products
          </h2>

          <p className="hidden md:block text-zinc-600 text-sm lg:text-base leading-relaxed max-w-md">
            Quality baby products designed for comfort and safety.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full relative h-64 lg:h-full min-h-100 flex justify-center items-end z-30">
          <Image
            src="/images/baby/baby-with-product.png"
            alt="Baby with product"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Background Brand Text */}
      <div className="hidden lg:block absolute right-0 top-32 z-20 pointer-events-none text-[#45685e] font-extrabold">
        <h2 className="text-[140px] xl:text-[180px] uppercase leading-none opacity-60">
          zuvara
        </h2>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-white to-transparent z-20 pointer-events-none" /> */}
    </section>
    // <section className="relative lg:min-h-screen flex lg:items-center overflow-hidden">
    //   <div
    //     ref={containerRef}
    //     className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col lg:flex-row lg:items-center pt-4 md:pt-0"
    //   >
    //     <div className="lg:w-1/2">
    //       <Title
    //         title="Everyday Baby"
    //         highlighter="Care Essentials."
    //         desc="Diapers, wipes, and gentle care products meticulously designed to
    //           keep your baby clean, comfortable, and remarkably happy."
    //       />
    //     </div>

    //     <div className="lg:w-1/2 flex justify-end items-center relative">
    //       <img
    //         src="/images/baby/baby-in-cotton-cloud.png"
    //         alt="Baby in cotton cloud"
    //         className="baby-image w-auto h-auto max-h-[50vh] lg:max-h-[80vh] object-contain drop-shadow-xl z-30"
    //       />

    //       <img
    //         src="/images/diaper/diaper-on-cloud.png"
    //         alt="diaper on the cloud"
    //         className="diaper-image absolute top-[0%] lg:top-[10%] left-[15%] drop-shadow-xl w-40 lg:w-48 z-0"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
