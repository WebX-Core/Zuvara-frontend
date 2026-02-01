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
    <section className="">
      <div className="container mx-auto pt-8 pb-8 lg:pb-0 lg:pt-16 px-4 lg:px-6 max-w-7xl">
        {isSmallerDevice ? (
          <div className="space-y-12">
            <div className="w-full h-[30vh] space-y-2">
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
            <div className="w-full h-[30vh] space-y-2">
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
        ) : (
          <div className="space-y-8 lg:space-y-12">
            {/* Map through the first 2 contact locations (Head Office & Corporate Office) */}
            {contactLists.slice(0, 2).map((location, index) => (
              <div
                key={location.id}
                className="lg:h-[80vh] flex flex-col lg:flex-row relative"
              >
                {/* Location card section */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* Map Container with Hover Trigger */}
                  <div className="group w-full h-full relative overflow-hidden">
                    <Link
                      href={location.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/home/location.png"
                        alt={`${location.title} map`}
                        className={cn(
                          "w-full h-full object-cover object-right scale-100 group-hover:scale-[1.08] transition-all duration-1000 will-change-transform",
                          index % 2 === 0 ? "origin-right" : "origin-left",
                        )}
                      />
                    </Link>
                    <div
                      className={cn(
                        "absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-100 group-hover:opacity-0 transition-all duration-1000 will-change-transform",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-white via-transparent to-white opacity-100 group-hover:opacity-0 transition-all duration-1000 will-change-transform",
                      )}
                    />
                  </div>

                  {/* Location card section - Outside the group to prevent triggering map hover */}
                  <div
                    className={cn(
                      "absolute z-10 top-1/2 -translate-y-1/2 lg:w-1/3 lg:h-fit my-auto bg-white rounded-xl flex lg:flex-col gap-2 lg:gap-4 overflow-hidden pointer-events-auto",
                      index % 2 === 0 ? "left-0" : "right-0",
                    )}
                  >
                    <div className="">
                      <img
                        src="/images/baby/baby19.png"
                        alt=""
                        className="w-full h-60 object-cover hidden lg:block"
                      />
                    </div>
                    <div className="h-full flex flex-col justify-between gap-4 p-4">
                      <div className="space-y-4">
                        <p className="text-lg md:text-xl xl:text-2xl font-semibold">
                          {location.title}
                        </p>

                        <div className="flex flex-col gap-4">
                          <Link
                            href={location.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-4"
                          >
                            <Icon
                              icon={location.icon}
                              className={cn(
                                "size-6 shrink-0",
                                isPersonal ? "text-black" : "text-black",
                              )}
                            />
                            <p className="xl:text-lg hover:underline">
                              {location.desc}
                            </p>
                          </Link>
                        </div>
                      </div>

                      <Link
                        href={location.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "rounded-full py-3 px-6 border text-center cursor-pointer transition-colors duration-300",
                        )}
                      >
                        Take me there
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;
