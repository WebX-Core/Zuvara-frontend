"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const BigImage = () => {
  // const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const start = isSmallerDevice ? "top bottom" : "center bottom";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          // start: "center bottom",
          // start: "top bottom",
          start,
          end: "bottom center",
          scrub: 1.2,
          // markers: true,
        },
      });

      // Animate only image sliding from bottom to top
      // tl.from(imageRef.current, {
      //   x: -window.innerHeight,
      //   opacity: 0,
      //   duration: 1,
      // })
      // Animate text appearing after image animation completes
      tl.from(
        titleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1,
        },
        // 1, // Delay equal to image animation duration
        "<",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="curvy-border-mob lg:curvy-border h-[60vh] lg:h-[90vh] bg-[#cadaa9] flex items-center">
      <div className="container w-full">
        <div ref={sectionRef} className="overflow-hidden">
          {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-12 items-center"> */}
          <div className="flex items-center">
            {/* Left Side - Text Content */}
            <div
              ref={titleRef}
              className="w-2/3 lg:w-1/2 pl-8 py-8 lg:py-24 flex flex-col items-start justify-center lg:pl-36"
            >
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Premium Collection
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-3 font-poppins leading-[0.9] lg:leading-none">
                Discover our{" "}
                <span className="text-[#8cd700] italic">complete range</span> of
                products
              </h2>
              <p className="hidden lg:block text-zinc-700 text-sm lg:text-base leading-relaxed">
                Quality baby products designed for comfort and safety.
              </p>
            </div>

            {/* Right Side - Animated Image */}
            <div
              // ref={imageRef}
              className="w-1/3 lg:w-1/2 relative h-64 md:h-full min-h-64"
            >
              <Image
                src="/baby/baby-with-product.png"
                alt="Sleeping Baby"
                fill
                className="object-contain object-center pr-8"
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
