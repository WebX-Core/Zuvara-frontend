import VideoSection from "@/app/components/babyCare/VideoSection";
import CTA from "@/app/components/babyCare/CTA";
import Product from "@/app/components/babyCare/Product";
import Testimonial from "@/app/components/babyCare/Testimonial";
import WhyChoose from "@/app/components/babyCare/why-choose";
import Blog from "@/app/components/babyCare/Blog";
import Loader from "@/app/components/babyCare/Loader";
import NewHero from "@/app/components/babyCare/NewHero";
import ScrollCrawlingBaby from "@/app/components/babyCare/ScrollCrawlingBaby";

export default function Home() {
  return (
    <main id="babycare-scroll-page" className="relative">
      <Loader />
      {/* <HeroSection /> */}
      <NewHero />
      <ScrollCrawlingBaby
        startId="babycare-why-choose"
        targetId="babycare-scroll-page"
      />
      <WhyChoose />
      <VideoSection />
      <Product />
      <Testimonial />
      <Blog />
      <CTA />
    </main>
  );
}
