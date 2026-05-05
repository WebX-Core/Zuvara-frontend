import Image from "next/image";
import { Star } from "lucide-react";
import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";
import SectionIntro, {
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type AboutTeamSectionProps = {
  palette: AboutPalette;
  team: TeamMember[];
};

export default function AboutTeamSection({
  palette,
  team,
}: AboutTeamSectionProps) {
  return (
    <Section
      size="md"
      className="pt-6 pb-8 md:pt-10 md:pb-12 lg:pb-40"
      style={{ backgroundColor: palette.panel }}
    >
      <Container>
        <SectionIntro
          align="center"
          className={`mx-auto max-w-3xl ${sectionIntroSpacing}`}
          eyebrow={
            <p className="text-sm font-semibold" style={{ color: palette.accentSoft }}>
              The Team
            </p>
          }
          title={
            <>
              The people shaping
              <span className="ml-2 font-light italic">
                the care behind Zuvara.
              </span>
            </>
          }
          description="A multidisciplinary team bringing together product thinking, family empathy, and a quieter, more refined standard for baby essentials."
          titleClassName="text-2xl font-semibold leading-[0.98] lg:text-5xl"
          descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
          titleStyle={{ color: palette.accent }}
          descriptionStyle={{ color: palette.body }}
        />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-[1.3rem]"
              style={{ backgroundColor: palette.chip }}
            >
              <div className="relative aspect-[0.86]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/8 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-center gap-2">
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/78">
                    Zuvara Team
                  </span>
                </div>
                <p className="mt-3 text-base font-semibold md:text-lg">
                  {member.name}
                </p>
                <p className="text-xs text-white/76 md:text-sm">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
