"use client";

import Button from "../common-ui/Button";
import StatsDivider from "./StatsDivider";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const HeroSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <main className=" bg-personalCare/10 h-[85vh] lg:min-h-screen relative">
      <section className="px-4 sm:px-6 lg:px-6 mx-auto! max-w-7xl h-full pt-24 relative">
        <div className="lg:w-1/2 mx-auto">
          <div className="flex flex-col items-center text-center gap-4 lg:gap-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">
              Period care that lets you{" "}
              <span className="text-personalCare">
                move, rest, and live normally.
              </span>
            </h1>
            {/* <h1>Made for Everyday Living</h1> */}
            <p className="text-lg lg:text-xl">
              Designed to support you—wherever the day takes you.
            </p>
            <Button
              content="Product List"
              link="/personalCareProduct"
              for="personalCare"
              buttonClassName="z-30"
            />
          </div>
        </div>

        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          style={{ originX: 1, originY: 1 }}
          src="/images/personalCare/period-panties-pack.png"
          alt="Period Panties pack"
          className="absolute bottom-[5%] lg:bottom-[10%] right-4 lg:right-0 w-40 lg:w-80 z-10"
        />
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.4,
          }}
          style={{ originX: 1, originY: 1 }}
          src="/images/personalCare/sanitary-pads-pack.png"
          alt="Sanitary Pads pack"
          className="absolute bottom-[5%] lg:bottom-[10%] right-[20%] w-35 lg;w-70 z-20"
        />
      </section>

      {/* {!isSmallerDevice && (
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full z-40">
          <StatsDivider />
        </div>
      )} */}
    </main>
  );
};

export default HeroSection;
