"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors } from "@/lib/tokens";
import { Container } from "@/app/components/layout";
import {
  Baby,
  Droplets,
  HeartHandshake,
  Leaf,
  ShieldAlert,
  Sparkles,
  Star,
} from "lucide-react";

const palette = {
  accent: colors.baby.accent,
  accentSoft: colors.baby.accentSoft,
  border: colors.baby.border,
  chip: colors.baby.chip,
  panel: colors.baby.panel,
  page: colors.baby.page,
  body: colors.baby.body,
};

const trustStats = [
  {
    label: "Trusted Parents",
    value: "50K+",
    chip: "Families",
    icon: Baby,
  },
  {
    label: "Safety Checks ",
    value: "30+",
    chip: "Safety",
    icon: ShieldAlert,
  },
  {
    label: " Customer Rating",
    value: "4.8",
    chip: "Rating",
    icon: Star,
  },
  {
    label: "Derm Tested ",
    value: "100%",
    chip: "Skin Safe",
    icon: Leaf,
  },
];

const highlightPoints = [
  {
    text: "Soft, absorbent, and easy to use.",
    icon: Droplets,
  },
  {
    text: "Made for calmer daily routines.",
    icon: HeartHandshake,
  },
  {
    text: "Premium feel with a warm touch.",
    icon: Sparkles,
  },
];

const WhyChoose = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-rise",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="babycare-why-choose"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-6  md:bg-babyCare md:py-0"
    >
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-12"
        >
          <p
            className="inline-flex rounded-full bg-[#45695e] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white md:bg-white/85 md:text-baby-accent"
            style={{
              borderColor: `${palette.border}44`,
            }}
          >
            Why Choose Zuvara
          </p>
          <h2
            className="mt-5 text-3xl font-semibold tracking-tight lg:text-5xl"
            style={{ color: palette.accent }}
          >
            Thoughtful baby care,
            <span
              className="ml-2 block font-light italic lg:inline"
              style={{ color: palette.accentSoft }}
            >
              made simple.
            </span>
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed font-medium lg:text-base"
            style={{ color: palette.body }}
          >
            Soft, safe essentials designed to make everyday care easier.
          </p>
        </motion.div>

        <div className="relative overflow-hidden   md:py-6 lg:py-8">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 " />
          <div className="grid grid-cols-2  gap-2  lg:grid-cols-4 max-w-5xl mx-auto">
            {trustStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group flex items-center gap-2 rounded-xl border bg-[#f7fbf8] px-3 py-2 transition-all duration-200 hover:bg-white sm:flex-col sm:gap-4 sm:py-6 md:bg-white/85"
                  style={{
                    borderColor: `${palette.border}30`,
                  }}
                >
                  <div
                    className="flex h-7 w-7 sm:h-12 sm:w-12 md:hidden items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${palette.accent}12`,
                      color: palette.accent,
                    }}
                  >
                    <Icon className="w-4 sm:w-6 " />
                  </div>

                  <div className="leading-tight flex flex-col sm:gap-1">
                    <p
                      className="text-md sm:text-4xl md:text-center ml-2 font-semibold tracking-tight"
                      style={{ color: palette.accent }}
                    >
                      {item.value}
                      {item.value == "4.8" && (
                        <span className="text-xs sm:text-lg ">/ 5</span>
                      )}
                    </p>
                    <p
                      className="text-xs sm:text-lg flex items-center gap-2 font-medium opacity-80 "
                      style={{ color: palette.body }}
                    >
                      <span>
                        <span
                          className="hidden sm:h-3 sm:w-4 md:flex  items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: `${palette.accent}12`,
                            color: palette.accent,
                          }}
                        >
                          <Icon className="w-4  " />
                        </span>
                      </span>
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="why-rise relative z-10">
              <h3
                className="text-2xl font-semibold leading-tight lg:text-3xl"
                style={{ color: palette.accent }}
              >
                Gentler care, every day
              </h3>

              <p
                className="mt-4 max-w-xl text-sm font-medium leading-relaxed lg:text-base"
                style={{ color: palette.body }}
              >
                Soft care and reliable protection for everyday routines.
              </p>

              <div className="mt-6 space-y-3">
                {highlightPoints.map((point) => {
                  const PointIcon = point.icon;

                  return (
                    <div
                      key={point.text}
                      className="flex items-center gap-3 rounded-3xl border bg-[#f7fbf8] px-4 py-3 transition-all duration-300 hover:bg-white md:bg-white/10 md:hover:bg-white/75"
                      style={{
                        borderColor: `${palette.border}40`,
                        color: palette.accent,
                      }}
                    >
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/90">
                        <PointIcon size={16} />
                      </span>
                      <p className="text-sm font-medium leading-relaxed lg:text-base">
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white!  transition-all duration-300 hover:-translate-y-px hover:shadow-[0_16px_30px_rgba(69,104,94,0.3)]"
                style={{ backgroundColor: palette.accent }}
              >
                About Zuvara
              </Link>
            </div>

            <div className="why-rise relative hidden md:block">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="grid gap-4">
                  <div
                    className="rounded-4xl border bg-[#f7fbf8] p-5 md:bg-white/30"
                    style={{
                      borderColor: `${palette.border}44`,
                    }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.16em] "
                      style={{ color: palette.accentSoft }}
                    >
                      Everyday Calm
                    </p>
                    <p
                      className="mt-3 text-lg font-semibold"
                      style={{ color: palette.accent }}
                    >
                      Designed to look softer and feel better in every routine.
                    </p>
                  </div>

                  <div
                    className="relative overflow-hidden rounded-4xl border bg-[#f7fbf8] md:bg-white/80"
                    style={{
                      minHeight: "13rem",
                      borderColor: `${palette.border}44`,
                    }}
                  >
                    <Image
                      src="/images/baby/baby24.png"
                      alt="Happy baby portrait"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-4xl border bg-[linear-gradient(180deg,#f7fbf8_0%,#edf5f1_100%)] md:bg-none"
                  style={{
                    minHeight: "28rem",
                    borderColor: `${palette.border}44`,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(237,245,241,0.94) 100%)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-8 bottom-3 h-16 rounded-full blur-2xl overflow-hidden"
                    style={{ backgroundColor: "rgba(255,255,255,0.82)" }}
                  />
                  <Image
                    src="/images/baby/baby20.png"
                    alt="Zuvara baby care visual"
                    fill
                    className="object-cover object-bottom  transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-baby-accent">
                    Premium baby care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
