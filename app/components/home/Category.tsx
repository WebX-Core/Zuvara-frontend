"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../common-ui/SectionHeading";
import { Icon } from "@iconify-icon/react";

const Category = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1234);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleTogglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-4 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <SectionHeading
          title="We started zuvara with"
          highlight="purpose."
          description="Because parenting is hard enough and diapers should be easy."
          align="center"
        />

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 lg:mb-8"
        >
          {/* Video Container */}
          <div className="relative w-full h-150 bg-linear-to-br from-foreground to-[#8cd700] rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/zuvara-vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Label */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-medium backdrop-blur-md">
              Zuvara Solutions.
            </div>
          </div>

          {/* Video Controls Below - Icon + Text Style */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {/* Like Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleLike}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all ${
                isLiked
                  ? " text-red-500 border border-zinc-400 "
                  : "border border-zinc-400 text-zinc-800 "
              }`}
              aria-label="Like"
            >
              <Icon
                icon={isLiked ? "mdi:heart" : "mdi:heart-outline"}
                width="20"
                height="20"
              />
              <span className="text-sm font-medium">{likeCount}</span>
            </motion.button>
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTogglePlayPause}
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-all"
              aria-label="Toggle Play/Pause"
            >
              {isPlaying ? (
                <Icon icon="mage:pause-fill" width="20" height="20" />
              ) : (
                <Icon icon="mage:play-fill" width="20" height="20" />
              )}
              <span className="text-sm font-medium">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </motion.button>

            {/* Sound Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleMute}
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-all"
              aria-label="Toggle Volume"
            >
              {isMuted ? (
                <Icon
                  icon="teenyicons:sound-off-solid"
                  width="20"
                  height="20"
                />
              ) : (
                <Icon icon="teenyicons:sound-on-solid" width="20" height="20" />
              )}
              <span className="text-sm font-medium">
                {isMuted ? "Unmute" : "Mute"}
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
