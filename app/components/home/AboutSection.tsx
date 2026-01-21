import React from "react";
import SectionHeading from "../common-ui/SectionHeading";
import Button from "../common-ui/Button";

const AboutSection = () => {
  return (
    <section className="container h-auto mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 overflow-hidden">
          <video
            src="/videos/babyPlaying.mp4"
            autoPlay
            muted
            playsInline
            loop
            controls={false}
            className="pointer-events-none select-none size-[95%]"
          />
        </div>
        <div className="lg:w-1/2">
          <SectionHeading title="About Us" />
          <p className="lg:text-lg">
            Zuvara is a Nepali family-care brand committed to providing safe,
            high-quality, and affordable essentials for everyday life. From baby
            diapers and wipes to women's hygiene and personal care products, we
            focus on comfort, reliability, and gentle care. Designed to meet
            international standards and the needs of Nepali families, Zuvara is
            your trusted partner in family well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
