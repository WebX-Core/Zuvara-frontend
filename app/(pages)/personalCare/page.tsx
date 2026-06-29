import ProductList from "@/app/components/personalCare/ProductList";
import HeroSection from "@/app/components/personalCare/HeroSection";
// import ProductSection from "@/app/components/personalCare/ProductSection";
import WhyChoose from "@/app/components/personalCare/WhyChoose";
import WhyUsSection from "@/app/components/personalCare/WhyUsSection";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyUsSection />
      <WhyChoose />
      {/* <ProductSection /> */}
      <ProductList />
    </div>
  );
};

export default page;
