"use client";

import { useEffect, ReactNode, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized configuration
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness factor (0.1 = smooth, higher = less smooth)
      wheelMultiplier: 1, // Scroll speed multiplier
      touchMultiplier: 2, // Touch scroll speed
      infinite: false, // Infinite scrolling
      syncTouch: false, // Sync touch with scroll
      syncTouchLerp: 0.075, // Touch lerp smoothness
      duration: 1.2, // Animation duration for scroll-to
    });

    lenisRef.current = lenis;

    // Integrate Lenis with GSAP for smooth animations
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Pass time in milliseconds
    });

    // Disable default scroll behavior for smooth scroll
    gsap.ticker.lagSmoothing(0);

    // Handle scroll events
    const handleScroll = () => {
      // Scroll event handler if needed
    };

    lenis.on("scroll", handleScroll);

    // Cleanup
    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenisRef.current = null;
    };
  }, []);

  // Handle auto-scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native scroll if lenis isn't ready
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
