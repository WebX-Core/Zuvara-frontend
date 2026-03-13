import Image from "next/image";
import { CloudMoon, Heart, ShieldCheck } from "lucide-react";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type WhyTouchMattersSectionProps = {
  theme: ThemePreset;
  backgroundImage: string;
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function WhyTouchMattersSection({
  theme,
  backgroundImage,
}: WhyTouchMattersSectionProps) {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Purest Safety",
      body: "Dermatologically tested and toxin-free. Because their skin is 3x thinner than yours, it deserves 10x the care.",
    },
    {
      icon: CloudMoon,
      title: "Uninterrupted Dreams",
      body: "Protection that lasts through every nap. When they sleep better, you sleep better.",
    },
    {
      icon: Heart,
      title: "The Parent's Choice",
      body: "Feel proud of every care choice. You are giving them the best start, one dry night at a time.",
    },
  ];

  return (
    <section
      className="immersive-section relative overflow-hidden px-6 py-14 lg:px-10 lg:py-24"
      id="touch"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority={false}
          aria-hidden="true"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${hexToRgba(theme.pageBg, 0.95)} 0%, ${hexToRgba(theme.pageBg, 0.4)} 50%, ${hexToRgba(theme.pageBg, 0.9)} 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 lg:space-y-16">
        <div className="max-w-3xl fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Because Every
            <span
              className="italic font-light block sm:inline"
              style={{ color: hexToRgba(theme.accent, 0.56) }}
            >
              Touch Matters
            </span>
          </h2>

          <p
            className="mt-4 text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            We understand that your world revolves around theirs. Our diapers
            are more than protection, they are a soft embrace.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-20">
          <div className="space-y-4 w-full lg:w-1/2">
            {cards.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="fx-rise fx-float rounded-3xl border p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  borderColor: `${theme.border}44`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.7),
                  backdropFilter: "blur(8px)",
                  boxShadow: `0 12px 30px ${hexToRgba(theme.accent, 0.08)}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm"
                    style={{
                      backgroundColor: theme.chipBg,
                      color: theme.accent,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: theme.accent }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-1.5 text-sm md:text-base leading-relaxed"
                      style={{ color: hexToRgba(theme.accent, 0.72) }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end">
            <div className="relative p-8 lg:p-0">
              <span
                className="absolute -top-4 -left-2 text-6xl opacity-20 font-serif"
                style={{ color: theme.accent }}
              >
                &ldquo;
              </span>
              <p
                className="text-xl md:text-3xl lg:text-4xl font-medium italic leading-tight text-center lg:text-right"
                style={{ color: theme.accent }}
              >
                Softness they feel. <br className="hidden md:block" />
                Protection you trust, <br className="hidden md:block" />
                through every nap and night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
