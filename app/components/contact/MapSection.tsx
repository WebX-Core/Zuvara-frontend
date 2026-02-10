"use client";

import { contactLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

const MapSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  return (
    <section>
      <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full h-[30vh] lg:h-[50vh] space-y-2">
            <p
              className={cn(
                "text-xl font-semibold",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Head Office
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5469.514450861531!2d87.285365!3d26.458056!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI3JzI5LjAiTiA4N8KwMTcnMDcuMyJF!5e1!3m2!1sen!2snp!4v1769578978378!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-[30vh] lg:h-[50vh] space-y-2">
            <p
              className={cn(
                "text-xl font-semibold",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Corporate Office
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d676.0405223376961!2d85.334342!3d27.718311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900599c704d%3A0x6253d9ddf8b71ffa!2sUNV%20Experience%20Center!5e1!3m2!1sen!2snp!4v1769579299805!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
