"use client";

import Image from "next/image";
import Button from "../common-ui/Button";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";

export default function HomePage() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen lg:h-screen overflow-hidden flex">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 w-1/2 h-[45vh] md:h-screen lg:h-screen overflow-hidden">
        <Image
          src="/baby/baby-mom.png"
          alt="Happy Baby"
          height={800}
          width={800}
          className="object-contain h-full object-bottom"
          priority
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white " /> */}
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 w-full flex flex-col justify-end mb-16 md:mb-0 md:justify-center mx-auto! px-4 sm:px-6 lg:px-6 max-w-7xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl mb-2 md:mb-4  text-foreground font-medium font-poppins"
        >
          Because your child
          <br />
          <span className="text-[#8cd700]">need comfort & safety.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-700 mb-2 md:mb-4 max-w-xl"
        >
          Trusted by newly married couples around the world, focusing on comfort
          and safety for your heart and healthy baby.
        </motion.p>
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
          className="mt-4 md:mt-12 flex gap-2 md:gap-4"
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
    </section>
  );
}
