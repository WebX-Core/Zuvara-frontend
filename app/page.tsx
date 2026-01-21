import ThreeD from "./components/home/3D";
import AboutSection from "./components/home/AboutSection";
import BigImage from "./components/home/BigImage";
import Category from "./components/home/Category";
import ChildCareStepSection from "./components/home/ChildCareStepSection";
import CircluarGradSection from "./components/home/CircularGradSection";
import CTA from "./components/home/CTA";
import HomePage from "./components/home/HomePage";
import ImageGrid from "./components/home/ImageGrid";
import LeftRight from "./components/home/LeftRight";
import Product from "./components/home/Product";
import SuperBabySection from "./components/home/SuperBabySection";
import Testimonial from "./components/home/Testimonial";
import WhyChoose from "./components/home/why-choose";
import ZuvyBabyModel from "./components/home/ZuvyBabyModel";
// import Blog from "./components/home/Blog";
// import VideoSection from "./components/home/VideoSection";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutSection />
      {/* <ThreeD /> */}
      {/* <ZuvyBabyModel /> */}
      <WhyChoose />
      {/* <ImageGrid /> */}
      {/* <SuperBabySection /> */}
      <LeftRight />
      <Category />
      {/* <VideoSection /> */}
      {/* <BigImage src="/baby/happy-baby.png" alt="Happy Baby" /> */}
      <BigImage />
      <Product />
      <Testimonial />
      {/* <ChildCareStepSection /> */}
      {/* <CircluarGradSection /> */}
      {/* <Blog /> */}
      <CTA />
    </main>
  );
}
