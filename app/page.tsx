import BigImage from "./components/home/BigImage";
import Category from "./components/home/Category";
import CTA from "./components/home/CTA";
import HomePage from "./components/home/HomePage";
import Product from "./components/home/Product";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Category />
      <BigImage />
      <Product />
      <CTA />
    </main>
  );
}
