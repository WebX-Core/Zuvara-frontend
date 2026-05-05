import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";
import SectionIntro, {
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";

type StoryItem = {
  title: string;
  body: string;
};

type AboutStorySectionProps = {
  palette: AboutPalette;
  stories: StoryItem[];
};

export default function AboutStorySection({
  palette,
  stories,
}: AboutStorySectionProps) {
  return (
    <Section size="md" className="pt-6 pb-8 md:pt-10 md:pb-12">
      <Container className="flex flex-col justify-center lg:items-center">
        <SectionIntro
          align="center"
          className={`max-w-3xl ${sectionIntroSpacing}`}
          eyebrow={
            <p className="text-sm font-semibold" style={{ color: palette.accentSoft }}>
              Our Story
            </p>
          }
          title={
            <>
              Born from real family questions,
              <span className="ml-2 font-light italic">
                refined into thoughtful care.
              </span>
            </>
          }
          description="Our real experience begin through questining the real problem from real parent."
          titleClassName="text-2xl font-semibold leading-[0.98] lg:text-5xl"
          descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
          titleStyle={{ color: palette.accent }}
          descriptionStyle={{ color: palette.body }}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {stories.map((story) => (
            <div
              key={story.title}
              className="rounded-[1.6rem] border p-5 md:p-6"
              style={{
                borderColor: `${palette.border}44`,
                backgroundColor: "rgba(255,255,255,0.82)",
                boxShadow: "0 14px 30px rgba(69,104,94,0.06)",
              }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: palette.accent }}
              >
                {story.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed font-medium md:text-base"
                style={{ color: palette.body }}
              >
                {story.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
