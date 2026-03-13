"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { assetWithFill, wave3Svg } from "@/constants/svgs";

const palette = {
  accent: "#45685e",
  accentSoft: "#6d877f",
  border: "#84aaa5",
  chip: "#d7ebe8",
  panel: "#edf5f1",
  page: "#f7fbf8",
  body: "#596963",
};

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Kathmandu",
    text: "Zuvara products have been a game-changer for my baby's sensitive skin. I've tried many brands, but nothing compares to the natural ingredients.",
    rating: 5,
    image: "/images/parent/parent2.png",
    badge: "Sensitive skin",
    time: "2 weeks ago",
  },
  {
    id: 2,
    name: "Anita Poudel",
    location: "Pokhara",
    text: "My daughter has extremely sensitive skin, and Zuvara is the only brand that doesn't cause any irritation. Highly recommended for all Nepali mothers.",
    rating: 5,
    image: "/images/parent/parent.png",
    badge: "Verified parent",
    time: "1 month ago",
  },
  {
    id: 3,
    name: "Sneha Gurung",
    location: "Bhaktapur",
    text: "Affordable, trustworthy, and effective. I love that Zuvara is a Nepali brand that understands our needs and delivers quality products.",
    rating: 5,
    image: "/images/parent/parent2.png",
    badge: "Daily use",
    time: "3 weeks ago",
  },
  {
    id: 4,
    name: "Mamata Karki",
    location: "Lalitpur",
    text: "The fit is comfortable, the quality feels premium, and overnight protection has been far more reliable for our routine.",
    rating: 5,
    image: "/images/parent/parent.png",
    badge: "Overnight care",
    time: "6 days ago",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const maxIndex = Math.max(0, testimonials.length - visibleCards);
  const safeActiveIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
        return;
      }

      if (window.innerWidth < 1024) {
        setVisibleCards(2);
        return;
      }

      setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (maxIndex === 0) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const goPrev = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const productBottomWave = assetWithFill(wave3Svg, "#f2f7f5");

  return (
    <section
      className="relative overflow-hidden bg-babyCare px-4 lg:pb-48"
    >
      <div
        className="absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />
      <div className="pointer-events-none absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-foreground tracking-tight lg:text-5xl">
                Hear from Our
                <span className="font-light italic"> Happy Parents</span>
              </h2>
              <p className="mt-5 text-sm font-medium leading-relaxed text-foreground lg:text-lg">
                Real experiences from families who trust Zuvara for comfort,
                care, and gentle everyday protection.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="rounded-4xl px-2 py-5 sm:px-4 md:py-6">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span
                className="flex items-center gap-2 py-2 text-lg font-semibold sm:text-xl"
                style={{
                  color: palette.accent,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="50"
                  viewBox="0 0 512 168"
                >
                  <path
                    fill="#ff302f"
                    d="m496.052 102.672l14.204 9.469c-4.61 6.79-15.636 18.44-34.699 18.44c-23.672 0-41.301-18.315-41.301-41.614c0-24.793 17.816-41.613 39.308-41.613c21.616 0 32.206 17.193 35.633 26.475l1.869 4.735l-55.692 23.049c4.236 8.348 10.84 12.584 20.183 12.584c9.345 0 15.823-4.61 20.495-11.525M452.384 87.66l37.19-15.45c-2.056-5.17-8.16-8.845-15.45-8.845c-9.281 0-22.176 8.223-21.74 24.295"
                  />
                  <path
                    fill="#20b15a"
                    d="M407.407 4.931h17.94v121.85h-17.94z"
                  />
                  <path
                    fill="#3686f7"
                    d="M379.125 50.593h17.318V124.6c0 30.711-18.128 43.357-39.558 43.357c-20.183 0-32.33-13.58-36.878-24.606l15.885-6.604c2.865 6.79 9.78 14.827 20.993 14.827c13.767 0 22.24-8.535 22.24-24.482v-5.98h-.623c-4.112 4.983-11.961 9.468-21.928 9.468c-20.807 0-39.87-18.128-39.87-41.488c0-23.486 19.063-41.8 39.87-41.8c9.905 0 17.816 4.423 21.928 9.282h.623zm1.245 38.499c0-14.702-9.78-25.417-22.239-25.417c-12.584 0-23.174 10.715-23.174 25.417c0 14.514 10.59 25.042 23.174 25.042c12.46.063 22.24-10.528 22.24-25.042"
                  />
                  <path
                    fill="#ff302f"
                    d="M218.216 88.78c0 23.984-18.688 41.613-41.613 41.613c-22.924 0-41.613-17.691-41.613-41.613c0-24.108 18.689-41.675 41.613-41.675c22.925 0 41.613 17.567 41.613 41.675m-18.19 0c0-14.95-10.84-25.23-23.423-25.23S153.18 73.83 153.18 88.78c0 14.826 10.84 25.23 23.423 25.23c12.584 0 23.423-10.404 23.423-25.23"
                  />
                  <path
                    fill="#ffba40"
                    d="M309.105 88.967c0 23.984-18.689 41.613-41.613 41.613c-22.925 0-41.613-17.63-41.613-41.613c0-24.108 18.688-41.613 41.613-41.613c22.924 0 41.613 17.443 41.613 41.613m-18.253 0c0-14.95-10.839-25.23-23.423-25.23s-23.423 10.28-23.423 25.23c0 14.826 10.84 25.23 23.423 25.23c12.646 0 23.423-10.466 23.423-25.23"
                  />
                  <path
                    fill="#3686f7"
                    d="M66.59 112.328c-26.102 0-46.534-21.056-46.534-47.158c0-26.101 20.432-47.157 46.534-47.157c14.079 0 24.357 5.544 31.957 12.646l12.522-12.521C100.479 7.984 86.338.258 66.59.258C30.833.259.744 29.414.744 65.17s30.089 64.912 65.846 64.912c19.312 0 33.889-6.354 45.289-18.19c11.711-11.712 15.324-28.158 15.324-41.489c0-4.174-.498-8.472-1.059-11.649H66.59v17.318h42.423c-1.246 10.84-4.672 18.253-9.718 23.298c-6.105 6.168-15.76 12.958-32.705 12.958"
                  />
                </svg>
                Reviews
              </span>
              <p className="text-sm text-zinc-500">
                Swipe through real feedback from parents
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: `${palette.border}55`,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  color: palette.accent,
                }}
                aria-label="Previous reviews"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: `${palette.border}55`,
                  backgroundColor: "rgba(255,255,255,0.92)",
                  color: palette.accent,
                }}
                aria-label="Next reviews"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${safeActiveIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                key={item.id}
                  className="w-full shrink-0 md:w-1/2 lg:w-1/3"
                >
                  <article
                    className="h-full rounded-[1.9rem] border p-5 md:p-6"
                    style={{
                      borderColor: `${palette.border}44`,
                      backgroundColor: "rgba(255,255,255,0.94)",
                    }}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold"
                            style={{ color: palette.accent }}
                          >
                            {item.name}
                          </p>
                          <p className="text-xs text-zinc-500">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <span
                        className="w-fit rounded-full px-3 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: "rgba(215,235,232,0.55)",
                          color: palette.accentSoft,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: item.rating }).map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            fill="#fbbf24"
                            color="#fbbf24"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-400">{item.time}</span>
                    </div>

                    <p
                      className="mt-4 text-sm leading-relaxed md:text-base"
                      style={{ color: palette.body }}
                    >
                      {item.text}
                    </p>

                    <div
                      className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: palette.accentSoft }}
                    >
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#22c55e" }}
                      />
                      Verified review
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: safeActiveIndex === index ? "2.8rem" : "0.7rem",
                  backgroundColor:
                    safeActiveIndex === index
                      ? palette.accent
                      : "rgba(132,170,165,0.35)",
                }}
                aria-label={`Go to review slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
