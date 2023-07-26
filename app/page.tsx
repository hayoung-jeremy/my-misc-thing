"use client";
import { motion } from "framer-motion";

import { Button } from "@/components";
import { MainBanner, ScrollableMaskedContainer, TestSlider } from "@/components/main";

export default function Home() {
  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      className="flex min-h-screen flex-col items-center justify-center bg-black gap-[20px] md:gap-[40px] px-4 pt-[80px] md:pt-[140px] md:px-0"
    >
      <Button />
      <MainBanner />
      <ScrollableMaskedContainer />
      <TestSlider />
    </motion.main>
  );
}
