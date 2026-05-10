"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../../components/ProductCard";
import { LEVIOOSA_ARTICLES } from "../../context/AppContext";

export default function CollectionPage() {
  const products = LEVIOOSA_ARTICLES;

  const categories = ["All", "Cotton", "Chikankari", "Chiffon", "Linen"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    /* bg-transparent rakha hai taake layout.js wala LiquidGlassBg nazar aaye */
    <main className="min-h-screen bg-transparent pt-40 pb-20 relative">
      
      {/* --- THEME UPGRADE: Specific Aura Blobs for Collection Page --- */}
      {/* Ye blobs aapke main layout ke upar layer banayenge jo Image 2 wala exact color denge */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Left Orange Glow (Stronger for Collection) */}
        <div className="absolute -left-[10%] top-[10%] w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full" />
        {/* Right Purple Glow (Lower corner) */}
        <div className="absolute -right-[5%] bottom-[10%] w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        
        {/* Header: Original Image 1 Structure Restored */}
        <header className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6"
            >
              The <span className="text-orange-500 italic font-light">Archive</span>
            </motion.h1>
            <p className="text-white/40 text-xs tracking-[0.4em]  font-light leading-relaxed">
              Curated essentials for the modern digital reality. <br/> 
              Specializing in <span className="text-white font-bold">Cotton, Chikankari, and Chiffon</span> iterations.
            </p>
          </div>

          {/* Filter Navigation: Image 1 Style with Theme-Matching Underline */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-white/5 pb-4 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative pb-2 ${
                  activeTab === cat ? "text-orange-500" : "text-white/20 hover:text-white"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTabUnderline" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Grid: Animated & Glass Touches */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group"
              >
                <ProductCard 
                  id={product.id} 
                  title={product.title} 
                  price={product.price} 
                  image={product.image} 
                  category={product.category}
                />
                {/* Visual indicator: Glass Tag */}
                <div className="mt-4">
                   <span className="text-[8px] text-white/30 uppercase tracking-[0.3em] border border-white/10 bg-white/[0.03] backdrop-blur-md px-3 py-1 rounded-full">
                     {product.category}
                   </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-white/20 uppercase text-[10px] tracking-widest italic">No items found in this category of the archive.</p>
          </div>
        )}
      </div>
    </main>
  );
}