"use client";

import Image from "next/image";

const BigImage = () => {
  return (
    <section className="relative w-full h-96 lg:h-[120vh] bg-cover bg-center bg-no-repeat">
      <Image
        src="/baby/happy-baby.png"
        alt="Big Image"
        fill
        className="object-cover object-top"
        priority
      />
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30" /> */}

      {/* Optional: Add content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        {/* Add any text or content here if needed */}
      </div>
    </section>
  );
};

export default BigImage;
