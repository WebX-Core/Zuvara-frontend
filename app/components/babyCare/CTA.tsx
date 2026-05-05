"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import SectionIntro, { sectionContentSpacing } from "../common-ui/SectionIntro";
import { wave4Svg } from "@/constants/svgs";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white ">
      <div
        className="absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: wave4Svg.markup }}
      />
      <div className="relative z-10 w-full ">
        <div className="relative w-full bg-babyCare py-8 pb-12 sm:px-8 md:pt-4 md:pb-12 lg:px-40 lg:pb-40">
          {/* Mobile Version - Hero Style */}
          <div className="px-4 sm:px-0 md:hidden">
            <div className="relative overflow-hidden rounded-2xl ">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute -right-6 bottom-4 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
              </div>

              <div className="relative z-10 ">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 bg-white/60 text-baby-accent  backdrop-blur-sm rounded-full px-2 py-1.5">
                        <ShieldCheck size={14} />
                        <span className="text-xs font-bold text-baby-accent uppercase tracking-wider">
                          Premium Comfort
                        </span>
                      </div>
                      <h2 className="text-xl font-bold leading-tight text-baby-accent">
                        Gentle care for your baby&apos;s softest moments
                      </h2>
                      <p className="text-md font-medium text-baby-accent-soft leading-relaxed">
                        Ultra-soft, breathable materials for all-day comfort and
                        care.
                      </p>
                    </div>

                    <Link
                      href="/product"
                      className="inline-flex items-center gap-2 bg-white text-baby-accent px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
                    >
                      <span>Shop Now</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="relative size-24 shrink-0">
                    <div className="absolute inset-0  rounded-2xl backdrop-blur-sm" />
                    <div className="relative size-full">
                      <Image
                        src="/images/baby/baby31.png"
                        alt="Premium Baby Care"
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="relative hidden w-full grid-cols-1 items-center gap-10 px-4 sm:px-0 md:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionIntro
                eyebrow={
                  <p className="inline-flex items-center rounded-full border border-foreground/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                    Premium Baby Comfort
                  </p>
                }
                title="Gentle care for your baby's softest moments"
                description="Crafted with ultra-soft, breathable materials to keep your baby comfortable, protected, and happy all day long."
                titleClassName="text-3xl font-semibold leading-[1.05] text-foreground sm:text-4xl lg:text-5xl"
                descriptionClassName="max-w-xl text-sm leading-relaxed text-zinc-700 sm:text-base"
              />

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

              <div
                className={`${sectionContentSpacing} flex flex-wrap items-center gap-3`}
              >
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white! transition-all duration-300 hover:bg-white hover:text-foreground! hover:shadow-lg sm:text-base"
                >
                  Shop Premium Diapers
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative h-80 w-full sm:h-95 lg:h-90">
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
