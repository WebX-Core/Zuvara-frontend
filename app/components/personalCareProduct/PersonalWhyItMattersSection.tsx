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
      className="immersive-section relative overflow-hidden px-6 py-14 lg:px-10 lg:py-24"
      id="touch"
    >
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority={false}
          aria-hidden="true"
          className="object-cover object-center"
        />
        {/* Responsive Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, 
              ${hexToRgba(theme.pageBg, 0.95)} 0%, 
              ${hexToRgba(theme.pageBg, 0.4)} 50%, 
              ${hexToRgba(theme.pageBg, 0.9)} 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 lg:space-y-16">
        {/* Header Section */}
        <div className="max-w-3xl">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Because Your{" "}
            <span
              className="italic font-light block sm:inline"
              style={{ color: hexToRgba(theme.accent, 0.56) }}
            >
              Comfort Matters
            </span>
          </h2>

          <p
            className="mt-4 text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: hexToRgba(theme.accent, 0.9) }}
          >
            Your day deserves protection that feels natural and steady. Our
            personal care essentials support you with comfort, dignity, and
            trust.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-20">
          {/* Cards Column */}
          <div className="space-y-4 w-full lg:w-1/2">
            {cards.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-3xl border p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
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
                      style={{ color: hexToRgba(theme.accent, 0.75) }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quote Column */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end">
             <div className="relative p-8 lg:p-0">
                {/* Decorative Quote Mark */}
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
                  Comfort you can feel. <br className="hidden md:block" />
                  Protection you can trust, <br className="hidden md:block" />
                  every hour.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}