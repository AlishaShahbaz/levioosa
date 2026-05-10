"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Trash2, Loader2 } from "lucide-react";
// 1. Context ko import karein
import { useApp } from "../../context/AppContext"; 

export default function WishlistPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // 2. Context se update function nikalain
    const { updateWishlistCount } = useApp();

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        try {
            const res = await fetch('/api/wishlist');
            const data = await res.json();
            setItems(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch wishlist", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (itemId) => {
        try {
            const res = await fetch('/api/wishlist', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: itemId }),
            });

            if (res.ok) {
                // 3. Pehle screen se item hatao (Instant feeling)
                setItems(prev => prev.filter(item => item._id !== itemId));
                
                // 4. NAVBAR KO UPDATE KARO
                updateWishlistCount(); 
            } else {
                console.error("Delete failed on server");
            }
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    return (
        <main className="min-h-screen bg-transparent text-white pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            
            {/* --- THEME UPGRADE: Aura Blobs & Grid --- */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                {/* Levioosa Luxury Auras */}
                <div className="absolute -left-[10%] top-[10%] w-[700px] h-[700px] bg-orange-600/10 blur-[130px] rounded-full opacity-50" />
                <div className="absolute -right-[10%] top-[30%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full opacity-30" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-center" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#ff4d00] text-[9px] tracking-[0.6em] uppercase font-black mb-4"
                    >
                        Vault / Saved Pieces
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none"
                    >
                        Wish <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>List</span>
                    </motion.h1>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-[#ff4d00]" size={32} />
                    </div>
                ) : items.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-white/10 uppercase italic tracking-tighter">Your vault is empty</h2>
                        <Link href="/collection" className="mt-6 inline-block text-[#ff4d00] font-black tracking-widest text-[10px] border-b border-[#ff4d00] pb-1 hover:text-white hover:border-white transition-all">
                            EXPLORE COLLECTIONS
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {items.map((item) => (
                                <motion.div
                                    key={item._id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white/[0.03] border border-white/5 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden p-6 transition-all hover:bg-white/[0.05] hover:border-white/10"
                                >
                                    <div className="relative aspect-[4/5] w-full rounded-[2rem] bg-zinc-900/50 overflow-hidden mb-6 border border-white/5">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                        />
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="absolute top-4 right-4 p-4 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600/40 hover:border-red-500"
                                        >
                                            <Trash2 size={18} className="text-white" />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end px-2">
                                        <div className="space-y-1">
                                            <span className="text-[9px] uppercase tracking-widest text-[#ff4d00] font-black">{item.category}</span>
                                            <h3 className="text-xl font-bold uppercase tracking-tighter italic">{item.name}</h3>
                                            <p className="text-white/40 font-black text-sm uppercase italic tracking-tighter">{item.price}</p>
                                        </div>
                                        <div className="text-right">
                                            <Link href={`/product/${item.productId}`}>
                                                <button className="bg-white text-black px-6 py-2.5 rounded-full font-black uppercase text-[9px] tracking-widest hover:bg-[#ff4d00] hover:text-white transition-all duration-500">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </main>
    );
}