"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { wave4Svg } from "@/constants/svgs";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white ">
      <div
        className="absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: wave4Svg.markup }}
      />
      <div className="relative z-10 w-full ">
        <div className="relative w-full border-y border-zinc-200/70 bg-babyCare  py-8 sm:px-8 lg:px-40 lg:pb-40">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:gap-16 items-center px-4 sm:px-0">
            {/* Content */}
            <div>
              <p className="inline-flex items-center rounded-full border border-foreground/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                Premium Baby Comfort
              </p>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground font-poppins leading-[1.05]">
                Gentle care for your baby&apos;s softest moments
              </h2>

              <p className="mt-4 text-zinc-700 text-sm sm:text-base leading-relaxed max-w-xl">
                Crafted with ultra-soft, breathable materials to keep your baby
                comfortable, protected, and happy all day long.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-foreground" />
                  Dermatologically tested
                </div>
                <div className="inline-flex items-center gap-2">
                  <Truck size={16} className="text-foreground" />
                  Fast nationwide delivery
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm sm:text-base font-semibold text-white! hover:text-foreground! transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  Shop Premium Diapers
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-80 sm:h-95 lg:h-90 w-full">
              <div className="absolute inset-0 rounded-[1.6rem] bg-white/60 backdrop-blur-[1px]" />
              <div className="absolute inset-4 rounded-[1.2rem] border border-white/70 bg-white/40" />
              <div className="absolute inset-0">
                <Image
                  src="/images/baby/baby31.png"
                  alt="Premium Baby Care"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
