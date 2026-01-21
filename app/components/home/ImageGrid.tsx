import React from "react";

const ExactHeartGrid = () => {
  const blocks = [
    // --- ROW 1 & 2: TOP LOBES ---
    {
      pos: "col-start-2 col-span-4 row-start-1 row-span-2",
      image: "/baby/baby17.png",
    }, // Top Left Lobe
    {
      pos: "col-start-8 col-span-4 row-start-1 row-span-2",
      image: "/baby/baby13.png",
    }, // Top Right Lobe

    // --- ROW 2 & 3: CENTER TOP PIECE ---
    {
      pos: "col-start-6 col-span-2 row-start-2 row-span-2",
      image: "/baby/baby29.png",
    },

    // --- ROW 3: OUTER WINGS & CONNECTING SLIVERS ---
    {
      pos: "col-start-1 col-span-3 row-start-3 row-span-2",
      image: "/baby/baby25.png",
    }, // Upper Left Wing
    {
      pos: "col-start-10 col-span-3 row-start-3 row-span-2",
      image: "/baby/baby23.png",
    }, // Upper Right Wing
    {
      pos: "col-start-4 col-span-2 row-start-3 row-span-1",
      image: "/baby/baby3.png",
    }, // Left Horizontal Sliver
    {
      pos: "col-start-8 col-span-2 row-start-3 row-span-1",
      image: "/baby/baby22.png",
    }, // Right Horizontal Sliver

    // --- ROW 4 TO 7: LARGE CENTRAL PORTRAIT BLOCKS ---
    {
      pos: "col-start-4 col-span-3 row-start-4 row-span-3",
      image: "/baby/baby24.png",
    }, // Big Vertical L
    {
      pos: "col-start-7 col-span-3 row-start-4 row-span-4",
      image: "/baby/baby19.png",
    }, // Big Vertical R

    // --- ROW 5 & 6: LOWER OUTER SQUARES ---
    {
      pos: "col-start-2 col-span-2 row-start-5 row-span-2",
      image: "/baby/baby12.png",
    }, // Lower Left Square
    {
      pos: "col-start-10 col-span-2 row-start-5 row-span-2",
      image: "/baby/baby18.png",
    }, // Lower Right Square

    // --- ROW 8: BOTTOM "V" SHAPE ---
    {
      pos: "col-start-4 col-span-3 row-start-7 row-span-2",
      image: "/baby/baby9.png",
    }, // Bottom L Landscape
    {
      pos: "col-start-7 col-span-3 row-start-8 row-span-1",
      image: "/baby/baby26.png",
    }, // Bottom R Landscape

    // --- ROW 9: THE FINAL TIP ---
    {
      pos: "col-start-6 col-span-2 row-start-9 row-span-1",
      image: "/baby/baby21.png",
    },
  ];

  return (
    <div className="h-[70vh] lg:h-[120vh] w-screen flex items-center justify-center p-10 relative overflow-hidden">
      {/* Warm Background Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-200 rounded-full blur-[120px] -z-10" /> */}

      {/* Container for both overlay and grid */}
      <div className="relative w-full max-w-4xl aspect-4/3">
        {/* Heart-shaped blurred overlay - positioned beneath the grid */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            viewBox="0 0 100 100"
            className="size-[120vh] blur-3xl opacity-90"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M50,92 C50,92 8,65 8,38 C8,22 18,10 30,10 C40,10 46,16 50,28 C54,16 60,10 70,10 C82,10 92,22 92,38 C92,65 50,92 50,92 Z"
              fill="url(#heartGradient)"
            />
            <defs>
              <linearGradient
                id="heartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#456a5c" />
                <stop offset="50%" stopColor="#456a5c" />
                <stop offset="100%" stopColor="#456a5c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Grid Configuration:
            - 12 Columns: Allows a center split between col 6 and 7.
            - 9 Rows: Accommodates the vertical height of the heart.
            - Aspect ratio [4/3] keeps the heart from looking stretched.
        */}
        <div className="relative grid grid-cols-12 grid-rows-9 gap-2 w-full h-full z-10">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`${block.pos} shadow-sm transition-all hover:scale-[1.03] hover:shadow-xl duration-300 overflow-hidden group bg-gray-200`}
            >
              <img
                src={block.image}
                alt={`Heart element ${index}`}
                className="size-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExactHeartGrid;
