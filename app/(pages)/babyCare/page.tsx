// import Blog from "./components/home/Blog";
// import VideoSection from "./components/home/VideoSection";

import AboutSection from "@/app/components/babyCare/AboutSection";
import VideoSection from "@/app/components/babyCare/VideoSection";
import CTA from "@/app/components/babyCare/CTA";
import HeroSection from "@/app/components/babyCare/HeroSection";
import LeftRight from "@/app/components/babyCare/LeftRight";
import Product from "@/app/components/babyCare/Product";
import Testimonial from "@/app/components/babyCare/Testimonial";
import WhyChoose from "@/app/components/babyCare/why-choose";
import WhyUsSection from "@/app/components/babyCare/WhyUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection /> */}
      <WhyUsSection />
      {/* <ZuvyBabyModel /> */}
      {/* <WhyChoose /> */}
      <LeftRight />
      <VideoSection />
      <Product />
      <Testimonial />
      {/* <ChildCareStepSection /> */}
      {/* <Blog /> */}
      <CTA />
    </main>
  );
}
