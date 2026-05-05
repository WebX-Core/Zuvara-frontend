"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors } from "@/lib/tokens";
import { Container } from "@/app/components/layout";
import SectionIntro, {
  sectionContentSpacing,
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";
import {
  Baby,
  Droplets,
  HeartHandshake,
  Leaf,
  ShieldAlert,
  ShieldCheck,
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
  {
    text: "Snug, gentle fit.",
    icon: ShieldCheck,
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
          className={`mx-auto ${sectionIntroSpacing} `}
        >
          <SectionIntro
            align="center"
            className="mx-auto max-w-3xl"
            title="Why Choose Zuvara ?"
            description="Soft, safe essentials designed to make everyday care easier."
            titleClassName="text-3xl font-semibold tracking-tight lg:text-5xl"
            descriptionClassName="text-sm font-medium leading-relaxed lg:text-base"
            titleStyle={{ color: palette.accent }}
            descriptionStyle={{ color: palette.body }}
          />
        </motion.div>

        <div className="relative overflow-hidden  ">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 " />
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {trustStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group h-20 sm:h-30 flex items-center gap-2 rounded-xl border bg-white px-3 py-2 transition-all duration-200 hover:bg-white sm:flex-col sm:gap-4 sm:py-6 md:bg-white/85"
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
          <div
            className={`${sectionContentSpacing} flex items-center justify-center max-w-4xl w-full mx-auto`}
          >
            <div className="why-riserelative text-center z-10">
              <h3
                className="hidden sm:block text-2xl font-semibold leading-tight lg:text-3xl"
                style={{ color: palette.accent }}
              >
                Gentler care, every day
              </h3>

              <p
                className="hidden sm:block mt-4  text-sm font-medium leading-relaxed lg:text-base"
                style={{ color: palette.body }}
              >
                Soft care and reliable protection for everyday routines.
              </p>

              <div className="md:mt-6  mx-auto grid md:grid-cols-2   gap-2">
                {highlightPoints.map((point) => {
                  const PointIcon = point.icon;

                  return (
                    <div
                      key={point.text}
                      className="flex gap-2 items-center rounded-3xl border bg-[#f7fbf8] sm:text-center py-2 px-4 transition-all duration-300 hover:bg-white md:bg-white/10 md:hover:bg-white/75"
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
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/about"
            className="my-4 md:mb-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white!  transition-all duration-300 hover:-translate-y-px "
            style={{ backgroundColor: palette.accent }}
          >
            Learn More About Us
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
