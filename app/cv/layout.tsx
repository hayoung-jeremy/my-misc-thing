"use client";
import { motion } from "framer-motion";

export default function CVLayout({ children }: { children: React.ReactNode }) {
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
      className="w-full flex min-h-screen flex-col items-center justify-center bg-gradient-radial from-[#19193f] to-slate-900"
    >
      {children}
    </motion.main>
  );
}
