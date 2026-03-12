"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  accent: "#45685e",
  accentSoft: "#6d877f",
  border: "#84aaa5",
  chip: "#d7ebe8",
  panel: "#edf5f1",
  page: "#f7fbf8",
  body: "#596963",
};

const values = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Gentle materials specifically designed to protect delicate baby skin.",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Pure and Thoughtful",
    description:
      "Carefully selected components that feel soft, breathable, and dependable.",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Parent Approved",
    description:
      "Built around real family routines, comfort needs, and daily convenience.",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Comfort Driven",
    description:
      "Supportive fit and reliable performance through naps, play, and overnight use.",
  },
];

const trustStats = [
  {
    label: "Parents Trusting Zuvara",
    value: "50K+",
    chip: "Families",
    icon: Baby,
  },
  {
    label: "Safety Checks Per Batch",
    value: "30+",
    chip: "Safety",
    icon: ShieldAlert,
  },
  {
    label: "Average Customer Rating",
    value: "4.8/5",
    chip: "Rating",
    icon: Star,
  },
];

const highlightPoints = [
  {
    text: "Designed around softness, absorbency, and practical ease.",
    icon: Droplets,
  },
  {
    text: "Made to support calmer daily routines for both babies and parents.",
    icon: HeartHandshake,
  },
  {
    text: "Refined visual language that feels premium without losing warmth.",
    icon: Sparkles,
  },
];

const WhyChoose = () => {
  return (
    <section className="relative w-full overflow-hidden bg-babyCare pb-20">
      <div className="relative mx-auto max-w-7xl ">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-12"
        >
          <p
            className="inline-flex rounded-full  px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: `${palette.border}44`,
              backgroundColor: "rgba(255,255,255,0.85)",
              color: palette.accent,
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
              elevated for modern families.
            </span>
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed font-medium lg:text-base"
            style={{ color: palette.body }}
          >
            Zuvara blends quiet premium design with everyday performance so
            every product feels softer, safer, and more reassuring to use.
          </p>
        </motion.div>

        <div className="relative overflow-hidden   md:py-6 lg:py-8">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 " />
          <div className="grid gap-4 lg:grid-cols-3">
            {trustStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.8rem] border bg-white/90 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(69,104,94,0.12)] md:px-6 md:py-5"
                  style={{
                    borderColor: `${palette.border}44`,
                    boxShadow: "0 14px 30px rgba(69,104,94,0.05)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold"
                      style={{
                        borderColor: `${palette.border}33`,
                        backgroundColor: "rgba(255,255,255,0.98)",
                        color: palette.accentSoft,
                      }}
                    >
                      <Icon size={12} />
                      {item.chip}
                    </span>
                  </div>
                  <p
                    className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl"
                    style={{ color: palette.accent }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="mt-3 max-w-52 text-sm leading-relaxed font-medium"
                    style={{ color: palette.body }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="relative z-10 "
            >
              <h3
                className="text-2xl font-semibold leading-tight lg:text-3xl"
                style={{ color: palette.accent }}
              >
                Built for gentler routines
              </h3>

              <p
                className="mt-4 max-w-xl text-sm font-medium leading-relaxed lg:text-base"
                style={{ color: palette.body }}
              >
                Soft care. Strong protection.
Made for growing babies and confident parents.
              </p>

              <div className="mt-6 space-y-3">
                {highlightPoints.map((point) => {
                  const PointIcon = point.icon;

                  return (
                    <div
                      key={point.text}
                      className="flex items-start gap-3 rounded-3xl border px-4 py-3 transition-all duration-300 bg-white/10  hover:bg-white/75"
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
                className="mt-7 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white! shadow-[0_12px_28px_rgba(69,104,94,0.25)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_16px_30px_rgba(69,104,94,0.3)]"
                style={{ backgroundColor: palette.accent }}
              >
                Learn more about Zuvara
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="grid gap-4">
                  <div
                    className="rounded-4xl border p-5"
                    style={{
                      borderColor: `${palette.border}44`,
                      backgroundColor: "rgba(255,255,255,0.3)",
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
                    className="relative overflow-hidden rounded-4xl border"
                    style={{
                      minHeight: "13rem",
                      borderColor: `${palette.border}44`,
                      backgroundColor: "rgba(255,255,255,0.8)",
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
                  className="relative overflow-hidden rounded-4xl border"
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
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[#45685e]">
                    Premium baby care
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative mx-auto w-full max-w-90"
              >
                <svg
                  viewBox="0 0 400 200"
                  className="mx-auto block h-55 w-[calc(100%+5px)] sm:h-60 md:h-65"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                  stroke="#45685E"
                  strokeWidth={4}
                >
                  <path
                    d="M40 110 C30 70 70 40 120 50 C150 20 220 20 250 50 C300 40 360 70 350 120 C360 160 300 180 240 170 C200 190 130 185 90 165 C50 160 25 135 40 110 Z"
                    fill="#ffffff"
                  />
                </svg>
                <div className="absolute inset-0 z-10 flex items-center justify-center px-10 py-8 sm:px-12 sm:py-10">
                  <div className="w-full max-w-57.5 text-center">
                <div
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-4 sm:h-11 sm:w-11"
              
                >
                  <Icon size={16} className="sm:h-4.5 sm:w-4.5" />
                </div>
                <h3
                  className="text-sm font-semibold sm:text-base"
                  style={{ color: palette.accent }}
                >
                  {value.title}
                </h3>
                <p
                  className="mt-2 text-xs leading-relaxed sm:text-sm"
                  style={{ color: palette.body }}
                >
                  {value.description}
                </p>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
