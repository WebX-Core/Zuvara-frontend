"use client";

import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection } = useSection();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

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
  const isBabySection = activeSection === "baby";
  const isPersonalSection = activeSection === "personal";

  const homeHref = isBabySection
    ? "/babyCare"
    : isPersonalSection
      ? "/personalCare"
      : "/";

  const menuItems = [
    { label: "Home", href: homeHref },
    { label: "Baby Care", href: "/babyCareProduct" },
    { label: "Personal Care", href: "/personalCareProduct" },
    { label: "Baby Gear", href: "/clothing" },
    // { label: "Blogs", href: "/blogs" },
    // { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    if (isBabySection && item.label === "Personal Care") return false;
    if (
      isPersonalSection &&
      (item.label === "Baby Care" || item.label === "Baby Gear")
    )
      return false;
    return true;
  });

  const checkIsActive = (href: string) => {
    if (!href || href === "#") return false;

    // Special case for Baby Gear (Clothing) to include Stroller/Rocker products
    if (href === "/clothing" && pathname.startsWith("/strollerRockerProduct")) {
      return true;
    }

    if (pathname === href) return true;
    if (href === "/") return pathname === "/";
    // Ensure we are matching a full path segment to avoid partial matches
    // e.g., /babyCare should not match /babyCareProduct
    return pathname.startsWith(href + "/");
  };

  const mobileMenuItems = [
    {
      label: "Home",
      href: homeHref,
      icon: "material-symbols:home-rounded",
    },
    {
      label: "Product",
      href: isPersonalSection ? "/personalCareProduct" : "/babyCareProduct",
      icon: "fluent:cart-20-filled",
    },
    ...(isBabySection
      ? [
          {
            label: "Baby Gear",
            href: "/clothing",
            icon: "material-symbols-light:apparel",
          },
        ]
      : []),
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
                  className="object-contain"
                  priority
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
              {filteredMenuItems.map((item) => {
                const isActive = checkIsActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition whitespace-nowrap ${
                      isActive ? "text-black" : "text-zinc-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="h-0.5 bg-black w-full rounded-full mt-0.5"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Top */}
      <motion.nav
        variants={navbarVariants}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
        className="lg:hidden fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-md"
      >
        <div className="flex justify-between items-center h-full px-4">
          {/* Humburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-zinc-100 rounded-full transition"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Icon
              icon={
                isMenuOpen
                  ? "material-symbols:close-rounded"
                  : "material-symbols:menu-rounded"
              }
              className="text-3xl font-semibold"
            />
          </button>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Zuvara Logo"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
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

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-[50px]"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-[50px] left-0 bottom-0 w-[70%] max-w-sm bg-white z-45 shadow-xl p-4 flex flex-col border-r border-zinc-100"
            >
              <div className="flex flex-col gap-4">
                {filteredMenuItems.map((item, index) => {
                  const isActive = checkIsActive(item.href);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-lg font-medium transition flex items-center justify-between p-2 rounded-lg ${
                          isActive
                            ? isPersonalSection
                              ? "bg-personalCare/50 text-personalCare"
                              : "bg-secondary/50 text-secondary"
                            : "text-zinc-800 hover:bg-zinc-50"
                        }`}
                      >
                        {item.label}
                        {/* <Icon icon="material-symbols:chevron-right-rounded" /> */}
                      </Link>
                    </motion.div>
                  );
                })}

                {(isBabySection || isPersonalSection) && (
                  <div className="pt-4 mt-2 border-t border-zinc-100">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3 px-2">
                      Switch to
                    </p>
                    <Link
                      href={isBabySection ? "/personalCare" : "/babyCare"}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 border",
                        isBabySection
                          ? "bg-personalCare/5 border-personalCare/10 hover:bg-personalCare/10"
                          : "bg-babyCare/10 border-babyCare/20 hover:bg-babyCare/20",
                      )}
                    >
                      <div
                        className={cn(
                          "size-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110",
                          isBabySection ? "bg-personalCare" : "bg-babyCare",
                        )}
                      >
                        <Icon
                          icon={
                            isBabySection
                              ? "material-symbols:face-retouching-natural-rounded"
                              : "mingcute:baby-fill"
                          }
                          width="24"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-zinc-900">
                          {isBabySection ? "Personal Care" : "Baby Care"}
                        </p>
                        <p className="text-[10px] text-zinc-500 font-medium">
                          Browse {isBabySection ? "Skin & Health" : "Baby"}{" "}
                          products
                        </p>
                      </div>
                      <Icon
                        icon="material-symbols:chevron-right-rounded"
                        className="text-zinc-400"
                      />
                    </Link>
                  </div>
                )}

                <div className="pt-4 border-t border-zinc-100">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-zinc-600">
                      <Icon icon="mdi:headset" width={20} />
                      <span className="text-sm">Customer Support</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600">
                      <Icon icon="logos:whatsapp-icon" width={20} />
                      <span className="text-sm">+977 9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation - App Style */}
      <motion.nav
        variants={tabNavVariants}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
        className="lg:hidden fixed bottom-0 w-full z-50 bg-transparent border-t border-zinc-200 py2"
      >
        <div className="flex justify-between items-center w-full bg-white">
          {mobileMenuItems.map((item) => {
            const isActive = checkIsActive(item.href);
            // Handle Home specially if it matches multiple candidates
            const isHomeActive =
              item.label === "Home" &&
              (pathname === "/" ||
                pathname === "/babyCare" ||
                pathname === "/personalCare");
            const finalIsActive = isActive || isHomeActive;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-1 rounded-full hover:bg-zinc-100 transition px-6 py-2 ${
                  finalIsActive
                    ? isPersonalSection
                      ? "bg-personalCare/20 ring ring-personalCare"
                      : "bg-secondary/20 ring ring-secondary"
                    : ""
                }`}
              >
                <Icon
                  icon={item.icon}
                  width="24"
                  height="24"
                  className={`text-2xl ${
                    finalIsActive
                      ? isPersonalSection
                        ? "text-personalCare"
                        : "text-secondary"
                      : ""
                  }`}
                />
                <span
                  className={`text-sm whitespace-nowrap font-medium relative ${
                    finalIsActive
                      ? isPersonalSection
                        ? "text-personalCare"
                        : "text-secondary"
                      : ""
                  }`}
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
