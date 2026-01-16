"use client";

import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { label: "Products", href: "#" },
    { label: "Baby Care", href: "#" },
    { label: "Kids Fashion", href: "#" },
    { label: "Home & Living", href: "#" },
    { label: "Articles", href: "#" },
    { label: "About", href: "#" },
    { label: "Support", href: "#" },
  ];

  const mobileMenuItems = [
    { label: "Home", href: "#", icon: "🏠" },
    { label: "Search", href: "#", icon: "🔍" },
    { label: "Cart", href: "#", icon: "🛍️", badge: 0 },
    { label: "Account", href: "#", icon: "👤" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200">
        <div className="px-4 sm:px-6 lg:px-6 max-w-5xl mx-auto">
          <div className="flex justify-between items-center h-16 gap-16">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
            </Link>

            {/* Desktop Menu - Center */}
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-black transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4 ">
              {/* Search Icon */}
              <button className=" hover:text-zinc-900 transition">
                <Icon icon="si:search-duotone" width="24" height="24" />
              </button>

              {/* Shopping Bag Icon */}
              <button className="hover:text-zinc-900 transition relative">
                <Icon icon="logos:whatsapp-icon" width="24" height="24" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Top */}
      <nav className="lg:hidden fixed top-0 w-full z-50 bg-white border-b border-zinc-200 h-14">
        <div className="flex justify-between items-center h-full px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Zuvara Logo" width={40} height={40} />
          </Link>

          {/* Title */}
          <h1 className="text-lg font-semibold">Zuvara</h1>

          {/* Search Icon */}
          <button className="p-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - App Style */}
      <nav className="lg:hidden fixed bottom-0 w-full z-50 bg-white border-t border-zinc-200">
        <div className="flex justify-around items-center h-20 px-2">
          {mobileMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-lg hover:bg-zinc-100 transition flex-1"
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="text-xs text-zinc-700 font-medium">
                {item.label}
              </span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacers for fixed navbars */}
      <div className="h-14 lg:h-16" />
      <div className="lg:hidden h-20" />
    </>
  );
}
