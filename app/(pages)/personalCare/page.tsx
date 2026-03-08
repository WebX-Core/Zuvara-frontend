import ProductList from "@/app/components/personalCare/ProductList";
import HeroSection from "@/app/components/personalCare/HeroSection";
import ProductSection from "@/app/components/personalCare/ProductSection";
import StatsDivider from "@/app/components/personalCare/StatsDivider";
import WhyUsSection from "@/app/components/personalCare/WhyUsSection";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyUsSection />
      <StatsDivider />
      <ProductSection />
      <ProductList />
    </div>
  );
};

export default page;
