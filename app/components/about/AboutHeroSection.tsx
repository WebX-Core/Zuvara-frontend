import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";
import SectionIntro, {
  sectionContentSpacing,
} from "@/app/components/common-ui/SectionIntro";

type AboutHeroSectionProps = {
  palette: AboutPalette;
  heroImage: string;
  productHref: string;
};

const heroNotes = [
  {
    title: "Our Focus",
    body: "Comfort that earns trust.",
  },
  {
    title: "Our Promise",
    body: "Safer routines, softer moments.",
  },
];

export default function AboutHeroSection({
  palette,
  heroImage,
  productHref,
}: AboutHeroSectionProps) {
  return (
    <Section className="relative" style={{ backgroundColor: palette.panel }}>
      <Container>
        <div className="relative overflow-hidden   md:px-10  lg:px-14">
          <div className="relative z-10 mx-auto  max-w-3xl text-center">
            <SectionIntro
              align="center"
              titleAs="h1"
              title={
                <>
                  Gentle beginnings,
                  <span
                    className="ml-3 font-light italic "
                    style={{ color: palette.accentSoft }}
                  >
                    <br />
                    designed with intention.
                  </span>
                </>
              }
              description="We create baby essentials that blend comfort, safety, and a calmer visual world for modern families. Every detail is meant to feel reassuring from first use to everyday routine."
              titleClassName="text-2xl font-semibold leading-none tracking-tight lg:text-5xl"
              descriptionClassName="text-base font-medium leading-relaxed md:text-lg"
              titleStyle={{ color: palette.accent }}
              descriptionStyle={{ color: palette.body }}
            />

            <div
              className={`${sectionContentSpacing} flex  justify-center gap-4`}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border px-4  py-3 text-sm font-semibold"
                style={{
                  borderColor: `${palette.border}66`,
                  color: palette.accent,
                  backgroundColor: "rgba(255,255,255,0.56)",
                }}
              >
                Contact Zuvara
              </Link>
              <Link
                href={productHref}
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
                style={{ backgroundColor: palette.accent, color: "#ffffff" }}
              >
                Explore Products
                <Sparkles size={16} />
              </Link>
            </div>

            <div className="relative mx-auto mt-12 max-w-6xl">
              <div
                className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl md:h-80 md:w-80"
                style={{ backgroundColor: `${palette.chip}f2` }}
              />

              <div className="grid items-center gap-4 lg:grid-cols-4">
                <div className="hidden lg:block">
                  <InfoCard palette={palette} note={heroNotes[0]} />
                </div>

                <div className="lg:col-span-2">
                  <div
                    className="relative overflow-hidden rounded-4xl border"
                    style={{
                      minHeight: "30rem",
                      borderColor: `${palette.border}44`,
                      background: `linear-gradient(180deg, rgba(255,255,255,0.82) 0%, ${palette.panel}eb 100%)`,
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-8 bottom-2 h-16 rounded-full blur-2xl"
                      style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                    />
                    <Image
                      src={heroImage}
                      alt="Mother holding baby"
                      fill
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="grid gap-4">
                    <InfoCard palette={palette} note={heroNotes[1]} />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:hidden">
                {heroNotes.map((note) => (
                  <InfoCard key={note.title} palette={palette} note={note} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InfoCard({
  palette,
  note,
}: {
  palette: AboutPalette;
  note: { title: string; body: string };
}) {
  return (
    <div
      className="rounded-3xl border p-5 text-left"
      style={{
        borderColor: `${palette.border}44`,
        backgroundColor: "rgba(255,255,255,0.74)",
      }}
    >
      <p
        className="text-sm font-semibold "
        style={{ color: palette.accentSoft }}
      >
        {note.title}
      </p>
      <p
        className="mt-3 text-sm font-semibold"
        style={{ color: palette.accent }}
      >
        {note.body}
      </p>
    </div>
  );
}
