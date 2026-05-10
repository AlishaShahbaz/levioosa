"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const CartSidebar = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    closeCart,
    removeFromCart,
  } = useCart();

  // ✅ SAFE PRICE PARSER
  const parsePrice = (price) => {
    if (!price) return 0;

    // agar number already hai
    if (typeof price === "number") return price;

    // string clean karo
    const cleaned = String(price)
      .replace(/Rs\.?/gi, "")
      .replace(/,/g, "")
      .replace(/[^\d.]/g, "");

    return Number(cleaned) || 0;
  };

  // ✅ FIXED SUBTOTAL
  const cartTotal = cart.reduce((total, item) => {
    const price = parsePrice(item.price);
    const qty = item.quantity || 1;

    return total + price * qty;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1000]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a0a] border-l border-white/10 z-[1001] p-8 flex flex-col overflow-hidden"
          >
            {/* BG */}
            <div className="absolute inset-0 pointer-events-none z-[-1]">
              <div className="absolute -right-[20%] top-[10%] w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full opacity-60" />

              <div className="absolute -left-[20%] bottom-[10%] w-[300px] h-[300px] bg-purple-600/10 blur-[80px] rounded-full opacity-40" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* HEADER */}
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-black uppercase tracking-[0.3em] italic">
                  Your <span className="text-[#ff4d00]">Bag</span>
                </h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-[#ff4d00] transition-colors uppercase text-[10px] font-black tracking-widest"
                >
                  Close //
                </button>
              </div>

              {/* CART ITEMS */}
              <div className="flex-grow overflow-y-auto space-y-8 custom-scrollbar pr-2">
                {cart.length === 0 ? (
                  <div className="mt-20 text-center">
                    <p className="text-white/10 text-[10px] uppercase font-black tracking-[0.5em] italic">
                      Archive is empty
                    </p>
                  </div>
                ) : (
                  cart.map((item, idx) => {
                    const itemPrice = parsePrice(item.price);
                    const qty = item.quantity || 1;
                    const itemTotal = itemPrice * qty;

                    return (
                      <div
                        key={`${item.id}-${item.size}-${idx}`}
                        className="flex gap-6 items-center group"
                      >
                        {/* IMAGE */}
                        <div className="w-24 h-28 bg-zinc-900 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 relative">
                          <img
                            src={item.image}
                            className="w-full h-full object-cover transition-all duration-700"
                            alt={item.title}
                          />
                        </div>

                        {/* INFO */}
                        <div className="flex-grow">
                          <h4 className="text-[11px] font-black uppercase tracking-widest leading-tight">
                            {item.title}
                          </h4>

                          <p className="text-[9px] text-white/30 uppercase mt-1 font-bold tracking-tighter">
                            Size: {item.size} — Qty: {qty}
                          </p>

                          {/* ✅ FIXED PRICE */}
                          <p className="text-[#ff4d00] text-[12px] mt-2 font-black italic tracking-tighter">
                            Rs. {itemTotal.toLocaleString()}
                          </p>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.size)
                          }
                          className="text-white/10 hover:text-red-500 transition-colors text-2xl font-light"
                        >
                          ×
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              {/* FOOTER */}
              {cart.length > 0 && (
                <div className="pt-8 border-t border-white/10 mt-6">
                  <div className="flex justify-between mb-8 items-end">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 italic">
                      Subtotal
                    </span>

                    {/* ✅ FINAL FIX */}
                    <span className="text-2xl font-black text-white italic tracking-tighter">
                      Rs. {cartTotal.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="w-full block"
                  >
                    <button className="w-full bg-white text-black py-5 rounded-full font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#ff4d00] hover:text-white transition-all duration-500 shadow-xl shadow-black/50">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;