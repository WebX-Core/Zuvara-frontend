"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  return (
    <section className="h-[70vh] lg:h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
      <div className="relative w-full h-full max-w-7xl mx-auto overflow-hidden rounded-2xl lg:rounded-4xl">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/baby/baby20.png"
            alt="Featured Blog"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Enhanced Gradient Overlay for better depth and readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full w-full flex flex-col lg:justify-end p-4 lg:p-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl h-full flex flex-col justify-between"
          >
            <span className="w-fit px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-white/30">
              Featured Article
            </span>
            <div className="">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                Discover the Best <br /> for Your Little One
              </h1>
              <p className="text-base md:text-lg text-white/80 font-medium mb-8 max-w-xl leading-relaxed">
                Expert advice, parenting tips, and the latest trends in baby
                care and clothing to help you navigate the beautiful journey of
                parenthood.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-100 transition-colors shadow-lg">
                Read Full Article
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
