"use client";

import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down (only hide after scrolling past 100px)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        mass: 1.2,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        mass: 1.2,
      },
    },
  };
  const tabNavVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hidden: {
      y: 100,
      transition: {
        duration: 0.6,
      },
    },
  };
  const menuItems = [
    { label: "Baby Care", href: "/babyCareProduct" },
    { label: "Personal Care", href: "/personalCareProduct" },
    { label: "Clothing", href: "/clothing" },
    { label: "Blogs", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const mobileMenuItems = [
    { label: "Home", href: "/", icon: "material-symbols:home-rounded" },
    // { label: "Search", href: "#", icon: "iconamoon:search-light" },
    {
      label: "Product",
      href: "/product",
      icon: "fluent:cart-20-filled",
      badge: 1,
    },
    {
      label: "Whatsapp",
      href: "https://wa.me/9801018656",
      icon: "dashicons:whatsapp",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        variants={navbarVariants}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
        className="hidden lg:block fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200 "
      >
        <div className="px-4 sm:px-6 lg:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col justify-between items-center h-auto gap-4 py-3">
            {/* Logo - Left */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2 items-center">
                <Icon icon="mdi:headset" width={20} height={20} />
                <h3 className="font-medium text-sm">Customer Support</h3>
              </div>
              <Link href="/" className="flex items-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Zuvara Logo"
                  width={90}
                  height={90}
                />
              </Link>
              <div className="flex items-center gap-4 ">
                <button className=" hover:text-zinc-900 transition">
                  <Icon icon="si:search-duotone" width="24" height="24" />
                </button>

                <button className="hover:text-zinc-900 transition relative">
                  <Icon icon="logos:whatsapp-icon" width="24" height="24" />
                </button>
              </div>
            </div>

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
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Top */}
      <motion.nav
        variants={navbarVariants}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
        className="lg:hidden fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3 shadow-md"
      >
        <div className="flex justify-between items-center h-full px-4">
          {/* Humburger */}
          {/* <Icon
            icon="material-symbols:menu-rounded"
            className="text-3xl font-semibold"
          /> */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
          </Link>

          {/* <div className="flex gap-4"> */}
          {/* Search Icon */}
          <button className="flex items-center">
            <Icon icon="iconamoon:search-light" width="24" height="24" />
          </button>

          {/* <Icon icon="logos:whatsapp-icon" width="24" height="24" /> */}
          {/* </div> */}
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation - App Style */}
      <motion.nav
        variants={tabNavVariants}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
        className="lg:hidden fixed bottom-0 w-full z-50 bg-transparent border-t border-zinc-200 py2"
      >
        <div className="flex justify-between items-center w-full bg-white">
          {mobileMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-1 rounded-full hover:bg-zinc-100 transition px-4 py-2 ${
                  isActive ? "" : ""
                }`}
              >
                <Icon
                  icon={item.icon}
                  width="24"
                  height="24"
                  className={`text-2xl ${isActive ? "text-secondary" : ""}`}
                />
                <span
                  className={`text-sm font-medium relative ${isActive ? "text-secondary" : ""}`}
                >
                  {item.label}
                </span>
                {/* {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 text-xs rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )} */}
              </Link>
            );
          })}
        </div>
      </motion.nav>

      {/* Spacers for fixed navbars */}
      <div className="h-14 lg:h-16" />
    </>
  );
}
