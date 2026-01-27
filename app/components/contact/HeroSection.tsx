"use client";

import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <div
      className={cn(
        "min-h-[30vh] lg:min-h-[40vh] flex items-center justify-center transition-colors duration-500",
      )}
    >
      <section className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-center relative">
          <div className="lg;w-1/2 z-10 text-center space-y-8">
            <h1
              className={cn(
                "text-3xl lg:text-6xl font-bold transition-colors duration-500",
                isPersonal ? "text-black" : "text-foreground",
              )}
            >
              Let's{" "}
              <span
                className={cn(isPersonal ? "text-ternary" : "text-secondary")}
              >
                Connect
              </span>
            </h1>
            <p className="text-lg">
              Have questions or need support? We're here to help—reach out to
              Arola anytime, and we'll be happy to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
