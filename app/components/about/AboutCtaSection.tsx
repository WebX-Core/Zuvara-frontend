import Link from "next/link";
import type { AboutPalette } from "@/app/components/about/theme";

type AboutCtaSectionProps = {
  palette: AboutPalette;
  productHref: string;
};

export default function AboutCtaSection({
  palette,
  productHref,
}: AboutCtaSectionProps) {
  return (
    <section
      className="pb-20 lg:pb-40"
      style={{ backgroundColor: palette.panel }}
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] px-6 py-12 text-center md:py-16"
        style={{ backgroundColor: palette.accent }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-[-8%] top-[-20%] h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-18%] h-44 w-44 rounded-full bg-white/12 blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-sm font-semibold text-white/72">Our Promise</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[0.98] text-white lg:text-5xl">
            We make products that help families feel calmer, safer, and more
            cared for.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/84 md:text-lg">
            That means better materials, more thoughtful design, and a standard
            of everyday comfort parents can genuinely trust.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    </section>
  );
}
