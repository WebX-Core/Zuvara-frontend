"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../common-ui/Button";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen lg:h-screen overflow-hidden">
        <Image
          src="/baby/baby-twol.png"
          alt="Happy Baby"
          height={1000}
          width={1000}
          className="object-contain h-full object-bottom"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white" />
      </div>
      {/* Content - Left Side */}
      <div className="relative z-10 w-full flex flex-col justify-start mt-20 mx-auto! px-4 sm:px-6 lg:px-20 max-w-6xl text-left">
        <h1 className="text-4xl lg:text-8xl font-semibold  mb-6 font-montserrat  text-foreground">
          Protection they won&apos;t feel.
          <br />
          <span>Peace you will.</span>
        </h1>
        <p className="text-lg text-zinc-700 mb-8 max-w-3xl">
          Discover a world of trusted baby products designed to nurture and
          support your parenting journey. From essentials to innovative gear, we
          have everything you need to care for your little bundle of joy.
        </p>
        <Link href="/shop">
          <Button content="Shop Now" />
        </Link>
      </div>
    </section>
  );
}
