"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { assetWithFill, wave4Svg } from "@/constants/svgs";

export default function FooterPreWave() {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const wave = assetWithFill(wave4Svg, isPersonal ? "#f4e8fc" : "#ffffff");

  return (
    <div
      className="pointer-events-none absolute -top-1 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen"
      dangerouslySetInnerHTML={{ __html: wave.markup }}
    />
  );
}
