import Link from "next/link";
import type { AboutPalette } from "@/app/components/about/theme";

type AboutCtaSectionProps = {
  palette: AboutPalette;
};

export default function AboutCtaSection({ palette }: AboutCtaSectionProps) {
  return (
    <section className="px-4 pb-20 pt-8 sm:px-8 md:px-12 lg:px-16">
      <div
        className="mx-auto max-w-7xl rounded-[2.4rem] border px-6 py-12 text-center md:px-10 md:py-16"
        style={{
          borderColor: `${palette.border}44`,
          background: `linear-gradient(135deg, ${palette.accent} 0%, ${palette.accentSoft} 100%)`,
        }}
      >
        <p className="text-sm font-semibold text-white/72">Our Promise</p>
        <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-[0.98] text-white">
          We make products that help families feel calmer, safer, and more cared
          for.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/84 md:text-lg">
          That means better materials, more thoughtful design, and a standard of
          everyday comfort parents can genuinely trust.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/babyCareProduct"
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
    </section>
  );
}
