import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const comfortPoints = [
  "Ultra-thin comfort for everyday confidence",
  "Fast-lock absorbent core",
  "Soft top layer for sensitive skin",
  "Secure fit with flexible wings",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-svh overflow-hidden bg-personalCare/8">
      <div className="absolute inset-y-0 right-0 hidden w-[44%] bg-linear-to-b from-personalCare/90 via-personalCare to-personalCare/80 lg:block" />

      <div className="relative mx-auto flex min-h-svh w-[92%] max-w-7xl flex-col justify-center py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[0.95fr_0.85fr_1.05fr] lg:gap-8">
          <div className="max-w-xl pt-4 lg:self-center lg:pt-0">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold text-personalCare/70">
              <span className="size-1.5 rounded-full bg-personalCare/55" />
              Feel the confidence
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-tight text-zinc-900 sm:text-5xl lg:text-5xl">
              Comfort that stays{" "}
              <span className="italic font-thin">with you</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 font-medium text-zinc-600 sm:text-base">
              Zuvara personal care essentials are made for breathable comfort,
              secure protection, and easy everyday wear without bulk.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/personalCareProduct"
                className="inline-flex items-center gap-2 rounded-full bg-personalCare px-6 py-3 text-sm font-semibold text-white! shadow-[0_18px_35px_rgba(219,39,119,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-personalCare/90"
              >
                Shop now
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-[0_10px_28px_rgba(24,24,27,0.08)] transition-all duration-300 hover:bg-zinc-50"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-88 w-full max-w-136 sm:h-112 lg:-ml-8 lg:h-[min(72vh,40rem)] lg:max-w-lg lg:self-center xl:-ml-12">
            <Image
              src="/images/personalCare/happy-lady.png"
              alt="Happy woman holding Zuvara personal care product"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_26px_45px_rgba(67,33,120,0.26)]"
            />
          </div>

          <div className="relative z-10 grid gap-4 lg:w-full lg:max-w-lg lg:self-center lg:justify-self-end">
            {/* <div className="rounded-[1.6rem] bg-linear-to-br from-personalCare to-personalCare/80 p-6 text-white shadow-[0_24px_50px_rgba(219,39,119,0.28)]">
              <p className="text-sm font-semibold">
                Comfort that stays with you
              </p>
              <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/78">
                Designed to stay light, soft, and secure through workdays,
                travel, and long hours on the move.
              </p>

              <div className="mt-7 flex items-center justify-between rounded-full bg-white/16 px-4 py-2.5 backdrop-blur-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                    Daily comfort
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Feel fresh longer
                  </p>
                </div>
                <div className="flex h-8 w-16 items-center rounded-full bg-white/24 px-1">
                  <span className="ml-auto flex size-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-personalCare">
                    On
                  </span>
                </div>
              </div>
            </div> */}

            <div className="rounded-[1.6rem] bg-white/80 p-6 shadow-[0_24px_50px_rgba(24,24,27,0.08)] sm:p-7">
              <div className="grid gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase text-zinc-400">
                    Zuvara features
                  </p>
                  <ul className="mt-4 space-y-3">
                    {comfortPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-personalCare/12 text-personalCare">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium leading-6 text-zinc-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.35rem] bg-personalCare/5 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-personalCare shadow-sm">
                    <Sparkles size={12} />
                    Why women choose it
                  </div>

                  {/* <h2 className="mt-4 text-xl font-semibold text-zinc-900">
                    Gentle support for busy days
                  </h2> */}
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Built for confidence, with a breathable feel and dependable
                    protection .
                  </p>

                  <div className="mt-5 rounded-[1.2rem] border border-personalCare/12 bg-white px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase text-zinc-400">
                      Best for
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Workdays", "Travel", "Overnight"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full bg-personalCare/10 px-3 py-1.5 text-xs font-semibold text-personalCare"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
