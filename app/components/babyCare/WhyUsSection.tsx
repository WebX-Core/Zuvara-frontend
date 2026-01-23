"use client";

import React from "react";
import SectionHeading from "../common-ui/SectionHeading";
import ImageGridSection from "./ImageGridSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const whyUsLists = [
  {
    id: 1,
    icon: "/images/baby/baby25.png",
    title: "Premium Quality",
    description:
      "Gentle, premium-quality materials that protect delicate baby skin",
  },
  {
    id: 2,
    icon: "/images/baby/baby13.png",
    title: "100% Natural",
    description: "Superior absorption for longer dryness and fewer changes",
  },
  {
    id: 3,
    icon: "/images/baby/baby15.png",
    title: "Trusted by Dermatologists",
    description: "Dermatologist-tested & toxin-free for safer everyday use",
  },
  {
    id: 4,
    icon: "/images/baby/baby12.png",
    title: "Comfortable Fit",
    description: "Easy-fit design for comfort, movement, and leak protection",
  },
];

const WhyUsSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="relative w-full lg:h-[140vh] overflow-hidden py-12 lg:-mt-32">
      {/* Background Shape */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-around">
        <div className="w-full h-1/3 lg:h-full pointer-events-none z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248.87 299.93"
            preserveAspectRatio="none"
            className="w-full h-full fill-[#97c4af]"
          >
            <path d="M0,96.87c3.08-.43,6.27-.52,9.38-.84a69.08,69.08,0,0,1,15.74.52C38.22,98.2,50.45,103,62,109.32a229.63,229.63,0,0,1,21.76,13.75c6.85,4.81,14,9.24,20.78,14.08a111.2,111.2,0,0,0,21,11.69,57.83,57.83,0,0,0,14.07,4.43,48.58,48.58,0,0,0,15.64.29c15-2.61,29.2-13.24,35.86-26.88a42.23,42.23,0,0,0,2.46-6.23c2.31-7.57,2.76-15.67,2.62-23.53-.32-16.9-.41-33.8,6-49.72,5.61-13.85,16.94-24.19,28-33.75A163.27,163.27,0,0,1,248.87,0c0,4.76,0,9.52,0,14.27V197.68l-16.1-2.86c-8-1.42-16.46-1.33-24.58-.95a143.78,143.78,0,0,0-23.75,2.82,76.43,76.43,0,0,0-21.27,7.78c-7,3.9-13.13,9.09-18.89,14.59-6,5.74-11.92,11.57-17.84,17.4q-8.57,8.41-17,17c-5.1,5.16-10.27,10.23-15.74,15A161.88,161.88,0,0,1,75.39,282.6,122.55,122.55,0,0,1,64.33,289a106.46,106.46,0,0,1-11.63,5c-1.62.6-3.26,1.16-4.93,1.62a111.71,111.71,0,0,1-25.84,4.31,73.06,73.06,0,0,1-8.37-.24c-2.32-.21-4.64-.53-6.93-1-1.17-.22-2.33-.47-3.49-.75A20.83,20.83,0,0,0,0,297.18" />
          </svg>
        </div>
        <div className="w-full h-1/3 lg:h-full pointer-events-none z-0 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248.87 299.93"
            preserveAspectRatio="none"
            className="w-full h-full fill-[#97c4af] scale-x-[-1]"
          >
            <path d="M.05,211.31c0,1.25,15.69-.35,17.12-.59a74.07,74.07,0,0,0,15.22-4.41c16.94-6.83,31.11-19.26,45.53-30.3,14.82-11.35,29.87-22.59,46.59-31C170.87,121.61,227,122.13,276,139.11c5.15,1.79,16.38,5.89,19.32-1.3a16.14,16.14,0,0,0,.77-6.2c-.28-35.83-.54-71.74-.54-107.52.11,1.76-19.94,8.32-22.19,9.12A251.93,251.93,0,0,1,249,40.53c-15.92,3.93-32,5.85-48.28,7.11-37,2.87-79.9,3.09-113.48-15-7.87-4.24-15.08-9.57-22.66-14.3C45.4,6.41,23-1.78.09.33,0,.33,0,36.92,0,40.21V196.14C0,201.2,0,206.26.05,211.31Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl relative z-10">
        {/* top section */}
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <SectionHeading title="Why Us" />
            <p className="lg:text-lg">
              Zuvara is a Nepali family-care brand committed to providing safe,
              high-quality, and affordable essentials for everyday life. From
              baby diapers and wipes to women's hygiene and personal care
              products, we focus on comfort, reliability, and gentle care.
              Designed to meet international standards and the needs of Nepali
              families, Zuvara is your trusted partner in family well-being.
            </p>
          </div>

          <div className="w-[90%] lg:w-1/2">
            <ImageGridSection />
          </div>
        </div>

        {/* below section */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:mb-16"
          >
            <SectionHeading
              title="Why Parents Choose"
              highlight="Zuvara"
              highlighterColor="text-white"
              // className="lg:mb-0"
            />
            <p>
              Trusted by Nepali families for our commitment to quality, safety,
              and care
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {whyUsLists.map((list) => (
              <div
                key={list.id}
                className="relative flex flex-col gap-4 items-center text-center px-4 py-4 lg:not-first:py-6 rounded-lg bg-white shadow-md mt-24 lg:mt-24"
              >
                <div className="absolute -top-20 lg:-top-32 left-1/2 -translate-x-1/2 w-[70%]">
                  <div className="">
                    <div className="mb-4 w-full h-36 lg:h-44 rounded-full flex items-center justify-center">
                      <img
                        src={list.icon}
                        alt={list.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <p className="flex flex-col gap-2 pt-12">
                  <span className="font-semibold">{list.title}</span>
                  <span className="text-sm">{list.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
