"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type Section = "baby" | "personal" | "none";

interface SectionContextType {
  activeSection: Section;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const getSectionFromPath = (path: string): Section => {
    if (path.includes("babyCare") || path.includes("clothing")) return "baby";
    if (path.includes("personalCare")) return "personal";
    if (path === "/") return "none";
    return "none";
  };

  const [activeSection, setActiveSection] = useState<Section>(() =>
    getSectionFromPath(pathname),
  );

  useEffect(() => {
    const currentSection = getSectionFromPath(pathname);
    if (currentSection !== "none") {
      setActiveSection(currentSection);
      document.cookie = `zuvara-section=${currentSection}; path=/; max-age=31536000`;
    } else if (pathname === "/") {
      setActiveSection("none");
      document.cookie = "zuvara-section=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    } else {
      // Rehydrate from cookies for neutral pages
      const cookies = document.cookie.split("; ");
      const sectionCookie = cookies.find((c) => c.startsWith("zuvara-section="));
      if (sectionCookie) {
        const saved = sectionCookie.split("=")[1] as Section;
        if (saved) setActiveSection(saved);
      }
    }
  }, [pathname]);

  return (
    <SectionContext.Provider value={{ activeSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
