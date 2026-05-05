"use client";

import Image from "next/image";
import SectionIntro, { sectionContentSpacing } from "@/app/components/common-ui/SectionIntro";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type StatItem = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  eyebrow: string;
};

const statsLists: StatItem[] = [
  {
    id: 1,
    title: "Absorbs 15x",
    desc: "Built to lock in flow fast and help you stay dry through longer wear.",
    icon: "/icons/absorption.png",
    eyebrow: "High absorbency",
  },
  {
    id: 2,
    title: "Thin & Soft",
    desc: "A light, cotton-soft surface designed for breathable everyday comfort.",
    icon: "/icons/fabric.png",
    eyebrow: "Soft-touch feel",
  },
  {
    id: 3,
    title: "12 hour+",
    desc: "Reliable day-to-night support for routines that do not slow down.",
    icon: "/icons/12-hours.png",
    eyebrow: "Long coverage",
  },
];

const StatsDivider = () => {
  const renderStatCard = (list: StatItem) => (
    <article
      key={list.id}
      className="group relative isolate overflow-hidden rounded-[1.8rem] border border-personalCare/12 bg-linear-to-br from-white via-white to-personalCare/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-linear-to-br from-personalCare to-personalCare/80 shadow-[0_18px_34px_rgba(219,39,119,0.22)]">
            <Image
              src={list.icon}
              alt={list.title}
              width={34}
              height={34}
              className="invert"
            />
          </div>
          <span className="rounded-full bg-personalCare/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-personalCare">
            {list.eyebrow}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900">
          {list.title}
        </h3>
        <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-zinc-600">
          {list.desc}
        </p>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-personalCare/8">
          <div className="h-full w-2/3 rounded-full bg-linear-to-r from-personalCare to-personalCare/70 transition-all duration-300 group-hover:w-full" />
        </div>
      </div>
    </article>
  );

  return (
    <section className="relative overflow-hidden bg-personalCare/6 py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-personalCare/20 to-transparent">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-14%] top-[-10%] h-40 w-40 rounded-full bg-personalCare/14 blur-3xl transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute left-[-12%] bottom-[-18%] h-36 w-44 rounded-full bg-personalCare/10 blur-3xl" />
          <div className="absolute inset-x-[12%] top-[18%] h-24 rounded-full bg-white/70 blur-3xl" />
          <PremiumWaveBackground />
        </div>
      </div>

      <div className="mx-auto w-[92%] max-w-7xl">
        <style>{`
          .stats-swiper .swiper-pagination {
            position: static;
            margin-top: 1.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
          }
          .stats-swiper .swiper-pagination-bullet {
            width: 0.7rem;
            height: 0.625rem;
            border-radius: 9999px;
            background: rgba(130, 0, 219, 0.18);
            opacity: 1;
            transition: width 0.3s, background 0.3s;
            margin: 0 !important;
          }
          .stats-swiper .swiper-pagination-bullet-active {
            width: 2.8rem;
            background: #8200db;
          }
          .stats-swiper .swiper-slide {
            height: auto;
          }
        `}</style>
        <SectionIntro
          align="center"
          className="mx-auto max-w-3xl"
          eyebrow={
            <span className="inline-flex rounded-full border border-personalCare/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
              Everyday performance
            </span>
          }
          title={
            <>
              Protection details that feel
              <span className="ml-2 italic font-light text-personalCare/70">
                calm, light, and reliable.
              </span>
            </>
          }
          description="Designed to keep comfort and confidence balanced across long days, active movement, and everyday wear."
          titleClassName="text-5xl font-semibold leading-[0.98] tracking-tight text-personalCare"
          descriptionClassName="text-sm font-medium leading-relaxed text-zinc-600 md:text-base"
        />

        <div className={`${sectionContentSpacing} md:hidden`}>
          <Swiper
            className="stats-swiper"
            modules={[Autoplay, Pagination, A11y]}
            slidesPerView={1.08}
            spaceBetween={16}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
          >
            {statsLists.map((list) => (
              <SwiperSlide key={list.id} className="pb-1">
                {renderStatCard(list)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={`${sectionContentSpacing} hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3`}>
          {statsLists.map((list) => renderStatCard(list))}
        </div>
      </div>
    </section>
  );
};

export default StatsDivider;

const PremiumWaveBackground = () => {
  const brightWavePaths = [
    "M-40 172C30 142 112 108 190 118C268 128 334 186 406 188C484 190 548 140 660 108",
    "M-28 156C46 126 116 94 192 102C278 112 336 170 410 170C492 170 554 120 662 88",
    "M-58 190C24 158 104 130 188 142C268 154 334 210 408 212C494 214 562 158 668 126",
  ];

  const fineWaveOffsets = [0, 6, 12, 18, 24, 30, 36, 42];

  return (
    <svg
      viewBox="0 0 640 260"
      className="absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="personal-wave-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
          <stop offset="48%" stopColor="rgba(130,0,219,0.08)" />
          <stop offset="100%" stopColor="rgba(130,0,219,0.02)" />
        </linearGradient>
        <linearGradient id="personal-wave-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="28%" stopColor="rgba(255,255,255,0.86)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.94)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
        </linearGradient>
      </defs>

      <path
        d="M-20 210C92 152 182 138 266 148C350 158 430 206 660 112V260H-20Z"
        fill="url(#personal-wave-fill)"
      />

      {fineWaveOffsets.map((offset) => (
        <path
          key={`fine-wave-${offset}`}
          d="M-36 154C46 120 122 92 202 104C286 116 352 174 428 176C506 178 570 126 676 96"
          transform={`translate(0 ${offset})`}
          stroke="rgba(255,255,255,0.24)"
          strokeWidth="0.95"
          strokeLinecap="round"
        />
      ))}

      {brightWavePaths.map((path, index) => (
        <path
          key={`bright-wave-${index}`}
          d={path}
          stroke="url(#personal-wave-stroke)"
          strokeWidth={index === 1 ? 2.8 : 2.1}
          strokeLinecap="round"
        />
      ))}

      <path
        d="M-42 138C32 112 110 90 190 98C278 108 342 164 418 164C500 164 566 114 670 84"
        stroke="rgba(130,0,219,0.18)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M-54 204C26 176 102 150 182 160C268 170 340 226 416 226C502 226 570 170 676 138"
        stroke="rgba(130,0,219,0.14)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M-20 194C86 150 178 134 264 146C354 158 430 208 664 116"
        stroke="rgba(255,255,255,0.46)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M-20 210C92 152 182 138 266 148C350 158 430 206 660 112"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M-20 210C92 152 182 138 266 148C350 158 430 206 660 112V260H-20Z"
        fill="rgba(255,255,255,0.1)"
        opacity="0.42"
      />
      <path
        d="M-10 132C80 100 144 80 214 90C294 102 352 152 422 152C502 152 568 106 650 82"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="14"
        strokeLinecap="round"
        filter="blur(10px)"
      />
      <path
        d="M-10 132C80 100 144 80 214 90C294 102 352 152 422 152C502 152 568 106 650 82"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M-22 170C60 136 128 108 202 118C282 130 344 188 414 188C494 188 560 138 654 110"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="18"
        strokeLinecap="round"
        filter="blur(14px)"
      />
      <path
        d="M-22 170C60 136 128 108 202 118C282 130 344 188 414 188C494 188 560 138 654 110"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect
        x="0"
        y="0"
        width="640"
        height="260"
        fill="rgba(255,255,255,0.02)"
      />
    </svg>
  );
};
