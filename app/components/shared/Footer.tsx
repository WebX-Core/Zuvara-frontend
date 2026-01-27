"use client";

import Link from "next/link";
import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/constants";

export default function Footer() {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  const footerSections = [
    // {
    //   title: "Shop & Learn",
    //   links: ["Store", "Men", "Women", "Kids", "Collections", "New Arrivals"],
    // },
    // {
    //   title: "Shopping",
    //   links: [
    //     "Size Charts",
    //     "Retail Store",
    //     "Track Order",
    //     "Returns",
    //     "Shipping Info",
    //   ],
    // },
    // {
    //   title: "Account",
    //   links: [
    //     "Manage Account",
    //     "My Orders",
    //     "Wishlist",
    //     "Gift Cards",
    //     "Loyalty Program",
    //   ],
    // },
    // {
    //   title: "About Zuvara",
    //   links: [
    //     "Our Story",
    //     "Our Difference",
    //     "Sustainability",
    //     "Newsroom",
    //     "Careers",
    //   ],
    // },
    // {
    //   title: "Customer Care",
    //   links: ["Contact Us", "FAQ", "Live Chat", "Email Support", "Call Us"],
    // },
    // {
    //   title: "Company",
    //   links: [
    //     "About Us",
    //     "Blog",
    //     "Privacy Policy",
    //     "Terms & Conditions",
    //     "Contact",
    //   ],
    // },
    {
      title: "Links",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Baby Products",
          href: "/babyCareProduct",
        },
        {
          label: "Baby Gear",
          href: "/clothing",
        },
        // {
        //   label: "Blogs",
        //   href: "/blogs",
        // },
        {
          label: "Contact Us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl pt-8 lg:pt-16">
        <div
          className={cn(
            "flex flex-col gap-2 text-center md:text-left md:flex-row items-center justify-between rounded-lg md:rounded-full p-4 md:p-2",
            isPersonal
              ? "bg-ternary text-zinc-200"
              : "bg-linear-to-l from-foreground to-secondary text-white",
          )}
        >
          <h3 className="text-xl md:pl-4">
            Zuvara would be the perfect choice for your baby care needs!
          </h3>
          <Link
            href="/shop"
            className={cn(
              "bg-white text-foreground! px-4 py-2 rounded-full font-semibold hover:text-white! transition flex items-center gap-2",
              isPersonal ? "hover:bg-personalCare" : "hover:bg-secondary",
            )}
          >
            <Icon icon="bitcoin-icons:cart-filled" width="24" height="24" />
            Shop Now
          </Link>
        </div>

        {/* Section Switcher */}
        <div className="flex justify-center my-8">
          <Link
            href={!isPersonal ? "/personalCare" : "/babyCare"}
            className={cn(
              "group flex items-center gap-4 p-3 pr-6 rounded-2xl transition-all duration-300 border bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg hover:-translate-y-1",
              !isPersonal ? "border-personalCare/20" : "border-babyCare/20",
            )}
          >
            <div
              className={cn(
                "size-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-sm",
                !isPersonal ? "bg-personalCare" : "bg-babyCare",
              )}
            >
              <Icon
                icon={
                  !isPersonal
                    ? "material-symbols:face-retouching-natural-rounded"
                    : "mingcute:baby-fill"
                }
                width="28"
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
              icon="material-symbols:chevron-right-rounded"
              className="text-zinc-500 group-hover:translate-x-1 transition-transform"
              width={24}
            />
          </Link>
        </div>

        {/* Newsletter & Contact Section */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Footer Content */}
          {/* <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8 py-8"> */}
          <div className="">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3
                  className={cn(
                    "text-sm font-semibold mb-2 lg:mb-4",
                    isPersonal ? "text-secondary" : "text-secondary",
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
                          "text-xs lg:text-sm hover:text-foreground! transition whitespace-nowrap",
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
            <h3 className="text-sm font-semibold mb-4 text-secondary">
              Visit Us
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">
                  Head Office
                </p>
                <p className="text-sm text-zinc-500">
                  4F, Mahabir Plaza, Hospital Chowk
                  <br />
                  Biratnagar, Nepal 56613
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">
                  Corporate Office
                </p>
                <p className="text-sm text-zinc-500">
                  2f, Bishal Nagar Marg, Hadigaun
                  <br />
                  Kathmandu-5, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          {/* <div>
            <h3 className="text-sm font-semibold mb-2 lg:mb-4 text-[#8cd700]!">
              Follow Us
            </h3>
            <p className="text-sm text-zinc-500 mb-4">
              Connect with us on social media for exclusive updates and offers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div> */}

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
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
                className="w-full px-3 py-2 border border-zinc-200 text-sm focus:outline-none focus:border-teal-600 rounded-full"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-teal-700 hover:bg-teal-800 rounded-full text-white p-2 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-8">
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
        <div className="border-t border-zinc-200 py-3 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-zinc-700 group">
          <p>
            &copy; Copyright {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">ZUVARA</span>
            <span className="ml-2">All rights reserved.</span>
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="hover:text-foreground! transition text-zinc-400!"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-foreground! transition text-zinc-400!"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://webxnepal.com/"
              target="_blank"
              className="hover:text-zinc-900 transition flex gap-2 items-center"
            >
              Design and Developed by{" "}
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
