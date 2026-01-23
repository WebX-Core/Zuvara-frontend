"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftRight = () => {
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    if (!leftImageRef.current || !rightImageRef.current) return;

    // Set initial positions
    gsap.set(leftImageRef.current, { x: "-100vw" });
    gsap.set(rightImageRef.current, { x: "100vw" });

    // Animate left image moving from left screen edge to middle on scroll
    gsap.to(leftImageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center bottom",
        end: "bottom center",
        scrub: 1.2,
        markers: false,
      },
      x: 0,
      ease: "power2.out",
    });

    // Animate right image moving from right screen edge to middle on scroll
    gsap.to(rightImageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center bottom",
        end: "bottom center",
        scrub: 1.2,
        markers: false,
      },
      x: 0,
      ease: "power2.out",
    });

    // Pin the container
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "bottom center",
        pin: true,
        markers: false,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-8 overflow-hidden hidden lg:block"
    >
      <div className="w-full mx-auto">
        <div className="flex items-center justify-center h-[90vh] gap-0 relative">
          {/* Left Image - starts from screen left corner */}
          <div
            ref={leftImageRef}
            className="w-1/2 shrink-0  flex items-center justify-end"
          >
            <Image
              src="/images/baby/l-baby.png"
              alt="Left Section"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Image - starts from screen right corner */}
          <div
            ref={rightImageRef}
            className="w-1/2 shrink-0  flex items-center justify-start"
          >
            <Image
              src="/images/baby/r-baby.png"
              alt="Right Section"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftRight;
