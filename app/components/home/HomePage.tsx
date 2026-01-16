"use client";

import Image from "next/image";
import Button from "../common-ui/Button";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen lg:h-screen overflow-hidden">
        <Image
          src="/baby/baby-mom.png"
          alt="Happy Baby"
          height={1000}
          width={1000}
          className="object-contain h-full object-bottom"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white" />
      </div>
      {/* Content - Left Side */}
      <div className="relative z-10 w-full flex flex-col justify-center mx-auto! px-4 sm:px-6 lg:px-6 max-w-5xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-7xl mb-4  text-foreground font-medium font-poppins"
        >
          Your child needs
          <br />
          <span className="text-[#8cd700] italic">Comfort & Safety</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-700 mb-4 max-w-xl"
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
          className="mt-12 flex flex-col gap-2"
        >
          <div className="flex items-center gap-2">
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

          {/* Trusted Partners Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-zinc-200"
          >
            <p className="text-xs font-semibold text-[#8cd700] uppercase tracking-wider mb-4">
              Trusted Partners
            </p>
            <div className="flex items-center overflow-hidden w-full">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex gap-0 w-max"
              >
                {/* Partner Logos - First Set */}
                {[
                  { name: "Partner 1", src: "/partners/plaza.png" },
                  { name: "Partner 2", src: "/partners/plaza.png" },
                  { name: "Partner 3", src: "/partners/plaza.png" },
                  { name: "Partner 4", src: "/partners/plaza.png" },
                  { name: "Partner 5", src: "/partners/plaza.png" },
                ].map((partner, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="h-16 w-44 shrink-0 flex items-center justify-center"
                  >
                    <div className="relative h-16 w-28">
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        fill
                        className="object-contain grayscale"
                      />
                    </div>
                  </div>
                ))}
                {/* Partner Logos - Duplicate Set for Infinite Loop */}
                {[
                  { name: "Partner 1", src: "/partners/plaza.png" },
                  { name: "Partner 2", src: "/partners/plaza.png" },
                  { name: "Partner 3", src: "/partners/plaza.png" },
                  { name: "Partner 4", src: "/partners/plaza.png" },
                  { name: "Partner 5", src: "/partners/plaza.png" },
                ].map((partner, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="h-16 w-44 shrink-0 flex items-center justify-center"
                  >
                    <div className="relative h-16 w-28">
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        fill
                        className="object-contain grayscale"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
