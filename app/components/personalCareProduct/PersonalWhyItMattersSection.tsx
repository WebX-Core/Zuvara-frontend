import Image from "next/image";
import { CloudMoon, Heart, ShieldCheck } from "lucide-react";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalWhyItMattersSectionProps = {
  theme: ThemePreset;
  backgroundImage: string;
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function PersonalWhyItMattersSection({
  theme,
  backgroundImage,
}: PersonalWhyItMattersSectionProps) {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Quiet Confidence",
      body: "Dermatologically tested comfort that feels gentle when your skin is most sensitive.",
    },
    {
      icon: CloudMoon,
      title: "Uninterrupted Rest",
      body: "Reliable overnight protection so you can sleep deeply and wake up without worry.",
    },
    {
      icon: Heart,
      title: "Designed For You",
      body: "Thoughtful fit and softness that respects your routine, your pace, and your body.",
    },
  ];

  return (
    <section
      className="immersive-section relative overflow-hidden px-6 py-14 lg:px-0 lg:py-16"
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
            background: `linear-gradient(105deg, ${hexToRgba(theme.pageBg, 0.9)} 0%, ${hexToRgba(theme.pageBg, 0)} 95%, ${hexToRgba(theme.pageBg, 0.88)} 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 perspective-1300px">
        <div className="max-w-3xl fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Because Your
            <span
              className="italic font-light"
              style={{ color: hexToRgba(theme.accent, 0.56) }}
            >
              Comfort Matters
            </span>
          </h2>

          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: hexToRgba(theme.accent, 1) }}
          >
            Your day deserves protection that feels natural and steady. Our
            personal care essentials support you with comfort, dignity, and
            trust.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="space-y-3 w-1/2">
            {cards.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="fx-rise fx-float rounded-3xl border p-4 md:p-5 transition-transform duration-500 hover:-translate-y-1"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.8),
                  boxShadow: `0 18px 40px ${hexToRgba(theme.accent, 0.12)}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: theme.chipBg,
                      color: theme.accent,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: theme.accent }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: hexToRgba(theme.accent, 0.72) }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className=" w-1/2 relative overflow-hidden">
            <div className="absolute  w-1/2 right-4 bottom-4">
              <p
                className="text-sm font-medium md:text-xl"
                style={{ color: theme.accent }}
              >
                &quot;Comfort you can feel. Protection you can trust, every
                hour.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
