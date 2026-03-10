"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Baby,
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
  "Designed around softness, absorbency, and practical ease.",
  "Made to support calmer daily routines for both babies and parents.",
  "Refined visual language that feels premium without losing warmth.",
];

const WhyChoose = () => {
  return (
    <section className="relative w-full overflow-hidden  bg-babyCare pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <p
            className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold"
            style={{
              borderColor: `${palette.border}44`,
              backgroundColor: "rgba(255,255,255,0.72)",
              color: palette.accent,
            }}
          >
            Why Choose Zuvara
          </p>
          <h2
            className="mt-5 text-2xl font-semibold tracking-tight lg:text-5xl"
            style={{ color: palette.accent }}
          >
            Thoughtful baby care,
            <span
              className="ml-2 font-light italic"
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

        <div className="relative overflow-hidden px-4 py-6 md:px-0 md:py-8">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full blur-3xl" />
          <div className="grid gap-3 lg:grid-cols-3">
            {trustStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.8rem] border px-5 py-4 md:px-6 md:py-5 bg-white/90"
                  style={{
                    borderColor: `${palette.border}44`,
                    boxShadow: "0 14px 30px rgba(69,104,94,0.05)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.95)",
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
                    className="mt-3 max-w-48 text-sm leading-relaxed font-medium"
                    style={{ color: palette.body }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h3
                className="mt-8 text-2xl font-semibold leading-tight lg:text-3xl"
                style={{ color: palette.accent }}
              >
                Built for gentler routines, trusted for everyday life.
              </h3>

              <p
                className="mt-4 max-w-xl text-sm font-medium leading-relaxed lg:text-base"
                style={{ color: palette.body }}
              >
                From soft-touch materials to performance-tested protection,
                every Zuvara product is designed to support healthier growth,
                calmer care, and more confident parenting.
              </p>

              <div className="mt-6 space-y-3">
                {highlightPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-3xl border px-4 py-3 bg-background"
                    style={{
                      borderColor: `${palette.border}40`,
                      backgroundColor: "rgba(255,255,255,0.72)",
                      color: palette.accent,
                    }}
                  >
                    <p className="text-sm font-medium leading-relaxed lg:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white! transition-transform duration-300 hover:scale-[1.02]"
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
                      backgroundColor: "rgba(255,255,255,0.78)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold "
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
                      backgroundColor: "rgba(255,255,255,0.72)",
                    }}
                  >
                    <Image
                      src="/images/baby/baby24.png"
                      alt="Happy baby portrait"
                      fill
                      className="object-cover"
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
                    className="pointer-events-none absolute inset-x-8 bottom-3 h-16 rounded-full blur-2xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.82)" }}
                  />
                  <Image
                    src="/new/babyzuvara.png"
                    alt="Zuvara baby care visual"
                    fill
                    className="object-contain object-bottom p-4"
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
                  style={{
                    backgroundColor: palette.accent,
                    color: "#ffffff",
                  }}
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
