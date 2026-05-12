"use client";

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
          {/* Mobile Version - Improved Design */}
          <div className="px-4 sm:px-0 md:hidden">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/40 shadow-xl">
              {/* Decorative Background Elements */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 top-4 h-32 w-32 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
              </div>

              <div className="relative z-10 p-5">
                {/* Content Layout */}
                <div className="space-y-5">
                  {/* Text Content */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                      <ShieldCheck size={14} className="text-baby-accent" />
                      <span className="text-xs font-bold text-baby-accent uppercase tracking-wider">
                        Premium Comfort
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold leading-tight text-baby-accent">
                      Gentle care for your baby&apos;s softest moments
                    </h2>

                    <p className="text-sm font-medium text-baby-accent-soft leading-relaxed">
                      Ultra-soft, breathable materials for all-day comfort and
                      care.
                    </p>
                  </div>

                  {/* Video Section - Clean without background box */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-48 w-full object-cover"
                    >
                      <source src="/videos/new-zuv.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/product"
                    className="flex items-center justify-center gap-2 bg-white text-baby-accent px-6 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl w-full"
                  >
                    <span>View Products</span>
                    <ArrowRight size={16} />
                  </Link>
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

            {/* Desktop Video Section - Clean without background box */}
            <div className="relative h-80 w-full sm:h-95 lg:h-[450px] rounded-[2rem] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/new-zuv.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
