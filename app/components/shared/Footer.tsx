"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { contactLists, socialLinks } from "@/constants";

import CrawlingBaby from "./CrawlingBaby";

export default function Footer() {
  const pathname = usePathname();
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [gameFrameKey, setGameFrameKey] = useState(0);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [hasWonGame, setHasWonGame] = useState(false);
  const logoSrc = isPersonal ? "/logo/logo_secondary.svg" : "/logo/logo.png";
  const isMounted = true;

  const footerSections = [
    {
      title: "Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Baby Products", href: "/babyCareProduct" },
        { label: "Baby Gear", href: "/clothing" },
        { label: "Personal Care", href: "/personalCareProduct" },
        { label: "Blogs", href: "/blogs" },
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

  const productsSection = [
    {
      title: "Products",
      links: isPersonal
        ? [
            {
              label: "Period Panties",
              href: "/personalCareProduct/period-panties",
            },
            {
              label: "Sanitary Pads",
              href: "/personalCareProduct/sanitary-pads",
            },
          ]
        : [
            {
              label: "Supreme Diapers",
              href: "/babyCareProduct/supreme-diapers",
            },
            {
              label: "Premium Diapers & Pants",
              href: "/babyCareProduct/premium-diapers-pants",
            },
            {
              label: "Feather Diaper Tape",
              href: "/babyCareProduct/feather-diaper-tape",
            },
            {
              label: "Value Diapers & Pants",
              href: "/babyCareProduct/value-diapers-pants",
            },
            {
              label: "Moisturising Tissue",
              href: "/babyCareProduct/moisturising-tissue",
            },
            {
              label: "Value Wet Wipes",
              href: "/babyCareProduct/value-wet-wipes",
            },
          ],
    },
  ];

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (!event.data || event.data.type !== "angry-birds-win") return;
      if (hasWonGame) return;

      setHasWonGame(true);
      setIsDiscountOpen(true);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [hasWonGame]);

  return (
    <footer
      className={cn(
        "relative overflow-visible w-full",
        isPersonal ? "bg-[#f4e8fc]" : "bg-white",
      )}
    >
      <div className="relative z-10 container mx-auto max-w-7xl px-4 lg:px-0  pb-16 lg:pb-0">
        {/* Section Switcher */}
        <div className="flex justify-center  w-full py-4">
          <Link
            href={!isPersonal ? "/personalCare" : "/babyCare"}
            className={cn(
              "group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 border bg-white/60 backdrop-blur-sm hover:bg-white/80 w-full lg:w-fit",
              isPersonal ? "border-personalCare/50" : "border-babyCare/50",
            )}
          >
            <div
              className={cn(
                "size-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-sms",
                isPersonal ? "bg-personalCare" : "bg-babyCare",
              )}
            >
              <Image
                src={
                  isPersonal ? "/icons/xl.png" : "/icons/sanitary-napkin.png"
                }
                alt={isPersonal ? "Personal care icon" : "Baby care icon"}
                width={32}
                height={32}
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
            "relative flex flex-col gap-3 text-center md:text-left md:flex-row items-center md:items-center justify-between rounded-2xl md:rounded-full p-4 md:p-2",
            isPersonal
              ? "bg-ternary text-white"
              : "bg-foreground text-babyCare",
          )}
        >
          <CrawlingBaby />
          <h3 className="text-lg sm:text-xl md:pl-4 font-medium">
            {isPersonal
              ? "Zuvara would be the perfect choice for your personal care needs!"
              : "Zuvara would be the perfect choice for your baby care needs!"}
          </h3>
          <Link
            href={isPersonal ? "/personalCareProduct" : "/babyCareProduct"}
            className={cn(
              "bg-white px-4 py-2 rounded-full font-bold transition flex items-center gap-2 shrink-0",
              isPersonal
                ? "text-personalCare! hover:bg-white/70 hover:text-foreground"
                : "text-foreground! hover:bg-babyCare hover:text-foreground",
            )}
          >
            <Icon icon="bitcoin-icons:cart-filled" width="24" height="24" />
            {isPersonal ? "View Personal Products" : "View Baby Products"}
          </Link>
        </div>

        {/* Newsletter & Contact Section */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4  ">
            <Link href="/" className="flex items-center shrink-0">
              <Image src={logoSrc} alt="Zuvara Logo" width={90} height={90} />
            </Link>
            <p className="text-sm text-zinc-700">
              Subscribe to get special offers and updates on new arrivals.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className={cn(
                  "w-full px-3 py-2 border-2 border-zinc-800 text-sm focus:outline-none rounded-full",
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

            <div className="flex items-center justify-center gap-5 lg:justify-start">
              {socialLinks.map((social) => {
                const title = social.title.toLowerCase();
                const SocialIcon = title.includes("whatsapp")
                  ? FaWhatsappSquare
                  : title.includes("facebook")
                    ? FaFacebookSquare
                    : title.includes("instagram")
                      ? FaInstagramSquare
                      : title.includes("linkedin")
                        ? FaLinkedin
                        : FaWhatsappSquare;

                return (
                  <Link
                    href={social.link}
                    key={social.id}
                    aria-label={social.title}
                    className={cn(
                      "inline-flex items-center justify-center transition-transform duration-300 hover:scale-110",
                      "text-zinc-900 opacity-95 hover:opacity-100",
                    )}
                  >
                    <SocialIcon className="size-5" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            {productsSection.map((section, index) => (
              <div key={index}>
                <h3
                  className={cn(
                    "text-sm lg:text-base font-bold mb-2 lg:mb-4",
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
                          "text-sm lg:text-base font-medium hover:text-foreground! hover:underline! transition whitespace-nowrap",
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
          {/* Quick links */}
          <div>
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3
                  className={cn(
                    "text-sm lg:text-base font-bold mb-2 lg:mb-4",
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
                          "text-sm lg:text-base font-medium hover:text-foreground! hover:underline! transition whitespace-nowrap",
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

          {/* Visit Us */}
          <div>
            <h3
              className={cn(
                "text-sm lg:text-base font-bold mb-2 lg:mb-4",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Visit Us
            </h3>
            <div className="flex flex-col gap-4">
              {contactLists.slice(0, 2).map((contact) => (
                <div key={contact.id}>
                  <p className="font-medium">{contact.title}</p>
                  <Link href={contact.link}>
                    <p className="text-sm font-medium hover:underline ">
                      {contact.desc}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
        </div>
      </div>

      {isGameOpen ? (
        <div className="fixed inset-0 z-120 flex items-center justify-center bg-black/70 p-4">
          <div className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => {
                setGameFrameKey((prev) => prev + 1);
                setHasWonGame(false);
                setIsDiscountOpen(false);
              }}
              className="absolute right-20 top-3 z-10 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black"
            >
              Restart
            </button>
            <button
              onClick={() => setIsGameOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black"
            >
              Close
            </button>
            <iframe
              key={gameFrameKey}
              src="/games/angry-birds/index.html"
              title="Angry Birds Game"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      ) : null}

      {isDiscountOpen ? (
        <div className="fixed inset-0 z-130 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="text-xl font-semibold text-zinc-900">
              You won 5% discount
            </h3>
            {!isPersonal ? (
              <div className="mt-4 flex justify-center">
                <Image
                  src="/PRODUCTS/Baby/premium-diapers/product.png"
                  alt="Premium diaper pack"
                  width={180}
                  height={180}
                  className="h-auto w-28 drop-shadow-md sm:w-36"
                />
              </div>
            ) : null}
            <p className="mt-3 text-sm text-zinc-600">
              You won 5% discount in this product. Use code{" "}
              <span className="rounded bg-zinc-100 px-2 py-1 font-semibold text-zinc-900">
                ZUVARA2026
              </span>{" "}
              at checkout.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setIsDiscountOpen(false)}
                className="rounded-full  px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-500 hover:text-white"
              >
                Close
              </button>
              <Link
                href={isPersonal ? "/personalCareProduct" : "/babyCareProduct"}
                onClick={() => setIsDiscountOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold text-white!",
                  isPersonal ? "bg-personalCare" : "bg-foreground",
                )}
              >
                Claim Discount
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`relative flex items-center justify-center overflow-hidden h-auto `}
      >
        <div
          className={cn(
            "absolute bottom-0 w-full mt-10 pt-2 text-sm  px-6 flex flex-col md:flex-row justify-between gap-4",
            isPersonal ? "text-personalCare" : "text-baby-accent",
          )}
        >
          <div className="absolute inset-0 bg-linear-to-t from-gray-200 via-50% via-transparent to-transparent z-0" />
          <p className="font-medium z-10">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">ZUVARA</span> — All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="font-medium z-10">Design and Developed by</p>
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
                className="font-bold group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
