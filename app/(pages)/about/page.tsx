"use client";

import { HeartHandshake, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import AboutHeroSection from "@/app/components/about/AboutHeroSection";
import AboutStorySection from "@/app/components/about/AboutStorySection";
import AboutMilestonesSection from "@/app/components/about/AboutMilestonesSection";
import AboutPromisesSection from "@/app/components/about/AboutPromisesSection";
import AboutTeamSection from "@/app/components/about/AboutTeamSection";
import AboutCtaSection from "@/app/components/about/AboutCtaSection";
import { aboutPalette } from "@/app/components/about/theme";
import { colors } from "@/lib/tokens";
import { useSection } from "@/app/providers/SectionProvider";
import { assetWithFill, wave3Svg, wave4Svg } from "@/constants/svgs";

const stories = [
  {
    title: "Why we began",
    body: "We started with a simple belief: baby care should feel reassuring, well-made, and genuinely gentle, not clinical, harsh, or overcomplicated.",
  },
  {
    title: "How we build",
    body: "We listen closely to parents, study everyday routines, and shape products around comfort, fit, softness, and practical reliability.",
  },
  {
    title: "What matters most",
    body: "From absorbency and skin feel to packaging and daily usability, every choice is made to reduce friction for both babies and parents.",
  },
  {
    title: "What we stand for",
    body: "Zuvara is guided by calm design, trustworthy performance, and a standard of care that families can return to with confidence.",
  },
];

const milestones = [
  { value: "10+", label: "Years refining family care essentials" },
  { value: "100k+", label: "Parents reached through trusted products" },
  { value: "24/7", label: "Commitment to comfort-first thinking" },
];

const promises = [
  {
    title: "Absolute Safety",
    desc: "Materials and finishes selected to feel soft, secure, and reliable for delicate daily care.",
    icon: ShieldCheck,
  },
  {
    title: "Pure Comfort",
    desc: "Every layer is designed to reduce irritation and support easier, calmer routines.",
    icon: Leaf,
  },
  {
    title: "Parent Focused",
    desc: "We design around real routines, real concerns, and the practical moments families live every day.",
    icon: HeartHandshake,
  },
  {
    title: "Quiet Excellence",
    desc: "Thoughtful details, refined design, and dependable performance without excess noise.",
    icon: Sparkles,
  },
];

const team = [
  {
    name: "Abhilash Bansal",
    role: "Director",
    image: "/partners/About/abhilash-bansal-director.avif",
  },
  {
    name: "Nikhil Bansal",
    role: "Managing Director",
    image: "/partners/About/nikhil-bansal.avif",
  },
  {
    name: "Shasank Bansal",
    role: "Director",
    image: "/partners/About/shasank-bansal-director.avif",
  },
];

export default function AboutPage() {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const pagePalette = isPersonal
    ? {
        ...aboutPalette,
        accent:     colors.personal.accent,
        accentSoft: colors.personal.accentMid,
        border:     colors.personal.border,
        chip:       colors.personal.chip,
        panel:      colors.personal.panel,
        page:       colors.personal.page,
        ink:        "#2d1d3a",
        body:       "#6d5b79",
      }
    : aboutPalette;
  const heroImage = isPersonal
    ? "/images/baby/bonding-personal.png"
    : "/new/bonding.png";
  const productHref = isPersonal ? "/personalCareProduct" : "/babyCareProduct";

  const babyAlternatingBg = {
    hero: colors.baby.chip,
    story: "#ffffff",
    milestones: "#ffffff",
    promises: "#ffffff",
    team: colors.baby.chip,
    cta: "rgba(69,104,94,0.12)",
    footer: "#ffffff",
  };

  const sectionBg = isPersonal
    ? {
        hero: pagePalette.page,
        story: pagePalette.page,
        milestones: pagePalette.page,
        promises: pagePalette.page,
        team: pagePalette.page,
        cta: pagePalette.page,
        footer: "#f4e8fc",
      }
    : babyAlternatingBg;

  const heroWave = assetWithFill(wave3Svg, sectionBg.story);
  const teamWave = assetWithFill(wave3Svg, isPersonal ? "#FAF5FF" :"#C5DBD7" );
  const footerBg = sectionBg.footer;
  const ctaWave = assetWithFill(wave4Svg, footerBg);
  const waveClass =
    "pointer-events-none absolute -bottom-2 left-1/2 z-20 w-screen -translate-x-1/2 overflow-hidden leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen";

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: sectionBg.hero, color: pagePalette.ink }}
    >
      <div className="relative" style={{ backgroundColor: sectionBg.hero }}>
        <AboutHeroSection
          palette={pagePalette}
          heroImage={heroImage}
          productHref={productHref}
        />
        <div
          className={waveClass}
          dangerouslySetInnerHTML={{ __html: heroWave.markup }}
        />
      </div>
      <div className="relative" style={{ backgroundColor: sectionBg.story }}>
        <AboutStorySection palette={pagePalette} stories={stories} />
      </div>
      <div
        className="relative"
        style={{ backgroundColor: sectionBg.milestones }}
      >
        <AboutMilestonesSection palette={pagePalette} milestones={milestones} />
      </div>
      <div className="relative" style={{ backgroundColor: sectionBg.promises }}>
        <AboutPromisesSection palette={pagePalette} promises={promises} isPersonal={isPersonal}/>
      
      </div>
      <div className="relative" style={{ backgroundColor: sectionBg.team }}>
        <AboutTeamSection palette={pagePalette} team={team}  />
        <div
          className={waveClass}
          dangerouslySetInnerHTML={{ __html: teamWave.markup }}
        />
      </div>
      <div className="relative " style={{ backgroundColor: sectionBg.cta }}>
        <AboutCtaSection palette={pagePalette} productHref={productHref} />
        <div
          className={waveClass}
          dangerouslySetInnerHTML={{ __html: ctaWave.markup }}
        />
      </div>
    </main>
  );
}
