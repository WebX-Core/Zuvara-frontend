"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen">
      <section className="relative flex flex-col lg:flex-row h-screen">
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 w-full lg:w-1/2 h-full flex items-center px-6 lg:px-20 ">
          <div className="max-w-[80%] space-y-2 lg:space-y-4">
            <p className="text-xs lg:text-sm font-semibold tracking-wide text-foreground">
              Premium Baby Care Essentials
            </p>

            <h2 className="mt-5 text-2xl font-semibold text-foreground tracking-tight lg:text-5xl">
              Gentle protection for babies.
              <span className="ml-2 font-light italic">
                Reliable margins for partners.
              </span>
            </h2>

            <p className="text-sm lg:text-lg text-foreground mt-5 font-medium leading-relaxed">
              Trusted by newly married couples around the world, focusing on
              comfort and safety for your heart and healthy baby.
            </p>

            <div className="flex items-center gap-4 lg:gap-5 pt-2 lg:pt-4 flex-wrap">
              <Link href="/babyCareProduct">
                <button className="bg-[#45685e] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:shadow-xl cursor-pointer hover:scale-105 transition duration-300 text-sm lg:text-base">
                  Explore Essentials
                </button>
              </Link>
              <Link href="/contact">
                <button className="outline outline-[#45685e] text-[#45685e] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:scale-105 transition duration-300 text-sm lg:text-base">
                  Become a Distributor
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= CENTER VIDEO ================= */}
        <div className="relative lg:absolute lg:left-[50%] lg:bottom-20 lg:-translate-x-1/2 w-full flex justify-center mt-10 lg:mt-0 z-30">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[200px] p-4 lg:p-6 overflow-hidden relative border-8 lg:border-12 border-white"
          >
            <video
              src="/videos/babyPlaying.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-60 lg:w-80 lg:h-120 aspect-3/4 object-cover"
            />

            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </motion.div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="relative w-full lg:w-1/2  bg-foreground flex flex-col justify-center items-center">
          {/* Sidebar content */}
          <div className="flex w-1/2 gap-12 mx-auto justify-end">
            {/* Vertical Text */}
            <div className="hidden lg:block font-amatic  text-white/60 text-8xl font-bold tracking-widest select-none">
              <h2 className="[writing-mode:vertical-lr] ">BEST SELLER</h2>
            </div>
            <div className=" space-y-6 lg:space-y-10 top-20 lg:top-auto">
              {[
                "Supreme Diaper",
                "Premium Softness",
                "Dryness Max",
                "New Product",
              ].map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 lg:gap-4 group cursor-pointer"
                >
                  <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white overflow-hidden shadow-lg group-hover:scale-110 transition">
                    <Image
                      src="/PRODUCTS/Baby/supreme-diapers/product.png"
                      alt={name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <p className="text-white text-xs lg:text-sm group-hover:text-pink-300 transition">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Buttons */}
          {/* <div className="absolute bottom-6 lg:bottom-12 right-6 lg:right-40 flex gap-3 lg:gap-4">
            <button className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-full hover:scale-110 transition shadow-md">
              ←
            </button>

            <button className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-full hover:scale-110 transition shadow-md">
              →
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
