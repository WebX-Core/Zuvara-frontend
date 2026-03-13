import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureItem = {
  id: number;
  title: string;
};

const featureLists: FeatureItem[] = [
  { id: 1, title: "Ultra-soft, pillow-like comfort" },
  { id: 2, title: "Breathable and skin-friendly" },
  { id: 3, title: "Perfect fit for restful sleep" },
  { id: 4, title: "Fast absorption" },
  { id: 5, title: "Side-leak guards" },
  { id: 6, title: "All-night dryness guarantee" },
];

const WhyUsSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20 bg-personalCare/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl flex flex-col items-center">
        <div className="mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-personalCare">
            Why Personal Care
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold leading-[0.98] tracking-tight text-personalCare">
            Redefining gentle
            <span className="ml-2 italic font-light text-personalCare/70">
              protection and comfort.
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Experience soft, breathable essentials designed to support your
            everyday routine with comfort, confidence, and dependable care.
          </p>
        </div>

        <div className="w-full relative min-h-125 lg:min-h-175 flex flex-col items-center justify-center isolate gap-10 lg:gap-0">
          {/* Mobile Layout - Top Triangle (Features 1, 2, 3) */}
          <div className="lg:hidden w-full space-y-4 z-20">
            {/* Point 1: Top Center */}
            <div className="flex justify-center">
              <MobileFeatureCard
                feature={featureLists[0]}
                className="w-[85%]"
              />
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
              const radius = 340;
              const innerRadius = 180;
              return (
                <div
                  key={`line-${feature.id}`}
                  className="absolute top-1/2 left-1/2"
                >
                  <div
                    className="absolute top-0 left-0 h-px bg-linear-to-r from-personalCare/40 to-transparent origin-left hidden xl:block"
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
            <Image
              src="/images/personalCare/sleeping-lady.png"
              alt="Sleeping Lady"
              fill
              className="relative z-20 h-full w-full object-contain drop-shadow-2xl float-animation"
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
              <MobileFeatureCard
                feature={featureLists[5]}
                className="w-[85%]"
              />
            </div>
          </div>

          {/* Desktop Circular Features - Cards Layer (In Front of Image) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none z-20">
            {featureLists.map((feature, index) => {
              const angle = index * 60 - 60;
              const radius = 320;
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
                    <div className="bg-white/70 backdrop-blur-md border border-personalCare/20 p-4 rounded-2xl shadow-lg hover:shadow-personalCare/20 transition-all duration-500 hover:-translate-y-1 w-fit text-center">
                      <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
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
  feature: FeatureItem;
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
