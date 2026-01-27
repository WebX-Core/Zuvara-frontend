import React from "react";
import { cn } from "@/lib/utils";

const featureLists = [
  { id: 1, title: "Ultra-soft, pillow-like comfort" },
  { id: 2, title: "Breathable and skin-friendly" },
  { id: 3, title: "Perfect fit for restful sleep" },
  { id: 4, title: "Fast absorption" },
  { id: 5, title: "Side-leak guards" },
  { id: 6, title: "All-night dryness guarantee" },
];

const WhyUsSection = () => {
  return (
    <section className="w-full min-h-screen relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-personalCare">
            Redefining Gentle Protection
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Experience the ultimate comfort and care with our specially designed
            products for your wellness.
          </p>
        </div>

        <div className="w-full relative min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center isolate gap-10 lg:gap-0">
          {/* Mobile Layout - Top Triangle (Features 1, 2, 3) */}
          <div className="lg:hidden w-full space-y-4 z-20">
            {/* Point 1: Top Center */}
            <div className="flex justify-center">
              <MobileFeatureCard feature={featureLists[0]} className="w-[85%]" />
            </div>
            {/* Point 2 & 3: Horizontal line below 1 */}
            <div className="flex justify-between gap-3">
              <MobileFeatureCard feature={featureLists[1]} className="flex-1" />
              <MobileFeatureCard feature={featureLists[2]} className="flex-1" />
            </div>
          </div>

          {/* Desktop Circular Features - Lines Layer (Behind Image) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none -z-10">
            {featureLists.map((feature, index) => {
              const angle = index * 60 - 60;
              const radius = 380;
              const innerRadius = 180;
              return (
                <div
                  key={`line-${feature.id}`}
                  className="absolute top-1/2 left-1/2"
                >
                  <div
                    className="absolute top-0 left-0 h-px bg-gradient-to-r from-personalCare/40 to-transparent origin-left hidden xl:block"
                    style={{
                      width: `${radius - innerRadius - 20}px`,
                      transform: `rotate(${angle}deg) translateX(${innerRadius}px)`,
                    }}
                  >
                    <div className="absolute right-0 -top-1 size-2 bg-personalCare rounded-full border-2 border-white shadow-sm" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Image Container */}
          <div className="relative z-10 size-64 md:size-80 lg:size-96 flex items-center justify-center">
            {/* Opaque mask to truly hide lines behind everything */}
            <div className="absolute inset-0 bg-white rounded-full z-0" />

            <div className="absolute inset-4 bg-personalCare/20 rounded-full blur-2xl z-10" />
            <div className="absolute inset-0 bg-personalCare/5 rounded-full border border-personalCare/10 z-10" />
            <img
              src="/images/personalCare/sleeping-lady.png"
              alt="Sleeping Lady"
              className="relative z-20 w-full h-full object-contain drop-shadow-2xl float-animation"
            />
          </div>

          {/* Mobile Layout - Bottom Inverted Triangle (Features 4, 5, 6) */}
          <div className="lg:hidden w-full space-y-4 z-20">
            {/* Point 4 & 5: Horizontal line below image */}
            <div className="flex justify-between gap-3">
              <MobileFeatureCard feature={featureLists[3]} className="flex-1" />
              <MobileFeatureCard feature={featureLists[4]} className="flex-1" />
            </div>
            {/* Point 6: Bottom Center */}
            <div className="flex justify-center">
              <MobileFeatureCard feature={featureLists[5]} className="w-[85%]" />
            </div>
          </div>

          {/* Desktop Circular Features - Cards Layer (In Front of Image) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none z-20">
            {featureLists.map((feature, index) => {
              const angle = index * 60 - 60;
              const radius = 340;
              return (
                <div
                  key={`card-${feature.id}`}
                  className="absolute top-1/2 left-1/2"
                >
                  <div
                    className="absolute pointer-events-auto group -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                    }}
                  >
                    <div className="bg-white/70 backdrop-blur-md border border-personalCare/20 p-4 rounded-2xl shadow-lg hover:shadow-personalCare/20 transition-all duration-500 hover:-translate-y-1 w-56 text-center">
                      <p className="text-sm font-semibold text-gray-800">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

const MobileFeatureCard = ({
  feature,
  className,
}: {
  feature: any;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white/90 backdrop-blur-md border border-personalCare/20 p-4 rounded-2xl shadow-sm flex items-center gap-3 justify-center text-center",
      className,
    )}
  >
    <div className="size-1.5 bg-personalCare rounded-full shrink-0" />
    <p className="text-xs font-bold text-gray-800 leading-tight">
      {feature.title}
    </p>
  </div>
);

