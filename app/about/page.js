"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative w-full bg-transparent pt-40 pb-20 overflow-hidden">
      {/* Background Ambient Glows for Luxury Depth (Maintained) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {/* --- REFINED HERO SECTION (Maintained Luxury Typo) --- */}
        <header className="mb-48 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-orange-500/50" />
            <p className="text-orange-500 text-[9px] font-bold tracking-[0.6em] uppercase">
              Our Philosophy
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-7xl font-extralight uppercase tracking-[-0.02em] text-white leading-[1.1]"
          >
            Timeless <span className="font-black italic text-transparent" style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.3)' }}>Elegance</span> <br />
            For The <span className="text-orange-500 italic font-light drop-shadow-[0_0_30px_rgba(249,115,22,0.2)]">Modern Woman.</span>
          </motion.h1>
        </header>

        {/* --- PREMIUM CONTENT GRID (Maintained Split Layout) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-60">
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-4 bg-white/5 blur-xl rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
              <img
                src="abt-img.png"
                alt="Minimalist Aesthetic"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10 pl-0 lg:pl-12"
          >
            <h2 className="text-2xl font-black uppercase italic text-white tracking-tighter">The Vision</h2>

            <div className="space-y-6">
              <p className="text-white/40 font-light leading-relaxed text-base md:text-lg">
                Levioosa is built for women who believe elegance never needs to be loud. Our pieces are designed to bring together timeless silhouettes, soft textures, and effortless sophistication for every season.
              </p>

              <p className="text-white/40 font-light leading-relaxed text-base md:text-lg">
                Inspired by modern femininity and refined minimalism, each collection reflects a balance of comfort, confidence, and quiet luxury — crafted through premium fabrics, graceful tailoring, and carefully curated details.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
              <div>
                <p className="text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-2">Craftsmanship</p>
                <p className="text-white text-xs font-light">Premium Fabrics & Timeless Tailoring</p>
              </div>

              <div>
                <p className="text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-2">Identity</p>
                <p className="text-white text-xs font-light">Modern Femininity & Quiet Luxury</p>
              </div>
            </div>
          </motion.div>

        </section>

        {/* --- UPGRADED BRAND STATS SECTION (Restored to Original Bold Italic Orange) --- */}
        <section className="relative py24 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16">
            <StatBox label="Established" value="2025" />
            <StatBox label="Style" value="Timeless" />
            <StatBox label="Aesthetic" value="Minimal" />
            <StatBox label="Collections" value="Limited" />
          </div>
        </section>

      </div>
    </main>
  );
}

// Updated StatBox to match the original bold/italic orange design from screencapture-localhost-3000-about-2026-04-27-18_10_24-stats-section.jpg
const StatBox = ({ label, value }) => (
  <div className="text-center group">
    <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold mb-4 group-hover:text-orange-500 transition-colors">
      {label}
    </p>
    <p className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-orange-500 hover:tracking-normal transition-all duration-300">
      {value}
    </p>
  </div>
);