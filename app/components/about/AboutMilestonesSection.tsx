import type { AboutPalette } from "@/app/components/about/theme";
import PremiumWaveBackground from "@/app/components/common-ui/PremiumWaveBackground";

type Milestone = {
  value: string;
  label: string;
};

type AboutMilestonesSectionProps = {
  palette: AboutPalette;
  milestones: Milestone[];
};

export default function AboutMilestonesSection({
  palette,
  milestones,
}: AboutMilestonesSectionProps) {
  return (
    <section className="px-5 py-8 sm:px-8 md:px-12 lg:px-16 ">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border px-5 py-6 md:px-8 md:py-8"
        style={{
          borderColor: `${palette.border}44`,
          background: `linear-gradient(135deg, ${palette.accent} 0%, ${palette.accentSoft} 100%)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-[-8%] top-[-20%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-18%] h-44 w-44 rounded-full bg-white/12 blur-3xl" />
          <PremiumWaveBackground opacity={0.6} />
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-3">
          {milestones.map((item) => (
            <div key={item.label} className="text-white text-center">
              <p className="text-4xl font-semibold md:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80 font-medium md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
