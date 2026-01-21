"use client";

import Button from "../common-ui/Button";
import SectionHeading from "../common-ui/SectionHeading";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const controls = useAnimation();
  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    let isMounted = true;
    const xSize = isSmallerDevice ? "calc(100vw - 100%)" : "calc(50vw - 100%)";
    const sequence = async () => {
      while (isMounted) {
        // Move to right
        await controls.start({
          x: xSize,
          scaleX: 1,
          transition: { duration: 5, ease: "linear" },
        });
        if (!isMounted) break;

        // Flip immediate
        controls.set({ scaleX: -1 });

        // Move to left
        await controls.start({
          x: 0,
          scaleX: -1,
          transition: { duration: 5, ease: "linear" },
        });
        if (!isMounted) break;

        // Flip back
        controls.set({ scaleX: 1 });
      }
    };
    sequence();
    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls]);

  return (
    <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden flex">
      {/* <section className="relative w-full h-screen overflow-hidden flex bg-[#eeeeee]"> */}
      {/* Background Image - Right Side */}
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 size-[40%]"> */}
      {/* <div className="absolute left-0 bottom-0 size-[40%]"> */}
      <div className="absolute right-0 bottom-0 h-full lg:w-[50%] flex items-center">
        <motion.video
          // ref={(video) => {
          //   if (video) {
          //     video.playbackRate = 0.7;
          //   }
          // }}
          animate={controls}
          src="/videos/babyCrawling3.webm"
          // src="/videos/baby-crawling-cropped2.mp4"
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          className="pointer-events-none select-none size-[60%]"
        />
      </div>

      {/* Content - Left Side */}
      <div className="relative w-full flex flex-col justify-around md:justify-center gap-0 lg:gap-16 mb-16 md:mb-0 mx-auto! px-4 sm:px-6 lg:px-6 max-w-7xl text-left">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-poppins mb-4 max-w-3xl"
          >
            Gentle Care for Your Baby&apos;s Delicate Skin with{" "}
            <span className="text-[#8cd700]">Zuvara</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-700 mb-2 md:mb-4 max-w-xl"
          >
            Trusted by newly married couples around the world, focusing on
            comfort and safety for your heart and healthy baby.
          </motion.p>
        </div>
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              content="Explore Baby Care Products"
              link="/shop"
              icon="vaadin:globe"
            />
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-12 flex flex-col lg:flex-row gap-2 md:gap-4"
          >
            <div className="flex items-center gap-2 ">
              <div className="flex items-center justify-center">
                <Icon
                  icon="fluent:shield-task-16-filled"
                  width="20"
                  height="20"
                />
              </div>
              <p className="text-sm font-medium text-foreground">
                Trusted by 100+ Nepali mothers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <Icon icon="solar:bag-heart-bold" width="20" height="20" />
              </div>
              <p className="text-sm font-medium text-foreground">
                In every Nepali mother&apos;s bag
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
