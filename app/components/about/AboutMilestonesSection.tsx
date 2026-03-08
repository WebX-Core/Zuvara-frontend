import type { AboutPalette } from "@/app/components/about/theme";

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
    <section className="px-5 py-8 sm:px-8 md:px-12 lg:px-16">
      <div
        className="mx-auto max-w-7xl rounded-4xl border px-5 py-6 md:px-8 md:py-8"
        style={{
          borderColor: `${palette.border}44`,
          background: `linear-gradient(135deg, ${palette.accent} 0%, ${palette.accentSoft} 100%)`,
        }}
      >
        <div className="grid gap-6 md:grid-cols-3">
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
