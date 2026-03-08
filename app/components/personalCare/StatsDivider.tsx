import Image from "next/image";

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
  return (
    <section className="relative overflow-hidden bg-personalCare/6 py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-personalCare/20 to-transparent" />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-personalCare/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
            Everyday performance
          </span>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-tight text-personalCare">
            Protection details that feel
            <span className="ml-2 italic font-light text-personalCare/70">
              calm, light, and reliable.
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Designed to keep comfort and confidence balanced across long days,
            active movement, and everyday wear.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {statsLists.map((list) => (
            <article
              key={list.id}
              className="group rounded-[1.8rem] border border-personalCare/12 bg-white/90 p-6 shadow-[0_20px_48px_rgba(24,24,27,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsDivider;
