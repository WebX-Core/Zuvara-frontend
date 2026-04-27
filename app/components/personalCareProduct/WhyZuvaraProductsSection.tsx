import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import type { PersonalCareListingTheme } from "@/app/components/personalCareProduct/theme";

type WhyZuvaraProductsSectionProps = {
  theme: PersonalCareListingTheme;
};

const reasons = [
  {
    title: "Comfort-first design",
    body: "Light, soft, and easy to wear all day.",
    icon: HeartHandshake,
  },
  {
    title: "Reliable protection",
    body: "Dependable protection for everyday use.",
    icon: ShieldCheck,
  },
  {
    title: "Thoughtful everyday care",
    body: "Balanced comfort without extra bulk.",
    icon: Sparkles,
  },
];

export default function WhyZuvaraProductsSection({
  theme,
}: WhyZuvaraProductsSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 py-8 md:px-0 md:py-20 bg-personalCare/10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.92),
              color: theme.accent,
            }}
          >
            Why Zuvara Products
          </span>
          <h2
            className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-tight"
            style={{ color: theme.accent }}
          >
            Personal care that feels
            <span
              className="ml-2 italic font-light"
              style={{ color: theme.accentSoft }}
            >
              discreet and dependable.
            </span>
          </h2>
          <p
            className="mt-4 text-sm font-medium leading-relaxed md:text-base"
            style={{ color: hexToRgba(theme.accent, 0.76) }}
          >
            Zuvara products are designed around the details that matter most:
            comfort on sensitive days, dependable protection, and ease you can
            carry into normal life.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.6rem] border p-3 flex gap-4 items-center "
              style={{
                borderColor: `${theme.border}55`,
                backgroundColor: hexToRgba(theme.pageBg, 0.98),
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: hexToRgba(theme.chipBg, 0.9),
                  color: theme.accent,
                }}
              >
                <Icon size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className=" text-lg font-semibold"
                  style={{ color: theme.accent }}
                >
                  {title}
                </h3>
                <p
                  className=" text-sm leading-relaxed md:text-base"
                  style={{ color: hexToRgba(theme.accent, 0.72) }}
                >
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
