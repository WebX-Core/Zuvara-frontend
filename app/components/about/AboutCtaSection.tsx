import Link from "next/link";
import SectionIntro, { sectionContentSpacing } from "@/app/components/common-ui/SectionIntro";
import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";

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
      className="lg:pb-40 "
      style={{ backgroundColor: palette.panel }}
    >
      <Container>
        <div
          className="relative overflow-hidden rounded-[2.4rem] px-5 py-5 md:px-6 md:py-12 md:text-center md:py-16"
          style={{ backgroundColor: palette.accent }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-[-8%] top-[-20%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[-18%] h-44 w-44 rounded-full bg-white/12 blur-3xl" />
          </div>

          <div className="relative z-10 md:hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Our Promise
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-[1.02] text-white">
                  Products that help families feel calmer, safer, and cared for.
                </h2>
              </div>

              <Link
                href={productHref}
                className="inline-flex shrink-0 rounded-full bg-white px-4 py-2.5 text-sm font-semibold"
                style={{ color: palette.accent }}
              >
                Explore
              </Link>
            </div>

            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-white/84">
              Better materials, more thoughtful design, and everyday comfort
              parents can trust.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex rounded-full border px-4 py-2 text-sm font-semibold text-white"
                style={{ borderColor: "rgba(255,255,255,0.38)" }}
              >
                Talk to Zuvara
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden md:block">
            <SectionIntro
              eyebrow={<p className="text-sm font-semibold text-white/72">Our Promise</p>}
              title="We make products that help families feel calmer, safer, and more cared for."
              description="That means better materials, more thoughtful design, and a standard of everyday comfort parents can genuinely trust."
              titleClassName="text-3xl font-semibold leading-[0.98] text-white lg:text-5xl"
              descriptionClassName="max-w-3xl text-sm leading-relaxed text-white/84 md:text-lg"
            />
            <div className={`${sectionContentSpacing} flex flex-wrap justify-center gap-4`}>
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
                style={{ borderColor: "rgba(255,255,255,0.38)", color: "white" }}
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
