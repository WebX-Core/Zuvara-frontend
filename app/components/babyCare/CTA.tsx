"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ZuvyBabyModel from "./ZuvyBabyModel";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftLeafRef = useRef<HTMLDivElement>(null);
  const rightLeafRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // useGSAP(
  //   () => {
  //     // Force a refresh once the page is fully loaded and settled
  //     const handleLoad = () => ScrollTrigger.refresh();
  //     window.addEventListener("load", handleLoad);

  //     // Also refresh after a short delay for hydration settlement
  //     const refreshTimeout = setTimeout(() => {
  //       ScrollTrigger.refresh();
  //     }, 500);

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: 1.5,
  //         pin: true,
  //         pinSpacing: true,
  //         markers: true,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true,
  //         refreshPriority: 1,
  //       },
  //     });

  //     tl.to(leftLeafRef.current, {
  //       xPercent: -100,
  //       yPercent: 100,
  //       scale: 1.2,
  //       ease: "none",
  //     }).to(
  //       rightLeafRef.current,
  //       {
  //         xPercent: 100,
  //         yPercent: 100,
  //         scale: 1.2,
  //         ease: "none",
  //       },
  //       "<",
  //     );

  //     return () => {
  //       window.removeEventListener("load", handleLoad);
  //       clearTimeout(refreshTimeout);
  //     };
  //   },
  //   { scope: sectionRef, dependencies: [] },
  // );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* <div
        ref={leftLeafRef}
        className="absolute top-0 left-0 w-[150%] h-full z-10 pointer-events-none"
      >
        <img
          src="/images/leftLeaf.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div
        ref={rightLeafRef}
        className="absolute top-0 right-0 w-[150%] h-full z-10 pointer-events-none"
      >
        <img
          src="/images/rightLeaf.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div> */}
      <div className="relative bg-babyCare h-auto md:h-[45vh] lg:h-[60vh] py-4 lg:py-8">
        {/* top curve border */}
        <div className="custom-shape-divider-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div
          ref={contentRef}
          className="container w-full h-full flex items-center"
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="p-8 lg:py-24 lg:pl-36">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Discover Amazing
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-3 font-poppins leading-[0.9] lg:leading-none">
                  Get notified about latest{" "}
                  <span className="text-[#8cd700] italic">
                    offers & updates
                  </span>
                </h2>
                <p className="text-zinc-700 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
                  Be aware of all discounts and bargains! Don&apos;t miss your
                  benefits!
                  <span className="ml-1">😊</span>
                </p>

                {/* Email Input */}
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-foreground rounded-full text-sm focus:outline-none focus:border-zinc-600"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-1 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 hover:text-[#8cd700] font-semibold px-6 py-1.5 rounded-full transition-all text-sm flex items-center gap-2"
                  >
                    <Mail size={16} />
                    Subscribe
                  </button>
                </form>

                {/* Success Message */}
                {subscribed && (
                  <p className="mt-3 text-sm text-green-600 font-semibold">
                    ✓ Thank you for subscribing!
                  </p>
                )}
              </div>

              {/* Image */}
              <div className="relative h-64 md:h-full min-h-64 hidden lg:block">
                <Image
                  src="/images/baby/baby31.png"
                  alt="Zuvara Diapers"
                  fill
                  className="object-contain"
                  priority
                />
                {/* <ZuvyBabyModel /> */}
              </div>
            </div>
          </div>
        </div>

        {/* bottom curve border */}
        {/* <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
