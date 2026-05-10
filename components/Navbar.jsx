"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  User,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";

import { useApp } from "../context/AppContext";
import { useCart } from "../context/CartContext";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryNavbar() {
  const { wishlistCount } = useApp();
  const { cartCount, setIsOpen } = useCart();
  const { data: session } = useSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ DROPDOWNS
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] =
    useState(false);

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] =
    useState(false);

  const dropdownRef = useRef(null);

  // ✅ OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsDesktopDropdownOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const navLinks = [
    { name: "Collection", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="fixed top-3.5 w-full flex justify-center z-[100] px-4">
      <nav className="w-full max-w-7xl h-16 md:h-20 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-full px-6 md:px-10 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

        {/* MOBILE MENU BTN */}
        <div className="flex lg:hidden flex-1">
          <Menu
            size={22}
            className="text-white/70 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>

        {/* LOGO */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href="/" className="inline-block group">
            <img
              src="/40350-removebg-preview.png"
              alt="Levioosa Logo"
              className="h-8 md:h-12 w-auto object-contain brightness-110 contrast-125 transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex flex-[2] justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50 hover:text-white transition-all hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-3 md:gap-5">

          <Search
            size={18}
            className="hidden md:block text-white/60 hover:text-white cursor-pointer transition-colors"
          />

          {/* WISHLIST */}
          <Link href="/wishlist" className="relative group">
            <Heart
              size={18}
              className="text-white/60 group-hover:text-purple-400 cursor-pointer transition-colors"
            />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black border border-black">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative group cursor-pointer"
          >
            <ShoppingBag
              size={18}
              className="text-white/60 group-hover:text-green-400 cursor-pointer transition-colors"
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black text-black border border-black">
                {cartCount}
              </span>
            )}
          </div>

          {/* USER */}
          <div className="relative" ref={dropdownRef}>
            {session ? (
              <>
                {/* DESKTOP USER */}
                <div
                  className="relative group cursor-pointer hidden lg:flex"
                  onClick={() =>
                    setIsDesktopDropdownOpen(
                      !isDesktopDropdownOpen
                    )
                  }
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center border border-orange-400 shadow-[0_0_20px_rgba(255,115,0,0.3)]">
                    <span className="text-black font-black text-[10px] uppercase">
                      {session.user.name?.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* MOBILE USER */}
                <div
                  className="relative group cursor-pointer flex lg:hidden"
                  onClick={() =>
                    setIsMobileDropdownOpen(
                      !isMobileDropdownOpen
                    )
                  }
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center border border-orange-400 shadow-[0_0_20px_rgba(255,115,0,0.3)]">
                    <span className="text-black font-black text-[10px] uppercase">
                      {session.user.name?.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* DESKTOP DROPDOWN */}
                <AnimatePresence>
                  {isDesktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="hidden lg:block absolute right-0 mt-4 w-48 bg-[#0f0f0f]/90 border border-white/10 backdrop-blur-3xl rounded-2xl p-2 shadow-2xl z-[110]"
                    >
                      <Link
                        href="/profile"
                        onClick={() =>
                          setIsDesktopDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 text-[9px] uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        <LayoutDashboard size={12} />
                        Profile
                      </Link>

                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[9px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-left"
                      >
                        <LogOut size={12} />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* MOBILE DROPDOWN */}
                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="lg:hidden absolute right-0 top-12 w-44 bg-[#0f0f0f]/95 border border-white/10 backdrop-blur-3xl rounded-2xl p-2 shadow-2xl z-[110]"
                    >
                      <Link
                        href="/profile"
                        onClick={() =>
                          setIsMobileDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 text-[9px] uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        <LayoutDashboard size={12} />
                        Profile
                      </Link>

                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[9px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-left"
                      >
                        <LogOut size={12} />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href="/login"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
              >
                <User
                  size={14}
                  className="text-white/80"
                />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050505]/95 backdrop-blur-3xl flex flex-col lg:hidden overflow-hidden"
          >
            {/* BG GLOWS */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-orange-500/5 blur-[100px] rounded-full" />

            {/* CLOSE BTN */}
            <div className="absolute top-10 right-10 z-[210]">
              <button
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="p-3 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-90 transition-all"
              >
                <X
                  size={24}
                  className="text-orange-500"
                />
              </button>
            </div>

            {/* CENTER CONTENT */}
            <div className="relative z-[205] flex-1 flex flex-col items-center justify-center px-10">

              {/* LOGO */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="mb-20 flex flex-col items-center"
              >
                <img
                  src="/40350-removebg-preview.png"
                  alt="Levioosa Logo"
                  className="h-20 w-auto brightness-125 drop-shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                />

                <div className="h-[1px] w-12 bg-orange-500/40 mt-6" />
              </motion.div>

              {/* ROUTES */}
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.6,
                    }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="group flex flex-col items-center relative"
                    >
                      <span className="text-[10px] font-black tracking-[0.5em] text-orange-500/30 mb-2 transition-colors group-hover:text-orange-500">
                        0{i + 1}
                      </span>

                      <h2 className="text-4xl font-extralight uppercase tracking-[0.2em] text-white/90 group-hover:text-white transition-all duration-500 group-hover:italic">
                        {link.name}
                      </h2>

                      <div className="absolute -bottom-4 h-[1px] w-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-32 transition-all duration-700" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-[205] p-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-md"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-12 text-center">

                  <div className="group cursor-pointer">
                    <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-black mb-1 group-hover:text-orange-500 transition-colors">
                      Instagram
                    </p>

                    <div className="h-[1px] w-0 bg-orange-500/50 group-hover:w-full transition-all mx-auto" />
                  </div>

                  <div className="group cursor-pointer">
                    <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-black mb-1 group-hover:text-orange-500 transition-colors">
                      Concierge
                    </p>

                    <div className="h-[1px] w-0 bg-orange-500/50 group-hover:w-full transition-all mx-auto" />
                  </div>
                </div>

                <p className="text-[8px] tracking-[1.2em] text-white/10 uppercase font-black text-center mt-4">
                  LEVIOOSA — EDITION 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}