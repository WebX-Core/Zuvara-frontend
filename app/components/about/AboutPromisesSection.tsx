import type { LucideIcon } from "lucide-react";
import type { AboutPalette } from "@/app/components/about/theme";
import { assetWithFill, wave4Svg } from "@/constants/svgs";
import { Section, Container } from "@/app/components/layout";
import SectionIntro, { sectionContentSpacing } from "@/app/components/common-ui/SectionIntro";

type PromiseItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type AboutPromisesSectionProps = {
  palette: AboutPalette;
  promises: PromiseItem[];
  isPersonal:boolean;
};

export default function AboutPromisesSection({
  palette,
  promises,
  isPersonal
}: AboutPromisesSectionProps) {
  const promisesWave = assetWithFill(wave4Svg, isPersonal ?"#FAF5FF":"#D7EBE8");

  return (
    <Section size="md" className="relative lg:pb-40">
        <div
          className="pointer-events-none absolute -bottom-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
          dangerouslySetInnerHTML={{ __html: promisesWave.markup }}
        />
      <Container>
        <SectionIntro
          align="center"
          className="mx-auto max-w-3xl"
          eyebrow={
            <p className="text-sm font-semibold" style={{ color: palette.accentSoft }}>
              Our Promises
            </p>
          }
          title={
            <>
              The standards behind{" "}
              <span className="ml-2 font-light italic">
                every Zuvara product.
              </span>
            </>
          }
          description="From the softness to purity, we care for your baby."
          titleClassName="text-2xl font-semibold leading-[0.98] lg:text-5xl"
          descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
          titleStyle={{ color: palette.accent }}
        />

        <div className={`${sectionContentSpacing} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
          {promises.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[1.8rem] border p-6"
              style={{
                borderColor: `${palette.border}44`,
                backgroundColor: "rgba(255,255,255,0.84)",
                boxShadow: "0 16px 34px rgba(69,104,94,0.07)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: palette.accent,
                  color: "#ffffff",
                }}
              >
                <Icon size={20} />
              </div>
              <h3
                className="mt-5 text-xl font-semibold"
                style={{ color: palette.ink }}
              >
                {title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed md:text-base"
                style={{ color: palette.body }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
