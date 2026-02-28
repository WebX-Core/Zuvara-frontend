"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Leaf, HeartHandshake, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#F6FBF9] text-[#1f2937] w-full  relative">
      <div className="absolute   h-120 w-full  pointer-events-none ">
        <Image
          src="/images/baby/baby19.png"
          alt=""
          fill
          className="object-cover object-center"
        ></Image>
      </div>

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/new/bonding.png"
            alt="Happy baby"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="max-w-3xl space-y-6">
          <p className="uppercase tracking-widest text-sm text-[#45685e] font-semibold">
            Our Story
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Designed for delicate beginnings.
            <br />
            Built on trust.
          </h1>

          <p className="text-lg text-gray-800 leading-relaxed">
            We believe baby care should feel safe, simple, and beautiful —
            because every small moment with your baby matters.
          </p>
        </div>
      </section>

      {/* ───────────────── ORIGIN STORY ───────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/new/bonding.png"
              alt="Product testing"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Where it all began</h2>

            <p className="text-gray-600 leading-relaxed">
              Our brand was born from a simple question: Why should parents
              choose between comfort, safety, and beauty?
            </p>

            <p className="text-gray-600 leading-relaxed">
              After countless conversations with parents, pediatric experts, and
              product designers, we set out to build essentials that feel as
              thoughtful as the love you give your child.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every material we select, every seam we stitch, every product we
              launch — is guided by care.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── VALUES ───────────────── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div>
            <h2 className="text-3xl font-bold">What We Stand For</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our values shape everything we create.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard
              icon={<ShieldCheck size={28} />}
              title="Safety First"
              desc="Dermatologist-tested, baby-safe materials in every product."
            />
            <ValueCard
              icon={<Leaf size={28} />}
              title="Gentle & Natural"
              desc="Thoughtfully sourced ingredients and breathable fabrics."
            />
            <ValueCard
              icon={<HeartHandshake size={28} />}
              title="Parent Trusted"
              desc="Built from real conversations with real parents."
            />
            <ValueCard
              icon={<Sparkles size={28} />}
              title="Premium Feel"
              desc="Elegant design without compromising comfort."
            />
          </div>
        </div>
      </section>

      {/* ───────────────── CRAFTSMANSHIP ───────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Crafted with care. Backed by science.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We collaborate with pediatric dermatologists and product
              specialists to ensure every product meets the highest safety
              standards.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From absorbency testing to skin-sensitivity trials, our
              development process prioritizes what matters most — your baby’s
              comfort.
            </p>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/new/babies.png"
              alt="Product testing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ───────────────── PROMISE ───────────────── */}
      <section className="py-24 bg-[#45685e] text-white px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Our Promise to You</h2>

          <p className="text-white/90 leading-relaxed">
            We promise to create baby essentials that feel safe, thoughtful, and
            beautifully made — so you can focus on what truly matters.
          </p>

          <Link
            href="/babyCareProduct"
            className="inline-block bg-white text-[#45685e] px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENT ───────────────── */

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
    <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all bg-[#F6FBF9] space-y-4">
      <div className="w-14 h-14 rounded-full bg-[#45685e] text-white flex items-center justify-center mx-auto">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
