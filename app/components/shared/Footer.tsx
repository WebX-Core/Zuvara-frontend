"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { contactLists, socialLinks } from "@/constants";
import { use, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const pathname = usePathname();
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const footerSections = [
    {
      title: "Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Baby Products", href: "/babyCareProduct" },
        { label: "Baby Gear", href: "/clothing" },
        { label: "Personal Care", href: "/personalCareProduct" },
        { label: "Contact Us", href: "/contact" },
      ].filter((link) => {
        // Handle hydration flash for neutral pages
        if (!isMounted && (pathname === "/blogs" || pathname === "/contact")) {
          return ["Home", "Contact Us"].includes(link.label);
        }

        if (activeSection === "baby") {
          return link.label !== "Personal Care";
        }
        if (activeSection === "personal") {
          return link.label !== "Baby Products" && link.label !== "Baby Gear";
        }
        return true;
      }),
    },
  ];

  return (
    <footer>
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl pt-8 pb-16 lg:pb-0 lg:pt-16">
        {/* Section Switcher */}
        <div className="flex justify-center my-4 lg:my-8 w-full">
          <Link
            href={!isPersonal ? "/personalCare" : "/babyCare"}
            className={cn(
              "group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 border bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 w-full lg:w-fit",
              isPersonal ? "border-personalCare/50" : "border-babyCare/50",
            )}
          >
            <div
              className={cn(
                "size-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-sm",
                isPersonal ? "bg-personalCare" : "bg-babyCare",
              )}
            >
              <img
                src={
                  isPersonal ? "/icons/xl.png" : "/icons/sanitary-napkin.png"
                }
                alt=""
                className={cn("size-8", isPersonal ? "invert" : "")}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-zinc-900">
                Switch to {!isPersonal ? "Personal Care" : "Baby Care"}
              </p>
              <p className="text-xs text-zinc-600 font-medium">
                Browse {!isPersonal ? "Skin & Health" : "Baby"} products
              </p>
            </div>
            <Icon
              icon="icon-park-outline:switch"
              className={cn(
                "group-hover:translate-x-1 transition-transform",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
              width={24}
            />
          </Link>
        </div>

        <div
          className={cn(
            "flex flex-col gap-2 text-center md:text-left md:flex-row items-center justify-between rounded-lg md:rounded-full p-4 md:p-2",
            isPersonal
              ? "bg-ternary text-white"
              : "bg-linear-to-l from-foreground to-secondary text-white",
          )}
        >
          <h3 className="text-xl md:pl-4">
            Zuvara would be the perfect choice for your baby care needs!
          </h3>
          <Link
            href="/shop"
            className={cn(
              "bg-white px-4 py-2 rounded-full font-semibold hover:text-white! transition flex items-center gap-2",
              isPersonal
                ? "text-personalCare! hover:bg-personalCare"
                : "text-foreground! hover:bg-secondary",
            )}
          >
            <Icon icon="bitcoin-icons:cart-filled" width="24" height="24" />
            Shop Now
          </Link>
        </div>

        {/* Newsletter & Contact Section */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* quick links */}
          {!isSmallerDevice && (
            <div className="">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3
                    className={cn(
                      "text-sm lg:text-base font-semibold mb-2 lg:mb-4",
                      isPersonal ? "text-personalCare" : "text-foreground",
                    )}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-1 lg:space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-sm lg:text-base hover:text-foreground! hover:underline! transition whitespace-nowrap",
                            isPersonal ? "text-zinc-600!" : "text-zinc-600!",
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {/* Visit Us */}
          <div>
            <h3
              className={cn(
                "text-sm lg:text-base font-semibold mb-2 lg:mb-4",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Visit Us
            </h3>
            <div className="flex flex-row lg:flex-col gap-4">
              {contactLists.slice(0, 2).map((contact) => (
                <div key={contact.id} className="">
                  <p className="font-semibold lg:font-normal">
                    {contact.title}
                  </p>
                  <Link href={contact.link}>
                    <p className="text-sm hover:underline">{contact.desc}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
            </Link>
            <p className="text-sm text-zinc-700">
              Subscribe to get special offers and updates on new arrivals.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className={cn(
                  "w-full px-3 py-2 border border-zinc-200 text-sm focus:outline-none rounded-full",
                  isPersonal
                    ? "focus:border-personalCare"
                    : "focus:border-foreground",
                )}
              />
              <button
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 right-1 rounded-full text-white transition",
                  isPersonal ? "bg-personalCare" : "bg-foreground",
                )}
              >
                <Icon icon="iconamoon:arrow-right-2-light" className="size-8" />
              </button>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-8">
              {socialLinks.map((social) => (
                <Link href={social.link} key={social.id} className="">
                  {/* <Icon icon={social.icon} width={32} height={32} /> */}
                  <Icon
                    icon={social.icon}
                    className="size-6 cursor-pointer scale-100 hover:scale-[1.4] transition-all duration-500"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-200 py-3 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-zinc-700 group">
          <p>
            &copy; Copyright {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">ZUVARA</span>
            <span className="ml-2">All rights reserved.</span>
          </p>

          <div className="flex items-center gap-2">
            Design and Developed by
            <Link
              href="https://webxnepal.com/"
              target="_blank"
              className="hover:text-zinc-900 transition flex gap-2 items-center"
            >
              <Image
                src="/webx.png"
                alt="WebX Nepal Logo"
                width={50}
                height={90}
                className="font-semibold group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
