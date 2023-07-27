"use client";
import { motion } from "framer-motion";

import { Button } from "@/components";
import { ArrowRight, ArrowRightUp } from "@/components/icons";
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
      <div className="flex flex-col justify-center items-center">
        <p className="font-NouvelR-Semibold text-[40px]">{"Testing Renault's FONT"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <p className="font-NouvelR-Extrabold text-[24px]">NouvelR-Extrabold</p>
            <p className="font-NouvelR-Bold text-[24px]">NouvelR-Bold</p>
            <p className="font-NouvelR-Semibold text-[24px]">NouvelR-Semibold</p>
            <p className="font-NouvelR-Regular text-[24px]">NouvelR-Regular</p>
            <p className="font-NouvelR-Book text-[24px]">NouvelR-Book</p>
            <p className="font-NouvelR-Light text-[24px]">NouvelR-Light</p>
          </div>
          <div className="">
            <p className="font-NouvelR-KR-Extrabold text-[24px]">엑스트라볼드</p>
            <p className="font-NouvelR-KR-Bold text-[24px]">볼드</p>
            <p className="font-NouvelR-KR-Semibold text-[24px]">세미볼드</p>
            <p className="font-NouvelR-KR-Regular text-[24px]">레귤러</p>
            <p className="font-NouvelR-KR-Book text-[24px]">북</p>
            <p className="font-NouvelR-KR-Light text-[24px]">라이트</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <Button>
          <span className="ml-1 leading-4">COLLECTION</span> <ArrowRightUp />
        </Button>
        <Button>
          <span className="ml-4 leading-4">BEGIN</span> <ArrowRight />
        </Button>
      </div>
      <MainBanner />
      <ScrollableMaskedContainer />
      <TestSlider />
    </motion.main>
  );
}
