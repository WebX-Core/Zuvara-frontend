"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageGridSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    {
      image: "/images/baby/baby17.png",
      top: "15%",
      left: "22%",
      rotate: "-7deg",
    },
    // {
    //   image: "/images/baby/baby13.png",
    //   top: "6%",
    //   left: "45%",
    //   rotate: "5deg",
    // },

    {
      image: "/images/baby/baby25.png",
      top: "23%",
      left: "5%",
      rotate: "6deg",
    },
    {
      image: "/images/baby/baby23.png",
      top: "25%",
      left: "45%",
      rotate: "-4deg",
    },
    // {
    //   image: "/images/baby/baby3.png",
    //   top: "34%",
    //   left: "65%",
    //   rotate: "3deg",
    // },
    {
      image: "/images/baby/baby24.png",
      top: "40%",
      left: "10%",
      rotate: "5deg",
    },
    {
      image: "/images/baby/baby19.png",
      top: "40%",
      left: "35%",
      rotate: "6deg",
    },
    // {
    //   image: "/images/baby/baby12.png",
    //   top: "64%",
    //   left: "62%",
    //   rotate: "7deg",
    // },
    {
      image: "/images/baby/baby18.png",
      top: "50%",
      left: "20%",
      rotate: "-5deg",
    },
  ];

  useEffect(() => {
    const elements = imagesRef.current;

    // Set initial state
    gsap.set(elements, {
      scale: 0,
      opacity: 0,
    });

    // Create staggered animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(elements, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        });
      },
      onLeave: () => {
        gsap.to(elements, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
        });
      },
      onEnterBack: () => {
        gsap.to(elements, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        });
      },
      onLeaveBack: () => {
        gsap.to(elements, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
        });
      },
    });

    // Add hover animations
    elements.forEach((element, index) => {
      if (element) {
        const handleMouseEnter = () => {
          gsap.to(element, {
            rotation: 0,
            scale: 1.15,
            zIndex: 20,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            rotation: parseFloat(images[index].rotate),
            scale: 1,
            zIndex: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners
        return () => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[250px] lg:h-[520px]">
      {images.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            imagesRef.current[index] = el;
          }}
          className="absolute cursor-pointer w-[100px] lg:w-[150px]"
          style={{
            top: item.top,
            left: item.left,
            transform: `rotate(${item.rotate})`,
          }}
        >
          <div className="bg-white p-1 shadow-xl">
            <img
              src={item.image}
              alt={`Baby ${index + 1}`}
              className="w-full aspect-4/3 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridSection;
