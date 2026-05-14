import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import SectionIntro, { sectionContentSpacing } from "@/app/components/common-ui/SectionIntro";

const comfortPoints = [
  "Ultra-thin comfort for everyday confidence",
  "Fast-lock absorbent core",
  "Soft top layer for sensitive skin",
  "Secure fit with flexible wings",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff8fc]">
      <div className="relative mx-auto flex w-[92%] max-w-7xl flex-col justify-center py-10 sm:py-12 lg:min-h-svh lg:py-16">
        <div className="grid items-center gap-8 md:gap-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1fr_1fr_1fr] lg:gap-10 xl:gap-12">
          <div className="max-w-xl pt-2 md:pt-4 lg:self-center lg:pt-0">
            <SectionIntro
              titleAs="h1"
              className="max-w-xl"
              eyebrow={
                <p className="inline-flex items-center gap-2 rounded-full border border-personalCare/20 bg-white px-3 py-1.5 text-[11px] font-semibold text-personalCare/80">
                  <Sparkles size={12} />
                  Everyday confidence
                </p>
              }
              title={
                <>
                  Designed for{" "}
                  <span className="font-light italic text-personalCare">
                    comfort first
                  </span>
                </>
              }
              description="Zuvara personal care essentials are made for breathable comfort, secure protection, and easy everyday wear without bulk."
              titleClassName="text-4xl font-semibold leading-[0.95] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.3rem]"
              descriptionClassName="max-w-lg text-sm font-medium leading-7 text-zinc-600 sm:text-base"
            />

            <div className={`${sectionContentSpacing} flex flex-row items-center gap-3`}>
              <Link
                href="/personalCareProduct"
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-personalCare px-4 py-3 text-sm font-semibold text-white! transition-all duration-300 hover:-translate-y-0.5 hover:bg-personalCare/90 sm:flex-none sm:px-6"
              >
                Shop now
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-0 flex-1 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:bg-zinc-50 sm:flex-none sm:px-6"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-7 hidden max-w-md grid-cols-3 gap-3 text-center sm:grid">
              {[
                { label: "Absorption", value: "Absorbs 15x" },
                { label: "Comfort", value: "Thin & Soft" },
                { label: "Protection", value: "12 hour+" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-200/70 bg-white px-3 py-3">
                  <p className="text-base font-semibold text-zinc-900">{item.value}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-md sm:h-96 sm:max-w-xl lg:h-[min(72vh,41rem)] lg:max-w-lg lg:self-center">
            <div className="absolute inset-x-0 bottom-0 rounded-[2rem] bg-white/60 p-3 sm:rounded-[2.2rem] sm:p-5">
              <div className="relative h-64 sm:h-80 lg:h-[30rem]">
                <Image
                  src="/images/personalCare/happy-lady.png"
                  alt="Happy woman holding Zuvara personal care product"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 grid gap-6 lg:w-full lg:max-w-lg lg:self-center lg:justify-self-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
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

            <div className="rounded-[1.35rem] bg-personalCare/6 p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-personalCare">
                <ShieldCheck size={12} />
                Trusted daily support
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Built to stay breathable and secure through long workdays,
                travel, and overnight rest.
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
    </section>
  );
};

export default HeroSection;
