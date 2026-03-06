"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto w-[90%]">
        <div className="relative rounded-4xl border border-zinc-200/70 bg-babyCare p-6 sm:p-8 lg:p-12">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-foreground/30 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-foreground transition-all duration-300 hover:bg-foreground/5"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-80 sm:h-95 lg:h-115 w-full">
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
