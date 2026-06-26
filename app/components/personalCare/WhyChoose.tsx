"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/app/components/layout";
import SectionIntro, {
  sectionContentSpacing,
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";
import {
  Droplets,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useStatsByPortal } from "@/hooks/useStat";

const palette = {
  accent: "#8200db",
  accentSoft: "#a14ce8",
  border: "#c89cf1",
  chip: "#f2e8ff",
  panel: "#faf5ff",
  page: "#fdfaff",
  body: "#52525b",
};

// Icon mapping for stats
const iconMap: Record<string, any> = {
  "Trusted Users": Users,
  "Safety Checks": ShieldCheck,
  "Customer Rating": Star,
  "Derm Tested": Leaf,
};

const highlightPoints = [
  {
    text: "Ultra-soft and breathable layers.",
    icon: Droplets,
  },
  {
    text: "Designed for all-day confidence.",
    icon: HeartHandshake,
  },
  {
    text: "Reliable leak protection.",
    icon: Sparkles,
  },
  {
    text: "Gentle on sensitive skin.",
    icon: ShieldCheck,
  },
];

const WhyChoose = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  // Fetch stats from API
  const { stats, isLoading, error } = useStatsByPortal("personal-care");

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
      id="personalcare-why-choose"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-12 md:bg-personal-panel md:py-16 lg:py-20"
    >
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`mx-auto ${sectionIntroSpacing}`}
        >
          <SectionIntro
            align="center"
            className="mx-auto max-w-3xl"
            title="Why Choose Zuvara ?"
            description="Premium personal care essentials designed for comfort, protection, and confidence."
            titleClassName="text-3xl font-semibold tracking-tight lg:text-5xl"
            descriptionClassName="text-sm font-medium leading-relaxed lg:text-base"
            titleStyle={{ color: palette.accent }}
            descriptionStyle={{ color: palette.body }}
          />
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56" />
          
          {/* Loading State - Skeleton */}
          {isLoading && (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 max-w-5xl mx-auto mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 sm:h-30 flex items-center gap-2 rounded-xl border bg-white px-3 py-2 sm:flex-col sm:gap-4 sm:py-6 md:bg-white/85"
                  style={{
                    borderColor: `${palette.border}30`,
                  }}
                >
                  {/* Icon skeleton */}
                  <div className="h-7 w-7 sm:h-12 sm:w-12 md:hidden animate-pulse rounded-lg bg-gray-200/60" />
                  
                  {/* Content skeleton */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-6 sm:h-10 w-16 sm:w-24 animate-pulse rounded bg-gray-200/60 ml-2" />
                    <div className="h-4 sm:h-6 w-24 sm:w-32 animate-pulse rounded bg-gray-200/60" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-sm text-red-500">Failed to load stats</p>
            </div>
          )}
          
          {/* Stats Grid */}
          {!isLoading && !error && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 max-w-5xl mx-auto mb-8">
              {stats.map((item) => {
                // Get icon based on label or use default
                const Icon = iconMap[item.label.trim()] || Users;

                return (
                  <div
                    key={item.id}
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
                      <Icon className="w-4 sm:w-6" />
                    </div>

                    <div className="leading-tight flex flex-col sm:gap-1">
                      <p
                        className="text-md sm:text-4xl md:text-center ml-2 font-semibold tracking-tight"
                        style={{ color: palette.accent }}
                      >
                        {item.value}
                      </p>
                      <p
                        className="text-xs sm:text-lg flex items-center gap-2 font-medium opacity-80"
                        style={{ color: palette.body }}
                      >
                        <span>
                          <span
                            className="hidden sm:h-3 sm:w-4 md:flex items-center justify-center rounded-lg"
                            style={{
                              backgroundColor: `${palette.accent}12`,
                              color: palette.accent,
                            }}
                          >
                            <Icon className="w-4" />
                          </span>
                        </span>
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          <div
            className={`${sectionContentSpacing} flex items-center justify-center max-w-4xl w-full mx-auto`}
          >
            <div className="why-rise relative text-center z-10">
              <h3
                className="hidden sm:block text-2xl font-semibold leading-tight lg:text-3xl"
                style={{ color: palette.accent }}
              >
                Protection that feels calm, light, and reliable
              </h3>

              <p
                className="hidden sm:block mt-4 text-sm font-medium leading-relaxed lg:text-base"
                style={{ color: palette.body }}
              >
                Thoughtfully designed personal care essentials that keep you comfortable and confident all day.
              </p>

              <div className="md:mt-8 mx-auto grid md:grid-cols-2 gap-3">
                {highlightPoints.map((point) => {
                  const PointIcon = point.icon;

                  return (
                    <div
                      key={point.text}
                      className="flex gap-2 items-center rounded-3xl border bg-personal-panel sm:text-center py-3 px-4 transition-all duration-300 hover:bg-white md:bg-white/10 md:hover:bg-white/75"
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
        <div className="flex items-center justify-center mt-8">
          <Link
            href="/about"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white! transition-all duration-300 hover:-translate-y-px"
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
