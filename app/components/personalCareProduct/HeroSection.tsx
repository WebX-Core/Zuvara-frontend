"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../common-ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-svh overflow-hidden bg-linear-to-b from-personalCare/10 via-white to-white lg:h-screen">
      <div className="relative mx-auto flex min-h-svh w-[92%] max-w-7xl items-center py-22 sm:py-24 lg:h-full lg:py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="mt-5 text-4xl font-semibold leading-[0.92] tracking-tight text-personalCare sm:text-5xl lg:text-5xl">
              Period care that lets you
              <span className="block italic font-light text-personalCare">
                move, rest, and live normally.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-zinc-600 sm:text-base">
              Designed to support you wherever the day takes you, with reliable
              comfort that feels light, discreet, and easy to trust.
            </p>

            {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                content="Product List"
                link="/personalCareProduct"
                for="personalCare"
                buttonClassName="z-20"
                className="rounded-full px-6 py-3.5 text-sm font-semibold shadow-[0_18px_34px_rgba(130,0,219,0.2)] ring-0!"
              />
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-personalCare/15 bg-white/90 px-6 py-3.5 text-sm font-semibold text-zinc-700 shadow-[0_14px_30px_rgba(24,24,27,0.06)] transition-colors duration-300 hover:bg-personalCare/5"
              >
                Talk to us
              </Link>
            </div> */}
          </div>

          <div className="relative mt-10 w-full max-w-7xl lg:mt-8">
            <div className="relative h-75 sm:h-84 lg:h-100">
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
                src="/images/personalCare/period-panties-pack-l.png"
                alt="Period Panties pack"
                className="absolute bottom-[8%] w-36 sm:w-44 lg:w-72"
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
                src="/images/personalCare/sanitary-pads-pack-l.png"
                alt="Sanitary Pads pack"
                className="absolute bottom-[10%] left-[24%] w-28 sm:w-32 lg:w-56"
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
                src="/new/momnobg.png"
                alt="Sanitary Pads pack"
                className="absolute bottom-[0%] left-[30%] w-28 sm:w-32 lg:w-100"
              />
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
                className="absolute bottom-[8%] right-[0%] w-36 sm:w-44 lg:w-72"
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
                className="absolute bottom-[10%] right-[24%] w-28 sm:w-32 lg:w-56"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
