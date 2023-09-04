"use client";
import { motion } from "framer-motion";

export default function TestCanvasLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      className="w-full min-h-screen bg-[#000]"
    >
      {children}
    </motion.main>
  );
}
