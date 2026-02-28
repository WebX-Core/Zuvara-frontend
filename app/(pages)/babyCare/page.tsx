import VideoSection from "@/app/components/babyCare/VideoSection";
import CTA from "@/app/components/babyCare/CTA";
import HeroSection from "@/app/components/babyCare/HeroSection";
import Product from "@/app/components/babyCare/Product";
import Testimonial from "@/app/components/babyCare/Testimonial";
import WhyChoose from "@/app/components/babyCare/why-choose";
import Blog from "@/app/components/babyCare/Blog";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <WhyChoose />
      <Product />
      <VideoSection />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
}
