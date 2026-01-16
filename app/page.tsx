import BigImage from "./components/home/BigImage";
import Category from "./components/home/Category";
import CTA from "./components/home/CTA";
import HomePage from "./components/home/HomePage";
import Product from "./components/home/Product";
import Testimonial from "./components/home/Testimonial";
import WhyChoose from "./components/home/why-choose";

export default function Home() {
  return (
    <main>
      <HomePage />
      <WhyChoose />
      <Category />
      <BigImage src="/baby/happy-baby.png" alt="Happy Baby" />
      <Product />
      <BigImage src="/baby/strollerr.png" alt="Sleeping Baby" />
      <Testimonial /> 
      <CTA />
    </main>
  );
}
