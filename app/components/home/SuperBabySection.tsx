import React from "react";

const SuperBabySection = () => {
  return (
    <section className="h-screen w-screen">
      <div className="size-1/2">
        {" "}
        <video
          src="/videos/superBaby.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="pointer-events-none select-none w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SuperBabySection;
