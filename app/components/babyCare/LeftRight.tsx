"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftRight = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftEl = leftImageRef.current;
    const rightEl = rightImageRef.current;
    const container = containerRef.current;

    if (!leftEl || !rightEl || !container) return;

    // ⭐ Start overlapping (center position)
    gsap.set(leftEl, { x: "0%" });
    gsap.set(rightEl, { x: "0%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1200",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(leftEl, {
      x: "-100%",
      ease: "power2.out",
    }).to(
      rightEl,
      {
        x: "100%",
        ease: "power2.out",
      },
      "<",
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-8 overflow-hidden hidden lg:block"
    >
      <div className="flex items-center justify-center h-[90vh] relative">
        <div
          ref={leftImageRef}
          className="w-1/2 flex justify-end items-center"
        >
          <Image
            src="/images/baby/leftSideBabies.jpeg"
            alt="Left Section"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>

        <div
          ref={rightImageRef}
          className="w-1/2 flex justify-start items-center"
        >
          <Image
            src="/images/baby/rightSideBabies.jpeg"
            alt="Right Section"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftRight;