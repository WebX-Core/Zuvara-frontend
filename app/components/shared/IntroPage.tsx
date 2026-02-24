"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function IntroPage() {
  const [hoveredSection, setHoveredSection] = useState<
    "baby" | "personal" | null
  >(null);
  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  const leftArrowPathRef = useRef<SVGPathElement>(null);
  const rightArrowPathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (leftArrowPathRef.current && rightArrowPathRef.current) {
      const leftLength = leftArrowPathRef.current.getTotalLength();
      const rightLength = rightArrowPathRef.current.getTotalLength();

      const tl = gsap.timeline({ delay: 0.5 });

      tl.set([leftArrowPathRef.current, rightArrowPathRef.current], {
        strokeDasharray: (i) => (i === 0 ? leftLength : rightLength),
        strokeDashoffset: (i) => (i === 0 ? leftLength : rightLength),
        fillOpacity: 0,
        opacity: 1,
      })
        .to([leftArrowPathRef.current, rightArrowPathRef.current], {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.1,
        })
        .to(
          [leftArrowPathRef.current, rightArrowPathRef.current],
          {
            fillOpacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        );
    }
  }, []);

  const sections = [
    {
      id: "baby",
      title: "Baby Care",
      subtitle: "Pure, Gentle, & Natural",
      image: "/images/baby/baby32.png",
      href: "/babyCare",
      color: "var(--foreground)",
      icon: "/icons/xl.png",
      description:
        "Everything your little one needs for a happy, healthy start in life.",
    },
    {
      id: "personal",
      title: "Personal Care",
      subtitle: "Self-Care Reimagined",
      image: "/images/personalCare/happy-lady.png",
      href: "/personalCare",
      color: "var(--personalCare)",
      icon: "/icons/sanitary-napkin.png",
      description:
        "Premium essentials formulated to nourish your body and soul.",
    },
  ];

  return (
    <main className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center tracking-tight bg-babyCare pt-20">
      {/* Nav / Logo */}
      <nav className="bg-babyCare fixed top-0 w-full py-4 flex items-center justify-center z-50">
        <Link href="/">
          <Image src="/logo.png" alt="Zuvara Logo" width={100} height={100} />
        </Link>
      </nav>

      {/* Header Section */}
      <div className="text-center mb-6 lg:mb-12 space-y-3 z-10">
        <span className="font-black uppercase tracking-wider lg:tracking-[0.5em]">
          Welcome to Zuvara
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">
          Choose your destination
        </h1>
        <div className="w-12 h-1 bg-zinc-900 mx-auto rounded-full opacity-20" />
      </div>

      {/* curly arrows */}
      {/* {!isSmallerDevice && (
        <div className="relative w-full container mx-auto px-6">
          <div className="absolute -top-24 left-1/4 lg:left-[15%] z-20 pointer-events-none transform -rotate-12">
          <svg
            width="180"
            height="180"
            viewBox="-5.0 -10.0 110.0 135.0"
            className="text-zinc-800 scale-x-[-1] rotate-75"
          >
            <path
              ref={leftArrowPathRef}
              d="m13.602 75c0 0.5 0.19922 0.89844 0.60156 1.1992l14 10.102c0.30078 0.19922 0.60156 0.30078 0.89844 0.30078 0.5 0 0.89844-0.19922 1.1992-0.60156 0.5-0.69922 0.30078-1.6016-0.30078-2.1016l-10-7.1992c2.3008 0.19922 4.3984 0.19922 6.5 0.19922 17.199 0 26.398-5.3008 31.398-10.898 4.1016 0.19922 8.6992-0.89844 13-3.3008 5.5-3 22.602-15.5 12.602-48.102-0.19922-0.80078-1.1016-1.1992-1.8984-1-0.80078 0.19922-1.1992 1.1016-1 1.8984 9.3008 30.5-6.1992 41.898-11.199 44.602-3 1.6992-6.1992 2.6016-9.1992 2.8008 1.5-2.3984 2.3984-4.6016 2.8984-6.3008 2-7.3008 0.10156-15.199-4.3008-17.398-1.1992-0.60156-4.3984-1.6016-7.6016 2.6992-8.6016 11.301-5.1016 17.699-3.1992 19.898 1.5 1.8008 3.6992 3 6.1992 3.6992-5.6016 5.1016-15.801 9.6016-34.801 8.1016l10.102-7.8984c0.69922-0.5 0.80078-1.5 0.30078-2.1016-0.5-0.69922-1.5-0.80078-2.1016-0.30078l-13.5 10.504c-0.39844 0.30078-0.59766 0.69922-0.59766 1.1992zm36.5-15.199c-3-3.5-1.8008-9.3984 3.3008-16.102 0.69922-1 1.8008-2 3-2 0.30078 0 0.60156 0.10156 0.89844 0.19922 2.3984 1.1992 4.6016 7.1016 2.6992 13.898-0.5 1.8984-1.6016 4.3984-3.6016 7-2.5977-0.29688-4.7969-1.2969-6.2969-2.9961z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0"
            />
          </svg>
          <span className="absolute top-0 -left-4 text-[10px] font-bold text-zinc-600 rotate-[-15deg] uppercase tracking-widest whitespace-nowrap">
            Purely for Baby
          </span>
        </div>

          <div className="absolute -top-24 right-1/4 lg:right-[15%] z-20 pointer-events-none transform -rotate-12">
            <svg
              width="180"
              height="180"
              viewBox="-5.0 -10.0 110.0 135.0"
              className="text-zinc-800 -rotate-60"
            >
              <path
                ref={rightArrowPathRef}
                d="m13.602 75c0 0.5 0.19922 0.89844 0.60156 1.1992l14 10.102c0.30078 0.19922 0.60156 0.30078 0.89844 0.30078 0.5 0 0.89844-0.19922 1.1992-0.60156 0.5-0.69922 0.30078-1.6016-0.30078-2.1016l-10-7.1992c2.3008 0.19922 4.3984 0.19922 6.5 0.19922 17.199 0 26.398-5.3008 31.398-10.898 4.1016 0.19922 8.6992-0.89844 13-3.3008 5.5-3 22.602-15.5 12.602-48.102-0.19922-0.80078-1.1016-1.1992-1.8984-1-0.80078 0.19922-1.1992 1.1016-1 1.8984 9.3008 30.5-6.1992 41.898-11.199 44.602-3 1.6992-6.1992 2.6016-9.1992 2.8008 1.5-2.3984 2.3984-4.6016 2.8984-6.3008 2-7.3008 0.10156-15.199-4.3008-17.398-1.1992-0.60156-4.3984-1.6016-7.6016 2.6992-8.6016 11.301-5.1016 17.699-3.1992 19.898 1.5 1.8008 3.6992 3 6.1992 3.6992-5.6016 5.1016-15.801 9.6016-34.801 8.1016l10.102-7.8984c0.69922-0.5 0.80078-1.5 0.30078-2.1016-0.5-0.69922-1.5-0.80078-2.1016-0.30078l-13.5 10.504c-0.39844 0.30078-0.59766 0.69922-0.59766 1.1992zm36.5-15.199c-3-3.5-1.8008-9.3984 3.3008-16.102 0.69922-1 1.8008-2 3-2 0.30078 0 0.60156 0.10156 0.89844 0.19922 2.3984 1.1992 4.6016 7.1016 2.6992 13.898-0.5 1.8984-1.6016 4.3984-3.6016 7-2.5977-0.29688-4.7969-1.2969-6.2969-2.9961z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0"
              />
            </svg>
            <span className="absolute top-0 -right-4 text-[10px] font-bold text-zinc-600 rotate-[30deg] uppercase tracking-widest whitespace-nowrap">
              Purely for Mother
            </span>
          </div>
        </div>
      )} */}

      {/* Hero Section Split */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10 pb-16">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className="w-full lg:w-100 group relative"
            onMouseEnter={() => setHoveredSection(section.id as any)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                backgroundColor:
                  hoveredSection === section.id ? section.color : "#ffffff",
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className={`relative rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-8 shadow-xl cursor-pointer z-10`}
            >
              {/* Decorative Icon Background - Fixed Flashing with Motion */}
              {/* {!isSmallerDevice && ( */}
              <motion.div
                animate={{
                  opacity:
                    hoveredSection === section.id
                      ? isSmallerDevice
                        ? 0.9
                        : 0.9
                      : 0.2,
                  color: hoveredSection === section.id ? "#ffffff" : "#52525b", // zinc-600
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 lg:top-6 right-6 pointer-events-none"
              >
                {/* <Icon icon={section.icon} width="140" height="140" /> */}
                <img
                  src={section.icon}
                  alt={section.title}
                  className="size-24 group-hover:invert"
                />
              </motion.div>
              {/* )} */}

              {/* Content */}
              <div className="relative z-10 space-y-3">
                {!isSmallerDevice && (
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                      hoveredSection === section.id
                        ? "bg-white/10 border-white/20"
                        : "bg-zinc-50 border-zinc-100"
                    }`}
                  >
                    <Icon
                      icon={section.icon}
                      className={`transition-colors duration-300 ${hoveredSection === section.id ? "text-white" : "text-zinc-600"}`}
                    />
                    <span
                      className={`text-[8px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                        hoveredSection === section.id
                          ? "text-white/80"
                          : "text-zinc-500"
                      }`}
                    >
                      {section.subtitle}
                    </span>
                  </div>
                )}

                <h2
                  className={`text-3xl font-black leading-none transition-colors duration-300 ${
                    hoveredSection === section.id
                      ? "text-white"
                      : "text-zinc-900"
                  }`}
                >
                  {isSmallerDevice
                    ? section.title
                    : section.title.split(" ")[0]}{" "}
                  <br />
                  <span
                    className={`transition-colors duration-300 ${
                      hoveredSection === section.id
                        ? "text-white/60"
                        : "text-zinc-300"
                    }`}
                  >
                    {!isSmallerDevice && section.title.split(" ")[1]}
                  </span>
                </h2>

                <p
                  className={`max-w-[280px] text-sm font-medium leading-relaxed transition-colors duration-300 ${
                    hoveredSection === section.id
                      ? "text-white/80"
                      : "text-zinc-500"
                  }`}
                >
                  {section.description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div
                    className={`size-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      hoveredSection === section.id
                        ? "bg-white text-zinc-900 scale-110"
                        : "text-white"
                    }`}
                    style={{
                      backgroundColor:
                        hoveredSection === section.id
                          ? "#ffffff"
                          : section.color,
                    }}
                  >
                    <Icon icon="solar:arrow-right-up-linear" width="20" />
                  </div>
                  <span
                    className={`font-black text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                      hoveredSection === section.id
                        ? "text-white"
                        : "text-zinc-900"
                    }`}
                  >
                    Visit Now
                  </span>
                </div>
              </div>
            </motion.div>

            {!isSmallerDevice && (
              <motion.img
                src={section.image}
                alt=""
                initial={{
                  scale: 0,
                  opacity: 0,
                  rotate: section.id === "baby" ? -10 : 10,
                }}
                animate={{
                  scale: hoveredSection === section.id ? 1 : 0,
                  opacity: hoveredSection === section.id ? 1 : 0,
                  rotate: section.id === "baby" ? -10 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                style={{ originX: 0.5, originY: 1 }}
                className={`absolute z-0 pointer-events-none ${
                  section.id === "baby"
                    ? "bottom-6 -left-12 w-70"
                    : "bottom-4 -right-12 w-50"
                }`}
              />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
