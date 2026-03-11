"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import {
  babyCareListingTheme,
  type BabyCareListingTheme,
} from "@/app/components/babyCareProduct/theme";
import { assetWithFill, wave3Svg } from "@/constants/svgs";

const heroPills = [
  "Skin-first essentials",
  "Soft everyday care",
  "Trusted by parents",
];

const floatingNotes = [
  { title: "Gentle Touch", body: "Soft materials for delicate skin." },
  { title: "Daily Comfort", body: "Made for active mornings and calm nights." },
];

type HeroSectionProps = {
  theme?: BabyCareListingTheme;
};

const HeroSection = ({ theme = babyCareListingTheme }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-copy",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.08,
        },
      );

      gsap.fromTo(
        ".hero-visual",
        { autoAlpha: 0, y: 48, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        },
      );

      gsap.to(".hero-float", {
        y: -14,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
      });
    },
    { scope: containerRef },
  );

   const productBottomWave = assetWithFill(wave3Svg, "#f2f7f5");

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-[75vh] overflow-hidden bg-babyCare/50 px-4 py-10 sm:px-6 md:min-h-[88vh] md:py-12 lg:px-10"
    >
        <div
        className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* <div className="hero-copy inline-flex rounded-full border border-yellow-500 bg-yellow-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffffff] shadow-[0_12px_28px_rgba(69,104,94,0.08)] backdrop-blur-sm">
          Premium Collection
        </div> */}

        <h2
          className="hero-copy mt-6 max-w-4xl text-[clamp(2rem,8vw,3.6rem)] font-semibold leading-[0.95] tracking-tight"
          style={{ color: theme.accent }}
        >
          Everyday baby care,
          <span
            className="ml-3 font-light italic"
            style={{ color: theme.accentSoft }}
          >
            centered around comfort.
          </span>
        </h2>

        <p className="hero-copy mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
          Discover essentials designed to feel gentle, look refined, and support
          your baby through every daily moment with softness and safety.
        </p>

        <div className="hero-copy mt-6 flex flex-wrap items-center justify-center gap-3">
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border bg-white/72 px-4 py-2 text-sm font-medium shadow-[0_10px_22px_rgba(69,104,94,0.08)]"
              style={{
                borderColor: `${theme.border}60`,
                color: theme.accent,
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="hero-visual relative mt-12 flex w-full justify-center md:mt-14 z-20">
          <div className="relative w-full max-w-4xl">
            <div className="hero-float absolute left-0 top-10 hidden w-52 rounded-[1.8rem] border border-white/60 bg-white/50 p-4 text-left shadow-[0_18px_38px_rgba(69,104,94,0.12)] backdrop-blur-sm lg:block">
              <p className="text-sm font-semibold" style={{ color: theme.accent }}>
                {floatingNotes[0].title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {floatingNotes[0].body}
              </p>
            </div>

            <div className="hero-float absolute right-0 top-20 hidden w-52 rounded-[1.8rem] border border-white/60 bg-white/50 p-4 text-left shadow-[0_18px_38px_rgba(69,104,94,0.12)] backdrop-blur-sm lg:block">
              <p className="text-sm font-semibold" style={{ color: theme.accent }}>
                {floatingNotes[1].title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {floatingNotes[1].body}
              </p>
            </div>

            <div className="hero-float relative mx-auto flex h-[320px] w-full max-w-4xl items-end justify-center overflow-hidden rounded-[2.6rem] px-4 pt-8 sm:h-[400px] sm:px-6 sm:pt-10 md:h-[500px] lg:h-[560px]">
              <Image
                src="/images/baby/baby-with-product.webp"
                alt="Baby with product"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            <div className="hero-copy mt-6 flex items-center justify-center gap-3 md:hidden">
              {floatingNotes.map((note) => (
                <div
                  key={note.title}
                  className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-left shadow-[0_12px_24px_rgba(69,104,94,0.1)]"
                >
                  <p className="text-sm font-semibold" style={{ color: theme.accent }}>
                    {note.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[48px] font-black uppercase leading-none text-foreground/70 sm:text-[72px] md:text-[120px] xl:text-[170px]"
        >
          zuvara
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
