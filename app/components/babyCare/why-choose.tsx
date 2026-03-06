"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ImageGridSection from "./ImageGridSection";

const WhyChoose = () => {
  const values = [
    {
      id: 1,
      icon: "/icons/premium.png",
      title: "Premium Quality",
      description:
        "Gentle materials specifically designed to protect delicate baby skin.",
    },
    {
      id: 2,
      icon: "/icons/nature.png",
      title: "100% Natural",
      description:
        "Hypoallergenic and toxin-free components for long-lasting dryness.",
    },
    {
      id: 3,
      icon: "/icons/trusted.png",
      title: "Dermatologist Tested",
      description:
        "Clinically validated safety standards for your baby's daily routine.",
    },
    {
      id: 4,
      icon: "/icons/comfortable.png",
      title: "Ergonomic Fit",
      description:
        "Advanced design ensuring comfort, ease of movement, and leak protection.",
    },
  ];

  const trustStats = [
    { label: "Parents Trusting Zuvara", value: "50K+" },
    { label: "Safety Checks Per Batch", value: "30+" },
    { label: "Average Customer Rating", value: "4.8/5" },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="inline-flex rounded-full border border-[#45685e]/20 bg-[#eef4f1] px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#45685e]">
            About Us
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">
            Thoughtful baby care for modern families
          </h2>
          <p className="mt-3 text-sm lg:text-base text-zinc-600 leading-relaxed">
            We design baby essentials around what matters most: comfort, safety,
            and day-to-day convenience for both babies and parents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-zinc-900">
              Why families choose Zuvara
            </h3>
            <p className="mt-3 text-sm lg:text-base text-zinc-600 leading-relaxed">
              From soft-touch materials to performance-tested protection, every
              product is built to support healthy growth and stress-free care.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {trustStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-3"
                >
                  <p className="text-xl font-semibold text-zinc-900">
                    {item.value}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center rounded-full border border-[#45685e]/30 px-5 py-2.5 text-sm font-medium text-[#45685e] transition-colors hover:bg-[#45685e] hover:text-white"
            >
              Learn more about Zuvara
            </Link>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-[#f7fbf9] p-4 lg:p-6">
            <ImageGridSection />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div className="mb-3 size-11 rounded-full bg-[#eef4f1] flex items-center justify-center">
                <Image src={value.icon} alt={value.title} width={22} height={22} />
              </div>
              <h3 className="text-base font-semibold text-zinc-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
