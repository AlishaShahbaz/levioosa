"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const BLOG_POSTS = {
  "1": {
    title: "Minimalist Fashion for Women: Western & Eastern Fusion Style Guide 2026",
    category: "FASHION GUIDE",
    date: "APR 20, 2026",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    content: `Minimalist fashion for women in 2026 is no longer just about simplicity — it is about intentional styling, premium fabrics, and powerful presence. At Levioosa, minimalist fashion is redefined through a fusion of western silhouettes and eastern elegance.

Minimalist outfits focus on clean cuts, neutral tones, and high-quality materials. Whether you are styling a western co-ord set or an eastern-inspired fusion outfit, the key is structure, fit, and fabric quality.

In Pakistan, the rise of western fashion for women is shifting towards modest yet modern dressing. Fusion wear combines the best of both worlds — modest eastern influence with bold western tailoring.

Key elements of minimalist fashion:
- Neutral color palettes (black, white, beige)
- Structured silhouettes
- Premium lawn, cotton, and silk blends
- Subtle detailing instead of loud branding

Why minimalist fashion is trending in 2026:
Women are moving away from fast fashion and focusing on timeless wardrobe essentials. Minimalist clothing offers versatility, elegance, and long-term value.

How to style minimalist outfits:
Pair a structured western top with eastern wide-leg trousers. Add minimal accessories and let the outfit speak through its fabric and cut.

Levioosa's approach:
We design minimalist fusion wear that enhances confidence, not noise. Every piece is crafted to deliver presence, elegance, and modern identity.

If you are looking for minimalist western outfits in Pakistan or fusion fashion ideas for women, Levioosa is where modern design meets timeless sophistication.`
  },

  "2": {
    title: "Summer Outfits for Women 2026: Western & Eastern Fusion Trends",
    category: "COLLECTION",
    date: "APR 25, 2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    content: `Summer outfits for women in 2026 are all about breathable fabrics, bold silhouettes, and fusion styling. Levioosa’s Summer 2026 collection blends western cuts with eastern modest fashion to create outfits that are both stylish and wearable in warm weather.

Top summer fashion trends for women:
- Floral prints with minimal design
- Lightweight lawn and cotton fabrics
- Loose silhouettes for airflow and comfort
- Western cuts with eastern modest styling

Fusion fashion is dominating the Pakistani fashion scene. Women are now choosing outfits that combine global trends with cultural elegance.

Best summer outfit ideas:
- Western co-ord sets with eastern patterns
- Flowy maxi dresses with modest cuts
- Minimalist tops with wide-leg trousers
- Lightweight fusion wear for daily styling

Why fusion wear is perfect for summer:
Fusion outfits allow flexibility. You get comfort from eastern fabrics and style from western tailoring.

Best Summer Outfits for Women in Pakistan:
In Pakistan’s hot weather, breathable fabrics like lawn and cotton are essential. Western fusion outfits provide both comfort and style, making them perfect for daily wear, casual outings, and events.

Where to Buy Summer Outfits for Women:
If you are looking for summer dresses for women, western wear in Pakistan, or fusion clothing brands, Levioosa offers premium designs crafted for both comfort and style.

Levioosa Summer 2026 Collection:
Designed for modern women who want to stand out without compromising comfort. Each outfit is crafted using breathable materials and premium finishing.

Launching May 10 — limited drop. Don’t miss out.`
  },

  "3": {
    title: "Behind the Scenes: How Levioosa Designs Premium Fusion Wear for Women",
    category: "INSIDE",
    date: "APR 27, 2026",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop",
    content: `Ever wondered how premium women's clothing brands design fusion wear? At Levioosa, every outfit goes through a detailed creative and production process to ensure quality, fit, and modern aesthetics.

Step 1: Trend Research
We analyze global fashion trends, including western fashion and eastern wear evolution, to create designs that are relevant and forward-thinking.

Step 2: Fabric Selection
We use premium lawn, cotton, and blended fabrics to ensure comfort, especially for summer collections in Pakistan.

Step 3: Design & Fusion Concept
Each piece is designed by combining western silhouettes with eastern modest elements. This creates a unique identity that stands out in the market.

Step 4: Tailoring & Fit
Precision tailoring ensures that every outfit fits perfectly. Structure is what separates premium brands from average clothing.

Step 5: Final Presentation
From photoshoots to digital presentation, every detail is crafted to maintain a luxury aesthetic.

Why Levioosa stands out:
- Focus on fusion fashion
- Premium fabric quality
- Modern yet modest designs
- Attention to detail

If you are looking for high-quality women’s clothing brands in Pakistan that offer western and eastern fusion wear, Levioosa is built for that purpose.

This is not fast fashion. This is designed identity.`
  }
};

const SingleBlogPost = () => {
  const { id } = useParams();
  const router = useRouter();
  const post = BLOG_POSTS[id];

  if (!post) return <div className="min-h-screen flex items-center justify-center text-white">Post not found...</div>;

  return (
    /* Theme Upgrade: Background transparent taake global bg chale aur relative for positioning */
    <main className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 md:px-12 font-sans relative overflow-hidden">
      
      {/* THEME ELEMENTS: Orange and Purple Aura Blobs added without changing structure */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute -left-[10%] top-[10%] w-[700px] h-[700px] bg-orange-600/10 blur-[130px] rounded-full opacity-50" />
        <div className="absolute -right-[10%] top-[30%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff4d00] mb-12 hover:text-white transition-colors"
        >
          ← Back to Archive
        </button>

        <motion.header 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-12"
        >
          <span className="bg-[#ff4d00] text-black text-[9px] font-black tracking-widest uppercase px-4 py-1 rounded-sm">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-tight text-white">
            {post.title}
          </h1>
          <p className="text-white/40 text-xs font-bold tracking-[0.2em]">{post.date} — BY LEVIOOSA TEAM</p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video w-full rounded-3xl overflow-hidden mb-16 border border-white/5 bg-zinc-900/40 backdrop-blur-sm"
        >
          <img 
            src={post.image} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            alt="summer outfits for women 2026 western eastern fusion fashion Levioosa"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light whitespace-pre-line">
            {post.content}
          </p>
        </motion.div>

       

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">Shop the featured looks</p>
          <Link href="/">
            <button className="bg-white text-black px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[#ff4d00] hover:text-white transition-all duration-500">
              Explore Collection
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SingleBlogPost;