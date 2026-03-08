"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

import { babyCareProducts } from "@/constants/babyCareProduct";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";

/* ───────────────────────── Types (NO any) ───────────────────────── */

type SearchItemType = "baby-care" | "clothing" | "stroller";

type SearchItem = {
  id: string | number;
  name: string;
  category: string;
  image: string;
  type: SearchItemType;
  href: string;
};

/* ───────────────────────── Component ───────────────────────── */

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, startTransition] = useTransition();

  const { activeSection } = useSection();
  const pathname = usePathname();

  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const topBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const handRef = useRef<HTMLImageElement>(null);
  const handShadowRef = useRef<HTMLDivElement>(null);
  const randomTimerRef = useRef<number | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  const isBabySection = activeSection === "baby";
  const isPersonalSection = activeSection === "personal";

  const homeHref = isBabySection
      ? "/babyCare"
      : isPersonalSection
          ? "/personalCare"
          : "/";

  /* ───────────────────────── Hand animation (baby tapping) ───────────────────────── */

  const playLogoHand = () => {
    if (!isBabySection) return;

    const hand = handRef.current;
    const shadow = handShadowRef.current;
    const bar = topBarRef.current;
    const logo = logoRef.current;
    if (!hand || !shadow || !bar || !logo) return;

    if (isPlayingRef.current) return;
    isPlayingRef.current = true;

    const barRect = bar.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    const handSize = 60;
    const baseX = logoRect.left - barRect.left + logoRect.width / 2 - handSize / 2;
    const logoTopInBar = logoRect.top - barRect.top;
    const enterY = logoTopInBar + logoRect.height * 0.18;
    const tapY = logoTopInBar + logoRect.height * 0.5;
    const shadowBaseX = baseX + handSize / 2 - 22;
    const shadowY = tapY + 34;
    const taps = Math.floor(Math.random() * 2) + 2; // 2–3 taps
    const entryY = 60;
    const tapDownDuration = 0.4;
    const tapUpDuration = 0.4;
    const swayDuration = 0.3;

    gsap.killTweensOf(hand);
    gsap.killTweensOf(shadow);

    gsap.set(hand, {
      autoAlpha: 1,
      x: baseX,
      y: enterY,
      rotate: 180 + gsap.utils.random(-4, 4),
      scale: 1,
      transformOrigin: "top center",
    });
    gsap.set(shadow, {
      autoAlpha: 0,
      x: shadowBaseX,
      y: shadowY,
      scaleX: 0.78,
      scaleY: 0.72,
      transformOrigin: "center center",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(hand, {
          autoAlpha: 1,
          x: baseX,
          y: -150,
          scaleX: 1,
          scaleY: 1,
          rotate: 180,
        });
        gsap.set(shadow, {
          autoAlpha: 0,
          x: shadowBaseX,
          y: shadowY,
          scaleX: 0.78,
          scaleY: 0.72,
        });
        isPlayingRef.current = false;
      },
    });

    tl.to(hand, {
      y: entryY,
      duration: 0.42,
      ease: "sine.out",
    }).to(
      shadow,
      {
        autoAlpha: 0.2,
        duration: 0.42,
        ease: "sine.out",
      },
      "<",
    );

    for (let i = 0; i < taps; i++) {
      const hitX = baseX + gsap.utils.random(-7, 7);
      const riseX = baseX + gsap.utils.random(-5, 5);

      // tap down
      tl.to(hand, {
        x: hitX,
        y: tapY,
        scaleX: 1.04,
        scaleY: 0.92,
        rotate: 180 + gsap.utils.random(-6, 6),
        duration: tapDownDuration,
        ease: "sine.in",
      }).to(
        shadow,
        {
          x: shadowBaseX + gsap.utils.random(-3, 3),
          autoAlpha: 0.44,
          scaleX: 1.08,
          scaleY: 0.96,
          duration: tapDownDuration,
          ease: "sine.in",
        },
        "<",
      );

      // lift up a bit
      tl.to(hand, {
        x: riseX,
        y: entryY,
        scaleX: 1,
        scaleY: 1,
        rotate: 180 + gsap.utils.random(-4, 4),
        duration: tapUpDuration,
        ease: "sine.out",
      }).to(
        shadow,
        {
          x: shadowBaseX + gsap.utils.random(-2, 2),
          autoAlpha: 0.2,
          scaleX: 0.84,
          scaleY: 0.76,
          duration: tapUpDuration,
          ease: "sine.out",
        },
        "<",
      );

      // tiny side sway so it feels playful
      tl.to(hand, {
        x: baseX + gsap.utils.random(-6, 6),
        duration: swayDuration,
        ease: "sine.inOut",
      }).to(
        shadow,
        {
          x: shadowBaseX + gsap.utils.random(-2, 2),
          duration: swayDuration,
          ease: "sine.inOut",
        },
        "<",
      );
    }

    // fly away
    tl.to(hand, {
      y: -150,
      x: baseX + gsap.utils.random(-8, 8),
      duration: 0.5,
      ease: "power3.in",
    }).to(
      shadow,
      {
        autoAlpha: 0,
        scaleX: 0.78,
        scaleY: 0.72,
        duration: 0.3,
        ease: "sine.in",
      },
      "<",
    );
  };

  useEffect(() => {
    const startLoop = () => {
      const delay = 9000 + Math.random() * 2000; // 9–11 seconds

      randomTimerRef.current = window.setTimeout(() => {
        if (!isPlayingRef.current) playLogoHand();
        startLoop();
      }, delay);
    };

    startLoop();

    return () => {
      if (randomTimerRef.current) clearTimeout(randomTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isSmallerDevice) return;
    if (!pathname.startsWith("/babyCare")) return;

    const timer = window.setTimeout(() => {
      if (!isPlayingRef.current) playLogoHand();
    }, 450);

    return () => window.clearTimeout(timer);
  }, [pathname, isSmallerDevice]);

  /* ───────────────────────── Search logic (NO any) ───────────────────────── */

  const allProducts: SearchItem[] = useMemo(() => {
    const baby = babyCareProducts.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category ?? "Baby Care",
      image: (p.variants?.[0]?.image ??
          p.image ??
          "/placeholder.png") as string,
      type: "baby-care" as const,
      href: `/babyCareProduct/${p.slug}`,
    }));

    const cloth = clothingProducts.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category ?? "Baby Gear",
      image: (p.variants?.[0]?.image ??
          p.image ??
          "/placeholder.png") as string,
      type: "clothing" as const,
      href: `/clothing/${p.slug}`,
    }));

    const stroller = strollerRockerProducts.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category ?? "Stroller",
      image: (p.variants?.[0]?.image ??
          p.image ??
          "/placeholder.png") as string,
      type: "stroller" as const,
      href: `/strollerRockerProduct/${p.slug}`,
    }));

    return [...baby, ...cloth, ...stroller];
  }, []);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return q
        ? allProducts
            .filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q),
            )
            .slice(0, 5)
        : [];
  }, [searchQuery, allProducts]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
          searchRef.current &&
          !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) setIsVisible(true);
      else if (currentScrollY > lastScrollY && currentScrollY > 100)
        setIsVisible(false);

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
    visible: { y: 0, transition: { duration: 0.6 } },
    hidden: { y: 100, transition: { duration: 0.6 } },
  };

  const menuItems = [
    { label: "Home", href: homeHref },
    { label: "Baby Products", href: "/babyCareProduct" },
    { label: "Personal Care", href: "/personalCareProduct" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ];

  const filteredMenuItems = menuItems.filter((item) => {
    if (activeSection === "baby") {
      if (item.label === "Personal Care") return false;
      if (isSmallerDevice && item.label === "Baby Gear") return false;
    }

    if (activeSection === "personal") {
      if (item.label === "Baby Products") return false;
    }

    return true;
  });

  const checkIsActive = (href: string) => {
    if (!href || href === "#") return false;

    if (href === "/clothing" && pathname.startsWith("/strollerRockerProduct"))
      return true;

    if (href === "/babyCareProduct" && pathname.startsWith("/babyCareProduct"))
      return true;

    if (pathname === href) return true;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href + "/");
  };

  const mobileMenuItems = [
    { label: "Home", href: homeHref, icon: "material-symbols:home-rounded" },
    {
      label: "Product",
      href: isPersonalSection ? "/personalCareProduct" : "/babyCareProduct",
      icon: "fluent:cart-20-filled",
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
            className="hidden lg:block fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200"
        >
          <div className="px-4 sm:px-6 lg:px-6 max-w-[90%] mx-auto">
            <div className="flex flex-col justify-between items-center h-auto gap-4 py-3">
              {/* TOP BAR */}
              <div
                  ref={topBarRef}
                  className="flex items-center justify-between w-full relative overflow-visible"
              >
                <Image
                    ref={handRef}
                    src="/babyHand.png"
                    alt="baby hand"
                    width={60}
                    height={60}
                    className="absolute top-0 left-0 pointer-events-none z-50 select-none opacity-0 will-change-transform"
                />
                <div
                    ref={handShadowRef}
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-3 w-11 rounded-full pointer-events-none z-40 opacity-0 will-change-transform"
                    style={{
                      backgroundColor: "rgba(36, 104, 94, 0.45)",
                      filter: "blur(7px)",
                    }}
                />

                <div className="flex-1 flex items-center justify-start gap-2">
                  <Icon
                      icon="mdi:headset"
                      className={cn(
                          "size-5",
                          isPersonalSection ? "text-personalCare" : "text-foreground",
                      )}
                  />
                  <h3 className="font-medium text-sm">Customer Support</h3>
                </div>

                <Link
                    ref={logoRef}
                    href="/"
                    onMouseEnter={playLogoHand}
                    onClick={playLogoHand}
                    className="flex items-center shrink-0"
                >
                  <Image
                      src="/logo/logo.png"
                      alt="Zuvara Logo"
                      width={90}
                      height={90}
                      className="object-contain"
                      priority
                  />
                </Link>

                <div
                    className="flex-1 flex items-center justify-end gap-4"
                    ref={!isSmallerDevice ? searchRef : null}
                >
                  <div className="relative flex items-center">
                    <AnimatePresence>
                      {isSearchOpen && (
                          <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: 240, opacity: 1 }}
                              exit={{ width: 0, opacity: 0 }}
                              className="overflow-hidden mr-2"
                          >
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-60 px-3 py-1.5 bg-zinc-100 rounded-xl text-sm outline-none focus:ring-1 focus:ring-babyCare/30"
                                autoFocus
                            />
                          </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="hover:text-zinc-900 transition flex items-center"
                        aria-label={isSearchOpen ? "Close search" : "Open search"}
                    >
                      <Icon
                          icon={
                            isSearchOpen
                                ? "material-symbols:close-rounded"
                                : "mingcute:search-line"
                          }
                          className={cn(
                              "size-6",
                              isPersonalSection
                                  ? "text-personalCare"
                                  : "text-foreground",
                          )}
                      />
                    </button>

                    <AnimatePresence>
                      {isSearchOpen && filteredProducts.length > 0 && (
                          <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full right-0 mt-4 w-75 bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden z-60"
                          >
                            <div className="p-2 space-y-1">
                              {filteredProducts.map((product) => (
                                  <Link
                                      key={`${product.type}-${product.id}`}
                                      href={product.href}
                                      onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchQuery("");
                                      }}
                                      className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-xl transition-colors group"
                                  >
                                    <div className="size-10 bg-zinc-100 rounded-lg shrink-0 relative overflow-hidden">
                                      <img
                                          src={product.image}
                                          alt={product.name}
                                          className="size-full object-contain p-1 group-hover:scale-110 transition-transform"
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-xs font-bold text-zinc-900 truncate">
                                        {product.name}
                                      </p>
                                      <p className="text-[10px] text-zinc-500 font-medium lowercase">
                                        {product.category}
                                      </p>
                                    </div>
                                  </Link>
                              ))}
                            </div>
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative group">
                    <Link
                        href={!isPersonalSection ? "/personalCare" : "/babyCare"}
                        onMouseEnter={() => setIsTooltipVisible(true)}
                        onMouseLeave={() => setIsTooltipVisible(false)}
                        className="flex items-center"
                    >
                      <Icon
                          icon="ri:exchange-line"
                          className={cn(
                              "size-6",
                              isPersonalSection
                                  ? "text-personalCare"
                                  : "text-foreground",
                          )}
                      />
                    </Link>

                    <AnimatePresence>
                      {isTooltipVisible && (
                          <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className={cn(
                                  "absolute top-full right-0 mt-3 px-3 py-1.5 text-white text-sm font-bold rounded-lg shadow-xl whitespace-nowrap z-70 pointer-events-none",
                                  isPersonalSection ? "bg-personalCare" : "bg-babyCare",
                              )}
                          >
                            <div
                                className={cn(
                                    "absolute -top-1 right-3 size-2 rotate-45",
                                    isPersonalSection
                                        ? "bg-personalCare"
                                        : "bg-babyCare",
                                )}
                            />
                            Switch to{" "}
                            {isPersonalSection ? "Baby Care" : "Personal Care"}
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                      className="hover:text-zinc-900 transition relative"
                      aria-label="Whatsapp"
                  >
                    <Icon
                        icon="uil:whatsapp"
                        className={cn(
                            "size-6",
                            isPersonalSection
                                ? "text-personalCare"
                                : "text-foreground",
                        )}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-8">
                {filteredMenuItems.map((item) => {
                  const isActive = checkIsActive(item.href);
                  return (
                      <Link
                          key={item.label}
                          href={item.href}
                          className={cn(
                              "text-sm font-medium transition whitespace-nowrap",
                              isActive
                                  ? isPersonalSection
                                      ? "text-personalCare! border-b-2"
                                      : "text-foreground! border-b-2"
                                  : "",
                          )}
                      >
                        {item.label}
                      </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Navbar - Top */}
        {isSmallerDevice && (
            <motion.nav
                variants={navbarVariants}
                animate={isVisible ? "visible" : "hidden"}
                initial="visible"
                className="fixed top-0 w-full z-120 bg-white/80 backdrop-blur-md border-b border-zinc-200"
            >
              <div
                  className="flex justify-between items-center h-full px-4"
                  ref={isSmallerDevice ? searchRef : null}
              >
                <Link href="/" className="flex items-center">
                  <Image
                      src="/logo/logo.png"
                      alt="Zuvara Logo"
                      width={90}
                      height={90}
                      className="object-contain"
                      priority
                  />
                </Link>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="py-2 hover:bg-zinc-100 rounded-full transition"
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
              </div>
            </motion.nav>
        )}

        {/* Mobile Sidebar Menu */}
        <AnimatePresence>
          {isMenuOpen && (
              <div className="lg:hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-100 top-0"
                />

                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 bottom-0 w-[70%] pt-12 max-w-sm bg-white z-110 shadow-xl p-4 flex flex-col border-r border-zinc-100"
                >
                  <div className="flex flex-col gap-0">
                    {filteredMenuItems.map((item, index) => {
                      const isActive = checkIsActive(item.href);
                      return (
                          <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                          >
                            <Link
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "transition flex items-center justify-between p-2 rounded-lg",
                                    isActive
                                        ? isPersonalSection
                                            ? "bg-personalCare/50 text-white!"
                                            : "bg-babyCare"
                                        : "text-zinc-800 hover:bg-zinc-50",
                                )}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                      );
                    })}

                    {(isBabySection || isPersonalSection) && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + filteredMenuItems.length * 0.1 }}
                            className="pt-4 mt-2 border-t border-zinc-100"
                        >
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3 px-2">
                            Switch to
                          </p>
                          <Link
                              href={isBabySection ? "/personalCare" : "/babyCare"}
                              onClick={() => setIsMenuOpen(false)}
                              className={cn(
                                  "group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 border",
                                  isPersonalSection
                                      ? "bg-personalCare/5 border-personalCare/10 hover:bg-personalCare/10"
                                      : "bg-babyCare/10 border-babyCare/20 hover:bg-babyCare/40",
                              )}
                          >
                            <div
                                className={cn(
                                    "size-10 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110",
                                    isPersonalSection ? "bg-personalCare" : "bg-babyCare",
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
                                icon="icon-park-outline:switch"
                                className="text-zinc-400"
                            />
                          </Link>
                        </motion.div>
                    )}

                    <div className="pt-4 border-t border-zinc-100">
                      <div className="flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.1 + (filteredMenuItems.length + 1) * 0.1,
                            }}
                            className="flex items-center gap-3 text-zinc-600"
                        >
                          <Icon icon="mdi:headset" width={20} />
                          <span className="text-sm">Customer Support</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.1 + (filteredMenuItems.length + 2) * 0.1,
                            }}
                            className="flex items-center gap-3 text-zinc-600"
                        >
                          <Icon icon="logos:whatsapp-icon" width={20} />
                          <span className="text-sm">+977 9876543210</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

        {/* Mobile Bottom Navigation */}
        <motion.nav
            variants={tabNavVariants}
            animate={isVisible ? "visible" : "hidden"}
            initial="visible"
            className="lg:hidden fixed bottom-0 w-full z-50 bg-transparent border-t border-zinc-200"
        >
          <div className="grid grid-cols-3 w-full bg-white">
            {mobileMenuItems.map((item) => {
              const isActive = checkIsActive(item.href);
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
                      className={cn(
                          "relative flex items-center justify-center gap-1 rounded-full hover:bg-zinc-100 transition px-4 py-4",
                          isActive
                              ? isPersonalSection
                                  ? "bg-ternary/30 py-2"
                                  : "bg-babyCare/50 py-2"
                              : "",
                      )}
                  >
                    <Icon
                        icon={item.icon}
                        width="28"
                        height="28"
                        className={cn(
                            "text-2xl",
                            finalIsActive
                                ? isPersonalSection
                                    ? "text-personalCare"
                                    : "text-foreground"
                                : "text-zinc-400",
                        )}
                    />

                    {isActive && (
                        <span
                            className={cn(
                                "text-sm whitespace-nowrap font-medium relative",
                                finalIsActive
                                    ? isPersonalSection
                                        ? "text-personalCare"
                                        : "text-foreground"
                                    : "",
                            )}
                        >
                    {item.label}
                  </span>
                    )}
                  </Link>
              );
            })}
          </div>
        </motion.nav>

        <div className="h-14 lg:h-16" />
      </>
  );
}
