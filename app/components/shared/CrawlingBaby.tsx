"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CrawlingBaby = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showBaby = () => {
      // Random bottom position within a small range to make it look "randomly" on the screen but still at the bottom
      // Using a range from 0 to 10% of the screen height
      setBottomPosition(Math.floor(Math.random() * 10));

      setIsVisible(true);

      // Duration of animation is 8s, we hide after it finishes
      setTimeout(() => {
        setIsVisible(false);
      }, 15000);

      // Random interval between 15-20 seconds to appear again
      const nextInterval =
        Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000;
      timeoutId = setTimeout(showBaby, nextInterval + 15000); // Add duration to interval
    };

    // Start the first appearance after a short initial delay
    const initialTimeout = setTimeout(showBaby, 10000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-999 overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="crawling-baby"
            initial={{ left: "-100px" }}
            animate={{ left: "100%" }}
            transition={{ duration: 15, ease: "linear" }}
            style={{
              bottom: `${bottomPosition}%`,
              minWidth: "max-content",
            }}
            className="absolute bottom-0 h-20 lg:h-44 w-auto pointer-events-none"
          >
            <video
              src="/videos/babyCrawling.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CrawlingBaby;
