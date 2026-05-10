"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    id: 1,
    title: "THE ART OF MINIMALIST FASHION",
    category: "LIFESTYLE",
    date: "APR 20, 2026",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Discover why less is always more in the world of luxury streetwear and how to style basics."
  },
  {
    id: 2,
    title: "SUMMER 2026: FLORAL & MODEST",
    category: "COLLECTION",
    date: "APR 25, 2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    excerpt: "A deep dive into our latest 2026 summer drop focusing on modest western silhouettes."
  },
  {
    id: 3,
    title: "BEHIND THE SCENES: LEVIOOSA STUDIO",
    category: "INSIDE",
    date: "APR 27, 2026",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Take a look at our professional studio shoots and the craftsmanship behind every stitch."
  }
];

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-transparent pt-32 pb-20 px-6 md:px-12 font-sans relative overflow-hidden">
      
      {/* --- THEME UPGRADE: Aura Blobs --- */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute -left-[10%] top-[10%] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full opacity-60" />
        <div className="absolute -right-[5%] bottom-[10%] w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-[#ff4d00] text-[10px] font-black tracking-[0.5em] uppercase mb-4"
          >
            Levioosa Editorial
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none"
          >
            THE <span className="text-white/10 outline-text">ARCHIVE</span> BLOG
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-md text-[8px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-white/40 text-[9px] font-bold tracking-widest">{post.date}</p>
                <h3 className="text-xl font-black italic tracking-tighter uppercase group-hover:text-[#ff4d00] transition-colors duration-300 leading-tight text-white">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4 overflow-hidden">
                   <Link href={`/blog/${post.id}`} className="inline-block relative">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 text-white">Read Article</span>
                      <motion.div className="h-[1px] w-0 bg-[#ff4d00] group-hover:w-full transition-all duration-500 mt-1" />
                   </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
      `}</style>
    </main>
  );
};

export default BlogPage;