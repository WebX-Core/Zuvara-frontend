"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollCrawlingBabyProps = {
  targetId: string;
  startId?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function ScrollCrawlingBaby({
  targetId,
  startId,
}: ScrollCrawlingBabyProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const babyRef = useRef<HTMLDivElement | null>(null);
  const scrollDirRef = useRef<1 | -1>(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const baby = babyRef.current;
    const target = document.getElementById(targetId);
    const startTarget = startId ? document.getElementById(startId) : target;

    if (!wrapper || !baby || !target || !startTarget) return;

    // FIX 3: quickSetters — much faster than gsap.set, no object allocation per frame
    const setX = gsap.quickSetter(baby, "x", "px");
    const setY = gsap.quickSetter(baby, "y", "px");
    const setScaleX = gsap.quickSetter(baby, "scaleX");

    const state = { progress: 0 };

    const render = (progress: number, dir: 1 | -1 = scrollDirRef.current) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const babyWidth = baby.offsetWidth || 140;
      const babyHeight = baby.offsetHeight || 100;
      const verticalStart = viewportHeight * 0.18;
      const verticalEnd = viewportHeight - babyHeight - 24;
      const offscreenLeft = -babyWidth;
      const offscreenRight = viewportWidth;
      const travelWidth = Math.max(offscreenRight - offscreenLeft, 1);
      const usableHeight = Math.max(verticalEnd - verticalStart, 1);
      const legs = 5;
      const rawPhase = progress * legs;
      const currentLeg = Math.min(Math.floor(rawPhase), legs - 1);
      const legProgress = rawPhase - currentLeg;
      const movingRight = currentLeg % 2 === 0;

      const x = clamp(
        movingRight
          ? offscreenLeft + legProgress * travelWidth
          : offscreenRight - legProgress * travelWidth,
        offscreenLeft,
        offscreenRight,
      );
      const y = clamp(
        verticalStart + progress * usableHeight,
        verticalStart,
        verticalEnd,
      );

      const baseDirection = movingRight ? 1 : -1;
      const facingDirection = baseDirection * dir;

      // FIX 3+4: use quickSetters, no ease (ease is a no-op on set anyway)
      setX(x);
      setY(y);
      setScaleX(facingDirection);
    };

    const ctx = gsap.context(() => {
      gsap.set(wrapper, { autoAlpha: 0 });
      render(0);

      gsap.to(state, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: startTarget,
          endTrigger: target,
          start: "top top",
          end: "bottom bottom",
          scrub: true, // FIX 1: true = perfect 1:1 scroll sync, no chasing jitter
          invalidateOnRefresh: true,
          onEnter: () => gsap.set(wrapper, { autoAlpha: 1 }),
          onEnterBack: () => gsap.set(wrapper, { autoAlpha: 1 }),
          onLeave: () => gsap.set(wrapper, { autoAlpha: 0 }),
          onLeaveBack: () => gsap.set(wrapper, { autoAlpha: 0 }),
          onUpdate: (self) => {
            const dir = self.direction as 1 | -1;
            scrollDirRef.current = dir;
            render(self.progress, dir);
          },
        },
        // FIX 2: removed duplicate onUpdate — ScrollTrigger's onUpdate already calls render
      });
    }, wrapper);

    const handleRefresh = () => render(state.progress);
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    return () => {
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      ctx.revert();
    };
  }, [startId, targetId]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      <div
        ref={babyRef}
        className="absolute left-0 top-0 will-change-transform transform-3d perspective-[1000px]"
        aria-hidden="true"
      >
        <Image
          src="/videos/crawling.gif"
          alt=""
          width={220}
          height={160}
          className="h-20 w-auto object-contain sm:h-28 lg:h-48"
          unoptimized
        />
      </div>
    </div>
  );
}