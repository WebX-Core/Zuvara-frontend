"use client";

import React from "react";
import SectionHeading from "../common-ui/SectionHeading";
import ImageGridSection from "./ImageGridSection";
import { useMediaQuery } from "react-responsive";

const AboutSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <section className="relative w-full overflow-hidden">
      {/* <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl relative z-10">
        {/* top section */}
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <SectionHeading
              title="Why"
              highlight="zuvara"
              description="Zuvara is a Nepali family-care brand committed to providing safe,
              high-quality, and affordable essentials for everyday life. From
              baby diapers and wipes to women's hygiene and personal care
              products, we focus on comfort, reliability, and gentle care.
              Designed to meet international standards and the needs of Nepali
              families, Zuvara is your trusted partner in family well-being."
              descClassName="text-left"
            />
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 translate-x-[15%] lg:translate-x-0">
            <ImageGridSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
