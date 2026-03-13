"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const STORAGE_KEY = "babycare-loader-seen-session";

export default function Loader() {
  const [shouldRender, setShouldRender] = useState(false);
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressDone, setProgressDone] = useState(false);
  const [babyDone, setBabyDone] = useState(false);
  const babyRef = useRef<HTMLDivElement | null>(null);
  const laneRef = useRef<HTMLDivElement | null>(null);

  const finishLoader = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new CustomEvent("babycare-loader-complete"));
    setShouldRender(false);
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const seen = window.sessionStorage.getItem(STORAGE_KEY) === "true";
      setShouldRender(!seen);
      setChecked(true);
      setProgress(0);
      setProgressDone(false);
      setBabyDone(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!checked || !shouldRender) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [checked, shouldRender]);

  useEffect(() => {
    if (!checked || !shouldRender) return;

    const duration = 3200;
    const start = Date.now();

    const intervalId = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (next >= 100) {
        setProgressDone(true);
        window.clearInterval(intervalId);
      }
    }, 30);

    return () => window.clearInterval(intervalId);
  }, [checked, shouldRender]);

  useEffect(() => {
    if (!checked || !shouldRender || !babyRef.current || !laneRef.current) return;

    const laneBounds = laneRef.current.getBoundingClientRect();
    const babyWidth = babyRef.current.getBoundingClientRect().width;
    const startX = -babyWidth * 0.7;
    const targetX = window.innerWidth * 0.9 - laneBounds.left - babyWidth;

    const tween = gsap.fromTo(
      babyRef.current,
      { x: startX },
      {
        x: targetX,
        duration: 3.2,
        ease: "none",
        onComplete: () => setBabyDone(true),
      },
    );

    return () => {
      tween.kill();
    };
  }, [checked, shouldRender]);

  useEffect(() => {
    if (!(checked && shouldRender && progressDone && babyDone)) return;

    const frame = window.requestAnimationFrame(() => {
      finishLoader();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [babyDone, checked, progressDone, shouldRender]);

  if (!checked) return null;

  return (
    <AnimatePresence>
      {shouldRender ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-200 bg-babyCare"
        >
          <div className="absolute inset-0 bg-linear-to-b from-white/50 to-transparent" />

          <div className="relative h-full w-full overflow-hidden px-4 sm:px-6">
            <div
              className="absolute left-1/2 top-[50%] sm:top-[32%] z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold  sm:text-5xl"
              style={{ color: "#45685e" }}
            >
              {progress}%
            </div>

            <div
              ref={laneRef}
              className="absolute inset-x-4 bottom-8 h-24 sm:inset-x-6 sm:bottom-12 sm:h-64"
            >
              <div className="absolute -bottom-4 sm:bottom-0 right-0">
                <Image
                  src="/waves/finalmom.gif"
                  alt="Girl waiting at the end of the loader path"
                  width={130}
                  height={130}
                  className="h-60 w-auto max-w-[28vw] object-contain sm:h-120 sm:max-w-none"
                  priority
                />
              </div>

              <div
                ref={babyRef}
                className="absolute bottom-0 left-0"
              >
                <Image
                  src="/videos/crawling.gif"
                  alt="Crawling baby loader"
                  width={150}
                  height={110}
                  className="h-20 w-auto max-w-[32vw] object-contain sm:h-60 sm:max-w-none"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
