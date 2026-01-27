import React from "react";
import SectionHeading from "../common-ui/SectionHeading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Period Panties",
    tagline: "Ultra-Comfortable, Pant Style",
    slug: "period-panties",
    description:
      "Experience ultimate freedom with our high-absorbency period panties. Designed to feel like regular underwear while providing maximum leak protection.",
    image: "/images/personalCare/period-panties.png",
    packImage: "/images/personalCare/period-panties-pack.png",
    bgColor: "bg-[#7c3aed]/10",
    accentColor: "text-[#7c3aed]",
    borderColor: "border-[#7c3aed]/20",
  },
  {
    id: 2,
    name: "Sanitary Pads",
    tagline: "Thinner, Softer, Simply Better",
    slug: "sanitary-pads",
    description:
      "Premium sanitary pads engineered for superior comfort and rapid absorption. Stay dry, fresh, and confident throughout your day and night.",
    image: "/images/personalCare/sanitary-pad.png",
    packImage: "/images/personalCare/sanitary-pads-pack.png",
    bgColor: "bg-[#7c3aed]/10",
    accentColor: "text-[#7c3aed]",
    borderColor: "border-[#7c3aed]/20",
  },
];

const AboutProduct = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* <SectionHeading
            title="Essential"
            highlight="Sanitary Solutions"
            description="Innovative personal care products designed for your comfort, health, and peace of mind. Discover the future of menstrual hygiene."
            titleClassName="text-4xl lg:text-5xl font-bold text-black!"
            highlighterColor="text-personalCare"
            align="center"
          /> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-personalCare">
            Essential Sanitary Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/personalCareProduct/${product.slug}`}
              className={cn(
                "group relative flex flex-col rounded-[2.5rem] overflow-hidden border p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-personalCare/10",
                product.borderColor,
                index === 1 ? "lg:translate-y-12" : "", // Staggered look
              )}
            >
              {/* Image Container */}
              <div
                className={cn(
                  "relative aspect-4/3 rounded-4xl overflow-hidden flex items-center justify-center p-8 transition-transform duration-700",
                  product.bgColor,
                )}
              >
                {/* Product Main Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />

                {/* Pack Image - Floating overlay */}
                <div className="absolute bottom-4 right-4 w-1/3 aspect-square z-20 transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
                  <img
                    src={product.packImage}
                    alt={`${product.name} pack`}
                    className="w-full h-full object-contain drop-shadow-xl rotate-6"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p
                      className={cn("font-medium italic", product.accentColor)}
                    >
                      {product.tagline}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex items-center justify-center size-12 rounded-full border transition-all duration-500 group-hover:bg-personalCare group-hover:text-white group-hover:border-personalCare",
                      product.borderColor,
                    )}
                  >
                    <ArrowUpRight className="size-6 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed max-w-lg">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center gap-2 font-bold text-sm tracking-widest uppercase">
                  <span>Explore Product</span>
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-personalCare/30 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
