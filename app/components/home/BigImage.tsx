"use client";

import Image from "next/image";

type BigImageProps = {
  src: string;
  alt: string;
};

const BigImage = ({ src, alt }: BigImageProps) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-10 h-52 lg:h-120 bg-cover bg-center bg-no-repeat overflow-hidden  ">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top w-full rounded-3xl"
        priority
      />
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30" /> */}

      {/* Optional: Add content overlay */}
      {/* <div className="relative z-10 w-full h-full flex flex-col pt-8"> */}
      {/* You can add text or buttons here if needed */}
      {/* </div> */}
    </section>
  );
};

export default BigImage;
