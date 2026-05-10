"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div className="w-1 h-1 bg-orange-500 rounded-full m-auto" />
    </motion.div>
  );
}