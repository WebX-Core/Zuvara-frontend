"use client";

import { HeartHandshake, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import AboutHeroSection from "@/app/components/about/AboutHeroSection";
import AboutStorySection from "@/app/components/about/AboutStorySection";
import AboutMilestonesSection from "@/app/components/about/AboutMilestonesSection";
import AboutPromisesSection from "@/app/components/about/AboutPromisesSection";
import AboutTeamSection from "@/app/components/about/AboutTeamSection";
import AboutCtaSection from "@/app/components/about/AboutCtaSection";
import { aboutPalette } from "@/app/components/about/theme";
import { useSection } from "@/app/providers/SectionProvider";

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
        accent: "#8200db",
        accentSoft: "#9352bf",
        border: "#be8fe2",
        chip: "#eeddfb",
        panel: "#f7efff",
        page: "#fcf8ff",
        ink: "#2d1d3a",
        body: "#6d5b79",
      }
    : aboutPalette;

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: pagePalette.page, color: pagePalette.ink }}
    >
      <AboutHeroSection palette={pagePalette} />
      <AboutStorySection palette={pagePalette} stories={stories} />
      <AboutMilestonesSection palette={pagePalette} milestones={milestones} />
      <AboutPromisesSection palette={pagePalette} promises={promises} />
      <AboutTeamSection palette={pagePalette} team={team} />
      <AboutCtaSection palette={pagePalette} />
    </main>
  );
}
