"use client";

import ContactSection from "@/app/components/contact/ContactSection";
import HeroSection from "@/app/components/contact/HeroSection";
import MapSection from "@/app/components/contact/MapSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <MapSection />
    </div>
  );
};

export default page;
