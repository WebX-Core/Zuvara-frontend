"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Leaf, HeartHandshake, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#F9FCFA] text-[#2d3748] min-h-screen">
      {/* Subtle full-width background overlay – lower opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/baby/baby19.png" // consider softer / dreamier hero image
          alt=""
          fill
          className="object-cover object-center scale-105"
          priority
        />
      </div>

      {/* HERO – more emotional & spacious */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-5 sm:px-8 md:px-12 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F9FCFA]/80 via-transparent to-[#F9FCFA]/60" />

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-medium text-[#45685e]">
            Our Story
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-snug">
            Gentle beginnings,
            <br className="hidden sm:block" />
            wrapped in love.
          </h1>

          <p className="text-lg sm:text-xl text-[#4a5568] leading-relaxed max-w-3xl mx-auto font-light">
            We create baby essentials that feel as safe and tender as a parent’s
            embrace — because the smallest moments deserve the purest care.
          </p>

          {/* Optional small CTA in hero */}
          <div className="pt-6">
            <Link
              href="/babyCareProduct"
              className="inline-flex items-center gap-3 bg-[#45685e] text-white px-8 py-4 rounded-full font-medium shadow-md hover:bg-[#3a5750] transition hover:shadow-lg"
            >
              Discover Our World
              <Sparkles size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ORIGIN – cleaner layout, better image ratio */}
      <section className="py-20 lg:py-32 px-5 sm:px-8 md:px-12 bg-white/60 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[620px]">
            <Image
              src="/new/bonding.png"
              alt="Parent and baby bonding moment"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Born from love,
              <br />
              guided by care.
            </h2>

            <div className="space-y-6 text-[#4a5568] leading-relaxed">
              <p>
                It started with one question every new parent asks:{" "}
                <em>“Can safety, comfort, and beauty really live together?”</em>
              </p>
              <p>
                We listened — to mothers, fathers, pediatricians, midwives, and
                sleep-deprived parents at 3 a.m. — and created a different
                answer.
              </p>
              <p className="font-medium text-[#45685e]">
                Every fabric, every stitch, every detail is chosen with
                intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES – softer cards, more generous spacing */}
      <section className="py-20 lg:py-32 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core Promises
            </h2>
            <p className="text-[#4a5568] max-w-3xl mx-auto text-lg">
              Four values that guide every single product we create.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <ValueCard
              icon={<ShieldCheck size={32} />}
              title="Absolute Safety"
              desc="Dermatologist-approved, hypoallergenic materials tested for the most sensitive skin."
            />
            <ValueCard
              icon={<Leaf size={32} />}
              title="Pure & Gentle"
              desc="Plant-based, responsibly sourced ingredients and breathable natural fibers."
            />
            <ValueCard
              icon={<HeartHandshake size={32} />}
              title="Parent-Made"
              desc="Designed with — and continuously shaped by — real families."
            />
            <ValueCard
              icon={<Sparkles size={32} />}
              title="Quiet Luxury"
              desc="Timeless elegance that feels as beautiful as it is comfortable."
            />
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP – flipped layout for variety */}
      <section className="py-20 lg:py-32 px-5 sm:px-8 md:px-12 bg-[#F9FCFA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Crafted with intention.
              <br />
              Backed by science.
            </h2>

            <div className="space-y-6 text-[#4a5568] leading-relaxed">
              <p>
                We partner with pediatric dermatologists, textile engineers, and
                safety labs to go far beyond basic standards.
              </p>
              <p>
                Absorbency, breathability, pH balance, skin compatibility —
                every test is performed so your baby only feels love, never
                compromise.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[620px] lg:order-1">
            <Image
              src="/new/babies.png"
              alt="Gentle care in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROMISE – stronger emotional close */}
      <section className="py-24 lg:py-32 bg-[#45685e] text-white px-5 sm:px-8 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Our Heartfelt Promise
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto font-light">
            We will never stop creating baby essentials that feel safe enough to
            trust, gentle enough to cherish, and beautiful enough to remember —
            so you can simply be present in the magic of these early days.
          </p>

          <div className="pt-8">
            <Link
              href="/babyCareProduct"
              className="inline-flex items-center gap-3 bg-white text-[#45685e] px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:bg-gray-100 transition hover:scale-[1.03]"
            >
              Meet the Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group p-8 md:p-10 rounded-3xl border border-[#e2ecea] bg-white/70 backdrop-blur-sm hover:border-[#45685e]/30 hover:shadow-xl transition-all duration-300 space-y-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#45685e] text-white flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="font-semibold text-xl">{title}</h3>

      <p className="text-[#4a5568] text-base leading-relaxed">{desc}</p>
    </div>
  );
}
