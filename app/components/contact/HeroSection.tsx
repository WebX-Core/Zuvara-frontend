"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <div
      className={cn(
        "lg:min-h-screen flex lg:items-center justify-center transition-colors duration-500 pt-4 lg:pt-0",
      )}
    >
      <section className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center relative">
          {/* <div className="lg:w-1/2 z-10 lg:text-center space-y-8">
            <h1
              className={cn(
                "text-3xl lg:text-6xl font-bold transition-colors duration-500",
                isPersonal ? "text-black" : "text-foreground",
              )}
            >
              Let's{" "}
              <span
                className={cn(isPersonal ? "text-ternary" : "text-secondary")}
              >
                Connect
              </span>
            </h1>
            <p className="text-lg">
              Have questions or need support? We're here to help—reach out to
              Arola anytime, and we'll be happy to assist you.
            </p>
          </div> */}

          {/* clip-path: polygon(0% 0%, 70% 0%, 70% 20%, 100% 20%, 70% 35%, 70% 100%, 0% 100%); */}

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-foreground">
                Let's{" "}
                <span className="text-secondary whitespace-nowrap">
                  Connect
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-2xl">
                Diapers, wipes, and gentle care products meticulously designed
                to keep your baby clean, comfortable, and remarkably happy.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-end relative">
            <div
              className="bg-blue-500 absolute top-0 left-1/3 w-60 h-40"
              // style={{
              //   clipPath:
              //     "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
              // }}
            >
              <p>nsiodvjindiovn</p>
            </div>
            <Image
              src="/images/baby/baby-calling.png"
              alt="baby calling"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
