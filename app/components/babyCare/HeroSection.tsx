"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { wave1Svg, wave2Svg } from "@/constants/svgs";

export default function Home() {
  return (
    <div className="relative w-full  h-svh sm:h-[80vh] bg-[#f2f7f5]">
      <section className="relative   h-full justify-center  pt-2 sm:pt-20  z-0">
        <div
          className="absolute -bottom-1 z-0 h-auto w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: wave1Svg.markup }}
        />
        <div
          className="absolute inset-x-0 -bottom-1 z-10 h-auto w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: wave2Svg.markup }}
        />
        {/* Flower & Ferns */}
        <div className="absolute  sm:block bottom-4 left-[1%] sm:left-[20%] -z-20 sm:bottom-20 lg:bottom-24 [&>svg]:h-30 [&>svg]:w-30 invert-4">
          {" "}
          <Image
            src="/waves/sunflower.gif"
            alt="flower"
            width={70}
            height={60}
            className=""
          ></Image>
          <div className="absolute inset-0 " />
        </div>
        <div className="absolute bottom-8 left-[30%] sm:left-[10%] z-10 sm:bottom-48 lg:bottom-16 ">
          <Image
            src="/waves/fern.svg"
            alt="fern"
            width={60}
            height={40}
          ></Image>
        </div>
        <div className="absolute hidden sm:block bottom-12 right-[16%] sm:right-[10%] z-10 sm:bottom-14 lg:bottom-20 ">
          <Image
            src="/waves/fern.svg"
            alt="fern"
            width={60}
            height={40}
          ></Image>
        </div>
        <div className="absolute hidden sm:block bottom-10 right-[60%] z-10 sm:bottom-24 lg:bottom-46 ">
          <Image
            src="/waves/fern.svg"
            alt="fern"
            width={60}
            height={40}
          ></Image>
        </div>

        {/* Tree */}
        {/* Center Tree */}
        <div className="absolute hidden  bottom-6 right-[10%] sm:right-[40%] -z-20 sm:bottom-24 lg:bottom-44 [&>svg]:h-50 [&>svg]:w-50">
          <Image
            src="/waves/tree1.svg"
            alt="tree"
            width={160}
            height={160}
          ></Image>
        </div>
        {/* Right tree */}
        <div className="absolute bottom-48 right-[5%] -z-20  [&>svg]:h-50 [&>svg]:w-50">
          <Image
            src="/waves/tree3.svg"
            alt="tree"
            width={160}
            height={160}
          ></Image>
        </div>
        {/* Clouds */}
        <div className="pointer-events-none absolute left-[50%] top-5 z-10 h-5 w-28 opacity-55 sm:h-7 sm:w-40 lg:h-10 lg:w-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                opacity="0.5"
                cx="7"
                cy="7"
                r="5"
                fill="#d3ebe7"
              ></circle>{" "}
              <path
                d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
                fill="#d3ebe7"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="absolute right-[8%] top-0 sm:top-10 z-40 sm:right-[18%] lg:right-[26%] ">
          <Image
            src="/waves/solar.gif"
            alt="sun"
            width={100}
            height={40}
            className="h-auto w-24 transform transition-transform duration-300 hover:scale-110 lg:w-28"
          />
        </div>
        <div className="pointer-events-none absolute -left-[4%] -top-20 z-10 h-5 w-28 opacity-55 sm:h-7 sm:w-40 lg:h-10 lg:w-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
                fill="#d3ebe7"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="pointer-events-none absolute right-[2%] -top-20 z-10 h-5 w-20 opacity-55 sm:h-7 sm:w-36 lg:h-10 lg:w-60">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
                fill="#d3ebe7"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20 py-12 lg:w-1/2 h-full flex    ">
            <div className=" space-y-2 lg:space-y-4">
              <p className="text-xs lg:text-sm font-semibold tracking-wide text-foreground">
                Premium Baby Care Essentials
              </p>
              <h2 className="mt-5 text-2xl font-semibold text-foreground tracking-tight lg:text-5xl">
                Gentle protection for babies.
              </h2>

              <p className="text-sm lg:text-lg text-foreground mt-5 font-medium leading-relaxed">
                Trusted by newly married couples around the world, focusing on
                comfort and safety for your heart and healthy baby.
              </p>

              <div className="flex items-center w-full gap-4 lg:gap-5 pt-2 lg:pt-4 ">
                <Link href="/babyCareProduct">
                  <button className="bg-[#45685e] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:shadow-xl cursor-pointer hover:scale-105 transition duration-300 text-sm lg:text-base">
                    Explore Essentials
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="outline outline-[#45685e] text-[#45685e] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:scale-105 transition duration-300 text-sm lg:text-base">
                    Become a Distributor
                  </button>
                </Link>
              </div>

              <div className="mt-5 w-full sm:hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-80 aspect-square"
                >
                  <Image
                    src="/waves/BORDERS.png"
                    alt="Decorative frame"
                    fill
                    className="pointer-events-none absolute inset-0 z-20 object-contain"
                  />
                  <div className="absolute inset-[15%] z-10 overflow-hidden rounded-[20px]">
                    <video
                      src="/videos/babyPlaying.mp4"
                      
                      
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Waves */}

      <div className="relative bottom-0 w-full overflow-visible leading-none hidden sm:block">
        <div className="absolute -bottom-5 left-4/5 z-30 -translate-x-4/5">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-60 aspect-square lg:w-100"
          >
            <Image
              src="/waves/BORDERS.png"
              alt=""
              fill
              className="pointer-events-none absolute inset-0 z-20 object-contain"
            />
            <div className="absolute inset-[15%] z-10 overflow-hidden rounded-[60px]">
              <video
                src="/videos/babyPlaying.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
