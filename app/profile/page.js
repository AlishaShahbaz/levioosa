"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Package,
  Heart,
  User,
  ShoppingBag,
  X,
  ArrowRight,
} from "lucide-react";

import { useApp } from "../../context/AppContext";
import { useCart } from "../../context/CartContext";

export default function ProfilePage() {
  const { data: session } = useSession();

  // =========================
  // CONTEXTS
  // =========================
  const {
    wishlist = [],
    removeFromWishlist,
    updateWishlistCount,
  } = useApp();

  const {
    cart = [],
    removeFromCart,
  } = useCart();

  // =========================
  // STATES
  // =========================
  const [activeTab, setActiveTab] = useState("identity");
  const [mounted, setMounted] = useState(false);

  // =========================
  // HYDRATION FIX
  // =========================
  useEffect(() => {
    setMounted(true);
  }, []);

  // =========================
  // UNIQUE WISHLIST
  // =========================
  const uniqueWishlist = useMemo(() => {
    if (!Array.isArray(wishlist)) return [];

    return wishlist.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (x) =>
            (x._id || x.id || x.productId) ===
            (item._id || item.id || item.productId)
        )
    );
  }, [wishlist]);

  // =========================
  // UNIQUE CART
  // =========================
  const uniqueCart = useMemo(() => {
    if (!Array.isArray(cart)) return [];

    return cart.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (x) =>
            x.id === item.id &&
            x.size === item.size
        )
    );
  }, [cart]);

  // =========================
  // REMOVE WISHLIST
  // =========================
  const handleRemoveWishlist = async (item) => {
    try {
      await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item._id || item.id || item.productId,
        }),
      });

      if (removeFromWishlist) {
        removeFromWishlist(
          item._id || item.id || item.productId
        );
      }

      if (updateWishlistCount) {
        updateWishlistCount();
      }
    } catch (error) {
      console.error("Wishlist remove error:", error);
    }
  };

  // =========================
  // REMOVE CART
  // =========================
  const handleRemoveCart = async (item) => {
    try {
      if (removeFromCart) {
        await removeFromCart(item.id, item.size);
      }
    } catch (error) {
      console.error("Cart remove error:", error);
    }
  };

  // =========================
  // TABS
  // =========================
  const tabs = [
    {
      id: "identity",
      label: "Identity",
      icon: <User size={14} />,
    },
    {
      id: "orders",
      label: "Orders",
      icon: <Package size={14} />,
    },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: <Heart size={14} />,
      count: uniqueWishlist.length,
    },
    {
      id: "cart",
      label: "Bag",
      icon: <ShoppingBag size={14} />,
      count: uniqueCart.length,
    },
  ];

  // =========================
  // LOADING
  // =========================
  if (!mounted) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          Loading Vault...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-transparent text-white pt-44 px-6 lg:px-20 pb-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">

        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-600/10 blur-[150px] rounded-full opacity-50" />

        <div className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full opacity-30" />

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <header className="mb-16 border-b border-white/10 pb-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              User <span className="text-[#ff4d00]">Vault</span>
            </h1>

            <div className="flex items-center gap-3 mt-6">

              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]" />

              <p className="text-[10px] text-white/40 uppercase tracking-[0.6em] font-black">
                Authorized: {session?.user?.name || "Guest User"}
              </p>

            </div>

          </motion.div>

        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* SIDEBAR */}
          <div className="lg:col-span-3 space-y-3">

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full group flex items-center justify-between px-7 py-6 rounded-[2rem] transition-all duration-700 border ${
                  activeTab === tab.id
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.02] text-white/30 border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >

                <div className="flex items-center gap-4">

                  <span
                    className={
                      activeTab === tab.id
                        ? "text-black"
                        : "text-[#ff4d00]"
                    }
                  >
                    {tab.icon}
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    {tab.label}
                  </span>

                </div>

                {tab.count > 0 && (
                  <span
                    className={`text-[9px] px-2.5 py-0.5 rounded-full font-black ${
                      activeTab === tab.id
                        ? "bg-black text-white"
                        : "bg-[#ff4d00] text-black"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}

              </button>
            ))}

          </div>

          {/* CONTENT */}
          <div className="lg:col-span-9">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="bg-white/[0.02] border border-white/10 backdrop-blur-[120px] rounded-[3rem] p-8 md:p-14 min-h-[600px]"
              >

                {/* IDENTITY */}
                {activeTab === "identity" && (
                  <div className="space-y-16 pt-4">

                    <div>

                      <p className="text-[9px] text-[#ff4d00] uppercase tracking-[0.5em] font-black mb-4 italic">
                        Member Registry //
                      </p>

                      <p className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic text-white/90">
                        {session?.user?.name || "Guest User"}
                      </p>

                    </div>

                    <div>

                      <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black mb-4">
                        Access Key Identification
                      </p>

                      <p className="text-2xl md:text-3xl text-white/60 tracking-tight font-black italic">
                        {session?.user?.email || "No Email"}
                      </p>

                    </div>

                  </div>
                )}

                {/* WISHLIST */}
                {activeTab === "wishlist" && (
                  <div className="grid gap-6">

                    {uniqueWishlist.length > 0 ? (
                      uniqueWishlist.map((item, idx) => (

                        <div
                          key={`${item._id || item.id || item.productId}-${idx}`}
                          className="flex items-center justify-between p-6 bg-black/40 border border-white/5 rounded-[2.5rem]"
                        >

                          <div className="flex items-center gap-8">

                            <div className="w-24 h-28 bg-zinc-900 rounded-[1.5rem] overflow-hidden">

                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />

                            </div>

                            <div>

                              <h3 className="text-[11px] uppercase font-black tracking-widest text-white/90">
                                {item.name}
                              </h3>

                              <p className="text-sm text-[#ff4d00] mt-2 font-black italic">
                                {item.price}
                              </p>

                            </div>

                          </div>

                          <button
                            onClick={() => handleRemoveWishlist(item)}
                            className="p-4 text-white/20 hover:text-red-500 transition-all"
                          >
                            <X size={20} />
                          </button>

                        </div>

                      ))
                    ) : (
                      <div className="h-80 flex items-center justify-center opacity-20 uppercase tracking-[1em] text-[10px] font-black italic">
                        Empty Wishlist
                      </div>
                    )}

                  </div>
                )}

                {/* CART */}
                {activeTab === "cart" && (
                  <div className="space-y-6">

                    {uniqueCart.length > 0 ? (
                      <>

                        {uniqueCart.map((item, idx) => (

                          <div
                            key={`${item.id}-${item.size}-${idx}`}
                            className="flex items-center justify-between p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem]"
                          >

                            <div className="flex items-center gap-10">

                              <span className="text-[10px] text-[#ff4d00] font-black italic tracking-[0.3em]">
                                #0{idx + 1}
                              </span>

                              <div>

                                <h3 className="text-sm uppercase tracking-tighter font-black italic text-white/80">
                                  {item.title || item.name}
                                </h3>

                                <p className="text-xs text-white/30 mt-1">
                                  Size: {item.size || "N/A"}
                                </p>

                                <p className="text-xs text-white/30">
                                  Qty: {item.quantity || 1}
                                </p>

                              </div>

                            </div>

                            <div className="flex items-center gap-12">

                              <p className="text-lg font-black tracking-tighter italic">
                                {item.price}
                              </p>

                              <button
                                onClick={() => handleRemoveCart(item)}
                                className="text-white/10 hover:text-white transition-all"
                              >
                                <X size={20} />
                              </button>

                            </div>

                          </div>

                        ))}

                        <button className="w-full mt-12 py-8 bg-white text-black text-[11px] font-black uppercase tracking-[0.5em] rounded-[2rem] hover:bg-[#ff4d00] hover:text-white transition-all duration-700 flex items-center justify-center gap-6">
                          Finalize Assets <ArrowRight size={18} />
                        </button>

                      </>
                    ) : (
                      <div className="h-80 flex items-center justify-center opacity-20 uppercase tracking-[1em] text-[10px] font-black italic">
                        Zero Inventory
                      </div>
                    )}

                  </div>
                )}

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </main>
  );
}