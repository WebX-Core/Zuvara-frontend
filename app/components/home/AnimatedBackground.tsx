"use client";

import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  showBabyImages?: boolean;
  showClouds?: boolean;
  showAnimatedPaths?: boolean;
}

const AnimatedBackground = ({
  showBabyImages = true,
  showClouds = true,
  showAnimatedPaths = true,
}: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated SVG Paths */}
      {showAnimatedPaths && (
        <>
          {/* Wave Path */}
          <svg
            className="absolute top-1/3 left-0 w-full opacity-10"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,50 Q250,0 500,50 T1000,50"
              stroke="#8cd700"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Curved Dotted Path */}
          <svg
            className="absolute top-1/4 left-10 w-32 h-32 opacity-15"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#FF6B9D"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#8cd700"
              strokeWidth="1.5"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Heart Path */}
          <svg
            className="absolute bottom-20 right-20 w-12 h-12 opacity-20"
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M50 85 C20 70, 5 55, 5 40 C5 25, 20 15, 30 15 C40 15, 50 25, 50 35 C50 25, 60 15, 70 15 C80 15, 95 25, 95 40 C95 55, 80 70, 50 85 Z"
              fill="#FF6B9D"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </>
      )}

      {/* Floating Baby Icons */}
      {showBabyImages && (
        <>
          <motion.div
            className="absolute top-10 right-20 text-5xl"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            👶
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-20 text-4xl"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🍼
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-10 text-4xl"
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🎀
          </motion.div>
        </>
      )}

      {/* Animated Clouds */}
      {showClouds && (
        <>
          <motion.svg
            className="absolute top-20 left-0 w-32 h-20 opacity-20"
            viewBox="0 0 100 60"
            animate={{ x: [-100, 400] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M20 40 Q20 20 40 20 Q50 5 70 20 Q85 15 90 30 Q85 45 65 45 Q50 55 30 45 Z"
              fill="#87CEEB"
            />
          </motion.svg>

          <motion.svg
            className="absolute top-1/3 right-0 w-40 h-24 opacity-15"
            viewBox="0 0 120 80"
            animate={{ x: [400, -100] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          >
            <path
              d="M30 50 Q30 30 50 30 Q60 10 85 30 Q105 20 110 40 Q100 60 80 60 Q60 70 35 60 Z"
              fill="#B0E0E6"
            />
          </motion.svg>

          <motion.svg
            className="absolute bottom-1/3 left-1/4 w-36 h-20 opacity-15"
            viewBox="0 0 100 60"
            animate={{ x: [-100, 300] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          >
            <path
              d="M15 45 Q15 25 35 25 Q45 8 65 25 Q80 16 85 35 Q75 55 55 55 Q35 62 20 55 Z"
              fill="#ADD8E6"
            />
          </motion.svg>
        </>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#8cd700]"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
