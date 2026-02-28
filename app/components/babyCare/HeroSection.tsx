"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen  font-sans">
    <section className="relative flex flex-col lg:flex-row min-h-screen">

  {/* ================= LEFT CONTENT ================= */}
  <div className="relative z-20 w-full lg:w-2/3 flex items-center px-6 lg:px-20 pt-8">
    <div className="max-w-xl space-y-6 lg:space-y-4">

      <p className="text-xs lg:text-4xl font-bold font-amatic tracking-wide text-gray-500 uppercase">
        Premium Baby Care Essentials
      </p>

      <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight text-[#45685e]">
        Gentle protection for babies. Reliable margins for partners.
      </h1>

      <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
        Trusted by newly married couples around the world, focusing on
        comfort and safety for your heart and healthy baby.
      </p>

      <div className="flex items-center gap-4 lg:gap-5 pt-2 lg:pt-4 flex-wrap">
        <button className="bg-[#45685e] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition duration-300 text-sm lg:text-base">
          Explore Essentials
        </button>

        <button className="outline outline-[#45685e] text-[#45685e] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:scale-105 transition duration-300 text-sm lg:text-base">
          Become a distributor
        </button>
      </div>

      <div className="flex items-center gap-3 lg:gap-4 pt-4 lg:pt-6">
        <div className="bg-[#45685e]/20 font-amatic font-bold text-[96px] text-black px-4 lg:px-5 py-2.5 lg:py-3 rounded-full  lg:text-lg  shadow-md">
          10K+
        </div>

        <p className="text-gray-600 text-lg font-medium font-amatic lg:text-4xl">
          Happy Customers
        </p>
      </div>
    </div>
  </div>

  {/* ================= CENTER VIDEO ================= */}
  <div className="relative lg:absolute lg:left-[58%] lg:bottom-20 lg:-translate-x-1/2 w-full flex justify-center mt-10 lg:mt-0 z-30">

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
  <div className="relative w-full lg:w-1/3 bg-gradient-to-b from-[#45685e]/90 to-[#45685e] flex flex-col justify-center items-center mt-10 lg:mt-0">

    {/* Sidebar content */}
    <div className="absolute right-6 lg:right-20 space-y-6 lg:space-y-10 top-20 lg:top-auto">
      {[
        "Supreme Diaper",
        "Premium Softness",
        "Dryness Max",
        "New Product",
      ].map((name, i) => (
        <div key={i} className="flex items-center gap-3 lg:gap-4 group cursor-pointer">

          <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white overflow-hidden shadow-lg group-hover:scale-110 transition">
            <Image
              src="/images/diaper/supreme-diaper/supreme-diaper-pants-l.png"
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

    {/* Slider Buttons */}
    <div className="absolute bottom-6 lg:bottom-12 right-6 lg:right-40 flex gap-3 lg:gap-4">
      <button className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-full hover:scale-110 transition shadow-md">
        ←
      </button>

      <button className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-full hover:scale-110 transition shadow-md">
        →
      </button>
    </div>

    {/* Vertical Text */}
    <div className="hidden lg:block absolute left-0 font-amatic -rotate-90 text-white/60 text-8xl font-bold tracking-widest select-none">
      BEST SELLER
    </div>

  </div>

</section>



    </div>
  );
}
