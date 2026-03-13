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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const baby = babyRef.current;
    const target = document.getElementById(targetId);
    const startTarget = startId ? document.getElementById(startId) : target;

    if (!wrapper || !baby || !target || !startTarget) return;

    const state = { progress: 0 };

    const render = (progress: number) => {
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
      const direction = movingRight ? 1 : -1;

      gsap.set(baby, { x, y, scaleX: direction });
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
          scrub: 0.35,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.set(wrapper, { autoAlpha: 1 });
          },
          onEnterBack: () => {
            gsap.set(wrapper, { autoAlpha: 1 });
          },
          onLeave: () => {
            gsap.set(wrapper, { autoAlpha: 0 });
          },
          onLeaveBack: () => {
            gsap.set(wrapper, { autoAlpha: 0 });
          },
          onUpdate: (self) => {
            render(self.progress);
          },
        },
        onUpdate: () => {
          render(state.progress);
        },
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
        className="absolute left-0 top-0 will-change-transform"
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
