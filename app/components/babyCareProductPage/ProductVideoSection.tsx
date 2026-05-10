"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

interface ProductVideoSectionProps {
  theme?: ThemePreset;
}

const ProductVideoSection = ({ theme }: ProductVideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = async () => {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      await videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-4 lg:py-8 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative group">
          {/* Section Header */}
          <div className="mb-10 text-center space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold tracking-tight"
              style={{
                color: theme ? hexToRgba(theme.accent, 0.9) : "#18181b",
              }}
            >
              Watch in{" "}
              <span className="font-light italic opacity-60">Action.</span>
            </motion.h2>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl lg:rounded-[3rem] overflow-hidden bg-zinc-100 "
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              playsInline
              loop
              src="/videos/diaper-vdo.mp4"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
            ></video>

            {!isPlaying && (
              <>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* Custom Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="size-20 lg:size-28 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white shadow-2xl transition-colors hover:bg-white/20"
                  >
                    <Play className="size-8 lg:size-12 fill-white ml-1" />
                  </motion.button>
                </div>
              </>
            )}

            {/* Floating Info Overlay (Top Right) */}
            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="size-10 lg:size-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="size-5 lg:size-6" />
                ) : (
                  <Volume2 className="size-5 lg:size-6" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductVideoSection;
