"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BigImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center bottom",
          end: "bottom center",
          scrub: 1.2,
          markers: false,
        },
      });

      // Animate only image sliding from bottom to top
      tl.from(imageRef.current, {
        x: -window.innerHeight,
        opacity: 0,
        duration: 1,
      })
        // Animate text appearing after image animation completes
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          1, // Delay equal to image animation duration
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container w-full">
        <div
          ref={sectionRef}
          className="bg-linear-to-r from-zinc-50 to-zinc-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div
              ref={titleRef}
              className="p-8 lg:py-24 flex flex-col items-start justify-center bg-linear-to-r from-zinc-50 to-zinc-100/5 pl-36"
            >
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Premium Collection
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-3 font-poppins">
                Discover our{" "}
                <span className="text-[#8cd700] italic">complete range</span> of
                products
              </h2>
              <p className="text-zinc-700 text-sm lg:text-base leading-relaxed">
                Quality baby products designed for comfort and safety.
              </p>
            </div>

            {/* Right Side - Animated Image */}
            <div
              ref={imageRef}
              className="relative h-64 md:h-full min-h-64 hidden md:block"
            >
              <Image
                src="/categories/stroller-green.png"
                alt="Sleeping Baby"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigImage;
