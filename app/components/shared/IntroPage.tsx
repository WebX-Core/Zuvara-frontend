"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type DestinationId = "baby" | "personal";

type Destination = {
  id: DestinationId;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  color: string;
  icon: string;
  description: string;
};

export default function IntroPage() {
  const [activeId, setActiveId] = useState<DestinationId>("baby");

  const destinations: Destination[] = useMemo(
    () => [
      {
        id: "baby",
        label: "Baby Care",
        title: "Baby Care",
        subtitle: "Pure, Gentle, & Natural",
        image: "/images/baby/baby32.png",
        href: "/babyCare",
        color: "var(--babyCare)",
        icon: "/icons/xl.png",
        description:
          "Everything your little one needs for a happy, healthy start in life.",
      },
      {
        id: "personal",
        label: "Personal Care",
        title: "Personal Care",
        subtitle: "Self-Care Reimagined",
        image: "/new/momnobg.png",
        href: "/personalCare",
        color: "var(--ternary)",
        icon: "/icons/sanitary-napkin.png",
        description:
          "Premium essentials formulated to nourish your body and soul.",
      },
    ],
    [],
  );

  const activeDestination =
    destinations.find((item) => item.id === activeId) ?? destinations[0];

  return (
    <main
      className={`relative min-h-screen overflow-hidden text-white transition-colors duration-300 ${
        activeId === "baby" ? "bg-babyCare" : "bg-ternary/50"
      }`}
    >
      <Link href="/" className="absolute top-4 left-1/2 z-30 -translate-x-1/2 sm:top-8">
        <Image
          src={activeId === "personal" ? "/logo/logo_secondary.svg" : "/logo/logo.svg"}
          alt="Zuvara Logo"
          width={80}
          height={60}
          priority
          className="h-auto w-24 sm:w-48"
        />
      </Link>
      <section className="relative z-20 mx-auto flex min-h-screen w-full max-w-360 flex-col justify-center px-4 pt-24 pb-10 sm:px-5 md:px-8 md:pt-28 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="hidden sm:block max-w-240 text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:mb-3 sm:text-xs sm:tracking-[0.24em]"
            >
              Welcome to Zuvara
            </motion.p>

            <motion.h1
              key={activeDestination.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-[clamp(2rem,10vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.035em] text-white"
            >
              {activeDestination.id === "baby" ? "baby care" : "Personal Care"}
            </motion.h1>

            <motion.p
              key={`${activeDestination.id}-desc`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 text-sm leading-6 text-white md:mt-4 md:text-xl font-medium md:leading-7"
            >
              {activeDestination.id === "baby"
                ? "Soft, safe, and thoughtfully made essentials for your little one."
                : "Premium personal care designed for comfort, confidence, and daily ease."}
            </motion.p>
          </div>

          <div className="mt-4 grid w-full max-w-6xl grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-8 lg:gap-10">
            {destinations.map((section) => {
              const isActive = activeId === section.id;

              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className="group relative"
                  onMouseEnter={() => setActiveId(section.id)}
                >
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 24 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1.02 : 1,
                      backgroundColor: isActive
                        ? section.id === "baby"
                          ? "rgba(69, 104, 94, 0.68)"
                          : "rgba(130, 0, 219, 0.62)"
                        : "rgba(255, 255, 255, 0.28)",
                      borderColor: isActive
                        ? "rgba(255,255,255,0.36)"
                        : "rgba(255,255,255,0.45)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="relative z-10 flex h-full  w-full flex-col overflow-hidden rounded-4xl border p-5 shadow-2xl backdrop-blur-xl sm:p-6  lg:rounded-[2.5rem] lg:p-8"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-4xl border border-white/12 lg:rounded-[2.5rem]" />
                    <div className="pointer-events-none absolute inset-x-0 top-[48%] h-px bg-white/12" />
                    <div className="pointer-events-none absolute bottom-[18%] left-[62%] top-[48%] w-px bg-white/8" />

                    <div className="relative z-10 flex h-full flex-col space-y-4 pb-1 sm:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="inline-flex items-center gap-2 rounded-2xl py-1.5">
                            <span
                              className={`text-[10px] font-black uppercase tracking-wider ${
                                isActive ? "text-white/85" : "text-zinc-500"
                              }`}
                            >
                              {section.subtitle}
                            </span>
                          </div>

                          <h2
                            className={`text-2xl font-black leading-none sm:text-3xl ${
                              isActive ? "text-white" : "text-foreground"
                            }`}
                          >
                            {section.title.split(" ")[0]} <br />
                            <span
                              className={`${
                                isActive ? "text-white" : "text-zinc-100"
                              }`}
                            >
                              {section.title.split(" ")[1]}
                            </span>
                          </h2>
                        </div>
                      <motion.div
                        animate={{ opacity: isActive ? 0.9 : 0.25 }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none shrink-0"
                      >
                        <Image
                          src={section.icon}
                          alt={section.title}
                          width={96}
                          height={96}
                          className={`size-14 transition sm:size-20 lg:size-24 ${isActive ? "invert" : ""}`}
                        />
                      </motion.div>
                      </div>

                      <p
                        className={`max-w-40 text-sm font-medium leading-relaxed sm:max-w-72 ${
                          isActive ? "text-white/80" : "text-zinc-500"
                        }`}
                      >
                        {section.description}
                      </p>
                      <div className="pointer-events-none absolute bottom-18 right-3 md:hidden">
                        <div
                          className={`${
                            section.id === "baby" ? "w-24" : "w-28"
                          }`}
                        >
                          <Image
                            src={section.image}
                            alt={section.title}
                            width={320}
                            height={240}
                            className="h-auto w-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="mt-auto pt-2 sm:pt-3">
                        <div className="flex w-full justify-center rounded-full bg-white px-4 py-3 sm:py-4">
                          <span
                            className={`text-sm font-bold uppercase ${
                              isActive ? "text-black" : "text-zinc-800"
                            }`}
                          >
                            Visit Now
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Image */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                      rotate: section.id === "baby" ? -10 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={`pointer-events-none absolute hidden md:block ${
                      section.id === "baby"
                        ? "md:z-20 md:left-auto md:top-auto md:translate-x-0 md:bottom-14 md:w-34 lg:bottom-10 lg:-left-46 lg:w-72"
                        : "md:z-20 md:left-auto md:top-auto md:translate-x-0 md:bottom-14 md:-right-6 md:w-44 lg:-bottom-6 lg:-right-60 lg:w-120"
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={640}
                      height={480}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:mt-10">
          {destinations.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              onClick={() => setActiveId(item.id)}
              className={`h-3 w-3 rounded-full transition ${
                activeId === item.id ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
