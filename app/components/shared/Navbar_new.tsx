"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { X, Menu } from "lucide-react";

type NavItem = { label: string; path: string };

export const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Baby Care", path: "/babyCareProduct" },
    { label: "Baby Gear", path: "/clothing" },
    { label: "Blog", path: "/blogs" },
    { label: "Contact", path: "/contact" },
  ];

  const navRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLImageElement>(null);

  const hoverTl = useRef<gsap.core.Timeline | null>(null);
  const pressTl = useRef<gsap.core.Timeline | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const lastYRef = useRef<number>(0);
  const shownRef = useRef<boolean>(true);
  const rafRef = useRef<number | null>(null);

  const isDesktop = useMediaQuery({ minWidth: 768 });

  /* ───────────────── Hover / Press hand animation (unchanged) ───────────────── */

  const startHoverTap = (target: HTMLElement, item: string) => {
    const hand = handRef.current;
    const nav = navRef.current;
    if (!hand || !nav) return;

    hoverTl.current?.kill();

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const x = targetRect.left - navRect.left + targetRect.width / 2 - 30;

    hoverTl.current = gsap.timeline({ repeat: 2 });

    hoverTl.current
      .set(hand, {
        display: "block",
        x,
        y: -40,
        rotate: 180,
        scale: 1.05,
      })
      .to(hand, {
        scale: 0.95,
        y: -40,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => setActive(item),
      })
      .to(hand, {
        scale: 1.05,
        y: -40,
        duration: 0.18,
        ease: "power2.inOut",
        onStart: () => setActive(""),
      });
  };

  const stopHoverTap = () => {
    hoverTl.current?.kill();
  };

  const handlePress = (target: HTMLElement, item: string) => {
    const hand = handRef.current;
    const nav = navRef.current;
    if (!hand || !nav) return;

    hoverTl.current?.kill();
    pressTl.current?.kill();

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const x = targetRect.left - navRect.left + targetRect.width / 2 - 30;

    pressTl.current = gsap.timeline();

    pressTl.current
      .set(hand, {
        display: "block",
        x,
        y: -80,
        rotate: 180,
      })
      .to(hand, { y: -20, duration: 0.4, ease: "power3.out" })
      .to(hand, {
        scale: 0.8,
        duration: 0.2,
        ease: "power1.inOut",
        onComplete: () => setActive(item),
      })
      .to(hand, { y: -120, duration: 0.5, ease: "power3.in" })
      .set(hand, { display: "none" });
  };

  /* ───────────────── Sticky + hide on scroll down, show on slight up ───────────────── */

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const showHeader = () => {
      const el = headerRef.current;
      if (!el) return;
      if (shownRef.current) return;

      shownRef.current = true;
      gsap.to(el, {
        y: 0,
        autoAlpha: 1,
        duration: 0.28,
        ease: "power2.out",
      });
    };

    const hideHeader = () => {
      const el = headerRef.current;
      if (!el) return;
      if (!shownRef.current) return;

      shownRef.current = false;
      gsap.to(el, {
        y: -90,
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.in",
      });
    };

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        const y = window.scrollY;
        const lastY = lastYRef.current;

        // sticky bg after small scroll
        setIsSticky(y > 12);

        const delta = y - lastY;

        // Always show near top
        if (y < 80) {
          showHeader();
          lastYRef.current = y;
          return;
        }

        // If scrolling down enough => hide
        if (delta > 8) hideHeader();

        // If scrolling up slightly => show
        if (delta < -6) showHeader();

        lastYRef.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ───────────────── Mobile UX (lock scroll, close on resize) ───────────────── */

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    // Close mobile menu when switching to desktop
    if (isDesktop && mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  const handleMobileNavigate = (label: string) => {
    setActive(label);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Header: becomes fixed + white bg on scroll; hides/shows via GSAP */}
      <header
        ref={headerRef}
        className={`left-0 w-full z-50 transition-colors duration-300 ${
          isSticky
            ? "fixed top-0 bg-white/92 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            : "absolute top-0 bg-transparent"
        }`}
      >
        <div className="w-[90%] mx-auto flex items-center justify-between py-3 md:py-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo/logo.png" alt="Logo" width={120} height={60} />
          </Link>

          {/* Desktop Navbar */}
          <nav ref={navRef} className="hidden md:flex items-center gap-10 relative">
            {isDesktop ? (
              <Image
                ref={handRef}
                src="/babyHand.png"
                alt="baby hand"
                width={60}
                height={60}
                className="absolute top-0 left-0 hidden pointer-events-none z-50"
              />
            ) : null}

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onMouseEnter={(e) =>
                  isDesktop && startHoverTap(e.currentTarget as unknown as HTMLElement, item.label)
                }
                onMouseLeave={stopHoverTap}
                onClick={(e) => handlePress(e.currentTarget as unknown as HTMLElement, item.label)}
                className={`relative font-medium transition-all text-center duration-200 px-2 py-8 min-w-20 ${
                  active === item.label ? "bg-[#45685e] text-white rounded-b-full" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="h-10 w-10 rounded-full border border-black/10 bg-white/60 backdrop-blur flex items-center justify-center shadow-sm"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>

          {/* CTA */}
          <button className="bg-babyCare text-black px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hidden md:block">
            Buy Now
          </button>
        </div>
      </header>

      {/* Mobile Drawer + Backdrop */}
      <div
        className={`fixed inset-0 z-[999] md:hidden transition ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-black/10 transition-transform duration-250 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
            <div className="flex items-center gap-3">
              <Image src="/logo/logo.png" alt="Logo" width={100} height={50} />
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="h-10 w-10 rounded-full border border-black/10 bg-white flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-5 py-5">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = active === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    onClick={() => handleMobileNavigate(item.label)}
                    className={` px-4 py-3 text-sm font-semibold border transition ${
                      isActive
                        ? "bg-[#45685e] text-white! border-transparent"
                        : "bg-white text-zinc-900 border-black/10 hover:bg-zinc-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full bg-babyCare text-black px-6 py-3 rounded-2xl text-sm font-bold shadow-md active:scale-[0.99] transition"
              >
                Buy Now
              </button>

              <p className="mt-4 text-xs text-zinc-500 leading-relaxed">
                Premium baby essentials—safe, soft, and designed for comfort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so fixed header doesn't cover content */}
      <div className={`${isSticky ? "h-18 md:h-21" : "h-0"}`} />
    </>
  );
};