"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";
import { assetWithFill, wave3Svg } from "@/constants/svgs";

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1234);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

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
     const productBottomWave = assetWithFill(wave3Svg, "#bfdec9");

  return (
    <section className="relative">
        <div
        className="pointer-events-none absolute -top-10 left-1/2 z-20 w-screen -translate-x-1/2 overflow-visible leading-none [&>svg]:block [&>svg]:h-auto [&>svg]:w-screen rotate-180"
        dangerouslySetInnerHTML={{ __html: productBottomWave.markup }}
      />
      <div className=" mx-auto w-full">
        {/* Section Header */}
        {/* <SectionHeading
          title="We started zuvara with"
          highlight="purpose."
          description="Because parenting is hard enough and diapers should be easy."
          align={isSmallerDevice ? "left" : "center"}
          descClassName="text-left lg:text-center"
        /> */}

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 lg:mb-8 relative"
        >
          {/* Video Container */}
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-screen bg-linear-to-br from-foreground to-[#8cd700] overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover pointer-events-none"
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
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 py-8 bg-linear-to-t from-white to-transparent px-4">
            <div className="flex items-center justify-center gap-2 lg:gap-4 w-4xl mx-auto">
              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTogglePlayPause}
                className="flex items-center justify-center gap-2 bg-babyCare text-foreground px-4 py-2 lg:px-6 lg:py-4 rounded-full hover:bg-black/80 transition-all"
                aria-label="Toggle Play/Pause"
              >
                {isPlaying ? (
                  <Icon
                    icon="mage:pause-fill"
                    width={isSmallerDevice ? "16" : "20"}
                    height={isSmallerDevice ? "16" : "20"}
                  />
                ) : (
                  <Icon
                    icon="mage:play-fill"
                    width={isSmallerDevice ? "16" : "20"}
                    height={isSmallerDevice ? "16" : "20"}
                  />
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
                className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 lg:px-6 lg:py-4 rounded-full hover:bg-black/80 transition-all"
                aria-label="Toggle Volume"
              >
                {isMuted ? (
                  <Icon
                    icon="teenyicons:sound-off-solid"
                    width={isSmallerDevice ? "16" : "20"}
                    height={isSmallerDevice ? "16" : "20"}
                  />
                ) : (
                  <Icon
                    icon="teenyicons:sound-on-solid"
                    width="20"
                    height="20"
                  />
                )}
                <span className="text-sm font-medium">
                  {isMuted ? "Unmute" : "Mute"}
                </span>
              </motion.button>
              {/* Like Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleToggleLike}
                className={`flex items-center justify-center gap-2 px-4 py-2 lg:px-6 lg:py-4 rounded-full transition-all ${
                  isLiked
                    ? " text-red-500 ring ring-red-400  backdrop-blur-md"
                    : "ring ring-zinc-400 text-zinc-800 bg-babyCare/50 backdrop-blur-md"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
