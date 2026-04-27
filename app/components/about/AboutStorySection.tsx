import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";

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
    <Section size="md">
      <Container className="flex flex-col justify-center lg:items-center">
        <div className="text-center max-w-3xl pb-8 lg:pb-16">
          <p
            className="text-sm font-semibold"
            style={{ color: palette.accentSoft }}
          >
            Our Story
          </p>
          <h2
            className="mt-4 text-2xl lg:text-5xl font-semibold leading-[0.98]"
            style={{ color: palette.accent }}
          >
            Born from real family questions,
            <span className="ml-2 font-light italic">
              refined into thoughtful care.
            </span>
          </h2>

          <p
            className="mt-4 text-sm leading-relaxed font-medium md:text-base"
            style={{ color: palette.body }}
          >
            Our real experience begin through questining the real problem from
            real parent.
          </p>
        </div>

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
