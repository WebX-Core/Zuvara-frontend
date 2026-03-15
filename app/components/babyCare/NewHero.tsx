"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { wave1Svg, wave2Svg } from "@/constants/svgs";

export default function Home() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      const mobileSpeedMultiplier = isMobile ? 10 : 1;
      const babyVideos =
        gsap.utils.toArray<HTMLVideoElement>(".hero-baby-video");

      const freezeOnLastFrame = () => {
        babyVideos.forEach((video) => {
          video.pause();
          if (Number.isFinite(video.duration) && video.duration > 0) {
            video.currentTime = Math.max(video.duration - 0.05, 0);
          }
        });
      };

      const handleVideoEnded = (event: Event) => {
        const video = event.currentTarget as HTMLVideoElement;
        video.pause();
        if (Number.isFinite(video.duration) && video.duration > 0) {
          video.currentTime = Math.max(video.duration - 0.05, 0);
        }
      };

      babyVideos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.addEventListener("ended", handleVideoEnded);
      });

      gsap.set([".hero-wave-fill-1", ".hero-wave-fill-2"], {
        opacity: 1,
        scaleY: 0,
        transformOrigin: "50% 100%",
      });
      gsap.set([".hero-wave1", ".hero-wave2"], { opacity: 0, y: 8 });
      gsap.set(".hero-sun", { y: -10, x: 50, opacity: 0, scale: 0.8 });
      gsap.set(".hero-plant", { y: 20, opacity: 0, scale: 0.9 });
      gsap.set(".hero-baby-right", { x: 120, opacity: 0, scale: 0.95 });
      gsap.set(".hero-baby-mobile", { x: 60, opacity: 0, scale: 0.95 });
      gsap.set(".hero-copy", { x: -55, opacity: 0 });
      gsap.set(".hero-bubble", { y: 35, opacity: 0, scale: 0.7 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.to(".hero-wave-fill-1", {
        scaleY: 1,
        duration: 0.75,
        ease: "power2.out",
      })
        .to(
          ".hero-wave1",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          ".hero-wave-fill-1",
          {
            opacity: 0,
          },
          "<",
        )
        .to(".hero-wave-fill-2", {
          scaleY: 1,

          ease: "power2.out",
        })
        .to(
          ".hero-wave2",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          1,
        )
        .to(
          ".hero-wave-fill-2",
          {
            opacity: 0,
            duration: 0.25,
          },
          "<",
        )

        .to(
          ".hero-plant",
          { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1 },
          "<",
        )
        .to(
          ".hero-copy",
          { x: 0, opacity: 1, duration: 0.65, stagger: 0.08 },
          "<",
        )
        .to(
          ".hero-bubble",
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08 },
          "<",
        )
        .to(
          [".hero-baby-right", ".hero-baby-mobile"],
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            onStart: () => {
              babyVideos.forEach((video) => {
                video.currentTime = 0;
                void video.play().catch(() => {});
              });
            },
          },
          "<",
        )
        .to(
          ".hero-sun",
          {
            y: -30,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.35)",
          },
          "<",
        );

      if (isMobile) {
        tl.timeScale(mobileSpeedMultiplier);
      }

      let hasPlayedIntro = false;
      const playHeroIntro = () => {
        if (hasPlayedIntro) return;
        hasPlayedIntro = true;
        tl.play(0);
      };

      const seen = window.sessionStorage.getItem(
        "babycare-loader-seen-session",
      );
      if (seen === "true") {
        requestAnimationFrame(playHeroIntro);
      }

      // Safety fallback: if loader event is missed for any reason, reveal hero anyway.
      const introFallbackTimer = window.setTimeout(
        playHeroIntro,
        1800 / mobileSpeedMultiplier,
      );

      gsap.to(".parallax-sun", {
        yPercent: -10,
        xPercent: 2,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".parallax-cloud-front", {
        xPercent: 4,
        yPercent: -5,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.to(".parallax-plant", {
        yPercent: -10,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".parallax-card", {
        yPercent: -8,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.to(".parallax-wave-back", {
        yPercent: -3,
        xPercent: 0,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.75,
        },
      });

      gsap.to(".parallax-wave-front", {
        yPercent: 6,
        xPercent: 0,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.to(".parallax-bubble", {
        yPercent: -10,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.to(".float-idle", {
        y: "-=8",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.8,
        stagger: 0.2,
      });

      gsap.to(".hero-sun-halo-desktop", {
        keyframes: [
          { x: -170, y: -6, rotation: -12, duration: 1.5 },
          { x: -95, y: -10, rotation: -7, duration: 0.9 },
          { x: 0, y: -90, rotation: 0, duration: 1.15 },
          { x: 95, y: -10, rotation: 7, duration: 0.9 },
          { x: 170, y: -20, rotation: 12, duration: 1.5 },
        ],
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".hero-sun-halo-mobile", {
        keyframes: [
          { x: -92, y: -4, rotation: -10, duration: 1.35 },
          { x: -52, y: -8, rotation: -5, duration: 0.8 },
          { x: 0, y: -52, rotation: 0, duration: 1.05 },
          { x: 52, y: -8, rotation: 5, duration: 0.8 },
          { x: 92, y: -14, rotation: 10, duration: 1.35 },
        ],
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      window.addEventListener("babycare-loader-complete", playHeroIntro);

      return () => {
        babyVideos.forEach((video) => {
          video.removeEventListener("ended", handleVideoEnded);
        });
        freezeOnLastFrame();
        window.clearTimeout(introFallbackTimer);
        window.removeEventListener("babycare-loader-complete", playHeroIntro);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <section
        ref={rootRef}
        className="relative z-0 min-h-svh px-4 pb-24 pt-24 sm:min-h-[90vh] sm:pt-28"
      >
        <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_22%_14%,rgba(255,255,255,0.92),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.66),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.75),transparent_45%)]" />

        <div
          className="hero-wave1 parallax-wave-back absolute -bottom-1 z-20 h-auto w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: wave1Svg.markup }}
        />
        <div
          className="hero-wave2 parallax-wave-front absolute inset-x-0 -bottom-1 z-30 h-auto w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: wave2Svg.markup }}
        />
        <svg
          viewBox="0 0 822 142"
          preserveAspectRatio="none"
          className="hero-wave-fill-1 pointer-events-none absolute -bottom-1 z-40 block h-auto w-full opacity-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M148.891 65.2047C96.8835 50.5069 28.2939 78.8661 0.5 94.8829V141.509H820.805V77.9925L779.2 52.4855C652.008 -21.0035 524.815 -12.524 408.929 52.4855C293.043 117.495 213.901 83.577 148.891 65.2047Z"
            fill="#74A788"
            stroke="#72a685"
          />
        </svg>
        <svg
          viewBox="0 0 821 126"
          preserveAspectRatio="none"
          className="hero-wave-fill-2 pointer-events-none absolute inset-x-0 -bottom-1 z-40 block h-auto w-full opacity-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M583.701 64.5194C707.106 122.966 784.83 51.1007 820.305 0V125.756H0V26.3488C106.424 128.151 205.118 89.051 224.82 77.4684C241.58 67.6155 300.539 34.3333 330.035 19.1628C366.189 0.567793 414.201 7.07483 453.984 33.3621C502.951 68.6746 538.523 43.1224 583.701 64.5194Z"
            fill="#bfdec9"
          />
        </svg>

        <div className="hero-plant parallax-plant absolute bottom-8 left-[30%] z-30 sm:bottom-48 sm:left-[10%] lg:bottom-16">
          <Image src="/waves/fern.svg" alt="fern" width={60} height={40} />
        </div>
        <div className="hero-plant parallax-plant absolute bottom-12 right-[16%] z-30 hidden sm:block sm:bottom-14 sm:right-[10%] lg:bottom-20">
          <Image src="/waves/fern.svg" alt="fern" width={60} height={40} />
        </div>
        <div className="hero-plant parallax-plant absolute bottom-10 right-[60%] z-30 hidden sm:block sm:bottom-24 lg:bottom-46">
          <Image src="/waves/fern.svg" alt="fern" width={60} height={40} />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="relative flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-center">
            <div className="relative z-30 w-full max-w-xl space-y-1.5 text-left lg:max-w-lg lg:space-y-3">
              <p className="hero-copy text-xs font-semibold tracking-wide text-foreground lg:text-sm">
                Premium Baby Care Essentials
              </p>
              <h2 className="hero-copy mt-3 text-[1.8rem] font-semibold tracking-tight text-foreground lg:mt-4 lg:text-[2.8rem]">
                Tiny giggles,
                <span className="block font-light italic text-[#6d877f]">
                  big comfort every day.
                </span>
              </h2>

              <p className="hero-copy mt-3 max-w-md text-[0.95rem] font-medium leading-relaxed text-foreground lg:mt-4 lg:text-[1.02rem]">
                Soft, safe, and playful essentials made for crawling, napping,
                and all the joyful little moments in between.
              </p>

              <div className="hero-copy flex w-full items-center justify-start gap-3 pt-2 lg:gap-4 lg:pt-3">
                <Link href="/babyCareProduct">
                  <button className="rounded-full bg-[#45685e] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:shadow-xl lg:px-8 lg:py-3 lg:text-base">
                    Explore Baby Products
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="rounded-full px-6 py-2.5 text-sm font-medium text-[#45685e] outline outline-[#45685e] transition duration-300 hover:scale-105 lg:px-8 lg:py-3 lg:text-base">
                    Become a Distributor
                  </button>
                </Link>
              </div>

              <div className="hero-baby-mobile mt-5 flex w-full justify-start sm:hidden">
                <div className="relative aspect-square w-72">
                  <div className="hero-sun parallax-sun pointer-events-none absolute -inset-x-4 bottom-18 mb-3 z-20 h-24">
                    <div className="hero-sun-halo hero-sun-halo-mobile float-idle absolute -bottom-10 left-1/2 -translate-x-1/2">
                      <Image
                        src="/waves/solar.gif"
                        alt="sun"
                        width={92}
                        height={92}
                        className="h-auto w-20"
                      />
                    </div>
                  </div>
                  <video
                    className="hero-baby-video relative z-10 h-full w-full rounded-[1.6rem] object-cover object-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/images/baby/baby31.png"
                    src="/videos/babyPlaying.mp4"
                  ></video>
                </div>
              </div>

              <div className="hero-copy mt-3 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#45685e] sm:hidden">
                <span>Scroll Down</span>
                <span className="animate-bounce text-base leading-none">↓</span>
              </div>
            </div>

            <div className="relative z-30 hidden min-h-115 lg:block" />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-50 right-[10%] z-10 hidden lg:block">
          <div className="hero-baby-right parallax-card relative h-105 w-105 rounded-[2.6rem] p-4">
            <div className="hero-sun parallax-sun pointer-events-none absolute -inset-x-16 bottom-full mb-6 z-20 h-52">
              <div className="hero-sun-halo hero-sun-halo-desktop float-idle absolute bottom-0 left-1/2 -translate-x-1/2 ">
                <Image
                  src="/waves/solar.gif"
                  alt="sun"
                  width={120}
                  height={120}
                  className="h-auto w-28"
                />
              </div>
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-[2.2rem]">
              <video
                className="hero-baby-video h-full w-full object-cover object-top rotate-y-180"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/baby/baby31.png"
                src="/videos/babyPlaying.mp4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
