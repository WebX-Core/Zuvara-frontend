import React from "react";

const CircluarGradSection = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-full h-full aspect-square">
        {/* Background Image */}
        <img
          src="/baby/baby30.png"
          alt="diaper view"
          className="size-[80%] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 w-full h-full bg-white/30" />
        <div className="absolute inset-0 w-full h-full bg-linear-to-b from-foreground via-transparent to-foreground z-30" />

        {/* Circular Gradient Overlay */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 40%, #00000050 60%, #00000050 100%)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        /> */}

        {/* Optional: Additional blur layer for more pronounced effect */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 40%, #00000050 70%, #00000050 100%)",
            // filter: "blur(12px)",
          }}
        /> */}
      </div>
    </div>
  );
};

export default CircluarGradSection;
