"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const CrawlingBaby = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-50px", once: true });

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;

    const showBaby = () => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 25000);

      const nextInterval =
        Math.floor(Math.random() * (30000 - 25000 + 1)) + 25000;
      timeoutId = setTimeout(showBaby, nextInterval + 25000);
    };

    const initialTimeout = setTimeout(showBaby, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-0 w-full pointer-events-none z-100"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="crawling-baby"
            initial={{ left: "-100px" }}
            animate={{ left: "300%" }}
            transition={{ duration: 50, ease: "linear" }}
            viewport={{ once: true }}
            style={{
              minWidth: "max-content",
            }}
            className="absolute -top-12 lg:-top-16 h-12 lg:h-20 w-auto pointer-events-none"
          >
            <Image
              src="/videos/crawling.gif"
              alt="Crawling Baby"
              width={100}
              height={100}
              className="h-full w-auto object-contain"
            />
            {/* <video
              src="/videos/babyCrawling3.webm"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-auto object-contain"
            /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CrawlingBaby;
