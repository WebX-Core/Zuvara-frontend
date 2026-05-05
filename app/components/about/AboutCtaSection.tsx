import Link from "next/link";
import SectionIntro, {
  sectionContentSpacing,
} from "@/app/components/common-ui/SectionIntro";
import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";
import { ArrowRight } from "lucide-react";

type AboutCtaSectionProps = {
  palette: AboutPalette;
  productHref: string;
};

export default function AboutCtaSection({
  palette,
  productHref,
}: AboutCtaSectionProps) {
  return (
    <Section
      size="sm"
      className="pt-6 pb-8 md:pt-10 md:pb-12 lg:pb-40 bg-[#c3dbd7]"
    >
      <Container>
        <div
          className="relative overflow-hidden rounded-[2.4rem] px-5 py-5 md:px-6 md:py-10 md:text-center lg:py-16"
          // style={{ backgroundColor: palette.accent }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-[-8%] top-[-20%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[-18%] h-44 w-44 rounded-full bg-white/12 blur-3xl" />
          </div>

          <div className="relative z-10  md:hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] bg-white px-2 py-1 rounded-full w-fit text-baby-accent">
                  Our Promise
                </p>

                <h2 className="mt-4 text-2xl font-semibold leading-[1.02] text-baby-accent">
                  Products that help families feel calmer, safer, and cared for.
                </h2>
              </div>
            </div>

            <div className="mt-5 text-right gap-2">
              <Link
                href={productHref}
                className="inline-flex gap-1 items-center shrink-0 rounded-full bg-white px-4 py-2.5 text-sm font-semibold"
                style={{ color: palette.accent }}
              >
                Explore <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden md:block">
            <SectionIntro
              eyebrow={
                <p className="text-sm font-semibold text-white/72">
                  Our Promise
                </p>
              }
              title="We make products that help families feel calmer, safer, and more cared for."
              description="That means better materials, more thoughtful design, and a standard of everyday comfort parents can genuinely trust."
              titleClassName="text-3xl font-semibold leading-[0.98] text-white lg:text-5xl"
              descriptionClassName="max-w-3xl text-sm leading-relaxed text-white/84 md:text-lg"
            />
            <div
              className={`${sectionContentSpacing} flex flex-wrap justify-center gap-4`}
            >
              <Link
                href={productHref}
                className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold"
                style={{ color: palette.accent }}
              >
                Meet the Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border px-7 py-3 text-sm font-semibold"
                style={{
                  borderColor: "rgba(255,255,255,0.38)",
                  color: "white",
                }}
              >
                Talk to Zuvara
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
