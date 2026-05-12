"use client";
import React from "react";
import HeroScene from "../components/HeroScene";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { useApp } from "../context/AppContext";

export default function Home() {
  const { products } = useApp();

  const featuredArticles = products ? products.slice(0, 3) : [];

  const blogPreview = [
    {
      id: 1,
      title: "The Art of Minimalist Fashion",
      date: "Apr 20, 2026",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
    },
    {
      id: 2,
      title: "Summer 2026: Floral & Modest",
      date: "Apr 25, 2026",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    },
  ];

  return (
    <main className="relative w-full bg-transparent">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <HeroScene />

        <div className="container mx-auto px-6 z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-orange-400">
              Evolution of Luxury
            </span>
          </div>

          <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-[-0.05em] leading-none mb-6 flex flex-wrap justify-center items-center relative">
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px white" }}
            >
              LEVIO
            </span>

            <span className="italic font-extralight text-orange-500 md:-ml-12 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              OSA
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-white/60 font-light text-sm md:text-base mb-10">
            Crafting a new digital reality where high-end fashion meets liquid
            glass aesthetics.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-black font-bold uppercase text-[11px] tracking-widest rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-xl">
              <Link href="/collection">Explore Collection</Link>
            </button>
          </div>
        </div>
      </section>

      {/* --- FABRIC COLLECTIONS --- */}
      <section className="relative z-20 container mx-auto px-4 sm:px-6 py-14 md:py-20">

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar pb-2">

          <div className="min-w-[82%] sm:min-w-[60%] md:min-w-full snap-center">
            <CollectionCard
              title="Cotton"
              desc="Pure Comfort"
              link="/collection?cat=Cotton"
            />
          </div>

          <div className="min-w-[82%] sm:min-w-[60%] md:min-w-full snap-center">
            <CollectionCard
              title="Chikankari"
              desc="Heritage Art"
              link="/collection?cat=Chikankari"
            />
          </div>

          <div className="min-w-[82%] sm:min-w-[60%] md:min-w-full snap-center">
            <CollectionCard
              title="Chiffon"
              desc="Elegant Flow"
              link="/collection?cat=Chiffon"
            />
          </div>

        </div>
      </section>

      {/* --- PRODUCT SECTION --- */}
      <section className="relative z-20 container mx-auto px-6 py-32">
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white">
            The{" "}
            <span className="text-orange-500 italic font-light">
              Drop
            </span>
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar pb-10 md:grid md:grid-cols-3 md:overflow-visible">
          {featuredArticles.map((item) => (
            <div
              key={item.id}
              className="min-w-[85%] snap-center md:min-w-full"
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/collection">
            <button className="group relative px-12 py-4 rounded-full border border-white/10 text-[10px] tracking-[0.5em] uppercase text-white/50 hover:text-white transition-all overflow-hidden">
              <span className="relative z-10">
                View All Articles — {products?.length || 0}
              </span>

              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>

      {/* --- BLOG SECTION --- */}
      <section className="relative z-20 container mx-auto px-6 py-32 border-t border-white/5">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
            The{" "}
            <span className="text-orange-500 italic font-light">
              Archive
            </span>
          </h2>

          <Link
            href="/blog"
            className="text-[10px] font-black uppercase tracking-widest border-b border-orange-500 pb-1 hover:text-orange-500 transition-all"
          >
            Read All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPreview.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group"
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 bg-white/5 backdrop-blur-sm">
                <img
                  src={post.image}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  alt={post.title}
                />
              </div>

              <p className="text-orange-500 text-[10px] font-bold tracking-widest uppercase mb-2">
                {post.date}
              </p>

              <h3 className="text-2xl font-black italic tracking-tighter uppercase group-hover:pl-4 transition-all duration-300 text-white">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}

const CollectionCard = ({ title, desc, link }) => (
  <Link href={link}>
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="
        relative
        h-44 sm:h-52 md:h-64
        rounded-[2rem]
        overflow-hidden
        group
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        cursor-pointer
        flex items-center justify-center
        text-center
        px-6 py-8
      "
    >

      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 opacity-60" />

      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-2xl" />

      <div className="relative z-10">

        <p
          className="
            text-orange-500
            text-[8px] sm:text-[9px]
            font-black
            tracking-[0.35em]
            uppercase
            mb-2 sm:mb-3
            opacity-80
            group-hover:opacity-100
            transition-all
          "
        >
          {desc}
        </p>

        <h3
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-black
            italic
            tracking-tight
            uppercase
            text-white
            leading-none
            drop-shadow-2xl
          "
        >
          {title}
        </h3>

      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tr from-white/[0.08] to-transparent" />

      <div
        className="
          absolute inset-0
          rounded-[2rem]
          border border-white/5
          group-hover:border-orange-500/20
          transition-all duration-500
        "
      />

    </motion.div>
  </Link>
);